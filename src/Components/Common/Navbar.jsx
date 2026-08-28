import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { useLanguage } from '../../LanguageContext'; // Adjust relative path if needed

import logoImg from '../../assets/companylogo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Determine background color based on active route and scroll position
  const getNavBackground = () => {
    if (isSolidDarkPage) {
      return 'bg-[#0B132B] py-3 md:py-3.5 shadow-xl shadow-black/20';
    }
    if (isScrolled) {
      return 'bg-[#8E8A83]/90 py-3 md:py-3.5 backdrop-blur-sm shadow-xl shadow-black/15';
    }
    return 'bg-transparent py-3 md:py-3.5';
  };

  const navLinks = [
    { path: '/', labelEn: 'Home', labelAr: 'الرئيسية' },
    { path: '/services', labelEn: 'Services', labelAr: 'الخدمات' },
    { path: '/about', labelEn: 'About', labelAr: 'من نحن' },
    { path: '/vision-mission', labelEn: 'Vision & Mission', labelAr: 'الرؤية والرسالة' },
    { path: '/contact', labelEn: 'Contact', labelAr: 'اتصل بنا' },
  ];

  return (
    <nav
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${getNavBackground()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Image */}
        <Link
          to="/"
          className="flex items-center transition-transform duration-300 hover:scale-105 flex-shrink-0"
        >
          <img
            src={logoImg}
            alt="AKOYA Luxury Laundry"
            className="h-8 sm:h-9 md:h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center space-x-6 lg:space-x-8 rtl:space-x-reverse text-[13px] lg:text-[14px] uppercase tracking-wider font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="inline-block transition-transform duration-300 hover:scale-105 text-white/90 hover:text-[#D4AF37]"
              >
                {isRtl ? link.labelAr : link.labelEn}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Buttons & Mobile Hamburger Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse">
          {/* 1. Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="border border-[#D4AF37] text-white px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold cursor-pointer hover:bg-[#D4AF37]/10 transition-colors"
          >
            {isRtl ? 'English' : 'العربية'}
          </button>

          {/* 2. Client Login Button (Hidden on ultra-small screens, visible on sm+) */}
          <Link
            to="/login"
            className="hidden sm:inline-block border border-[#D4AF37] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-transform duration-300 hover:scale-105"
          >
            {isRtl ? 'تسجيل الدخول' : 'Client Login'}
          </Link>

          {/* 3. Book Now Button */}
          <Link
            to="/booking"
            className="bg-[#D4AF37] text-black font-semibold px-3 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm transition-transform duration-300 hover:scale-105 shadow-md inline-block"
          >
            {isRtl ? 'احجز الآن' : 'Book Now'}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#D4AF37] p-1.5 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B132B] border-t border-gray-800/80 px-6 pt-4 pb-6 transition-all duration-300 shadow-2xl">
          <ul className="flex flex-col space-y-4 text-sm uppercase tracking-wider font-medium mb-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="block text-white/90 hover:text-[#D4AF37] py-1 transition-colors"
                >
                  {isRtl ? link.labelAr : link.labelEn}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="pt-2 border-t border-gray-800 flex flex-col space-y-3 sm:hidden">
            <Link
              to="/login"
              className="w-full text-center border border-[#D4AF37] text-white py-2 rounded-full text-xs font-medium"
            >
              {isRtl ? 'تسجيل الدخول' : 'Client Login'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;