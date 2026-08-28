import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext'; // Adjust relative path if needed
import luxuryImg from '../../assets/terms.jpg'; // Adjust asset path if needed

const content = {
  en: {
    title: 'Terms and Conditions',
    subtitle: 'Akoya Premium Laundry',
    effectiveDate: 'Effective Date: October 17, 2025',
    intro:
      'Welcome to Akoya Premium Laundry. By accessing or using our website and services, you agree to the following terms and conditions. Please read them carefully before placing any order.',
    sideCardTitle: 'Premium Laundry Service',
    sideCardSub: 'Exceptional care for your garments',
    questionsTitle: 'Have Questions?',
    questionsSub: 'Our customer service team is here to help',
    contactBtn: 'Contact Us',
    thankYouTitle: 'Thank You for Choosing Akoya',
    thankYouSub:
      'We are committed to delivering the finest premium laundry service to our valued customers',
    sections: [
      {
        id: '1',
        title: '1. Services',
        text: "Akoya Premium Laundry provides professional laundry, dry cleaning, and delivery services, as well as custom perfume creation. Our goal is to deliver premium care for your garments and an exceptional experience that reflects our brand's high standards.",
      },
      {
        id: '2',
        title: '2. Orders and Payments',
        text: 'All orders must be placed through our website, mobile app, or customer service channels. Prices are displayed clearly before checkout. Payment can be made online or upon delivery, depending on your selected option.',
      },
      {
        id: '3',
        title: '3. Pickup and Delivery',
        text: 'We offer convenient pickup and delivery services within our coverage area. Delivery times may vary depending on your location and order volume. Akoya Premium Laundry is not responsible for delays caused by traffic, weather, or other external factors beyond our control.',
      },
      {
        id: '4',
        title: '4. Garment Care and Responsibility',
        text: 'Our team applies the utmost care to every item. However, customers are responsible for ensuring that their garments are suitable for the requested cleaning process. Akoya Premium Laundry is not liable for damages caused by inherent fabric defects, improper labeling, or color fading due to material limitations.',
      },
      {
        id: '5',
        title: '5. Perfume Orders',
        text: 'All perfume products are custom-made to client specifications and are therefore non-refundable once production has started. We encourage customers to confirm fragrance details before placing an order.',
      },
      {
        id: '6',
        title: '6. Cancellations and Refunds',
        text: 'Cancellations must be requested before pickup or within one hour of placing an online order. Refunds, if applicable, will be issued using the original payment method.',
      },
      {
        id: '7',
        title: '7. Privacy and Data Protection',
        text: 'Akoya Premium Laundry respects your privacy. Customer data is collected only to process orders and enhance services. We never share your personal information with third parties without consent.',
      },
    ],
  },
  ar: {
    title: 'الشروط والأحكام',
    subtitle: 'أكويا للغسيل الفاخر',
    effectiveDate: 'تاريخ السريان: ١٧ أكتوبر ٢٠٢٥',
    intro:
      'مرحبًا بكم في أكويا للغسيل الفاخر. من خلال الوصول إلى موقعنا وخدماتنا أو استخدامها، فإنك توافق على الشروط والأحكام التالية. يرجى قراءتها بعناية قبل تقديم أي طلب.',
    sideCardTitle: 'خدمة الغسيل الفاخرة',
    sideCardSub: 'عناية استثنائية بملابسك',
    questionsTitle: 'لديك أسئلة؟',
    questionsSub: 'فريق خدمة العملاء لدينا هنا للمساعدة',
    contactBtn: 'اتصل بنا',
    thankYouTitle: 'شكراً لاختيارك أكويا',
    thankYouSub:
      'نحن ملتزمون بتقديم أرقى خدمات الغسيل الفاخرة لعملائنا الكرام',
    sections: [
      {
        id: '1',
        title: '١. الخدمات',
        text: 'تقدم أكويا للغسيل الفاخر خدمات الغسيل والتنظيف الجاف والتوصيل الاحترافية، بالإضافة إلى تركيب العطور المخصصة. هدفنا هو تقديم عناية فائقة بملابسك وتجربة استثنائية تعكس معايير علامتنا التجارية العالية.',
      },
      {
        id: '2',
        title: '٢. الطلبات والدفع',
        text: 'يجب تقديم جميع الطلبات من خلال موقعنا الإلكتروني أو تطبيق الهاتف المحمول أو قنوات خدمة العملاء. يتم عرض الأسعار بوضوح قبل إتمام الطلب. يمكن الدفع عبر الإنترنت أو عند التوصيل، بناءً على الخيار المحدد.',
      },
      {
        id: '3',
        title: '٣. الاستلام والتوصيل',
        text: 'نقدم خدمات استلام وتوصيل مريحة داخل منطقة تغطيتنا. قد تختلف أوقات التسليم حسب موقعك وحجم الطلب. أكويا للغسيل الفاخر غير مسؤولة عن التأخير الناتج عن حركة المرور أو الطقس أو العوامل الخارجية الأخرى خارجة عن إرادتنا.',
      },
      {
        id: '4',
        title: '٤. العناية بالملابس والمسؤولية',
        text: 'يبذل فريقنا أقصى درجات العناية بكل قطعة ملابس. ومع ذلك، يتحمل العملاء مسؤولية التأكد من أن ملابسهم مناسبة لعملية التنظيف المطلوبة. أكويا للغسيل الفاخر غير مسؤولة عن الأضرار الناتجة عن عيوب الأقمشة الذاتية، أو التسميات غير الصحيحة، أو بهتان الألوان بسبب قيود المواد.',
      },
      {
        id: '5',
        title: '٥. طلبات العطور',
        text: 'جميع منتجات العطور مصممة خصيصًا وفقًا لمواصفات العميل، وبالتالي فهي غير قابلة للاسترداد بمجرد بدء الإنتاج. نشجع العملاء على تأكيد تفاصيل العطر قبل تقديم الطلب.',
      },
      {
        id: '6',
        title: '٦. الإلغاء والاسترداد',
        text: 'يجب طلب الإلغاء قبل الاستلام أو خلال ساعة واحدة من تقديم الطلب عبر الإنترنت. يتم إصدار المبالغ المستردة، إن وجدت، باستخدام طريقة الدفع الأصلية.',
      },
      {
        id: '7',
        title: '٧. الخصوصية وحماية البيانات',
        text: 'تحترم أكويا للغسيل الفاخر خصوصيتك. يتم جمع بيانات العملاء فقط لمعالجة الطلبات وتحسين الخدمات. نحن لا نتم مشاركة معلوماتك الشخصية مع أطراف ثالثة بدون موافقتك.',
      },
    ],
  },
};

const Terms = () => {
  const { isRtl, lang } = useLanguage();
  const navigate = useNavigate();
  const t = content[lang] || content.en;

  return (
    <div
      className="bg-[#FAF8F5] min-h-screen text-gray-800 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Page Title Header */}
        <header className="text-center mb-8 sm:mb-10 md:mb-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B132B] mb-2 font-serif tracking-tight">
            {t.title}
          </h1>
          <p className="text-[#C59B27] font-semibold text-sm sm:text-base md:text-lg">
            {t.subtitle}
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            {t.effectiveDate}
          </p>
          <div className="w-16 sm:w-20 h-[3px] bg-[#C59B27] mx-auto mt-3 sm:mt-4 rounded-full" />
        </header>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Sticky Left Sidebar (Image + Contact Box) */}
          <aside className="lg:col-span-4 space-y-4 sm:space-y-6 lg:sticky lg:top-28">
            {/* Banner Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group border border-gray-100">
              <img
                src={luxuryImg}
                alt="Akoya Premium Laundry"
                className="w-full h-56 sm:h-72 md:h-80 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">
                  {t.sideCardTitle}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  {t.sideCardSub}
                </p>
              </div>
            </div>

            {/* Have Questions Card */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">
                {t.questionsTitle}
              </h3>
              <p className="text-xs text-gray-500 mb-4 sm:mb-6">
                {t.questionsSub}
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="w-full bg-[#C59B27] hover:bg-[#B38A1F] active:scale-[0.98] text-white py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm cursor-pointer hover:shadow"
              >
                {t.contactBtn}
              </button>
            </div>
          </aside>

          {/* Right Main Content Card */}
          <article className="lg:col-span-8 bg-white p-5 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            {/* Intro paragraph */}
            <p className="text-xs sm:text-sm md:text-base text-gray-900 leading-relaxed border-b border-gray-100 pb-6 sm:pb-8 mb-6 sm:mb-8">
              {t.intro}
            </p>

            {/* Terms Sections */}
            <div className="space-y-6 sm:space-y-8">
              {t.sections.map((section) => (
                <section key={section.id} className="space-y-1.5 sm:space-y-2">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    {section.text}
                  </p>
                </section>
              ))}
            </div>

            {/* Bottom Thank You Banner (RTL-aware borders) */}
            <div
              className={`mt-8 sm:mt-12 bg-[#FFF4D8] p-4 sm:p-6 rounded-xl transition-all ${
                isRtl
                  ? 'border-r-4 border-l-0 rounded-l-xl rounded-r-none border-[#C59B27]'
                  : 'border-l-4 border-r-0 rounded-r-xl rounded-l-none border-[#C59B27]'
              }`}
            >
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                {t.thankYouTitle}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {t.thankYouSub}
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Terms;