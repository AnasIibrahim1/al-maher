/* eslint-disable @next/next/no-img-element */
'use client'
import './page.css';  
import Header from '../components/Header/Header';
import HomeCircle from '../components/Circles/HomeCircle/HomeCircle';
import General_Button from '@/components/Buttons/GeneralButtons/Buttons';
import PaperCard from '@/components/Cards/PaperCard/PaperCard';
import IconButtons from '@/components/Buttons/IconButtons/IconButtons';
import ReadMoreButtons from '@/components/Buttons/ReadMoreBurrons/ReadMoreButtons';
import AboutCircle from '@/components/Circles/AboutCircles/AboutCircle';
import SmColoredTitle from '@/components/Paragraphs/SmColoredTitle/SmTitle';
import HeaderPargraph from '@/components/Paragraphs/Header/HeaderPargraph';
import GradiantButton from '@/components/Buttons/GradiantButton/GradiantButton';
import PaginationCategories from '@/components/PaginationCategories/PaginationCategories';
import SemiHalfCard from '@/components/Cards/SemiHalfCard/SemiHalfCard';
import CourseCard from '@/components/Cards/CourseCard/CourseCard';
import BackCircles from '@/components/Circles/BackCircles/BackCircles';
import Counter from '@/components/Counter/Counter';
import InnerPaginationBox from '@/components/Boxes/PaginationBox/innerPaginationBox';
import CircleWithBrush from '@/components/Circles/CircleWithBrush/CircleWithBrush';
import BackBoxCard from '@/components/Cards/BackBoxCard/BackBoxCard';
import Footer from '@/components/Footer/Footer';
import SocialButtons from '@/components/Buttons/Solcial Buttons/SocialButtons';
import Category from '@/components/CardSpecialists/Category/Category';
import GeneralBox from '@/components/Boxes/GeneralBox/GeneralBox';
import ProfileCircles from '@/components/Circles/ProfileCicles/ProfileCircles';
import DateDisplay from '@/components/CardSpecialists/Date/Date';
export default function Home() {
  const data = [{text: "تشير الفصول المرنة إلى عملية اكتساب المعرفة أو المهارات من خلال استخدام التقنيات الرقمية والإنترنت. تشير الفئات المرنة إلى العملية تشير الفئات المرنة إلى العملية", name: "1 أنس إبراهيم حلمي", title: "مبرمج تطبيقات", image: "/photo.png"}, {text: "تشير الفصول المرنة إلى عملية اكتساب المعرفة أو المهارات من خلال استخدام التقنيات الرقمية والإنترنت. تشير الفئات المرنة إلى العملية تشير الفئات المرنة إلى العملية", name: "أنس إبراهيم 2 حلمي", title: "مبرمج تطبيقات", image: "/photo.jpg"}, {text: "تشير الفصول المرنة إلى عملية اكتساب المعرفة أو المهارات من خلال استخدام التقنيات الرقمية والإنترنت. تشير الفئات المرنة إلى العملية تشير الفئات المرنة إلى العملية", name: "3 أنس إبراهيم حلمي", title: "مبرمج تطبيقات", image: "/photo.jpg"}]

  return (
    <>
    {/* Header Component */}
    <Header />

    {/* Landing Section*/}
    <section className='landing-section' style={{width: "100%", height: "100vh", backgroundColor: "#4F5DE4", position: "relative", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap"}}>
      <img src="/Shapes/landing.png" alt="line" draggable={false} style={{width: "100%", height: "100%", position: "absolute", top: 0, left: 0, bottom: 0, right: 0, zIndex:"0"}} />
      <div style={{width:"50%", height:"100%", display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex:"1", textAlign: "right"}}>
      <h1 style={{color: "#fff", fontSize: "70px", fontWeight: "bold", maxWidth: "70%"}}>
    أفضل 
    رحلة التعلم المستقبلية تبدأ هنا
    </h1>
    <p style={{color: "#fff", fontSize: "18px", maxWidth: "70%"}}>
    تميل جميع مولدات لوريم إيبسوم الموجودة على الإنترنت إلى تكرار الأجزاء المحددة مسبقًا حسب الضرورة،
    </p>
     <div style={{marginTop: "20px", display:"flex", flexDirection: "row", alignItems: "center", gap: "10px", justifyContent: "flex-start", width: "70%"}}>
     <General_Button style={{}} backgroundColor="#F57005" color="#fff" padding="10px 20px" border="none" href="https://www.google.com">
        إحجز حضورك الآن
      </General_Button>
    <General_Button style={{}} backgroundColor="#4F5DE4" color="#fff" padding="10px 20px" border="1px solid #fff" href="https://www.google.com">
        إبحث عن دروسك
      </General_Button>

    </div>
      </div>
      <div style={{width:"50%", height:"100%", display:"flex", alignItems: "center", justifyContent: "center"}}>
      <HomeCircle image="/photo.jpg" backgroundColor="#E4E4E4" width="600px" height="600px" />
      </div>
    </section>

    {/* About Section */}
    <section className='about-section' style={{width: "100%", backgroundColor: "#fff", position: "relative", overflow:"hidden"}}>
      <img src="/line.svg" alt="line" draggable={false} style={{width: "200%", height: "200%", position: "absolute", top: "-50%", left: 0, bottom: 0, right: "-50%"}} />
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "row", marginTop: "100px", justifyContent: "center", flexWrap: "wrap", gap: "100px"}}>
    <PaperCard content={<div>
      <IconButtons backgroundColor="#4F5DE4" borderRadius="10px" width="fit-content" height="fit-content" padding="20px" icon={
        <img src="/Group.svg" alt="Icon" width={24} height={24} />
      } />
      <h2 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold"}}>المدرب الحصري</h2>
      <p style={{color: "gray", fontSize: "16px"}}>العميل سعيد جدًا بمتابعته. تزين كونفاليس دائمًا ديم هندريريت. يأخذ الدورة</p>
      <ReadMoreButtons content={<p style={{color: "#F57005", fontSize: "16px", fontWeight: "bold"}}>إقرأ المزيد</p>} href="https://www.google.com"/>
    </div>} backgroundColorGeneral="#4F5DE4" backgroundColor="#fff" alignItems="start" justifyContent="start" width="300px" height="340px" padding="30px" />
    <PaperCard content={<div>
      <IconButtons backgroundColor="#F57005" borderRadius="10px" width="fit-content" height="fit-content" padding="20px" icon={
        <img src="/busn.svg" alt="Icon" width={24} height={24} />
      } />
      <h2 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold"}}>المدرب الحصري</h2>
      <p style={{color: "gray", fontSize: "16px"}}>العميل سعيد جدًا بمتابعته. تزين كونفاليس دائمًا ديم هندريريت. يأخذ الدورة</p>
      <ReadMoreButtons content={<p style={{color: "#F57005", fontSize: "16px", fontWeight: "bold"}}>إقرأ المزيد</p>} href="https://www.google.com"/>
    </div>} backgroundColorGeneral="#F57005" backgroundColor="#fff" alignItems="start" justifyContent="start" width="300px" height="340px" padding="30px" />
    <PaperCard content={<div>
      <IconButtons backgroundColor="#4F5DE4" borderRadius="10px" width="fit-content" height="fit-content" padding="20px" icon={
        <img src="/neu.svg" alt="Icon" width={24} height={24} />
      } />
      <h2 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold"}}>المدرب الحصري</h2>
      <p style={{color: "gray", fontSize: "16px"}}>العميل سعيد جدًا بمتابعته. تزين كونفاليس دائمًا ديم هندريريت. يأخذ الدورة</p>
      <ReadMoreButtons content={<p style={{color: "#F57005", fontSize: "16px", fontWeight: "bold"}}>إقرأ المزيد</p>} href="https://www.google.com"/>
    </div>} backgroundColorGeneral="#4F5DE4" backgroundColor="#fff" alignItems="start" justifyContent="start" width="300px" height="340px" padding="30px" />
    <PaperCard content={<div>
      <IconButtons backgroundColor="#F57005" borderRadius="10px" width="fit-content" height="fit-content" padding="20px" icon={
        <img src="/ed.svg" alt="Icon" width={24} height={24} />
      } />
      <h2 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold"}}>المدرب الحصري</h2>
      <p style={{color: "gray", fontSize: "16px"}}>العميل سعيد جدًا بمتابعته. تزين كونفاليس دائمًا ديم هندريريت. يأخذ الدورة</p>
      <ReadMoreButtons content={<p style={{color: "#F57005", fontSize: "16px", fontWeight: "bold"}}>إقرأ المزيد</p>} href="https://www.google.com"/>
    </div>} backgroundColorGeneral="#F57005" backgroundColor="#fff" alignItems="start" justifyContent="start" width="300px" height="340px" padding="30px" />
    </div>
    
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap", marginTop: "100px"}}>
      <div style={{width: "50%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex:"1"}}>
      <div style={{maxWidth: "80%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px"}}>
      <SmColoredTitle title="من نحن" color="#4F5DE4" alignItems="start" justifyContent="start" />
      <HeaderPargraph style={{}} title="العميل سعيد جدًا بمتابعته. تزين كونفاليس دائمًا ديم هندريريت. يأخذ الدورة" color="#2A254D" alignItems="start" justifyContent="start" />
<p style={{color: "gray", fontSize: "16px", textAlign: "start", width: "100%"}}>يستخدم قاموسًا يضم أكثر من 200 كلمة لاتينية، بالإضافة إلى مجموعة من هياكل الجمل النموذجية، لإنشاء لوريم إيبسوم الذي يبدو</p>
      <GradiantButton color1="#FF7200" color2="#fff" borderWidth="2px" borderRadius="10px" backgroundColor="#fff" width="100%" height="fit-content" alignItems="center" justifyContent="start" padding="16px" ariaLabel="إحجز حضورك الآن">
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start", gap: "10px"}}>
        <IconButtons backgroundColor="rgba(128, 137, 225, 0.12)" borderRadius="10px" width="fit-content" height="fit-content" padding="20px" icon={
        <img src="/presentation.svg" alt="Presentation" width={24} height={24} />
      } />
<div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", gap: "1px", marginRight: "10px"}}>
<h3 style={{color: "#2D2A4E", fontSize: "22px", fontWeight: "bold"}}>فصول مرنة</h3>
<p style={{color: "gray", fontSize: "16px"}}> يستخدم قاموسًا يضم أكثر من 200 كلمة لاتينية، بالإضافة إلى مجموعة من هياكل الجمل النموذجية، لإنشاء لوريم إيبسوم الذي يبدو</p>
</div>
</div>
      </GradiantButton>
      <GradiantButton color1="#FF7200" color2="#fff" borderWidth="2px" borderRadius="10px" backgroundColor="#fff" width="100%" height="fit-content" alignItems="center" justifyContent="start" padding="16px" ariaLabel="إحجز حضورك الآن">
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start", gap: "10px"}}>
        <IconButtons backgroundColor="rgba(128, 137, 225, 0.12)" borderRadius="10px" width="fit-content" height="fit-content" padding="20px" icon={
        <img src="/online_learning.svg" alt="Presentation" width={24} height={24} />
      } />
<div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", gap: "1px", marginRight: "10px"}}>
<h3 style={{color: "#2D2A4E", fontSize: "22px", fontWeight: "bold"}}>فصول مرنة</h3>
<p style={{color: "gray", fontSize: "16px"}}> يستخدم قاموسًا يضم أكثر من 200 كلمة لاتينية، بالإضافة إلى مجموعة من هياكل الجمل النموذجية، لإنشاء لوريم إيبسوم الذي يبدو</p>
</div>
</div>
      </GradiantButton>
<div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", gap: "10px"}}>
<General_Button style={{}} backgroundColor="#F57005" color="#fff" padding="10px 20px" border="none" href="https://www.google.com">
        إحجز حضورك الآن
      </General_Button>
</div>
      </div>
      </div>
      <div style={{width: "50%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <AboutCircle src="/photo.jpg" />
      </div>
    </div>
    </section>
    
    {/* Favorite Topics To Learn */}
    <section style={{width: "100%", backgroundColor: "#fff", position: "relative", overflow:"hidden", marginTop: "100px"}}>
      <img src="/base.jpg" alt="" style={{width: "100%", height: "50%", position: "absolute", top: 0, left: 0, zIndex:"0"}} />
      <div style={{width: "80%", textAlign: "center", margin : "20px auto" ,display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex:"1", position: "relative"}}>
        <SmColoredTitle title="الفئات" color="#4F5DE4" alignItems="start" justifyContent="center" />
        <HeaderPargraph style={{}} title="المواضيع المفضلة للتعلم" color="#2A254D" alignItems="center" justifyContent="center" />
      </div>
      <PaginationCategories>
      <SemiHalfCard content={<div>
<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "100px"}}>
<IconButtons backgroundColor="#F57005" borderRadius="50%" width="fit-content" height="fit-content" padding="20px"  icon={
        <img src="/ed.svg" alt="Icon" width={24} height={24} />
      } />
</div>
      <h2 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold"}}>علوم الحاسب</h2>
      <p style={{color: "gray", fontSize: "16px", textAlign: "center"}}>6 دروس</p>
      </div>} backgroundColorGeneral="#152B4A" backgroundColorOverlay="#fff" alignItems="center" justifyContent="center" color={"#000"} />
      <SemiHalfCard content={<div>
<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "100px"}}>
<IconButtons backgroundColor="#F57005" borderRadius="50%" width="fit-content" height="fit-content" padding="20px"  icon={
        <img src="/ed.svg" alt="Icon" width={24} height={24} />
      } />
</div>
      <h2 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold"}}>علوم الحاسب</h2>
      <p style={{color: "gray", fontSize: "16px", textAlign: "center"}}>6 دروس</p>
      </div>} backgroundColorGeneral="#152B4A" backgroundColorOverlay="#fff" alignItems="center" justifyContent="center" color={"#000"} />
      <SemiHalfCard content={<div>
<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "100px"}}>
<IconButtons backgroundColor="#F57005" borderRadius="50%" width="fit-content" height="fit-content" padding="20px"  icon={
        <img src="/ed.svg" alt="Icon" width={24} height={24} />
      } />
</div>
      <h2 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold"}}>علوم الحاسب</h2>
      <p style={{color: "gray", fontSize: "16px", textAlign: "center"}}>6 دروس</p>
      </div>} backgroundColorGeneral="#152B4A" backgroundColorOverlay="#fff" alignItems="center" justifyContent="center" color={"#000"} />
      <SemiHalfCard content={<div>
<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "100px"}}>
<IconButtons backgroundColor="#F57005" borderRadius="50%" width="fit-content" height="fit-content" padding="20px"  icon={
        <img src="/ed.svg" alt="Icon" width={24} height={24} />
      } />
