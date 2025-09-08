export default function Hours({hour}) {
  return (
    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#4F5DE4", padding: "0px 10px", borderRadius: "5px", zIndex: "10"}}>
        <h3 style={{color: "#fff", fontSize: "16px", fontWeight: "bold"}}>{hour} Hours</h3>
    </div>
  )
}