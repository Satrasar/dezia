import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from './Header';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      description: "AI-powered product visualization service. Show your products in your customers' spaces and boost your sales.",
      services: {
        title: "Our Services",
        items: [
          "Flooring Visualization",
          "Chandelier Visualization", 
          "Tile Visualization",
          "Furniture Visualization",
          "Custom Projects"
        ]
      },
      company: {
        title: "Company",
        items: [
          "About Us",
          "How It Works",
          "Pricing",
          "Blog", 
          "Careers"
        ]
      },
      contact: {
        title: "Contact",
        newsletter: "Newsletter",
        placeholder: "Enter your email",
        subscribe: "Subscribe"
      },
      footer: {
        rights: "© 2024 Dezia. All rights reserved.",
        links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
      }
    },
    tr: {
      description: "AI destekli ürün görselleştirme hizmeti. Ürünlerinizi müşterilerinizin mekanlarında gösterin ve satışlarınızı artırın.",
      services: {
        title: "Hizmetlerimiz",
        items: [
          "Zemin Kaplama Görselleştirme",
          "Avize Görselleştirme",
          "Karo Görselleştirme", 
          "Mobilya Görselleştirme",
          "Özel Projeler"
        ]
      },
      company: {
        title: "Şirket",
        items: [
          "Hakkımızda",
          "Nasıl Çalışır",
          "Fiyatlandırma",
          "Blog",
          "Kariyer"
        ]
      },
      contact: {
        title: "İletişim",
        newsletter: "Bülten",
        placeholder: "E-posta adresinizi girin",
        subscribe: "Abone Ol"
      },
      footer: {
        rights: "© 2024 Dezia. Tüm hakları saklıdır.",
        links: ["Gizlilik Politikası", "Hizmet Şartları", "Çerez Politikası"]
      }
    }
  };

  const t = content[language];

  return (
    <footer id="contact" className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="/dezia-logo.svg" 
                alt="Dezia Logo" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 leading-relaxed font-light">
              {t.description}
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-600 transition-all duration-200">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-600 transition-all duration-200">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-600 transition-all duration-200">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-600 transition-all duration-200">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">{t.services.title}</h3>
            <ul className="space-y-3 text-slate-400 font-light">
              {t.services.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">{t.company.title}</h3>
            <ul className="space-y-3 text-slate-400 font-light">
              {t.company.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">{t.contact.title}</h3>
            <div className="space-y-4 text-slate-400 font-light">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-slate-500" />
                <span>hello@dezia.info</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-500" />
                <span>+90 (544) 224 20 00</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span>Bursa, TR</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-white font-medium">{t.contact.newsletter}</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder={t.contact.placeholder}
                  className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors duration-200 font-light"
                />
                <button className="px-4 py-2 bg-white text-slate-800 rounded-lg hover:bg-slate-100 transition-all duration-200 font-medium">
                  {t.contact.subscribe}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-slate-500 text-sm font-light">{t.footer.rights}</p>
          <div className="flex space-x-6 text-sm text-slate-500 font-light">
            {t.footer.links.map((link, index) => (
              <a key={index} href="#" className="hover:text-white transition-colors duration-200">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;