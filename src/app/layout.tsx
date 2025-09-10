import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/500.css';
import '@fontsource/cairo/600.css';
import '@fontsource/cairo/700.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl">
      
      <body style={{ fontFamily: 'Cairo, sans-serif' }}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