</div>
      <h2 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold"}}>علوم الحاسب</h2>
      <p style={{color: "gray", fontSize: "16px", textAlign: "center"}}>6 دروس</p>
      </div>} backgroundColorGeneral="#152B4A" backgroundColorOverlay="#fff" alignItems="center" justifyContent="center" color={"#000"} />
      <SemiHalfCard content={<div>
<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "100px"}}>
<IconButtons backgroundColor="#F57005" borderRadius="50%" width="fit-content" height="fit-content" padding="20px"  icon={
        <img src="/ed.svg" alt="Icon" width={24} height={24} />
      } />
</div>
      <h2 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold"}}>علوم الحاسب</h2>
      <p style={{color: "gray", fontSize: "16px", textAlign: "center"}}>6 دروس</p>
      </div>} backgroundColorGeneral="#152B4A" backgroundColorOverlay="#fff" alignItems="center" justifyContent="center" color={"#000"} />
      <SemiHalfCard content={<div>
<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "100px"}}>
<IconButtons backgroundColor="#F57005" borderRadius="50%" width="fit-content" height="fit-content" padding="20px"  icon={
        <img src="/ed.svg" alt="Icon" width={24} height={24} />
      } />
</div>
      <h2 style={{color: "#2A254D", fontSize: "24px", fontWeight: "bold"}}>علوم الحاسب</h2>
      <p style={{color: "gray", fontSize: "16px", textAlign: "center"}}>6 دروس</p>
      </div>} backgroundColorGeneral="#152B4A" backgroundColorOverlay="#fff" alignItems="center" justifyContent="center" color={"#000"} />
      </PaginationCategories>
    </section>

    {/* Best Courses */}
    <section style={{width: "100%",  backgroundColor: "#F1F2FD", position: "relative", overflow:"hidden", marginTop: "100px"}}>
      <img src="/base1.svg" alt="" style={{width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex:"0", objectFit: "cover", opacity: "0.5"}} />


      <div style={{width: "80%", textAlign: "center", margin : "20px auto" ,display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex:"1", position: "relative"}}>
        <SmColoredTitle title="أفضل الدورات" color="#4F5DE4" alignItems="start" justifyContent="center" />
        <HeaderPargraph style={{}} title="الدورات المميزة لهذا الشهر"color="#2A254D" alignItems="center" justifyContent="center" />
      </div>
