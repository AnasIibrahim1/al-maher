export default function SalaryLessons({salary, lessons}) {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: "10"}}>
        <h3 style={{color: "#4F5DE4", fontSize: "24px", fontWeight: "bold"}}>${salary}</h3>
        <h4 style={{color: "#F57005", fontSize: "16px", fontWeight: "medium"}}>{lessons} Lessons</h4>
    </div>
  )
}