import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext'; // Adjust path if needed
import lulwaImg from '../../assets/lulwa.jpg';
import sadfImg from '../../assets/sadf.jpg';
import maknounImg from '../../assets/maknoun.jpg';
import madImg from '../../assets/mad.jpg';
import fragranceImg from '../../assets/fragrance.jpg';
const initialGarments = [
  // Men's
  { id: 'thobe', category: 'men', name: 'Thobe', icon: '👔', price: 15 },
  { id: 'bisht', category: 'men', name: 'Bisht', icon: '👘', price: 25 },
  { id: 'mens_suit', category: 'men', name: "Men's Suit", icon: '🤵', price: 30 },
  { id: 'ghutra', category: 'men', name: 'Ghutra', icon: '👳', price: 10 },
  { id: 'shirt', category: 'men', name: 'Shirt', icon: '👕', price: 12 },
  { id: 'tie', category: 'men', name: 'Tie', icon: '👔', price: 8 },
  // Women's
  { id: 'abaya', category: 'women', name: 'Abaya', icon: '🧕', price: 20 },
  { id: 'long_dress', category: 'women', name: 'Long Dress', icon: '👗', price: 35 },
  { id: 'short_dress', category: 'women', name: 'Short Dress', icon: '👗', price: 25 },
  { id: 'jalabiya', category: 'women', name: 'Jalabiya', icon: '🥻', price: 22 },
  { id: 'scarf', category: 'women', name: 'Scarf', icon: '🧣', price: 4 },
  { id: 'silk_blouse', category: 'women', name: 'Silk Blouse', icon: '👚', price: 18 },
];

const oudOptions = [
  {
    id: 'cambodian_oud',
    title: 'Premium Cambodian Oud',
    desc: 'Authentic Cambodian oud with rich, deep aroma',
    price: 4,
    img: fragranceImg,
  },
];

const perfumeOptions = [
  // Women's
  {
    id: 'lulwa',
    category: 'women',
    title: 'Lulwa',
    desc: 'Where Sparkle Meets Scent',
    price: 4,
    img: lulwaImg,
  },
  {
    id: 'sadf',
    category: 'women',
    title: 'Sadf',
    desc: 'Your Unique Presence',
    price: 4,
    img: sadfImg
  },
  // Men's
  {
    id: 'maknoun',
    category: 'men',
    title: 'Maknoun',
    desc: 'The Secret of Your Allure',
    price: 4,
    img: maknounImg,
  },
  {
    id: 'mad',
    category: 'men',
    title: 'Mad',
    desc: 'A Wave of Presence That Never Fades',
    price: 4,
    img: madImg,
  },
];

const bookingData = {
  en: {
    brandHeader: 'AKOYA PREMIUM LAUNDRY',
    step1Title: 'Choose Service Type:',
    step2Title: 'What clothes are you sending us?',
    step3SteamQuestion: 'Do you want us to steam the garments?',
    step3OudQuestion: 'Would you like your clothes to be incensed with Oud?',
    step3OudTypeTitle: 'Choose your preferred Oud type:',
    step4PerfumeQuestion: 'Would you like your clothes to be perfumed?',
    step4PerfumeTypeTitle: 'Choose your preferred fragrance:',
    allergyNotice: 'I confirm that I do not have any allergy to Oud and its components.',
    allergySub: 'This confirmation is required for your safety',
    services: [
      { id: 'wash_iron', title: 'Washing & Ironing', desc: 'Complete washing with ironing', icon: '👕', price: 30 },
      { id: 'wash_iron_perfume', title: 'Washing, Ironing, and Perfume Services', desc: 'Complete washing with ironing and perfume services', icon: '✨', price: 45 },
      { id: 'dry_clean', title: 'Dry Clean', desc: 'Professional dry cleaning', icon: '👔', price: 50 },
    ],
    orderSummary: 'Order Summary',
    serviceTypeLabel: 'Service Type:',
    garmentsLabel: 'Garments:',
    steamLabel: 'Steam Finishing:',
    incenseLabel: 'Incense:',
    fragranceLabel: 'Fragrance:',
    couponPlaceholder: 'Enter coupon code',
    applyCoupon: 'Apply Coupon',
    finalPrice: 'Final Price',
    nextBtn: 'Next',
    backBtn: 'Back',
  },
  ar: {
    brandHeader: 'غسيل أكويا الفاخر',
    step1Title: 'اختر نوع الخدمة:',
    step2Title: 'ما هي الملابس التي ترسلها إلينا؟',
    step3SteamQuestion: 'هل تريد منا بالبخار كي الملابس؟',
    step3OudQuestion: 'هل ترغب في تعطير ملابسك بالعود؟',
    step3OudTypeTitle: 'اختر نوع العود المفضل لديك:',
    step4PerfumeQuestion: 'هل ترغب في تعطير ملابسك بالباقات العطرية؟',
    step4PerfumeTypeTitle: 'اختر العطر المفضل لديك:',
    allergyNotice: 'أؤكد أنني لا أعاني من أي حساسية تجاه العود ومكوناته.',
    allergySub: 'هذا التأكيد مطلوب لسلامتك',
    services: [
      { id: 'wash_iron', title: 'غسيل وكوي', desc: 'غسيل كامل مع الكوي', icon: '👕', price: 30 },
      { id: 'wash_iron_perfume', title: 'خدمات الغسيل والكوي والتعطير', desc: 'غسيل كامل مع خدمات الكوي والتعطير', icon: '✨', price: 45 },
      { id: 'dry_clean', title: 'تنظيف جاف', desc: 'تنظيف جاف احترافي', icon: '👔', price: 50 },
    ],
    orderSummary: 'ملخص الطلب',
    serviceTypeLabel: 'نوع الخدمة:',
    garmentsLabel: 'الملابس:',
    steamLabel: 'تشطيب بالبخار:',
    incenseLabel: 'بخور:',
    fragranceLabel: 'العطر:',
    couponPlaceholder: 'أدخل رمز القسيمة',
    applyCoupon: 'تطبيق القسيمة',
    finalPrice: 'السعر النهائي',
    nextBtn: 'التالي',
    backBtn: 'رجوع',
  },
};

