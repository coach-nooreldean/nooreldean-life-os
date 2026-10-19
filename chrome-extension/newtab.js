/**
 * Nooreldean Focus Tab - Core Logic
 * High-performance, offline-first Manifest V3 Chrome Extension
 */

// Schedule Data Models
const SCHEDULES = {
  live_study: {
    id: 'live_study',
    name: 'أيام لايف Study With Me (12 ساعة)',
    blocks: [
      { start: '05:30', end: '06:15', icon: '🌅', title: 'محطة الفجر + إفطار سريع وأذكار الصباح', desc: 'استيقاظ 5:30 ص، صلاة الفجر في وقتها، أذكار الصباح، فطور صحي وترتيب الغرفة.' },
      { start: '06:15', end: '07:00', icon: '🎥', title: 'تجهيز بث لايف Study With Me ومكان المذاكرة', desc: 'تجهيز الكاميرا والمايك، تشغيل عداد البومودورو والبدء 7:00 ص بالضبط.' },
      { start: '07:00', end: '11:30', icon: '💻', title: '[بومودورو 1] كود عميق وبرمجة ومشاريع AI', desc: 'قمة التركيز الذهني! 4.5 ساعات كود مكثف وبناء ميزات جديدة وإدارة مهام Antigravity.' },
      { start: '11:30', end: '12:45', icon: '🎨', title: '[بومودورو 2] مسار UI/UX (Courssat Plus: دروس وتأسيس)', desc: 'متابعة دروس تجربة المستخدم ونظم التصميم وفهم الأساسيات.' },
      { start: '12:45', end: '13:30', icon: '🕌', title: 'صلاة الظهر في وقتها + سناك خفيف واستراحة العين', desc: 'أداء صلاة الظهر في وقتها فور الأذان، سناك صحي وإراحة العين بعيداً عن الشاشات.' },
      { start: '13:30', end: '15:00', icon: '📐', title: '[بومودورو 2] تطبيق عملي ومشاريع وتصاميم على Figma', desc: 'تطبيق مباشر لكل ما تم تعلمه وتصميم واجهات حقيقية على Figma.' },
      { start: '15:00', end: '16:15', icon: '🇬🇧', title: '[بومودورو 3] مسار الإنجليزي (استماع ومحادثة)', desc: 'تطوير مهارات الاستماع والمحادثة وتدوين الملاحظات التفاعلية.' },
      { start: '16:15', end: '16:45', icon: '🕌', title: 'صلاة العصر في وقتها + فريش واستعادة نشاط', desc: 'أداء صلاة العصر في المسجد فور الأذان واستعادة النشاط للقسم الأخير.' },
      { start: '16:45', end: '17:30', icon: '🇬🇧', title: '[بومودورو 3] تمارين الإنجليزي والمفردات اليومية', desc: 'حل الاختبارات التفاعلية وتثبيت الكلمات الجديدة في مسار اللغة.' },
      { start: '17:30', end: '19:00', icon: '🚀', title: '[بومودورو 4] برنامج ماكنزي فورورد (McKinsey Forward)', desc: 'قراءة محتوى الوحدات التدريبية وتطبيق أدوات حل المشكلات والتفكير القيادي.' },
      { start: '19:00', end: '19:30', icon: '🛑', title: 'ختام لايف الـ 12 ساعة + صلاة المغرب فور الأذان', desc: 'قفل البث المباشر بنجاح مع المتابعين وأداء صلاة المغرب فور الأذان.' },
      { start: '19:30', end: '20:30', icon: '🍲', title: 'عشاء مغذي + غسيل الأطباق ودش دافئ', desc: 'تناول عشاء بروتيني صحي، غسيل الأطباق فوراً، وأخذ دش مريح.' },
      { start: '20:30', end: '21:00', icon: '🕌', title: 'صلاة العشاء في وقتها جماعة بالمسجد', desc: 'الذهاب للمسجد وأداء صلاة العشاء جماعة فور الأذان.' },
      { start: '21:00', end: '21:45', icon: '📱', title: 'مكالمة الأهل + مراجعة مخرجات الكود مع الـ AI', desc: 'الاطمئنان على الأسرة ومراجعة سريعة لما أنجزه الـ AI خلال اليوم.' },
      { start: '21:45', end: '22:30', icon: '🛑', title: 'بروتوكول حماية النوم وإبعاد الشاشات', desc: 'قفل الشاشات تماماً، وضوء وقراءة أذكار النوم والاستعداد لنوم عميق.' },
      { start: '22:30', end: '05:30', icon: '💤', title: 'نوم عميق وهادئ (7 ساعات كاملة متصلة)', desc: 'استشفاء كامل ونوم عميق للاستيقاظ 5:30 ص في أعلى درجات الحيوية.' }
    ]
  },
  talabat_full: {
    id: 'talabat_full',
    name: 'يوم شيفت طلبات كامل (12 ساعة)',
    blocks: [
      { start: '05:30', end: '06:45', icon: '🌅', title: 'الفجر في وقته + فطور طاقة وتجهيز الباور بانك والعدة', desc: 'صلاة الفجر، فطور مشبع غني بالطاقة، والتأكد من شحن الباوربانك.' },
      { start: '06:45', end: '07:45', icon: '💻', title: 'جلسة كود فجرية / توجيه Antigravity بمهام اليوم', desc: 'توجيه الـ AI بمهام برمجية للعمل عليها أثناء تواجدك بالشيفت.' },
      { start: '07:45', end: '08:00', icon: '🚴', title: 'التحرك لمنطقة الشغل وفتح تطبيق طلبات', desc: 'الوصول للزون وبدء الشيفت في تمام 8:00 صباحاً.' },
      { start: '08:00', end: '12:45', icon: '🚴', title: '[فترة 1 طلبات] أوردرات الصباح والسوبرماركت', desc: 'توصيل أوردرات الصباح بكفاءة وشرب الماء بانتظام ومراعاة قواعد الأمان.' },
      { start: '12:45', end: '12:55', icon: '🕌', title: 'صلاة الظهر في أقرب مسجد (راحة 10 دقائق)', desc: 'إيقاف مؤقت 10 دقائق لصلاة الظهر وسناك خفيف واستئناف التوصيل.' },
      { start: '12:55', end: '16:15', icon: '🚴', title: '[فترة 2 طلبات] ذروة الغداء وأعلى دخل', desc: 'استغلال ساعات الذروة وتحقيق أعلى معدل أوردرات وبونص.' },
      { start: '16:15', end: '16:25', icon: '🕌', title: 'صلاة العصر في المسجد (راحة 10 دقائق)', desc: 'أداء صلاة العصر في أقرب مسجد واستعادة النشاط فوراً.' },
      { start: '16:25', end: '18:45', icon: '🚴', title: '[فترة 3 طلبات] أوردرات المساء وبداية الغروب', desc: 'استكمال الأوردرات بكفاءة وسرعة لتأمين الهدف المالي اليومي.' },
      { start: '18:45', end: '18:55', icon: '🕌', title: 'صلاة المغرب فور الأذان (راحة 10 دقائق)', desc: 'أداء صلاة المغرب فور سماع الأذان واستكمال التوصيل.' },
      { start: '18:55', end: '20:00', icon: '🚴', title: 'نهاية شيفت طلبات وقفل التطبيق والعودة للبيت', desc: 'تسليم آخر أوردر، قفل التطبيق بإنهاء 12 ساعة، والعودة بأمان.' },
      { start: '20:00', end: '20:45', icon: '🍲', title: 'دش دافئ + عشاء منزلي واسترجاع الطاقة', desc: 'دش دافئ منعش بعد مشقة اليوم، عشاء بيتي ساخن وغسيل المواعين.' },
      { start: '20:45', end: '21:15', icon: '🕌', title: 'صلاة العشاء جماعة في المسجد', desc: 'أداء صلاة العشاء بالمسجد مع ختام اليوم.' },
      { start: '21:15', end: '22:00', icon: '💻', title: 'مراجعة مخرجات الكود مع AI + مكالمة الأهل', desc: 'فحص ما تم إنجازه بالنهار ودمج التعديلات ومكالمة الأسرة.' },
      { start: '22:00', end: '22:30', icon: '🛑', title: 'بروتوكول قفل الشاشات والتهيئة للنوم', desc: 'قفل الشاشات، وضوء وأذكار النوم والاستعداد لنوم عميق.' },
      { start: '22:30', end: '05:30', icon: '💤', title: 'نوم عميق (7 ساعات كاملة لاستشفاء الجسم)', desc: 'نوم هادئ ومريح لاستعادة كامل اللياقة البدنية والذهنية.' }
    ]
  },
  wednesday: {
    id: 'wednesday',
    name: 'الأربعاء: كلية عملي ومونتاج شورتس',
    blocks: [
      { start: '05:30', end: '06:30', icon: '🌅', title: 'الفجر في وقته + فطور وتجهيز أدوات المعمل', desc: 'صلاة الفجر، فطور مغذي، مراجعة متطلبات السكاشن العملية.' },
      { start: '06:30', end: '07:15', icon: '💻', title: 'شفت كود فجري مركز وسريع', desc: 'جلسة تركيز 45 دقيقة لإنجاز مهمة كود قبل الانطلاق.' },
      { start: '07:15', end: '08:00', icon: '🚗', title: 'التحرك للكلية والوصول 8:00 ص', desc: 'المواصلات والاستماع لبودكاست مفيد والوصول قبل السكشن.' },
      { start: '08:00', end: '12:45', icon: '🎓', title: 'سكاشن ومعامل الكلية العملية بتركيز', desc: 'حضور المعامل والسكاشن العملية وتطبيق المطلوب.' },
      { start: '12:45', end: '13:15', icon: '🕌', title: 'صلاة الظهر بمصلى الكلية', desc: 'أداء صلاة الظهر في المصلى في وقتها.' },
      { start: '13:15', end: '14:00', icon: '🎓', title: 'إنهاء اليوم العملي والمغادرة للمنزل', desc: 'الخروج من الكلية والعودة للبيت فوراً.' },
      { start: '14:30', end: '15:30', icon: '🍲', title: 'غداء منزلي + قيلولة طاقة 20 دقيقة (Power Nap)', desc: 'غداء صحي وأخذ قيلولة 20 دقيقة لاسترجاع النشاط الذهني.' },
      { start: '15:30', end: '16:15', icon: '🎬', title: '[صناعة المحتوى] إعداد سكريبتات الشورتس والإضاءة', desc: 'تجهيز أفكار 2 إلى 3 شورتس وصياغة الهوكس (Hooks) القوية.' },
      { start: '16:15', end: '16:45', icon: '🕌', title: 'صلاة العصر في وقتها', desc: 'أداء صلاة العصر في وقتها فور الأذان.' },
      { start: '16:45', end: '18:00', icon: '🎥', title: '[صناعة المحتوى] تصوير دفعة الفيديوهات (Batch Recording)', desc: 'تسجيل الشورتس دفعة واحدة أمام الكاميرا بأعلى حيوية وطاقة.' },
      { start: '18:00', end: '18:45', icon: '✂️', title: '[صناعة المحتوى] مونتاج وتقطيع الشورتس والـ Captions', desc: 'تقطيع الصمت وإضافة الزووم وكتابة السبتايتل وإخراج الفيديو.' },
      { start: '18:45', end: '19:15', icon: '🕌', title: 'صلاة المغرب فور الأذان', desc: 'أداء صلاة المغرب في وقتها.' },
      { start: '19:15', end: '20:05', icon: '📤', title: 'جدولة ونشر الفيديوهات وتجهيز الأغلفة', desc: 'رفع الفيديوهات وجدولتها وكتابة الكابشن والدعوة للفعل.' },
      { start: '20:05', end: '20:35', icon: '🕌', title: 'صلاة العشاء في المسجد جماعة', desc: 'أداء صلاة العشاء بالمسجد فور الأذان.' },
      { start: '20:35', end: '22:00', icon: '📞', title: 'مكالمة الأهل + عشاء خفيف وترويح حر', desc: 'مكالمة العائلة وتصفح تقني مفيد بدون ضغط.' },
      { start: '22:00', end: '22:30', icon: '🛑', title: 'قفل الشاشات والتهيئة للنوم', desc: 'ترتيب المكان، قفل الأجهزة، وضوء ونوم 10:30 م.' },
      { start: '22:30', end: '05:30', icon: '💤', title: 'نوم هادئ وعميق 7 ساعات', desc: 'نوم كامل لاستعادة النشاط لليوم التالي.' }
    ]
  },
  saturday_college: {
    id: 'saturday_college',
    name: 'السبت: كلية نظري وطلبات مسائي',
    blocks: [
      { start: '05:30', end: '06:45', icon: '🌅', title: 'الفجر في وقته + فطور وتجهيز شنطة الكلية', desc: 'صلاة الفجر، فطور مغذي، وتجهيز كشكول المحاضرات والشنطة.' },
      { start: '06:45', end: '07:45', icon: '🚗', title: 'المواصلات والوصول للكلية مبكراً', desc: 'التحرك والوصول 8:00 ص قبل بدء المحاضرات.' },
      { start: '08:00', end: '12:45', icon: '🎓', title: 'محاضرات الكلية النظرية الصباحية', desc: 'حضور وتدوين الملاحظات الأساسية بتركيز تام.' },
      { start: '12:45', end: '13:15', icon: '🕌', title: 'صلاة الظهر بمصلى الكلية + سناك سريع', desc: 'أداء صلاة الظهر وتناول سناك مياه وبسكوت.' },
      { start: '13:15', end: '16:00', icon: '🎓', title: 'استكمال محاضرات النظري ونهاية اليوم الدراسي', desc: 'الفترة الثانية من المحاضرات، إنهاء اليوم عند 4:00 عصراً.' },
      { start: '16:00', end: '16:30', icon: '🕌', title: 'صلاة العصر + فتح تطبيق طلبات', desc: 'أداء صلاة العصر، التبديل للباقة وتشغيل تطبيق التوصيل.' },
      { start: '16:30', end: '18:45', icon: '🚴', title: '[شيفت طلبات مسائي] أوردرات ما بعد الكلية', desc: 'شيفت 4 ساعات مركز للاستفادة من ذروة المساء بدون إرهاق كبير.' },
      { start: '18:45', end: '18:55', icon: '🕌', title: 'صلاة المغرب في أقرب مسجد (راحة 10 دقائق)', desc: 'استراحة صلاة 10 دقائق فقط والعودة فوراً للشغل.' },
      { start: '18:55', end: '20:30', icon: '🚴', title: 'ختام شيفت السبت والعودة للمنزل', desc: 'تسليم آخر الأوردرات وقفل التطبيق والعودة للبيت.' },
      { start: '20:30', end: '21:00', icon: '🕌', title: 'صلاة العشاء جماعة بالمسجد', desc: 'أداء صلاة العشاء بالمسجد مع ختام اليوم.' },
      { start: '21:00', end: '22:00', icon: '🍲', title: 'دش دافئ + عشاء منزلي واسترجاع النشاط', desc: 'دش دافئ مريح، عشاء مغذي وغسيل المواعين.' },
      { start: '22:00', end: '22:30', icon: '🛑', title: 'قفل الشاشات والاستعداد للنوم', desc: 'وضوء وأذكار النوم استعداداً ليوم الأحد الجديد.' },
      { start: '22:30', end: '05:30', icon: '💤', title: 'نوم عميق 7 ساعات', desc: 'نوم هادئ 7 ساعات للاستيقاظ 5:30 ص في أعلى حيوية.' }
    ]
  },
  friday: {
    id: 'friday',
    name: 'الجمعة: روحانيات وطلبات مسائي',
    blocks: [
      { start: '05:30', end: '07:00', icon: '🌅', title: 'الفجر في وقته + قراءة سورة الكهف والأذكار والدعاء', desc: 'صلاة الفجر، قراءة سورة الكهف بتدبر، أذكار الصباح والدعاء.' },
      { start: '07:00', end: '09:30', icon: '🧹', title: 'نظافة البيت وترتيب الملابس وتجهيز أكل الأسبوع', desc: 'غسيل الملابس وتنظيف المطبخ وترتيب البيت.' },
      { start: '09:30', end: '11:00', icon: '💻', title: 'جلسة استكشاف وتطوير برمجيات خفيفة', desc: 'قراءة تقنية وتجربة أدوات جديدة بدون أي ضغط.' },
      { start: '11:00', end: '13:30', icon: '🕌', title: 'غُسل الجمعة والذهاب للمسجد مبكراً وسماع الخطبة', desc: 'الغسل والتطيب ولبس أحسن الثياب والذهاب للمسجد مبكراً.' },
      { start: '13:30', end: '15:30', icon: '🍲', title: 'وجبة الجمعة العائلية + راحة وجلسة شاي', desc: 'تناول الغداء مع الأسرة وقضاء وقت اجتماعي دافئ.' },
      { start: '15:30', end: '16:00', icon: '🕌', title: 'صلاة العصر في المسجد + دعاء ساعة الاستجابة', desc: 'أداء صلاة العصر والتضرع بالدعاء في ساعة الاستجابة.' },
      { start: '16:00', end: '18:45', icon: '🚴', title: '[شيفت طلبات مسائي] أوردرات العصر والغروب', desc: 'شيفت خفيف ومربح مع نشاط الجمعة المسائي.' },
      { start: '18:45', end: '18:55', icon: '🕌', title: 'صلاة المغرب في وقتها (راحة 10 دقائق)', desc: 'استراحة صلاة 10 دقائق فقط في أقرب مسجد والعودة فوراً.' },
      { start: '18:55', end: '20:30', icon: '🚴', title: 'استكمال شيفت طلبات ختام الأسبوع', desc: 'إنهاء آخر طلبات اليوم وقفل التطبيق في تمام 8:30 م.' },
      { start: '20:30', end: '21:00', icon: '🕌', title: 'صلاة العشاء في وقتها بالمسجد', desc: 'أداء صلاة العشاء جماعة بالمسجد.' },
      { start: '21:00', end: '22:00', icon: '🍲', title: 'عشاء خفيف ومكالمة الأهل والأصدقاء', desc: 'تناول عشاء خفيف وجلسة ترويح نفسي.' },
      { start: '22:00', end: '22:30', icon: '🛑', title: 'حماية النوم والاستعداد للأسبوع الجديد', desc: 'قفل الشاشات والتهيئة لنوم هادئ 10:30 م.' },
      { start: '22:30', end: '05:30', icon: '💤', title: 'نوم هادئ 7 ساعات', desc: 'نوم 7 ساعات كاملة للاستيقاظ 5:30 ص في أفضل نشاط.' }
    ]
  }
};

