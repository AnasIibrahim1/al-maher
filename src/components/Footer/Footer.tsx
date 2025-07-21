import React from "react";
import Image from "next/image";
import GeneralButton from "../Buttons/General_Button";
import Paragraph from "../Paragraphs/small";


const Footer = () => {
  return (
    <footer className="w-full" style={{backgroundImage: 'url(/backgrounds/footer.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '50vh', paddingTop: '10vh'}}>
      <div className="h-full flex flex-row justify-around items-center gap-5" >
        <div className="m-auto  h-full flex flex-row justify-between items-center gap-5" style={{width: '100%'}}>
          <div className="flex-1 flex flex-col gap-2 text-center justify-start">
            {/* Logo */}
            <div className="Logo">
              <div className="flex justify-center items-center">
                <Image src="/logos/white_one.png" alt="logo" width={120} height={120} />
              </div>
            </div>
            {/* Description 1 */}
            <div>
              <h4 className="text-white text-xl font-semibold">أعلى نسبة علامات كاملة بفضل الله</h4>
            </div>
            {/* Description 2 */}
            <div>
              <h4 className="text-white text-xl font-semibold">نسعي دائما الي تقديم الافضل</h4>
            </div>
            {/* Social Icons */}
            <div className="flex flex-row justify-center items-center gap-4">
            <a href="">
                <Image src="/icons/social_icons/snap.svg" alt="snapchat" width={30} height={30} />
              </a>
              <a href="">
                <Image src="/icons/social_icons/fc.svg" alt="facebook" width={30} height={30} />
              </a> 
              <a href="">
                <Image src="/icons/social_icons/yt.svg" alt="Youtube" width={30} height={30} />
              </a> 
              <a href="">
                <Image src="/icons/social_icons/whatsapp.svg" alt="Whatsapp" width={30} height={30} />
              </a>
              <a href="">
                <Image src="/icons/social_icons/insta.svg" alt="instgram" width={30} height={30} />
              </a>
            </div>
          </div>
    <div className="flex-1 flex flex-row justify-center items-center gap-10">
      <ul className="flex flex-col gap-3 text-2xl text-white " style={{
      }}>
        <li style={{listStyle: "square"}}>تواصل معنا</li>
        <li style={{listStyle: "square"}}>الأسئلة الاكثر تكرارًا</li>
        <li style={{listStyle: "square"}}>مجمع الماهر</li>
      </ul>
      <ul className="flex flex-col gap-3 mr-10 text-2xl text-white" style={{
      }}>
        <li style={{listStyle: "square"}}>الشروط و الاحكام</li>
        <li style={{listStyle: "square"}}>الخصوصية</li>
        <li style={{listStyle: "square"}}>انضم الى عائلة ماهر</li>
      </ul>
    </div>
          <div className="flex-1 flex-col justify-end">
            <ul>
<div className="mt-10 mb-6">            
    <li style={{listStyle: "square"}} className="text-2xl text-white">الاشتراك</li>
<Paragraph color="white" size="1rem" className="text-white">لقد كان لوريم إيبسوم هو الذي جعل منهم طابعة صناعية تأخذ</Paragraph>
</div>
              <div className="flex flex-col justify-center gap-2 w-fit h-full ">
              <input type="text" placeholder=" البريد الالكتروني" className="bg-[#E7E9EB80] text-black px-4 py-2 rounded-md w-90" />
              <GeneralButton text="اشتراك الان" margin="auto" bgColor="#F7A23C" width="fit-content" href="/h" />
              </div>
            </ul>
          </div>
        </div>
      </div>
      <footer style={{ background: '#f5f5f5', borderTop: '1px solid #eee', textAlign: 'center'}}>
      <p>© جميع الحقوق محفوظة الماهر 2021</p>
    </footer>
    </footer>
  );
};

export default Footer; 