import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext'; // Adjust path as needed

// Replace these imports with your actual image assets
import plasticWrapImg from '../../assets/suit-plastic.jpeg';
import luxuryFabricImg from '../../assets/package.jpg';
import premiumBoxImg from '../../assets/BOX.jpeg';

const pageData = {
  en: {
    heading: 'The Final Touch',
    subheading: 'PACKAGING OPTIONS',
    buttonText: 'Book Your Order',
    cards: [
      {
        id: 'plastic',
        badge: 'Included',
        title: 'Plastic Wrap',
        description:
          'Crystal-clear protective wrapping with our embossed gold seal for discreet luxury.',
        features: [
          'Medical-grade transparency',
          'Anti-static interior',
          'Recyclable material',
          'Tamper-evident closure',
        ],
        image: plasticWrapImg,
      },
      {
        id: 'fabric',
        badge: '+10 QAR',
        title: 'Luxury Fabric Wrap',
        description:
          'Cashmere-lined protective casing with magnetic closure and monogram option.',
        features: [
          'Italian wool exterior',
          'Silk-lined interior',
          'Magnetic seal',
          'Reusable design',
        ],
        image: luxuryFabricImg,
      },
      {
        id: 'giftbox',
        badge: '+4 QAR',
        title: 'Premium Gift Box',
        description:
          'Handcrafted wooden presentation case with velvet interior and scent capsule.',
        features: [
          'Sandalwood construction',
          'French velvet lining',
          'Integrated scent capsule',
          'Heirloom quality',
        ],
        image: premiumBoxImg,
      },
    ],
  },
  ar: {
    heading: 'اللمسة الأخيرة',
    subheading: 'خيارات التغليف',
    buttonText: 'احجز طلبك الان',
    cards: [
      {
        id: 'plastic',
        badge: 'مشمول',
        title: 'غلاف بلاستيكي',
        description:
          'غلاف واقٍ شفاف كالمحافظة على الملابس مع ختمنا الذهبي لتقديم لمسة أنيقة.',
        features: [
          'شفافية طبية عالي',
          'مضاد للكهرباء الساكنة',
          'مواد قابلة لإعادة التدوير',
          'إغلاق محكم وآمن',
        ],
        image: plasticWrapImg,
      },
      {
        id: 'fabric',
        badge: '+10 ر.ق',
        title: 'غلاف قماش فاخر',
        description:
          'غطاء واقٍ مبطن بالكشمير مع إغلاق مغناطيسي وخيار الطباعة الشعار.',
        features: [
          'طبقة خارجية من الصوف الإيطالي',
          'بطانة داخلية من الحرير',
          'إغلاق مغناطيسي محكم',
          'تصميم قابل لإعادة الاستخدام',
        ],
        image: luxuryFabricImg,
      },
      {
        id: 'giftbox',
        badge: '+4 ر.ق',
        title: 'صندوق هدايا فاخر',
        description:
          'صندوق عرض خشبي مصنوع يدوياً مع بطانة مخملية وكبسولة عطرية.',
        features: [
          'تصنيع من خشب الصندل',
          'بطانة مخملية فرنسية',
          'كبسولة عطرية مدمجة',
          'جودة عالية الجودة',
        ],
        image: premiumBoxImg,
      },
    ],
  },
};

const Page5 = () => {
  const { lang, isRtl: langIsRtl } = useLanguage();
  const navigate = useNavigate();
  const content = pageData[lang] || pageData.en;
  const isRtl = lang === 'ar' || langIsRtl;

  const handleBookOrder = () => {
    navigate('/booking'); // Routes to your Booking page route
  };

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full bg-[#FAF9F7] py-10 sm:py-14 md:py-20 px-4 sm:px-8 md:px-12 lg:px-24 text-gray-900"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-3 sm:mb-4 text-[#1a1a1a]">
            {content.heading}
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] font-semibold text-xs sm:text-base md:text-[18px] tracking-widest uppercase">
              {content.subheading}
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-[#D4AF37]"></span>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 w-full mb-10 sm:mb-16 items-stretch">
          {content.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] md:hover:scale-105 transition-all duration-400 flex flex-col justify-between border border-gray-100/80 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain object-center"
                />

                {/* Black gradient with opacity fading from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 bg-[#E5C158] text-black font-semibold text-xs px-3.5 sm:px-4 py-1.5 rounded-full shadow-md z-10">
                  {card.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-800 text-xs sm:text-sm mb-4 sm:mb-6 font-normal leading-relaxed">
                    {card.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-2 sm:space-y-3">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-800">
                        <svg
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <button
          onClick={handleBookOrder}
          className="w-full sm:w-auto bg-[#1C1C1E] hover:bg-black text-white font-semibold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
        >
          <span>{content.buttonText}</span>
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </button>

      </div>
    </section>
  );
};

export default Page5;