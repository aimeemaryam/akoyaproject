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
  const { lang } = useLanguage();

  return (
    <div className="w-full bg-[#FFFFFF] pt-12 pb-24 mt-20 px-4 md:px-8">
      {/* Top Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0E1726] mb-3">
          {lang === 'ar' ? 'الرؤية والرسالة' : 'Vision & Mission'}
        </h1>
        <h3 className="text-lg md:text-xl text-[#D4AF37] font-medium mb-2">
          {lang === 'ar' ? 'أكويا للغسيل الفاخر' : 'Akoya Premium Laundry'}
        </h3>
        <p className="text-gray-800 text-sm md:text-base font-normal italic mb-4">
          {lang === 'ar'
            ? 'إعادة تعريف العناية بالأقمشة والفخامة الشخصية'
            : 'Redefining Fabric Care and Personal Luxury in Qatar'}
        </p>
        <div className="w-20 h-[3px] bg-[#D4AF37] mx-auto rounded-full" />
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Image Banner & Call to Action */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
          <div className="relative rounded-2xl overflow-hidden shadow-md group h-[580px]">
            <img
              src={visionImg}
              alt="Akoya Vision"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl mb-1.5 font-semibold mb-1">
                {lang === 'ar' ? 'التميز في كل تفصيلة' : 'Excellence in Every Detail'}
              </h3>
              <p className="text-sm text-gray-100 font-normal">
                {lang === 'ar' ? 'تكنولوجيا، فن، وعناية' : 'Technology, Artistry, and Care'}
              </p>
            </div>
          </div>

          {/* Book Now Card */}
          <div className="bg-[#D4AF37] rounded-2xl p-6 text-center shadow-md">
            <h4 className="text-white font-semibold text-lg mb-4">
              {lang === 'ar' ? 'جرب التميز اليوم' : 'Experience Excellence Today'}
            </h4>
            <Link
              to="/booking"
              className="inline-block w-full bg-white text-[#D4AF37] font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors shadow-sm"
            >
              {lang === 'ar' ? 'احجز الآن' : 'Book Now'}
            </Link>
          </div>
        </div>

        {/* Right Column: Vision, Mission & Core Values */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          {/* Our Vision Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg  grid grid-cols-1 md:grid-cols-12 min-h-[250px]">
            <div className="md:col-span-5 bg-[#D4AF37] text-white flex items-center justify-center p-14 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {lang === 'ar' ? 'رؤيتنا' : 'Our\nVision'}
              </h2>
            </div>
            <div className="md:col-span-7 p-8 md:p-10 flex items-center text-gray-800 leading-relaxed text-[18px]">
              {lang === 'ar'
                ? 'إعادة تعريف العناية بالأقمشة والفخامة الشخصية من خلال الابتكار، العطور الفاخرة، والخدمة المثالية — لجعل غسيل أكويا الفاخر رمزاً للأناقة والثقة في كل منزل.'
                : 'To redefine fabric care and personal luxury in Qatar through innovation, fragrance, and flawless service — making Akoya Premium Laundry the symbol of elegance and trust in every home.'}
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg  grid grid-cols-1 md:grid-cols-12 min-h-[270px]">
            <div className="md:col-span-7 p-14 md:p-10 flex items-center text-gray-800 leading-relaxed text-[18px] order-2 md:order-1">
              {lang === 'ar'
                ? 'في غسيل أكويا الفاخر، نسعى لتقديم حلول غسيل وتوصيل وعطور مخصصة تجمع بين التكنولوجيا والفن والعناية. مهمتنا هي تحويل الروتين اليومي إلى تجارب راقية من خلال خدمة استثنائية وانتباه للتفاصيل.'
                : 'At Akoya Premium Laundry, we strive to offer premium laundry, delivery, and custom perfume solutions that combine technology, artistry, and care. Our mission is to transform daily routines into refined experiences through exceptional service, attention to detail, and sustainable practices.'}
            </div>
            <div className="md:col-span-5 bg-[#0E1726]  text-white flex items-center justify-center p-12 text-center order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {lang === 'ar' ? 'رسالتنا' : 'Our\nMission'}
              </h2>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg h-[500px]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1726] text-center mb-10">
              {lang === 'ar' ? 'قيمنا الجوهرية' : 'Our Core Values'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((value) => (
                <div
                  key={value.id}
                  className="border-l-4 border-[#D4AF37] pl-5 py-4 pr-3  bg-gray-50/50 rounded-2xl flex flex-col h-[160px] justify-center"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#D4AF37] inline-block" />
                    <h3 className="text-xl font-bold text-[#0E1726]">
                      {lang === 'ar' ? value.titleAr : value.titleEn}
                    </h3>
                  </div>
                  <p className="text-[16px] text-gray-800  pl-8">
                    {lang === 'ar' ? value.descAr : value.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision1;