import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/500.css';
import '@fontsource/cairo/600.css';
import '@fontsource/cairo/700.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الماهر - منصة التعليم الإلكتروني',
  description: 'منصة تعليمية عربية حديثة تقدم دورات متنوعة، مدونة تقنية، وملفات تعريف للمدربين مع دعم كامل للغة العربية وواجهة مستخدم عصرية.',
  keywords: ['تعليم إلكتروني', 'دورات', 'مدونة', 'عربي', 'الماهر'],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl">
      
      <body style={{ 
        fontFamily: 'Cairo, sans-serif', 
        margin: 0, 
        padding: 0, 
        boxSizing: 'border-box',
        overflowX: 'hidden'
      }}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
