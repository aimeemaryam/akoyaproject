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
  <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  // Step 2 Icon
  <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>,
  // Step 3 Icon
  <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Step 4 Icon
  <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>,
];

const Page6 = () => {
  const navigate = useNavigate();
  const { isRtl, lang } = useLanguage();
  const t = content[lang] || content.en;

  return (
    <section className="bg-[#F8F5F2] py-20 px-8 md:px-20 text-gray-800 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center -mt-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
            {t.sectionTitle}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-[#E5C158]" />
            <span className="text-[18px] uppercase tracking-widest text-[#E5C158] font-semibold">
              {t.subtitle}
            </span>
            <div className="h-[1px] w-16 bg-[#E5C158]" />
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (visible on md+) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#E5C158]/50 -translate-x-1/2" />

          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-24">
            {t.steps.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.stepNumber}
                  className={`relative flex flex-col ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-8 md:gap-16`}
                >
                  {/* Media (Video/Image) Block */}
                  <div className="w-full md:w-1/2 relative">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:scale-103 duration-300">
                      {item.video ? (
                        <video
                          src={item.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-64 md:h-80 object-cover"
                        />
                      ) : (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 md:h-80 object-cover"
                        />
                      )}
                    </div>

                    {/* Circular Step Badge (Center Overlay) */}
                    <div
                      className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#E5C158] text-white font-bold text-lg items-center justify-center shadow-md z-10 ${
                        isEven 
                          ? (isRtl ? '-left-6' : '-right-6') 
                          : (isRtl ? '-right-6' : '-left-6')
                      }`}
                    >
                      {item.stepNumber}
                    </div>
                  </div>

                  {/* Card Block */}
                  <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 relative">
                      {/* Mobile Step Badge */}
                      <div className="md:hidden inline-flex w-8 h-8 rounded-full bg-[#E5C158] text-white font-bold text-medium items-center justify-center mb-4">
                        {item.stepNumber}
                      </div>

                      {/* Header & Icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2">
                          {stepIcons[index]}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-medium text-gray-900 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2.5">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
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
        <div className="text-center mt-16">
          <button
            onClick={() => navigate('/booking')}
            className="inline-flex items-center gap-2 bg-[#262626] hover:scale-103 text-white px-8 py-3 rounded-full text-medium font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>{t.ctaBtn}</span>
            <span className="text-lg">+</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Page6;