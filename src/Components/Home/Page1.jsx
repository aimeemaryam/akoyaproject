import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '../../LanguageContext';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import platinumCareImg from '../../assets/platinumCare.jpg';
import ecoImg from '../../assets/eco.jpg';
import pressingImg from '../../assets/pressing.jpg';

const slideTranslations = {
  en: [
    {
      id: 1,
      title: 'Premium Garment Care',
      subtitle: 'Expert cleaning for your most delicate fabrics',
      buttonText: 'Schedule Pickup',
      bgImage: platinumCareImg,
    },
    {
      id: 2,
      title: 'Eco-Conscious Cleaning',
      subtitle: 'Sustainable methods without compromising quality',
      buttonText: 'Schedule Pickup',
      bgImage: ecoImg,
    },
    {
      id: 3,
      title: 'Precision Pressing',
      subtitle: 'Impeccable finishes for business and formalwear',
      buttonText: 'Schedule Pickup',
      bgImage: pressingImg,
    },
  ],
  ar: [
    {
      id: 1,
      title: 'رعاية متميزة للملابس',
      subtitle: 'تنظيف احترافي لأقمشتك الحساسة',
      buttonText: 'جدولة الاستلام',
      bgImage: platinumCareImg,
    },
    {
      id: 2,
      title: 'تنظيف صديق للبيئة',
      subtitle: 'طرق مستدامة دون المساس بالجودة',
      buttonText: 'جدولة الاستلام',
      bgImage: ecoImg,
    },
    {
      id: 3,
      title: 'كي دقيق',
      subtitle: 'تشطيبات مثالية للملابس الرسمية',
      buttonText: 'جدولة الاستلام',
      bgImage: pressingImg,
    },
  ],
};

const Page1 = () => {
  const { lang, isRtl } = useLanguage();
  const slides = slideTranslations[lang] || slideTranslations.en;

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full h-[60vh] sm:h-[70vh] md:h-[84vh] min-h-[400px] relative bg-black text-white group" dir={isRtl ? 'rtl' : 'ltr'}>
      <style>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #A3A3A3 !important;
          opacity: 0.7 !important;
          border-radius: 9999px;
          transition: all 0.4s ease-in-out !important;
          margin: 0 4px !important;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            margin: 0 5px !important;
          }
        }
        .swiper-pagination-bullet-active {
          width: 20px !important;
          height: 8px !important;
          background-color: #D4AF37 !important;
          opacity: 1 !important;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet-active {
            width: 28px !important;
            height: 10px !important;
          }
        }
      `}</style>

      <Swiper
        key={lang}
        modules={[Navigation, Pagination, Autoplay]}
        effect="slide"
        speed={800}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div
                className={`absolute inset-0 ${
                  isRtl
                    ? 'bg-gradient-to-l from-[#1C1C1C]/90 via-[#1C1C1C]/50 to-[#1C1C1C]/10'
                    : 'bg-gradient-to-r from-[#1C1C1C]/90 via-[#1C1C1C]/50 to-[#1C1C1C]/10'
                }`}
              />
            </div>

            {/* Slide Content with Responsive Typography */}
            <div
              className={`absolute inset-0 z-20 flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 lg:px-24 max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl ${
                isRtl ? 'right-0 text-right' : 'left-0 text-left'
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-3 sm:mb-4 leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-300 font-light mb-6 sm:mb-8 drop-shadow-md">
                {slide.subtitle}
              </p>
              <button className="bg-[#d4af37] hover:bg-amber-400 hover:scale-105 text-black font-medium text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-lg cursor-pointer">
                {slide.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev Button - Hidden on mobile, shown on md+ screens to save space */}
      <button
        ref={prevRef}
        className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-sm items-center justify-center transition-all border border-white/10 shadow-lg cursor-pointer ${
          isRtl ? 'right-4 md:right-6' : 'left-4 md:left-6'
        }`}
        aria-label="Previous Slide"
      >
        <svg
          className={`w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] ${isRtl ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button - Hidden on mobile, shown on md+ screens */}
      <button
        ref={nextRef}
        className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-sm items-center justify-center transition-all border border-white/10 shadow-lg cursor-pointer ${
          isRtl ? 'left-4 md:left-6' : 'right-4 md:right-6'
        }`}
        aria-label="Next Slide"
      >
        <svg
          className={`w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] ${isRtl ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Page1;