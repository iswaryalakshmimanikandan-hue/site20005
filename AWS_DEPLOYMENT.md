# AWS Deployment & Architecture Handover Guide

This guide provides complete instructions for deploying the **AskJuno Contact API Backend** to **AWS Lambda & API Gateway**, and connecting it to the AskJuno static frontend.

---

## 1. Architecture Overview

```
[ Visitor Browser ]
         │
         ▼
[ AWS CloudFront CDN (askjuno.com) ]
    ├── Path /*        ──► [ AWS S3 Bucket ] (Vite Static SPA: index.html, dist/)
    └── Path /api/*    ──► [ AWS API Gateway ]
                                  │
                                  ▼
                         [ AWS Lambda (Node.js 20+) ]
                         (server/lambda.handler)
                                  │
                                  ▼
                         [ Resend REST API ]
                                  │
                                  ▼
                         [ enquiry@askjuno.com ]
```

### Why This Architecture?
- **Hosting-Independent**: The backend code in `server/` has **zero external runtime dependencies** (uses Node.js 18+ native `fetch` and standard HTTP handlers).
- **No Cloudflare Lock-in**: Cloudflare is used strictly for temporary static preview (`wrangler.jsonc` hosts `./dist`). No Cloudflare Workers or Pages Functions are used for backend execution.
- **Identical Frontend Contract**: The contact form in `ContactSection.jsx` calls `POST /api/contact` and expects `{ "success": true }`. When CloudFront routes `/api/*` to API Gateway, no changes to the frontend URL are needed.

---

## 2. Server-Side Environment Variables

Configure these environment variables in AWS Lambda (under **Configuration > Environment variables**) or AWS Secrets Manager:

| Variable | Required | Description | Example / Default |
| :--- | :--- | :--- | :--- |
| `RESEND_API_KEY` | **Yes** | Secret API key from your Resend dashboard | `re_123456789abcdef` |
| `RESEND_FROM_EMAIL` | **Yes** | Sender email address. Use `onboarding@resend.dev` for test mode before domain DNS verification; use `AskJuno <website@askjuno.com>` once verified. | `AskJuno <website@askjuno.com>` |
| `CONTACT_TO_EMAIL` | No | Destination mailbox for leads | `enquiry@askjuno.com` (default) |
| `ALLOWED_ORIGIN` | No | Allowed CORS origin if API Gateway is hosted on a separate domain | `https://askjuno.com` (default: `*`) |

> **Security Warning**: Never commit `RESEND_API_KEY` to Git or expose it in frontend code.

---

## 3. AWS Lambda Function Specification

| Setting | Value | Notes |
| :--- | :--- | :--- |
| **Function Name** | `askjuno-contact-api` | Or per environment (e.g. `askjuno-contact-prod`) |
| **Runtime** | `Node.js 20.x` or `Node.js 22.x` | Native `fetch` support built-in |
| **Architecture** | `arm64` (Graviton2) or `x86_64` | `arm64` is recommended for lower cost |
| **Handler** | `server/lambda.handler` | Points to `server/lambda.js` export |
| **Memory** | `256 MB` | Lightweight; typically runs in < 200ms |
| **Timeout** | `10 seconds` | Allows sufficient time for Resend API call |

---

## 4. API Gateway Configuration

### Option A: HTTP API (Recommended - Lower latency & cost)
1. Create an **API Gateway HTTP API** named `askjuno-api`.
2. Configure CORS under **Develop > CORS**:
   - Access-Control-Allow-Origin: `https://askjuno.com` (or `*`)
   - Access-Control-Allow-Methods: `POST, OPTIONS`
   - Access-Control-Allow-Headers: `Content-Type, Authorization`
3. Create Route:
   - Route: `POST /api/contact`
   - Integration: AWS Lambda function `askjuno-contact-api` (Payload format version: `2.0`)
4. (Optional) Route `OPTIONS /api/contact` if API Gateway CORS auto-mocking is not enabled (the Lambda handler also natively handles `OPTIONS`).

