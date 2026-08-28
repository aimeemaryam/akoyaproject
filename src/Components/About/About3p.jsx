import React from 'react';
import { useLanguage } from '../../LanguageContext'; // Adjust path if needed

const journeySteps = [
  {
    id: 1,
    step: '1.',
    titleEn: 'Select Wash Type',
    titleAr: 'اختر نوع الغسيل',
    descEn: 'Standard or Express wash options to suit your needs',
    descAr: 'خيارات غسيل قياسية أو سريعة تناسب احتياجاتك',
    // T-Shirt Icon
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 2l3 3.5L16.5 8 18 10v12H6V10L7.5 8 5 5.5 8 2h8zm-4 2c-.83 0-1.5.67-1.5 1.5S11.17 7 12 7s1.5-.67 1.5-1.5S12.83 4 12 4z" />
      </svg>
    ),
  },
  {
    id: 2,
    step: '2.',
    titleEn: 'Choose Garments',
    titleAr: 'اختر الملابس',
    descEn: 'From daily wear to delicate couture - we handle all',
    descAr: 'من الملابس اليومية إلى الأزياء الفاخرة - نعتني بكل القطع',
    // Open Box Icon
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3l-4 4H9L5 3H2v4l3 3v11h14V10l3-3V3h-3zm-7 3h2.17l2 2H7.83l2-2H12z" />
      </svg>
    ),
  },
  {
    id: 3,
    step: '3.',
    titleEn: 'Steam Finishing',
    titleAr: 'الكي بالبخار',
    descEn: 'Professional pressing for impeccable results',
    descAr: 'كي احترافي بالبخار لنتائج مثالية ولا تشوبها شائبة',
    // Soap Dispenser / Steam Bottle Icon
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2h2v2h-2V2zm-3 4h8v2H9V6zm1 4h6v12H10V10zm2-8h-4v2h4V2z" />
      </svg>
    ),
  },
  {
    id: 4,
    step: '4.',
    titleEn: 'Fragrance Infusion',
    titleAr: 'تعطير فاخر',
    descEn: 'Luxury scents for men and women',
    descAr: 'عطور فاخرة تناسب الرجال والنساء',
    // Spray Bottle Icon
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 8h-4V5h4v3zm-5-5h6v2H9V3zm1 7h4v12h-4V10zm9-3h2v2h-2V7zm-2 3h2v2h-2v-2zm2 3h2v2h-2v-2z" />
      </svg>
    ),
  },
  {
    id: 5,
    step: '5.',
    titleEn: 'Packaging',
    titleAr: 'التغليف',
    descEn: 'Choose from our premium wrapping options',
    descAr: 'اختر من بين خيارات التغليف الفاخرة لدينا',
    // Closed Box Icon
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2h6.5l-2.5 3H12V6zM5.5 6H10v3H4l1.5-3zM4 18v-7h16v7H4z" />
      </svg>
    ),
  },
  {
    id: 6,
    step: '6.',
    titleEn: 'Personalization',
    titleAr: 'إضافة لمسة شخصية',
    descEn: 'Add a custom card for gifts',
    descAr: 'إضافة بطاقة مخصصة للإهداء والهدايا',
    // Gift Icon
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.75-.5-.75C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1h-2.12l1.43-2.14c.22-.32.42-.51.69-.51zM9 4c.27 0 .47.19.69.51L11.12 6H9c-.55 0-1-.45-1-1s.45-1 1-1zm11 15H4V8h16v11z" />
      </svg>
    ),
  },
  {
    id: 7,
    step: '7.',
    titleEn: 'WhatsApp Checkout',
    titleAr: 'الدفع عبر الواتساب',
    descEn: 'Easy confirmation via WhatsApp',
    descAr: 'تأكيد سهل ومباشر عبر تطبيق الواتساب',
    // Speech Bubble / WhatsApp Icon
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
      </svg>
    ),
  },
  {
    id: 8,
    step: '8.',
    titleEn: 'AI Assistance',
    titleAr: 'المساعدة بالذكاء الاصطناعي',
    descEn: '3D avatars guide you in Arabic & English',
    descAr: 'شخصيات ثلاثية الأبعاد تفاعلية باللغتين العربية والإنجليزية',
    // Robot Icon
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a2 2 0 012 2v1h1a3 3 0 013 3v2h1a2 2 0 012 2v6a2 2 0 01-2 2h-1v1a3 3 0 01-3 3H9a3 3 0 01-3-3v-1H5a2 2 0 01-2-2v-6a2 2 0 012-2h1V8a3 3 0 013-3h1V4a2 2 0 012-2zm-3 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-6.5 6a.5.5 0 000 1h7a.5.5 0 000-1h-7z" />
      </svg>
    ),
  },
];

const About3p = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  return (
    <section 
      className="w-full bg-[#F8F5F2] py-10 sm:py-14 md:py-18 px-4 sm:px-8 md:px-16 lg:px-24"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Section Title */}
      <div className="max-w-4xl mx-auto mb-8 sm:mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black tracking-wide">
          {isArabic ? 'رحلة خدماتنا' : 'Our Service Journey'}
        </h2>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {journeySteps.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-2xl p-5 sm:p-6 flex flex-col shadow-sm border border-gray-100 min-h-[160px] sm:min-h-[180px] justify-start transition-shadow hover:shadow-md ${
              isArabic ? 'text-right items-end' : 'text-left items-start'
            }`}
          >
            {/* Left/Right Aligned Icon Container */}
            <div className="mb-3 sm:mb-4 mt-2 sm:mt-3">{item.icon}</div>

            {/* Step Title */}
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1.5 sm:mb-2 w-full">
              {item.step} {isArabic ? item.titleAr : item.titleEn}
            </h3>

            {/* Step Description */}
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed w-full">
              {isArabic ? item.descAr : item.descEn}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About3p;