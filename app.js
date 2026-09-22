/**
 * Nooreldean Life OS - Core Interactive Logic
 * Fully responsive, offline-ready, dynamic schedule resolution
 */

// Schedule Data Architecture (Beast Mode: 11.5+ hours work, courses, living alone workflow)
const SCHEDULES = {
  home: {
    id: 'home',
    name: 'أيام البيت والشغل المكثف (Beast Mode)',
    badge: '11.5 ساعة إنتاجية (كود + كورسات + كلية)',
    category: 'home',
    blocks: [
      { start: '05:00', end: '06:00', icon: '🌅', title: 'محطة الفجر + فطور خفيف وترويق السرير', desc: 'استيقاظ 5:00 ص، صلاة الفجر في وقتها، أذكار الصباح، فطور سريع مغذي مع مشروبك وترويق السرير.', type: 'prayer', tag: '#فجر_وبداية' },
      { start: '06:00', end: '12:00', icon: '💻', title: '[شفت 1] شغل عميق Coachdrift (6 ساعات كود صافي)', desc: 'قمة الطاقة الذهنية! 6 ساعات متصلة لإنهاء ميزات كوتش دريفت للـ Launch 10/10. ممنوع أي مشتتات.', type: 'deepwork', tag: '#Coachdrift_P0' },
      { start: '12:00', end: '13:30', icon: '🍲', title: 'صلاة الظهر + الغداء وغسيل المواعين فوراً', desc: 'صلاة الظهر، تجهيز/تسخين وجبة غداء صحية، وتطبيق قاعدة الكفاءة: غسيل المواعين وتنظيف المطبخ فوراً.', type: 'living', tag: '#أكل_ومواعين' },
      { start: '13:30', end: '14:00', icon: '😴', title: 'قيلولة الطاقة الحيوية (Power Nap 25 دقيقة)', desc: 'إعادة شحن بطارية الدماغ لتجديد التركيز للشفت الثاني (سنة نبوية مثبتة علمياً).', type: 'break', tag: '#استشفاء' },
      { start: '14:00', end: '16:15', icon: '🎓', title: '[شفت 2] الكلية أونلاين والمذاكرة (ساعتين وربع)', desc: 'متابعة محاضرات الكلية الأونلاين بتركيز، حل التكليفات والشيتات وإنهاء متطلبات الكلية أول بأول.', type: 'college', tag: '#كلية_ومذاكرة' },
      { start: '16:15', end: '17:00', icon: '🏋️‍♂️', title: 'صلاة العصر + متابعة الكوتشينج المركزة', desc: 'صلاة العصر + نصف ساعة لمتدربي الكوتشينج (الرد على الشات وتعديل البرامج) ثم قفل الواتساب تماماً.', type: 'coaching', tag: '#كوتشينج' },
      { start: '17:00', end: '20:15', icon: '📚', title: '[شفت 3] الكورسات والتعلم التقني (3 ساعات وربع)', desc: 'دراسة وتطبيق عملي على الكورسات، بناء مشاريع جديدة وتطوير مهاراتك التقنية بدون مقاطعة.', type: 'courses', tag: '#كورسات_وتعلم' },
      { start: '20:15', end: '21:00', icon: '🕌', title: 'صلاتي المغرب والعشاء + عشاء خفيف', desc: 'أداء صلاتي المغرب والعشاء، تناول وجبة عشاء سريعة خفيفة وغسيل الأطباق فوراً.', type: 'prayer', tag: '#صلاة_وعشاء' },
      { start: '21:00', end: '22:00', icon: '🧹', title: 'ترويق البيت اليومي (20 د) + مراجعة اليوم وتخطيط الغد', desc: 'تنظيف وترتيب سريع للشقة والمكتب (Clean space = Clean mind) وتفريغ الدماغ في ورقة للغد.', type: 'living', tag: '#ترويق_وتنظيم' },
      { start: '22:00', end: '23:00', icon: '🛑', title: 'بروتوكول قفل الشاشات والـ Wind-down', desc: 'Hard Stop للابتوب، وضع الموبايل بعيداً عن السرير، وضوء وقراءة الأذكار استعداداً للنوم.', type: 'shutdown', tag: '#حماية_النوم' },
      { start: '23:00', end: '05:00', icon: '💤', title: 'نوم هادئ وعميق (6 ساعات كاملة)', desc: 'نوم في ظلام تام للاستيقاظ 5:00 ص بكامل نشاطك الذهني والبدني لشفت جديد.', type: 'sleep', tag: '#نوم_عميق' }
    ]
  },
  saturday: {
    id: 'saturday',
    name: 'يوم السبت (يوم الكلية الطويل)',
    badge: 'كلية 8-6 + كود فجري + كورس مسائي',
    category: 'saturday',
    blocks: [
      { start: '05:00', end: '06:00', icon: '🌅', title: 'محطة الفجر + تحضير سناك الكلية والشنطة', desc: 'صلاة الفجر، أذكار الصباح، تحضير وجبة خفيفة ومياه لليوم الطويل.', type: 'prayer', tag: '#فجر' },
      { start: '06:00', end: '07:15', icon: '💻', title: 'شفت كود فجري مركز لكوتش دريفت (ساعة وربع)', desc: 'تثبيت تقدم يومي في كوتش دريفت وحل تاسك برمجية قبل مغادرة المنزل.', type: 'deepwork', tag: '#Coachdrift_P0' },
      { start: '07:15', end: '08:00', icon: '🚗', title: 'التحرك للكلية والوصول 8:00 ص', desc: 'الطريق للكلية، استماع لبودكاست أو مراجعة سريعة.', type: 'college', tag: '#مواصلات' },
      { start: '08:00', end: '12:45', icon: '🎓', title: 'محاضرات وسكاشن الكلية الصباحية', desc: 'حضور وتركيز مع الدكاترة والمعيدين.', type: 'college', tag: '#محاضرات' },
      { start: '12:45', end: '13:15', icon: '🕌', title: 'صلاة الظهر في المصلى + سناك خفيف', desc: 'أداء صلاة الظهر في مصلى الكلية وتناول سناك.', type: 'prayer', tag: '#صلاة' },
      { start: '13:15', end: '16:15', icon: '🎓', title: 'استكمال محاضرات وسكاشن الكلية', desc: 'الفترة الثانية من المحاضرات والسكاشن العملية.', type: 'college', tag: '#محاضرات' },
      { start: '16:15', end: '16:45', icon: '🕌', title: 'صلاة العصر في الكلية', desc: 'أداء صلاة العصر.', type: 'prayer', tag: '#صلاة' },
      { start: '16:45', end: '18:00', icon: '🎓', title: 'آخر سكشن/محاضرة ونهاية يوم الكلية', desc: 'إنهاء اليوم والمغادرة في تمام 6:00 مساءً.', type: 'college', tag: '#نهاية_اليوم' },
      { start: '18:00', end: '19:00', icon: '🚗', title: 'العودة للمنزل وصلاة المغرب', desc: 'الوصول للبيت وصلاة المغرب فوراً.', type: 'prayer', tag: '#عودة' },
      { start: '19:00', end: '20:00', icon: '🍲', title: 'دش دافئ + عشاء وغسيل المواعين', desc: 'أخذ دش دافئ، تسخين وجبة عشاء مغذية وغسيل الأطباق فوراً.', type: 'living', tag: '#أكل_ومواعين' },
      { start: '20:00', end: '21:00', icon: '🕌', title: 'صلاة العشاء + متابعة سريعة للكوتشينج', desc: 'صلاة العشاء + 25 دقيقة تفقد متدربين وتحديثات سريعة.', type: 'coaching', tag: '#كوتشينج' },
      { start: '21:00', end: '22:15', icon: '📚', title: 'شفت كورس أو مذاكرة خفيفة (ساعة وربع)', desc: 'متابعة كورس تقني أو مراجعة بدون إجهاد كبير.', type: 'courses', tag: '#كورسات' },
      { start: '22:15', end: '22:45', icon: '🧹', title: 'ترويق سريع للشقة وقفل الشاشات', desc: 'ترتيب المكان وإبعاد الموبايل واللابتوب.', type: 'shutdown', tag: '#حماية_النوم' },
      { start: '22:45', end: '05:00', icon: '💤', title: 'نوم عميق ومبكر', desc: 'تعويض مجهود يوم الكلية الطويل استعداداً لأيام الشغل المكثف.', type: 'sleep', tag: '#نوم' }
    ]
  },
  wednesday: {
    id: 'wednesday',
    name: 'يوم الأربعاء (نصف يوم كلية + شفتات عمل)',
    badge: 'كلية 8-2 + 3.5 س كود + ساعة كورس',
    category: 'wednesday',
    blocks: [
      { start: '05:00', end: '06:30', icon: '🌅', title: 'محطة الفجر + فطور وتجهيز النزول', desc: 'صلاة الفجر، فطور مغذي سريع وترويق السرير.', type: 'prayer', tag: '#فجر' },
      { start: '06:30', end: '07:30', icon: '💻', title: 'جلسة كود سريعة لكوتش دريفت (ساعة كاملة)', desc: 'إنجاز تسليمة كود قبل النزول للكلية.', type: 'deepwork', tag: '#Coachdrift_P0' },
      { start: '07:30', end: '08:00', icon: '🚗', title: 'التحرك للكلية والوصول 8:00 ص', desc: 'الوصول مبكراً وحضور المحاضرات.', type: 'college', tag: '#مواصلات' },
      { start: '08:00', end: '12:45', icon: '🎓', title: 'محاضرات وسكاشن الكلية', desc: 'التركيز مع المحاضرات الأساسية.', type: 'college', tag: '#محاضرات' },
      { start: '12:45', end: '13:15', icon: '🕌', title: 'صلاة الظهر في مصلى الكلية', desc: 'صلاة الظهر في المصلى.', type: 'prayer', tag: '#صلاة' },
      { start: '13:15', end: '14:00', icon: '🎓', title: 'إنهاء محاضرات الأربعاء والتحرك للمنزل', desc: 'الخروج 2:00 ظهراً والعودة للبيت.', type: 'college', tag: '#عودة' },
      { start: '14:30', end: '15:30', icon: '🍲', title: 'غداء + غسيل مواعين + قيلولة 20 دقيقة', desc: 'تناول الغداء، غسيل الأطباق فوراً، وقيلولة شحن طاقة سريعة.', type: 'living', tag: '#غداء_وقيلولة' },
      { start: '15:30', end: '16:15', icon: '🏋️‍♂️', title: 'متابعة الكوتشينج وتعديل الجداول (45 د)', desc: 'إنهاء شات واستفسارات المشتركين وقفل الواتساب.', type: 'coaching', tag: '#كوتشينج' },
      { start: '16:15', end: '16:45', icon: '🕌', title: 'صلاة العصر', desc: 'صلاة العصر في وقتها.', type: 'prayer', tag: '#صلاة' },
      { start: '16:45', end: '20:15', icon: '💻', title: '[شفت مسائي قوي] Coachdrift (3.5 ساعات صافية)', desc: 'تعويض ساعات الكلية بتركيز ناري على كوتش دريفت قبل اللانش.', type: 'deepwork', tag: '#Coachdrift_P0' },
      { start: '20:15', end: '21:00', icon: '🕌', title: 'صلاتي المغرب والعشاء + عشاء وغسيل أطباق', desc: 'أداء الصلوات وتناول عشاء خفيف وغسيل المواعين.', type: 'prayer', tag: '#صلاة_وعشاء' },
      { start: '21:00', end: '22:15', icon: '📚', title: 'شفت الكورسات والتطوير التقني (ساعة وربع)', desc: 'متابعة درس أو كورس تقني وتطبيقه عملياً.', type: 'courses', tag: '#كورسات' },
      { start: '22:15', end: '23:00', icon: '🛑', title: 'ترويق سريع للشقة وقفل الشاشات', desc: 'ترتيب المكان، Hard Stop، وضوء ونوم 11:00 م.', type: 'shutdown', tag: '#حماية_النوم' },
      { start: '23:00', end: '05:00', icon: '💤', title: 'نوم هادئ وعميق', desc: 'نوم في ظلام تام للاستيقاظ 5:00 ص بنشاط.', type: 'sleep', tag: '#نوم' }
    ]
  },
  friday: {
    id: 'friday',
    name: 'يوم الجمعة (محتوى + شؤون البيت + شحن طاقة)',
    badge: 'تصوير مجمع + نظافة البيت + روحانيات',
    category: 'friday',
    blocks: [
      { start: '05:00', end: '06:30', icon: '🌅', title: 'محطة الفجر + سورة الكهف والورد', desc: 'صلاة الفجر، قراءة سورة الكهف والأذكار والدعاء.', type: 'prayer', tag: '#روحانيات' },
      { start: '06:30', end: '08:30', icon: '📝', title: 'جلسة كتابة سكريبتات المحتوى الأسبوعي', desc: 'كتابة سكريبتات لـ 2 إلى 3 فيديوهات من سلسلتي (إزاي تمرن نفسك + إزاي تعمل دايت لنفسك).', type: 'content', tag: '#كتابة_محتوى' },
      { start: '08:30', end: '10:30', icon: '🧹', title: 'شؤون البيت الأسبوعية (Deep Clean & Laundry)', desc: 'غسيل الملابس، تنظيف شامل للمطبخ والشقة، وتجهيز أساسيات الأكل للأسبوع (Meal Prep).', type: 'living', tag: '#نظافة_البيت' },
      { start: '10:30', end: '11:30', icon: '🚿', title: 'غسل الجمعة ولبس ملابس نظيفة', desc: 'أخذ شاور والاستعداد لصلاة الجمعة.', type: 'break', tag: '#استعداد_الجمعة' },
      { start: '11:30', end: '13:30', icon: '🕌', title: 'صلاة الجمعة وسماع الخطبة والدعاء', desc: 'الذهاب للمسجد مبكراً وسماع الخطبة وأداء الصلاة.', type: 'prayer', tag: '#صلاة_الجمعة' },
      { start: '13:30', end: '15:00', icon: '🍲', title: 'وجبة الجمعة الخاصة + راحة وغسيل الأواني', desc: 'تناول وجبة غداء مميزة وغسيل الأواني فوراً.', type: 'living', tag: '#غداء_الجمعة' },
      { start: '15:00', end: '17:30', icon: '🎬', title: 'جلسة التصوير المجمعة (Batch Recording)', desc: 'تجهيز الكاميرا والمايك وتسجيل الـ 3 فيديوهات دفعة واحدة ثم إرسالها للبايبلاين.', type: 'content', tag: '#تصوير_محتوى' },
      { start: '17:30', end: '19:00', icon: '🕌', title: 'صلاتي العصر والمغرب + ساعة إجابة الجمعة', desc: 'الدعاء بالتوفيق في لانش كوتش دريفت والبركة في الرزق والعافية.', type: 'prayer', tag: '#دعاء' },
      { start: '19:00', end: '22:00', icon: '☕', title: 'كورس استكشافي / مشروع حر / ترويح مع أصحاب', desc: 'وقت مرن: كورس جديد، أو جلسة قهوة مع أصحاب بدون ضغط.', type: 'courses', tag: '#ترويح_وكورسات' },
      { start: '22:00', end: '23:00', icon: '🛑', title: 'بروتوكول حماية النوم', desc: 'ترتيب المكان والاستعداد للنوم 11:00 م لبداية أسبوع ناري.', type: 'shutdown', tag: '#حماية_النوم' },
      { start: '23:00', end: '05:00', icon: '💤', title: 'نوم عميق', desc: 'نوم هادئ 6 ساعات.', type: 'sleep', tag: '#نوم' }
    ]
  }
};

