import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useLanguage } from '../../LanguageContext';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import platinumCareImg from '../../assets/exectiveCollection.jpg';
import ecoImg from '../../assets/platinumCare.jpg';
import pressingImg from '../../assets/eco.jpg';

const contactSlideTranslations = {
  en: [
    {
      id: 1,
      title: 'Contact Akoya Laundry',
      subtitle: 'Luxury laundry services tailored to your needs in Doha, Qatar',
      bgImage: platinumCareImg,
    },
    {
      id: 2,
      title: 'Professional Care',
      subtitle: 'Expert fabric handling with eco-friendly detergents',
      bgImage: ecoImg,
    },
    {
      id: 3,
      title: 'Express Service',
      subtitle: 'Quick turnaround without compromising quality',
      bgImage: pressingImg,
    },
  ],
  ar: [
    {
      id: 1,
      title: 'تواصل مع غسيل أكويا',
      subtitle: 'خدمات غسيل فاخرة مصممة خصيصاً لاحتياجاتك في الدوحة، قطر',
      bgImage: platinumCareImg,
    },
    {
      id: 2,
      title: 'العناية الاحترافية',
      subtitle: 'عناية خبيرة بالأقمشة باستخدام منظفات صديقة للبيئة',
      bgImage: ecoImg,
    },
    {
      id: 3,
      title: 'الخدمة السريعة',
      subtitle: 'تسليم سريع دون المساومة على الجودة',
      bgImage: pressingImg,
    },
  ],
};

const Contact1p = () => {
  const { lang } = useLanguage();
  const slides = contactSlideTranslations[lang] || contactSlideTranslations.en;
  const isRtl = lang === 'ar';

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[420px] relative bg-black text-white overflow-hidden"
    >
      {/* Custom Styles: All Pagination Dots are Uniform Circles */}
      <style>{`
        .contact-swiper-pagination .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background-color: #A3A3A3 !important;
          opacity: 0.7 !important;
          border-radius: 50% !important;
          transition: all 0.2s ease-in-out !important;
          margin: 0 4px !important;
        }
        @media (min-width: 640px) {
          .contact-swiper-pagination .swiper-pagination-bullet {
            width: 10px !important;
            height: 10px !important;
            margin: 0 5px !important;
          }
        }
        .contact-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #D4AF37 !important;
          opacity: 1 !important;
          transform: scale(1.1);
        }
      `}</style>

      <Swiper
        key={lang}
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        pagination={{
          clickable: true,
          el: '.contact-swiper-pagination',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image & Soft Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Slide Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 md:px-16 pt-12 sm:pt-0">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-2 sm:mb-3 drop-shadow-md max-w-4xl leading-tight">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-lg md:text-xl text-[#D4AF37] tracking-wide mb-3 sm:mb-4 font-normal max-w-2xl px-2">
                {slide.subtitle}
              </p>

              {/* Decorative Gold Accent Line */}
              <div className="w-16 sm:w-24 h-[1.5px] bg-[#D4AF37] opacity-80 rounded-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Centered Circular Dots Pagination Container */}
      <div className="absolute bottom-5 sm:bottom-8 md:bottom-10 left-0 right-0 z-30 flex justify-center pointer-events-none">
        <div className="contact-swiper-pagination flex items-center justify-center pointer-events-auto cursor-pointer" />
      </div>
    </div>
  );
};

export default Contact1p;