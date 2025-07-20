/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Input from "@/components/input/input";
import Image from "next/image";
import { Cabin } from 'next/font/google';
import Container from "@/components/Container/Conatiner";
import Paragraph from "@/components/Paragraphs/small";
import ContainerRow from "@/components/Container/ContainerRow";
import Box from "@/components/Boxs/Box";
import AdsBox from "@/components/Boxs/AdsBox";
import Stars from "@/components/Rates/stars";
import { useState } from "react";
import General_Button from "@/components/Buttons/General_Button";
import Paginations from "@/components/PaginationBar/Paginations";
import router from "next/router";



const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const testimonials = [
  {
    name: "أنس ابراهيم",
    email: "a.ibrahim@gmail.com",
    image: "/ppl/ppl.jpg",
    text: "تجربة رائعة جدًا! المحتوى غني بالمعلومات ومُقدَّم بطريقة سلسة وسهلة الفهم. أعجبني تفاعل المدرسين وسرعة استجابتهم لاستفسارات الطلاب. أنصح الجميع بالانضمام والاستفادة من الدورات!",
  },
  {
    name: "أنس ابراهيم",
    email: "a.ibrahim@gmail.com",
    image: "/ppl/ppl.jpg",
    text: "تجربة رائعة جدًا! المحتوى غني بالمعلومات ومُقدَّم بطريقة سلسة وسهلة الفهم. أعجبني تفاعل المدرسين وسرعة استجابتهم لاستفسارات الطلاب. أنصح الجميع بالانضمام والاستفادة من الدورات!",
  },
  {
    name: "أنس ابراهيم",
    email: "a.ibrahim@gmail.com",
    image: "/ppl/ppl.jpg",
    text: "تجربة رائعة جدًا! المحتوى غني بالمعلومات ومُقدَّم بطريقة سلسة وسهلة الفهم. أعجبني تفاعل المدرسين وسرعة استجابتهم لاستفسارات الطلاب. أنصح الجميع بالانضمام والاستفادة من الدورات!",
  },
  {
    name: "أنس ابراهيم",
    email: "a.ibrahim@gmail.com",
    image: "/ppl/ppl.jpg",
    text: "تجربة رائعة جدًا! المحتوى غني بالمعلومات ومُقدَّم بطريقة سلسة وسهلة الفهم. أعجبني تفاعل المدرسين وسرعة استجابتهم لاستفسارات الطلاب. أنصح الجميع بالانضمام والاستفادة من الدورات!",
  },
  {
    name: "أنس ابراهيم",
    email: "a.ibrahim@gmail.com",
    image: "/ppl/ppl.jpg",
    text: "تجربة رائعة جدًا! المحتوى غني بالمعلومات ومُقدَّم بطريقة سلسة وسهلة الفهم. أعجبني تفاعل المدرسين وسرعة استجابتهم لاستفسارات الطلاب. أنصح الجميع بالانضمام والاستفادة من الدورات!",
  },
  {
    name: "أنس ابراهيم",
    email: "a.ibrahim@gmail.com",
    image: "/ppl/ppl.jpg",
    text: "تجربة رائعة جدًا! المحتوى غني بالمعلومات ومُقدَّم بطريقة سلسة وسهلة الفهم. أعجبني تفاعل المدرسين وسرعة استجابتهم لاستفسارات الطلاب. أنصح الجميع بالانضمام والاستفادة من الدورات!",
  },
  {
    name: "أنس ابراهيم",
    email: "a.ibrahim@gmail.com",
    image: "/ppl/ppl.jpg",
    text: "تجربة رائعة جدًا! المحتوى غني بالمعلومات ومُقدَّم بطريقة سلسة وسهلة الفهم. أعجبني تفاعل المدرسين وسرعة استجابتهم لاستفسارات الطلاب. أنصح الجميع بالانضمام والاستفادة من الدورات!",
  },
];

