import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Jumpers from '../components/Jumpers';
import { topicsData, articlesData } from '../data/insightsData';

export default function InsightsHubPage() {
  useEffect(() => {
    document.title = 'Insights — AskJuno';
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
              <Link to="/">Home</Link> <span aria-hidden="true">/</span> <span aria-current="page">Insights</span>
            </nav>
            <p className="eyebrow">Insights</p>
            <h1 className="h1 rv in">Insights for the builders of tomorrow.</h1>
            <p className="lead rv in" style={{ '--d': 1 }}>
              Perspectives on AI, software engineering, digital transformation and product strategy to help businesses navigate technology with clarity and confidence.
            </p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Topics</p>
              <h2 className="h2">Explore by topic.</h2>
            </div>
            <div className="topics">
              {topicsData.map((topic) => (
                <Link key={topic.slug} className="topic rv in" to={`/insights/${topic.slug}`}>
                  <span>
                    <small>{topic.count} ARTICLES</small>
                    <b>{topic.name}</b>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="sec alt">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Latest</p>
              <h2 className="h2">All articles.</h2>
            </div>
            <div className="arts">
              {articlesData.map((art, i) => (
                <Link
                  key={art.slug}
                  className={`art ${i === 0 ? 'feat' : ''}`}
                  to={`/insights/${art.topicSlug}/${art.slug}`}
                >
                  <figure>
                    <img src={art.img} alt={art.title} loading="lazy" />
                  </figure>
                  <div className="b">
                    <span className="meta">{art.category} · {art.readTime}</span>
                    <h3>{art.title}</h3>
                    <p>{art.lead}</p>
                    <span className="go">Read article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Jumpers />
    </>
  );
}
