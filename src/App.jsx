import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import InsightsHubPage from './pages/InsightsHubPage';
import TopicDetailPage from './pages/TopicDetailPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/insights" element={<InsightsHubPage />} />
      <Route path="/insights/:topicSlug" element={<TopicDetailPage />} />
      <Route path="/insights/:topicSlug/:articleSlug" element={<ArticleDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
