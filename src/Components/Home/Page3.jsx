import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext'; // Adjust path as needed

const pageData = {
  en: {
    heading: 'How Would You Like It Washed?',
    subheading: 'CHOOSE YOUR EXPERIENCE',
    buttonText: 'Continue to Garment Selection',
    cards: [
      {
        id: 'standard',
        title: 'Standard Wash',
        description:
          'Our signature 48-hour service with gentle cleaning, eco-friendly detergents, and basic folding.',
        price: 'From 50 QAR',
        icon: <span className="text-5xl">🧼</span>,
      },
      {
        id: 'express',
        title: 'Express Wash',
        description:
          'Need it fast? Get 24-hour turnaround, priority processing, and premium care.',
        price: 'From 80 QAR',
        icon: <span className="text-5xl">⚡</span>,
      },
    ],
  },
  ar: {
    heading: 'كيف تفضل غسيل ملابسك؟',
    subheading: 'اختر تجربتك',
    buttonText: 'المتابعة إلى اختيار الملابس',
    cards: [
      {
        id: 'standard',
        title: 'غسيل قياسي',
        description:
          'خدمتنا المميزة خلال 48 ساعة مع تنظيف لطيف، ومنظفات صديقة للبيئة، وطي أساسي.',
        price: 'من 50 ر.ق',
        icon: <span className="text-5xl">🧼</span>,
      },
      {
        id: 'express',
        title: 'غسيل سريع',
        description:
          'هل تحتاجه بسرعة؟ احصل على تسليم خلال 24 ساعة، ومعالجة أولوية، وعناية فائقة.',
        price: 'من 80 ر.ق',
        icon: <span className="text-5xl">⚡</span>,
      },
    ],
  },
};
const Page3 = () => {
  const { lang } = useLanguage();
  const content = pageData[lang] || pageData.en;

  return (
    <section className="w-full bg-white py-16 px-8 md:px-20 text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 text-[#1a1a1a]">
            {content.heading}
          </h2>
          <span className="text-[#D4AF37] font-semibold text-[18px] tracking-widest uppercase">
            {content.subheading}
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mb-12">
          {content.cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F5E1DA] h-[270px] rounded-3xl p-7 cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon */}
                <div className="mb-5">{card.icon}</div>

                {/* Title */}
                <h3 className="text-[24px] font-bold mb-1 text-gray-900">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-black text-medium leading-relaxed  font-normal">
                  {card.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-[#D4AF37] font-semibold text-[19px] mb-2">
                {card.price}
              </div>
            </div>
          ))}
        </div>

        {/* Action Link Button to Services */}
        <Link
          to="/services"
          className="bg-[#D4AF37] hover:bg-[#b8972e] text-black font-semibold text-medium px-10 py-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 inline-block text-center"
        >
          {content.buttonText}
        </Link>

      </div>
    </section>
  );
};

export default Page3;