### Option B: CloudFront Unified Domain Routing (Best Practice)
In your CloudFront distribution for `askjuno.com`:
- **Default Cache Behavior (`*`)**: Origin = S3 bucket (`askjuno-static-site`).
- **Additional Cache Behavior (`/api/*`)**:
  - Origin = API Gateway domain (`xxxx.execute-api.region.amazonaws.com`).
  - Cache Policy = `CachingDisabled`.
  - Origin Request Policy = `AllViewerExceptHostHeader`.
  - Allowed HTTP Methods = `GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE`.
  - **Result**: No cross-origin requests. `fetch('/api/contact')` works without CORS configuration!

---

## 5. Deployment Guide for Claude (Instructions to Follow)

When handing this repository over to Claude for AWS deployment:

### Step 1: Package the Lambda Function
Package the `server/` directory and `package.json`:
```bash
# In the project root:
zip -r contact-lambda.zip server/ package.json
```
*(No `node_modules` needed because `server/` uses zero third-party packages).*

### Step 2: Deploy Lambda via AWS CLI
```bash
# 1. Create IAM execution role (if not already created)
aws iam create-role \
  --role-name askjuno-lambda-exec-role \
  --assume-role-policy-document '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]}'

aws iam attach-role-policy \
  --role-name askjuno-lambda-exec-role \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

# 2. Deploy Lambda function
aws lambda create-function \
  --function-name askjuno-contact-api \
  --runtime nodejs20.x \
  --role arn:aws:iam::<ACCOUNT_ID>:role/askjuno-lambda-exec-role \
  --handler server/lambda.handler \
  --zip-file fileb://contact-lambda.zip \
  --environment "Variables={RESEND_API_KEY=re_xxx,RESEND_FROM_EMAIL='AskJuno <website@askjuno.com>',CONTACT_TO_EMAIL='enquiry@askjuno.com'}" \
  --timeout 10 \
  --memory-size 256
```

### Step 3: CloudFormation / AWS SAM Template Snippet
If using AWS SAM (`template.yaml`), Claude can use:

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Description: AskJuno Contact API Service

Parameters:
  ResendApiKey:
    Type: String
    NoEcho: true
    Description: Resend API Key
  ResendFromEmail:
    Type: String
    Default: 'AskJuno <website@askjuno.com>'
  ContactToEmail:
    Type: String
    Default: 'enquiry@askjuno.com'

Resources:
  ContactApiFunction:
    Type: AWS::Serverless::Function
    Properties:
      FunctionName: askjuno-contact-api
      CodeUri: ./
      Handler: server/lambda.handler
      Runtime: nodejs20.x
      Architectures: [arm64]
      Timeout: 10
      MemorySize: 256
      Environment:
        Variables:
          RESEND_API_KEY: !Ref ResendApiKey
          RESEND_FROM_EMAIL: !Ref ResendFromEmail
          CONTACT_TO_EMAIL: !Ref ContactToEmail
      Events:
        ContactPost:
          Type: HttpApi
          Properties:
            Path: /api/contact
            Method: post
        ContactOptions:
          Type: HttpApi
          Properties:
            Path: /api/contact
            Method: options

Outputs:
  ApiEndpoint:
    Description: HTTP API endpoint URL
    Value: !Sub "https://${ServerlessHttpApi}.execute-api.${AWS::Region}.amazonaws.com/api/contact"
```

---

## 6. Resend Domain Verification Checklist

Before sending from `website@askjuno.com`:
1. Log into [Resend Console](https://resend.com/domains).
2. Add domain: `askjuno.com`.
3. Configure the generated DNS records at your DNS registrar (e.g., Route 53 / Cloudflare / GoDaddy):
   - **DKIM** (`TXT` or `CNAME` records)
   - **SPF** (`TXT` record)
   - **Return-Path / MX**
4. Wait for domain verification status to display **Verified**.
5. Once verified, update `RESEND_FROM_EMAIL` to `AskJuno <website@askjuno.com>`.

*(For development or pre-verification testing, Resend allows sending test emails from `onboarding@resend.dev` to your registered account email).*
