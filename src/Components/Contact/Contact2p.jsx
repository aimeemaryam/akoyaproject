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
    <section className="bg-[#FAF8F5] py-16 px-4 md:px-12 lg:px-24 text-gray-800" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Top Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-3 tracking-wide">
          {t.headerTitle}
        </h2>
        <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
          <span className="h-[1px] w-12 bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-sm md:text-lg tracking-widest font-medium uppercase">
            {t.headerSub}
          </span>
          <span className="h-[1px] w-12 bg-[#D4AF37]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact Details */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              {t.reachHeading}
            </h3>
            <p className="text-gray-800  text-medium">
              {t.reachSub}
            </p>
          </div>

          {/* Info Items with Upward Lift + Yellow Circle Hover */}
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start space-x-4 rtl:space-x-reverse group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#B89230]  transition-all duration-300 shadow-sm shrink-0">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">{t.locationLabel}</h4>
                <p className="text-gray-700 text-medium mt-0.5">{t.locationValue}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 rtl:space-x-reverse group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#B89230] transition-all duration-300 shadow-sm shrink-0">
                <FaPhoneAlt className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">{t.phoneLabel}</h4>
                <p className="text-gray-700 text-medium mt-0.5">{t.phoneValue}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 rtl:space-x-reverse group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-[#F4EFE6] flex items-center justify-center text-[#B89230] transition-all duration-300 shadow-sm shrink-0">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">{t.emailLabel}</h4>
                <p className="text-gray-700 text-medium mt-0.5">{t.emailValue}</p>
              </div>
            </div>
          </div>

          {/* Social Icons with Upward Lift + Yellow Circle Hover */}
          <div className="pt-4">
            <h4 className="font-semibold text-gray-900 text-lg mb-4">{t.followUs}</h4>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* Instagram */}
              <a
                href="#instagram"
                className="w-11 h-11 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 shadow-md"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              {/* Twitter */}
              <a
                href="#twitter"
                className="w-11 h-11 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 shadow-md"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href="#whatsapp"
                className="w-11 h-11 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 shadow-md"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Card Form */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {t.formHeading}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-medium font-medium text-gray-800 mb-2">
                {t.fullNameLabel}
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t.fullNamePlaceholder}
                className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all duration-200"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-medium font-medium text-gray-800 mb-2">
                {t.emailAddressLabel}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailAddressPlaceholder}
                className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all duration-200"
                required
              />
            </div>

            {/* Your Message */}
            <div>
              <label className="block text-medium font-medium text-gray-800 mb-2">
                {t.messageLabel}
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all duration-200 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1A1A1A] hover:scale-102 text-white font-medium py-4 rounded-lg transition-all duration-300 shadow-md cursor-pointer text-base"
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