import React from 'react';
import { Check, Star, Calendar } from 'lucide-react';
import { useLanguage } from './Header';

const Pricing = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Pricing Plans",
      subtitle: "Choose the plan that best fits your business needs. All plans include our automated AI processing.",
      plans: [
        {
          name: "Starter",
          price: "49",
          period: "per visualization",
          description: "Perfect for small businesses testing our service",
          features: [
            "1 product visualization",
            "3 space options",
            "4K resolution",
            "24-hour automated delivery",
            "Email support"
          ],
          popular: false,
          buttonText: "Get Started"
        },
        {
          name: "Professional",
          price: "199",
          period: "per 5 visualizations",
          description: "Best value for growing businesses",
          features: [
            "5 product visualizations",
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
          name: "Enterprise",
          price: "Custom",
          period: "contact us",
          description: "For large businesses with high volume needs",
          features: [
            "Unlimited visualizations",
            "Custom space creation",
            "8K resolution",
            "6-hour automated delivery",
            "Dedicated account manager",
            "API integration",
            "White-label solution"
          ],
          popular: false,
          buttonText: "Contact Sales"
        }
      ],
      guarantee: "30-day money-back guarantee",
      contact: "Need a custom solution? Contact us for enterprise pricing.",
      scheduleMeeting: "Schedule a Meeting",
      meetingDescription: "Book a consultation to discuss your visualization needs"
    },
    tr: {
      title: "Fiyatlandırma Planları",
      subtitle: "İşletmenizin ihtiyaçlarına en uygun planı seçin. Tüm planlar otomatik AI işleme içerir.",
      plans: [
        {
          name: "Başlangıç",
          price: "49",
          period: "görselleştirme başına",
          description: "Hizmetimizi test eden küçük işletmeler için mükemmel",
          features: [
            "1 ürün görselleştirmesi",
            "3 mekan seçeneği",
            "4K çözünürlük",
            "24 saatte otomatik teslimat",
            "E-posta desteği"
          ],
          popular: false,
          buttonText: "Başlayın"
        },
        {
          name: "Profesyonel",
          price: "199",
          period: "5 görselleştirme için",
          description: "Büyüyen işletmeler için en iyi değer",
          features: [
            "5 ürün görselleştirmesi",
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
          name: "Kurumsal",
          price: "Özel",
          period: "bize ulaşın",
          description: "Yüksek hacimli ihtiyaçları olan büyük işletmeler için",
          features: [
            "Sınırsız görselleştirme",
            "Özel mekan oluşturma",
            "8K çözünürlük",
            "6 saatte otomatik teslimat",
            "Özel hesap yöneticisi",
            "API entegrasyonu",
            "Beyaz etiket çözümü"
          ],
          popular: false,
          buttonText: "Satış Ekibiyle İletişim"
        }
      ],
      guarantee: "30 gün para iade garantisi",
      contact: "Özel bir çözüme mi ihtiyacınız var? Kurumsal fiyatlandırma için bize ulaşın.",
      scheduleMeeting: "Toplantı Oluştur",
      meetingDescription: "Görselleştirme ihtiyaçlarınızı görüşmek için randevu alın"
    }
  };

  const t = content[language];

  return (
    <section id="pricing" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800">
            {t.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white border rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col ${
                plan.popular 
                  ? 'border-slate-800 ring-2 ring-slate-800 ring-opacity-20' 
                  : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span>{plan.buttonText}</span>
                  </div>
                </div>
              )}

              <div className="space-y-6 flex-grow">
                <div className="space-y-2">
                  <h3 className="text-2xl font-medium text-slate-800">{plan.name}</h3>
                  <p className="text-slate-600 font-light">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-light text-slate-800">
                      {plan.price === 'Custom' || plan.price === 'Özel' ? plan.price : `$${plan.price}`}
                    </span>
                    {plan.price !== 'Custom' && plan.price !== 'Özel' && (
                      <span className="text-slate-600 font-light">USD</span>
                    )}
                  </div>
                  <p className="text-slate-600 text-sm font-light">{plan.period}</p>
                </div>

                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <button 
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-slate-800 text-white hover:bg-slate-700'
                      : 'border border-stone-300 text-slate-700 hover:border-stone-400 hover:text-slate-800 bg-white'
                  }`}
                >
                  {plan.popular ? plan.buttonText : plan.buttonText}
                </button>
              </div>
            </div>
          ))}
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
    </section>
  );
};

export default Pricing;