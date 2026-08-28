import React from 'react';
import { useLanguage } from '../../LanguageContext'; // Adjust path if needed

// Asset Imports (Make sure these image paths exist in your project)
import expert1 from '../../assets/pexels-photo-769772.jpg';
import expert2 from '../../assets/pexelsg.jpg';
import expert3 from '../../assets/pexels.jpg';

const specialists = [
  {
    id: 1,
    nameEn: 'Ahmed Al-Mansoori',
    nameAr: 'أحمد المنصوري',
    roleEn: 'Head of Couture Care',
    roleAr: 'رئيس قسم العناية بالأزياء الفاخرة',
    descEn: '20+ years in luxury garment care',
    descAr: 'أكثر من 20 عاماً في مجال العناية بالملابس الفاخرة',
    image: expert1,
  },
  {
    id: 2,
    nameEn: 'Layla Hassan',
    nameAr: 'ليلى حسن',
    roleEn: 'Fabric Technology Expert',
    roleAr: 'خبيرة تكنولوجيا الأقمشة',
    descEn: 'Fabric scientist and preservation expert',
    descAr: 'عالمة أقمشة وخبيرة في الحفاظ عليها',
    image: expert2,
  },
  {
    id: 3,
    nameEn: 'Yousef Ibrahim',
    nameAr: 'يوسف إبراهيم',
    roleEn: 'Operations Director',
    roleAr: 'مدير العمليات',
    descEn: 'Ensuring seamless service delivery',
    descAr: 'ضمان تقديم خدمة سلسة وممتازة',
    image: expert3,
  },
];

const About4p = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  return (
    <section 
      className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24 text-center"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Title & Subtitle Section */}
      <div className="max-w-4xl mx-auto mb-10 sm:mb-14 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 tracking-wide mb-3">
          {isArabic ? 'التقِ بخبراء الأقمشة لدينا' : 'Meet Our Fabric Specialists'}
        </h2>

        {/* Small Gold Divider Line */}
        <span className="h-[1px] w-16 sm:w-24 bg-[#D4AF37] mb-4 sm:mb-6" />

        <p className="text-gray-800 text-sm sm:text-base max-w-2xl px-2">
          {isArabic
            ? 'يمتلك فريقنا من خبراء العناية بالملابس عقوداً من الخبرة المشتركة في التعامل مع الأقمشة الفاخرة.'
            : 'Our team of garment care experts brings decades of combined experience in handling luxury fabrics'}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {specialists.map((item) => (
          <div
            key={item.id}
            className="bg-[#F8F5F2] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-start text-center min-h-[220px] sm:min-h-[240px] shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Circular Image with Gold Border */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-[#D4AF37] mb-5 sm:mb-6 shadow-sm overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={isArabic ? item.nameAr : item.nameEn}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Specialist Name */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
              {isArabic ? item.nameAr : item.nameEn}
            </h3>

            {/* Specialist Role */}
            <p className="text-[#D4AF37] font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
              {isArabic ? item.roleAr : item.roleEn}
            </p>

            {/* Specialist Description */}
            <p className="text-gray-800 text-xs sm:text-sm max-w-xs leading-relaxed">
              {isArabic ? item.descAr : item.descEn}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About4p;