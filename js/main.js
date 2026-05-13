/* Najjar Development — main.js */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Intersection Observer: fade-up sections ── */
if (!prefersReducedMotion) {
  const fadeEls = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  fadeEls.forEach((el) => observer.observe(el));
} else {
  /* Skip animation — mark all visible immediately */
  document.querySelectorAll('.fade-up').forEach((el) => el.classList.add('visible'));
}

/* ── Smooth scroll for anchor links (Safari fallback) ── */
if (!CSS.supports('scroll-behavior', 'smooth')) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── i18n ── */
const translations = {
  en: {
    'brand-name':        'Najjar Development',
    'footer-copy':       '© 2026 Najjar Development — Kingdom of Bahrain',
    'lang-toggle':       'AR',

    /* index */
    'hero-eyebrow':      'Web Design — Bahrain',
    'hero-headline':     'Websites that<br>make your<br>business look<br><span class="accent">serious.</span>',
    'hero-subtitle':     'Custom-built websites for Bahraini businesses. Professional design, mobile-first, fast to deliver. Built to convert visitors into customers — not just to look pretty.',
    'hero-cta-primary':  'View Packages →',
    'hero-cta-secondary':'See My Work →',
    'trust-1':           'Built for service businesses',
    'trust-2':           '7–14 day delivery',
    'trust-3':           'Bahrain-based developer',

    /* packages nav */
    'nav-work-btn':      'See My Work →',

    /* packages header */
    'pkg-page-eyebrow':  'Choose Your Package',
    'pkg-page-title':    'Three ways to get online.',
    'pkg-page-subtitle': 'Pick the package that matches where your business is right now. Every site is custom-coded, mobile-first, and built to last.',

    /* package 01 */
    'pkg-01-num':        'PACKAGE 01',
    'pkg-01-name':       'Starter',
    'pkg-01-tagline':    'A clean, professional online presence — fast.',
    'pkg-01-f1':         'Single-page professional website',
    'pkg-01-f2':         'Fully mobile-responsive design',
    'pkg-01-f3':         'WhatsApp button on every section',
    'pkg-01-f4':         'Contact form integration',
    'pkg-01-f5':         'Basic SEO setup (Google-ready)',
    'pkg-01-f6':         'Hosting & domain setup support',
    'pkg-01-f7':         'Delivered live in 7 days',
    'pkg-01-f8':         '1 round of revisions included',
    'pkg-price-once':    'ONE-TIME',

    /* package 02 */
    'pkg-featured-pill': 'Most Popular',
    'pkg-02-num':        'PACKAGE 02',
    'pkg-02-name':       'Business',
    'pkg-02-tagline':    'Built to win customers, not just exist online.',
    'pkg-02-f1':         'Multi-section custom website',
    'pkg-02-f2':         'Hero, Services, Gallery, About, Contact',
    'pkg-02-f3':         'Custom design matched to your brand',
    'pkg-02-f4':         'Photo optimization from your content',
    'pkg-02-f5':         'Smooth animations & transitions',
    'pkg-02-f6':         'WhatsApp + contact form + Maps',
    'pkg-02-f7':         'Google Business listing setup',
    'pkg-02-f8':         'Advanced SEO foundation',
    'pkg-02-f9':         'Delivered live in 10 days',
    'pkg-02-f10':        '2 rounds of revisions included',

    /* package 03 */
    'pkg-03-num':        'PACKAGE 03',
    'pkg-03-name':       'Premium',
    'pkg-03-tagline':    'For businesses ready to compete and grow online.',
    'pkg-03-f1':         'Everything in the Business package',
    'pkg-03-f2':         'Booking / inquiry system integration',
    'pkg-03-f3':         'Bilingual support (English + Arabic)',
    'pkg-03-f4':         'Blog or updates section',
    'pkg-03-f5':         'Social media feed integration',
    'pkg-03-f6':         'Performance & analytics dashboard',
    'pkg-03-f7':         'First 3 months of updates included',
    'pkg-03-f8':         'Unlimited revisions until perfect',

    /* care plan */
    'care-eyebrow':      'Keep It Running',
    'care-title':        'Monthly maintenance.',
    'care-subtitle':     'Your website is a living thing — it needs updates, security patches, and changes. Optional, but recommended.',
    'care-name':         'Care Plan',
    'care-tagline':      'Hands-off site management so you can focus on your business.',
    'care-f1':           'Hosting & uptime monitoring',
    'care-f2':           'Content updates',
    'care-f3':           'New photos & offers',
    'care-f4':           'Security patches',
    'care-f5':           'Bug fixes',
    'care-f6':           'Priority support',
    'care-period':       'PER MONTH',

    /* process */
    'process-eyebrow':   'How It Works',
    'process-title':     'A simple 4-step process.',
    'step-01-num':       'STEP 01',
    'step-01-title':     'Discovery Call',
    'step-01-desc':      '15-minute chat about your business, goals, and what success looks like for you.',
    'step-02-num':       'STEP 02',
    'step-02-title':     'Design & Build',
    'step-02-desc':      'I design and build your site, keeping you updated. You see progress along the way.',
    'step-03-num':       'STEP 03',
    'step-03-title':     'Review & Refine',
    'step-03-desc':      "You review the live preview. We refine until it's exactly what you want.",
    'step-04-num':       'STEP 04',
    'step-04-title':     'Launch & Live',
    'step-04-desc':      "Site goes live on your domain. You're online and ready for customers.",

    /* notes */
    'notes-title':       'Good to Know',
    'note-1':            '50% deposit to start, 50% on launch — no surprises',
    'note-2':            'All packages include domain & hosting setup guidance',
    'note-3':            'Pricing excludes domain and hosting fees (typically BD 15–25/year)',
    'note-4':            'Custom features outside listed packages quoted separately',

    /* cta */
    'cta-eyebrow':       'Ready to Start?',
    'cta-title':         "Let's build something good.",
    'cta-sub':           'Reach out on WhatsApp to book your discovery call.',
    'btn-whatsapp':      'Message on WhatsApp →',

    /* work nav */
    'nav-packages-btn':  'View Packages →',

    /* work header */
    'work-eyebrow':      'Portfolio',
    'work-title':        'Recent work.',
    'work-subtitle':     "A selection of websites I've built for businesses across Bahrain.",

    /* projects */
    'p1-client':  'Real Estate Media · Bahrain',
    'p1-title':   'PanoPros',
    'p1-desc':    "Professional photography, videography, virtual tours, floor plans, and virtual staging for Bahrain's property market.",
    'p1-link':    'View Live →',

    'p2-client':  'Wellness & Beauty · Bahrain',
    'p2-title':   'Calma',
    'p2-desc':    'A serene, conversion-focused site for a premium wellness brand — designed to attract and book clients effortlessly.',
    'p2-link':    'View Live →',

    'p3-client':  'Italian Restaurant · Bahrain',
    'p3-title':   'Gusto Pizzeria Ristorante',
    'p3-desc':    'Authentic wood-fired Italian dining — a full-service restaurant site built to drive reservations.',
    'p3-link':    'View Live →',

    'p4-client':  'Premium Car Care · Bahrain',
    'p4-title':   'CAS Premium',
    'p4-desc':    'High-end auto detailing, ceramic coatings, and PPF — a premium site built to attract serious car enthusiasts.',
    'p4-link':    'View Live →',

    'p5-client':  'Auto Detailing · Salmabad, Bahrain',
    'p5-title':   'Custom Touch Car Care',
    'p5-desc':    'Workshop-grade detailing — ceramic coatings, PPF, wrapping, and paint correction built for Gulf conditions.',
    'p5-link':    'View Live →',

    'p6-client':  'Car Detailing · Hidd, Bahrain',
    'p6-title':   '3D Car Spa',
    'p6-desc':    'Premium mobile car detailing with a spa-quality finish — comes to you anywhere in Bahrain.',
    'p6-link':    'View Live →',

    'coming-soon-eyebrow': 'Next Project',
    'coming-soon-text':    'Coming Soon',
    'p8-client':  'Your Business · Bahrain',
    'p8-title':   'More projects launching soon',
    'p8-desc':    'New client work in progress. Want to see your business here?',
    'p8-link':    'Get in Touch →',

    /* work cta */
    'work-cta-eyebrow': "Let's Work Together",
    'work-cta-title':   "Want to be next? Let's talk.",
    'work-cta-sub':     "Reach out on WhatsApp and we'll start with a quick discovery call.",
  },

  ar: {
    'brand-name':        'نجار للتطوير',
    'footer-copy':       '© 2026 نجار للتطوير — مملكة البحرين',
    'lang-toggle':       'EN',

    /* index */
    'hero-eyebrow':      'تصميم مواقع — البحرين',
    'hero-headline':     'مواقع تجعل<br>عملك يبدو<br><span class="accent">احترافيًا.</span>',
    'hero-subtitle':     'مواقع مخصصة للشركات البحرينية. تصميم احترافي، متوافق مع الجوال، سريع التسليم. مصمم لتحويل الزوار إلى عملاء — وليس فقط للمظهر.',
    'hero-cta-primary':  '← عرض الباقات',
    'hero-cta-secondary':'← أعمالي',
    'trust-1':           'مخصص لشركات الخدمات',
    'trust-2':           'تسليم خلال ٧–١٤ يوم',
    'trust-3':           'مطور مقيم في البحرين',

    /* packages nav */
    'nav-work-btn':      '← أعمالي',

    /* packages header */
    'pkg-page-eyebrow':  'اختر باقتك',
    'pkg-page-title':    'ثلاث طرق للانطلاق.',
    'pkg-page-subtitle': 'اختر الباقة التي تناسب مرحلة عملك الآن. كل موقع مبرمج خصيصًا، متوافق مع الجوال، ومصمم ليدوم.',

    /* package 01 */
    'pkg-01-num':        'الباقة ٠١',
    'pkg-01-name':       'ستارتر',
    'pkg-01-tagline':    'حضور احترافي ونظيف على الإنترنت — وبسرعة.',
    'pkg-01-f1':         'موقع صفحة واحدة احترافي',
    'pkg-01-f2':         'تصميم متجاوب مع الجوال',
    'pkg-01-f3':         'زر واتساب في كل قسم',
    'pkg-01-f4':         'تكامل نموذج التواصل',
    'pkg-01-f5':         'إعداد SEO أساسي (جاهز لجوجل)',
    'pkg-01-f6':         'دعم إعداد الاستضافة والدومين',
    'pkg-01-f7':         'تسليم حي خلال ٧ أيام',
    'pkg-01-f8':         'جولة تعديل واحدة مشمولة',
    'pkg-price-once':    'دفعة واحدة',

    /* package 02 */
    'pkg-featured-pill': 'الأكثر طلبًا',
    'pkg-02-num':        'الباقة ٠٢',
    'pkg-02-name':       'بيزنس',
    'pkg-02-tagline':    'مصمم لكسب العملاء، لا فقط للوجود على الإنترنت.',
    'pkg-02-f1':         'موقع مخصص متعدد الأقسام',
    'pkg-02-f2':         'هيرو، خدمات، معرض، من نحن، تواصل',
    'pkg-02-f3':         'تصميم مخصص يعكس هويتك',
    'pkg-02-f4':         'تحسين الصور من محتواك',
    'pkg-02-f5':         'أنيميشن وانتقالات سلسة',
    'pkg-02-f6':         'واتساب + نموذج تواصل + خرائط',
    'pkg-02-f7':         'إعداد حساب جوجل بزنس',
    'pkg-02-f8':         'أساس SEO متقدم',
    'pkg-02-f9':         'تسليم حي خلال ١٠ أيام',
    'pkg-02-f10':        'جولتان من التعديلات مشمولتان',

    /* package 03 */
    'pkg-03-num':        'الباقة ٠٣',
    'pkg-03-name':       'بريميوم',
    'pkg-03-tagline':    'للشركات الجاهزة للمنافسة والنمو.',
    'pkg-03-f1':         'كل شيء في باقة بيزنس',
    'pkg-03-f2':         'نظام حجز واستفسار متكامل',
    'pkg-03-f3':         'دعم ثنائي اللغة (إنجليزي + عربي)',
    'pkg-03-f4':         'قسم مدونة أو تحديثات',
    'pkg-03-f5':         'تكامل خلاصة السوشيال ميديا',
    'pkg-03-f6':         'لوحة أداء وتحليلات',
    'pkg-03-f7':         'أول ٣ أشهر من التحديثات مشمولة',
    'pkg-03-f8':         'تعديلات غير محدودة حتى الكمال',

    /* care plan */
    'care-eyebrow':      'حافظ على الحركة',
    'care-title':        'صيانة شهرية.',
    'care-subtitle':     'موقعك كيان حي — يحتاج تحديثات وتصحيحات أمنية وتغييرات. اختياري لكن موصى به.',
    'care-name':         'خطة الرعاية',
    'care-tagline':      'إدارة موقعك بدون تعب حتى تركز على عملك.',
    'care-f1':           'مراقبة الاستضافة والتشغيل',
    'care-f2':           'تحديثات المحتوى',
    'care-f3':           'صور وعروض جديدة',
    'care-f4':           'تصحيحات أمنية',
    'care-f5':           'إصلاح الأخطاء',
    'care-f6':           'دعم ذو أولوية',
    'care-period':       'شهريًا',

    /* process */
    'process-eyebrow':   'كيف يعمل',
    'process-title':     'عملية بسيطة من ٤ خطوات.',
    'step-01-num':       'الخطوة ٠١',
    'step-01-title':     'مكالمة استكشافية',
    'step-01-desc':      '١٥ دقيقة نتحدث فيها عن عملك وأهدافك وما يعني النجاح بالنسبة لك.',
    'step-02-num':       'الخطوة ٠٢',
    'step-02-title':     'التصميم والبناء',
    'step-02-desc':      'أصمم وأبني موقعك مع إبقائك على اطلاع. ستتابع التقدم على طول الطريق.',
    'step-03-num':       'الخطوة ٠٣',
    'step-03-title':     'المراجعة والتحسين',
    'step-03-desc':      'تراجع المعاينة الحية. نحسّن حتى يصبح بالضبط ما تريد.',
    'step-04-num':       'الخطوة ٠٤',
    'step-04-title':     'الإطلاق والنشر',
    'step-04-desc':      'الموقع يعمل على دومينك. أنت الآن متواجد ومستعد لاستقبال العملاء.',

    /* notes */
    'notes-title':       'معلومات مهمة',
    'note-1':            '٥٠٪ دفعة مقدمة للبدء، ٥٠٪ عند الإطلاق — بدون مفاجآت',
    'note-2':            'جميع الباقات تشمل إرشادات إعداد الدومين والاستضافة',
    'note-3':            'الأسعار لا تشمل رسوم الدومين والاستضافة (عادةً ١٥–٢٥ دينار / سنة)',
    'note-4':            'الميزات المخصصة خارج الباقات تُسعّر بشكل منفصل',

    /* cta */
    'cta-eyebrow':       'مستعد للبدء؟',
    'cta-title':         'لنبني شيئًا رائعًا.',
    'cta-sub':           'تواصل معنا على واتساب لحجز مكالمتك الاستكشافية.',
    'btn-whatsapp':      '← تواصل على واتساب',

    /* work nav */
    'nav-packages-btn':  '← عرض الباقات',

    /* work header */
    'work-eyebrow':      'أعمالي',
    'work-title':        'أحدث الأعمال.',
    'work-subtitle':     'مجموعة مختارة من المواقع التي بنيتها لشركات في البحرين.',

    /* projects */
    'p1-client':  'إعلام عقاري · البحرين',
    'p1-title':   'PanoPros',
    'p1-desc':    'تصوير احترافي، مقاطع فيديو، جولات افتراضية، مخططات طابقية، وتأثيث افتراضي لسوق العقارات في البحرين.',
    'p1-link':    '← عرض مباشر',

    'p2-client':  'صحة وجمال · البحرين',
    'p2-title':   'Calma',
    'p2-desc':    'موقع هادئ ومحفز للتحويل لعلامة تجارية فاخرة في مجال الصحة — مصمم لجذب العملاء وحجز مواعيدهم بسهولة.',
    'p2-link':    '← عرض مباشر',

    'p3-client':  'مطعم إيطالي · البحرين',
    'p3-title':   'Gusto Pizzeria Ristorante',
    'p3-desc':    'مطعم إيطالي أصيل بالفرن الحطبي — موقع متكامل مصمم لزيادة الحجوزات.',
    'p3-link':    '← عرض مباشر',

    'p4-client':  'عناية فاخرة بالسيارات · البحرين',
    'p4-title':   'CAS Premium',
    'p4-desc':    'تفصيل سيارات راقٍ، طلاءات سيراميك، وحماية PPF — موقع فاخر مصمم لاستقطاب عشاق السيارات الجادين.',
    'p4-link':    '← عرض مباشر',

    'p5-client':  'تفصيل سيارات · سلماباد، البحرين',
    'p5-title':   'Custom Touch Car Care',
    'p5-desc':    'تفصيل احترافي بمستوى الورشة — طلاءات سيراميك، PPF، تغليف، وتصحيح طلاء مصمم لظروف الخليج.',
    'p5-link':    '← عرض مباشر',

    'p6-client':  'تفصيل سيارات · حد، البحرين',
    'p6-title':   '3D Car Spa',
    'p6-desc':    'تفصيل سيارات متنقل بجودة سبا فاخرة — يصل إليك في أي مكان في البحرين.',
    'p6-link':    '← عرض مباشر',

    'coming-soon-eyebrow': 'المشروع القادم',
    'coming-soon-text':    'قريبًا',
    'p8-client':  'عملك · البحرين',
    'p8-title':   'المزيد من المشاريع قادمة',
    'p8-desc':    'أعمال جديدة قيد الإنجاز. هل تريد رؤية عملك هنا؟',
    'p8-link':    '← تواصل معنا',

    /* work cta */
    'work-cta-eyebrow': 'لنعمل معًا',
    'work-cta-title':   'هل تريد أن تكون التالي؟ لنتحدث.',
    'work-cta-sub':     'تواصل معنا على واتساب وسنبدأ بمكالمة استكشافية سريعة.',
  }
};

function setLang(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  localStorage.setItem('nd-lang', lang);
}

/* Init language from storage or browser preference */
const storedLang = localStorage.getItem('nd-lang');
const preferAr   = !storedLang && (navigator.language || '').startsWith('ar');
setLang(storedLang || (preferAr ? 'ar' : 'en'));

document.getElementById('lang-toggle')?.addEventListener('click', () => {
  const current = document.documentElement.lang || 'en';
  setLang(current === 'en' ? 'ar' : 'en');
});
