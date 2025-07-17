import MainLayout from "@/mainlayout/MainLayout";
import "./globals.css";
import { Cabin } from 'next/font/google';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
