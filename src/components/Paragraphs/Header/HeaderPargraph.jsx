export default function HeaderPargraph({title, color, alignItems, justifyContent, style}) {
  return (
    <div style={{width: "100%", display: "flex", flexDirection: "row", alignItems: alignItems, justifyContent: justifyContent, gap: "10px", ...style}}>
      <h1 style={{color: color, fontSize: "40px", fontWeight: "bold"}}>{title}</h1>
    </div>
  )
}