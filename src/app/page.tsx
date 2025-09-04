'use client'
import General_Button from '../components/Buttons/GeneralButtons/Buttons';
import SocialButtons from '../components/Buttons/Solcial Buttons/SocialButtons';
import BackBoxCard from '../components/Cards/BackBoxCard/BackBoxCard';
import PaperCard from '../components/Cards/PaperCard/PaperCard';
import IconButtons from '../components/Buttons/IconButtons/IconButtons';
import Image from 'next/image';
import './page.css';  
import SemiHalfCard from '../components/Cards/SemiHalfCard/SemiHalfCard';
import CoursesCircles from '../components/Circles/CoursesCircles/CoursesCircles';
import ProfileCircles from '../components/Circles/ProfileCicles/ProfileCircles';
import ActionButtons from '../components/Buttons/ActionButtons/ActionButtons';
import GeneralBox from '../components/Boxes/GeneralBox/GeneralBox';
import PaperBox from '../components/Boxes/PaperBox/paperBox';
import InnerPaginationBox from '../components/Boxes/PaginationBox/innerPaginationBox';
import CircleWithBrush from '../components/Circles/CircleWithBrush/CircleWithBrush';

export default function Home() {
  const data = [{text: "Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet. Flexible Classes refers to the process  flexible Classes refers to the process", name: "1 أنس إبراهيم حلمي", title: "مبرمج تطبيقات", image: "/photo.png"}, {text: "Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet. Flexible Classes refers to the process  flexible Classes refers to the process", name: "أنس إبراهيم 2 حلمي", title: "مبرمج تطبيقات", image: "/photo.jpg"}, {text: "Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet. Flexible Classes refers to the process  flexible Classes refers to the process ", name: "3 أنس إبراهيم حلمي", title: "مبرمج تطبيقات", image: "/photo.jpg"}]
  return (
    <>
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
      } backgroundColorGeneral="#1e3a8a" backgroundColor="#8cc210" />


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

{/* when be low Reslotuin, right 0 in innerPaginationBox and resize the circle of content to 300px , 150px, and right of brush reduce it. */}
<div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", height: "80vh", position: "relative", flexWrap: "wrap"}}>
<InnerPaginationBox data={data} style={{right: "100px"}} />
<CircleWithBrush src="/photo.jpg" position="relative" style={{}} />
</div>

    </>
  );
}