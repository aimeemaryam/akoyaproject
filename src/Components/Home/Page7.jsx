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
  const { lang } = useLanguage();
  const content = pageData[lang] || pageData.en;

  return (
    <>
    <section className="w-full bg-[#1A1A1A] text-white py-20 px-8 md:px-24 border-t-2 border-[#D4AF37]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Image with Floating Badge */}
        <div className="relative w-full rounded-2xl  shadow-2xl group">
          <div className="relative h-[380px] sm:h-[460px] md:h-[500px] w-full">
            <img
              src={clubImg}
              alt={content.title}
              className="w-full h-full rounded-2xl  object-cover object-center transition-transform duration-700 ease-out "
            />
            {/* Subtle Gradient Overlay at the bottom of the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Gold Badge */}
          <div className="absolute -top-6 -right-6  bg-[#D4AF37] text-black font-bold text-medium tracking-wider uppercase px-7 py-3 rounded-full shadow-lg flex items-center gap-1.5 z-10">
            <HiOutlineSparkles className="w-4 h-4" />
            <span>{content.badge}</span>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col justify-center">
          
          {/* Section Header */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#D4AF37] tracking-wide mb-3">
            {content.title}
          </h2>
          
          <p className="text-[white] font-semibold text-xl tracking-widest uppercase mb-4">
            {content.subtitle}
          </p>

          <div className="w-20 h-[2px] bg-[#D4AF37] mb-6"></div>

          <p className="text-white text-medium  leading-relaxed mb-8 max-w-xl font-semibold">
            {content.description}
          </p>

          {/* Checkmark Feature List */}
          <ul className="space-y-4 mb-10">
            {content.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm sm:text-medium text-gray-200">
                <svg
                  className="w-4 h-4 text-[#D4AF37] flex-shrink-0 rtl:ml-1"
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
          <div className="flex flex-wrap items-center gap-4">
            {/* Outline Request Invitation Button */}
            <button className="border border-[#D4AF37] text-[#E5C158] hover:bg-[#D4AF37] hover:text-black font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-sm  ">
              <span>{content.btnPrimary}</span>
              <FiPlus className="w-4 h-4" />
            </button>

            {/* Filled Learn More Button */}
            <button className="bg-[#D4AF37]  text-black font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-md ">
              <span>{content.btnSecondary}</span>
              <HiOutlineInformationCircle className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
    
      <div className=" w-full h-[4px] bg-[#D4AF37] "></div>
      </>
  );
};

export default Page7;