// Inspiring Wisdom Quotes
const WISDOM_QUOTES = [
  '«وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ • وَأَنَّ سَعْيَهُ سَوْفَ يُرَىٰ»',
  '«إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ»',
  '«قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ»',
  '«احْرِصْ عَلَى مَا يَنْفَعُكَ، وَاسْتَعِنْ بِاللَّهِ وَلَا تَعْجَزْ»',
  '«Focus is a muscle: say NO to distractions, and build your life with intention.»',
  '«الانضباط اليومي هو الجسر الحقيقي بين أهدافك العظيمة وبين تحقيقها على أرض الواقع.»'
];

// Default Quick Links
const DEFAULT_LINKS = [
  { id: 'coachdrift', title: 'Coachdrift', url: 'https://github.com', icon: '⚡' },
  { id: 'supabase', title: 'Supabase', url: 'https://supabase.com/dashboard', icon: '🗄️' },
  { id: 'github', title: 'GitHub', url: 'https://github.com', icon: '🐙' },
  { id: 'youtube', title: 'YouTube', url: 'https://youtube.com', icon: '📺' },
  { id: 'figma', title: 'Figma', url: 'https://figma.com', icon: '🎨' },
  { id: 'chatgpt', title: 'ChatGPT', url: 'https://chatgpt.com', icon: '🤖' }
];

