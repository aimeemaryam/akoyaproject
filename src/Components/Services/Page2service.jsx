import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext'; // Adjust path if needed

// Asset Imports
import dryCleaningImg from '../../assets/dryCleaning.jpg';
import pressingImg from '../../assets/exectivePressing.jpg';
import coutureCareImg from '../../assets/care.jpg';
import bisht from '../../assets/resturation.jpg'
import express from '../../assets/sehedulePickup.jpg'
import frag from '../../assets/fragrance.jpg'
import dishda from '../../assets/dishdasha.webp'
import cdish from '../../assets/child_dishdasha.jpg'
import bishttt from '../../assets/bisht.jpg'
import ghutra from '../../assets/ghutra.jpg'
import kurta from '../../assets/kurta.jpg'
import kurtap from '../../assets/kurtaPajama.jpg'
import kameez from '../../assets/kameez.jpg'
import jalabiya from '../../assets/jalabiya.jpg'
import abaya from '../../assets/abaya.jpg'
import abayas from '../../assets/abaya_special.jpg'
import hijab from '../../assets/hijab.png'
import gent from '../../assets/gent_suit.jpg'
import dress from '../../assets/dress.jpg'
import dressl from '../../assets/dressLong.jpg'
import overcoat from '../../assets/overcoat.jpg'
import uniform from '../../assets/military_suite.jpg'
import blouse from '../../assets/blouse.jpg'
import robe from '../../assets/bathrob.jpg'
const categories = [
  { id: 'all', en: 'All', ar: 'الكل' },
  { id: 'dry-cleaning', en: 'Dry Cleaning', ar: 'التنظيف الجاف' },
  { id: 'pressing', en: 'Pressing', ar: 'الكي' },
  { id: 'specialty', en: 'Specialty', ar: 'خدمات خاصة' },
  { id: 'traditional', en: 'Traditional', ar: 'الزي التقليدي' },
  { id: 'express', en: 'Express', ar: 'السريع' },
  { id: 'add-on', en: 'Add-On', ar: 'إضافات' },
];