// Initial Content Ideas Seed
const INITIAL_CONTENT_IDEAS = [
  {
    id: 'idea-1',
    series: 'workout',
    title: 'إزاي تصمم تمرينك بنفسك في دقيقة',
    hook: 'لو دخلت الجيم ومش عارف تبدأ بجدول إيه، الفيديو ده هيخليك تصمم تمرينك بنفسك!',
    cta: 'ابعتلي "تمرين" في رسايل الصفحة عشان أساعدك بجدول مخصص لهدفك.',
    status: 'draft',
    statusLabel: 'مسودة ✍️'
  },
  {
    id: 'idea-2',
    series: 'diet',
    title: 'إزاي تحسب سعراتك وتاكل اللي بتحبه وتخس',
    hook: 'بلاش تدفع آلاف في دايت قاسي يرجعك للصفر! هقولك إزاي تحسب سعراتك بالجرام.',
    cta: 'ابعتلي "دايت" على الخاص عشان أحسبلك احتياجك بالظبط.',
    status: 'idea',
    statusLabel: 'فكرة 💡'
  },
  {
    id: 'idea-3',
    series: 'workout',
    title: 'أكبر غلطة بتضيع عضلاتك في الجيم',
    hook: 'بتتمرن بقالك 6 شهور وجسمك مش بيتغير؟ الغلطة دي بنسبة 90% هي السبب!',
    cta: 'تابع الحساب واستنى الجزء التاني بكرة.',
    status: 'recorded',
    statusLabel: 'تم التصوير 🎬'
  }
];

