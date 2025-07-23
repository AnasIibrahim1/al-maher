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

const VipPage = dynamic(() => import('@/app/vip/page'), {
  loading: () => <LoadingSpinner size="large" text="جاري تحميل دوراتي ..." />,
  ssr: true
});

const TwgeehPage = dynamic(() => import('@/app/twgeeh/page'), {
  loading: () => <LoadingSpinner size="large" text="جاري تحميل محتوى المنصة ..." />,
  ssr: true
});

const BTCPage = dynamic(() => import('@/app/btc/page'), {
  loading: () => <LoadingSpinner size="large" text="جاري تحميل مبيعاتي ..." />,
  ssr: true
});

const PackagePage = dynamic(() => import('@/app/package/page'), {
  loading: () => <LoadingSpinner size="large" text="جاري تحميل مبيعاتي ..." />,
  ssr: true
});

const BasicPage = dynamic(() => import('@/app/basic/page'), {
  loading: () => <LoadingSpinner size="large" text="جاري تحميل مبيعاتي ..." />,
  ssr: true
});

const BasicPackagePage = dynamic(() => import('@/app/basicPackage/page'), {
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
  if (pathname === '/twgeeh') {
    return <TwgeehPage />;
  }

  if (pathname === '/vip') {
    return <VipPage />;
  }
  if (pathname === '/btc') {
    return <BTCPage />;
  }
  if (pathname === '/package') {
    return <PackagePage />;
  }
  if (pathname === '/basic') {
    return <BasicPage />;
  }
  if (pathname === '/basicPackage') {
    return <BasicPackagePage />;
  }
  // Default to home page
  return <HomePage />;
} 
