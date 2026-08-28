import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext'; // Adjust relative path if needed

import logoImg from '../../assets/companylogo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, toggleLanguage, isRtl } = useLanguage();
  const location = useLocation();

  // Array of light-themed pages where Navbar needs a solid dark background
  const darkNavRoutes = [
    '/terms',
    '/privacy',
    '/sitemap',
    '/vision-mission',
    '/visionmission',
  ];
  const currentPath = location.pathname.toLowerCase();

  // Check if current path matches any of the designated routes
  const isSolidDarkPage = darkNavRoutes.includes(currentPath);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine background color based on active route and scroll position
  const getNavBackground = () => {
    if (isSolidDarkPage) {
      return 'bg-[#0B132B] py-3.5 shadow-xl shadow-black/20'; // Solid dark navy for Terms, Privacy, Sitemap, and Vision pages
    }
    if (isScrolled) {
      return 'bg-[#8E8A83]/90 py-3.5 backdrop-blur-sm shadow-xl shadow-black/15'; // Scrolled background
    }
    return 'bg-transparent py-3.5'; // Default top transparent style
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${getNavBackground()}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Image */}
        <Link
          to="/"
          className="flex items-center transition-transform duration-300 hover:scale-105"
        >
          <img
            src={logoImg}
            alt="AKOYA Luxury Laundry"
            className="h-9 md:h-11 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 rtl:space-x-reverse text-[14px] uppercase tracking-wider font-medium">
          <li>
            <Link
              to="/"
              className="inline-block transition-transform duration-350 hover:scale-105 text-white/90 hover:text-[#D4AF37]"
            >
              {isRtl ? 'الرئيسية' : 'Home'}
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="inline-block transition-transform duration-350 hover:scale-105 text-white/90 hover:text-[#D4AF37]"
            >
              {isRtl ? 'الخدمات' : 'Services'}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="inline-block transition-transform duration-350 hover:scale-105 text-white/90 hover:text-[#D4AF37]"
            >
              {isRtl ? 'من نحن' : 'About'}
            </Link>
          </li>
          <li>
            <Link
              to="/vision-mission"
              className="inline-block transition-transform duration-350 hover:scale-105 text-white/90 hover:text-[#D4AF37]"
            >
              {isRtl ? 'الرؤية والرسالة' : 'Vision & Mission'}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="inline-block transition-transform duration-350 hover:scale-105 text-white/90 hover:text-[#D4AF37]"
            >
              {isRtl ? 'اتصل بنا' : 'Contact'}
            </Link>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* 1. Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="border border-[#D4AF37] text-white px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer hover:bg-[#D4AF37]/10 transition-colors"
          >
            {isRtl ? 'English' : 'العربية'}
          </button>

          {/* 2. Client Login Button */}
          <Link
            to="/login"
            className="border border-[#D4AF37] text-white px-4 py-1.5 rounded-full text-sm font-medium transition-transform duration-350 hover:scale-107 inline-block"
          >
            {isRtl ? 'تسجيل الدخول' : 'Client Login'}
          </Link>

          {/* 3. Book Now Button */}
          <Link
            to="/booking"
            className="bg-[#D4AF37] text-black font-semibold px-5 py-1.5 rounded-full text-sm transition-transform duration-350 hover:scale-107 shadow-md inline-block"
          >
            {isRtl ? 'احجز الآن' : 'Book Now'}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;