// Initial Habits List (Updated with Beast Mode & Living Alone chores)
const DEFAULT_HABITS = [
  { id: 'h1', text: 'صلاة الفجر في وقتها وأذكار الصباح (5:00 ص)', tag: '05:00 ص' },
  { id: 'h2', text: '[شفت 1] 6 ساعات كود لـ Coachdrift بدون أي مشتتات', tag: 'Coachdrift' },
  { id: 'h3', text: 'صلاة الظهر + تسخين/أكل الغداء وغسيل المواعين فوراً', tag: 'مطبخ' },
  { id: 'h4', text: 'قيلولة الطاقة الحيوية (Power Nap 20-25 دقيقة)', tag: '01:30 م' },
  { id: 'h5', text: '[شفت 2] الكلية أونلاين والمذاكرة والتكليفات (ساعتين وربع)', tag: 'كلية' },
  { id: 'h6', text: '[شفت 3] الكورسات والتعلم التقني والتطبيق (3 ساعات وربع)', tag: 'كورسات' },
  { id: 'h7', text: 'متابعة المتدربين المركزة (30 دقيقة) وقفل الشات', tag: 'كوتشينج' },
  { id: 'h8', text: 'صلوات العصر والمغرب والعشاء في أوقاتها', tag: 'صلوات' },
  { id: 'h9', text: 'ترويق البيت السريع (20 دقيقة) ومفيش مواعين بايتة', tag: 'نظافة' },
  { id: 'h10', text: 'Hard Stop للابتوب وإبعاد الموبايل عن السرير (10:30 م)', tag: '10:30 م' }
];