const servicesData = [
  // --- ROW 1 (Screenshot 1) ---
  {
    id: 1,
    category: 'dry-cleaning',
    titleEn: 'Dry Cleaning',
    titleAr: 'التنظيف الجاف',
    priceEn: 'From 6 QAR',
    priceAr: 'من 6 ر.ق',
    descEn: 'Expert care for suits and delicate fabrics using eco-friendly solvents',
    descAr: 'عناية خبيرة للبدل والأقمشة الرقيقة باستخدام مواد صديقة للبيئة',
    badge: '🧥',
    image: dryCleaningImg,
  },
  {
    id: 2,
    category: 'pressing',
    titleEn: 'Executive Pressing',
    titleAr: 'كي تنفيذي',
    priceEn: 'From 3 QAR',
    priceAr: 'من 3 ر.ق',
    descEn: 'Crisp finishes for business attire with precision steam technology',
    descAr: 'تشطيبات مثالية للملابس الرسمية بتقنية البخار الدقيقة',
    badge: '👔',
    image: pressingImg,
  },
  {
    id: 3,
    category: 'specialty',
    titleEn: 'Couture Care',
    titleAr: 'عناية بالأزياء الفاخرة',
    priceEn: 'From 7 QAR',
    priceAr: 'من 7 ر.ق',
    descEn: 'Hand-cleaning for designer garments and delicate fabrics',
    descAr: 'تنظيف يدوي للأقمشة الفاخرة وملابس المصممين',
    badge: '👗',
    image: coutureCareImg,
  },

  // --- ROW 2 (Screenshot 2) ---
  {
    id: 4,
    category: 'specialty',
    titleEn: 'Bisht Restoration',
    titleAr: 'ترميم البشت',
    priceEn: 'From 25 QAR',
    priceAr: 'من 25 ر.ق',
    descEn: 'Traditional cleaning and pressing for Qatari formal wear',
    descAr: 'تنظيف وكي تقليدي للبشت والزي القطري الرسمي',
    badge: '🕌',
    image: bisht,
  },
  {
    id: 5,
    category: 'express',
    titleEn: 'Express Service',
    titleAr: 'الخدمة السريعة',
    priceEn: '+30% Premium',
    priceAr: '+30% رسوم إضافية',
    descEn: '3-hour turnaround for urgent garment needs',
    descAr: 'خدمة سريعة خلال 3 ساعات للحالات المستعجلة',
    badge: '⚡',
    image: express,
  },
  {
    id: 6,
    category: 'add-on',
    titleEn: 'Fragrance Infusion',
    titleAr: 'تعطير فاخر',
    priceEn: '5 QAR',
    priceAr: '5 ر.ق',
    descEn: 'Luxury scent options for your garments',
    descAr: 'خيارات عطور فاخرة لملابسك',
    badge: '🌸',
    image: frag,
  },

  // --- ROW 3 (Screenshot 3) ---
  {
    id: 7,
    category: 'traditional',
    titleEn: 'Dishdasha',
    titleAr: 'دشداشة / ثوب',
    priceEn: 'From 4 QAR',
    priceAr: 'من 4 ر.ق',
    descEn: "Professional care for men's traditional Qatari garment",
    descAr: 'عناية احترافية بالثوب التقليدي للرجال',
    badge: '👳‍♂️',
    image: dishda,
  },
  {
    id: 8,
    category: 'traditional',
    titleEn: 'Child Dishdasha',
    titleAr: 'دشداشة أطفال',
    priceEn: 'From 3 QAR',
    priceAr: 'من 3 ر.ق',
    descEn: "Specialized care for children's traditional garments",
    descAr: 'عناية خاصة بالأثواب التقليدية للأطفال',
    badge: '👦',
    image: cdish,
  },
  {
    id: 9,
    category: 'traditional',
    titleEn: 'Bisht',
    titleAr: 'بشت',
    priceEn: 'From 25 QAR',
    priceAr: 'من 25 ر.ق',
    descEn: 'Premium care for ceremonial cloak with gold detailing',
    descAr: 'عناية فاخرة بالبشت والمشالح المطرزة بالخيوط الذهبية',
    badge: '💥',
    image: bishttt,
  },

  // --- ROW 4 (Screenshot 4) ---
  {
    id: 10,
    category: 'traditional',
    titleEn: 'Ghutra',
    titleAr: 'غترة / غترة',
    priceEn: 'From 3 QAR',
    priceAr: 'من 3 ر.ق',
    descEn: 'Gentle cleaning for traditional headwear',
    descAr: 'تنظيف لطيف للغترة والعقال والزي التقليدي',
    badge: '👳',
    image: ghutra,
  },
  {
    id: 11,
    category: 'traditional',
    titleEn: 'Kurta',
    titleAr: 'كورتا',
    priceEn: 'From 4 QAR',
    priceAr: 'من 4 ر.ق',
    descEn: 'Care for traditional South Asian tunic',
    descAr: 'عناية بقمصان الكورتا والزي التقليدي',
    badge: '👕',
    image: kurta,
  },
  {
    id: 12,
    category: 'traditional',
    titleEn: 'Kurta Pyjama (Set)',
    titleAr: 'طقم كورتا مع بيجامة',
    priceEn: 'From 6 QAR',
    priceAr: 'من 6 ر.ق',
    descEn: 'Complete set cleaning for traditional attire',
    descAr: 'تنظيف شامل للأطقم والزي التقليدي الكامل',
    badge: '👖',
    image: kurtap,
  },

  // --- ROW 5 (Screenshot 5) ---
  {
    id: 13,
    category: 'traditional',
    titleEn: 'Kameez',
    titleAr: 'قميص / قميص تقليدي',
    priceEn: 'From 4 QAR',
    priceAr: 'من 4 ر.ق',
    descEn: 'Professional care for traditional long shirts',
    descAr: 'عناية احترافية بالقمصان والجلابيات الطويلة',
    badge: '👕',
    image: kameez,
  },
  {
    id: 14,
    category: 'traditional',
    titleEn: 'Jalabiya',
    titleAr: 'جلابية',
    priceEn: 'From 6 QAR',
    priceAr: 'من 6 ر.ق',
    descEn: 'Specialized care for flowing traditional gowns',
    descAr: 'عناية متخصصة بالجلابيات والفساتين الشرقية',
    badge: '👚',
    image: jalabiya,
  },
  {
    id: 15,
    category: 'traditional',
    titleEn: 'Abaya',
    titleAr: 'عباية',
    priceEn: 'From 10 QAR',
    priceAr: 'من 10 ر.ق',
    descEn: 'Professional cleaning for everyday abayas',
    descAr: 'تنظيف احترافي للعبايات اليومية',
    badge: '🧕',
    image: abaya,
  },

  // --- ROW 6 (Screenshot 6) ---
  {
    id: 16,
    category: 'traditional',
    titleEn: 'Abaya Special',
    titleAr: 'عباية فاخرة',
    priceEn: 'From 12 QAR',
    priceAr: 'من 12 ر.ق',
    descEn: 'Premium care for embellished abayas',
    descAr: 'عناية فاخرة للعبايات المطرزة والمزخرفة',
    badge: '✨',
    image: abayas,
  },
  {
    id: 17,
    category: 'traditional',
    titleEn: 'Hijab',
    titleAr: 'حجاب / شيلة',
    priceEn: 'From 3 QAR',
    priceAr: 'من 3 ر.ق',
    descEn: 'Delicate cleaning for headscarves',
    descAr: 'تنظيف رقيق للحجاب والشيل والأقمشة الناعمة',
    badge: '🧕',
    image: hijab,
  },
  {
    id: 18,
    category: 'dry-cleaning',
    titleEn: 'Gent Suit (3pcs)',
    titleAr: 'بدلة رجالي (3 قطع)',
    priceEn: 'From 12 QAR',
    priceAr: 'من 12 ر.ق',
    descEn: 'Complete care for 3-piece suits',
    descAr: 'عناية كاملة للبدل الرجالية مكونة من 3 قطع',
    badge: '👔',
    image: gent,
  },

  // --- ROW 7 (Screenshot 7) ---
  {
    id: 19,
    category: 'dry-cleaning',
    titleEn: 'Dress (Short)',
    titleAr: 'فستان (قصير)',
    priceEn: 'From 10 QAR',
    priceAr: 'من 10 ر.ق',
    descEn: 'Care for cocktail and summer dresses',
    descAr: 'عناية بفساتين الكوكتيل والفساتين القصيرة',
    badge: '👗',
    image: dress,
  },
  {
    id: 20,
    category: 'dry-cleaning',
    titleEn: 'Dress (Long)',
    titleAr: 'فستان (طويل)',
    priceEn: 'From 15 QAR',
    priceAr: 'من 15 ر.ق',
    descEn: 'Specialized care for evening gowns',
    descAr: 'عناية خاصة بفساتين السهرة والفساتين الطويلة',
    badge: '💃',
    image: dressl,
  },
  {
    id: 21,
    category: 'dry-cleaning',
    titleEn: 'Overcoat',
    titleAr: 'معطف طويل',
    priceEn: 'From 11 QAR',
    priceAr: 'من 11 ر.ق',
    descEn: 'Winter coat cleaning and preservation',
    descAr: 'تنظيف المعاطف الشتوية والحفاظ عليها',
    badge: '🧥',
    image: overcoat,
  },

  // --- ROW 8 (Screenshot 8) ---
  {
    id: 22,
    category: 'specialty',
    titleEn: 'Military Uniform',
    titleAr: 'زي عسكري',
    priceEn: 'From 9 QAR',
    priceAr: 'من 9 ر.ق',
    descEn: 'Regimental standard cleaning and pressing',
    descAr: 'تنظيف وكي احترافي للزي العسكري حسب المعايير',
    badge: '🎖️',
    image: uniform,
  },
  {
    id: 23,
    category: 'specialty',
    titleEn: 'Blouse (Special)',
    titleAr: 'بلوزة فاخرة',
    priceEn: 'From 4 QAR',
    priceAr: 'من 4 ر.ق',
    descEn: 'Delicate care for embellished tops',
    descAr: 'عناية خاصة بالبلوزات المطرزة والدانتيل',
    badge: '👚',
    image: blouse,
  },
  {
    id: 24,
    category: 'specialty',
    titleEn: 'Bath Robe',
    titleAr: 'رداء حمام (روب)',
    priceEn: 'From 4 QAR',
    priceAr: 'من 4 ر.ق',
    descEn: 'Deep cleaning for plush bathrobes',
    descAr: 'تنظيف عميق لأردية الحمام والمناشف',
    badge: '🛁',
    image: robe,
  },
];

