"use client"
import React, { useState } from "react";
import Image from "next/image";
import General_Button from "../Buttons/General_Button";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

const Header = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  // دالة لتحديد إذا كان العنصر نشط
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path) || false;
  };

  return (
    <header className="border-b border-[#e4e4e4]">
      <div className="w-full">
        <div className="flex w-full items-center pt-2 pb-2 px-20 justify-around h-20">
          <div className="flex-1 flex justify-start">
            <Image src="/logos/blue_one.png" alt="logo" width={100} height={100} />
          </div>
          
          <div className="flex-1 flex justify-center">
            <ul className="flex flex-row gap-5 h-full items-center">
              <li className={`font-semibold cursor-pointer transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-[#169FC6] ' 
                  : 'text-[#6D737A] hover:text-[#169FC6]'
              }`}>
                <Link href="/">الرئيسية</Link>
              </li>
              <li className={`font-semibold cursor-pointer transition-colors duration-200 ${
                isActive('/information') 
                  ? 'text-[#169FC6] ' 
                  : 'text-[#6D737A] hover:text-[#169FC6]'
              }`}>
                <Link href="/information">محتوى المنصة</Link>
              </li>
              {isLoggedIn && (
                <>
                  <li className={`font-semibold cursor-pointer transition-colors duration-200 ${
                    isActive('/mycourses') 
                      ? 'text-[#169FC6] ' 
                      : 'text-[#6D737A] hover:text-[#169FC6]'
                  }`}>
                    <Link href="/mycourses">دوراتي</Link>
                  </li>
                  <li className={`font-semibold cursor-pointer transition-colors duration-200 ${
                    isActive('/mysales') 
                      ? 'text-[#169FC6] ' 
                      : 'text-[#6D737A] hover:text-[#169FC6]'
                  }`}>
                    <Link href="/mysales">مبيعاتي</Link>
                  </li>
                </>
              )}
              <li className={`font-semibold cursor-pointer transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-[#169FC6] ' 
                  : 'text-[#6D737A] hover:text-[#169FC6]'
              }`}>
                <Link href="/contact">تواصل معنا</Link>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 flex justify-end gap-5">
            {!isLoggedIn ? (
              <>
                <Link href="/sign?type=login">
                  <General_Button bgColor="#169FC6" text="تسجيل الدخول" />
                </Link>
                <Link href="/sign?type=register">
                  <General_Button bgColor="" color="black" text="إنشاء حساب" />
                </Link>
              </>
            ) : (
              <div className="relative">
                <div 
                  className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >

                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-800 text-left">
                      {user?.name || "المستخدم"}
                    </div>
                    <div className="text-xs text-gray-500">
                      {user?.email || "user@example.com"}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#169FC6]">
                    <Image 
                      src={user?.avatar || "/ppl/ppl.jpg"} 
                      alt="صورة المستخدم" 
                      width={40} 
                      height={40}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={`transition-transform ${showUserMenu ? 'rotate-180' : ''}`}>
                  </div>
                </div>
                
                {/* قائمة المستخدم */}
                {showUserMenu && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      <Link 
                        href="/profile" 
                        className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                          isActive('/profile') 
                            ? 'text-[#169FC6] bg-blue-50 border-r-2 border-[#169FC6]' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        الملف الشخصي
                      </Link>
                      <Link 
                        href="/mycourses" 
                        className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                          isActive('/mycourses') 
                            ? 'text-[#169FC6] bg-blue-50 border-r-2 border-[#169FC6]' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        دوراتي
                      </Link>
                      <Link 
                        href="/mysales" 
                        className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                          isActive('/mysales') 
                            ? 'text-[#169FC6] bg-blue-50 border-r-2 border-[#169FC6]' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        مبيعاتي
                      </Link>
                      <Link 
                        href="/settings" 
                        className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                          isActive('/settings') 
                            ? 'text-[#169FC6] bg-blue-50 border-r-2 border-[#169FC6]' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        الإعدادات
                      </Link>
                      <hr className="my-1" />
                      <button 
                        onClick={handleLogout}
                        className="block w-full text-right px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                      >
                        تسجيل الخروج
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* إغلاق القائمة عند النقر خارجها */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </header>
  );
};

export default Header; 