// State Management
let currentSelectedDayType = 'auto'; // 'auto' | 'home' | 'saturday' | 'wednesday' | 'friday'
let currentFilter = 'all';
let currentSeriesTab = 'workout';
let deferredInstallPrompt = null;

// DOM Elements
const liveClockEl = document.getElementById('liveClock');
const currentDayBadgeEl = document.getElementById('currentDayBadge');
const currentDateStrEl = document.getElementById('currentDateStr');
const autoTabPillEl = document.getElementById('autoTabPill');

const activeBlockWidget = document.getElementById('activeBlockWidget');
const activeBlockTimeEl = document.getElementById('activeBlockTime');
const activeBlockTitleEl = document.getElementById('activeBlockTitle');
const activeBlockDescEl = document.getElementById('activeBlockDesc');
const activeBlockIconEl = document.getElementById('activeBlockIcon');
const activeBlockRemainingEl = document.getElementById('activeBlockRemaining');
const nextBlockTextEl = document.getElementById('nextBlockText');

const cdDaysEl = document.getElementById('cdDays');
const cdHoursEl = document.getElementById('cdHours');
const cdMinutesEl = document.getElementById('cdMinutes');
const cdSecondsEl = document.getElementById('cdSeconds');
const sprintProgressFillEl = document.getElementById('sprintProgressFill');
const sprintPercentEl = document.getElementById('sprintPercent');
const sprintPhaseEl = document.getElementById('sprintPhase');

