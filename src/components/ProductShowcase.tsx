import React, { useState } from 'react';
import { useLanguage } from './Header';

const ProductShowcase = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('flooring');

  const content = {
    en: {
      title: "Visualization Examples",
      subtitle: "Explore professional visualization examples from different product categories.",
      categories: [
        { id: 'flooring', name: 'Flooring', count: '500+' },
        { id: 'chandeliers', name: 'Chandeliers', count: '300+' },
        { id: 'tiles', name: 'Tiles', count: '800+' },
        { id: 'furniture', name: 'Furniture', count: '1200+' }
      ],
      products: {
        flooring: [
          { name: 'Oak Heritage', style: 'Classic' },
          { name: 'Walnut Elite', style: 'Modern' },
          { name: 'Cherry Vintage', style: 'Rustic' },
          { name: 'Maple Premium', style: 'Contemporary' }
        ],
        chandeliers: [
          { name: 'Crystal Palace', style: 'Luxury' },
          { name: 'Modern Arc', style: 'Minimalist' },
          { name: 'Industrial Edge', style: 'Industrial' },
          { name: 'Art Deco', style: 'Vintage' }
        ],
        tiles: [
          { name: 'Marble Essence', style: 'Elegant' },
          { name: 'Ceramic Plus', style: 'Modern' },
          { name: 'Natural Stone', style: 'Rustic' },
          { name: 'Mosaic Art', style: 'Artistic' }
        ],
        furniture: [
          { name: 'Modern Sofa', style: 'Contemporary' },
          { name: 'Dining Table', style: 'Classic' },
          { name: 'Bedroom Set', style: 'Luxury' },
          { name: 'Office Desk', style: 'Functional' }
        ]
      },
      visualizeButton: "Visualize",
      viewAllButton: "View All Examples"
    },
    tr: {
      title: "Görselleştirme Örnekleri",
      subtitle: "Farklı ürün kategorilerinden profesyonel görselleştirme örneklerini keşfedin.",
      categories: [
        { id: 'flooring', name: 'Zemin Kaplama', count: '500+' },
        { id: 'chandeliers', name: 'Avizeler', count: '300+' },
        { id: 'tiles', name: 'Karolar', count: '800+' },
        { id: 'furniture', name: 'Mobilya', count: '1200+' }
      ],
      products: {
        flooring: [
          { name: 'Meşe Klasik', style: 'Klasik' },
          { name: 'Ceviz Elite', style: 'Modern' },
          { name: 'Kiraz Vintage', style: 'Rustik' },
          { name: 'Akçaağaç Premium', style: 'Çağdaş' }
        ],
        chandeliers: [
          { name: 'Kristal Saray', style: 'Lüks' },
          { name: 'Modern Arc', style: 'Minimalist' },
          { name: 'Endüstriyel Edge', style: 'Endüstriyel' },
          { name: 'Art Deco', style: 'Vintage' }
        ],
        tiles: [
          { name: 'Mermer Özü', style: 'Zarif' },
          { name: 'Seramik Plus', style: 'Modern' },
          { name: 'Doğal Taş', style: 'Rustik' },
          { name: 'Mozaik Sanat', style: 'Sanatsal' }
        ],
        furniture: [
          { name: 'Modern Kanepe', style: 'Çağdaş' },
          { name: 'Yemek Masası', style: 'Klasik' },
          { name: 'Yatak Odası Takımı', style: 'Lüks' },
          { name: 'Ofis Masası', style: 'Fonksiyonel' }
        ]
      },
      visualizeButton: "Görselleştir",
      viewAllButton: "Tüm Örnekleri Görüntüle"
    }
  };

  const t = content[language];

  const productImages = {
    flooring: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      'https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg'
    ],
    chandeliers: [
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg',
      'https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg'
    ],
    tiles: [
      'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg',
      'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg'
    ],
    furniture: [
      'https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg',
      'https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg'
    ]
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800">
            {t.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {t.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-600 hover:text-slate-800 bg-stone-100 hover:bg-stone-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.products[activeCategory as keyof typeof t.products].map((product, index) => (
            <div 
              key={index}
              className="group bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden hover:bg-stone-100 hover:border-stone-300 transition-all duration-300 shadow-sm"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={productImages[activeCategory as keyof typeof productImages][index]} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-medium text-slate-800">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm font-light">{product.style}</p>
                
                <button className="w-full mt-4 px-4 py-2 border border-stone-300 text-slate-700 rounded-lg hover:border-stone-400 hover:text-slate-800 transition-all duration-300 font-medium bg-white">
                  {t.visualizeButton}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-stone-300 text-slate-700 rounded-xl hover:border-stone-400 hover:text-slate-800 transition-all duration-300 font-medium bg-white">
            {t.viewAllButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;