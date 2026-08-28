import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext'; // Adjust path if needed
import ecoImg from '../../assets/eco.jpg';

const About1p = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative w-full h-[90vh] min-h-[550px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ecoImg})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-75" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white  mb-4">
          {lang === 'ar' ? 'العناية الفاخرة بالملابس. بأسلوب جديد.' : 'Luxury Laundry. Reimagined.'}
        </h1>

        {/* Subtitle with Horizontal Lines */}
        <div className="flex items-center justify-center space-x-3 space-x-reverse my-2 w-full max-w-md">
          <span className="h-[1px] flex-1 bg-[#D4AF37]" />
          <span className="text-sm md:text-base tracking-[0.25em] font-medium text-[#D4AF37] uppercase px-2 whitespace-nowrap">
            {lang === 'ar' ? 'مجموعة أكويا' : 'AKOYA COLLECTION'}
          </span>
          <span className="h-[1px] flex-1 bg-[#D4AF37]" />
        </div>

        {/* Call to Action Button */}
        <div className="mt-8">
          <Link
            to="/booking"
            className="inline-block bg-[#D4AF37] hover:bg-[#c39e2e] text-black font-medium text-base md:text-lg px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
          >
            {lang === 'ar' ? 'حدد موعد الاستلام' : 'Schedule Your Pickup'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About1p;