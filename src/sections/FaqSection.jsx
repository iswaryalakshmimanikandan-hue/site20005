import React, { useState } from 'react';

const faqs = [
  {
    q: 'What types of businesses do you work with?',
    a: 'We work with growth-stage startups, mid-market companies and established enterprises across finance, healthcare, logistics, e-commerce and SaaS. Whether you need a full-scale digital platform built from scratch or AI integrated into legacy systems, we tailor our engineering approach to your scale.'
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines depend on scope and architecture. Rapid MVPs and proofs of concept typically launch in 4 to 8 weeks, while full enterprise platforms and AI systems generally take 3 to 6 months. We work in 2-week agile sprints so you have continuous visibility and regular working releases.'
  },
  {
    q: 'Do you offer ongoing support and maintenance?',
    a: 'Yes. We offer comprehensive post-launch support, SLA-backed maintenance, cloud infrastructure monitoring and continuous optimisation. Clients can also use dedicated engineering retainers to keep shipping new features, evolve their architecture and keep systems secure.'
  },
  {
    q: 'What is your engagement model?',
    a: 'We offer flexible models based on your objectives: dedicated product engineering teams who embed as an extension of your company, fixed-scope project delivery with transparent milestones, or strategic technology consulting and architecture design.'
  },
  {
    q: 'Who owns the intellectual property and code you build?',
    a: 'You do. All source code, architecture, AI models and intellectual property developed during the engagement belong 100% to your organisation upon completion. We provide full repository access, thorough documentation and complete handover so your team has full autonomy without vendor lock-in.'
  },
  {
    q: 'How do I get started?',
    a: 'Getting started is simple. Submit the contact form below or email us at enquiry@askjuno.com. We’ll schedule a 30-minute discovery call to learn about your goals, evaluate technical requirements and outline a tailored proposal with clear next steps.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index, e) => {
    e.preventDefault();
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="sec" id="faq" aria-labelledby="h-faq">
      <div className="wrap">
        <p className="eyebrow" style={{ marginBottom: 14 }}>FAQ</p>
        <div className="faq">
          <div>
            <h2 id="h-faq" className="h2 rv in">
              Questions, <em>answered.</em>
            </h2>
            <p className="lead rv in" style={{ marginTop: 14 }}>
              Can’t find what you’re looking for? Write to us directly, we’re happy to answer any questions about how we work.
            </p>
            <div className="feat3 rv in">
              <div>
                <span className="num">01</span>
                <b>Quick answers</b>
                <span className="d">Get the information you need, fast.</span>
              </div>
              <div>
                <span className="num">02</span>
                <b>Clear process</b>
                <span className="d">Understand how we work.</span>
              </div>
              <div>
                <span className="num">03</span>
                <b>No surprises</b>
                <span className="d">Transparent, honest and reliable.</span>
              </div>
            </div>
          </div>

        <div className="acc rv in">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <details
                key={i}
                name="faq-accordion"
                open={isOpen}
              >
                <summary onClick={(e) => handleToggle(i, e)}>
                  {faq.q}
                </summary>
                <p>{faq.a}</p>
              </details>
            );
          })}
        </div>
      </div>
    </div>
  </section>
  );
}
