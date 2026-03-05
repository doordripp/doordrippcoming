import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ComingSoon } from './pages/ComingSoon';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AboutPage } from './pages/AboutPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { CareersPage } from './pages/CareersPage';

export function App() {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    const routes: Record<string, string> = {
      'home': '/',
      'terms': '/terms',
      'privacy': '/privacy-policy',
      'about': '/about',
      'features': '/features',
      'works': '/how-it-works',
      'careers': '/careers'
    };
    navigate(routes[page] || '/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Routes>
      <Route path="/" element={<ComingSoon onNavigate={handleNavigate} />} />
      <Route path="/terms" element={<TermsPage onNavigate={handleNavigate} />} />
      <Route path="/privacy-policy" element={<PrivacyPage onNavigate={handleNavigate} />} />
      <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
      <Route path="/features" element={<FeaturesPage onNavigate={handleNavigate} />} />
      <Route path="/how-it-works" element={<HowItWorksPage onNavigate={handleNavigate} />} />
      <Route path="/careers" element={<CareersPage onNavigate={handleNavigate} />} />
    </Routes>
  );
}