const Booking = () => {
  const { lang, isRtl } = useLanguage();
  const content = bookingData[lang] || bookingData.en;

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [garmentQuantities, setGarmentQuantities] = useState({});
  const [coupon, setCoupon] = useState('');

  // Step 3 States
  const [wantsSteam, setWantsSteam] = useState(null);
  const [wantsOud, setWantsOud] = useState(null);
  const [selectedOud, setSelectedOud] = useState(null);
  const [allergyConfirmed, setAllergyConfirmed] = useState(false);

  // Step 4 States
  const [wantsPerfume, setWantsPerfume] = useState(null);
  const [selectedPerfume, setSelectedPerfume] = useState(null);

  const activeServiceObj = content.services.find((s) => s.id === selectedService);
  const activeOudObj = oudOptions.find((o) => o.id === selectedOud);
  const activePerfumeObj = perfumeOptions.find((p) => p.id === selectedPerfume);

  // Calculations
  const garmentTotal = Object.entries(garmentQuantities).reduce((acc, [id, qty]) => {
    const item = initialGarments.find((g) => g.id === id);
    return acc + (item ? item.price * qty : 0);
  }, 0);

  const serviceBasePrice = activeServiceObj ? activeServiceObj.price : 0;
  const oudPrice = wantsOud && activeOudObj ? activeOudObj.price : 0;
  const perfumePrice = wantsPerfume && activePerfumeObj ? activePerfumeObj.price : 0;
  const grandTotal = serviceBasePrice + garmentTotal + oudPrice + perfumePrice;

  // Garment Handlers
  const updateQuantity = (id, delta) => {
    setGarmentQuantities((prev) => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: next };
    });
  };

  const removeGarment = (id) => {
    setGarmentQuantities((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  const selectedGarmentList = Object.entries(garmentQuantities).map(([id, qty]) => {
    const item = initialGarments.find((g) => g.id === id);
    return { ...item, qty };
  });

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full min-h-screen bg-gradient-to-b from-[#3B3226] via-[#2A231B] to-[#1C1813] pt-28 pb-16 px-4 md:px-12 text-gray-800 font-sans"
    > 
    <style>{`
  /* Tablet */
  @media (max-width: 1024px) {
    .booking-container {
      flex-direction: column !important;
    }

    .booking-main {
      width: 100% !important;
    }

    .booking-sidebar {
      width: 100% !important;
      position: relative !important;
      top: auto !important;
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
    .booking-page {
      padding-left: 12px !important;
      padding-right: 12px !important;
      padding-top: 100px !important;
      padding-bottom: 30px !important;
    }

    .booking-container {
      width: 100% !important;
      gap: 20px !important;
    }

    .booking-main {
      width: 100% !important;
      min-height: auto !important;
    }

    .booking-sidebar {
      width: 100% !important;
      position: relative !important;
      top: auto !important;
    }

    .service-grid {
      grid-template-columns: 1fr !important;
    }

    .garment-grid {
      grid-template-columns: 1fr !important;
    }

    .perfume-grid {
      grid-template-columns: 1fr !important;
    }
  }

  /* Small phones */
  @media (max-width: 480px) {
    .booking-page {
      padding-left: 8px !important;
      padding-right: 8px !important;
    }

    .booking-main {
      border-radius: 14px !important;
    }

    .booking-header {
      padding: 18px 10px !important;
    }

    .booking-content {
      padding: 18px !important;
    }

    .booking-navigation {
      padding: 14px !important;
    }
  }
`}</style>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8 relative">
        
        {/* Main Step Container */}
        <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col justify-between min-h-[580px]">
          <div>
            {/* Header Banner */}
            <div className="bg-[#433628] text-[#E5C158] text-center py-6 px-4">
              <h2 className="text-xl md:text-2xl font-serif tracking-wider uppercase">
                {content.brandHeader}
              </h2>
              <p className="text-xs text-gray-300 tracking-widest mt-1">
                Step {currentStep} of 6
              </p>
            </div>

            {/* Step 1: Services */}
            {currentStep === 1 && (
              <div className="p-6 md:p-8">
                <h3 className="text-gray-700 text-lg font-medium mb-6">
                  {content.step1Title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {content.services.map((item) => {
                    const isSelected = selectedService === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedService(item.id)}
                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${
                          isSelected
                            ? 'border-[#E5C158] bg-[#FFFDF5] shadow-md scale-102'
                            : 'border-gray-200/80 hover:border-gray-300 hover:shadow-sm'
                        }`}
                      >
                        <span className="text-3xl mb-4">{item.icon}</span>
                        <h4 className="font-semibold text-gray-900 text-base mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Garments Selection */}
            {currentStep === 2 && (
              <div className="p-6 md:p-8">
                <h3 className="text-gray-700 text-lg font-medium mb-6">
                  {content.step2Title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Men's</h4>
                    <div className="space-y-3">
                      {initialGarments
                        .filter((g) => g.category === 'men')
                        .map((g) => (
                          <div
                            key={g.id}
                            className="flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{g.icon}</span>
                              <span className="text-sm font-medium text-gray-800">{g.name}</span>
                            </div>
                            <button
                              onClick={() => updateQuantity(g.id, 1)}
                              className="text-[#E5C158] hover:text-[#d6b24a] font-bold text-xl px-2 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Women's</h4>
                    <div className="space-y-3">
                      {initialGarments
                        .filter((g) => g.category === 'women')
                        .map((g) => (
                          <div
                            key={g.id}
                            className="flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{g.icon}</span>
                              <span className="text-sm font-medium text-gray-800">{g.name}</span>
                            </div>
                            <button
                              onClick={() => updateQuantity(g.id, 1)}
                              className="text-[#E5C158] hover:text-[#d6b24a] font-bold text-xl px-2 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Steam & Oud Customization */}
            {currentStep === 3 && (
              <div className="p-6 md:p-8 space-y-8">
                <div>
                  <h3 className="text-gray-700 text-sm md:text-base font-medium mb-4">
                    {content.step3SteamQuestion}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setWantsSteam(true)}
                      className={`py-3.5 rounded-xl border text-sm font-medium transition-all ${
                        wantsSteam === true
                          ? 'border-[#E5C158] bg-[#FFFDF5] text-gray-900 shadow-sm'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setWantsSteam(false)}
                      className={`py-3.5 rounded-xl border text-sm font-medium transition-all ${
                        wantsSteam === false
                          ? 'border-[#E5C158] bg-[#FFFDF5] text-gray-900 shadow-sm'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-gray-700 text-sm md:text-base font-medium mb-4">
                    {content.step3OudQuestion}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setWantsOud(true)}
                      className={`py-3.5 rounded-xl border text-sm font-medium transition-all ${
                        wantsOud === true
                          ? 'border-[#E5C158] bg-[#FFFDF5] text-gray-900 shadow-sm'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        setWantsOud(false);
                        setSelectedOud(null);
                        setAllergyConfirmed(false);
                      }}
                      className={`py-3.5 rounded-xl border text-sm font-medium transition-all ${
                        wantsOud === false
                          ? 'border-[#E5C158] bg-[#FFFDF5] text-gray-900 shadow-sm'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {wantsOud && (
                  <div className="space-y-6 pt-2 animate-fadeIn">
                    <h4 className="text-gray-800 text-sm font-medium">
                      {content.step3OudTypeTitle}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {oudOptions.map((oud) => {
                        const isSelected = selectedOud === oud.id;
                        return (
                          <div
                            key={oud.id}
                            onClick={() => setSelectedOud(oud.id)}
                            className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center text-center ${
                              isSelected
                                ? 'border-[#E5C158] bg-[#FFFDF5]'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <img
                              src={oud.img}
                              alt={oud.title}
                              className="w-full h-32 object-cover rounded-xl mb-3"
                            />
                            <h5 className="font-semibold text-gray-900 text-sm mb-1">
                              {oud.title}
                            </h5>
                            <p className="text-xs text-gray-500 leading-tight">
                              {oud.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="bg-[#F4F8FF] border border-[#D0E2FF] p-4 rounded-xl flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="allergy"
                        checked={allergyConfirmed}
                        onChange={(e) => setAllergyConfirmed(e.target.checked)}
                        className="mt-1 accent-[#E5C158] w-4 h-4 rounded cursor-pointer"
                      />
                      <label htmlFor="allergy" className="text-xs text-blue-900 leading-snug cursor-pointer">
                        <span className="font-medium block mb-0.5">{content.allergyNotice}</span>
                        <span className="text-blue-600/80">{content.allergySub}</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Perfume Selection */}
            {currentStep === 4 && (
              <div className="p-6 md:p-8 space-y-8">
                <div>
                  <h3 className="text-gray-700 text-sm md:text-base font-medium mb-4">
                    {content.step4PerfumeQuestion}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setWantsPerfume(true)}
                      className={`py-3.5 rounded-xl border text-sm font-medium transition-all ${
                        wantsPerfume === true
                          ? 'border-[#E5C158] bg-[#FFFDF5] text-gray-900 shadow-sm'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        setWantsPerfume(false);
                        setSelectedPerfume(null);
                      }}
                      className={`py-3.5 rounded-xl border text-sm font-medium transition-all ${
                        wantsPerfume === false
                          ? 'border-[#E5C158] bg-[#FFFDF5] text-gray-900 shadow-sm'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {wantsPerfume && (
                  <div className="space-y-6 pt-2 animate-fadeIn">
                    <h4 className="text-gray-800 text-sm font-medium">
                      {content.step4PerfumeTypeTitle}
                    </h4>

                    {/* Women's Fragrances */}
                    <div>
                      <h5 className="text-[#E5C158] font-semibold text-center text-sm mb-4">
                        Women's
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {perfumeOptions
                          .filter((p) => p.category === 'women')
                          .map((perfume) => {
                            const isSelected = selectedPerfume === perfume.id;
                            return (
                              <div
                                key={perfume.id}
                                onClick={() => setSelectedPerfume(perfume.id)}
                                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center text-center ${
                                  isSelected
                                    ? 'border-[#E5C158] bg-[#FFFDF5]'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <img
                                  src={perfume.img}
                                  alt={perfume.title}
                                  className="w-full h-40 object-cover rounded-xl mb-3"
                                />
                                <h6 className="font-semibold text-gray-900 text-sm mb-1">
                                  {perfume.title}
                                </h6>
                                <p className="text-xs text-gray-500 leading-tight mb-2">
                                  {perfume.desc}
                                </p>
                                {isSelected && (
                                  <span className="text-xs text-[#E5C158] font-semibold">
                                    ✓ Selected
                                  </span>
                                )}
                              </div>
                            );
                          })}
                      </div>
                    </div>

                    {/* Men's Fragrances */}
                    <div>
                      <h5 className="text-[#E5C158] font-semibold text-center text-sm mb-4">
                        Men's
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {perfumeOptions
                          .filter((p) => p.category === 'men')
                          .map((perfume) => {
                            const isSelected = selectedPerfume === perfume.id;
                            return (
                              <div
                                key={perfume.id}
                                onClick={() => setSelectedPerfume(perfume.id)}
                                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center text-center ${
                                  isSelected
                                    ? 'border-[#E5C158] bg-[#FFFDF5]'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <img
                                  src={perfume.img}
                                  alt={perfume.title}
                                  className="w-full h-40 object-cover rounded-xl mb-3"
                                />
                                <h6 className="font-semibold text-gray-900 text-sm mb-1">
                                  {perfume.title}
                                </h6>
                                <p className="text-xs text-gray-500 leading-tight mb-2">
                                  {perfume.desc}
                                </p>
                                {isSelected && (
                                  <span className="text-xs text-[#E5C158] font-semibold">
                                    ✓ Selected
                                  </span>
                                )}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Step Navigation Bar */}
          <div className="p-6 border-t border-gray-100 flex justify-between items-center">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors cursor-pointer"
              >
                {content.backBtn}
              </button>
            ) : <div />}

            <button
              onClick={() => setCurrentStep((prev) => prev + 1)}
              disabled={
                (currentStep === 1 && !selectedService) ||
                (currentStep === 3 && wantsOud && (!selectedOud || !allergyConfirmed)) ||
                (currentStep === 4 && wantsPerfume && !selectedPerfume)
              }
              className={`font-medium px-8 py-2.5 rounded-lg transition-colors shadow-sm text-sm ${
                (currentStep === 1 && selectedService) ||
                currentStep === 2 ||
                (currentStep === 3 && (!wantsOud || (selectedOud && allergyConfirmed))) ||
                (currentStep === 4 && (!wantsPerfume || selectedPerfume))
                  ? 'bg-[#E5C158] hover:bg-[#d6b24a] text-white cursor-pointer'
                  : 'bg-[#D3C3B0] text-gray-500 cursor-not-allowed'
              }`}
            >
              {content.nextBtn}
            </button>
          </div>
        </div>

        {/* Dynamic Sticky Sidebar */}
        <div className="w-full lg:w-1/3 sticky top-28 self-start bg-white rounded-2xl shadow-xl p-6 border border-gray-100/80">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl">📜</span>
            <h3 className="text-lg font-semibold text-[#D4AF37]">
              {content.orderSummary}
            </h3>
          </div>

          {/* Selected Service Row */}
          {activeServiceObj && (
            <div className="flex items-start justify-between border-b border-gray-200 pb-3 mb-4 text-xs text-gray-700">
              <span className="font-semibold whitespace-nowrap pt-0.5">
                {content.serviceTypeLabel}
              </span>
              <div className="flex items-center gap-2 pl-4 text-right">
                <span className="text-base">{activeServiceObj.icon}</span>
                <span className="font-medium text-gray-900 leading-tight">
                  {activeServiceObj.title}
                </span>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-red-400 hover:text-red-600 font-bold text-sm ml-1 cursor-pointer"
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Selected Garments Section */}
          {selectedGarmentList.length > 0 && (
            <div className="border-b border-gray-200 pb-3 mb-4">
              <h4 className="text-xs font-semibold text-gray-700 mb-2">
                {content.garmentsLabel}
              </h4>
              <div className="space-y-2.5 max-h-40 overflow-y-auto pr-1">
                {selectedGarmentList.map((item) => (
                  <div key={item.id} className="bg-gray-50 p-2.5 rounded-lg flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <button
                        onClick={() => removeGarment(item.id)}
                        className="text-red-400 hover:text-red-600 font-bold text-xs cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-gray-300 bg-white rounded px-1.5 py-0.5 gap-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="font-bold text-gray-600 cursor-pointer">-</button>
                        <span className="font-medium">{item.qty}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="font-bold text-gray-600 cursor-pointer">+</button>
                      </div>
                      <span className="font-bold text-gray-800">{item.price * item.qty} QAR</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Steam Finishing Line */}
          {wantsSteam !== null && (
            <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4 text-xs">
              <span className="font-semibold text-gray-700">{content.steamLabel}</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-emerald-600">
                  {wantsSteam ? 'Included' : 'No'}
                </span>
                <button
                  onClick={() => setWantsSteam(null)}
                  className="text-red-400 hover:text-red-600 font-bold text-xs cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Oud Incense Line */}
          {wantsOud && activeOudObj && (
            <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4 text-xs">
              <span className="font-semibold text-gray-700">{content.incenseLabel}</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">+{activeOudObj.price} QAR</span>
                <button
                  onClick={() => {
                    setWantsOud(false);
                    setSelectedOud(null);
                  }}
                  className="text-red-400 hover:text-red-600 font-bold text-xs cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Fragrance Line */}
          {wantsPerfume && activePerfumeObj && (
            <div className="border-b border-gray-200 pb-3 mb-4 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">{content.fragranceLabel}</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">+{activePerfumeObj.price} QAR</span>
                  <button
                    onClick={() => {
                      setWantsPerfume(false);
                      setSelectedPerfume(null);
                    }}
                    className="text-red-400 hover:text-red-600 font-bold text-xs cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="text-[#888] font-medium mt-0.5 text-right">
                {activePerfumeObj.title}
              </div>
            </div>
          )}

          {/* Coupon Input */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3 mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder={content.couponPlaceholder}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#E5C158]"
              />
              <button
                type="submit"
                className="bg-[#E5C158] hover:bg-[#d6b24a] text-white text-xs font-semibold px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors shadow-sm cursor-pointer"
              >
                {content.applyCoupon}
              </button>
            </div>
          </form>

          {/* Grand Total */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <span className="text-gray-700 font-semibold text-sm">
              {content.finalPrice}
            </span>
            <span className="text-[#E5C158] font-bold text-lg">
              {grandTotal} QAR
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Booking;