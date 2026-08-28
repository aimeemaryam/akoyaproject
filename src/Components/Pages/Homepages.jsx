import React, { useState, useEffect } from 'react';
import Page1 from '../Home/Page1';
import Page2 from '../Home/Page2';
import Page3 from '../Home/Page3';
import Page4 from '../Home/Page4';
import Page5 from '../Home/Page5';
import Page6 from '../Home/Page6';
import Page7 from '../Home/Page7';
import welimg from '../../assets/welcome.jpg';
import { useLanguage } from '../../LanguageContext'; // Adjust path as needed

const modalContent = {
  en: {
    title: 'Welcome dear guests',
    description: "We're delighted to have you visit AKOYA Premium Laundry. Experience our exceptional laundry and garment care services.",
    timerText: (sec) => `This message will close automatically in ${sec} seconds`,
  },
  ar: {
    title: 'أهلاً وسهلاً بضيوفنا الكرام',
    description: 'يسعدنا زيارتكم لأكويا للغسيل الفاخر. استمتعوا بدماتنا المتميزة في العناية بالملابس والغسيل.',
    timerText: (sec) => `ستغلق هذه الرسالة تلقائياً خلال ${sec} ثوانٍ`,
  },
};

const Homepages = () => {
  const { lang, isRtl: langIsRtl } = useLanguage();
  const isRtl = lang === 'ar' || langIsRtl;
  const content = modalContent[lang] || modalContent.en;

  const [showModal, setShowModal] = useState(true);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (!showModal) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowModal(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showModal]);

  return (
    <div className="relative overflow-x-hidden">
      {/* Welcome Modal Popup */}
      {showModal && (
        <div 
          dir={isRtl ? 'rtl' : 'ltr'}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-4 sm:p-6"
        >
          <div className="relative w-full max-w-[480px] md:max-w-[550px] max-h-[90vh] overflow-y-auto bg-[#FFFDF5] border border-[#E5C158]/60 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl flex flex-col items-center justify-between text-center animate-fadeIn">
            
            {/* Decorative Gold Accent Dots */}
            <span className="absolute top-4 left-4 sm:top-5 sm:left-5 w-2 h-2 rounded-full bg-[#E5C158]/50 rtl:left-auto rtl:right-4 rtl:sm:right-5" />
            <span className="absolute top-1/2 left-3 sm:left-4 w-2 h-2 rounded-full bg-[#E5C158]/40 rtl:left-auto rtl:right-3 rtl:sm:right-4" />
            <span className="absolute bottom-8 right-4 sm:bottom-10 sm:right-6 w-2.5 h-2.5 rounded-full bg-[#E5C158]/40 rtl:right-auto rtl:left-4 rtl:sm:left-6" />
            <span className="absolute top-2/5 right-4 sm:right-5 w-1.5 h-1.5 rounded-full bg-[#E5C158]/30 rtl:right-auto rtl:left-4 rtl:sm:left-5" />

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 rtl:right-auto rtl:left-3 rtl:sm:left-5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors cursor-pointer text-xs sm:text-sm font-semibold z-10"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Content Container */}
            <div className="flex flex-col items-center justify-center w-full flex-1 pt-1 sm:pt-2">
              {/* Illustration */}
              <div className="w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 mb-2 flex items-center justify-center overflow-hidden">
                <img
                  src={welimg}
                  alt="Welcome Illustration"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title & Description */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1.5 sm:mb-2 tracking-tight">
                {content.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 max-w-xs sm:max-w-sm">
                {content.description}
              </p>
            </div>

            {/* Progress Bar & Footer */}
            <div className="w-full max-w-xs sm:max-w-sm flex flex-col items-center">
              <div className="w-full bg-gray-200/80 h-1.5 sm:h-2 rounded-full overflow-hidden mb-2">
                <div
                  className="bg-[#D4AF37] h-full transition-all duration-1000 ease-linear rounded-full"
                  style={{ width: `${(timeLeft / 10) * 100}%` }}
                />
              </div>

              <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 font-medium">
                {content.timerText(timeLeft)}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Homepage Content */}
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
    </div>
  );
};

export default Homepages;