/**
 * Nooreldean Life OS - Core Interactive Logic
 * Fully responsive, offline-ready, dynamic schedule resolution
 */

// Schedule Data Architecture (Balanced Beast Mode: Live Streams, Talabat Shifts, 4 Learning Paths, College & Video Creation)
const SCHEDULES = {
  live_study: {
    id: 'live_study',
    name: 'أيام لايف Study With Me (12 ساعة تركيز ومذاكرة)',
    badge: '🔴 لايف 7ص-7م (برمجة + UI/UX + إنجليزي + ماكنزي)',
    category: 'livestudy',
    blocks: [
      { start: '05:30', end: '06:15', icon: '🌅', title: 'محطة الفجر + إفطار سريع وأذكار الصباح', desc: 'استيقاظ 5:30 ص، صلاة الفجر في وقتها بالمسجد، أذكار الصباح، فطور سريع مغذي وترويق السرير.', type: 'prayer', tag: '#فجر_وبداية' },
      { start: '06:15', end: '07:00', icon: '🎥', title: 'تجهيز بث لايف Study With Me ومكان المذاكرة', desc: 'تجهيز الكاميرا والمايك، تشغيل عداد البومودورو، ضبط جلسة البث والبدء 7:00 ص بالضبط.', type: 'livestudy', tag: '#تجهيز_اللايف' },
      { start: '07:00', end: '11:30', icon: '💻', title: '[بومودورو 1] كود عميق وبرمجة وبناء مشاريع مع AI', desc: 'قمة التركيز الذهني! 4.5 ساعات كود مكثف، بناء ميزات جديدة ومشاريع بورتفوليو وإدارة مهام Antigravity.', type: 'deepwork', tag: '#برمجة_عميقة' },
      { start: '11:30', end: '12:45', icon: '🎨', title: '[بومودورو 2] مسار UI/UX (Courssat Plus: دروس وتأسيس)', desc: 'متابعة فيديوهات مسار الـ UI/UX على كورسات بلس، فهم أساسيات تجربة المستخدم ونظم التصميم.', type: 'courses', tag: '#تصميم_UI_UX' },
      { start: '12:45', end: '13:30', icon: '🕌', title: 'صلاة الظهر في وقتها + سناك خفيف واستراحة العين', desc: 'أداء صلاة الظهر في وقتها فور الأذان، تناول سناك صحي، وإراحة العينين بعيداً عن الشاشات.', type: 'prayer', tag: '#صلاة_الظهر' },
      { start: '13:30', end: '15:00', icon: '📐', title: '[بومودورو 2] تطبيق عملي ومشاريع وتصاميم على Figma', desc: 'تطبيق مباشر لكل ما تم تعلمه في كورس UI/UX وتصميم واجهات حقيقية على فيجما.', type: 'courses', tag: '#Figma_عملي' },
      { start: '15:00', end: '16:15', icon: '🇬🇧', title: '[بومودورو 3] مسار الإنجليزي (Courssat Plus: استماع ومحادثة)', desc: 'تطوير مهارات الاستماع والمحادثة، تكرار الجمل، وتدوين الملاحظات التفاعلية في مسار الإنجليزي.', type: 'courses', tag: '#إنجليزي' },
      { start: '16:15', end: '16:45', icon: '🕌', title: 'صلاة العصر في وقتها + فريش واستعادة نشاط', desc: 'صلاة العصر في وقتها فور الأذان بالمسجد، غسل الوجه واستعادة الحيوية للجزء الأخير من اللايف.', type: 'prayer', tag: '#صلاة_العصر' },
      { start: '16:45', end: '17:30', icon: '🇬🇧', title: '[بومودورو 3] استكمال تمارين الإنجليزي والمفردات اليومية', desc: 'حل الاختبارات التفاعلية وتثبيت الكلمات الجديدة في مسار اللغة الإنجليزية.', type: 'courses', tag: '#تمارين_إنجليزي' },
      { start: '17:30', end: '19:00', icon: '🚀', title: '[بومودورو 4] برنامج ماكنزي فورورد (McKinsey Forward وحدات وتقييمات)', desc: 'قراءة محتوى الوحدات التدريبية، إتمام التقييمات، وتطبيق أدوات حل المشكلات والتفكير القيادي.', type: 'courses', tag: '#McKinsey_Forward' },
      { start: '19:00', end: '19:30', icon: '🛑', title: 'ختام لايف الـ 12 ساعة بنجاح + صلاة المغرب فور الأذان', desc: 'قفل البث المباشر مع المتابعين، الاحتفال بإنهاء 12 ساعة دراسة كاملة، وأداء صلاة المغرب.', type: 'prayer', tag: '#صلاة_المغرب' },
      { start: '19:30', end: '20:30', icon: '🍲', title: 'عشاء مغذي + غسيل الأطباق ودش دافئ', desc: 'تناول وجبة عشاء بروتينية صحية، غسيل الأطباق فوراً (قاعدة Zero Dishes)، وأخذ دش مريح.', type: 'living', tag: '#عشاء_واستشفاء' },
      { start: '20:30', end: '21:00', icon: '🕌', title: 'صلاة العشاء في وقتها جماعة بالمسجد', desc: 'الذهاب للمسجد وأداء صلاة العشاء جماعة في وقتها.', type: 'prayer', tag: '#صلاة_العشاء' },
      { start: '21:00', end: '21:45', icon: '📱', title: 'مكالمة الأهل + مراجعة مخرجات الكود مع الـ AI', desc: 'مكالمة الأسرة والاطمئنان، وإلقاء نظرة سريعة على ما تم إنجازه في الكود مع AI.', type: 'living', tag: '#مكالمة_الأسرة' },
      { start: '21:45', end: '22:30', icon: '🛑', title: 'بروتوكول حماية النوم وإبعاد الشاشات وأذكار النوم', desc: 'قفل الشاشات تماماً، وضوء وقراءة أذكار النوم والاستعداد لنوم عميق 10:30 م.', type: 'shutdown', tag: '#حماية_النوم' },
      { start: '22:30', end: '05:30', icon: '💤', title: 'نوم عميق وهادئ (7 ساعات كاملة متصلة)', desc: 'نوم هادئ في ظلام تام للاستيقاظ 5:30 ص بنشاط واستعداد ليوم شيفت طلبات أو دراسة جديدة.', type: 'sleep', tag: '#نوم_7_ساعات' }
    ]
  },
  talabat_full: {
    id: 'talabat_full',
    name: 'يوم شيفت طلبات كامل (دخل مالي ونشاط حركي)',
    badge: '🚴 شيفت 8ص-8م + متابعة كود الـ AI + نوم 7 ساعات',
    category: 'talabat',
    blocks: [
      { start: '05:30', end: '06:45', icon: '🌅', title: 'الفجر في وقته + فطور طاقة وتجهيز عدة الشغل والباور بانك', desc: 'صلاة الفجر في المسجد، فطور مشبع غني بالطاقة، التأكد من شحن الهاتف والباور بانك، وتجهيز العجلة/السكوتر.', type: 'prayer', tag: '#فجر_وتجهيز' },
      { start: '06:45', end: '07:45', icon: '💻', title: 'جلسة كود فجرية / توجيه Antigravity بمهام اليوم', desc: 'إطلاق مهام الكود للـ AI ليعمل في الخلفية، مراجعة سريعة قبل مغادرة المنزل.', type: 'deepwork', tag: '#توجيه_الـAI' },
      { start: '07:45', end: '08:00', icon: '🚴', title: 'التحرك والوصول لمنطقة الشغل وفتح تطبيق طلبات', desc: 'الوصول لنقطة التمركز وبدء الشيفت في تمام 8:00 صباحاً.', type: 'talabat', tag: '#بدء_الشيفت' },
      { start: '08:00', end: '12:45', icon: '🚴', title: '[فترة 1 طلبات] أوردرات الصباح والسوبرماركت', desc: 'تنفيذ طلبات الصباح وتوصيل سريع مع شرب الماء باستمرار ومراعاة قواعد الأمان.', type: 'talabat', tag: '#أوردرات_الصباح' },
      { start: '12:45', end: '12:55', icon: '🕌', title: 'صلاة الظهر في المسجد (راحة 10 دقائق)', desc: 'إيقاف مؤقت للطلبات 10 دقائق فقط، أداء صلاة الظهر في أقرب مسجد ومياه وسناك سريع واستئناف التوصيل فوراً.', type: 'prayer', tag: '#صلاة_الظهر' },
      { start: '12:55', end: '16:15', icon: '🚴', title: '[فترة 2 طلبات] ذروة الغداء (Lunch Peak) وأعلى دخل', desc: 'استغلال ساعات الذروة لمطاعم الغداء وتحقيق أعلى معدل أوردرات وبونص.', type: 'talabat', tag: '#ذروة_الغداء' },
      { start: '16:15', end: '16:25', icon: '🕌', title: 'صلاة العصر في المسجد (راحة 10 دقائق)', desc: 'إيقاف مؤقت 10 دقائق فقط: أداء صلاة العصر في المسجد والعودة فوراً للشغل واستكمال الأوردرات.', type: 'prayer', tag: '#صلاة_العصر' },
      { start: '16:25', end: '18:45', icon: '🚴', title: '[فترة 3 طلبات] أوردرات ما قبل الغروب وبداية المساء', desc: 'استكمال الأوردرات بكفاءة وسرعة لتأمين الهدف المالي لليوم.', type: 'talabat', tag: '#أوردرات_المساء' },
      { start: '18:45', end: '18:55', icon: '🕌', title: 'صلاة المغرب في المسجد فور الأذان (راحة 10 دقائق)', desc: 'إيقاف مؤقت 10 دقائق فقط: أداء صلاة المغرب فور سماع الأذان واستكمال التوصيل فوراً.', type: 'prayer', tag: '#صلاة_المغرب' },
      { start: '18:55', end: '20:00', icon: '🚴', title: 'نهاية شيفت طلبات وقفل التطبيق والعودة للمنزل', desc: 'تسليم آخر أوردر، قفل التطبيق بإنهاء 12 ساعة عمل، والعودة للبيت بأمان.', type: 'talabat', tag: '#ختام_الشيفت' },
      { start: '20:00', end: '20:45', icon: '🍲', title: 'دش دافئ + عشاء منزلي واسترجاع الطاقة', desc: 'أخذ دش دافئ منعش بعد مشقة اليوم، عشاء بيتي ساخن ومغذي، وغسيل المواعين.', type: 'living', tag: '#راحة_وعشاء' },
      { start: '20:45', end: '21:15', icon: '🕌', title: 'صلاة العشاء جماعة في المسجد', desc: 'أداء صلاة العشاء بالمسجد مع ختام اليوم.', type: 'prayer', tag: '#صلاة_العشاء' },
      { start: '21:15', end: '22:00', icon: '💻', title: 'مراجعة مخرجات الكود مع Antigravity + مكالمة الأهل', desc: 'فتح اللابتوب وفحص ما تم إنجازه أثناء النهار، دمج التعديلات، ومكالمة الوالدة والأسرة.', type: 'deepwork', tag: '#مراجعة_الكود' },
      { start: '22:00', end: '22:30', icon: '🛑', title: 'بروتوكول قفل الشاشات والـ Wind-down', desc: 'ترتيب المكان، Hard Stop، إبعاد الموبايل، وضوء وأذكار النوم.', type: 'shutdown', tag: '#حماية_النوم' },
      { start: '22:30', end: '05:30', icon: '💤', title: 'نوم عميق (7 ساعات كاملة لاستعادة النشاط البدني)', desc: 'نوم هادئ ومريح 7 ساعات كاملة لاستشفاء العضلات والنشاط الصباحي.', type: 'sleep', tag: '#نوم_7_ساعات' }
    ]
  },
  wednesday: {
    id: 'wednesday',
    name: 'يوم الأربعاء (كلية عملي + تصوير ومونتاج شورتس)',
    badge: '🎓 كلية 8-2 + 🎬 مونتاج وتصوير شورتس 3:30-7:30م',
    category: 'wednesday',
    blocks: [
      { start: '05:30', end: '06:30', icon: '🌅', title: 'الفجر في وقته + فطور وتجهيز أدوات المعمل والكلية', desc: 'صلاة الفجر في المسجد، فطور مغذي، مراجعة متطلبات السكاشن العملية وتجهيز النزول.', type: 'prayer', tag: '#فجر_واستعداد' },
      { start: '06:30', end: '07:15', icon: '💻', title: 'شفت كود فجري مركز / مراجعة برمجية سريعة', desc: 'جلسة تركيز 45 دقيقة لإنجاز مهمة كود قبل الانطلاق.', type: 'deepwork', tag: '#كود_فجري' },
      { start: '07:15', end: '08:00', icon: '🚗', title: 'التحرك للكلية والوصول 8:00 ص', desc: 'المواصلات للكلية، استماع لبودكاست مفيد والوصول قبل موعد السكشن.', type: 'college', tag: '#مواصلات' },
      { start: '08:00', end: '12:45', icon: '🎓', title: 'سكاشن ومعامل الكلية العملية بتركيز', desc: 'حضور المعامل والسكاشن العملية والتفاعل مع التطبيقات المطلوبة.', type: 'college', tag: '#كلية_عملي' },
      { start: '12:45', end: '13:15', icon: '🕌', title: 'صلاة الظهر في مصلى الكلية', desc: 'أداء صلاة الظهر في مصلى الكلية في وقتها.', type: 'prayer', tag: '#صلاة_الظهر' },
      { start: '13:15', end: '14:00', icon: '🎓', title: 'إنهاء اليوم العملي والمغادرة للمنزل 2:00 ظهراً', desc: 'الخروج من الكلية والعودة للبيت فوراً.', type: 'college', tag: '#مغادرة_الكلية' },
      { start: '14:30', end: '15:30', icon: '🍲', title: 'غداء منزلي + قيلولة شحن الطاقة (Power Nap 20 دقيقة)', desc: 'تناول الغداء الصحي، غسيل الأواني، وأخذ قيلولة 20 دقيقة لاسترجاع النشاط الذهني.', type: 'living', tag: '#غداء_وقيلولة' },
      { start: '15:30', end: '16:15', icon: '🎬', title: '[جلسة صناعة المحتوى] إعداد سكريبتات الشورتس والإضاءة والمايك', desc: 'تجهيز أفكار 2 إلى 3 شورتس، صياغة الهوكس (Hooks) القوية وتجهيز كادر التصوير.', type: 'content', tag: '#سكريبت_الشورتس' },
      { start: '16:15', end: '16:45', icon: '🕌', title: 'صلاة العصر في وقتها', desc: 'أداء صلاة العصر في وقتها فور الأذان.', type: 'prayer', tag: '#صلاة_العصر' },
      { start: '16:45', end: '18:00', icon: '🎥', title: '[جلسة صناعة المحتوى] تصوير دفعة الفيديوهات كاملة (Batch Recording)', desc: 'تسجيل الشورتس دفعة واحدة أمام الكاميرا بأعلى حيوية وطاقة.', type: 'content', tag: '#تصوير_شورتس' },
      { start: '18:00', end: '18:45', icon: '✂️', title: '[جلسة صناعة المحتوى] مونتاج وتقطيع الشورتس والـ Captions', desc: 'تقطيع الصمت، إضافة التكبيرات (Zooms)، كتابة السبتايتل وإخراج الفيديو بجودة عالية.', type: 'content', tag: '#مونتاج_الشورتس' },
      { start: '18:45', end: '19:15', icon: '🕌', title: 'صلاة المغرب فور الأذان', desc: 'أداء صلاة المغرب في وقتها.', type: 'prayer', tag: '#صلاة_المغرب' },
      { start: '19:15', end: '20:05', icon: '📤', title: 'جدولة ونشر الفيديوهات وتجهيز الغلاف والـ Hooks', desc: 'رفع الفيديوهات وجدولتها على المنصات وكتابة الكابشن والدعوة للفعل (CTA).', type: 'content', tag: '#نشر_المحتوى' },
      { start: '20:05', end: '20:35', icon: '🕌', title: 'صلاة العشاء في وقتها بالمسجد', desc: 'أداء صلاة العشاء بالمسجد جماعة فور الأذان.', type: 'prayer', tag: '#صلاة_العشاء' },
      { start: '20:35', end: '21:15', icon: '📞', title: 'مكالمة الأهل + عشاء خفيف وغسيل المواعين', desc: 'مكالمة الوالدة والعائلة وتناول عشاء خفيف.', type: 'living', tag: '#أهل_وعشاء' },
      { start: '21:15', end: '22:00', icon: '💻', title: 'ترويح حر أو مراجعة سريعة للكود', desc: 'جلسة مرنة بدون ضغط لمراجعة كود أو تصفح تقني مفيد.', type: 'deepwork', tag: '#مراجعة_حرة' },
      { start: '22:00', end: '22:30', icon: '🛑', title: 'قفل الشاشات والتهيئة للنوم', desc: 'ترتيب المكان، قفل الأجهزة، وضوء واستعداد للنوم 10:30 م.', type: 'shutdown', tag: '#حماية_النوم' },
      { start: '22:30', end: '05:30', icon: '💤', title: 'نوم هادئ وعميق 7 ساعات', desc: 'نوم 7 ساعات كاملة للاستعداد لشيفت طلبات الخميس بكل نشاط.', type: 'sleep', tag: '#نوم_7_ساعات' }
    ]
  },
  saturday_college: {
    id: 'saturday_college',
    name: 'السبت أسبوع (أ) (كلية نظري + طلبات مسائي)',
    badge: '🎓 كلية نظري 8ص-4م + 🚴 طلبات مسائي 4:30م-8:30م',
    category: 'saturday_college',
    blocks: [
      { start: '05:30', end: '06:45', icon: '🌅', title: 'الفجر في وقته + فطور وتجهيز شنطة الكلية ولبس الشيفت', desc: 'صلاة الفجر في المسجد، فطور سريع مغذي، تجهيز كشكول المحاضرات وشنطة الشغل.', type: 'prayer', tag: '#فجر_واستعداد' },
      { start: '06:45', end: '07:45', icon: '🚗', title: 'التحرك والوصول للكلية 8:00 ص', desc: 'المواصلات للكلية والوصول مبكراً قبل بدء المحاضرات.', type: 'college', tag: '#مواصلات' },
      { start: '08:00', end: '12:45', icon: '🎓', title: 'محاضرات الكلية النظرية الصباحية', desc: 'حضور وتدوين الملاحظات الأساسية مع أساتذة المواد النظرية.', type: 'college', tag: '#محاضرات_نظري' },
      { start: '12:45', end: '13:15', icon: '🕌', title: 'صلاة الظهر بمصلى الكلية + سناك سريع', desc: 'أداء صلاة الظهر في المصلى وتناول سناك مياه وبسكوت.', type: 'prayer', tag: '#صلاة_الظهر' },
      { start: '13:15', end: '16:00', icon: '🎓', title: 'استكمال محاضرات النظري ونهاية اليوم الدراسي 4:00 م', desc: 'الفترة الثانية من المحاضرات، إنهاء اليوم عند 4:00 عصراً.', type: 'college', tag: '#محاضرات' },
      { start: '16:00', end: '16:30', icon: '🕌', title: 'صلاة العصر في المسجد + بدء فتح أبلكيشن طلبات', desc: 'أداء صلاة العصر، التبديل للباقة والشيفت وتشغيل التطبيق في الزون.', type: 'prayer', tag: '#صلاة_العصر' },
      { start: '16:30', end: '18:45', icon: '🚴', title: '[شيفت طلبات مسائي] أوردرات ما بعد الكلية النظري', desc: 'شيفت 4 ساعات مركز للاستفادة من ذروة المساء بدون إرهاق بدني كبير.', type: 'talabat', tag: '#طلبات_مسائي' },
      { start: '18:45', end: '18:55', icon: '🕌', title: 'صلاة المغرب في المسجد فور الأذان (راحة 10 دقائق)', desc: 'استراحة صلاة 10 دقائق فقط في أقرب مسجد والعودة فوراً لاستكمال الشيفت.', type: 'prayer', tag: '#صلاة_المغرب' },
      { start: '18:55', end: '20:30', icon: '🚴', title: 'ختام شيفت السبت والعودة للمنزل', desc: 'تسليم آخر الأوردرات، قفل التطبيق والعودة للبيت.', type: 'talabat', tag: '#ختام_الشيفت' },
      { start: '20:30', end: '21:00', icon: '🕌', title: 'صلاة العشاء في وقتها', desc: 'أداء صلاة العشاء جماعة في المسجد.', type: 'prayer', tag: '#صلاة_العشاء' },
      { start: '21:00', end: '21:45', icon: '🍲', title: 'دش دافئ + عشاء منزلي واسترجاع النشاط', desc: 'دش دافئ للتخلص من تعب اليوم، عشاء صحي ومغذي وغسيل المواعين.', type: 'living', tag: '#عشاء_وراحة' },
      { start: '21:45', end: '22:30', icon: '🛑', title: 'مراجعة سريعة للكود + أذكار النوم وقفل الشاشات', desc: 'تجهيز اللابتوب للايف بكرة الأحد 7:00 ص، قفل الشاشات، وضوء ونوم.', type: 'shutdown', tag: '#حماية_النوم' },
      { start: '22:30', end: '05:30', icon: '💤', title: 'نوم عميق 7 ساعات استعداداً للايف الأحد 7ص', desc: 'نوم عميق وكافي لتكون في قمة طاقتك للايف الـ 12 ساعة غداً.', type: 'sleep', tag: '#نوم_7_ساعات' }
    ]
  },
  friday: {
    id: 'friday',
    name: 'يوم الجمعة (روحانيات وعائلة + طلبات مسائي)',
    badge: '🕌 صلاة الجمعة وسورة الكهف + 🚴 طلبات بعد العصر لـ 8م',
    category: 'friday',
    blocks: [
      { start: '05:30', end: '07:00', icon: '🌅', title: 'الفجر في وقته + قراءة سورة الكهف والأذكار والدعاء', desc: 'صلاة الفجر، قراءة سورة الكهف بتدبر، أذكار الصباح والدعاء المبارك.', type: 'prayer', tag: '#سورة_الكهف' },
      { start: '07:00', end: '09:30', icon: '🧹', title: 'نظافة البيت وترتيب الملابس وتجهيز أكل الأسبوع', desc: 'غسيل الملابس، تنظيف شامل للمطبخ، وترتيب البيت استعداداً للأسبوع.', type: 'living', tag: '#ترتيب_البيت' },
      { start: '09:30', end: '11:00', icon: '💻', title: 'جلسة استكشاف وتطوير برمجيات خفيفة', desc: 'قراءة تقنية، كود خفيف، أو تجربة مكتبة برمجية جديدة بدون ضغط.', type: 'deepwork', tag: '#تطوير_ذاتي' },
      { start: '11:00', end: '13:30', icon: '🕌', title: 'غُسل الجمعة والذهاب للمسجد مبكراً وسماع الخطبة', desc: 'الغسل والتطيب ولبس أحسن الثياب والذهاب للمسجد في وقت مبكر وأداء الصلاة.', type: 'prayer', tag: '#صلاة_الجمعة' },
      { start: '13:30', end: '15:30', icon: '🍲', title: 'وجبة الجمعة العائلية + راحة وجلسة شاي', desc: 'تناول الغداء مع الأسرة والترويح وقضاء وقت اجتماعي دافئ.', type: 'living', tag: '#غداء_الجمعة' },
      { start: '15:30', end: '16:00', icon: '🕌', title: 'صلاة العصر في المسجد + دعاء ساعة الاستجابة', desc: 'أداء صلاة العصر، التضرع بالدعاء في ساعة الاستجابة قبل الغروب.', type: 'prayer', tag: '#صلاة_العصر' },
      { start: '16:00', end: '18:45', icon: '🚴', title: '[شيفت طلبات مسائي] أوردرات العصر والغروب', desc: 'شيفت خفيف ومربح مع نشاط الجمعة المسائي.', type: 'talabat', tag: '#طلبات_الجمعة' },
      { start: '18:45', end: '18:55', icon: '🕌', title: 'صلاة المغرب في وقتها (راحة 10 دقائق)', desc: 'استراحة صلاة 10 دقائق فقط في أقرب مسجد واستئناف التوصيل فوراً.', type: 'prayer', tag: '#صلاة_المغرب' },
      { start: '18:55', end: '20:30', icon: '🚴', title: 'استكمال شيفت طلبات ختام الأسبوع', desc: 'إنهاء آخر طلبات اليوم وقفل التطبيق في تمام 8:30 م.', type: 'talabat', tag: '#أوردرات_المساء' },
      { start: '20:30', end: '21:00', icon: '🕌', title: 'صلاة العشاء في وقتها', desc: 'أداء صلاة العشاء بالمسجد جماعة.', type: 'prayer', tag: '#صلاة_العشاء' },
      { start: '21:00', end: '22:00', icon: '🍲', title: 'عشاء خفيف ومكالمة الأهل والأصدقاء', desc: 'تناول عشاء خفيف، جلسة دردشة وترويح نفسي.', type: 'living', tag: '#أهل_وأصحاب' },
      { start: '22:00', end: '22:30', icon: '🛑', title: 'حماية النوم والاستعداد لبداية الأسبوع', desc: 'قفل الشاشات والتهيئة لنوم هادئ 10:30 م لبدء الأسبوع الجديد بنشاط.', type: 'shutdown', tag: '#حماية_النوم' },
      { start: '22:30', end: '05:30', icon: '💤', title: 'نوم هادئ 7 ساعات', desc: 'نوم 7 ساعات كاملة للاستيقاظ 5:30 ص في أفضل لياقة وتركيز.', type: 'sleep', tag: '#نوم_7_ساعات' }
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

// Initial Habits List (Updated for Live Stream, Talabat, 4 Tracks, College & Content)
const DEFAULT_HABITS = [
  { id: 'h1', text: 'صلاة الفجر في وقتها وأذكار الصباح في المسجد (5:30 ص)', tag: 'فجر_ومسجد' },
  { id: 'h2', text: 'الالتزام الكامل بجدول اليوم (لايف 12س / شيفت طلبات / كلية)', tag: 'التزام_اليوم' },
  { id: 'h3', text: 'صلاة الظهر في وقتها + سناك صحي ومياه', tag: 'صلاة_الظهر' },
  { id: 'h4', text: 'قيلولة الطاقة السريعة في أيام البيت/الأربعاء (20 دقيقة)', tag: 'استشفاء' },
  { id: 'h5', text: 'جلسة البرمجة وتطوير الكود وتوجيه Antigravity', tag: 'برمجة_وكود' },
  { id: 'h6', text: 'صلاة العصر في وقتها فور سماع الأذان', tag: 'صلاة_العصر' },
  { id: 'h7', text: 'إنجاز درس أو وحدة في مسارات التعلم (إنجليزي / UI-UX / ماكنزي)', tag: 'مسارات_تعلم' },
  { id: 'h8', text: 'صلاة المغرب في وقتها فور الأذان', tag: 'صلاة_المغرب' },
  { id: 'h9', text: 'صلاة العشاء جماعة بالمسجد في وقتها', tag: 'صلاة_العشاء' },
  { id: 'h10', text: 'شرب 3 لتر ماء على مدار اليوم (8 أكواب كاملة)', tag: 'صحة' },
  { id: 'h11', text: 'مكالمة الأهل وترويق الشقة وغسيل المواعين (Zero Dishes)', tag: 'أهل_وبيت' },
  { id: 'h12', text: 'Hard Stop وقفل الشاشات ونوم 7 ساعات (10:30 م - 5:30 ص)', tag: 'حماية_النوم' }
];

// Initial Living Alone Scratchpad Seed
const INITIAL_SCRATCHPAD = {
  groceries: [
    { id: 'g1', text: 'طبق بيض طازج (30 بيضة)', done: false },
    { id: 'g2', text: 'صدور فراخ بانيه نظيفة (كيلو ونصف)', done: false },
    { id: 'g3', text: 'علبة شوفان كامل الحبة كبير', done: true },
    { id: 'g4', text: 'زبادي يوناني / لبن خالي الدسم', done: false },
    { id: 'g5', text: 'أكياس خضار مجمد (بسلة وجزر/بروكلي)', done: false },
    { id: 'g6', text: 'صابون أطباق ومسحوق غسالة', done: false }
  ],
  ideas: [
    { id: 'i1', text: 'فكـرة شورتس: إزاي تذاكر 12 ساعة في لايف وتشتغل طلبات', done: false },
    { id: 'i2', text: 'مشروع UI/UX: تصميم شاشات تطبيق موبايل على Figma', done: false },
    { id: 'i3', text: 'ماكنزي فورورد: إتمام تقييم الوحدة الحالية قبل موعد التسليم', done: false },
    { id: 'i4', text: 'برمجة: مراجعة كود Antigravity وإضافة ميزات جديدة', done: true }
  ],
  urgent: [
    { id: 'u1', text: 'شحن الباور بانك وفحص العجلة/السكوتر لشيفت طلبات', done: false },
    { id: 'u2', text: 'تسليم تكليف معمل الكلية العملي ليوم الأربعاء', done: false }
  ]
};

// State Management
let currentSelectedDayType = 'auto'; // 'auto' | 'live_study' | 'talabat_full' | 'wednesday' | 'saturday_college' | 'friday'
let currentWeekCycle = localStorage.getItem('nooreldean_week_cycle') || 'week_a'; // 'week_a' | 'week_b'
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

// Learning Paths & Week Cycle DOM Elements
const pathsTodayFocusEl = document.getElementById('pathsTodayFocus');
const btnCycleWeekA = document.getElementById('btnCycleWeekA');
const btnCycleWeekB = document.getElementById('btnCycleWeekB');
const cycleDescText = document.getElementById('cycleDescText');
const btnFocusCodeSession = document.getElementById('btnFocusCodeSession');

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

// Sound & Audio Toggle
const soundToggleBtn = document.getElementById('soundToggleBtn');
const soundIcon = document.getElementById('soundIcon');
const soundLabel = document.getElementById('soundLabel');

// Focus Pomodoro Timer DOM Elements
const timerDisplay = document.getElementById('timerDisplay');
const timerStateBadge = document.getElementById('timerStateBadge');
const timerTaskInput = document.getElementById('timerTaskInput');
const timerToggleBtn = document.getElementById('timerToggleBtn');
const timerToggleLabel = document.getElementById('timerToggleLabel');
const timerResetBtn = document.getElementById('timerResetBtn');
const timerProgressFill = document.getElementById('timerProgressFill');
const timerModeBtns = document.querySelectorAll('.timer-mode-btn');

// Hydration Tracker DOM Elements
const waterCupsRow = document.getElementById('waterCupsRow');
const waterConsumedCount = document.getElementById('waterConsumedCount');
const waterLitersText = document.getElementById('waterLitersText');
const addCupBtn = document.getElementById('addCupBtn');
const resetWaterBtn = document.getElementById('resetWaterBtn');

// Scratchpad Hub DOM Elements
const scratchTabs = document.querySelectorAll('.scratch-tab');
const scratchAddForm = document.getElementById('scratchAddForm');
const scratchInput = document.getElementById('scratchInput');
const scratchList = document.getElementById('scratchList');
const countGroceriesEl = document.getElementById('countGroceries');
const countIdeasEl = document.getElementById('countIdeas');
const countUrgentEl = document.getElementById('countUrgent');
const clearCompletedScratchBtn = document.getElementById('clearCompletedScratchBtn');

// Helpers: Time Parsing & Current Day Detection
// Helpers: Time Parsing & Current Day Detection
function getTodayDayScheduleKey() {
  const dayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const cycle = localStorage.getItem('nooreldean_week_cycle') || 'week_a';

  if (dayIndex === 0 || dayIndex === 2) return 'live_study'; // Sun, Tue (Live Study With Me 7am-7pm)
  if (dayIndex === 1 || dayIndex === 4) return 'talabat_full'; // Mon, Thu (Talabat Shift 8am-8pm)
  if (dayIndex === 3) return 'wednesday'; // Wed (College + Shorts Content)
  if (dayIndex === 5) return 'friday'; // Fri (Family + Talabat Evening)
  if (dayIndex === 6) { // Sat
    return cycle === 'week_a' ? 'saturday_college' : 'talabat_full';
  }
  return 'live_study';
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
  const sched = SCHEDULES[scheduleKey];

  currentDayBadgeEl.textContent = `اليوم: ${dayName} (${sched.name})`;
  currentDateStrEl.textContent = now.toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' });
  autoTabPillEl.textContent = dayName;

  // Auto trigger check for shutdown mode after 22:30
  if (now.getHours() >= 22 && now.getMinutes() >= 30 && !sessionStorage.getItem('zenDismissedTonight')) {
    // Soft reminder can be used
  }
}

// Learning Paths Hub & Week Cycle Switcher
function initWeekCycleAndLearningHub() {
  const savedCycle = localStorage.getItem('nooreldean_week_cycle') || 'week_a';
  currentWeekCycle = savedCycle;
  updateWeekCycleUI(savedCycle);

  if (btnCycleWeekA) {
    btnCycleWeekA.addEventListener('click', () => {
      setWeekCycle('week_a');
    });
  }
  if (btnCycleWeekB) {
    btnCycleWeekB.addEventListener('click', () => {
      setWeekCycle('week_b');
    });
  }

  if (btnFocusCodeSession) {
    btnFocusCodeSession.addEventListener('click', () => {
      if (timerTaskInput) timerTaskInput.value = 'كود البرمجة وبناء المشاريع مع AI';
      const btn60 = document.querySelector('.timer-mode-btn[data-time="60"]');
      if (btn60) btn60.click();
      if (focusTimerWidget) focusTimerWidget.scrollIntoView({ behavior: 'smooth' });
      showToast('تم ضبط جلسة كود برمجة 60 دقيقة 🚀');
    });
  }

  updateLearningFocus();
}

function setWeekCycle(cycle) {
  currentWeekCycle = cycle;
  localStorage.setItem('nooreldean_week_cycle', cycle);
  updateWeekCycleUI(cycle);
  renderTimeline();
  updateActiveBlock();
  updateClock();
  showToast(cycle === 'week_a' ? 'تم التبديل إلى أسبوع (أ): كلية السبت + الأربعاء' : 'تم التبديل إلى أسبوع (ب): كلية الأربعاء فقط');
}

function updateWeekCycleUI(cycle) {
  if (btnCycleWeekA && btnCycleWeekB) {
    if (cycle === 'week_a') {
      btnCycleWeekA.classList.add('active');
      btnCycleWeekB.classList.remove('active');
      if (cycleDescText) cycleDescText.textContent = 'أسبوع (أ): السبت كلية نظري (8-4) + طلبات مسائي (4:30-8:30) | الأربعاء كلية ومونتاج';
    } else {
      btnCycleWeekA.classList.remove('active');
      btnCycleWeekB.classList.add('active');
      if (cycleDescText) cycleDescText.textContent = 'أسبوع (ب): السبت شيفت طلبات كامل (8ص-8م) | الأربعاء فقط كلية ومونتاج';
    }
  }
}

function updateLearningFocus() {
  if (!pathsTodayFocusEl) return;
  const dayIndex = new Date().getDay();
  if (dayIndex === 0 || dayIndex === 2) {
    pathsTodayFocusEl.textContent = '🔴 اليوم لايف 12 ساعة: إنجاز الـ 4 مسارات بالكامل!';
    pathsTodayFocusEl.style.color = '#f87171';
  } else if (dayIndex === 1 || dayIndex === 4 || dayIndex === 6) {
    pathsTodayFocusEl.textContent = '🚴 يوم شيفت طلبات: متابعة كود الـ AI وسماع بودكاست إنجليزي';
    pathsTodayFocusEl.style.color = '#fb923c';
  } else if (dayIndex === 3) {
    pathsTodayFocusEl.textContent = '🎬 يوم الكلية والمونتاج: تصوير ونشر دفعة الشورتس';
    pathsTodayFocusEl.style.color = '#38bdf8';
  } else {
    pathsTodayFocusEl.textContent = '🕌 يوم الجمعة المبارك: سورة الكهف والراحة وشيفت العصر';
    pathsTodayFocusEl.style.color = '#34d399';
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
      if (block.type !== currentFilter) return;
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
        AudioService.playChime();
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

// ==========================================================================
// Audio & Chime Service (Pure Web Audio API Synthesizer)
// ==========================================================================
const AudioService = {
  ctx: null,
  isMuted: localStorage.getItem('nooreldean_sound_muted') === 'true',
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('nooreldean_sound_muted', String(this.isMuted));
    this.updateUI();
    return this.isMuted;
  },
  updateUI() {
    if (!soundToggleBtn) return;
    if (this.isMuted) {
      soundToggleBtn.classList.add('is-muted');
      if (soundIcon) soundIcon.textContent = '🔇';
      if (soundLabel) soundLabel.textContent = 'الصوت مكتوم';
    } else {
      soundToggleBtn.classList.remove('is-muted');
      if (soundIcon) soundIcon.textContent = '🔔';
      if (soundLabel) soundLabel.textContent = 'الصوت مفعّل';
    }
  },
  playChime() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.38);
    } catch (e) {}
  },
  playAlarm() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const now = this.ctx.currentTime + (idx * 0.14);
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      });
    } catch (e) {}
  }
};

