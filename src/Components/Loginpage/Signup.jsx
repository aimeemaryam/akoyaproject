import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { HiOutlineUser, HiOutlineMail, HiOutlineLockClosed, HiOutlineCheck, HiOutlinePhone } from 'react-icons/hi';
import { useLanguage } from '../../LanguageContext'; // Adjust path as needed

const signupData = {
  en: {
    brand: 'AKOYA LUXURY LAUNDRY',
    subtitle: 'Create your premium account',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'Enter your full name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'your@email.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••••',
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordPlaceholder: '••••••••',
    whatsappLabel: 'WhatsApp Phone Number',
    whatsappPlaceholder: '+1234567890',
    whatsappHelp: 'Enter your full WhatsApp number with country code (e.g., +1234567890)',
    agreeTerms: 'I agree to the',
    termsLink: 'terms and conditions',
    createBtn: 'Create Account',
    sendingBtn: 'Creating Account...',
    alreadyHaveAccount: 'Already have an account?',
    signInLink: 'Sign in',
    alertSuccess: 'Account created successfully! Confirmation email sent.',
    alertError: 'Failed to send confirmation email. Please try again.',
  },
  ar: {
    brand: 'أكويا للغسيل الفاخر',
    subtitle: 'أنشئ حسابك المميز',
    fullNameLabel: 'الاسم الكامل',
    fullNamePlaceholder: 'أدخل اسمك الكامل',
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'your@email.com',
    passwordLabel: 'كلمة المرور',
    passwordPlaceholder: '••••••••',
    confirmPasswordLabel: 'تأكيد كلمة المرور',
    confirmPasswordPlaceholder: '••••••••',
    whatsappLabel: 'رقم واتساب',
    whatsappPlaceholder: '+1234567890',
    whatsappHelp: 'أدخل رقم الواتساب بالكامل مع الرمز الدولي (مثال: 1234567890+)',
    agreeTerms: 'أوافق على',
    termsLink: 'الشروط والأحكام',
    createBtn: 'أنشئ حسابك',
    sendingBtn: 'جاري إنشاء الحساب...',
    alreadyHaveAccount: 'لديك حساب بالفعل؟',
    signInLink: 'تسجيل الدخول',
    alertSuccess: 'تم إنشاء الحساب بنجاح! تم إرسال بريد التأكيد.',
    alertError: 'فشل إرسال بريد التأكيد. يرجى المحاولة مرة أخرى.',
  },
};

const Signup = () => {
  const { lang, isRtl: langIsRtl } = useLanguage();
  const navigate = useNavigate();
  const content = signupData[lang] || signupData.en;
  const isRtl = lang === 'ar' || langIsRtl;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    whatsapp: '',
    agreeTerms: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!formData.agreeTerms) {
      alert('Please agree to terms and conditions');
      return;
    }

    setLoading(true);

    const templateParams = {
      user_name: formData.fullName,
      user_email: formData.email,
      user_phone: formData.whatsapp,
    };

    emailjs
      .send(
        'service_eftvnzt', 
        'template_va384rh', 
        templateParams, 
        'hJU4sPPngWdv6LFpe'
      )
      .then(
        () => {
          setLoading(false);
          alert(content.alertSuccess);
          navigate('/login');
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS Error:', error);
          alert(content.alertError);
        }
      );
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#F5F3EF] flex items-center justify-center p-3 sm:p-6 md:p-8 font-sans my-4 sm:my-8 overflow-x-hidden"
    >
      <div className="w-full max-w-[420px] sm:max-w-md bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100/80 my-auto">
        
        {/* Dark Header Banner */}
        <div className="bg-[#1C1C1E] text-center pt-6 sm:pt-8 pb-5 sm:pb-6 px-4 sm:px-6 border-b border-yellow-600/30">
          <h2 className="text-[#E3C268] font-serif text-lg sm:text-xl tracking-widest uppercase mb-1.5 sm:mb-2">
            {content.brand}
          </h2>
          <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#E3C268]/40 to-transparent mx-auto mb-2 sm:mb-3" />
          <p className="text-gray-300 text-[11px] sm:text-xs tracking-wider">
            {content.subtitle}
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-7 md:p-8 space-y-3.5 sm:space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5">
              {content.fullNameLabel}
            </label>
            <div className="relative flex items-center">
              <HiOutlineUser className="absolute left-3 rtl:left-auto rtl:right-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={content.fullNamePlaceholder}
                required
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 sm:py-3 pl-9 pr-4 rtl:pl-4 rtl:pr-9 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E3C268] focus:ring-1 focus:ring-[#E3C268] transition-all"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5">
              {content.emailLabel}
            </label>
            <div className="relative flex items-center">
              <HiOutlineMail className="absolute left-3 rtl:left-auto rtl:right-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={content.emailPlaceholder}
                required
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 sm:py-3 pl-9 pr-4 rtl:pl-4 rtl:pr-9 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E3C268] focus:ring-1 focus:ring-[#E3C268] transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5">
              {content.passwordLabel}
            </label>
            <div className="relative flex items-center">
              <HiOutlineLockClosed className="absolute left-3 rtl:left-auto rtl:right-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={content.passwordPlaceholder}
                required
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 sm:py-3 pl-9 pr-4 rtl:pl-4 rtl:pr-9 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E3C268] focus:ring-1 focus:ring-[#E3C268] transition-all"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5">
              {content.confirmPasswordLabel}
            </label>
            <div className="relative flex items-center">
              <HiOutlineCheck className="absolute left-3 rtl:left-auto rtl:right-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder={content.confirmPasswordPlaceholder}
                required
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 sm:py-3 pl-9 pr-4 rtl:pl-4 rtl:pr-9 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E3C268] focus:ring-1 focus:ring-[#E3C268] transition-all"
              />
            </div>
          </div>

          {/* WhatsApp Number */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5">
              {content.whatsappLabel}
            </label>
            <div className="relative flex items-center">
              <HiOutlinePhone className="absolute left-3 rtl:left-auto rtl:right-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder={content.whatsappPlaceholder}
                required
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 sm:py-3 pl-9 pr-4 rtl:pl-4 rtl:pr-9 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E3C268] focus:ring-1 focus:ring-[#E3C268] transition-all"
                dir="ltr"
              />
            </div>
            <p className="text-[10px] sm:text-[11px] text-gray-400 mt-1">
              {content.whatsappHelp}
            </p>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="pt-1">
            <label className="flex items-start sm:items-center gap-1.5 sm:gap-2 cursor-pointer text-[11px] sm:text-xs text-gray-600 select-none">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-0 rounded border-gray-300 text-[#E3C268] focus:ring-[#E3C268] cursor-pointer flex-shrink-0"
              />
              <span>
                {content.agreeTerms}{' '}
                <a href="#" className="text-[#E3C268] hover:underline font-medium">
                  {content.termsLink}
                </a>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E3C268] hover:bg-[#d2b157] text-white font-medium py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm shadow-md transition-all duration-200 cursor-pointer mt-3 sm:mt-4 disabled:opacity-50"
          >
            {loading ? content.sendingBtn : content.createBtn}
          </button>

          {/* Already have an account */}
          <div className="text-center pt-2 text-[11px] sm:text-xs text-gray-500">
            {content.alreadyHaveAccount}{' '}
            <Link to="/login" className="text-[#E3C268] font-semibold hover:underline">
              {content.signInLink}
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;