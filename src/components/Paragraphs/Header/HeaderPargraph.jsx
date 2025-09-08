export default function HeaderPargraph({title, color, alignItems, justifyContent}) {
  return (
    <div style={{width: "100%", display: "flex", flexDirection: "row", alignItems: alignItems, justifyContent: justifyContent, gap: "10px"}}>
      <h1 style={{color: color, fontSize: "40px", fontWeight: "bold"}}>{title}</h1>
    </div>
  )
}