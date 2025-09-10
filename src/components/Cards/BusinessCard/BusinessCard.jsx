import GeneralBox from "@/components/Boxes/GeneralBox/GeneralBox";
import ProfileCircles from "@/components/Circles/ProfileCicles/ProfileCircles";
import DateDisplay from "@/components/CardSpecialists/Date/Date";
import SalaryLessons from "@/components/CardSpecialists/SalaryLessons/SalaryLessons";
export default function BusinessCard({type}) {
  return (
<GeneralBox backgroundColor="#F1F2FD" width="100%" height="auto" padding="5px" flexDirection="row" alignItems="center" justifyContent="space-between">
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}}>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}}>
        <ProfileCircles image="/photo.jpg" backgroundColor="#E4E4E4" width="60px" height="40px" />
      <div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", width: "100%", height: "100%", marginRight: "10px"}}>
        <h3 style={{color: "#000", fontSize: "16px", fontWeight: "bold"}}>أنس إبراهيم حلمي</h3>
        <p style={{color: "gray", fontSize: "12px", fontWeight: "bold"}}>مبرمج تطبيقات</p>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "40%", height: "100%"}}>
        {type === "date" ? (
          <DateDisplay date={new Date()} style={{color: "#F57005", fontSize: "16px", fontWeight: "bold"}} className="date-display"/>
        ) : type === "salary" ? (
          <SalaryLessons salary={100} lessons={24} />
        ) : null}
</div>
      </div>
      </div>
    </GeneralBox>
  )
}