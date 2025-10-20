export default function BotCard({content, width, height}) {
  return (
    <div style={{backgroundColor: "#2A254D", width: width, height: height, position: "relative", borderRadius: "10px"}}>
        <img src="/Shapes/DownShape.png" alt="" style={{position: "absolute", bottom: "0", left: "0", width: "100%", height: "30%"}} />
      {content}
    </div>
  )
}