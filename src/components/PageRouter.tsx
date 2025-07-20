"use client"
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/LoadingSpinner';

// Lazy load pages
const HomePage = dynamic(() => import('@/app/page'), {
  loading: () => <LoadingSpinner size="large" text="جاري تحميل الصفحة الرئيسية..." />,
  ssr: true
});

const SignPage = dynamic(() => import('@/app/sign/page'), {
  loading: () => <LoadingSpinner size="large" text="جاري تحميل صفحة تسجيل الدخول..." />,
  ssr: true
});

const ContactPage = dynamic(() => import('@/app/contact/page'), {
  loading: () => <LoadingSpinner size="large" text="جاري تحميل صفحة التواصل..." />,
  ssr: true
});

const CoursesPage = dynamic(() => import('@/app/courses/page'), {
  loading: () => <LoadingSpinner size="large" text="جاري تحميل صفحة المحتوى..." />,
  ssr: true
});

export default function PageRouter() {
  const pathname = usePathname();

  // Route to appropriate page
  if (pathname === '/sign') {
    return <SignPage />;
  }

  if (pathname === '/contact') {
    return <ContactPage />;
  }

  if (pathname === '/courses') {
    return <CoursesPage />;
  }

  // Default to home page
  return <HomePage />;
} 