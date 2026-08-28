import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext'; // Adjust path as needed

// Replace these imports with your actual asset paths
import platinumImg from '../../assets/platinumCare.jpg';
import executiveImg from '../../assets/exectiveCollection.jpg';
import coutureImg from '../../assets/professionalCollection.jpg';

const pageData = {
  en: {
    heading: 'Signature Lines',
    subheading: 'THE AKOYA COLLECTION',
    viewAll: 'View All Collections',
    cards: [
      {
        id: 1,
        title: 'The Platinum Care',
        description:
          'Our highest tier service for your most precious garments. Hand-washed, steamed, and wrapped in protective tissue.',
        buttonText: 'Discover',
        bgImage: platinumImg,
        icon: '✨',
      },
      {
        id: 2,
        title: 'Executive Collection',
        description:
          'Precision care for business attire. Perfect creases, stain removal, and fabric revitalization for your professional image.',
        buttonText: 'Discover',
        bgImage: executiveImg,
        icon: '👔',
      },
      {
        id: 3,
        title: 'Couture Preservation',
        description:
          'Specialized care for designer pieces and delicate fabrics. Museum-quality cleaning to maintain texture and color integrity.',
        buttonText: 'Discover',
        bgImage: coutureImg,
        icon: '🧵',
      },
    ],
  },
  ar: {
    heading: 'المجموعات المميزة',
    subheading: 'مجموعة أكويا',
    viewAll: 'عرض جميع المجموعات',
    cards: [
      {
        id: 1,
        title: 'العناية البلاتينية',
        description:
          'أعلى مستوى من الخدمة لملابسك الأكثر قيمة. غسيل يدوياً، مع الكي بالبخار، وتغليف بأنسجة واقية.',
        buttonText: 'اكتشف المزيد',
        bgImage: platinumImg,
        icon: '✨',
      },
      {
        id: 2,
        title: 'المجموعة التنفيذية',
        description:
          'عناية دقيقة بملابس العمل. كَي مثالي، وإزالة البقع، وتجديد الأقمشة لمظهرك المهني.',
        buttonText: 'اكتشف المزيد',
        bgImage: executiveImg,
        icon: '👔',
      },
      {
        id: 3,
        title: 'حفظ أزياء الكوتور',
        description:
          'عناية متخصصة للقطع المصممة والأقمشة الرقيقة. تنظيف بجودة المتاحف للحفاظ على القماش واللون.',
        buttonText: 'اكتشف المزيد',
        bgImage: coutureImg,
        icon: '🧵',
      },
    ],
  },
};

const Page2 = () => {
  const { lang, isRtl } = useLanguage();
  const content = pageData[lang] || pageData.en;

  return (
    <section className="w-full bg-[#FAF9F7] py-16 px-8 md:px-22 text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-light mt-8 tracking-tight mb-3 text-[#111]">
            {content.heading}
          </h2>
          
          {/* Subheading with Gold Accent Lines */}
          <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
            <span className="h-[1px] w-10 md:w-18 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold text-[20px] tracking-widest uppercase">
              {content.subheading}
            </span>
            <span className="h-[1px] w-10 md:w-18 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-[5vh] mb-10">
          {content.cards.map((card) => (
            <div
              key={card.id}
              className="relative h-[340px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer transition-transform duration-500 hover:-translate-y-2"
            >
              {/* Card Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

              {/* Card Content */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
                
                {/* Yellow Icon Badge */}
                <div className="w-15 h-15 rounded-full bg-[#D4AF37] flex items-center justify-center text-4xl mb-3 shadow-md">
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-semibold mb-2 tracking-wide">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs md:text-sm text-gray-200 leading-relaxed mb-4 font-light">
                  {card.description}
                </p>

                {/* Discover Link Button */}
                <Link
                  to="/services"
                  className="self-start bg-[#D4AF37] text-black hover:bg-black hover:text-[#D4AF37] font-semibold text-sm px-6 py-2.5 rounded-full flex items-center space-x-2 rtl:space-x-reverse transition-colors duration-300 shadow-md"
                >
                  <span>{card.buttonText}</span>
                  <svg
                    className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Collections Link */}
        <Link
          to="/services"
          className="border border-gray-800 mt-[3vh] text-gray-900 hover:bg-black hover:text-white font-medium text-sm px-8.5 py-3.5 rounded-full flex items-center space-x-3 rtl:space-x-reverse transition-all duration-300"
        >
          <span>{content.viewAll}</span>
          <svg
            className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Page2;