// Sound toggle button click
if (soundToggleBtn) {
  soundToggleBtn.addEventListener('click', () => {
    const muted = AudioService.toggleMute();
    showToast(muted ? 'تم كتم التنبيهات الصوتية' : 'تم تفعيل التنبيهات الصوتية 🔔');
    if (!muted) AudioService.playChime();
  });
}

// ==========================================================================
// Focus Deep Work Pomodoro Timer
// ==========================================================================
let timerTotalSeconds = 25 * 60;
let timerRemainingSeconds = 25 * 60;
let timerInterval = null;
let timerIsRunning = false;

function formatTimerDigits(totalSec) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateTimerDisplay() {
  if (timerDisplay) {
    timerDisplay.textContent = formatTimerDigits(timerRemainingSeconds);
  }
  if (timerProgressFill) {
    const pct = Math.max(0, Math.min(100, (timerRemainingSeconds / timerTotalSeconds) * 100));
    timerProgressFill.style.width = `${pct}%`;
  }
}

function toggleTimer() {
  if (timerIsRunning) {
    // Pause
    clearInterval(timerInterval);
    timerIsRunning = false;
    timerToggleBtn.classList.add('is-paused');
    timerToggleBtn.querySelector('.btn-icon').textContent = '▶️';
    timerToggleLabel.textContent = 'استئناف';
    timerStateBadge.textContent = 'مؤقت متوقف';
    timerStateBadge.classList.remove('is-running');
  } else {
    // Start
    AudioService.init();
    timerIsRunning = true;
    timerToggleBtn.classList.remove('is-paused');
    timerToggleBtn.querySelector('.btn-icon').textContent = '⏸️';
    timerToggleLabel.textContent = 'إيقاف مؤقت';
    timerStateBadge.textContent = 'جلسة تركيز جارية ⚡';
    timerStateBadge.classList.add('is-running');

    timerInterval = setInterval(() => {
      if (timerRemainingSeconds > 0) {
        timerRemainingSeconds--;
        updateTimerDisplay();
      } else {
        // Complete!
        clearInterval(timerInterval);
        timerIsRunning = false;
        timerToggleBtn.querySelector('.btn-icon').textContent = '▶️';
        timerToggleLabel.textContent = 'بدء التركيز';
        timerStateBadge.textContent = 'انتهت الجلسة بنجاح! 🎉';
        timerStateBadge.classList.remove('is-running');
        AudioService.playAlarm();
        const taskName = (timerTaskInput && timerTaskInput.value.trim()) || 'جلستك';
        showToast(`🎉 عاش يا بطل! أتممت بنجاح: ${taskName}`);
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerIsRunning = false;
  timerRemainingSeconds = timerTotalSeconds;
  if (timerToggleBtn) {
    timerToggleBtn.classList.remove('is-paused');
    timerToggleBtn.querySelector('.btn-icon').textContent = '▶️';
    timerToggleLabel.textContent = 'بدء التركيز';
  }
  if (timerStateBadge) {
    timerStateBadge.textContent = 'جاهز للبدء';
    timerStateBadge.classList.remove('is-running');
  }
  updateTimerDisplay();
}

function setTimerPreset(minutes) {
  timerTotalSeconds = minutes * 60;
  resetTimer();
}

if (timerToggleBtn) {
  timerToggleBtn.addEventListener('click', toggleTimer);
}

if (timerResetBtn) {
  timerResetBtn.addEventListener('click', resetTimer);
}

timerModeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    timerModeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const mins = parseInt(btn.dataset.time, 10);
    setTimerPreset(mins);
    showToast(`تم ضبط المؤقت على ${mins} دقيقة`);
  });
});

