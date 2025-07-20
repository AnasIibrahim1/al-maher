"use client"
import { usePathname } from 'next/navigation';
import MainLayout from '@/lazy/MainLayout';
import PageRouter from './PageRouter';

export default function ClientLayout() {
  const pathname = usePathname();
  const showFooter = pathname !== '/sign' && pathname !== '/contact';

  return (
    <MainLayout showFooter={showFooter}>
      <PageRouter />
    </MainLayout>
  );
} 