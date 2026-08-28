import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp 
} from 'react-icons/fa';
import { useLanguage } from '../../LanguageContext';

const translations = {
  en: {
    headerTitle: 'Contact Us',
    headerSub: 'GET IN TOUCH',
    reachHeading: 'How to reach us',
    reachSub:
      'Our concierge team is available to assist you with any inquiries about our luxury laundry services. Reach out via your preferred method and we\'ll respond promptly.',
    locationLabel: 'Location',
    locationValue: 'West Bay, Doha, Qatar',
    phoneLabel: 'Phone',
    phoneValue: '+974 1234 5678',
    emailLabel: 'Email',
    emailValue: 'info@akoyalaundry.com',
    followUs: 'Follow Us',
    formHeading: 'Send us a message',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'Enter your name',
    emailAddressLabel: 'Email Address',
    emailAddressPlaceholder: 'Enter your email',
    messageLabel: 'Your Message',
    messagePlaceholder: 'How can we help you?',
    submitBtn: 'Send Message',
  },
  ar: {
    headerTitle: 'تواصل معنا',
    headerSub: 'ابق على تواصل',
    reachHeading: 'كيفية التواصل معنا',
    reachSub:
      'فريق الكونسيرج لدينا مستعد لمساعدتك في أي استفسارات تتعلق بخدمات الغسيل الفاخرة. تواصل معنا عبر وسيلتك المفضلة وسنرد عليك بسرعة.',
    locationLabel: 'الموقع',
    locationValue: 'الدفنة، الدوحة، قطر',
    phoneLabel: 'الهاتف',
    phoneValue: '+974 1234 5678',
    emailLabel: 'البريد الإلكتروني',
    emailValue: 'info@akoyalaundry.com',
    followUs: 'تابعنا',
    formHeading: 'أرسل لنا رسالة',
    fullNameLabel: 'الاسم الكامل',
    fullNamePlaceholder: 'أدخل اسمك',
    emailAddressLabel: 'البريد الإلكتروني',
    emailAddressPlaceholder: 'أدخل بريدك الإلكتروني',
    messageLabel: 'رسالتك',
    messagePlaceholder: 'كيف يمكننا مساعدتك؟',
    submitBtn: 'إرسال الرسالة',
  },
};

const Contact2p = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;
  const isArabic = lang === 'ar';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section 
      className="bg-[#FAF8F5] py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24 text-gray-800" 
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Top Header */}
      <div className="text-center mb-10 sm:mb-12 md:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 mb-2 sm:mb-3 tracking-wide">
          {t.headerTitle}
        </h2>
        <div className="flex items-center justify-center space-x-3 sm:space-x-4 rtl:space-x-reverse">
          <span className="h-[1px] w-8 sm:w-12 bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs sm:text-sm md:text-lg tracking-widest font-medium uppercase">
            {t.headerSub}
          </span>
          <span className="h-[1px] w-8 sm:w-12 bg-[#D4AF37]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
        {/* Left Column: Contact Details */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">
              {t.reachHeading}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {t.reachSub}
            </p>
          </div>

          {/* Info Items */}
          <div className="space-y-5 sm:space-y-6">
            {/* Location */}
            <div className="flex items-start space-x-3.5 sm:space-x-4 rtl:space-x-reverse group cursor-pointer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#B89230] transition-all duration-300 shadow-sm shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white">
                <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{t.locationLabel}</h4>
                <p className="text-gray-600 text-xs sm:text-sm mt-0.5">{t.locationValue}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3.5 sm:space-x-4 rtl:space-x-reverse group cursor-pointer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#B89230] transition-all duration-300 shadow-sm shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white">
                <FaPhoneAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{t.phoneLabel}</h4>
                <p className="text-gray-600 text-xs sm:text-sm mt-0.5" dir="ltr">{t.phoneValue}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3.5 sm:space-x-4 rtl:space-x-reverse group cursor-pointer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#B89230] transition-all duration-300 shadow-sm shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white">
                <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{t.emailLabel}</h4>
                <p className="text-gray-600 text-xs sm:text-sm mt-0.5 break-all">{t.emailValue}</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-2 sm:pt-4">
            <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4">{t.followUs}</h4>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <a
                href="#instagram"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 shadow-md"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href="#twitter"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 shadow-md"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href="#whatsapp"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 shadow-md"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Card Form */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-5 sm:p-8 md:p-10 shadow-lg border border-gray-100">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
            {t.formHeading}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5 sm:mb-2">
                {t.fullNameLabel}
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t.fullNamePlaceholder}
                className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all duration-200"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5 sm:mb-2">
                {t.emailAddressLabel}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailAddressPlaceholder}
                className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all duration-200"
                required
              />
            </div>

            {/* Your Message */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5 sm:mb-2">
                {t.messageLabel}
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all duration-200 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1A1A1A] hover:bg-[#D4AF37] text-white font-medium py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-md cursor-pointer text-xs sm:text-sm md:text-base active:scale-98"
            >
              {t.submitBtn}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact2p;