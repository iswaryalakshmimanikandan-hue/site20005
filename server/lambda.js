/**
 * AWS Lambda entry point for AskJuno contact enquiries.
 * Set AWS Lambda Handler configuration to: server/lambda.handler
 */

import { lambdaHandler } from './handler.js';

export const handler = lambdaHandler;
