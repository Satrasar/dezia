import React, { useState } from 'react';
import { Check, Star, Calendar } from 'lucide-react';
import { useLanguage } from './Header';

const Pricing = () => {
  const { language } = useLanguage();
  const [visualizationCount, setVisualizationCount] = useState(50);
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' or 'annual'

  // Calculate pricing based on visualization count
  const calculatePrice = (count: number, period: string) => {
    let basePrice = 0;
    
    if (count <= 20) {
      basePrice = count * 2.5; // $2.5 per visualization
    } else if (count <= 100) {
      basePrice = 50 + (count - 20) * 2; // $50 + $2 per additional
    } else if (count <= 300) {
      basePrice = 210 + (count - 100) * 1.5; // $210 + $1.5 per additional
    } else {
      basePrice = 510 + (count - 300) * 1; // $510 + $1 per additional
    }
    
    // Apply annual discount
    if (period === 'annual') {
      basePrice = basePrice * 0.83; // 17% discount
    }
    
    return Math.round(basePrice);
  };

  // Calculate plan pricing based on slider
  const getPlanPricing = () => {
    const monthlyPrice = calculatePrice(visualizationCount, 'monthly');
    const annualPrice = calculatePrice(visualizationCount, 'annual');
    const currentPrice = billingPeriod === 'annual' ? annualPrice : monthlyPrice;
    
    // Calculate tier-based pricing for plans
    const starterPrice = Math.round(currentPrice * 0.6);
    const proPrice = currentPrice;
    const advancedPrice = Math.round(currentPrice * 1.4);
    
    return { starterPrice, proPrice, advancedPrice, currentPrice };
  };

  const { starterPrice, proPrice, advancedPrice, currentPrice } = getPlanPricing();
  const annualSavings = Math.round((calculatePrice(visualizationCount, 'monthly') - calculatePrice(visualizationCount, 'annual')) * 12);

  const content = {
    en: {
      title: "Pricing Plans",
      subtitle: "Choose the plan that best fits your business needs. All plans include our automated AI processing.",
      dynamicTitle: "Scale to the next level",
      needText: `I need ${visualizationCount} photos per month`,
      monthly: "Monthly",
      annual: "Annual",
      save: "Save 17%",
      usdMonth: "USD/month",
      billedMonthly: "Billed monthly. Unlimited credit rollover",
      getStarted: "Get Started",
      plans: [
        {
          name: "Starter",
          description: "Perfect for small businesses testing our service",
          features: [
            "Basic product visualization",
            "3 space options",
            "4K resolution",
            "24-hour automated delivery",
            "Email support"
          ],
          popular: false,
          buttonText: "Get Started"
        },
        {
          name: "Pro",
          description: "Perfect for businesses of all sizes",
          features: [
            "Advanced visualizations",
            "10 space options",
            "4K resolution",
            "12-hour automated delivery",
            "Priority support",
            "Custom backgrounds"
          ],
          popular: true,
          buttonText: "Most Popular"
        },
        {
          name: "Advanced",
          description: "Best for scaling your business with extra AI features",
          features: [
            "Premium visualizations",
            "Unlimited space options",
            "8K resolution",
            "6-hour automated delivery",
            "Dedicated account manager",
            "API integration",
            "White-label solution"
          ],
          popular: false,
          buttonText: "Get Started"
        }
      ],
      guarantee: "30-day money-back guarantee",
      contact: "Need a custom solution? Contact us for enterprise pricing.",
      scheduleMeeting: "Schedule a Meeting",
      meetingDescription: "Book a consultation to discuss your visualization needs",
      credits: "Credits"
    },
    tr: {
      title: "Fiyatlandırma Planları",
      subtitle: "İşletmenizin ihtiyaçlarına en uygun planı seçin. Tüm planlar otomatik AI işleme içerir.",
      dynamicTitle: "Bir sonraki seviyeye çıkın",
      needText: `Ayda ${visualizationCount} fotoğrafa ihtiyacım var`,
      monthly: "Aylık",
      annual: "Yıllık",
      save: "%17 Tasarruf",
      usdMonth: "USD/ay",
      billedMonthly: "Aylık faturalandırma. Sınırsız kredi devri",
      getStarted: "Başlayın",
      plans: [
        {
          name: "Başlangıç",
          description: "Hizmetimizi test eden küçük işletmeler için mükemmel",
          features: [
            "Temel ürün görselleştirmesi",
            "3 mekan seçeneği",
            "4K çözünürlük",
            "24 saatte otomatik teslimat",
            "E-posta desteği"
          ],
          popular: false,
          buttonText: "Başlayın"
        },
        {
          name: "Pro",
          description: "Her büyüklükteki işletme için mükemmel",
          features: [
            "Gelişmiş görselleştirmeler",
            "10 mekan seçeneği",
            "4K çözünürlük",
            "12 saatte otomatik teslimat",
            "Öncelikli destek",
            "Özel arka planlar"
          ],
          popular: true,
          buttonText: "En Popüler"
        },
        {
          name: "Gelişmiş",
          description: "Ekstra AI özellikleriyle işinizi büyütmek için en iyi",
          features: [
            "Premium görselleştirmeler",
            "Sınırsız mekan seçeneği",
            "8K çözünürlük",
            "6 saatte otomatik teslimat",
            "Özel hesap yöneticisi",
            "API entegrasyonu",
            "Beyaz etiket çözümü"
          ],
          popular: false,
          buttonText: "Başlayın"
        }
      ],
      guarantee: "30 gün para iade garantisi",
      contact: "Özel bir çözüme mi ihtiyacınız var? Kurumsal fiyatlandırma için bize ulaşın.",
      scheduleMeeting: "Toplantı Oluştur",
      meetingDescription: "Görselleştirme ihtiyaçlarınızı görüşmek için randevu alın",
      credits: "Kredi"
    }
  };

  const t = content[language];

  // Handle slider change with step of 10
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const roundedValue = Math.round(value / 10) * 10;
    setVisualizationCount(Math.max(20, roundedValue));
  };

  return (
    <section id="pricing" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic Pricing Section */}
        <div className="text-center space-y-8 mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800">
            {t.dynamicTitle}
          </h2>
          
          <p className="text-xl text-slate-600 font-light">
            {t.needText}
          </p>

          {/* Slider */}
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="relative">
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={visualizationCount}
                onChange={handleSliderChange}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #1e293b 0%, #1e293b ${((visualizationCount - 20) / (500 - 20)) * 100}%, #e7e5e4 ${((visualizationCount - 20) / (500 - 20)) * 100}%, #e7e5e4 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-slate-600 mt-2">
                <span>20</span>
                <span>500+</span>
              </div>
              
              {/* Current value indicator */}
              <div 
                className="absolute -top-12 transform -translate-x-1/2 bg-white border border-stone-300 rounded-lg px-3 py-1 text-sm font-medium text-slate-800 shadow-sm"
                style={{ left: `${((visualizationCount - 20) / (500 - 20)) * 100}%` }}
              >
                {visualizationCount}
              </div>
            </div>

            {/* Billing Period Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <div className="flex bg-stone-200 rounded-full p-1">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    billingPeriod === 'monthly'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {t.monthly}
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    billingPeriod === 'annual'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {t.annual}
                </button>
              </div>
              {billingPeriod === 'annual' && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {t.save}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.plans.map((plan, index) => {
            let planPrice = 0;
            let planCredits = 50; // Fixed credits for Starter when disabled
            let isDisabled = false;
            
            if (index === 0) { // Starter
              planPrice = starterPrice;
              planCredits = 50; // Always show 50 credits for Starter
              isDisabled = visualizationCount < 50; // Disable if less than 50
            } else if (index === 1) { // Pro
              planPrice = proPrice;
              planCredits = visualizationCount;
            } else { // Advanced
              planPrice = advancedPrice;
              planCredits = Math.round(visualizationCount * 1.4);
            }

            return (
              <div 
                key={index}
                className={`relative bg-white border rounded-3xl p-8 shadow-sm transition-all duration-300 flex flex-col ${
                  isDisabled 
                    ? 'opacity-50 cursor-not-allowed border-stone-200' 
                    : plan.popular 
                      ? 'border-slate-800 ring-2 ring-slate-800 ring-opacity-20 hover:shadow-md' 
                      : 'border-stone-200 hover:border-stone-300 hover:shadow-md'
                }`}
              >
                {plan.popular && !isDisabled && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{plan.buttonText}</span>
                    </div>
                  </div>
                )}

                <div className="space-y-6 flex-grow">
                  {/* Plan Header */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <h3 className={`text-2xl font-medium ${isDisabled ? 'text-slate-400' : 'text-slate-800'}`}>
                        {plan.name}
                      </h3>
                      <p className={`font-light text-sm ${isDisabled ? 'text-slate-400' : 'text-slate-600'}`}>
                        {plan.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-medium ${isDisabled ? 'text-slate-400' : 'text-slate-800'}`}>
                        {planCredits} {t.credits}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-4xl font-light ${isDisabled ? 'text-slate-400' : 'text-slate-800'}`}>
                        ${planPrice}
                      </span>
                      <span className={`font-light ${isDisabled ? 'text-slate-400' : 'text-slate-600'}`}>USD</span>
                    </div>
                    <p className={`text-sm font-light ${isDisabled ? 'text-slate-400' : 'text-slate-600'}`}>
                      {t.usdMonth}
                    </p>
                    <p className={`text-xs font-light ${isDisabled ? 'text-slate-400' : 'text-slate-500'}`}>
                      {t.billedMonthly}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          isDisabled ? 'text-slate-300' : 'text-green-500'
                        }`} />
                        <span className={`font-light text-sm ${
                          isDisabled ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <button 
                    disabled={isDisabled}
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                      isDisabled
                        ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                        : plan.popular
                          ? 'bg-slate-800 text-white hover:bg-slate-700'
                          : 'border border-stone-300 text-slate-700 hover:border-stone-400 hover:text-slate-800 bg-white'
                    }`}
                  >
                    {t.getStarted}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Meeting Scheduler Section */}
        <div className="bg-white border border-stone-200 rounded-3xl p-8 mb-12 shadow-sm">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto">
              <Calendar className="h-8 w-8 text-slate-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-light text-slate-800">{t.scheduleMeeting}</h3>
              <p className="text-slate-600 font-light max-w-md mx-auto">{t.meetingDescription}</p>
            </div>
            <button className="px-8 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all duration-300 font-medium">
              {t.scheduleMeeting}
            </button>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-slate-600 font-light flex items-center justify-center space-x-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>{t.guarantee}</span>
          </p>
          <p className="text-slate-600 font-light max-w-2xl mx-auto">
            {t.contact}
          </p>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #1e293b;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #1e293b;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Pricing;