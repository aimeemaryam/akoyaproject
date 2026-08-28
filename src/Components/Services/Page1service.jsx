import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useLanguage } from '../../LanguageContext';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import platinumCareImg from '../../assets/pCollection.jpg';
import ecoImg from '../../assets/eco.jpg';
import pressingImg from '../../assets/expert.jpg';

const serviceSlideTranslations = {
  en: [
    {
      id: 1,
      title: 'Premium Garment Care',
      subtitle: 'Experience the Akoya difference ',
      buttonText: 'Book a Collection',
      bgImage: ecoImg,
    },
    {
      id: 2,
      title: 'Luxury Laundry Services',
      subtitle: 'For the most discerning clients ',
      buttonText: 'Book a Collection',
      bgImage: platinumCareImg,
    },
    {
      id: 3,
      title: 'Precision Fabric Care',
      subtitle: "Tailored to your garment's needs ",
      buttonText: 'Book a Collection',
      bgImage: pressingImg,
    },
  ],
  ar: [
    {
      id: 1,
      title: 'العناية المتميزة بالملابس',
      subtitle: 'جرب اختلاف أكويا الفريد',
      buttonText: 'حجز المجموعات',
      bgImage: ecoImg,
    },
    {
      id: 2,
      title: 'خدمات الغسيل الفاخرة',
      subtitle: 'للعملاء الأكثر تميزاً',
      buttonText: 'حجز المجموعات',
      bgImage: platinumCareImg,
    },
    {
      id: 3,
      title: 'عناية دقيقة بالأقمشة',
      subtitle: 'مصممة حسب احتياجات ملابسك',
      buttonText: 'حجز المجموعات',
      bgImage: pressingImg,
    },
  ],
};

const Page1service = () => {
  const { lang } = useLanguage();
  const slides = serviceSlideTranslations[lang] || serviceSlideTranslations.en;

  return (
    <div className="w-full h-[82vh] relative bg-black text-white overflow-hidden">
      {/* Custom Styles for Pagination Bullets */}
      <style>{`
        .service-swiper-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #A3A3A3 !important;
          opacity: 0.7 !important;
          border-radius: 9999px;
          transition: all 0.4s ease-in-out !important;
          margin: 0 5px !important;
        }
        .service-swiper-pagination .swiper-pagination-bullet-active {
          width: 28px !important;
          height: 10px !important;
          background-color: #D4AF37 !important;
          opacity: 1 !important;
          border-radius: 9999px !important;
        }
      `}</style>

      <Swiper
        key={lang}
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        pagination={{
          clickable: true,
          el: '.service-swiper-pagination',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image & Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Slide Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 md:px-16">
              <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4 drop-shadow-md">
                {slide.title}
              </h1>

              {/* Decorative Gold Lines & Subtitle */}
              <div className="flex items-center justify-center space-x-4 space-x-reverse mb-8 w-full max-w-lg">
                <span className="h-[1px] bg-[#D4AF37] flex-1 opacity-80" />
                <p className="text-lg md:text-xl font-base text-[#E5C158] tracking-wider ">
                  {slide.subtitle}
                </p>
                <span className="h-[1px] bg-[#D4AF37] flex-1 opacity-80" />
              </div>

              {/* Action Button */}
              <Link
                to="/booking"
                className="bg-[#D4AF37] hover:bg-amber-400 hover:scale-105 text-black font-medium text-lg px-8 py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer"
              >
                {slide.buttonText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination & Scroll Down Arrow Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex flex-col items-center pointer-events-none">
        <div className="service-swiper-pagination flex items-center justify-center pointer-events-auto cursor-pointer mb-2" />
        <span className="text-white/70 text-3xl font-extrabold animate-bounce">↓</span>
      </div>
    </div>
  );
};

export default Page1service;