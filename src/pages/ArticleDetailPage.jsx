import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Jumpers from '../components/Jumpers';
import { topicsData, articlesData } from '../data/insightsData';

export default function ArticleDetailPage() {
  const { topicSlug, articleSlug } = useParams();

  const article = articlesData.find((a) => a.slug === articleSlug) || articlesData[0];
  const topic = topicsData.find((t) => t.slug === (topicSlug || article.topicSlug)) || topicsData[0];
  const relatedArticles = articlesData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  useEffect(() => {
    document.title = `${article.title} — AskJuno`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [article]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="phero bp">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link> <span aria-hidden="true">/</span> <Link to="/insights">Insights</Link> <span aria-hidden="true">/</span> <Link to={`/insights/${topic.slug}`}>{topic.name}</Link> <span aria-hidden="true">/</span> <span aria-current="page">{article.category}</span>
            </nav>
            <p className="eyebrow">{article.category} · {article.readTime} · {article.date}</p>
            <h1 className="h1 rv in">{article.title}</h1>
            <p className="lead rv in" style={{ '--d': 1 }}>{article.lead}</p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap article">
            <article>
              <figure className="hero-img">
                <img src={article.img} alt={article.title} width="1400" height="700" />
              </figure>
              {article.caption && <figcaption>{article.caption}</figcaption>}

              <p className="summary">{article.summary}</p>

              {article.sections && article.sections.map((sec, idx) => (
                <React.Fragment key={idx}>
                  <h2>{sec.heading}</h2>
                  <p>{sec.content}</p>
                </React.Fragment>
              ))}

              {article.keyPoints && article.keyPoints.length > 0 && (
                <div className="keys">
                  <h3>Key points</h3>
                  <ul>
                    {article.keyPoints.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              )}

              {article.takeaway && (
                <div className="take">
                  <small>THE TAKEAWAY</small>
                  {article.takeaway}
                </div>
              )}
            </article>

            <aside className="aside">
              <div className="box2">
                <small>Topic</small>
                <Link to={`/insights/${topic.slug}`}>{topic.name}</Link>
              </div>

              <div className="box2">
                <small>Related reading</small>
                {relatedArticles.map((rel) => (
                  <Link key={rel.slug} to={`/insights/${rel.topicSlug}/${rel.slug}`}>
                    {rel.title}
                  </Link>
                ))}
              </div>

              <div className="box2" style={{ background: 'var(--ink)', color: 'var(--bg)', borderColor: 'var(--ink)' }}>
                <small style={{ color: 'var(--or)' }}>Got a problem worth solving?</small>
                <span style={{ font: '700 19px/1.25 var(--fd)' }}>Let’s talk about what this could mean for your business.</span>
                <a className="btn sm" href="/#contact" style={{ padding: '0 16px', justifyContent: 'center' }}>
                  Let’s build together →
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <Jumpers />
    </>
  );
}
