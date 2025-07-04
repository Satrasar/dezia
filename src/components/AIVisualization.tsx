import React, { useState } from 'react';
import { Upload, Camera, Wand2, Download } from 'lucide-react';
import { useLanguage } from './Header';

const AIVisualization = () => {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);

  const content = {
    en: {
      title: "How It Works",
      subtitle: "Our automated product visualization process is completed in 4 simple steps.",
      steps: [
        {
          id: 1,
          title: 'Product Photo',
          description: 'Send us high-quality photos of your product',
          icon: Upload,
        },
        {
          id: 2,
          title: 'Space Selection',
          description: 'Choose the type of space where you want to place your product',
          icon: Camera,
        },
        {
          id: 3,
          title: 'AI Processing',
          description: 'Our automated AI technology places your product in the space',
          icon: Wand2,
        },
        {
          id: 4,
          title: 'Delivery',
          description: 'Receive high-resolution visuals within 24 hours automatically',
          icon: Download,
        }
      ],
      demo: {
        title: "Professional Results",
        description: "Our automated AI technology showcases your products in real spaces with photorealistic quality, maximizing your sales potential.",
        features: [
          "4K high resolution",
          "Multiple space options", 
          "24-hour automated delivery"
        ],
        placeOrder: "Place Order",
        getQuote: "Get Quote",
        sampleWork: "Sample Work"
      }
    },
    tr: {
      title: "Nasıl Çalışır",
      subtitle: "Otomatik ürün görselleştirme sürecimiz 4 basit adımda tamamlanır.",
      steps: [
        {
          id: 1,
          title: 'Ürün Fotoğrafı',
          description: 'Ürününüzün yüksek kaliteli fotoğraflarını bize gönderin',
          icon: Upload,
        },
        {
          id: 2,
          title: 'Mekan Seçimi',
          description: 'Ürününüzü yerleştirmek istediğiniz mekan türünü seçin',
          icon: Camera,
        },
        {
          id: 3,
          title: 'AI İşleme',
          description: 'Otomatik AI teknolojimiz ürününüzü mekana yerleştirir',
          icon: Wand2,
        },
        {
          id: 4,
          title: 'Teslimat',
          description: '24 saat içinde otomatik olarak yüksek çözünürlüklü görselleri alın',
          icon: Download,
        }
      ],
      demo: {
        title: "Profesyonel Sonuçlar",
        description: "Otomatik AI teknolojimiz ürünlerinizi gerçek mekanlarda fotogerçekçi kalitede sergiler ve satış potansiyelinizi maksimize eder.",
        features: [
          "4K yüksek çözünürlük",
          "Çoklu mekan seçenekleri",
          "24 saatte otomatik teslimat"
        ],
        placeOrder: "Sipariş Ver",
        getQuote: "Fiyat Teklifi Al",
        sampleWork: "Örnek Çalışma"
      }
    }
  };

  const t = content[language];

  return (
    <section id="ai-tech" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800">
            {t.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {t.steps.map((stepItem, index) => {
            const Icon = stepItem.icon;
            const isActive = activeStep === stepItem.id;
            
            return (
              <div 
                key={stepItem.id}
                className={`group cursor-pointer transition-all duration-300`}
                onClick={() => setActiveStep(stepItem.id)}
              >
                <div className={`bg-stone-50 border rounded-2xl p-8 text-center space-y-4 transition-all duration-300 shadow-sm h-full ${
                  isActive 
                    ? 'border-stone-300 bg-stone-100' 
                    : 'border-stone-200 hover:border-stone-300'
                }`}>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto group-hover:bg-stone-50 transition-colors duration-300 shadow-sm">
                    <Icon className="h-6 w-6 text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-200 ${
                        isActive 
                          ? 'bg-slate-800 text-white' 
                          : 'bg-stone-200 text-slate-600'
                      }`}>
                        {stepItem.id}
                      </span>
                    </div>
                    
                    <h3 className={`text-lg font-medium transition-colors duration-200 ${
                      isActive ? 'text-slate-800' : 'text-slate-700'
                    }`}>
                      {stepItem.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Section */}
        <div className="bg-stone-50 border border-stone-200 rounded-3xl p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-light text-slate-800">
                {t.demo.title}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {t.demo.description}
              </p>
              
              <div className="space-y-3">
                {t.demo.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-600 font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 pt-4">
                <button className="px-6 py-3 bg-slate-800 text-white font-medium rounded-xl hover:bg-slate-700 transition-all duration-300">
                  {t.demo.placeOrder}
                </button>
                <button className="px-6 py-3 border border-stone-300 text-slate-700 font-medium rounded-xl hover:border-stone-400 hover:text-slate-800 transition-all duration-300 bg-white">
                  {t.demo.getQuote}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
                <div className="w-full h-full bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <Wand2 className="h-8 w-8 text-slate-600" />
                    </div>
                    <p className="text-slate-600 font-light">{t.demo.sampleWork}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVisualization;