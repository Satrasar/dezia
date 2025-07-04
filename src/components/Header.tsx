import React, { useState, createContext, useContext } from 'react';
import { Menu, X } from 'lucide-react';

// Language Context
const LanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const FlagIcon = ({ country }: { country: 'us' | 'tr' }) => {
    if (country === 'us') {
      return (
        <div className="w-8 h-6 rounded-sm overflow-hidden shadow-sm border border-gray-200">
          <svg className="w-full h-full" viewBox="0 0 60 40" fill="none">
            {/* Red stripes background */}
            <rect width="60" height="40" fill="#B22234"/>
            
            {/* White stripes */}
            <rect width="60" height="3.08" y="3.08" fill="white"/>
            <rect width="60" height="3.08" y="9.23" fill="white"/>
            <rect width="60" height="3.08" y="15.38" fill="white"/>
            <rect width="60" height="3.08" y="21.54" fill="white"/>
            <rect width="60" height="3.08" y="27.69" fill="white"/>
            <rect width="60" height="3.08" y="33.85" fill="white"/>
            
            {/* Blue canton */}
            <rect width="24" height="21.54" fill="#3C3B6E"/>
            
            {/* Stars pattern - 9 rows alternating 6 and 5 stars */}
            {/* Row 1 - 6 stars */}
            <circle cx="3" cy="2.5" r="0.8" fill="white"/>
            <circle cx="7" cy="2.5" r="0.8" fill="white"/>
            <circle cx="11" cy="2.5" r="0.8" fill="white"/>
            <circle cx="15" cy="2.5" r="0.8" fill="white"/>
            <circle cx="19" cy="2.5" r="0.8" fill="white"/>
            <circle cx="23" cy="2.5" r="0.8" fill="white"/>
            
            {/* Row 2 - 5 stars */}
            <circle cx="5" cy="4.8" r="0.8" fill="white"/>
            <circle cx="9" cy="4.8" r="0.8" fill="white"/>
            <circle cx="13" cy="4.8" r="0.8" fill="white"/>
            <circle cx="17" cy="4.8" r="0.8" fill="white"/>
            <circle cx="21" cy="4.8" r="0.8" fill="white"/>
            
            {/* Row 3 - 6 stars */}
            <circle cx="3" cy="7.1" r="0.8" fill="white"/>
            <circle cx="7" cy="7.1" r="0.8" fill="white"/>
            <circle cx="11" cy="7.1" r="0.8" fill="white"/>
            <circle cx="15" cy="7.1" r="0.8" fill="white"/>
            <circle cx="19" cy="7.1" r="0.8" fill="white"/>
            <circle cx="23" cy="7.1" r="0.8" fill="white"/>
            
            {/* Row 4 - 5 stars */}
            <circle cx="5" cy="9.4" r="0.8" fill="white"/>
            <circle cx="9" cy="9.4" r="0.8" fill="white"/>
            <circle cx="13" cy="9.4" r="0.8" fill="white"/>
            <circle cx="17" cy="9.4" r="0.8" fill="white"/>
            <circle cx="21" cy="9.4" r="0.8" fill="white"/>
            
            {/* Row 5 - 6 stars */}
            <circle cx="3" cy="11.7" r="0.8" fill="white"/>
            <circle cx="7" cy="11.7" r="0.8" fill="white"/>
            <circle cx="11" cy="11.7" r="0.8" fill="white"/>
            <circle cx="15" cy="11.7" r="0.8" fill="white"/>
            <circle cx="19" cy="11.7" r="0.8" fill="white"/>
            <circle cx="23" cy="11.7" r="0.8" fill="white"/>
            
            {/* Row 6 - 5 stars */}
            <circle cx="5" cy="14" r="0.8" fill="white"/>
            <circle cx="9" cy="14" r="0.8" fill="white"/>
            <circle cx="13" cy="14" r="0.8" fill="white"/>
            <circle cx="17" cy="14" r="0.8" fill="white"/>
            <circle cx="21" cy="14" r="0.8" fill="white"/>
            
            {/* Row 7 - 6 stars */}
            <circle cx="3" cy="16.3" r="0.8" fill="white"/>
            <circle cx="7" cy="16.3" r="0.8" fill="white"/>
            <circle cx="11" cy="16.3" r="0.8" fill="white"/>
            <circle cx="15" cy="16.3" r="0.8" fill="white"/>
            <circle cx="19" cy="16.3" r="0.8" fill="white"/>
            <circle cx="23" cy="16.3" r="0.8" fill="white"/>
            
            {/* Row 8 - 5 stars */}
            <circle cx="5" cy="18.6" r="0.8" fill="white"/>
            <circle cx="9" cy="18.6" r="0.8" fill="white"/>
            <circle cx="13" cy="18.6" r="0.8" fill="white"/>
            <circle cx="17" cy="18.6" r="0.8" fill="white"/>
            <circle cx="21" cy="18.6" r="0.8" fill="white"/>
            
            {/* Row 9 - 6 stars */}
            <circle cx="3" cy="20.9" r="0.8" fill="white"/>
            <circle cx="7" cy="20.9" r="0.8" fill="white"/>
            <circle cx="11" cy="20.9" r="0.8" fill="white"/>
            <circle cx="15" cy="20.9" r="0.8" fill="white"/>
            <circle cx="19" cy="20.9" r="0.8" fill="white"/>
            <circle cx="23" cy="20.9" r="0.8" fill="white"/>
          </svg>
        </div>
      );
    }
    
    return (
      <div className="w-8 h-6 rounded-sm overflow-hidden shadow-sm border border-gray-200">
        <svg className="w-full h-full" viewBox="0 0 60 40" fill="none">
          {/* Red background */}
          <rect width="60" height="40" fill="#E30A17"/>
          
          {/* White circle for moon */}
          <circle cx="22" cy="20" r="10" fill="white"/>
          
          {/* Red crescent (moon shape) */}
          <circle cx="25" cy="20" r="8" fill="#E30A17"/>
          
          {/* Five-pointed star */}
          <g transform="translate(34, 20)">
            <path d="M0,-6 L1.8,-1.2 L6.9,-1.2 L2.7,1.8 L4.5,6.6 L0,3.6 L-4.5,6.6 L-2.7,1.8 L-6.9,-1.2 L-1.8,-1.2 Z" 
                  fill="white" 
                  stroke="none"/>
          </g>
        </svg>
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <img 
              src="/dezia-logo.svg" 
              alt="Dezia Logo" 
              className="h-20 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium">
              {language === 'en' ? 'Benefits' : 'Avantajlar'}
            </a>
            <a href="#products" className="text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium">
              {language === 'en' ? 'Examples' : 'Örnekler'}
            </a>
            <a href="#ai-tech" className="text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium">
              {language === 'en' ? 'How It Works' : 'Nasıl Çalışır'}
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium">
              {language === 'en' ? 'Pricing' : 'Fiyatlandırma'}
            </a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium">
              {language === 'en' ? 'Contact' : 'İletişim'}
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher - Shows current language flag */}
            <button 
              onClick={toggleLanguage}
              className="p-2 rounded-lg transition-all duration-200"
              title={language === 'en' ? 'Türkçe\'ye geç' : 'Switch to English'}
            >
              <FlagIcon country={language === 'en' ? 'us' : 'tr'} />
            </button>

            <button className="px-4 py-2 text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium">
              {language === 'en' ? 'Sign In' : 'Giriş Yap'}
            </button>
            <button className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all duration-200 transform hover:scale-105 font-medium">
              {language === 'en' ? 'Get Started' : 'Başla'}
            </button>
          </div>

          <button 
            className="md:hidden text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Language Switcher */}
              <div className="px-3 py-2 flex justify-center">
                <button 
                  onClick={toggleLanguage}
                  className="p-2 rounded-lg transition-all duration-200"
                  title={language === 'en' ? 'Türkçe\'ye geç' : 'Switch to English'}
                >
                  <FlagIcon country={language === 'en' ? 'us' : 'tr'} />
                </button>
              </div>
              
              <a href="#features" className="block px-3 py-2 text-slate-700 hover:text-slate-900 font-medium">
                {language === 'en' ? 'Benefits' : 'Avantajlar'}
              </a>
              <a href="#products" className="block px-3 py-2 text-slate-700 hover:text-slate-900 font-medium">
                {language === 'en' ? 'Examples' : 'Örnekler'}
              </a>
              <a href="#ai-tech" className="block px-3 py-2 text-slate-700 hover:text-slate-900 font-medium">
                {language === 'en' ? 'How It Works' : 'Nasıl Çalışır'}
              </a>
              <a href="#pricing" className="block px-3 py-2 text-slate-700 hover:text-slate-900 font-medium">
                {language === 'en' ? 'Pricing' : 'Fiyatlandırma'}
              </a>
              <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-slate-900 font-medium">
                {language === 'en' ? 'Contact' : 'İletişim'}
              </a>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <button className="px-4 py-2 text-slate-700 hover:text-slate-900 font-medium">
                  {language === 'en' ? 'Sign In' : 'Giriş Yap'}
                </button>
                <button className="px-6 py-2 bg-slate-800 text-white rounded-lg font-medium">
                  {language === 'en' ? 'Get Started' : 'Başla'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;