<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "150px", zIndex: "10", margin : "150px auto", flexWrap: "wrap", width: "90%"}}>
<CourseCard title="دورة المطور النهائي
للمتعلم في المستقبل" image="/photo.jpg" price={100} />
<CourseCard title="دورة المطور النهائي
للمتعلم في المستقبل" image="/photo.jpg" price={100} />
<CourseCard title="دورة المطور النهائي
للمتعلم في المستقبل" image="/photo.jpg" price={100} />
<CourseCard title="دورة المطور النهائي
للمتعلم في المستقبل" image="/photo.jpg" price={100} />
<CourseCard title="دورة المطور النهائي
للمتعلم في المستقبل" image="/photo.jpg" price={100} />
</div>

    </section>

    {/* Ad Section */}
    <section style={{width: "100%", backgroundColor: "#4F5DE4", position: "relative", margin: "100px 0px", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap", overflow:"hidden"}}>
    <img src="/squares.svg" alt="ad" style={{width: "50%", height: "100%", position: "absolute", top: 0, right: "-200px", zIndex: "0", opacity: "0.2"}} />
    <img src="/diamond.svg" alt="ad" style={{width: "50%", height: "100%", position: "absolute", top: 0, left: "-200px", zIndex: "0", opacity: "1"}} />
    <img src="/dotted white.svg" alt="ad" style={{width: "6%", height: "100%", position: "absolute", top: "20%", left: "50%", zIndex: "0", opacity: "1"}} />
    

    <div style={{width: "50%", height: "100%", position: "relative", zIndex:"10", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-around", padding: "100px 180px"}}>
        <HeaderPargraph title="إنشىء حسابك المجاني الأن !"  color="#fff"  alignItems="right" justifyContent="start" style={{marginBottom:"20px"}}/>
        <PaperCard content={<div>
          <p style={{color: "#fff", fontSize: "16px", textAlign: "justify", padding: "20px"}}>ولذلك فإن نص لوريم إيبسوم الذي تم إنشاؤه يكون دائمًا خاليًا من التكرار أو الفكاهة المحقونة أو غير المميزة.</p>
        </div>} backgroundColorGeneral="#F57005" backgroundColor="#6470E6" alignItems="center" justifyContent="center" width="100%" height="auto"/>
        <General_Button style={{marginTop:"20px"}} backgroundColor="#F57005" color="white" padding="10px 20px" border="none" href="https://www.google.com">إنضم الأن</General_Button>
      </div>

      <div style={{width: "50%", height: "100%", position: "relative", zIndex:"10", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <BackCircles width="500px" height="500px" style={{position: "absolute", top: "0", left: "0", zIndex: "1"}} content={<Counter/>} />
      </div>


    </section>

    {/* Testimonials */}
    <section style={{width: "100%", backgroundColor: "#fff", position: "relative", overflow:"hidden", marginTop: "100px"}}>
      <div style={{width: "80%", textAlign: "center", margin : "20px auto" ,display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex:"1", position: "relative"}}>
        <SmColoredTitle title="التعليقات" color="#4F5DE4" alignItems="start" justifyContent="center" />
        <HeaderPargraph style={{}} title="التعليقات على الدورات" color="#2A254D" alignItems="center" justifyContent="center" />
      </div>

      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", height: "80vh", position: "relative", flexWrap: "wrap"}}>
        <InnerPaginationBox data={data} style={{}} />
<CircleWithBrush src="/photo.jpg" position="relative" style={{}} />
</div>
    </section>

    {/* Team Members */}
    <section style={{width: "100%", minHeight: "80vh", backgroundColor: "#F1F2FD", position: "relative", overflow:"hidden", marginTop: "100px"}}>
      <img src="/BackgroundsEffects/coverd.svg" alt="" style={{width: "100%", height: "100%%", position: "absolute", top: 0, left: 0, zIndex:"0", opacity: "0.5"}} />
      <div style={{width: "80%", textAlign: "center", margin : "20px auto" ,display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex:"1", position: "relative"}}>
        <SmColoredTitle title="اعضاء الفريق" color="#4F5DE4" alignItems="start" justifyContent="center" />
        <HeaderPargraph style={{}} title="تعرف على فريقنا المتميز من الخبراء والمدربين" color="#2A254D" alignItems="center" justifyContent="center" />
      </div>

          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap",
            width: "80%",
            height: "100%",
            margin: "100px auto"
          }}>
      <BackBoxCard content={
        <div>
          <h1>أحمد ممدوح</h1>
          <p>مدرب الدورات</p>
<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "10px"}}>
<SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
          <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
          <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
</div>
        </div>  
      } image="/People/man.jpg" backgroundColor="#4F5DE4" />
          <BackBoxCard content={
        <div>
          <h1>أحمد ممدوح</h1>
          <p>مدرب الدورات</p>
<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "10px"}}>
<SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
          <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
          <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
</div>
        </div>  
      } image="/People/man2.jpg" backgroundColor="#4F5DE4" />
            <BackBoxCard content={
        <div>
          <h1>أحمد ممدوح</h1>
          <p>مدرب الدورات</p>
<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "10px"}}>
<SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
          <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
          <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
