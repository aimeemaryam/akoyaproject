import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext'; // Adjust relative path if needed

const content = {
  en: {
    title: 'Privacy Policy',
    subtitle: 'Akoya Premium Laundry',
    effectiveDate: 'Effective Date: October 17, 2025',
    intro:
      'At Akoya Premium Laundry, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our luxury laundry and bespoke perfume services.',
    sideCardTitle: 'Data Protection & Trust',
    sideCardSub: 'Your personal information is handled with the utmost security and confidentiality.',
    questionsTitle: 'Privacy Concerns?',
    questionsSub: 'Contact our data support team for any questions regarding your information.',
    contactBtn: 'Contact Support',
    thankYouTitle: 'Your Trust is Our Priority',
    thankYouSub: 'We implement industry-standard encryption and security measures to keep your data safe.',
    sections: [
      {
        id: '1',
        title: '1. Information We Collect',
        text: 'We collect information provided directly by you, including your name, contact details, delivery address, payment information, and specific garment or scent preferences required to fulfill your orders.',
      },
      {
        id: '2',
        title: '2. How We Use Your Information',
        text: 'Your data is strictly used to process laundry bookings, manage pickups and deliveries, customize perfume formulas, handle payments, and provide tailored customer support.',
      },
      {
        id: '3',
        title: '3. Data Sharing and Third Parties',
        text: 'We do not sell, rent, or trade your personal information. We only share necessary details with trusted logistics and payment processing partners strictly for completing your service requests.',
      },
      {
        id: '4',
        title: '4. Data Security',
        text: 'We employ advanced technical and administrative security standards to prevent unauthorized access, disclosure, or alteration of your personal records.',
      },
      {
        id: '5',
        title: '5. Cookies & Site Analytics',
        text: 'Our website uses essential cookies to enhance user navigation, maintain your session state, and analyze overall site performance to continuously refine our digital experience.',
      },
      {
        id: '6',
        title: '6. Your Rights',
        text: 'You have the right to access, update, or request the deletion of your personal data stored in our system at any time by contacting our customer service team.',
      },
    ],
  },
  ar: {
    title: 'سياسة الخصوصية',
    subtitle: 'أكويا للغسيل الفاخر',
    effectiveDate: 'تاريخ السريان: ١٧ أكتوبر ٢٠٢٥',
    intro:
      'في أكويا للغسيل الفاخر، نُقدّر خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها وحمايتها عند التعامل مع خدمات الغسيل والعطور المخصصة لدينا.',
    sideCardTitle: 'حماية البيانات والثقة',
    sideCardSub: 'يتم التعامل مع معلوماتك الشخصية بأقصى درجات الأمان والسرية.',
    questionsTitle: 'استفسارات الخصوصية؟',
    questionsSub: 'تواصل مع فريق دعم البيانات لدينا لأي أسئلة تتعلق ببياناتك.',
    contactBtn: 'تواصل مع الدعم',
    thankYouTitle: 'ثقتكم هي أولويتنا',
    thankYouSub: 'نحن نطبق أعلى معايير التشفير والأمان لضمان سلامة جميع بياناتك.',
    sections: [
      {
        id: '1',
        title: '١. المعلومات التي نجمعها',
        text: 'نجمع المعلومات التي تقدمها لنا مباشرة، بما في ذلك اسمك، بيانات الاتصال، عنوان التوصيل، معلومات الدفع، وتفضيلات الملابس أو العطور الخاصة المطلوبة لتنفيذ طلباتك.',
      },
      {
        id: '2',
        title: '٢. كيفية استخدام معلوماتك',
        text: 'تُستخدم بياناتك حصريًا لمعالجة حجوزات الغسيل، إدارة عمليات الاستلام والتوصيل، تركيب العطور الخاصة، معالجة المدفوعات، تقديم دعم عملاء مخصص.',
      },
      {
        id: '3',
        title: '٣. مشاركة البيانات مع أطراف ثالثة',
        text: 'نحن لا نبيع أو نؤجر أو نتداول معلوماتك الشخصية. نشارك التفاصيل الضرورية فقط مع شركاء اللوجستيات ومعالجة المدفوعات الموثوقين لإتمام طلباتك.',
      },
      {
        id: '4',
        title: '٤. أمان البيانات',
        text: 'نطبق إجراءات أمنية وتقنية متقدمة لمنع أي وصول غير مصرح به أو إفشاء أو تعديل لسجلاتك الشخصية.',
      },
      {
        id: '5',
        title: '٥. ملفات تعريف الارتباط (الكوكيز)',
        text: 'يستخدم موقعنا ملفات تعريف الارتباط الأساسية لتحسين التصفح، الحفاظ على الجلسة الحالية، وتحليل أداء الموقع لتطوير التجربة الرقمية باستمرار.',
      },
      {
        id: '6',
        title: '٦. حقوقك',
        text: 'يحق لك الوصول إلى بياناتك الشخصية المخزنة لدينا أو تحديثها أو طلب حذفها في أي وقت من خلال التواصل مع فريق خدمة العملاء.',
      },
    ],
  },
};

const Privacy = () => {
  const { isRtl, lang } = useLanguage();
  const navigate = useNavigate();
  const t = content[lang] || content.en;

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-gray-800 pt-28 pb-16" dir={isRtl ? 'rtl' : 'ltr'}>
      <main className="max-w-6xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B132B] mb-2 font-serif">
            {t.title}
          </h1>
          <p className="text-[#C59B27] font-semibold text-lg">{t.subtitle}</p>
          <p className="text-gray-400 text-sm mt-1">{t.effectiveDate}</p>
          <div className="w-20 h-[3px] bg-[#C59B27] mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sticky Left Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-[#0B132B] text-white p-8 rounded-2xl shadow-md border border-[#C59B27]/30">
              <span className="text-[#C59B27] font-serif text-3xl font-bold block mb-3">AKOYA</span>
              <h3 className="text-xl font-bold mb-2">{t.sideCardTitle}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{t.sideCardSub}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-2">{t.questionsTitle}</h4>
              <p className="text-xs text-gray-500 mb-6">{t.questionsSub}</p>
              <button
                onClick={() => navigate('/contact')}
                className="w-full bg-[#C59B27] hover:bg-[#B38A1F] text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-sm cursor-pointer"
              >
                {t.contactBtn}
              </button>
            </div>
          </div>

          {/* Right Main Privacy Content */}
          <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-medium md:text-base text-gray-900 leading-relaxed border-b border-gray-100 pb-8 mb-8">
              {t.intro}
            </p>

            <div className="space-y-8">
              {t.sections.map((section) => (
                <div key={section.id} className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                  <p className="text-medium text-gray-800 leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>

            <div className={`mt-12 bg-[#FFF4D8] border-l-4 border-[#C59B27] p-6 rounded-xl ${isRtl ? 'border-r-4 border-l-0 rounded-l-xl rounded-r-none' : ''}`}>
              <h4 className="text-base font-bold text-gray-900 mb-1">{t.thankYouTitle}</h4>
              <p className="text-sm text-gray-700">{t.thankYouSub}</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Privacy;