// ==========================================================================
// Hydration Tracker (Target 3 Liters / 8 Cups)
// ==========================================================================
function getWaterStorageKey() {
  const todayStr = new Date().toISOString().split('T')[0];
  return `nooreldean_water_${todayStr}`;
}

function getWaterCount() {
  const saved = localStorage.getItem(getWaterStorageKey());
  return saved ? parseInt(saved, 10) || 0 : 0;
}

function saveWaterCount(count) {
  const clamped = Math.max(0, Math.min(8, count));
  localStorage.setItem(getWaterStorageKey(), String(clamped));
  renderHydration();
}

function renderHydration() {
  const count = getWaterCount();
  if (waterConsumedCount) waterConsumedCount.textContent = count;
  const liters = (count * 0.375).toFixed(1);
  if (waterLitersText) waterLitersText.textContent = `(${liters} لتر)`;

  if (!waterCupsRow) return;
  waterCupsRow.innerHTML = '';

  for (let i = 1; i <= 8; i++) {
    const isDrank = i <= count;
    const cupBtn = document.createElement('button');
    cupBtn.type = 'button';
    cupBtn.className = `water-cup-btn ${isDrank ? 'is-drank' : ''}`;
    cupBtn.title = `كوب ${i}: 375 مل`;
    cupBtn.innerHTML = `
      <span class="water-cup-icon">💧</span>
      <span class="water-cup-label">${i}</span>
    `;

    cupBtn.addEventListener('click', () => {
      const newCount = (count === i) ? i - 1 : i;
      saveWaterCount(newCount);
      if (newCount > count) {
        AudioService.playChime();
        if (newCount === 8) {
          showToast('🌊 وحش! حققت هدف الـ 3 لتر ماء اليوم كاملين!');
        } else {
          showToast(`💧 كوب ${newCount} تم شربه! استمر.`);
        }
      }
    });

    waterCupsRow.appendChild(cupBtn);
  }
}

