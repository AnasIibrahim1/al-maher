"use client"
import MainLayout from "@/mainlayout/MainLayout";
import "./globals.css";
import { Cabin } from 'next/font/google';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showFooter = pathname !== '/sign';

  return (
    <html lang="en">
      <body>
        <MainLayout showFooter={showFooter}>{children}</MainLayout>
      </body>
    </html>
  );
}