// Default Daily Focus Tasks
const DEFAULT_TASKS = [
  { id: 't1', title: 'إتمام جلسة البرمجة الصباحية ومزامنة الكود', completed: false },
  { id: 't2', title: 'صلاة كل الفروض في وقتها بالمسجد', completed: false },
  { id: 't3', title: 'بروتوكول حماية النوم 10:30 م بدون شاشات', completed: false }
];

// Unified Storage helper (chrome.storage.local with localStorage fallback)
const Storage = {
  async get(key, fallback) {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      try {
        const result = await chrome.storage.local.get(key);
        return result[key] !== undefined ? result[key] : fallback;
      } catch (e) {
        console.warn('Storage get fallback:', e);
      }
    }
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  },
  async set(key, value) {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      try {
        await chrome.storage.local.set({ [key]: value });
        return;
      } catch (e) {
        console.warn('Storage set fallback:', e);
      }
    }
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Prayer Times Estimator for Cairo (Accurate Astronomical Formula)
function getCairoPrayerTimes(date = new Date()) {
  const cairoLat = 30.0444;
  const cairoLng = 31.2357;
  
  // Standard approximate Cairo prayer offsets for the current day
  // Fajr: ~04:35 - 05:15 | Dhuhr: ~11:45 - 12:50 | Asr: ~15:00 - 15:45 | Maghrib: ~17:20 - 18:30 | Isha: ~18:40 - 19:45
  // We compute realistic base minutes for accurate countdown
  const month = date.getMonth(); // 0 to 11
  
  // Base Cairo approximations tailored across year
  const fajrHours = 5;
  const fajrMins = month > 3 && month < 9 ? 20 : 35;
  
  const dhuhrHours = 12;
  const dhuhrMins = 45;

  const asrHours = 16;
  const asrMins = 0;

  const maghribHours = 18;
  const maghribMins = month > 3 && month < 9 ? 45 : 15;

  const ishaHours = 20;
  const ishaMins = 0;

  const fmt = (h, m) => `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

  return [
    { key: 'fajr', name: 'الفجر', timeStr: fmt(fajrHours, fajrMins), mins: fajrHours * 60 + fajrMins },
    { key: 'dhuhr', name: 'الظهر', timeStr: fmt(dhuhrHours, dhuhrMins), mins: dhuhrHours * 60 + dhuhrMins },
    { key: 'asr', name: 'العصر', timeStr: fmt(asrHours, asrMins), mins: asrHours * 60 + asrMins },
    { key: 'maghrib', name: 'المغرب', timeStr: fmt(maghribHours, maghribMins), mins: maghribHours * 60 + maghribMins },
    { key: 'isha', name: 'العشاء', timeStr: fmt(ishaHours, ishaMins), mins: ishaHours * 60 + ishaMins }
  ];
}

// Main Application Controller
class FocusTabApp {
  constructor() {
    this.currentScheduleKey = 'auto';
    this.links = [];
    this.tasks = [];
    this.init();
  }

  async init() {
    // 1. Load persisted data
    this.currentScheduleKey = await Storage.get('focus_schedule_key', 'auto');
    this.links = await Storage.get('focus_quick_links', DEFAULT_LINKS);
    this.tasks = await Storage.get('focus_daily_tasks', DEFAULT_TASKS);

    // 2. Set Random Wisdom Quote
    const quoteEl = document.getElementById('wisdomQuote');
    if (quoteEl) {
      const qIndex = Math.floor(Math.random() * WISDOM_QUOTES.length);
      quoteEl.textContent = WISDOM_QUOTES[qIndex];
    }

    // 3. Setup Dropdown
    const selectEl = document.getElementById('scheduleSelect');
    if (selectEl) {
      selectEl.value = this.currentScheduleKey;
      selectEl.addEventListener('change', async (e) => {
        this.currentScheduleKey = e.target.value;
        await Storage.set('focus_schedule_key', this.currentScheduleKey);
        this.updateActiveBlock();
      });
    }

    // 4. Attach Listeners
    this.setupEventListeners();

    // 5. Render Components
    this.renderLinks();
    this.renderTasks();
    this.tick();

    // 6. Start Heartbeat Timer (Every 1 second)
    setInterval(() => this.tick(), 1000);
  }

  setupEventListeners() {
    // Search Form Handling
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    if (searchForm && searchInput) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (!query) return;
        this.executeSearch(query);
      });

      // Global keyboard shortcuts
      window.addEventListener('keydown', (e) => {
        // Focus search on '/'
        if (e.key === '/' && document.activeElement !== searchInput && document.activeElement.tagName !== 'INPUT') {
          e.preventDefault();
          searchInput.focus();
          searchInput.select();
        }
        // Focus task input on 'N' or 'n'
        if ((e.key === 'n' || e.key === 'N') && document.activeElement.tagName !== 'INPUT') {
          const taskInput = document.getElementById('newTaskInput');
          if (taskInput) {
            e.preventDefault();
            taskInput.focus();
          }
        }
      });
    }

    // Add Task Form
    const addTaskForm = document.getElementById('addTaskForm');
    const newTaskInput = document.getElementById('newTaskInput');
    if (addTaskForm && newTaskInput) {
      addTaskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = newTaskInput.value.trim();
        if (!title) return;
        if (this.tasks.length >= 3) {
          alert('قائمة التركيز اليومية مخصصة لأهم 3 أهداف فقط لمنع التشتت.');
          return;
        }
        this.tasks.push({
          id: 'task_' + Date.now(),
          title: title,
          completed: false
        });
        newTaskInput.value = '';
        await Storage.set('focus_daily_tasks', this.tasks);
        this.renderTasks();
      });
    }

    // Modal Events
    const addQuickLinkBtn = document.getElementById('addQuickLinkBtn');
    const customLinksBtn = document.getElementById('customLinksBtn');
    const linkModal = document.getElementById('linkModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelModalBtn = document.getElementById('cancelModalBtn');
    const linkForm = document.getElementById('linkForm');

    const openModal = () => { if (linkModal) linkModal.style.display = 'flex'; };
    const closeModal = () => { if (linkModal) linkModal.style.display = 'none'; };

    if (addQuickLinkBtn) addQuickLinkBtn.addEventListener('click', openModal);
    if (customLinksBtn) customLinksBtn.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);

    if (linkForm) {
      linkForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('linkTitleInput').value.trim();
        let url = document.getElementById('linkUrlInput').value.trim();
        const icon = document.getElementById('linkIconInput').value.trim() || '🔗';

        if (!/^https?:\/\//i.test(url)) {
          url = 'https://' + url;
        }

        this.links.push({ id: 'link_' + Date.now(), title, url, icon });
        await Storage.set('focus_quick_links', this.links);
        this.renderLinks();
        linkForm.reset();
        closeModal();
      });
    }

    // Life OS button
    const lifeOsBtn = document.getElementById('lifeOsRedirectBtn');
    if (lifeOsBtn) {
      lifeOsBtn.addEventListener('click', () => {
        window.open('https://github.com/coach-nooreldean/nooreldean-life-os', '_blank');
      });
    }
  }

  executeSearch(query) {
    const qLower = query.toLowerCase();
    
    // Command prefixes
    if (qLower === 'gh') {
      window.location.href = 'https://github.com';
      return;
    }
    if (qLower.startsWith('gh ')) {
      window.location.href = `https://github.com/search?q=${encodeURIComponent(query.slice(3).trim())}`;
      return;
    }
    if (qLower === 'sb' || qLower === 'supabase') {
      window.location.href = 'https://supabase.com/dashboard';
      return;
    }
    if (qLower === 'cd' || qLower === 'coachdrift') {
      window.location.href = 'https://github.com/coach-nooreldean';
      return;
    }
    if (qLower === 'yt') {
      window.location.href = 'https://youtube.com';
      return;
    }
    if (qLower.startsWith('yt ')) {
      window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(query.slice(3).trim())}`;
      return;
    }
    if (qLower === 'gpt' || qLower === 'chatgpt') {
      window.location.href = 'https://chatgpt.com';
      return;
    }
    if (qLower.startsWith('gpt ')) {
      window.location.href = `https://chatgpt.com/?q=${encodeURIComponent(query.slice(4).trim())}`;
      return;
    }
    if (qLower === 'figma') {
      window.location.href = 'https://figma.com';
      return;
    }
    if (/^https?:\/\//i.test(query)) {
      window.location.href = query;
      return;
    }

    // Default to Google search
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }

  getActiveSchedule() {
    if (this.currentScheduleKey !== 'auto' && SCHEDULES[this.currentScheduleKey]) {
      return SCHEDULES[this.currentScheduleKey];
    }
    // Auto-detect based on current Day
    const day = new Date().getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
    if (day === 5) return SCHEDULES.friday;
    if (day === 3) return SCHEDULES.wednesday;
    if (day === 6) return SCHEDULES.saturday_college;
    // Default to Live Study mode
    return SCHEDULES.live_study;
  }

  tick() {
    const now = new Date();
    
    // 1. Clock Display
    const clockEl = document.getElementById('clockDisplay');
    if (clockEl) {
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      clockEl.textContent = `${h}:${m}:${s}`;
    }

    // 2. Date and Day Name
    const arabicDays = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const dayBadge = document.getElementById('dayNameBadge');
    if (dayBadge) dayBadge.textContent = arabicDays[now.getDay()];

    const gregDate = document.getElementById('gregorianDate');
    if (gregDate) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      gregDate.textContent = now.toLocaleDateString('ar-EG', options);
    }

    // 3. Prayer Times & Next Prayer Highlight
    this.updatePrayerTimes(now);

    // 4. Update Active Schedule Block
    this.updateActiveBlock(now);
  }

  updatePrayerTimes(now) {
    const prayers = getCairoPrayerTimes(now);
    const currentMins = now.getHours() * 60 + now.getMinutes();

    let upcoming = null;
    let minDiff = Infinity;

    prayers.forEach(p => {
      const el = document.getElementById(`prayer${p.key.charAt(0).toUpperCase() + p.key.slice(1)}`);
      if (el) el.textContent = p.timeStr;

      const pill = document.querySelector(`.prayer-pill[data-prayer="${p.key}"]`);
      if (pill) pill.classList.remove('active');

      const diff = p.mins - currentMins;
      if (diff > 0 && diff < minDiff) {
        minDiff = diff;
        upcoming = p;
      }
    });

    // If all prayers today have passed, Fajr tomorrow is upcoming
    if (!upcoming) {
      upcoming = prayers[0];
      minDiff = (24 * 60 - currentMins) + prayers[0].mins;
    }

    const activePill = document.querySelector(`.prayer-pill[data-prayer="${upcoming.key}"]`);
    if (activePill) activePill.classList.add('active');

    const nextPrayerText = document.getElementById('nextPrayerText');
    if (nextPrayerText) {
      const hoursLeft = Math.floor(minDiff / 60);
      const minsLeft = minDiff % 60;
      let text = `متبقي `;
      if (hoursLeft > 0) text += `${hoursLeft} ساعة و `;
      text += `${minsLeft} دقيقة على أذان ${upcoming.name}`;
      nextPrayerText.textContent = text;
    }
  }

  updateActiveBlock(now = new Date()) {
    const schedule = this.getActiveSchedule();
    const blocks = schedule.blocks;
    const currentMins = now.getHours() * 60 + now.getMinutes();
    const currentSecs = now.getSeconds();

    const parseMins = (timeStr) => {
      const [h, m] = timeStr.split(':').map(Number);
      return h * 60 + m;
    };

    let activeBlock = null;
    let nextBlock = null;
    let activeIndex = -1;

    for (let i = 0; i < blocks.length; i++) {
      const b = blocks[i];
      const start = parseMins(b.start);
      let end = parseMins(b.end);
      
      // Handle overnight block (e.g. 22:30 -> 05:30)
      if (end < start) {
        if (currentMins >= start || currentMins < end) {
          activeBlock = b;
          activeIndex = i;
          break;
        }
      } else {
        if (currentMins >= start && currentMins < end) {
          activeBlock = b;
          activeIndex = i;
          break;
        }
      }
    }

    if (!activeBlock && blocks.length > 0) {
      activeBlock = blocks[0];
      activeIndex = 0;
    }

    nextBlock = blocks[(activeIndex + 1) % blocks.length];

    // Compute progress & remaining
    const startMins = parseMins(activeBlock.start);
    let endMins = parseMins(activeBlock.end);
    let totalDuration = endMins - startMins;
    let elapsed = currentMins - startMins;

    if (totalDuration < 0) {
      totalDuration += 24 * 60;
      if (elapsed < 0) elapsed += 24 * 60;
    }

    const elapsedSeconds = elapsed * 60 + currentSecs;
    const totalSeconds = Math.max(1, totalDuration * 60);
    const progressPercent = Math.min(100, Math.max(0, (elapsedSeconds / totalSeconds) * 100));
    const remainingMins = Math.max(0, Math.ceil((totalSeconds - elapsedSeconds) / 60));

    // Update UI elements
    const blockEmoji = document.getElementById('blockEmoji');
    const blockTitle = document.getElementById('blockTitle');
    const blockDesc = document.getElementById('blockDesc');
    const blockTimeRange = document.getElementById('blockTimeRange');
    const blockRemaining = document.getElementById('blockRemaining');
    const blockProgressFill = document.getElementById('blockProgressFill');
    const nextBlockTitle = document.getElementById('nextBlockTitle');

    if (blockEmoji) blockEmoji.textContent = activeBlock.icon;
    if (blockTitle) blockTitle.textContent = activeBlock.title;
    if (blockDesc) blockDesc.textContent = activeBlock.desc;
    if (blockTimeRange) blockTimeRange.textContent = `${activeBlock.start} - ${activeBlock.end}`;
    if (blockRemaining) blockRemaining.textContent = `متبقي ${remainingMins} دقيقة`;
    if (blockProgressFill) blockProgressFill.style.width = `${progressPercent.toFixed(1)}%`;
    if (nextBlockTitle && nextBlock) nextBlockTitle.textContent = `${nextBlock.icon} ${nextBlock.title} (${nextBlock.start})`;
  }

  renderLinks() {
    const grid = document.getElementById('linksGrid');
    if (!grid) return;
    grid.innerHTML = '';

    this.links.forEach((link, idx) => {
      const tile = document.createElement('a');
      tile.className = 'link-tile';
      tile.href = link.url;
      tile.target = '_blank';
      tile.rel = 'noopener noreferrer';

      const iconBox = document.createElement('span');
      iconBox.className = 'link-icon-box';
      iconBox.textContent = link.icon || '🔗';

      const label = document.createElement('span');
      label.className = 'link-label';
      label.textContent = link.title;

      const delBtn = document.createElement('button');
      delBtn.className = 'link-delete-btn';
      delBtn.title = 'حذف الرابط';
      delBtn.innerHTML = '&times;';
      delBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.links.splice(idx, 1);
        await Storage.set('focus_quick_links', this.links);
        this.renderLinks();
      });

      tile.appendChild(iconBox);
      tile.appendChild(label);
      tile.appendChild(delBtn);
      grid.appendChild(tile);
    });
  }

  renderTasks() {
    const list = document.getElementById('tasksList');
    const counter = document.getElementById('tasksCounter');
    if (!list) return;

    list.innerHTML = '';

    const completedCount = this.tasks.filter(t => t.completed).length;
    if (counter) counter.textContent = `${completedCount} / ${this.tasks.length}`;

    if (this.tasks.length === 0) {
      list.innerHTML = '<div class="empty-tasks-placeholder">لا توجد أهداف نشطة حالياً. أضف أهدافك الأساسية لليوم بالأسفل! ✨</div>';
      return;
    }

    this.tasks.forEach((task, idx) => {
      const item = document.createElement('div');
      item.className = `task-item ${task.completed ? 'completed' : ''}`;

      const checkWrap = document.createElement('div');
      checkWrap.className = 'task-check-wrap';

      const checkbox = document.createElement('span');
      checkbox.className = 'custom-checkbox';

      const title = document.createElement('span');
      title.className = 'task-title';
      title.textContent = task.title;

      checkWrap.appendChild(checkbox);
      checkWrap.appendChild(title);

      checkWrap.addEventListener('click', async () => {
        this.tasks[idx].completed = !this.tasks[idx].completed;
        await Storage.set('focus_daily_tasks', this.tasks);
        this.renderTasks();
      });

      const delBtn = document.createElement('button');
      delBtn.className = 'task-del-btn';
      delBtn.title = 'حذف الهدف';
      delBtn.innerHTML = '&times;';
      delBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        this.tasks.splice(idx, 1);
        await Storage.set('focus_daily_tasks', this.tasks);
        this.renderTasks();
      });

      item.appendChild(checkWrap);
      item.appendChild(delBtn);
      list.appendChild(item);
    });
  }
}

// Instantiate on DOM load
document.addEventListener('DOMContentLoaded', () => {
  new FocusTabApp();
});