</div>
        </div>  
      } image="/People/man3.jpg" backgroundColor="#4F5DE4" />

<BackBoxCard content={
        <div>
          <h1>أحمد ممدوح</h1>
          <p>مدرب الدورات</p>
<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "10px"}}>
<SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
          <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
          <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
</div>
        </div>  
      } image="/People/man.jpg" backgroundColor="#4F5DE4" />
          </div>
    </section>

    {/* Latest Blog */}
    <section style={{width: "100%", minHeight: "100vh", backgroundColor: "#fff", position: "relative", overflow:"hidden", marginTop: "100px"}}>
    <div style={{width: "80%", textAlign: "center", margin : "20px auto" ,display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex:"1", position: "relative"}}>
        <SmColoredTitle title="اخر الاخبار" color="#4F5DE4" alignItems="start" justifyContent="center" />
        <HeaderPargraph style={{}} title="اخر الخبار و المقالات" color="#2A254D" alignItems="center" justifyContent="center" />
      </div>
      <div style={{width: "80%", flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "40px", margin: "100px auto"}}>
<div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", width:"50%", minHeight: "400px"}}>
</div>
        <div style={{display: "flex", flexDirection: "column", gap: "10px", width:"50%", minHeight: "300px"}}>
          <div style={{width: "100%", flex: 1, backgroundColor: "#152B4A", borderRadius: "10px 15px 15px 10px", minHeight: "200px"}}>
            <div style={{width:"70%", minHeight: "300px", backgroundColor: "#fff", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)", borderRadius: "0px 10px 10px 0px", display: "flex", flexDirection: "column", alignItems: "right", justifyContent: "space-around"}}>
              <Category category="تطوير"/>
              <h1>المبادئ التوجيهية الكاملة لمطوري الويب 2023</h1>
              <GeneralBox backgroundColor="#F1F2FD" width="80%" height="auto" padding="5px" flexDirection="row" alignItems="center" justifyContent="space-between">
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}}>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}}>
        <ProfileCircles image="/photo.jpg" backgroundColor="#E4E4E4" width="60px" height="50px" />
      <div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", width: "100%", height: "100%", marginRight: "10px"}}>
        <h3 style={{color: "#000", fontSize: "16px", fontWeight: "bold"}}>أنس إبراهيم حلمي</h3>
        <p style={{color: "gray", fontSize: "12px", fontWeight: "bold"}}>مبرمج تطبيقات</p>
      </div>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "50%", height: "100%"}}>
