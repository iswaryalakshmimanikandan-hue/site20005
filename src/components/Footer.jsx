import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="sitefoot">
      <div className="wrap">
        <div className="cols">
          <div className="brand">
            <img src="/assets/logo-light-text.webp" width="120" height="56" alt="AskJuno" />
            <p>Enterprise AI and intelligent automation, responsibly built for modern engineering.</p>
          </div>
          <div>
            <h4>Company</h4>
            <a href="/#about">About us</a>
            <a href="/#industries">Industries</a>
            <a href="/#what-we-do">What we do</a>
            <a href="/#how-we-build">How we build</a>
            <a href="/#stories">Success stories</a>
            <a href="/#technology">Engineering</a>
            <a href="/#faq">FAQ</a>
            <a href="/#contact">Contact us</a>
            <Link to="/insights">Insights</Link>
          </div>
          <div>
            <h4>Services</h4>
            <a href="/#what-we-do">AI solutions</a>
            <a href="/#how-we-build">Software engineering</a>
            <a href="/#what-we-do">Intelligent automation</a>
            <a href="/#technology">Data & analytics</a>
            <a href="/#what-we-do">Digital transformation</a>
            <a href="/#approach">Consulting</a>
          </div>
          <div>
            <h4>Legal &amp; contact</h4>
            <Link to="/privacy">Privacy policy</Link>
            <a href="mailto:enquiry@askjuno.com">enquiry@askjuno.com</a>
            <a href="tel:+917550267584">+91 75502 67584</a>
            <a href="https://www.linkedin.com/company/askjuno/" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
        <div className="bot">
          <span>© 2026 AskJuno Private Limited. All rights reserved.</span>
          <span>Built in India · Engineered for the world.</span>
        </div>
      </div>
    </footer>
  );
}
