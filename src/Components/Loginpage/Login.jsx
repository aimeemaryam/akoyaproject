import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { useLanguage } from '../../LanguageContext'; // Adjust path as needed

const loginData = {
  en: {
    brand: 'AKOYA LUXURY LAUNDRY',
    subtitle: 'Sign in to your account',
    emailLabel: 'Email Address',
    emailPlaceholder: 'your@email.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••••',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    signInBtn: 'Sign in',
    newToAkoya: 'New to AKOYA?',
    createAccount: 'Create your account',
  },
  ar: {
    brand: 'أكويا للغسيل الفاخر',
    subtitle: 'تسجيل الدخول إلى حسابك',
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'your@email.com',
    passwordLabel: 'كلمة المرور',
    passwordPlaceholder: '••••••••',
    rememberMe: 'تذكرني',
    forgotPassword: 'نسيت كلمة المرور؟',
    signInBtn: 'تسجيل الدخول',
    newToAkoya: 'جديد في أكويا؟',
    createAccount: 'أنشئ حسابك',
  },
};

const Login = () => {
  const { lang, isRtl: langIsRtl } = useLanguage();
  const navigate = useNavigate();
  const content = loginData[lang] || loginData.en;
  const isRtl = lang === 'ar' || langIsRtl;

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Add authentication logic here
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#F5F3EF] flex items-center justify-center p-3 sm:p-6 md:p-8 font-sans overflow-x-hidden"
    >
      <div className="w-full max-w-[420px] sm:max-w-md bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100/80 my-auto">
        
        {/* Dark Header Banner */}
        <div className="bg-[#1C1C1E] text-center pt-6 sm:pt-8 pb-5 sm:pb-6 px-4 sm:px-6 border-b border-yellow-600/30">
          <h2 className="text-[#E3C268] font-serif text-lg sm:text-xl tracking-widest uppercase mb-2">
            {content.brand}
          </h2>
          <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#E3C268]/40 to-transparent mx-auto mb-2 sm:mb-3" />
          <p className="text-gray-300 text-xs sm:text-sm tracking-wider">
            {content.subtitle}
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-7 md:p-8 space-y-4 sm:space-y-5">
          
          {/* Email Input */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
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

          {/* Password Input */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between pt-1 text-xs">
            <label className="flex items-center gap-1.5 sm:gap-2 cursor-pointer text-gray-600 select-none">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-gray-300 text-[#E3C268] focus:ring-[#E3C268] cursor-pointer"
              />
              <span className="text-[11px] sm:text-xs">{content.rememberMe}</span>
            </label>
            <a href="#" className="text-[#E3C268] hover:underline font-medium text-[11px] sm:text-xs">
              {content.forgotPassword}
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#E3C268] hover:bg-[#d2b157] text-white font-medium py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm shadow-md transition-all duration-200 cursor-pointer mt-2"
          >
            {content.signInBtn}
          </button>

          {/* Divider */}
          <div className="relative my-4 sm:my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <span className="relative bg-white px-3 text-[11px] sm:text-xs text-gray-400">
              {content.newToAkoya}
            </span>
          </div>

          {/* Create Account Link */}
          <div className="text-center">
            <Link
              to="/signup"
              className="text-[#E3C268] font-semibold text-xs sm:text-sm hover:underline"
            >
              {content.createAccount}
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;