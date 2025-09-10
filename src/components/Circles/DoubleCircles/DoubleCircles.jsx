export default function DoubleCircles() {
    return (
        <div>
            <div style={{position: "relative", width: "450px", height: "650px", backgroundColor: "#152B4A", borderRadius: "500px"}}>
            <div style={{position: "absolute", bottom: "0", left: "-200px", width: "300px", height: "450px", backgroundColor: "#152B4A", border : "10px solid #fff",  borderRadius: "500px"}}>
                <div style={{position: "relative", width: "100%", height: "100%"}}>
                    <img src="/Overlays/OverlayCircle.png" alt="" style={{width: "80%", height: "50%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} />
                </div>
            </div>

            </div>
        </div>
    )
}