const timelineListEl = document.getElementById('timelineList');
const timelineTitleEl = document.getElementById('timelineTitle');
const timelineBadgeEl = document.getElementById('timelineBadge');

const habitsListEl = document.getElementById('habitsList');
const habitScorePercentEl = document.getElementById('habitScorePercent');
const habitProgressBarEl = document.getElementById('habitProgressBar');
const habitScoreMsgEl = document.getElementById('habitScoreMsg');
const resetHabitsBtn = document.getElementById('resetHabitsBtn');
const addTaskForm = document.getElementById('addTaskForm');
const customTaskInput = document.getElementById('customTaskInput');

const contentCardsContainer = document.getElementById('contentCardsContainer');
const addNewIdeaBtn = document.getElementById('addNewIdeaBtn');
const ideaModal = document.getElementById('ideaModal');
const closeIdeaModal = document.getElementById('closeIdeaModal');
const cancelIdeaModal = document.getElementById('cancelIdeaModal');
const ideaForm = document.getElementById('ideaForm');

const shutdownToggleBtn = document.getElementById('shutdownToggleBtn');
const zenOverlay = document.getElementById('zenOverlay');
const exitZenBtn = document.getElementById('exitZenBtn');
const pwaInstallBtn = document.getElementById('pwaInstallBtn');
const appToast = document.getElementById('appToast');

// Helpers: Time Parsing & Current Day Detection
function getTodayDayScheduleKey() {
  const dayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  if (dayIndex === 6) return 'saturday';
  if (dayIndex === 3) return 'wednesday';
  if (dayIndex === 5) return 'friday';
  return 'home'; // Sun, Mon, Tue, Thu
}

function getArabicDayName(dayIndex) {
  const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  return days[dayIndex];
}

function timeToMinutes(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

// Format 24-hour time to clean Arabic 12-hour format (e.g. 13:30 -> 01:30 م)
function formatTimeTo12(time24) {
  if (!time24) return '';
  const [h, m] = time24.split(':').map(Number);
  const period = h >= 12 ? 'م' : 'ص';
  let h12 = h % 12;
  if (h12 === 0) h12 = 12;
  return `${String(h12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${period}`;
}

function formatBlockRange(start24, end24) {
  return `من ${formatTimeTo12(start24)} إلى ${formatTimeTo12(end24)}`;
}

function showToast(message) {
  appToast.textContent = message;
  appToast.classList.add('show');
  setTimeout(() => appToast.classList.remove('show'), 2800);
}

// Update Clock & Date
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  liveClockEl.textContent = `${hours}:${minutes}:${seconds}`;

  const dayIndex = now.getDay();
  const dayName = getArabicDayName(dayIndex);
  const scheduleKey = getTodayDayScheduleKey();
  const schedName = SCHEDULES[scheduleKey].name;

  currentDayBadgeEl.textContent = `اليوم: ${dayName} (${scheduleKey === 'home' ? 'يوم بيت' : scheduleKey === 'saturday' ? 'كلية كاملة' : scheduleKey === 'wednesday' ? 'نصف كلية' : 'جمعة ومحتوى'})`;
  currentDateStrEl.textContent = now.toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' });
  autoTabPillEl.textContent = dayName;

  // Auto trigger check for shutdown mode after 22:00
  if (now.getHours() >= 22 && !sessionStorage.getItem('zenDismissedTonight')) {
    // Soft reminder can be used
  }
}

