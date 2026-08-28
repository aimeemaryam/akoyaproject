import React from 'react';
import { useLanguage } from '../../LanguageContext'; // Adjust path as needed
import { HiOutlineSparkles, HiOutlineInformationCircle } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';
import clubImg from '../../assets/aquaClub.jpg'; // Replace with your luxury garment image asset

const pageData = {
  en: {
    badge: 'EXCLUSIVE',
    title: 'Akoya Club',
    subtitle: 'FOR THE FEW WHO KNOW',
    description:
      'Our invitation-only membership program offers unparalleled benefits for those who demand the absolute best in garment care and convenience.',
    features: [
      'Priority scheduling with 2-hour pickup windows',
      'Dedicated garment concierge',
      'Complimentary fragrance infusion',
      'Luxury packaging as standard',
      'Bi-annual complimentary couture care',
      'Exclusive seasonal offers',
    ],
    btnPrimary: 'Request Invitation',
    btnSecondary: 'Learn More',
  },
  ar: {
    badge: 'حصري',
    title: 'نادي أكويا',
    subtitle: 'للنخبة فقط',
    description:
      'يقدم برنامج العضوية الخاص بنا والمتاح بدعوة فقط مزايا لا مثيل لها لأولئك الذين يطلبون الأفضل مطلقاً في العناية بالملابس والراحة.',
    features: [
      'جدولة أولوية مع نوافذ استلام لمدة ساعتين',
      'مساعد كونسيرج خاص بالملابس',
      'إضافة عطور مجانية',
      'التغليف الفاخر كمعيار قياسي',
      'عناية بالأزياء الراقية مجاناً مرتين في السنة',
      'عروض موسمية حصرية',
    ],
    btnPrimary: 'طلب دعوة',
    btnSecondary: 'اعرف المزيد',
  },
};

const Page7 = () => {
  const { lang, isRtl: langIsRtl } = useLanguage();
  const content = pageData[lang] || pageData.en;
  const isRtl = lang === 'ar' || langIsRtl;

  return (
    <>
      <section 
        className="w-full bg-[#1A1A1A] text-white py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24 border-t-2 border-[#D4AF37] overflow-hidden"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Floating Badge */}
          <div className="relative w-full rounded-2xl shadow-2xl group mt-4 lg:mt-0">
            <div className="relative h-[260px] sm:h-[380px] md:h-[460px] lg:h-[500px] w-full">
              <img
                src={clubImg}
                alt={content.title}
                className="w-full h-full rounded-2xl object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
            </div>

            {/* Floating Gold Badge */}
            <div className="absolute -top-4 right-4 sm:-top-5 sm:-right-4 md:-top-6 md:-right-6 rtl:right-auto rtl:left-4 rtl:sm:right-auto rtl:sm:-left-4 rtl:md:-left-6 bg-[#D4AF37] text-black font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-full shadow-lg flex items-center gap-1.5 z-10">
              <HiOutlineSparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{content.badge}</span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center">
            
            {/* Section Header */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#D4AF37] tracking-wide mb-2 sm:mb-3">
              {content.title}
            </h2>
            
            <p className="text-white font-semibold text-base sm:text-lg lg:text-xl tracking-widest uppercase mb-3 sm:mb-4">
              {content.subtitle}
            </p>

            <div className="w-16 sm:w-20 h-[2px] bg-[#D4AF37] mb-4 sm:mb-6" />

            <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-xl font-medium">
              {content.description}
            </p>

            {/* Feature List */}
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {content.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base text-gray-200">
                  <svg
                    className="w-4 h-4 text-[#D4AF37] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Primary Invitation Button */}
              <button className="border border-[#D4AF37] text-[#E5C158] hover:bg-[#D4AF37] hover:text-black font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer">
                <span>{content.btnPrimary}</span>
                <FiPlus className="w-4 h-4" />
              </button>

              {/* Secondary Button */}
              <button className="bg-[#D4AF37] hover:bg-[#c39e2e] text-black font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer">
                <span>{content.btnSecondary}</span>
                <HiOutlineInformationCircle className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>
      
      <div className="w-full h-[4px] bg-[#D4AF37]" />
    </>
  );
};

export default Page7;