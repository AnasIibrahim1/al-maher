'use client'
import "./style.css";
import HeaderPargraph from "@/components/Paragraphs/Header/HeaderPargraph";
import GeneralButton from "@/components/Buttons/GeneralButtons/Buttons";

export default function ContactPage() {
  return (
      <>
          {/* Head Section */}
    <section className="contact-hero-section">
      <div className="contact-hero-content">
        <h1 className="contact-hero-title">تواصل معنا</h1>
        <p className="contact-hero-breadcrumb">الرئيسية / تواصل معنا</p>
      </div>
    </section>


    {/* Contact us Section */}
    <div className="contact-intro-section">
      <div className="contact-intro-container">
        <div className="contact-intro-header">
          <h4 className="contact-intro-title">تواصل معنا</h4>
          <img src="/Shapes/frame.svg" alt="" className="contact-intro-shape" />
        </div>
        <HeaderPargraph title="يسعدنا تواصلكم معنا" color="#2A254D" alignItems="center" justifyContent="center" style={{margin:"0px"}}/>
      </div>
    </div>

    {/* Form Section */}
      <section style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "0px 0px 100px 0px"}}>
        <div style={{width: "80%", padding: "50px",  borderRadius: "10px", }}>
          <form style={{width: "100%", display: "flex", flexDirection: "column", gap: "20px"}}>
            
            {/* Name and Email Row */}
            <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
              <input 
                type="text"
                placeholder="الاسم"
                style={{
                  flex: 1,
                  padding: "15px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "16px",
                  backgroundColor: "#F6F6F6",
                }}
              />
              <input
                type="email" 
                placeholder="البريد الإلكتروني"
                style={{
                  flex: 1,
                  padding: "15px",
                  borderRadius: "8px", 
                  border: "none",
                  fontSize: "16px",
                  backgroundColor: "#F6F6F6",
                }}
              />
            </div>

            {/* Phone and Subject Row */}
            <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
              <input
                type="tel"
                placeholder="رقم الهاتف"
                style={{
                  flex: 1,
                  padding: "15px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "16px",
                  backgroundColor: "#F6F6F6",
                }}
              />
              <input
                type="text"
                placeholder="الموضوع"
                style={{
                  flex: 1,
                  padding: "15px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "16px",
                  backgroundColor: "#F6F6F6",
                }}
              />
            </div>

            {/* Message Textarea */}
            <textarea
              placeholder="اكتب رسالتك هنا..."
              rows={6}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "8px",
                border: "none",
                fontSize: "16px",
                resize: "vertical",
                backgroundColor: "#F6F6F6",
              }}
            />

            {/* Submit Button */}
<div style={{width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
<GeneralButton backgroundColor="#F57005" color="#fff" padding="15px 30px" border="none" borderRadius="8px" fontWeight="bold" cursor="pointer" alignSelf="center" transition="background-color 0.3s ease">إرسال الرسالة</GeneralButton>
</div>
          </form>
        </div>
      </section>
    
    {/* Contact Info Section */}
    <section style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <div style={{ width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "50px", marginBottom: "50px", boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}>
        
        {/* Email Container */}
        <div style={{ 
          flex: 1,
          padding: "30px",
          borderRadius: "0px 12px 12px 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          transition: "all 0.3s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#4F5DE4";
          e.currentTarget.querySelector('svg').style.stroke = "#fff";
          e.currentTarget.querySelector('h3').style.color = "#fff";
          e.currentTarget.querySelector('p').style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#fff";
          e.currentTarget.querySelector('svg').style.stroke = "#4F5DE4";
          e.currentTarget.querySelector('h3').style.color = "#333";
          e.currentTarget.querySelector('p').style.color = "#000";
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4F5DE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transition: "all 0.3s ease"}}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <h3 style={{ margin: "15px 0", color: "#333", transition: "all 0.3s ease" }}>البريد الإلكتروني</h3>
          <p style={{ color: "#000", transition: "all 0.3s ease", fontSize: "20px",fontWeight: "bold" }}>info@example.com</p>
        </div>

        {/* Location Container */}
        <div style={{ 
          flex: 1,
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          transition: "all 0.3s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#4F5DE4";
          e.currentTarget.querySelector('svg').style.stroke = "#fff";
          e.currentTarget.querySelector('h3').style.color = "#fff";
          e.currentTarget.querySelector('p').style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#fff";
          e.currentTarget.querySelector('svg').style.stroke = "#4F5DE4";
          e.currentTarget.querySelector('h3').style.color = "#333";
          e.currentTarget.querySelector('p').style.color = "#000";
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4F5DE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transition: "all 0.3s ease"}}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <h3 style={{ margin: "15px 0", color: "#333", transition: "all 0.3s ease" }}>الموقع</h3>
          <p style={{ color: "#000", transition: "all 0.3s ease", fontSize: "20px",fontWeight: "bold" }}>الرياض، المملكة العربية السعودية</p>
        </div>

        {/* Phone Container */}
        <div style={{ 
          flex: 1,
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "12px 0 0 12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          transition: "all 0.3s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#4F5DE4";
          e.currentTarget.querySelector('svg').style.stroke = "#fff";
          e.currentTarget.querySelector('h3').style.color = "#fff";
          e.currentTarget.querySelector('p').style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#fff";
          e.currentTarget.querySelector('svg').style.stroke = "#4F5DE4";
          e.currentTarget.querySelector('h3').style.color = "#333";
          e.currentTarget.querySelector('p').style.color = "#000";
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4F5DE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transition: "all 0.3s ease"}}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <h3 style={{ margin: "15px 0", color: "#333", transition: "all 0.3s ease" }}>رقم الهاتف</h3>
          <p style={{ color: "#000", transition: "all 0.3s ease", fontSize: "20px",fontWeight: "bold" }}>+966 123 456 789</p>
        </div>

      </div>
    </section>

    {/* Map Section */}
    <section style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <div style={{width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
        <div style={{width: "100%", height: "500px", overflow: "hidden"}}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463880.6834102315!2d46.54076661854436!3d24.725555344548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1699482493100!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            style={{border: "0"}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
      </>
  );
}


