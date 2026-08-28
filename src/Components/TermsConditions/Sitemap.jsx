import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext'; // Adjust relative path if needed

const content = {
  en: {
    title: 'Sitemap',
    subtitle: 'Akoya Premium Laundry',
    intro: 'Explore all pages and services available on our platform.',
    sections: [
      {
        category: 'Main Pages',
        links: [
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'About Us', path: '/about' },
          { name: 'Vision & Mission', path: '/vision-mission' },
          { name: 'Contact Us', path: '/contact' },
        ],
      },
      {
        category: 'Account & Services',
        links: [
          { name: 'Book Now', path: '/booking' },
          { name: 'Client Login', path: '/login' },
          { name: 'Sign Up', path: '/signup' },
        ],
      },
      {
        category: 'Legal & Info',
        links: [
          { name: 'Terms and Conditions', path: '/terms' },
          { name: 'Privacy Policy', path: '/privacy' },
        ],
      },
    ],
  },
  ar: {
    title: 'خريطة الموقع',
    subtitle: 'أكويا للغسيل الفاخر',
    intro: 'استكشف جميع الصفحات والخدمات المتاحة على منصتنا.',
    sections: [
      {
        category: 'الصفحات الرئيسية',
        links: [
          { name: 'الرئيسية', path: '/' },
          { name: 'الخدمات', path: '/services' },
          { name: 'من نحن', path: '/about' },
          { name: 'الرؤية والرسالة', path: '/vision-mission' },
          { name: 'اتصل بنا', path: '/contact' },
        ],
      },
      {
        category: 'الحساب والخدمات',
        links: [
          { name: 'احجز الآن', path: '/booking' },
          { name: 'تسجيل الدخول', path: '/login' },
          { name: 'إنشاء حساب', path: '/signup' },
        ],
      },
      {
        category: 'الشروط والمعلومات',
        links: [
          { name: 'الشروط والأحكام', path: '/terms' },
          { name: 'سياسة الخصوصية', path: '/privacy' },
        ],
      },
    ],
  },
};

const Sitemap = () => {
  const { isRtl, lang } = useLanguage();
  const t = content[lang] || content.en;

  return (
    <div
      className="bg-[#FAF8F5] min-h-screen text-gray-800 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <header className="text-center mb-8 sm:mb-10 md:mb-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B132B] mb-2 font-serif tracking-tight">
            {t.title}
          </h1>
          <p className="text-[#C59B27] font-semibold text-sm sm:text-base md:text-lg">
            {t.subtitle}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-1.5 sm:mt-2 max-w-md mx-auto">
            {t.intro}
          </p>
          <div className="w-16 sm:w-20 h-[3px] bg-[#C59B27] mx-auto mt-3 sm:mt-4 rounded-full" />
        </header>

        {/* Sitemap Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {t.sections.map((section, idx) => (
            <section
              key={idx}
              className="bg-white p-5 sm:p-6 md:p-7 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0B132B] mb-3 sm:mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C59B27] shrink-0" />
                <span>{section.category}</span>
              </h2>
              <ul className="space-y-2.5 sm:space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.path}
                      className="text-gray-700 hover:text-[#C59B27] active:text-[#B38A1F] text-xs sm:text-sm font-medium inline-block transition-transform duration-200 transform hover:translate-x-1.5 rtl:hover:-translate-x-1.5 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/30 rounded px-1 -mx-1 py-0.5"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Sitemap;