// Update Coachdrift 10/10 Launch Countdown
function updateSprintCountdown() {
  // Launch date: October 10, 2026, 00:00:00 (Cairo Time +03:00)
  const targetDate = new Date('2026-10-10T00:00:00+03:00').getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    cdDaysEl.textContent = '00';
    cdHoursEl.textContent = '00';
    cdMinutesEl.textContent = '00';
    cdSecondsEl.textContent = '00';
    sprintPercentEl.textContent = '100%';
    sprintProgressFillEl.style.width = '100%';
    sprintPhaseEl.textContent = '🚀 تم الإطلاق الرسمي لكوتش دريفت بحمد الله!';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  cdDaysEl.textContent = String(days).padStart(2, '0');
  cdHoursEl.textContent = String(hours).padStart(2, '0');
  cdMinutesEl.textContent = String(minutes).padStart(2, '0');
  cdSecondsEl.textContent = String(seconds).padStart(2, '0');

  // Total sprint duration from Sep 20 to Oct 10 = ~20 days
  const totalSprintDuration = 20 * 24 * 60 * 60 * 1000;
  const elapsed = totalSprintDuration - diff;
  const percent = Math.min(Math.max(Math.round((elapsed / totalSprintDuration) * 100), 10), 98);

  sprintPercentEl.textContent = `${percent}%`;
  sprintProgressFillEl.style.width = `${percent}%`;

  if (days > 12) {
    sprintPhaseEl.textContent = 'المرحلة 1: تجميد الميزات (Feature Freeze)';
  } else if (days > 5) {
    sprintPhaseEl.textContent = 'المرحلة 2: تدقيق الجودة والـ Sync (QA & Hardening)';
  } else if (days > 1) {
    sprintPhaseEl.textContent = 'المرحلة 3: تجربة حقيقية مع كوتش (Beta Test)';
  } else {
    sprintPhaseEl.textContent = 'المرحلة 4: الاستعداد لساعة الصفر (Launch Eve)';
  }
}

// Resolve & Render Active Block
function updateActiveBlock() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const scheduleKey = getTodayDayScheduleKey();
  const currentSchedule = SCHEDULES[scheduleKey];

  let currentBlock = null;
  let nextBlock = null;
  let currentIndex = -1;

  for (let i = 0; i < currentSchedule.blocks.length; i++) {
    const block = currentSchedule.blocks[i];
    const startM = timeToMinutes(block.start);
    let endM = timeToMinutes(block.end);

    // Overnight block handling (e.g. 23:00 to 05:00)
    if (endM < startM) {
      if (currentMinutes >= startM || currentMinutes < endM) {
        currentBlock = block;
        currentIndex = i;
        nextBlock = currentSchedule.blocks[(i + 1) % currentSchedule.blocks.length];
        break;
      }
    } else {
      if (currentMinutes >= startM && currentMinutes < endM) {
        currentBlock = block;
        currentIndex = i;
        nextBlock = currentSchedule.blocks[(i + 1) % currentSchedule.blocks.length];
        break;
      }
    }
  }

  // Fallback to first block if not found
  if (!currentBlock) {
    currentBlock = currentSchedule.blocks[0];
    nextBlock = currentSchedule.blocks[1];
    currentIndex = 0;
  }

  // Update UI Elements
  activeBlockIconEl.textContent = currentBlock.icon;
  activeBlockTimeEl.textContent = formatBlockRange(currentBlock.start, currentBlock.end);
  activeBlockTitleEl.textContent = currentBlock.title;
  activeBlockDescEl.textContent = currentBlock.desc;

  if (nextBlock) {
    nextBlockTextEl.textContent = `${nextBlock.icon} ${nextBlock.title} (${formatTimeTo12(nextBlock.start)})`;
  } else {
    nextBlockTextEl.textContent = 'نهاية جدول اليوم';
  }

  // Calculate Remaining Time in Current Block
  let endMinutes = timeToMinutes(currentBlock.end);
  if (endMinutes < timeToMinutes(currentBlock.start)) {
    // Overnight: add 24 hours
    endMinutes += 24 * 60;
  }
  let effectiveCurrentM = currentMinutes;
  if (effectiveCurrentM < timeToMinutes(currentBlock.start) && endMinutes > 24 * 60) {
    effectiveCurrentM += 24 * 60;
  }
  const remainingM = Math.max(endMinutes - effectiveCurrentM, 0);

  if (remainingM > 60) {
    const rHours = Math.floor(remainingM / 60);
    const rMins = remainingM % 60;
    activeBlockRemainingEl.textContent = `متبقي ${rHours} س و ${rMins} د`;
  } else {
    activeBlockRemainingEl.textContent = `متبقي ${remainingM} دقيقة`;
  }

  // Highlight active item in the list if viewing today's schedule
  const activeKeyForView = currentSelectedDayType === 'auto' ? getTodayDayScheduleKey() : currentSelectedDayType;
  if (activeKeyForView === scheduleKey) {
    document.querySelectorAll('.timeline-block-item').forEach((item, idx) => {
      if (idx === currentIndex) {
        item.classList.add('is-current');
      } else {
        item.classList.remove('is-current');
      }
    });
  }
}

