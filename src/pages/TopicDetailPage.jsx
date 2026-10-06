import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Jumpers from '../components/Jumpers';
import { topicsData, articlesData } from '../data/insightsData';

export default function TopicDetailPage() {
  const { topicSlug } = useParams();
  const topic = topicsData.find((t) => t.slug === topicSlug) || topicsData[0];
  const topicArticles = articlesData.filter((a) => a.topicSlug === topic.slug);
  const otherTopics = topicsData.filter((t) => t.slug !== topic.slug);

  useEffect(() => {
    document.title = `${topic.name} — AskJuno Insights`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [topic]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="phero bp">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link> <span aria-hidden="true">/</span> <Link to="/insights">Insights</Link> <span aria-hidden="true">/</span> <span aria-current="page">{topic.name}</span>
            </nav>
            <p className="eyebrow">{topic.eyebrow}</p>
            <h1 className="h1 rv in">{topic.title}</h1>
            <p className="lead rv in" style={{ '--d': 1 }}>{topic.lead}</p>
            {topic.subtopics && (
              <div className="subtopics rv in" style={{ '--d': 2 }}>
                {topic.subtopics.map(sub => (
                  <span key={sub} className="chip">{sub}</span>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="arts">
              {topicArticles.map((art, idx) => (
                <Link
                  key={art.slug}
                  className={`art ${idx === 0 ? 'feat' : ''}`}
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

            <div className="sec-head" style={{ marginTop: 64 }}>
              <p className="eyebrow">More topics</p>
            </div>
            <div className="topics">
              {otherTopics.map((ot) => (
                <Link key={ot.slug} className="topic" to={`/insights/${ot.slug}`}>
                  <span>
                    <small>TOPIC</small>
                    <b>{ot.name}</b>
                  </span>
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
