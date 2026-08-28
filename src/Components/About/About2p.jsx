import React from 'react';
import { useLanguage } from '../../LanguageContext'; // Adjust path if needed

const features = [
  {
    id: 1,
    titleEn: 'Premium Quality',
    titleAr: 'جودة فائقة',
    descEn: 'We use only the finest eco-friendly detergents and state-of-the-art equipment',
    descAr: 'نستخدم فقط أجود المنظفات الصديقة للبيئة وأحدث المعدات العالمية',
    icon: (
      <svg
        className="w-10 h-10 sm:w-12 sm:h-12 text-[#D4AF37]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
  },
  {
    id: 2,
    titleEn: 'Personalized Service',
    titleAr: 'خدمة مخصصة',
    descEn: 'Tailored solutions for each of garment with our expert fabric specialists',
    descAr: 'حلول مخصصة لكل قطعة ملابس مع خبراء العناية بالأقمشة لدينا',
    icon: (
      <svg
        className="w-10 h-10 sm:w-12 sm:h-12 text-[#D4AF37]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        <path d="M19.35 10.04L18.64 9.33l-2.12 2.12 1.41 1.41z" />
      </svg>
    ),
  },
  {
    id: 3,
    titleEn: 'Convenience',
    titleAr: 'راحة تامة',
    descEn: '24/7 booking with flexible pickup and delivery options available for your service',
    descAr: 'حجز على مدار الساعة 24/7 مع خيارات استلام وتسليم مرنة',
    icon: (
      <svg
        className="w-10 h-10 sm:w-12 sm:h-12 text-[#D4AF37]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
  },
];

const About2 = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  return (
    <section 
      className="w-full bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-center mt-4 sm:mt-7"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Title Section */}
      <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 tracking-wide">
          {isArabic ? (
            <>
              لماذا تختار <span className="text-[#D4AF37]">أكويا</span>
            </>
          ) : (
            <>
              Why Choose <span className="text-[#D4AF37]">Akoya</span>
            </>
          )}
        </h2>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-11">
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-[#F8F5F2] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-start text-center min-h-[240px] sm:min-h-[280px] shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="mb-4 sm:mb-5 flex items-center justify-center">
              {item.icon}
            </div>

            {/* Feature Title */}
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
              {isArabic ? item.titleAr : item.titleEn}
            </h3>

            {/* Feature Description */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {isArabic ? item.descAr : item.descEn}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About2;