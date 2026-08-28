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
        ],
      },
    ],
  },
};

const Sitemap = () => {
  const { isRtl, lang } = useLanguage();
  const t = content[lang] || content.en;

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-gray-800 pt-28 pb-16" dir={isRtl ? 'rtl' : 'ltr'}>
      <main className="max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B132B] mb-2 font-serif">
            {t.title}
          </h1>
          <p className="text-[#C59B27] font-semibold text-lg">{t.subtitle}</p>
          <p className="text-gray-500 text-sm mt-2">{t.intro}</p>
          <div className="w-20 h-[3px] bg-[#C59B27] mx-auto mt-4 rounded-full" />
        </div>

        {/* Sitemap Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.sections.map((section, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B132B] mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                {section.category}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.path}
                      className="text-gray-700 hover:text-[#C59B27] hover:translate-x-1 rtl:hover:-translate-x-1 transition-all duration-200 inline-block font-medium text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default Sitemap;