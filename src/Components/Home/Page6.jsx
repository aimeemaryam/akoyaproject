import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext'; // Adjust relative path if needed

// Import video & image assets from src/assets
import pickupVid from '../../assets/Pickup.mp4';
import professionalCollectionVid from '../../assets/professional_collection.mp4';
import expertProcessingVid from '../../assets/ExpertProcessing.mp4';
import luxuryImg from '../../assets/luxury.jpg';

const content = {
  en: {
    sectionTitle: 'How It Works',
    subtitle: 'Seamless Pickup Process',
    ctaBtn: 'Schedule Your Pickup',
    steps: [
      {
        stepNumber: 1,
        title: 'Schedule Your Pickup',
        description:
          'Book through our app, WhatsApp, or website. We offer flexible 2-hour pickup windows.',
        features: ['24/7 booking availability', 'Recurring pickup scheduling available'],
        video: pickupVid,
      },
      {
        stepNumber: 2,
        title: 'Professional Collection',
        description:
          'Our uniformed valets arrive in discreet luxury vehicles with garment bags.',
        features: ['Contactless pickup available', 'Digital receipt provided'],
        video: professionalCollectionVid,
      },
      {
        stepNumber: 3,
        title: 'Expert Processing',
        description:
          'Your garments receive specialized care at our state-of-the-art facility.',
        features: ['Individual garment tracking', 'Quality control at every stage'],
        video: expertProcessingVid,
      },
      {
        stepNumber: 4,
        title: 'Luxury Delivery',
        description:
          'Impeccably packaged garments returned at your own preferred time.',
        features: ['Same-day delivery available', 'Hanger-ready with protective covers'],
        image: luxuryImg,
      },
    ],
  },
  ar: {
    sectionTitle: 'كيف نعمل',
    subtitle: 'عملية استلام سلسة ومريحة',
    ctaBtn: 'احجز موعد الاستلام',
    steps: [
      {
        stepNumber: 1,
        title: 'حدد موعد الاستلام',
        description:
          'احجز من خلال تطبيقنا، الواتساب، أو الموقع الإلكتروني. نقدم فترات استلام مرنة خلال ساعتين.',
        features: ['إمكانية الحجز على مدار الساعة', 'جدولة الاستلام الدوري متاحة'],
        video: pickupVid,
      },
      {
        stepNumber: 2,
        title: 'الاستلام الاحترافي',
        description:
          'يصل ممثلونا بالزي الرسمي في سيارات فاخرة ومجهزة بأكياس لحفظ الملابس.',
        features: ['يتوفر استلام بدون تلامس', 'توفير إيصال رقمي فور الاستلام'],
        video: professionalCollectionVid,
      },
      {
        stepNumber: 3,
        title: 'العناية المتخصصة',
        description:
          'تحصل ملابسك على عناية فائقة متخصصة في منشأتنا المزودة بأحدث التقنيات.',
        features: ['تتبع فردي لكل قطعة ملابس', 'فحص مراقبة الجودة في كل مرحلة'],
        video: expertProcessingVid,
      },
      {
        stepNumber: 4,
        title: 'التوصيل الفاخر',
        description:
          'نعيد لك ملابسك بتغليف أنيق وجذاب في الوقت المفضل لديك.',
        features: ['يتوفر توصيل في نفس اليوم', 'جاهزة على العلاقات مع أغطية حماية'],
        image: luxuryImg,
      },
    ],
  },
};

const stepIcons = [
  // Step 1 Icon
  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  // Step 2 Icon
  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>,
  // Step 3 Icon
  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Step 4 Icon
  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>,
];

const Page6 = () => {
  const navigate = useNavigate();
  const { isRtl, lang } = useLanguage();
  const t = content[lang] || content.en;

  return (
    <section 
      className="bg-[#F8F5F2] py-10 sm:py-14 md:py-20 px-4 sm:px-8 md:px-16 lg:px-20 text-gray-800 font-sans overflow-hidden" 
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-2 sm:mb-3">
            {t.sectionTitle}
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <div className="h-[1px] w-8 sm:w-12 md:w-16 bg-[#E5C158]" />
            <span className="text-xs sm:text-base md:text-[18px] uppercase tracking-widest text-[#E5C158] font-semibold">
              {t.subtitle}
            </span>
            <div className="h-[1px] w-8 sm:w-12 md:w-16 bg-[#E5C158]" />
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (visible on md+) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#E5C158]/50 -translate-x-1/2" />

          {/* Mobile Left Vertical Timeline Line (visible only on mobile/sm screens) */}
          <div className="block md:hidden absolute left-4 rtl:left-auto rtl:right-4 top-0 bottom-0 w-[2px] bg-[#E5C158]/40" />

          {/* Timeline Steps */}
          <div className="space-y-10 sm:space-y-14 md:space-y-24">
            {t.steps.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.stepNumber}
                  className={`relative flex flex-col ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-6 sm:gap-8 md:gap-16 pl-10 rtl:pl-0 rtl:pr-10 md:pl-0 md:rtl:pr-0`}
                >
                  {/* Media (Video/Image) Block */}
                  <div className="w-full md:w-1/2 relative">
                    <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:scale-[1.02] transition-transform duration-300">
                      {item.video ? (
                        <video
                          src={item.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-48 sm:h-64 md:h-80 object-cover"
                        />
                      ) : (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 sm:h-64 md:h-80 object-cover"
                        />
                      )}
                    </div>

                    {/* Circular Step Badge (Desktop Overlay on Central Line) */}
                    <div
                      className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#E5C158] text-white font-bold text-base lg:text-lg items-center justify-center shadow-md z-10 ${
                        isEven 
                          ? (isRtl ? '-left-5 lg:-left-6' : '-right-5 lg:-right-6') 
                          : (isRtl ? '-right-5 lg:-right-6' : '-left-5 lg:-left-6')
                      }`}
                    >
                      {item.stepNumber}
                    </div>
                  </div>

                  {/* Mobile Timeline Circle Node */}
                  <div className="md:hidden absolute top-0 left-[-26px] rtl:left-auto rtl:right-[-26px] w-8 h-8 rounded-full bg-[#E5C158] text-white font-bold text-sm flex items-center justify-center shadow-md z-10">
                    {item.stepNumber}
                  </div>

                  {/* Card Block */}
                  <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-100 relative">
                      
                      {/* Header & Icon */}
                      <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                        <div className="p-1.5 sm:p-2 bg-[#F8F5F2] rounded-lg">
                          {stepIcons[index]}
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                        {item.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 sm:space-y-2.5">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                            <span className="text-[#E5C158] font-bold">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-14 md:mt-16">
          <button
            onClick={() => navigate('/booking')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#262626] hover:bg-black hover:scale-105 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
          >
            <span>{t.ctaBtn}</span>
            <span className="text-base sm:text-lg">+</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Page6;