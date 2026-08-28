import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext'; // Adjust path as needed

// Replace these imports with your actual image assets
import maknounImg from '../../assets/maknoun.jpg';
import madImg from '../../assets/mad.jpg';
import lulwaImg from '../../assets/lulwa.jpg';
import sadfImg from '../../assets/sadf.jpg';

const pageData = {
  en: {
    heading: 'Akoya Signature Fragrances',
    subheading: 'Premium scents crafted to elevate your laundry experience',
    addButton: 'Add',
    cards: [
      {
        id: 'maknoun',
        title: 'Maknoun',
        description:
          'A luxurious fragrance that embodies the charm of a confident man. A refined blend of fresh fruits, elegant florals, and a warm base of musk and amber, leaving an unforgettable signature.',
        price: '7 QAR',
        image: maknounImg,
      },
      {
        id: 'mad',
        title: 'Mad',
        description:
          'A powerful masculine fragrance that radiates prestige and luxury. Its unique composition blends saffron, jasmine, and incense, with a leathery amber base for a timeless presence.',
        price: '7 QAR',
        image: madImg,
      },
      {
        id: 'lulwa',
        title: 'Lulwa',
        description:
          'The fragrance of radiant femininity, combining modern freshness with timeless elegance. A stunning blend of bergamot, ginger, and patchouli with a soft musky touch, leaving a memorable sparkle.',
        price: '7 QAR',
        image: lulwaImg,
      },
      {
        id: 'sadf',
        title: 'Sadf',
        description:
          'A refreshing fragrance for both men and women, featuring bright citrus notes, warm ginger, and ambergris for an elegant and long-lasting touch.',
        price: '7 QAR',
        image: sadfImg,
      },
    ],
  },
  ar: {
    heading: 'عطور أكويا المميزة',
    subheading: 'عطور فاخرة تم تصميمها للارتقاء بتجربة غسيل ملابسك',
    addButton: 'إضافة',
    cards: [
      {
        id: 'maknoun',
        title: 'مكنون',
        description:
          'عطر فاخر يجسد سحر الرجل الواثق. مزيج راقٍ من الفواكه الطازجة، والزهور الأنيقة، وقاعدة دافئة من المسك والعنبر لتترك بصمة لا تُنسى.',
        price: '7 ر.ق',
        image: maknounImg,
      },
      {
        id: 'mad',
        title: 'ماد',
        description:
          'عطر رجالي قوي يشع بالهيبة والفخامة. تركيبة فريدة تمزج بين الزعفران والياسمين والبخور، مع قاعدة عنبرية جلدية لحضور يدوم طويلاً.',
        price: '7 ر.ق',
        image: madImg,
      },
      {
        id: 'lulwa',
        title: 'لؤلؤة',
        description:
          'عطر الأنوثة المشرقة، يجمع بين الانتعاش العصري والأناقة الخالدة. مزيج رائع من البرغموت والزنجبيل والباتشولي مع لمسة مسكية ناعمة.',
        price: '7 ر.ق',
        image: lulwaImg,
      },
      {
        id: 'sadf',
        title: 'صدف',
        description:
          'عطر منعش للرجال والنساء، يتميز بنغمات حمضية مشرفة، والزنجبيل الدافئ، والعنبر لمسة أنيقة وتدوم طويلاً.',
        price: '7 ر.ق',
        image: sadfImg,
      },
    ],
  },
};

const Page4 = () => {
  const { lang, isRtl } = useLanguage();
  const navigate = useNavigate();
  const content = pageData[lang] || pageData.en;

  const handleAdd = (item) => {
    // Optional: add your cart logic here (e.g., state dispatch or local storage)
    console.log('Added fragrance:', item);

    // Route directly to booking page
    navigate('/booking');
  };

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="w-full bg-[#F3F4F6] py-16 px-6 md:px-12 text-gray-900"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-relaxed text-[#111827]">
            {content.heading}
          </h2>
          <p className="text-gray-500 text-[18px] font-normal">
            {content.subheading}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">
          {content.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.04] transition-all duration-600 flex flex-col justify-between border border-gray-100/60"
            >
              {/* Card Image Wrapper */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Footer Price & Add Button */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[#D4AF37] font-bold text-normal">
                    {card.price}
                  </span>
                  <button
                    onClick={() => handleAdd(card)}
                    className="bg-[#D4AF37] hover:bg-[#b8972e] text-white text-sm font-normal px-4 py-1 rounded-full transition-colors duration-200 shadow-sm cursor-pointer"
                  >
                    {content.addButton}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Page4;