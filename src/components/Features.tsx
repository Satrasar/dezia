import React from 'react';
import { Camera, Palette, Zap, Shield, Clock, Users } from 'lucide-react';
import { useLanguage } from './Header';

const Features = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Why Choose Dezia?",
      subtitle: "Benefits of our professional visualization service that will boost your product sales.",
      features: [
        {
          icon: Camera,
          title: 'Professional Visualization',
          description: 'Showcase your products in real spaces with photorealistic quality.',
        },
        {
          icon: Palette,
          title: 'Style Matching',
          description: 'AI technology perfectly integrates your products with space aesthetics.',
        },
        {
          icon: Zap,
          title: 'Fast Delivery',
          description: 'Receive high-quality product visuals within 24 hours through our automated system.',
        },
        {
          icon: Shield,
          title: 'Quality Guarantee',
          description: 'Professional-grade, sales-focused visuals that convert.',
        },
        {
          icon: Clock,
          title: 'Time Savings',
          description: 'Save 90% on photography and studio costs with our automated process.',
        },
        {
          icon: Users,
          title: 'Boost Sales',
          description: 'Customers make decisions faster when they see products in their space.',
        }
      ]
    },
    tr: {
      title: "Neden Dezia?",
      subtitle: "Ürün satışlarınızı artıracak profesyonel görselleştirme hizmetimizin avantajları.",
      features: [
        {
          icon: Camera,
          title: 'Profesyonel Görselleştirme',
          description: 'Ürünlerinizi gerçek mekanlarda fotogerçekçi kalitede sergileyin.',
        },
        {
          icon: Palette,
          title: 'Stil Uyumu',
          description: 'AI teknolojisi ürünlerinizi mekan estetiği ile mükemmel uyum sağlar.',
        },
        {
          icon: Zap,
          title: 'Hızlı Teslimat',
          description: 'Otomatik sistemimiz sayesinde 24 saat içinde yüksek kaliteli ürün görsellerinizi alın.',
        },
        {
          icon: Shield,
          title: 'Kalite Garantisi',
          description: 'Profesyonel seviyede, satış odaklı dönüştürücü görseller.',
        },
        {
          icon: Clock,
          title: 'Zaman Tasarrufu',
          description: 'Otomatik süreçlerimiz ile fotoğraf çekimi ve stüdyo maliyetlerinde %90 tasarruf sağlayın.',
        },
        {
          icon: Users,
          title: 'Satış Artışı',
          description: 'Müşteriler ürünleri kendi mekanlarında gördüklerinde daha hızlı karar verirler.',
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="features" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800">
            {t.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-white border border-stone-200 rounded-2xl hover:bg-stone-50 hover:border-stone-300 transition-all duration-300 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center group-hover:bg-stone-200 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-medium text-slate-800">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;