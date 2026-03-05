import React, { useState } from 'react';
import { ComingSoon } from './pages/ComingSoon';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AboutPage } from './pages/AboutPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { CareersPage } from './pages/CareersPage';
type PageType =
'home' |
'terms' |
'privacy' |
'about' |
'features' |
'works' |
'careers';
export function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  switch (currentPage) {
    case 'terms':
      return <TermsPage onNavigate={handleNavigate} />;
    case 'privacy':
      return <PrivacyPage onNavigate={handleNavigate} />;
    case 'about':
      return <AboutPage onNavigate={handleNavigate} />;
    case 'features':
      return <FeaturesPage onNavigate={handleNavigate} />;
    case 'works':
      return <HowItWorksPage onNavigate={handleNavigate} />;
    case 'careers':
      return <CareersPage onNavigate={handleNavigate} />;
    default:
      return <ComingSoon onNavigate={handleNavigate} />;
  }
}