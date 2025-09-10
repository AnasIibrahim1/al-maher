import IconButtons from "@/components/Buttons/IconButtons/IconButtons";

export default function DoubleCircles() {
    return (
        <div>
            <div style={{position: "relative", width: "450px", height: "650px", backgroundImage: "url('/photo.jpg')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "500px"}}>
            <div style={{position: "absolute", bottom: "0", left: "-200px", width: "300px", height: "450px", backgroundImage: "url('/photo.jpg')", backgroundSize: "cover", backgroundPosition: "center", border : "10px solid #fff",  borderRadius: "500px"}}>
                <div style={{position: "relative", width: "100%", height: "100%"}}>
                    <img src="/Overlays/OverlayCircle.png" alt="" style={{width: "80%", height: "50%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} />
                    <div style={{position: "absolute", bottom: "-20px", left: "-20px", zIndex: "-1"}}>
                <img src="/Shapes/do.svg" alt="" />
            </div>
            <div style={{position: "absolute", top: "-100px", left: "-50px", zIndex: "-1"}}>
                <img src="/Shapes/cir.svg" alt="" />
            </div>
                </div>
            </div>
            <div style={{position: "absolute", top: "0", left: "-200px", width:"250px", height:"150px", backgroundColor:"#fff", borderRadius:"10px", boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.1)"}}>
                <div style={{position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <div style={{position: "absolute", top: "-20px", left: "10px"}}>
                        <IconButtons backgroundColor="#4F5DE4" borderRadius="10px" width="40px" height="40px" padding="10px" icon={<img src="/icons/trophy.svg" alt=""/>} />
                    </div>
                    <div style={{textAlign: "center"}}>
                    <h3 style={{fontSize: "30px", fontWeight: "bold", color: "#F57005", margin:"0", padding:"0"}}>+230</h3>
                    <p style={{fontSize: "18px", color: "gray", margin:"0", padding:"0"}}>أفضل جوائز</p>
                    </div>
                </div>
            </div>
            <div style={{position: "absolute", top: "-40px", left: "-20px", zIndex: "-1"}}>
                <img src="/Shapes/+.svg" alt="" />
            </div>
            <div style={{position: "absolute", bottom: "-50px", left: "30px", zIndex: "1"}}>
                <img src="/Shapes/mes.svg" alt="" />
            </div>
            <div style={{position: "absolute", bottom: "40px", left: "50px", zIndex:"2"}}>
                        <IconButtons backgroundColor="#4F5DE4" borderRadius="10px" width="40px" height="40px" padding="10px" icon={<img src="/icons/trophy.svg" alt=""/>} />
                    </div>
            </div>
        </div>
    )
}