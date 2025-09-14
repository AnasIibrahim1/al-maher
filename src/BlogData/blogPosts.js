// Blog Posts Data
export const blogPosts = [
  {
    id: 1,
    title: "المبادئ التوجيهية الكاملة لمطوري الويب 2023",
    category: "تطوير",
    date: new Date("2023-12-15"),
    image: "/photo.jpg",
    author: "أنس إبراهيم حلمي",
    readTime: "5 دقائق قراءة",
    description: `
      في عالم التطوير السريع، يعد فهم المبادئ التوجيهية الحديثة أمراً ضرورياً لكل مطور ويب. 
      هذا المقال يغطي أحدث الاتجاهات والتقنيات التي يجب على كل مطور معرفتها في عام 2023.
      
      سنتناول في هذا المقال:
      - أحدث معايير HTML5 و CSS3
      - تقنيات JavaScript المتقدمة
      - أفضل الممارسات في React و Vue.js
      - أدوات التطوير الحديثة
      - استراتيجيات التحسين والأداء
      
      هذه المبادئ التوجيهية ستمكنك من بناء تطبيقات ويب عالية الجودة وسريعة الأداء.
    `,
    tags: ["تطوير", "ويب", "JavaScript", "React"]
  },
  {
    id: 2,
    title: "أحدث اتجاهات التصميم في 2023",
    category: "تصميم",
    date: new Date("2023-12-10"),
    image: "/photo.jpg",
    author: "سارة أحمد",
    readTime: "7 دقائق قراءة",
    description: `
      التصميم في تطور مستمر، وكل عام يحمل معه اتجاهات جديدة ومثيرة. 
      في هذا المقال، سنستكشف أحدث الاتجاهات في تصميم الواجهات والمواقع الإلكترونية.
      
      الاتجاهات التي سنتناولها:
      - التصميم الداكن والألوان الجريئة
      - الخطوط المخصصة والطباعة الإبداعية
      - التصميم التفاعلي والحركي
      - التصميم الشامل والسهل الوصول إليه
      
      هذه الاتجاهات ستساعدك في إنشاء تصاميم حديثة وجذابة.
    `,
    tags: ["تصميم", "UI/UX", "ألوان", "خطوط"]
  },
  {
    id: 3,
    title: "مستقبل الذكاء الاصطناعي في التطوير",
    category: "ذكاء اصطناعي",
    date: new Date("2023-12-05"),
    image: "/photo.jpg",
    author: "محمد علي",
    readTime: "8 دقائق قراءة",
    description: `
      الذكاء الاصطناعي يغير عالم التطوير بشكل جذري. من أدوات التطوير الآلي إلى 
      المساعدات البرمجية، نحن نشهد ثورة حقيقية في كيفية كتابة البرمجيات.
      
      في هذا المقال سنغطي:
      - أدوات التطوير المدعومة بالذكاء الاصطناعي
      - مساعدات البرمجة مثل GitHub Copilot
      - اختبار الكود الآلي
      - تحليل الأداء الذكي
      
      اكتشف كيف يمكن للذكاء الاصطناعي أن يجعل عملك كمطور أكثر كفاءة وإبداعاً.
    `,
    tags: ["ذكاء اصطناعي", "تطوير", "أتمتة", "GitHub Copilot"]
  },
  {
    id: 4,
    title: "أفضل الممارسات في أمان التطبيقات",
    category: "أمان",
    date: new Date("2023-11-28"),
    image: "/photo.jpg",
    author: "فاطمة محمود",
    readTime: "6 دقائق قراءة",
    description: `
      الأمان في التطبيقات ليس مجرد ميزة إضافية، بل هو ضرورة مطلقة. 
      مع تزايد الهجمات السيبرانية، أصبح تأمين التطبيقات أكثر أهمية من أي وقت مضى.
      
      سنتناول في هذا المقال:
      - المصادقة والتفويض الآمن
      - تشفير البيانات الحساسة
      - حماية من هجمات SQL Injection
      - أفضل الممارسات في إدارة الجلسات
      
      تعلم كيف تحمي تطبيقاتك من التهديدات السيبرانية.
    `,
    tags: ["أمان", "تشفير", "مصادقة", "حماية"]
  },
  {
    id: 5,
    title: "تحسين أداء التطبيقات الويب",
    category: "أداء",
    date: new Date("2023-11-20"),
    image: "/photo.jpg",
    author: "أحمد حسن",
    readTime: "9 دقائق قراءة",
    description: `
      الأداء السريع للتطبيقات الويب هو مفتاح نجاح أي موقع إلكتروني. 
      المستخدمون يتوقعون تحميلاً سريعاً وتفاعلاً فورياً مع الواجهات.
      
      في هذا المقال سنتعلم:
      - تحسين الصور والملفات
      - استخدام CDN للتوزيع
      - تحسين قاعدة البيانات
      - تقنيات التحميل المؤجل
      
      اكتشف الأسرار لجعل موقعك أسرع وأكثر كفاءة.
    `,
    tags: ["أداء", "تحسين", "سرعة", "CDN"]
  },
  {
    id: 6,
    title: "دليل شامل لـ React 18",
    category: "تطوير",
    date: new Date("2023-11-15"),
    image: "/photo.jpg",
    author: "نور الدين",
    readTime: "12 دقائق قراءة",
    description: `
      React 18 جلب معه تحسينات كبيرة وميزات جديدة تفتح آفاقاً جديدة للمطورين. 
      من Concurrent Features إلى Server Components، هناك الكثير لنتعلمه.
      
      في هذا الدليل الشامل سنغطي:
      - Concurrent Rendering
      - Automatic Batching
      - Suspense Improvements
      - Server Components
      - React DevTools الجديدة
      
      كن على اطلاع بأحدث ما في عالم React.
    `,
    tags: ["React", "JavaScript", "Frontend", "React 18"]
  }
];

// Categories Data
export const categories = [
  { id: 1, name: "تطوير", color: "#4F5DE4", count: 2 },
  { id: 2, name: "تصميم", color: "#F57005", count: 1 },
  { id: 3, name: "ذكاء اصطناعي", color: "#28a745", count: 1 },
  { id: 4, name: "أمان", color: "#dc3545", count: 1 },
  { id: 5, name: "أداء", color: "#ffc107", count: 1 }
];

// Calculate actual counts from blog posts
export const getCategoryCounts = () => {
  const counts = {};
  blogPosts.forEach(post => {
    counts[post.category] = (counts[post.category] || 0) + 1;
  });
  
  return categories.map(category => ({
    ...category,
    count: counts[category.name] || 0
  }));
};

// Helper Functions
export const getBlogPostById = (id) => {
  return blogPosts.find(post => post.id === parseInt(id));
};

export const getBlogPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

export const getRelatedPosts = (currentId, limit = 3) => {
  const currentPost = getBlogPostById(currentId);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => 
      post.id !== currentId && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};
