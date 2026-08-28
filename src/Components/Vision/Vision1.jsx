import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext'; // Adjust path if needed

// Asset Imports (Ensure this image path exists in your project)
import visionImg from '../../assets/ourmission.jpeg';

const coreValues = [
  {
    id: 1,
    titleEn: 'Excellence',
    titleAr: 'التميز',
    descEn: 'Every item, every wash, every fragrance meets the highest standards.',
    descAr: 'كل قطعة، وكل غسلة، وكل عطر يلبي أعلى معايير الجودة العالمية.',
  },
  {
    id: 2,
    titleEn: 'Innovation',
    titleAr: 'الابتكار',
    descEn: 'We use advanced systems and smart logistics to deliver faster and cleaner results.',
    descAr: 'نستخدم أنظمة متطورة ولوجستيات ذكية لتقديم نتائج أسرع وأكثر نظافة.',
  },
  {
    id: 3,
    titleEn: 'Sustainability',
    titleAr: 'الاستدامة',
    descEn: 'We commit to eco-friendly methods and responsible operations.',
    descAr: 'نلتزم بطرق صديقة للبيئة وعمليات تشغيلية مسؤولة بيئياً.',
  },
  {
    id: 4,
    titleEn: 'Customer Focus',
    titleAr: 'التركيز على العميل',
    descEn: 'Your satisfaction drives everything we do.',
    descAr: 'رضاك التام هو المحرك الأساسي لكل ما نقدمه من خدمات.',
  },
];

const Vision1 = () => {
  const { lang, isRtl } = useLanguage();

  return (
    <div
      className="w-full bg-[#FFFFFF] pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Top Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E1726] mb-2 sm:mb-3 font-serif tracking-tight">
          {lang === 'ar' ? 'الرؤية والرسالة' : 'Vision & Mission'}
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl text-[#D4AF37] font-semibold mb-2">
          {lang === 'ar' ? 'أكويا للغسيل الفاخر' : 'Akoya Premium Laundry'}
        </h2>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base font-normal italic mb-4">
          {lang === 'ar'
            ? 'إعادة تعريف العناية بالأقمشة والفخامة الشخصية'
            : 'Redefining Fabric Care and Personal Luxury in Qatar'}
        </p>
        <div className="w-16 sm:w-20 h-[3px] bg-[#D4AF37] mx-auto rounded-full" />
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left/Sidebar Column: Sticky Image Banner & CTA */}
        <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
          {/* Visual Banner */}
          <div className="relative rounded-2xl overflow-hidden shadow-md group border border-gray-100 h-64 sm:h-80 md:h-[420px] lg:h-[520px]">
            <img
              src={visionImg}
              alt={lang === 'ar' ? 'رؤية أكويا' : 'Akoya Vision'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
                {lang === 'ar' ? 'التميز في كل تفصيلة' : 'Excellence in Every Detail'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 font-normal">
                {lang === 'ar' ? 'تكنولوجيا، فن، وعناية' : 'Technology, Artistry, and Care'}
              </p>
            </div>
          </div>

          {/* Book Now Card */}
          <div className="bg-[#D4AF37] rounded-2xl p-5 sm:p-6 text-center shadow-md border border-[#c29f30]">
            <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              {lang === 'ar' ? 'جرب التميز اليوم' : 'Experience Excellence Today'}
            </h4>
            <Link
              to="/booking"
              className="inline-block w-full bg-white text-[#D4AF37] font-bold py-3 px-6 rounded-xl hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer text-sm sm:text-base"
            >
              {lang === 'ar' ? 'احجز الآن' : 'Book Now'}
            </Link>
          </div>
        </aside>

        {/* Right/Main Content Column: Vision, Mission & Core Values */}
        <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-8 md:gap-10">
          {/* Our Vision Card */}
          <section className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 grid grid-cols-1 md:grid-cols-12 min-h-0 md:min-h-[240px]">
            <div className="md:col-span-5 bg-[#D4AF37] text-white flex items-center justify-center p-6 sm:p-8 md:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight whitespace-pre-line">
                {lang === 'ar' ? 'رؤيتنا' : 'Our\nVision'}
              </h2>
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 md:p-10 flex items-center text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                {lang === 'ar'
                  ? 'إعادة تعريف العناية بالأقمشة والفخامة الشخصية من خلال الابتكار، العطور الفاخرة، والخدمة المثالية — لجعل غسيل أكويا الفاخر رمزاً للأناقة والثقة في كل منزل.'
                  : 'To redefine fabric care and personal luxury in Qatar through innovation, fragrance, and flawless service — making Akoya Premium Laundry the symbol of elegance and trust in every home.'}
              </p>
            </div>
          </section>

          {/* Our Mission Card */}
          <section className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 grid grid-cols-1 md:grid-cols-12 min-h-0 md:min-h-[260px]">
            <div className="md:col-span-7 p-6 sm:p-8 md:p-10 flex items-center text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg order-2 md:order-1">
              <p>
                {lang === 'ar'
                  ? 'في غسيل أكويا الفاخر، نسعى لتقديم حلول غسيل وتوصيل وعطور مخصصة تجمع بين التكنولوجيا والفن والعناية. مهمتنا هي تحويل الروتين اليومي إلى تجارب راقية من خلال خدمة استثنائية وانتباه للتفاصيل.'
                  : 'At Akoya Premium Laundry, we strive to offer premium laundry, delivery, and custom perfume solutions that combine technology, artistry, and care. Our mission is to transform daily routines into refined experiences through exceptional service, attention to detail, and sustainable practices.'}
              </p>
            </div>
            <div className="md:col-span-5 bg-[#0E1726] text-white flex items-center justify-center p-6 sm:p-8 md:p-10 text-center order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight whitespace-pre-line">
                {lang === 'ar' ? 'رسالتنا' : 'Our\nMission'}
              </h2>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E1726] text-center mb-6 sm:mb-8 md:mb-10">
              {lang === 'ar' ? 'قيمنا الجوهرية' : 'Our Core Values'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {coreValues.map((value) => (
                <div
                  key={value.id}
                  className={`py-4 px-5 bg-gray-50/70 hover:bg-gray-100/60 transition-colors rounded-xl flex flex-col justify-center border-b-2 sm:border-b-0 ${
                    isRtl
                      ? 'border-r-4 border-l-0 border-[#D4AF37]'
                      : 'border-l-4 border-r-0 border-[#D4AF37]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#D4AF37] shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-[#0E1726]">
                      {lang === 'ar' ? value.titleAr : value.titleEn}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed ps-5">
                    {lang === 'ar' ? value.descAr : value.descEn}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Vision1;