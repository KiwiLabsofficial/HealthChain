import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Demo } from './components/Demo';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import  DApp from './pages/DApp';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Demo />
      <CallToAction />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<DApp />} />
    </Routes>
  );
}

export default App;