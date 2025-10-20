import "./style.css";

export default function Bubbles() {
  return (
    <div className="bubbles-wrapper" aria-hidden="true">
      {/* Rising from bottom */}
      <div className="bubble" style={{"--i": 1}}></div>
      <div className="bubble" style={{"--i": 2}}></div>
      <div className="bubble" style={{"--i": 3}}></div>
      <div className="bubble" style={{"--i": 4}}></div>
      <div className="bubble" style={{"--i": 5}}></div>
      <div className="bubble" style={{"--i": 6}}></div>
      <div className="bubble" style={{"--i": 7}}></div>
      <div className="bubble" style={{"--i": 8}}></div>
      <div className="bubble" style={{"--i": 9}}></div>
      <div className="bubble" style={{"--i": 10}}></div>

      {/* Falling from top */}
      <div className="bubble bubble-down" style={{"--i": 1}}></div>
      <div className="bubble bubble-down" style={{"--i": 2}}></div>
      <div className="bubble bubble-down" style={{"--i": 3}}></div>
      <div className="bubble bubble-down" style={{"--i": 4}}></div>
      <div className="bubble bubble-down" style={{"--i": 5}}></div>
    </div>
  )
}