// Render Timeline Schedule
function renderTimeline() {
  const scheduleKey = currentSelectedDayType === 'auto' ? getTodayDayScheduleKey() : currentSelectedDayType;
  const schedule = SCHEDULES[scheduleKey];

  timelineTitleEl.textContent = schedule.name;
  timelineBadgeEl.textContent = schedule.badge;

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const isActualToday = (currentSelectedDayType === 'auto' || currentSelectedDayType === getTodayDayScheduleKey());

  timelineListEl.innerHTML = '';

  schedule.blocks.forEach((block, idx) => {
    // Filter check
    if (currentFilter !== 'all') {
      if (currentFilter === 'deepwork' && block.type !== 'deepwork') return;
      if (currentFilter === 'courses' && block.type !== 'courses') return;
      if (currentFilter === 'college' && block.type !== 'college') return;
      if (currentFilter === 'prayer' && block.type !== 'prayer') return;
      if (currentFilter === 'coaching' && block.type !== 'coaching') return;
      if (currentFilter === 'living' && block.type !== 'living') return;
    }

    const startM = timeToMinutes(block.start);
    let endM = timeToMinutes(block.end);
    let isCurrent = false;

    if (isActualToday) {
      if (endM < startM) {
        if (currentMinutes >= startM || currentMinutes < endM) isCurrent = true;
      } else {
        if (currentMinutes >= startM && currentMinutes < endM) isCurrent = true;
      }
    }

    const itemEl = document.createElement('div');
    itemEl.className = `timeline-block-item ${isCurrent ? 'is-current' : ''}`;
    itemEl.dataset.type = block.type;

    itemEl.innerHTML = `
      <div class="block-icon-wrap">${block.icon}</div>
      <div class="block-content-wrap">
        <div class="block-time-range">${formatBlockRange(block.start, block.end)}</div>
        <h3 class="block-title">${block.title}</h3>
        <p class="block-notes">${block.desc}</p>
        <div class="block-tags">
          <span class="block-tag-badge">${block.tag}</span>
        </div>
      </div>
    `;

    timelineListEl.appendChild(itemEl);
  });
}

// Habit Checklist Management with LocalStorage
function getHabitStorageKey() {
  const todayStr = new Date().toISOString().split('T')[0];
  return `nooreldean_habits_${todayStr}`;
}

function loadHabits() {
  const key = getHabitStorageKey();
  const saved = localStorage.getItem(key);
  let habits = DEFAULT_HABITS;

  if (saved) {
    try {
      habits = JSON.parse(saved);
    } catch (e) {
      habits = DEFAULT_HABITS;
    }
  }

  renderHabits(habits);
}

function saveHabits(habits) {
  const key = getHabitStorageKey();
  localStorage.setItem(key, JSON.stringify(habits));
  renderHabits(habits);
}

function renderHabits(habits) {
  habitsListEl.innerHTML = '';
  let completedCount = 0;

  habits.forEach((habit) => {
    if (habit.completed) completedCount++;

    const li = document.createElement('li');
    li.className = `habit-item ${habit.completed ? 'is-completed' : ''}`;

    li.innerHTML = `
      <input type="checkbox" class="habit-checkbox" ${habit.completed ? 'checked' : ''} aria-label="${habit.text}">
      <span class="habit-text">${habit.text}</span>
      <span class="habit-tag">${habit.tag}</span>
    `;

    li.addEventListener('click', (e) => {
      // Toggle
      habit.completed = !habit.completed;
      saveHabits(habits);
      if (habit.completed) {
        showToast('✓ عاش يا بطل! استمر!');
      }
    });

    habitsListEl.appendChild(li);
  });

  // Calculate score
  const total = habits.length;
  const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  habitScorePercentEl.textContent = `${percent}%`;
  habitProgressBarEl.style.width = `${percent}%`;

  if (percent === 100) {
    habitScoreMsgEl.textContent = '🔥 أسطورة! أكملت كل عادات اليوم بنجاح 100%! نم قرير العين.';
  } else if (percent >= 60) {
    habitScoreMsgEl.textContent = '👏 إنجاز ممتاز ومعدل تركيز عالي! كمل باقي محطات اليوم.';
  } else {
    habitScoreMsgEl.textContent = '🚀 ركز في المهمة القادمة، واجعل خطواتك ثابتة بدون تسويف.';
  }
}

// Reset Daily Habits
resetHabitsBtn.addEventListener('click', () => {
  if (confirm('هل ترغب في تصفير تقدم اليوم لبدء يوم جديد؟')) {
    const habits = DEFAULT_HABITS.map(h => ({ ...h, completed: false }));
    saveHabits(habits);
    showToast('تم تصفير تقدم العادات لبدء يوم جديد!');
  }
});

// Add Custom Habit
addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = customTaskInput.value.trim();
  if (!text) return;

  const key = getHabitStorageKey();
  const saved = localStorage.getItem(key);
  let habits = saved ? JSON.parse(saved) : DEFAULT_HABITS;

  habits.push({
    id: `custom-${Date.now()}`,
    text: text,
    tag: 'مهمة إضافية',
    completed: false
  });

  saveHabits(habits);
  customTaskInput.value = '';
  showToast('تمت إضافة المهمة بنجاح!');
});

// Content Engine & Ideas Vault
function getContentIdeas() {
  const saved = localStorage.getItem('nooreldean_content_ideas');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return INITIAL_CONTENT_IDEAS;
    }
  }
  return INITIAL_CONTENT_IDEAS;
}

function saveContentIdeas(ideas) {
  localStorage.setItem('nooreldean_content_ideas', JSON.stringify(ideas));
  renderContentIdeas();
}

