import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Jumpers from '../components/Jumpers';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy policy — AskJuno';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="phero bp">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link> <span aria-hidden="true">/</span> <span aria-current="page">Privacy policy</span>
            </nav>
            <p className="eyebrow">Effective date: 11 September 2025</p>
            <h1 className="h1 rv in">Privacy policy</h1>
            <p className="lead rv in" style={{ '--d': 1 }}>
              At AskJuno Private Limited, we are committed to protecting and respecting your privacy. This policy explains how we collect, use, disclose and safeguard your information when you visit our website and use our data extraction services.
            </p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap legal" style={{ maxWidth: 820 }}>
            <h2>1. Information we collect</h2>
            <p>
              <b>Personal information.</b> We collect personal information you provide when you interact with our website and services, including your name, email address, phone number, company name and job title.
            </p>
            <p>
              <b>Non-personal information.</b> We also collect non-personal information such as log data: IP address, browser type, device type, operating system and browsing behaviour.
            </p>

            <h2>2. How we use your information</h2>
            <ul>
              <li>To provide our data extraction, processing and integration services</li>
              <li>To communicate with you and provide customer support</li>
              <li>To analyse usage patterns and improve our services</li>
              <li>To comply with applicable laws and regulations</li>
            </ul>

            <h2>3. Data security</h2>
            <p>
              We take reasonable steps to protect your personal information from unauthorised access, alteration or destruction, using encryption, secure servers and access controls.
            </p>

            <h2>4. Your rights</h2>
            <p>
              You have the right to access, correct or delete your personal information. You can also opt out of marketing emails and request data portability where applicable.
            </p>

            <h2>5. Contact us</h2>
            <p>
              If you have any questions about this privacy policy, contact us at <a href="mailto:enquiry@askjuno.com">enquiry@askjuno.com</a> or <a href="tel:+917550267584">+91 75502 67584</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <Jumpers />
    </>
  );
}
