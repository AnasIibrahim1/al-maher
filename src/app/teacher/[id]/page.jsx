'use client'
import React from 'react'
import './style.css'
import HeaderPargraph from '@/components/Paragraphs/Header/HeaderPargraph'
import SocialButtons from '@/components/Buttons/Solcial Buttons/SocialButtons'
import General_Button from '@/components/Buttons/GeneralButtons/Buttons'
import Pagination from '@/components/PaginationNormal/Pagination'
import PopularCards from '@/components/Cards/PopularCards/PopularCards'
import { notFound } from 'next/navigation'

export default function TeacherPage({params}) {
  const resolvedParams = React.use(params)
  const { id } = resolvedParams || {}

  const teachersById = {
    ahmed: {
      id: 'ahmed',
      name: 'أحمد محمد',
      jobTitle: 'مدرب رياضيات',
      bio: 'هناك العديد من الأشكال المختلفة لنصوص لوريم إيبسوم المتاحة، لكن الأغلبية قد عانت من التغيير بشكل ما، عن طريق حقن hudfdfmour، أو الكلمات العشوائية التي لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم مقطع لوريم إيبسوم. فئة ملائمة تاسيتي سوسيوسكو أد ليتورا تورجنت بي',
      photo: '/People/man.jpg',
    },
    mona: {
      id: 'mona',
      name: 'منى علي',
      jobTitle: 'مدربة علوم',
      bio: 'هناك العديد من الأشكال المختلفة لنصوص لوريم إيبسوم المتاحة، لكن الأغلبية قد عانت من التغيير بشكل ما، عن طريق حقن hudfdfmour، أو الكلمات العشوائية التي لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم مقطع لوريم إيبسوم. فئة ملائمة تاسيتي سوسيوسكو أد ليتورا تورجنت بي',
      photo: '/People/man2.jpg',
    },
    khaled: {
      id: 'khaled',
      name: 'خالد سعيد',
      jobTitle: 'مدرب برمجة',
      bio: 'هناك العديد من الأشكال المختلفة لنصوص لوريم إيبسوم المتاحة، لكن الأغلبية قد عانت من التغيير بشكل ما، عن طريق حقن hudfdfmour، أو الكلمات العشوائية التي لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم مقطع لوريم إيبسوم. فئة ملائمة تاسيتي سوسيوسكو أد ليتورا تورجنت بي',
      photo: '/People/man3.jpg',
    },
    sara: {
      id: 'sara',
      name: 'سارة حسن',
      jobTitle: 'مدربة لغة عربية',
      bio: 'هناك العديد من الأشكال المختلفة لنصوص لوريم إيبسوم المتاحة، لكن الأغلبية قد عانت من التغيير بشكل ما، عن طريق حقن hudfdfmour، أو الكلمات العشوائية التي لا تبدو قابلة للتصديق ولو قليلاً. إذا كنت ستستخدم مقطع لوريم إيبسوم. فئة ملائمة تاسيتي سوسيوسكو أد ليتورا تورجنت بي',
      photo: '/People/man.jpg',
    },
  }

  const teacher = teachersById[id]
  if (!teacher) {
    notFound()
  }

  return (
    <>
    {/* Head Section */}
    <section style={{width: "100%", height: "60vh", backgroundImage: "url('/photo.jpg')", backgroundSize: "cover", backgroundPosition: "center", position: "relative"}}>
      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1 style={{color: "#fff", fontSize: "40px", fontWeight: "bold"}}>{teacher.name}</h1>
        <p style={{color: "#fff", fontSize: "16px"}}>الرئيسية / المدرسين</p>
      </div>
    </section>

    {/* Teacher Section */}
    <section className="teacher-wrapper">
      <div className="teacher-container">
        <div className="teacher-content">
          <h1 className="teacher-name">مرحباً، أنا {teacher.name}</h1>
          <p className="teacher-sub">{teacher.jobTitle}</p>
          <p className="teacher-bio">{teacher.bio}</p>
          <div className="teacher-socials">
            <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="rgba(42, 37, 77, 1)" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
            <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="rgba(42, 37, 77, 1)" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
            <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="rgba(42, 37, 77, 1)" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.188a9.836 9.836 0 005.402 4.988"/></svg>} backgroundColor="transparent" borderColor="#4F5DE4"  />
          </div>

          <div className="teacher-cta">
            <General_Button backgroundColor="rgba(245, 112, 5, 1)" color="#fff" padding="12px 18px" border="none" href="#" fontSize="14px">اشترك الأن</General_Button>
          </div>
        </div>

        <div className="teacher-photo">
        <img src={teacher.photo} alt={teacher.name} />
          <img src="/Shapes/ci.svg" alt="" style={{position:'absolute', bottom:'-50px', left:'0px', width:'150px'}}/>          <img src="/Shapes/dp.svg" alt="" style={{position:'absolute', top:'50%', left:'0px', transform:'translateY(-50%)', width:'100px'}}/>
          <img src="/Shapes/tri.svg" alt="" style={{position:'absolute', top:0, left:'0px', zIndex:'-1'}}/>
        </div>
      </div>
    </section>

<hr style={{width: "70%", margin:"100px auto", height: "1px", backgroundColor: "#4F5DE4"}}/>
{/* Checkout my Courses Section */}
<div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin:"100px 0"}}>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
      <h4 style={{color: "#4F5DE4", fontSize: "24px", fontWeight: "bold", margin: "0px"}}>اشترك الأن </h4>
      <img src="/Shapes/frame.svg" alt="" style={{transform: "rotate(180deg)", marginRight: "20px"}} />

      </div>
        <HeaderPargraph title="جميع دوراتي" color="#2A254D" alignItems="center" justifyContent="center" style={{margin:"0px"}}/>
      </div>
<div style={{margin:"100px 0"}}>
<Pagination>
        <PopularCards/> 
        <PopularCards/> 
        <PopularCards/> 
        <PopularCards/> 
        <PopularCards/> 
      </Pagination>
</div>
 
    </>
  )
}