export default function CircleWithBrush({src, position, style}) {
  return (
    <div className="circle-with-brush-container" style={{position: position, ...style}}>
            <div className="circle-with-brush-content-inner" style={{width: "fit-content", height: "fit-content", position: "relative"}}>
                    <img src="/bus.svg" alt="Circle With Brush" style={{width: "100%", height: "100%"}}/>
                    <div className="circle-with-brush-content-inner-circle" style={{width: "70%", height: "80%", backgroundColor: "blue", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", borderRadius: "50%", overflow: "hidden"}}>
                        <img src={src} alt="photo" style={{width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover"}} />
                    </div>
                    <img src="/Brush (1).svg" alt="Brush" style={{width: "100%", height: "100%", position: "absolute", top: "50%", right: "-150px", transform: "translate(0%, -50%)"}} />
            </div>
    </div>
  )
}       