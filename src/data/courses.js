export const courses = [
  {
    id: 'complete-web-dev',
    title: 'الدليل الكامل لمطوّر الويب 2023',
    image: '/photo.jpg',
    instructor: { name: 'جاري هوكينز', role: 'مدرّس أول', avatar: '/People/man.jpg' },
    category: 'تطوير',
    rating: 5,
    reviews: 82,
    price: 473,
    features: {
      duration: '20 ساعة',
      lessons: 15,
      students: '15 طالبًا',
      videos: '10 ساعات',
      level: 'متقدم',
      language: 'الإنجليزية',
    },
  },
  {
    id: 'react-advanced',
    title: 'React الأنماط المتقدمة والأداء',
    image: '/photo.jpg',
    instructor: { name: 'سارة ميلر', role: 'مهندسة واجهات أمامية', avatar: '/People/man2.jpg' },
    category: 'الواجهات الأمامية',
    rating: 5,
    reviews: 40,
    price: 299,
    features: {
      duration: '12 ساعة',
      lessons: 10,
      students: '22 طالبًا',
      videos: '8 ساعات',
      level: 'متوسط',
      language: 'الإنجليزية',
    },
  },
  {
    id: 'node-master',
    title: 'Node.js ماستر كلاس: واجهات وخدمات',
    image: '/photo.jpg',
    instructor: { name: 'خالد سعيد', role: 'مهندس خلفيات', avatar: '/People/man3.jpg' },
    category: 'الخلفيات',
    rating: 4,
    reviews: 31,
    price: 259,
    features: {
      duration: '16 ساعة',
      lessons: 12,
      students: '5 طلاب',
      videos: '11 ساعة',
      level: 'متوسط',
      language: 'العربية',
    },
  },
]

export function getCourseById(id) {
  return courses.find(c => c.id === id)
}


