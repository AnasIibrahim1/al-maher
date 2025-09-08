import CourseHead from "@/components/Paragraphs/CourseHead/CourseHead";
import Hours from "@/components/CardSpecialists/Hours/Hours";
import Stars from "@/components/CardSpecialists/Stars/Stars";
import SalaryLessons from "@/components/CardSpecialists/SalaryLessons/SalaryLessons";
import GeneralBox from "@/components/Boxes/GeneralBox/GeneralBox";
import ProfileCircles from "@/components/Circles/ProfileCicles/ProfileCircles";
import CourseCircles from "@/components/Circles/CoursesCircles/CoursesCircles";
export default function CourseCard({title, image, price}) {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", width: "450px", height : "300px",borderRadius: "10px", backgroundColor: "#fff", padding : "30px",zIndex: "10"}}>
<div style={{position: "relative", zIndex: "10"}}>
<Hours hour={10} />
<div>
<CourseCircles image={image} width="225px" height="225px" style={{position: "absolute", top: "-140px", left: "0", zIndex: "10"}} /> 
</div>
</div>

<Stars rating={5} reviews={24} size="medium" />
<CourseHead title={title} />
<GeneralBox backgroundColor="#F1F2FD" width="auto" height="auto"  padding="5px" flexDirection="row" alignItems="center" justifyContent="space-between">
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}}>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}}>
        <ProfileCircles image="/photo.jpg" backgroundColor="#E4E4E4" width="60px" height="50px" />
      <div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", width: "100%", height: "100%", marginRight: "10px"}}>
        <h3 style={{color: "#000", fontSize: "16px", fontWeight: "bold"}}>أنس إبراهيم حلمي</h3>
        <p style={{color: "gray", fontSize: "12px", fontWeight: "bold"}}>مبرمج تطبيقات</p>
      </div>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "50%", height: "100%"}}>
<SalaryLessons salary={100} lessons={24} />

</div>
      </div>
    </GeneralBox>
    </div>
  )
}