const Page2service = () => {
  const { lang, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices =
    selectedCategory === 'all'
      ? servicesData
      : servicesData.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full bg-[#FAF8F5] text-gray-800 py-16 px-8 md:px-22">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-3 tracking-wide">
          {lang === 'ar' ? 'خدماتنا' : 'Our Services'}
        </h2>
        <div className="flex items-center justify-center space-x-3 space-x-reverse mb-6">
          <span className="h-[1px] w-12 bg-[#D4AF37]" />
          <span className="text-xl  tracking-[0.2em] font-semibold text-[#D4AF37] uppercase">
            {lang === 'ar' ? 'العناية الفاخرة بالملابس' : 'LUXURY GARMENT CARE'}
          </span>
          <span className="h-[1px] w-12 bg-[#D4AF37]" />
        </div>

        {/* Filter Categories Horizontal Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3 mt-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#1C1C1C] text-white shadow-md'
                    : 'bg-white text-gray-900 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {lang === 'ar' ? cat.ar : cat.en}
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border border-gray-100 group"
          >
            <div>
              {/* Card Header Image & Badge */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={lang === 'ar' ? service.titleAr : service.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div
                  className={`absolute top-4 ${
                    isRtl ? 'left-4' : 'right-4'
                  } w-10 h-10 rounded-full bg-[#D4AF37]/90 backdrop-blur-sm flex items-center justify-center text-lg shadow-md z-10`}
                >
                  {service.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-start justify-between mb">
                  <h3 className="text-xl font-medium text-gray-900">
                    {lang === 'ar' ? service.titleAr : service.titleEn}
                  </h3>
                  <span className="text-medium font-semibold text-[#D4AF37] whitespace-nowrap pt-1">
                    {lang === 'ar' ? service.priceAr : service.priceEn}
                  </span>
                </div>
                <p className="text-medium text-gray-800 leading-relaxed min-h-[48px]">
                  {lang === 'ar' ? service.descAr : service.descEn}
                </p>
              </div>
            </div>
             <span className="h-[1px] w-[290px] mx-6 bg-[#D4AF37] mb-5 -mt-6" />
            {/* Always Visible Action Button */}
            <div className="px-6 pb-6">
              <Link
                to="/booking"
                className="w-full block text-center bg-[#D4AF37] hover:bg-[#c39e2e] text-black font-medium py-3 rounded-xl transition-colors duration-300 shadow-sm"
              >
                {lang === 'ar' ? 'طلب +' : 'Order +'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2service;