<DateDisplay date={new Date()} style={{color: "#000", fontSize: "12px", fontWeight: "bold"}} className="date-display"/>
</div>
      </div>
    </GeneralBox>
            </div>
            
          </div>
          <div style={{width: "100%", flex: 1, backgroundColor: "#152B4A", borderRadius: "10px 15px 15px 10px", minHeight: "200px"}}>
            <div style={{width:"70%", minHeight: "300px", backgroundColor: "#fff", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)", borderRadius: "0px 10px 10px 0px", display: "flex", flexDirection: "column", alignItems: "right", justifyContent: "space-around"}}>
              <Category category="تطوير"/>
              <h1>المبادئ التوجيهية الكاملة لمطوري الويب 2023</h1>
              <GeneralBox backgroundColor="#F1F2FD" width="80%" height="auto" padding="5px" flexDirection="row" alignItems="center" justifyContent="space-between">
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}}>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}}>
        <ProfileCircles image="/photo.jpg" backgroundColor="#E4E4E4" width="60px" height="50px" />
      <div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", width: "100%", height: "100%", marginRight: "10px"}}>
        <h3 style={{color: "#000", fontSize: "16px", fontWeight: "bold"}}>أنس إبراهيم حلمي</h3>
        <p style={{color: "gray", fontSize: "12px", fontWeight: "bold"}}>مبرمج تطبيقات</p>
      </div>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "50%", height: "100%"}}>