const boxes = Array(10).fill({}); 
export default function Home() {
const [rating, setRating] = useState(0);
const LessonspageSize = 4;
const [currentPage, setCurrentPage] = useState(1);
const startIdx = (currentPage - 1) * LessonspageSize;
const endIdx = startIdx + LessonspageSize;
const pagedBoxes = boxes.slice(startIdx, endIdx);
const testimonialspageSize = 2;
const testimonialsstartIdx = (currentPage - 1) * testimonialspageSize;
const testimonialsendIdx = testimonialsstartIdx + testimonialspageSize;
const totalPages = Math.ceil(testimonials.length / testimonialspageSize);
const pagedTestimonials = testimonials.slice(testimonialsstartIdx, testimonialsendIdx);

  return (
    
<div className="h-full w-full">
  
  {/* Container 1 :"Landing" */}
<Container justify="center" style={{
      backgroundImage: "url('/backgrounds/landing.png')",
      backgroundSize: "cover",
      height: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
       <div className="flex flex-col mb-20 h-100 text-center" style={{
        width: "50%",
      }}>
        <Paragraph color="#CED3E6" size="50px" className="font-bold" style={{
          textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          lineHeight: "1.5",
        }}>
منصه الماهر
        </Paragraph>
        <Paragraph color="#CED3E6" size="50px" className="font-bold" style={{
          textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          lineHeight: "1.5",
        }}>
تفتح لك ابواب النمو والتقدم
        </Paragraph>
        <Paragraph color="#F7A23C" size="50px" className="font-bold" style={{
          lineHeight: "1.5",
        }}>
يحق لك ان ترتقي
        </Paragraph>
       <Input placeholder="ماذا تريد أن تتعلم؟" width="60%" margin="60px auto 0 auto" padding="25px" icon={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#169FC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>}
       />
       </div>
       <div className="flex flex-row justify-around absolute bottom-10 left-0 right-0" style={{
        width: "80%",
        margin: "0 auto",
       }}>
          <div className="flex flex-col bg-white border-2 justify-center items-center border-[#169FC6] rounded-md p-4 text-center" style={{
            width:"220px",
            height:"162px",
            boxShadow : "0 10px 10px 0 rgba(0, 0, 0, 0.3)",
          }}>
            <Image src="/icons/common_icons/group.png" alt="landing" width={100} height={100}  />
            <Paragraph color="#169FC6" size="25px" style={
              {
                fontFamily : 'Cabin',
                maxWidth : "190px",
                fontWeight : "900"
              }
            }>اكثر من  مـلـيـون
 متسخدم</Paragraph>
 
          </div>
                    <div className="flex flex-col bg-white border-2 justify-center items-center border-[#169FC6] rounded-md p-4 text-center" style={{
            width:"220px",
            height:"162px",
            boxShadow : "0 10px 10px 0 rgba(0, 0, 0, 0.3)",
          }}>
            <Image src="/icons/common_icons/girl.png" alt="landing" width={100} height={100}  />
            <Paragraph color="#169FC6" size="25px" style={
              {
                fontFamily : 'Cabin',
                maxWidth : "190px",
                fontWeight : "900"
              }
            }>أكثر من 100 الف خريج</Paragraph>
          </div>
          <div className="flex flex-col bg-white border-2 justify-center items-center border-[#169FC6] rounded-md p-4 text-center" style={{
            width:"220px",
            height:"162px",
            boxShadow : "0 10px 10px 0 rgba(0, 0, 0, 0.3)",
          }}>
            <Image src="/icons/common_icons/study.png" alt="landing" width={100} height={100}  />
            <Paragraph color="#169FC6" size="25px" style={
              {
                fontFamily : 'Cabin',
                maxWidth : "190px",
                fontWeight : "900"
              }
            }>اكـثـر مــن 50 محـاضــر</Paragraph>
</div>

          </div>
        </Container>

        {/* Container 2 :"info" */}
<Container style={{
}}>
  <div className="flex flex-col h-full mt-20"  style={{
      width: "80%",
      margin: "40px auto",
    }}>
    <h2 className="text-4xl font-bold" style={{
      lineHeight: "1.5",
    }}>محتويات المنصة</h2>
    <Paragraph color="#6D737A" size="1rem" className="mr-8" style={{
      marginBottom: "20px",
    }}>
    لوريم إيبسوم هو ببساطة نص وهمي للطباعة.لوريم إيبسوم هو ببساطة نص وهمي للطباعة.
    </Paragraph>
    <Container className="">
    <ContainerRow justify="between" className="flex-wrap" style={{
      width: "100%",
      gap: "50px",
      marginTop: "50px",
    }}>
      <Box border="1px solid #169FC6" borderRadius="10px" width="350px" padding="5px" flex itemsCenter>
        <Image src="/icons/common_icons/grads.png" alt="landing" width=
        {50} height={50}  />
        <Paragraph color="black" size="20px">توجيهي</Paragraph>
        <div className="absolute left-0 p-5 ">
          <Image src="/icons/common_icons/ArrowUpRight.png" alt="landing" width=
        {30} height={50} className="bg-[#169FC6] rounded-md p-1"  />
        </div>
      </Box>
      <Box border="1px solid #169FC6" borderRadius="10px" width="350px" padding="5px" flex itemsCenter>
        <Image src="/icons/common_icons/mony.png" alt="landing" width=
        {50} height={50}  />
        <Paragraph color="black" size="20px">بكجات التوجيهي</Paragraph>
        <div className="absolute left-0 p-5 ">
          <Image src="/icons/common_icons/ArrowUpRight.png" alt="landing" width=
        {30} height={50} className="bg-[#169FC6] rounded-md p-1"  />
        </div>
      </Box>
      <Box border="1px solid #169FC6" borderRadius="10px" width="350px" padding="5px" flex itemsCenter>
        <Image src="/icons/common_icons/work.png" alt="landing" width=
        {50} height={50}  />
        <Paragraph color="black" size="20px">الصفوف الأساسية</Paragraph>
        <div className="absolute left-0 p-5 ">
          <Image src="/icons/common_icons/ArrowUpRight.png" alt="landing" width=
        {30} height={50} className="bg-[#169FC6] rounded-md p-1"  />
        </div>
      </Box>
      <Box border="1px solid #169FC6" borderRadius="10px" width="350px" padding="5px" flex itemsCenter>
        <Image src="/icons/common_icons/grad.png" alt="landing" width=
        {50} height={50}  />
        <Paragraph color="black" size="20px">لطلاب الـBTEC</Paragraph>
        <div className="absolute left-0 p-5 ">
          <Image src="/icons/common_icons/ArrowUpRight.png" alt="landing" width=
        {30} height={50} className="bg-[#169FC6] rounded-md p-1"  />
        </div>
      </Box>
      <Box border="1px solid #169FC6" borderRadius="10px" width="350px" padding="5px" flex itemsCenter>
        <Image src="/icons/common_icons/vip.png" alt="landing" width=
        {50} height={50}  />
        <Paragraph color="black" size="20px">بطاقة الـ Event</Paragraph>
        <div className="absolute left-0 p-5 ">
          <Image src="/icons/common_icons/ArrowUpRight.png" alt="landing" width=
        {30} height={50} className="bg-[#169FC6] rounded-md p-1"  />
        </div>
      </Box>
      <Box border="1px solid #169FC6" borderRadius="10px" width="350px" padding="5px" flex itemsCenter>
        <Image src="/icons/common_icons/mony2.png" alt="landing" width=
        {50} height={50}  />
        <Paragraph color="black" size="20px">بكجات الصفوف الاساسية</Paragraph>
        <div className="absolute left-0 p-5 ">
          <Image src="/icons/common_icons/ArrowUpRight.png" alt="landing" width=
        {30} height={50} className="bg-[#169FC6] rounded-md p-1"  />
        </div>
      </Box>
    </ContainerRow>
   </Container>
  </div>
</Container>

{/* Container 3 :"ads" */}
<AdsBox
  images={[
    '/banners/banner1.png',
    '/banners/banner2.png',
    '/banners/banner3.png'
  ]}
  autoPlayInterval={5000}
/>

{/* Container 4 :"Lessons" */}
<Container>
  <div className="flex flex-col h-full mt-20"  style={{
    width: "80%",
    margin: "40px auto",
  }}>
    <Paragraph color="black" size="40px" style={{
      fontWeight: "900",
    }}>
الدروس المقترحة
    </Paragraph>
    <Paragraph color="#6D737A" size="1rem" className="mr-3" style={{
      marginBottom: "20px",
    }}>
    لوريم إيبسوم هو ببساطة نص وهمي للطباعة.لوريم إيبسوم هو ببساطة نص وهمي للطباعة.
    </Paragraph>

    <ContainerRow gap="10">
    {pagedBoxes.map((box, idx) => (
      <Box key={startIdx + idx} width="300px" height="400px" borderRadius="10px" padding="5px" flex column justifybetween style={{
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
      }}>
        <div style={{
          width: "280px",
          margin: "0 auto",
          height: "207px",
          borderRadius: "10px",
          backgroundImage: "url('/common/st.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
        <Paragraph color="black" size="20px" style={{
        }}>
دروس مقترحة        </Paragraph>
{/* Stars */}
<div className="flex flex-row justify-end gap-2">
<Stars value={rating} size={20} color="#FACC15" />
<Paragraph color="#6D737A" size="1rem" style={{
  fontWeight: "900",
}}>
(15)
</Paragraph>

</div>
<General_Button text="انضمام" bgColor="#169FC6" color="white" width="100%" padding="10px" />

      </Box>
    ))}
    </ContainerRow>
    <Paginations
  total={boxes.length}
  currentPage={currentPage}
  LessonspageSize={LessonspageSize}
  onPageChange={setCurrentPage}
/>
      </div>
</Container>


{/* Container 5 :"SignUp" */}
<AdsBox
  images={[
    '/backgrounds/Sign.png',
  ]}
>
  {/* <h1 className="text-white text-4xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100"></h1>
   */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100" style={{
  margin: "0 auto",
  height: "100%",
  width: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}}>
<Paragraph className="" color="white" size="40px" style={{
    fontWeight: "900",
   }}>
!سجل الان واحصل علي المزيد من الدورات
   </Paragraph>
   <Paragraph className="" color="white" size="20px" style={{
   }}>
.هناك دورات يمكنك ايجادها والوصول اليها فقط عندما يكون لديك حساب , لذا يمكنك التسجيل الان للاستمتاع بكل الدورات اللتي نوفرها وتستفيد اقصي استفاد
   </Paragraph>
   <General_Button text="إنشاء حساب" bgColor="#F7A23C" width="200px" color="white" padding="20px" fontWeight="900" fontSize="20px" margin="20px auto" href="/sign"/>
</div>
  </AdsBox>


{/* Container 6 :"Opinions" */}
<Container>
<div className="flex flex-col h-full mt-20"  style={{
    width: "85%",
    margin: "40px auto",
  }}>
    <Paragraph color="black" size="40px" style={{
      fontWeight: "900",
    }}>
تعليقات الطلاب

    </Paragraph>
    <Paragraph color="#6D737A" size="1rem" className="mr-3" style={{
      marginBottom: "20px",
    }}>
    لوريم إيبسوم هو ببساطة نص وهمي للطباعة.لوريم إيبسوم هو ببساطة نص وهمي للطباعة.
    </Paragraph>
    <ContainerRow
  style={{
    backgroundColor: "#f1f4f7",
    width: "100%",
    margin: "0 auto",
    padding: "20px",
  }}
  justify="between"
>
  {pagedTestimonials.map((t, idx) => (
    <Box
      key={idx}
      width="650px"
      height="200px"
      borderRadius="10px"
      background="white"
      padding="5px"
      flex
      column
      justifybetween
      style={{
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
      }}
    >
      <Container style={{ width: "100%", height: "100%" }}>
        <ContainerRow style={{ width: "100%", height: "50%" }} items="center">
          <Image
            src={t.image}
            alt={t.name}
            width={70}
            height={70}
            style={{ borderRadius: "50%" }}
          />
          <Container justify="between" style={{ width: "50%", marginRight: "20px" }}>
            <Paragraph color="black" size="20px" style={{ fontWeight: "900" }}>
              {t.name}
            </Paragraph>
            <Paragraph color="#084FC7" size="12px" style={{ fontWeight: "900" }}>
              {t.email}
            </Paragraph>
          </Container>
          <div className="absolute left-0 p-5 ">
            <Image
              src="/icons/common_icons/coma.svg"
              alt="coma"
              width={70}
              height={50}
              className="rounded-md p-1"
            />
          </div>
        </ContainerRow>
        <Paragraph color="black" size="16px">
          {t.text}
        </Paragraph>
      </Container>
    </Box>
  ))}
</ContainerRow>
<div className="flex items-center justify-end gap-2 mt-6">
  <button
    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
    disabled={currentPage === 1}
    className="w-8 h-8 flex items-center justify-center rounded bg-white shadow transition disabled:opacity-50"
  >
    &#x2039;
  </button>
  {Array.from({ length: totalPages }).map((_, idx) => (
    <span
      key={idx}
      onClick={() => setCurrentPage(idx + 1)}
      className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${currentPage === idx + 1 ? 'bg-[#169FC6]' : 'bg-gray-300'}`}
      style={{ display: 'inline-block' }}
    />
  ))}
  <button
    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
    disabled={currentPage === totalPages}
    className="w-8 h-8 flex items-center justify-center rounded bg-white shadow transition disabled:opacity-50"
  >
    &#x203A;
  </button>
</div>
</div>
</Container>
</div>

  );
}
