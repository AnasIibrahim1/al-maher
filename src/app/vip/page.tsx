"use client";
import React, { useState } from 'react';
import Container from '@/components/Container/Conatiner';
import Paragraph from '@/components/Paragraphs/small';

export default function VipPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [showCardPopup, setShowCardPopup] = useState(false);
  const [cardCode, setCardCode] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // بيانات الفئات الرئيسية
  const categories = [
    { id: 'generation2007', title: 'جيل 2007' },
    { id: 'generation2008', title: 'جيل 2008' },
    { id: 'complementary', title: 'تكميلي' },
    { id: 'intensive', title: 'مكثفات' }
  ];

  // بيانات المواد لكل فئة (بدون معلمين)
  const subjectsData = {
    generation2007: {
      title: 'جيل 2007',
      subjects: [
        {
          id: 'common',
          title: 'المواد المشتركة',
          materials: [
            { name: 'عربي' },
            { name: 'تاريخ الاردن' },
            { name: 'تربيه اسلاميه' },
            { name: 'للغه الانجليزيه' }
          ]
        },
        {
          id: 'scientific',
          title: 'علمي',
          materials: [
            { name: 'رياضه' },
            { name: 'فيزيا' },
            { name: 'كيمياء' },
            { name: 'احياء' }
          ]
        },
        {
          id: 'literary',
          title: 'ادبي',
          materials: [
            { name: 'عربي' },
            { name: 'جغرافيا' },
            { name: 'تربيه اسلاميه' }
          ]
        },
        {
          id: 'vocational',
          title: 'الفروع المهنية',
          materials: [
            { name: 'صناعي' },
            { name: 'زراعي' },
            { name: 'اقتصاد منزلي' }
          ]
        },
        {
          id: 'intensive',
          title: 'الدورات المكثفة',
          materials: [
            { name: 'جميع المواد' }]
        }
      ]
    },
    generation2008: {
      title: 'جيل 2008',
      subjects: [
        {
          id: 'common',
          title: 'المواد المشتركة',
          materials: [
            { name: 'عربي' },
            { name: 'تاريخ الاردن' },
            { name: 'تربيه اسلاميه' },
            { name: 'للغه الانجليزيه' }
          ]
        },
        {
          id: 'scientific',
          title: 'علمي',
          materials: [
            { name: 'رياضه' },
            { name: 'فيزيا' },
            { name: 'كيمياء' },
            { name: 'احياء' }
          ]
        },
        {
          id: 'literary',
          title: 'ادبي',
          materials: [
            { name: 'عربي' },
            { name: 'جغرافيا' },
            { name: 'تربيه اسلاميه' }
          ]
        },
        {
          id: 'vocational',
          title: 'الفروع المهنية',
          materials: [
            { name: 'صناعي' },
            { name: 'زراعي' },
            { name: 'اقتصاد منزلي' }
          ]
        }
      ]
    },
    complementary: {
      title: 'تكميلي',
      subjects: [
        {
          id: 'basic',
          title: 'المواد الأساسية',
          materials: [
            { name: 'رياضيات' },
            { name: 'علوم' },
            { name: 'لغة عربية' },
            { name: 'لغة إنجليزية' }
          ]
        },
        {
          id: 'advanced',
          title: 'المواد المتقدمة',
          materials: [
            { name: 'فيزياء' },
            { name: 'كيمياء' },
            { name: 'أحياء' },
            { name: 'جغرافيا' }
          ]
        }
      ]
    },
    intensive: {
      title: 'مكثفات',
      subjects: [
        {
          id: 'all',
          title: 'جميع المواد',
          materials: [
            { name: 'دورة شاملة لجميع المواد' }]
        }
      ]
    }
  };

  // Change handleCategoryClick to show the popup directly
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubject(null);
    setSelectedMaterial(null);
    // Do NOT open the popup here
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedSubject(null);
    setSelectedMaterial(null);
  };

  const handleSubjectClick = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setSelectedMaterial(null);
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
    setSelectedMaterial(null);
  };

  const handleMaterialClick = (materialName: string) => {
    // نحتاج لتعيين selectedSubject أيضاً
    const categoryData = subjectsData[selectedCategory as keyof typeof subjectsData];
    const subject = categoryData.subjects.find(s =>
      s.materials.some(m => m.name === materialName)
    );
    if (subject) {
      setSelectedSubject(subject.id);
      setSelectedMaterial(materialName);
      setShowCardPopup(true); // Open popup only here
    }
  };

  const handleBackToMaterials = () => {
    setSelectedMaterial(null);
    setShowCardPopup(false);
  };

  const handleCardSubmit = () => {
    // محاكاة التحقق من رمز البطاقة
    if (cardCode.length >= 6) {
      setShowCardPopup(false);
      setCardCode(''); // Clear the input field when subscribing
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedMaterial(null);
      }, 3000);
    }
  };

  const handleClosePopup = () => {
    setShowCardPopup(false);
    setCardCode(''); // Clear the input field when closing
  };

  // Popup رمز البطاقة (مطابق لطريقة twgeeh)
  const CardCodePopup = () => (
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
        <div style={{marginBottom: '20px'}}>
          <Paragraph style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px'
          }}>
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
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#169FC6';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e5e5';
            }}
          />
        </div>
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center'
        }}>
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
  );

  // Toast نجاح الاشتراك
  const SuccessToast = () => (
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
  );

  // عرض صفحة الفئة المختارة
  if (selectedCategory) {
    const categoryData = subjectsData[selectedCategory as keyof typeof subjectsData];
    return (
      <Container style={{ padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Paragraph style={{ fontSize: '32px', fontWeight: 'bold', width: '50%', textAlign: 'center', margin: '0 auto', backgroundColor: '#169FC6', color: 'white', borderRadius: '5px', padding: '10px 20px' }}>
              {categoryData.title}
            </Paragraph>
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '15px' }}>
            <div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                gap: '15px'
              }}>
                {categoryData.subjects.map((subject) => (
                  <div key={subject.id} style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #e5e5e5',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                    padding: '20px',
                    width: '300px',
                    minHeight: '300px'
                  }}>
                    <Paragraph style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      textAlign: 'center',
                      backgroundColor: '#169FC6',
                      color: 'white',
                      borderRadius: '5px',
                      padding: '30px 20px'
                    }}>
                      {subject.title}
                    </Paragraph>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}>
                      {subject.materials.map((material, index) => (
                        <div key={index} style={{
                          backgroundColor: '#f8f9fa',
                          padding: '10px',
                          borderRadius: '5px',
                          border: '1px solid #e5e5e5',
                          textAlign: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          userSelect: 'none'
                        }}
                          onClick={() => handleMaterialClick(material.name)}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#e3f2fd';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#f8f9fa';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}>
                          <Paragraph style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#333',
                            pointerEvents: 'none'
                          }}>
                            {material.name}
                          </Paragraph>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Paragraph style={{ fontSize: '18px', width: 'fit-content', margin: '0 auto', color: 'white', backgroundColor: '#169FC6', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }} onClick={handleBackToCategories}>
            ← العودة للمواد
          </Paragraph>
        </div>
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
              <div style={{ marginBottom: '20px' }}>
                <Paragraph style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '10px'
                }}>
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
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#169FC6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e5e5';
                  }}
                />
              </div>
              <div style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center'
              }}>
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

  // In the main return, remove the conditional rendering for subjects/materials and just show the popup when showCardPopup is true
  return (
    <Container style={{ padding: '20px' , height: '100%'}}>
                                                <Paragraph style={{fontSize: '32px', fontWeight: 'bold', width: "90%", margin: '0 auto', textAlign: 'right', backgroundColor: '#169FC6',color:"white", borderRadius: '5px', padding: '10px 20px'}}>
                                                بطافات ال Event
                    </Paragraph>
      <div style={{height: '100%', display: 'flex', flexDirection: 'column', gap: '100px'}}>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          marginTop: '30px',
          height: '100%'
        }}>
          {categories.map((category) => (
            <div
              key={category.id}
              style={{
                width: '200px',
                height: '200px',
                backgroundColor: '#169FC6',
                borderRadius: '5px',
                border: '1px solid #D9D9D9',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => handleCategoryClick(category.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <Paragraph style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>
                {category.title}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}  