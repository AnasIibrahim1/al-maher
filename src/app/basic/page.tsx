"use client";
import React, { useState } from "react";
import Container from "@/components/Container/Conatiner";
import Paragraph from "@/components/Paragraphs/small";

const categories = [
  { id: "cat1", title: "عروض 1", image: "/banners/banner_25_jd.png" },
  { id: "cat2", title: "عروض 2", image: "/banners/banner_50_jd.png" },
];

const grades = [
  "الصف الخامس",
  "الصف السادس",
  "الصف السابع",
  "الصف الثامن",
  "الصف التاسع",
  "الصف العاشر",
];

export default function BasicPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCardPopup, setShowCardPopup] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [cardCode, setCardCode] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedGrade(null);
  };

  const handleGradeClick = (grade: string) => {
    setSelectedGrade(grade);
    setShowCardPopup(true);
  };

  const handleClosePopup = () => {
    setShowCardPopup(false);
    setCardCode("");
    setSelectedGrade(null);
  };

  const handleCardSubmit = () => {
    if (cardCode.length >= 6) {
      setShowCardPopup(false);
      setCardCode("");
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedGrade(null);
      }, 2000);
    }
  };

  // الصفحة الرئيسية: عرض الصور فقط
  if (!selectedCategory) {
    return (
        
      <Container style={{ padding: "20px" }}>
                                               <Paragraph style={{fontSize: '32px', fontWeight: 'bold', width: "90%", margin: '0 auto', textAlign: 'right', backgroundColor: '#169FC6',color:"white", borderRadius: '5px', padding: '10px 20px'}}>
                                   مرحباً بك في قسم العروض توجيهي 2007 - 2008
                                   <Paragraph style={{fontSize: '16px', textAlign: 'right', fontWeight: '200',color:"white"}}>
                                   أنه يحق لك ان ترتقي ، منصة الماهر توفر لك العديد من العروض التي تمكنك من الحصول على عدة مواد بأسعار مناسبة
                                   </Paragraph>
                    </Paragraph>
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "60px",
          alignItems: "center",
          height: "100%"
        }}>
          {categories.map((category) => (
            <div
              key={category.id}
              style={{
                marginTop: "40px",
                width: "400px",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                cursor: "pointer",
                transition: "transform 0.2s",
                position: "relative",
                background: "#fff"
              }}
              onClick={() => handleCategoryClick(category.id)}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={category.image}
                alt={category.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </Container>
    );
  }

  // عند اختيار category: عرض الصفوف
  if (selectedCategory) {
    const selectedCat = categories.find(cat => cat.id === selectedCategory);
    return (
      <Container style={{ minHeight: 'calc(100vh - 200px)', padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
          {selectedCat && (
            <img
              src={selectedCat.image}
              alt={selectedCat.title}
              style={{ width: "300px", objectFit: "cover", borderRadius: 12, margin: '0 auto 30px', display: 'block' }}
            />
          )}
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
            {grades.map((grade) => (
              <div
                key={grade}
                style={{
                  backgroundColor: '#169FC6',
                  borderRadius: '8px',
                  border: '1px solid #e5e5e5',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                  padding: '30px 50px',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  marginBottom: '10px',
                  textAlign: 'center',
                  width: '200px',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => handleGradeClick(grade)}
              >
                {grade}
              </div>
            ))}
          </div>
          <Paragraph style={{ fontSize: '18px', width: 'fit-content', margin: '30px auto 0', color: 'white', backgroundColor: '#169FC6', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }} onClick={() => setSelectedCategory(null)}>
            ← العودة للعروض
          </Paragraph>
        </div>
        {/* Popup */}
        {showCardPopup && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '30px',
              maxWidth: '400px',
              width: '90%',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
            }}>
              <Paragraph style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                أدخل رمز البطاقة:
              </Paragraph>
              <input
                type="text"
                value={cardCode}
                onChange={(e) => setCardCode(e.target.value)}
                placeholder="أدخل رمز البطاقة هنا..."
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e5e5',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  marginBottom: '20px'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#169FC6';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e5e5';
                }}
              />
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button
                  onClick={handleCardSubmit}
                  style={{
                    padding: '12px 25px',
                    backgroundColor: '#169FC6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0d8bb8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#169FC6';
                  }}
                >
                  اشتراك
                </button>
                <button
                  onClick={handleClosePopup}
                  style={{
                    padding: '12px 25px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#5a6268';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#6c757d';
                  }}
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Toast */}
        {showSuccess && (
          <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#28a745',
            color: 'white',
            padding: '15px 25px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: 1001,
            animation: 'slideIn 0.3s ease'
          }}>
            <Paragraph style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>
              ✅ تم الاشتراك في الدورة بنجاح!
            </Paragraph>
          </div>
        )}
      </Container>
    );
  }
}