<DateDisplay date={new Date()} style={{color: "#000", fontSize: "12px", fontWeight: "bold"}} className="date-display"/>
</div>
      </div>
    </GeneralBox>
            </div>
            
          </div>
        </div>
      </div>
    </section>
<Footer/>
    </>

  );
}

/**
   const data = [{text: "Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet. Flexible Classes refers to the process  flexible Classes refers to the process", name: "1 أنس إبراهيم حلمي", title: "مبرمج تطبيقات", image: "/photo.png"}, {text: "Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet. Flexible Classes refers to the process  flexible Classes refers to the process", name: "أنس إبراهيم 2 حلمي", title: "مبرمج تطبيقات", image: "/photo.jpg"}, {text: "Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet. Flexible Classes refers to the process  flexible Classes refers to the process ", name: "3 أنس إبراهيم حلمي", title: "مبرمج تطبيقات", image: "/photo.jpg"}]


    <div className="page-container">
      <h1 className="page-title">Anas</h1>


        <General_Button backgroundColor="#4F5DE4" color="#fff" padding="10px 20px" border="1px solid #fff" href="https://www.google.com">
        إبحث عن دروسك !
      </General_Button>


      <SocialButtons backgroundColor="transparent" borderColor="#fff" />


      <BackBoxCard content={
        <div>
          <h1>Back Box Card</h1>
          <p>Back Box Card</p>
          <p>Back Box Card</p>
        </div>  
      } image="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" backgroundColor="#4F5DE4" />


      <PaperCard alignItems="start" justifyContent="start" content={
        <h1>lorem text if u want to play with me just ms me i will be in hoold for u </h1>
      } backgroundColorGeneral="#1e3a8a" backgroundColor="#8cc210" width="300px" height="340px" />


      <IconButtons backgroundColor="#4F5DE4" borderRadius="10px" width="fit-content" height="fit-content" padding="20px" icon={
        <Image src="/Group.svg" alt="Icon" width={24} height={24} />
      } />


      <SemiHalfCard backgroundColorGeneral="#fff" justifyContent="end" alignItems="center" backgroundColorOverlay="#4F5DE4" content={
        <div>
          <h1>Semi Half Card</h1>
          <p>Semi Half Card</p>
          <p>Semi Half Card</p>
        </div>
      } color="#000" />


    <CoursesCircles backgroundColor="#E4E4E4" width="250px" height="250px" image="/photo.jpg" />


    <ProfileCircles image="/photo.jpg" backgroundColor="#E4E4E4" width="100px" height="100px" />


    <ActionButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>} backgroundColor="#4F5DE4" width="50px" height="50px" ariaLabel="Love" title="Love" onClick={() => {console.log("Love")}}/>


    <GeneralBox backgroundColor="#E4E4E4" width="450px" height="100px" borderColor="#000" padding="10px" flexDirection="row" alignItems="center" justifyContent="space-between">
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "50%", height: "100%"}}>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start", width: "100%", height: "100%"}}>
        <ProfileCircles image="/photo.jpg" backgroundColor="#E4E4E4" width="60px" height="50px" />
      <div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", width: "100%", height: "100%", marginRight: "10px"}}>
        <p>أنس إبراهيم حلمي</p>
        <p>مبرمج تطبيقات</p>
      </div>
      </div>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "center", width: "50%", height: "100%"}}>
        <p>100</p>
        <p>100</p>
      </div>
    </GeneralBox>

    <PaperBox alignItems="center" justifyContent="center" padding="10px" content={<div>بوكس الهدايا</div>} backgroundColorGeneral="#000" backgroundColor="#fff" width="450px" height="100px"/>
    </div>

<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", height: "80vh", position: "relative", flexWrap: "wrap"}}>
<InnerPaginationBox data={data} style={{right: "100px"}} />
<CircleWithBrush src="/photo.jpg" position="relative" style={{}} />
</div>

<BackCircles width="500px" height="500px" style={{position: "absolute", top: "0", left: "0", zIndex: "1"}} content={<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam veritatis deserunt, expedita officia mollitia magnam minima soluta consequatur tenetur quaerat ad. Veritatis explicabo quos iure est fuga aperiam excepturi enim.</div>} />  

<hr />
<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", height: "80vh", position: "relative", flexWrap: "wrap"}}>
<HomeCircle image="/photo.jpg" backgroundColor="#E4E4E4" width="500px" height="500px" />
</div>
<AboutCircle src="/photo.jpg" />


<PaginationCategories>
  <div style={{backgroundColor: "#FF7200", padding: "20px", borderRadius: "10px", color: "white"}}>
    <h1>Box 1</h1>
    <p>Content 1</p>
  </div>
  <div style={{backgroundColor: "#6A78FF", padding: "20px", borderRadius: "10px", color: "white"}}>
    <h1>Box 2</h1>
    <p>Content 2</p>
  </div>
  <div style={{backgroundColor: "#4F5DE4", padding: "20px", borderRadius: "10px", color: "white"}}>
    <h1>Box 3</h1>
    <p>Content 3</p>
  </div>
  <div style={{backgroundColor: "#E4E4E4", padding: "20px", borderRadius: "10px", color: "black"}}>
    <h1>Box 4</h1>
    <p>Content 4</p>
  </div>
  <div style={{backgroundColor: "#1e3a8a", padding: "20px", borderRadius: "10px", color: "white"}}>
    <h1>Box 5</h1>
    <p>Content 5</p>
  </div>
  <div style={{backgroundColor: "#8cc210", padding: "20px", borderRadius: "10px", color: "white"}}>
    <h1>Box 6</h1>
    <p>Content 6</p>
  </div>
</PaginationCategories>
  
 */