if (addCupBtn) {
  addCupBtn.addEventListener('click', () => {
    const current = getWaterCount();
    if (current < 8) {
      saveWaterCount(current + 1);
      AudioService.playChime();
      showToast(`💧 كوب ${current + 1} تم شربه! عاش.`);
      if (current + 1 === 8) {
        showToast('🌊 أسطورة! أكملت 3 لتر ماء كاملة لليوم!');
      }
    } else {
      showToast('أتممت الـ 8 أكواب كاملة لليوم بحمد الله!');
    }
  });
}

if (resetWaterBtn) {
  resetWaterBtn.addEventListener('click', () => {
    if (confirm('هل ترغب في إعادة ضبط عداد شرب الماء لليوم؟')) {
      saveWaterCount(0);
      showToast('تم تصفير عداد شرب الماء.');
    }
  });
}

// ==========================================================================
// Living Alone Scratchpad & Groceries Hub
// ==========================================================================
let currentScratchTab = 'groceries';

function getScratchData() {
  const saved = localStorage.getItem('nooreldean_scratchpad_data');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return INITIAL_SCRATCHPAD;
    }
  }
  return INITIAL_SCRATCHPAD;
}

function saveScratchData(data) {
  localStorage.setItem('nooreldean_scratchpad_data', JSON.stringify(data));
  renderScratchpad();
}

