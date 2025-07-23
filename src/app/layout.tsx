import "./globals.css";
import { Cabin } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';

const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <ClientLayout />
      </body>
    </html>
  );
}
