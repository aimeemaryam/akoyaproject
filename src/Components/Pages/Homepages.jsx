import React, { useState, useEffect } from 'react';
import Page1 from '../Home/Page1';
import Page2 from '../Home/Page2';
import Page3 from '../Home/Page3';
import Page4 from '../Home/Page4';
import Page5 from '../Home/Page5';
import Page6 from '../Home/Page6';
import Page7 from '../Home/Page7';
import welimg from '../../assets/welcome.jpg';

const Homepages = () => {
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
    <div className="relative">
      {/* Welcome Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-[550px] min-h-[610px] bg-[#FFFDF5] border border-[#E5C158]/60 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col items-center justify-between text-center animate-fadeIn">
            
            {/* Decorative Gold Accent Dots */}
            <span className="absolute top-5 left-5 w-2 h-2 rounded-full bg-[#E5C158]/50" />
            <span className="absolute top-1/2 left-4 w-2 h-2 rounded-full bg-[#E5C158]/40" />
            <span className="absolute bottom-10 right-6 w-2.5 h-2.5 rounded-full bg-[#E5C158]/40" />
            <span className="absolute top-2/5 right-5 w-1.5 h-1.5 rounded-full bg-[#E5C158]/30" />

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors cursor-pointer text-sm font-semibold"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Content Container */}
            <div className="flex flex-col items-center justify-center w-full flex-1 pt-2">
              {/* Illustration */}
              <div className="w-72 h-72 mb-2 flex items-center justify-center overflow-hidden">
                <img
                  src={welimg}
                  alt="Welcome Illustration"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-2 tracking-tight">
                Welcome dear guests
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-xs">
                We're delighted to have you visit AKOYA Premium Laundry. Experience our exceptional laundry and garment care services
              </p>
            </div>

            {/* Progress Bar & Footer */}
            <div className="w-full max-w-xs flex flex-col items-center">
              <div className="w-full bg-gray-200/80 h-2 rounded-full overflow-hidden mb-2">
                <div
                  className="bg-[#D4AF37] h-full transition-all duration-1000 ease-linear rounded-full"
                  style={{ width: `${(timeLeft / 10) * 100}%` }}
                />
              </div>

              <p className="text-sm text-gray-500 font-medium">
                This message will close automatically in 10 seconds
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