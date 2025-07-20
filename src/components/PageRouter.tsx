"use client"
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/LoadingSpinner';

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

const MyCourses = dynamic(() => import('@/app/mycourses/page'), {
  loading: () => <LoadingSpinner size="large" text="جاري تحميل دوراتي ..." />,
  ssr: true
});

const InformationPage = dynamic(() => import('@/app/information/page'), {
  loading: () => <LoadingSpinner size="large" text="جاري تحميل محتوى المنصة ..." />,
  ssr: true
});

const MySales = dynamic(() => import('@/app/mysales/page'), {
  loading: () => <LoadingSpinner size="large" text="جاري تحميل مبيعاتي ..." />,
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
  if (pathname === '/information') {
    return <InformationPage />;
  }

  if (pathname === '/mycourses') {
    return <MyCourses />;
  }
  if (pathname === '/mysales') {
    return <MySales />;
  }
  // Default to home page
  return <HomePage />;
} 
