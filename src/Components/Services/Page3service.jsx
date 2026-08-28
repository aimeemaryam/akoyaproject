import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext'; // Adjust path if needed

const Page3service = () => {
  const { lang } = useLanguage();

  return (
    <>
    <section className="w-full bg-[#1C1C1C] text-white py-20 px-6 md:px-12 text-center border-t border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl font-light text-[#D4AF37] mb-4 tracking-wide">
          {lang === 'ar'
            ? 'هل تحتاج إلى خدمة مخصصة؟'
            : 'Need Personalized Service?'}
        </h2>

        {/* Yellow Decorative Divider Line */}
        

        {/* Subtitle / Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
          {lang === 'ar'
            ? 'فريق الكونسيرج لكبار الشخصيات متوافر على مدار الساعة 24/7 للتعامل مع الطلبات الخاصة، القطع الرقيقة، أو الطلبات الضخمة للشركات والمنازل.'
            : 'Our VIP concierge team is available 24/7 to handle special requests, delicate items, or bulk orders for businesses and residences.'}
        </p>

        {/* Action Button */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c39e2e] text-black font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
        >
          <span>
            {lang === 'ar' ? 'تواصل مع الكونسيرج' : 'Contact Concierge'}
          </span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
        </Link>
      </div>
    </section>
 <span className="h-[4px] w-full bg-[#D4AF37] mb-8" />
</> );
};

export default Page3service;