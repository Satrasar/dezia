import React from 'react';
import { LanguageProvider } from './components/Header';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import AIVisualization from './components/AIVisualization';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Features />
        <ProductShowcase />
        <AIVisualization />
        <Pricing />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;