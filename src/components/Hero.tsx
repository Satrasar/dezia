import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { useLanguage } from './Header';

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Visualize Your Products",
      subtitle: "In Real Spaces",
      description: "Show your customers how flooring, chandeliers, tiles, and furniture will look in their space with professional AI-powered visualizations. Our automated system delivers results in 24 hours.",
      badge: "Professional Product Visualization Service",
      getStarted: "Get Started Now",
      viewExamples: "View Examples",
      stats: {
        visuals: "Product Visuals",
        satisfaction: "Client Satisfaction", 
        clients: "Happy Clients"
      }
    },
    tr: {
      title: "Ürünlerinizi Gerçek Mekanlarda",
      subtitle: "Görselleştirin",
      description: "Müşterilerinize zemin kaplamaları, avizeler, karolar ve mobilyaların kendi mekanlarında nasıl görüneceğini profesyonel AI destekli görselleştirmelerle gösterin. Otomatik sistemimiz 24 saat içinde sonuç verir.",
      badge: "Profesyonel Ürün Görselleştirme Hizmeti",
      getStarted: "Hemen Başlayın",
      viewExamples: "Örnekleri İnceleyin",
      stats: {
        visuals: "Ürün Görseli",
        satisfaction: "Müşteri Memnuniyeti",
        clients: "Mutlu Müşteri"
      }
    }
  };

  const t = content[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-orange-25 to-pink-50">
      {/* Beautiful Morphic Background with Purple-Orange Depth */}
      <div className="absolute inset-0">
        {/* Base gradient with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-orange-50 to-pink-100"></div>
        
        {/* Deep layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/30 via-transparent to-orange-200/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-300/20 via-transparent to-purple-300/25"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-200/15 via-transparent to-violet-200/20"></div>
        
        {/* Grain Texture Overlay for depth */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
        
        {/* Large Morphic Shapes with Purple-Orange Gradient for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-300/25 via-orange-300/20 to-pink-300/15 animate-morph-1 blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-300/20 via-purple-300/15 to-violet-300/20 animate-morph-2 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/5 w-72 h-72 bg-gradient-to-br from-violet-300/15 via-orange-200/15 to-purple-300/15 animate-morph-3 blur-3xl"></div>
        
        {/* Additional depth layers */}
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-pink-300/20 via-orange-200/10 to-purple-200/15 animate-morph-1 blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-br from-orange-300/15 via-violet-200/10 to-pink-200/10 animate-morph-2 blur-2xl"></div>
        
        {/* Final depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Main Heading - Now at the top */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-700 leading-tight">
              {t.title}
              <span className="block text-slate-800 font-normal mt-2">
                {t.subtitle}
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              {t.description}
            </p>
          </div>

          {/* AI Badge with Pulsing Animation */}
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-xl border border-stone-200 rounded-full px-6 py-3 text-sm text-slate-700 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></div>
            <span className="font-medium">{t.badge}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-slate-800 text-white text-lg font-medium rounded-xl hover:bg-slate-700 transition-all duration-300 flex items-center space-x-3 shadow-sm">
              <span>{t.getStarted}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button className="px-8 py-4 border border-stone-300 text-slate-700 text-lg font-medium rounded-xl hover:border-stone-400 hover:text-slate-800 transition-all duration-300 flex items-center space-x-3 bg-white/70 backdrop-blur-sm shadow-sm">
              <Eye className="h-5 w-5" />
              <span>{t.viewExamples}</span>
            </button>
          </div>

          {/* Stats - Simplified */}
          <div className="grid grid-cols-3 gap-12 pt-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-light text-slate-800">50K+</div>
              <div className="text-slate-600 text-sm">{t.stats.visuals}</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-slate-800">99.9%</div>
              <div className="text-slate-600 text-sm">{t.stats.satisfaction}</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-slate-800">2000+</div>
              <div className="text-slate-600 text-sm">{t.stats.clients}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;