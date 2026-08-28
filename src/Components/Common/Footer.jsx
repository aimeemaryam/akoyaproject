import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { useLanguage } from '../../LanguageContext'; // Adjust path as needed
import logoImg from '../../assets/companylogo.png';

const footerData = {
  en: {
    description: "Luxury garment care redefined. Serving Doha's discerning clients with unparalleled quality and service.",
    servicesHeader: 'Our Services',
    services: [
      'Premium Laundry',
      'Dry Cleaning',
      'Steam Pressing',
      'Fragrance Infusion',
      'Couture Care',
      'VIP Club',
    ],
    contactHeader: 'Contact Us',
    location: 'West Bay, Doha, Qatar',
    newsletterHeader: 'Newsletter',
    newsletterDesc: 'Subscribe for exclusive offers and garment care tips.',
    placeholder: 'Your email address',
    subscribeBtn: 'Subscribe',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    sitemap: 'Sitemap',
  },
  ar: {
    description: 'إعادة تعريف العناية بالملابس الفاخرة. نخدم عملاء الدوحة المميزين بجودة وخدمة لا مثيل لها.',
    servicesHeader: 'خدماتنا',
    services: [
      'غسيل فاخر',
      'تنظيف جاف',
      'كوي بالبُخار',
      'تعطير الملابس',
      'عناية بالأزياء الراقية',
      'نادي كبار الشخصيات',
    ],
    contactHeader: 'اتصل بنا',
    location: 'الدفنة، الدوحة، قطر',
    newsletterHeader: 'النشرة الإخبارية',
    newsletterDesc: 'اشترك للحصول على عروض حصرية ونصائح للعناية بالملابس.',
    placeholder: 'عنوان بريدك الإلكتروني',
    subscribeBtn: 'اشتراك',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة',
    sitemap: 'خريطة الموقع',
  },
};

const Footer = () => {
  const { lang } = useLanguage();
  const content = footerData[lang] || footerData.en;
  const isRtl = lang === 'ar';

  const [email, setEmail] = useState('');
  const [activeIcon, setActiveIcon] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      window.location.href = '/';
    }
  };

  return (
    <footer
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full bg-[#1A1A1A] text-gray-300 pt-16 pb-8 px-4 md:px-10 font-sans border-t border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
        
        {/* Column 1: Brand Info & Social Icons */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="AKOYA Logo" className="h-12 object-contain" />
          </div>
          <p className="text-medium text-gray-300 leading-relaxed ltr:pr-4 rtl:pl-4">
            {content.description}
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            {[
              { id: 'twitter', icon: <FaTwitter className="w-5 h-5" />, href: '#' },
              { id: 'instagram', icon: <FaInstagram className="w-5 h-5" />, href: '#' },
              { id: 'facebook', icon: <FaFacebookF className="w-5 h-5" />, href: '#' },
            ].map((social) => (
              <a
                key={social.id}
                href={social.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIcon(social.id);
                }}
                className={`p-2.5 rounded-full border border-[#1A1A1A] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-[#D4AF37] ${
                  activeIcon === social.id ? 'text-[#D4AF37] border-[#D4AF37] bg-white/5' : 'text-gray-300'
                }`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h4 className="text-[#D4AF37] font-semibold text-xl tracking-widest uppercase mb-6">
            {content.servicesHeader}
          </h4>
          <ul className="space-y-3">
            {content.services.map((service, index) => (
              <li key={index}>
                <Link
                  to="/services"
                  className={`group inline-flex items-center gap-2 text-medium text-gray-300 hover:text-[#D4AF37] transition-all duration-300 ease-in-out transform ${
                    isRtl ? 'hover:-translate-x-1.5' : 'hover:translate-x-1.5'
                  }`}
                >
                  <span className="text-[#D4AF37] text-sm transition-transform duration-300">
                    {isRtl ? '<' : '>'}
                  </span>
                  <span>{service}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h4 className="text-[#D4AF37] font-semibold text-xl tracking-widest uppercase mb-6">
            {content.contactHeader}
          </h4>
          <ul className="space-y-4 text-medium text-gray-300">
            <li className="flex items-start gap-3">
              <HiOutlineLocationMarker className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span>{content.location}</span>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlinePhone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <a href="tel:+97433689993" className="hover:text-white transition-colors" dir="ltr">
                +974 3368 9993
              </a>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineMail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <a href="mailto:Akoyaluxurylaundry@gmail.com" className="hover:text-white transition-colors">
                Akoyaluxurylaundry@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-[#D4AF37] font-semibold text-xl tracking-widest uppercase mb-6">
            {content.newsletterHeader}
          </h4>
          <p className="text-medium text-gray-300 mb-5 leading-relaxed">
            {content.newsletterDesc}
          </p>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.placeholder}
              required
              className="w-full bg-[#242424] mb-4 border border-gray-700/70 rounded-md px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-[#D4AF37] text-black font-semibold text-sm py-3 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
            >
              {content.subscribeBtn}
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row justify-end items-center gap-6 text-xs text-gray-400">
        <Link to="/privacy" className="hover:text-[#D4AF37] text-sm transition-colors duration-200">
          {content.privacy}
        </Link>
        <Link to="/Terms" className="hover:text-[#D4AF37] text-sm transition-colors duration-200">
          {content.terms}
        </Link>
        <Link to="/sitemap" className="hover:text-[#D4AF37] text-sm transition-colors duration-200">
          {content.sitemap}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;