function renderContentIdeas() {
  const ideas = getContentIdeas();
  contentCardsContainer.innerHTML = '';

  const filtered = ideas.filter(idea => {
    if (currentSeriesTab === 'all') return true;
    return idea.series === currentSeriesTab;
  });

  if (filtered.length === 0) {
    contentCardsContainer.innerHTML = `
      <div style="text-align: center; color: var(--text-dim); padding: 2rem 1rem; font-size: 0.85rem;">
        لا توجد أفكار مسجلة في هذا القسم بعد.<br>اضغط على "+ فكرة جديدة" بالأعلى لإضافة فيديو.
      </div>
    `;
    return;
  }

  filtered.forEach(idea => {
    const card = document.createElement('div');
    card.className = 'content-idea-card';

    const seriesTitle = idea.series === 'workout' ? '🏋️‍♂️ إزاي تمرن نفسك' : idea.series === 'diet' ? '🥗 إزاي تعمل دايت' : '💡 عام';

    card.innerHTML = `
      <div class="idea-card-header">
        <span class="idea-series-tag">${seriesTitle}</span>
        <button class="idea-status-btn" data-id="${idea.id}">${idea.statusLabel || 'فكرة 💡'}</button>
      </div>
      <h4 class="idea-title">${idea.title}</h4>
      <div class="idea-hook"><strong>الخطاف:</strong> ${idea.hook}</div>
      <div class="idea-cta"><strong>CTA:</strong> ${idea.cta}</div>
    `;

    // Status Cycle Button Click
    const statusBtn = card.querySelector('.idea-status-btn');
    statusBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cycleIdeaStatus(idea.id);
    });

    contentCardsContainer.appendChild(card);
  });
}

function cycleIdeaStatus(ideaId) {
  const ideas = getContentIdeas();
  const idea = ideas.find(i => i.id === ideaId);
  if (!idea) return;

  const statuses = [
    { key: 'idea', label: 'فكرة 💡' },
    { key: 'draft', label: 'مسودة ✍️' },
    { key: 'recorded', label: 'تم التصوير 🎬' },
    { key: 'published', label: 'تم النشر 🚀' }
  ];

  const currentIdx = statuses.findIndex(s => s.key === idea.status);
  const nextStatus = statuses[(currentIdx + 1) % statuses.length];

  idea.status = nextStatus.key;
  idea.statusLabel = nextStatus.label;

  saveContentIdeas(ideas);
  showToast(`تم تحديث حالة الفيديو إلى: ${nextStatus.label}`);
}

// Modal Handlers
addNewIdeaBtn.addEventListener('click', () => {
  ideaModal.classList.add('open');
});
closeIdeaModal.addEventListener('click', () => {
  ideaModal.classList.remove('open');
});
cancelIdeaModal.addEventListener('click', () => {
  ideaModal.classList.remove('open');
});

ideaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const series = document.getElementById('ideaSeries').value;
  const title = document.getElementById('ideaTitle').value.trim();
  const hook = document.getElementById('ideaHook').value.trim();
  const cta = document.getElementById('ideaCta').value.trim();

  if (!title || !hook) return;

  const ideas = getContentIdeas();
  ideas.unshift({
    id: `idea-${Date.now()}`,
    series: series,
    title: title,
    hook: hook,
    cta: cta,
    status: 'idea',
    statusLabel: 'فكرة 💡'
  });

  saveContentIdeas(ideas);
  ideaForm.reset();
  ideaModal.classList.remove('open');
  showToast('تمت إضافة فكرة الفيديو لبنك المحتوى!');
});

// Series Navigation Tabs
document.querySelectorAll('.series-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.series-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentSeriesTab = tab.dataset.series;
    renderContentIdeas();
  });
});

// Day Tabs Navigation
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentSelectedDayType = tab.dataset.dayType;
    renderTimeline();
    updateActiveBlock();
  });
});

// Timeline Category Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTimeline();
  });
});

// Shutdown Zen Mode Overlay Handlers
shutdownToggleBtn.addEventListener('click', () => {
  zenOverlay.classList.add('open');
});

exitZenBtn.addEventListener('click', () => {
  zenOverlay.classList.remove('open');
  sessionStorage.setItem('zenDismissedTonight', 'true');
});

// PWA Install Prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  pwaInstallBtn.style.display = 'inline-flex';
});

pwaInstallBtn.addEventListener('click', async () => {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    if (outcome === 'accepted') {
      pwaInstallBtn.style.display = 'none';
      showToast('تم تثبيت التطبيق بنجاح!');
    }
    deferredInstallPrompt = null;
  }
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.log('SW registration note:', err);
    });
  });
}

// Initialization Loop
function init() {
  updateClock();
  updateSprintCountdown();
  renderTimeline();
  updateActiveBlock();
  loadHabits();
  renderContentIdeas();

  // Tickers
  setInterval(updateClock, 1000);
  setInterval(updateSprintCountdown, 1000);
  setInterval(updateActiveBlock, 15000); // Check active block every 15s
}

document.addEventListener('DOMContentLoaded', init);