function updateScratchBadges(data) {
  if (countGroceriesEl) countGroceriesEl.textContent = data.groceries.filter(i => !i.done).length;
  if (countIdeasEl) countIdeasEl.textContent = data.ideas.filter(i => !i.done).length;
  if (countUrgentEl) countUrgentEl.textContent = data.urgent.filter(i => !i.done).length;
}

function renderScratchpad() {
  const data = getScratchData();
  updateScratchBadges(data);

  if (!scratchList) return;
  scratchList.innerHTML = '';

  const items = data[currentScratchTab] || [];

  if (items.length === 0) {
    scratchList.innerHTML = `
      <li style="text-align:center; color:var(--text-dim); padding:1rem; font-size:0.8rem;">
        القائمة فارغة حالياً. أضف عناصر جديدة من النموذج بالأعلى ✍️
      </li>
    `;
    return;
  }

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = `scratch-item ${item.done ? 'is-done' : ''}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'scratch-item-content';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'scratch-item-checkbox';
    checkbox.checked = !!item.done;

    const span = document.createElement('span');
    span.className = 'scratch-item-text';
    span.textContent = item.text;

    contentDiv.appendChild(checkbox);
    contentDiv.appendChild(span);

    contentDiv.addEventListener('click', (e) => {
      e.stopPropagation();
      item.done = !item.done;
      saveScratchData(data);
      if (item.done) AudioService.playChime();
    });

    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'scratch-delete-btn';
    delBtn.innerHTML = '&times;';
    delBtn.title = 'حذف هذا العنصر';
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      items.splice(index, 1);
      saveScratchData(data);
      showToast('تم حذف العنصر بنجاح.');
    });

    li.appendChild(contentDiv);
    li.appendChild(delBtn);
    scratchList.appendChild(li);
  });
}

// Scratchpad category tabs
scratchTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    scratchTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentScratchTab = tab.dataset.tab;

    // Update input placeholder according to tab
    if (scratchInput) {
      if (currentScratchTab === 'groceries') {
        scratchInput.placeholder = 'أضف غرض جديد للسوبرماركت (مثال: بيض، شوفان، صدور فراخ)...';
      } else if (currentScratchTab === 'ideas') {
        scratchInput.placeholder = 'أضف فكرة كود أو ميزة سريعة (مثال: تجربة Supabase RPC)...';
      } else {
        scratchInput.placeholder = 'أضف مهمة طارئة (مثال: دفع فاتورة، تسليم شيت)...';
      }
    }
    renderScratchpad();
  });
});

// Add new item to current scratchpad tab
if (scratchAddForm) {
  scratchAddForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = scratchInput.value.trim();
    if (!text) return;

    const data = getScratchData();
    if (!data[currentScratchTab]) data[currentScratchTab] = [];

    data[currentScratchTab].unshift({
      id: `item-${Date.now()}`,
      text: text,
      done: false
    });

    saveScratchData(data);
    scratchInput.value = '';
    showToast('تمت الإضافة بنجاح!');
  });
}

// Clear completed items from current tab
if (clearCompletedScratchBtn) {
  clearCompletedScratchBtn.addEventListener('click', () => {
    const data = getScratchData();
    const beforeCount = (data[currentScratchTab] || []).length;
    data[currentScratchTab] = (data[currentScratchTab] || []).filter(item => !item.done);
    const removedCount = beforeCount - data[currentScratchTab].length;

    if (removedCount > 0) {
      saveScratchData(data);
      showToast(`تم مسح ${removedCount} عنصر مكتمل بنجاح!`);
    } else {
      showToast('لا توجد عناصر مكتملة لمسحها.');
    }
  });
}

// ==========================================================================
// Initialization Loop
// ==========================================================================
function init() {
  AudioService.updateUI();
  initWeekCycleAndLearningHub();
  updateClock();
  renderTimeline();
  updateActiveBlock();
  loadHabits();
  renderContentIdeas();
  updateTimerDisplay();
  renderHydration();
  renderScratchpad();

  // Tickers
  setInterval(updateClock, 1000);
  setInterval(updateActiveBlock, 15000); // Check active block every 15s
}

document.addEventListener('DOMContentLoaded', init);
