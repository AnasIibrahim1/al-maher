import React from "react";
import Image from "next/image";
import General_Button from "../Buttons/General_Button";

const Header = () => {
  return (
    <header className="border-b border-[#e4e4e4]">
      <div className="w-full">
      <div className="flex w-full items-center pt-2 pb-2 px-20  justify-around h-20">
  <div className="flex-1 flex justify-start">
    <Image src="/logos/blue_one.png" alt="logo" width={100} height={100} />
  </div>
  <div className="flex-1 flex justify-center">
    <ul className="flex flex-row gap-5 h-full items-center">
      <li className="text-[#6D737A] font-semibold cursor-pointer hover:text-[#169FC6]">الرئيسية</li>
      <li className="text-[#6D737A] font-semibold cursor-pointer hover:text-[#169FC6]">محتوى المنصة</li>
      <li className="text-[#6D737A] font-semibold cursor-pointer hover:text-[#169FC6]">تواصل معنا</li>
    </ul>
  </div>
  <div className="flex-1 flex justify-end gap-5">
    <General_Button bgColor="#169FC6" text="تسجيل الدخول" href="/h" />
    <General_Button bgColor="" color="black" text="إنشاء حساب" href="/h" />
  </div>
</div>
      </div>  
    </header>
  );
};

export default Header; 