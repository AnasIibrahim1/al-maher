/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react';
import Box from "@/components/Boxs/Box";
import Container from "@/components/Container/Conatiner";
import ContainerRow from "@/components/Container/ContainerRow";
import Paragraph from "@/components/Paragraphs/small";

export default function BasicPackagePage(){
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
    const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
    const [showCardPopup, setShowCardPopup] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
    const [cardCode, setCardCode] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    // بيانات الفئات الرئيسية
    const categories = [
        { id: 'grade5', title: 'الصف الخامس' },
        { id: 'grade6', title: 'الصف السادس' },
        { id: 'grade7', title: 'الصف السابع' },
        { id: 'grade8', title: 'الصف الثامن' },
        { id: 'grade9', title: 'الصف التاسع' },
        { id: 'grade10', title: 'الصف العاشر' }
    ];

    // بيانات الفصل الدراسي الثاني والأساتذة لكل فئة
    const subjectsData = {
        grade5: {
            title: 'الفصل الدراسي الثاني',
            subjects: [
                {
                    id: 'subjects',
                    title: 'الفصل الدراسي الثاني',
                    materials: [
                        {
                            name: 'رياضيات',
                            teachers: [
                                {
                                    id: 'teacher1',
                                    name: 'أ. أحمد محمد',
                                    image: '/ppl/ppl.jpg',
                                    description: 'خبرة 15 سنة في تدريس الرياضيات',
                                    subjects: ['رياضيات']
                                }
                            ]
                        },
                        {
                            name: 'علوم',
                            teachers: [
                                {
                                    id: 'teacher2',
                                    name: 'أ. فاطمة علي',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرسة العلوم مع خبرة 12 سنة',
                                    subjects: ['علوم']
                                }
                            ]
                        },
                        {
                            name: 'لغة عربية',
                            teachers: [
                                {
                                    id: 'teacher3',
                                    name: 'أ. سارة أحمد',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرسة اللغة العربية مع خبرة 10 سنة',
                                    subjects: ['لغة عربية']
                                }
                            ]
                        },
                        {
                            name: 'لغة إنجليزية',
                            teachers: [
                                {
                                    id: 'teacher4',
                                    name: 'أ. محمد حسن',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرس اللغة الإنجليزية مع خبرة 10 سنة',
                                    subjects: ['لغة إنجليزية']
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        grade6: {
            title: 'الفصل الدراسي الثاني',
            subjects: [
                {
                    id: 'subjects',
                    title: 'الفصل الدراسي الثاني',
                    materials: [
                        {
                            name: 'رياضيات',
                            teachers: [
                                {
                                    id: 'teacher5',
                                    name: 'أ. نور الدين',
                                    image: '/ppl/ppl.jpg',
                                    description: 'خبرة 15 سنة في تدريس الرياضيات',
                                    subjects: ['رياضيات']
                                }
                            ]
                        },
                        {
                            name: 'علوم',
                            teachers: [
                                {
                                    id: 'teacher6',
                                    name: 'أ. خديجة محمد',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرسة العلوم مع خبرة 12 سنة',
                                    subjects: ['علوم']
                                }
                            ]
                        },
                        {
                            name: 'لغة عربية',
                            teachers: [
                                {
                                    id: 'teacher7',
                                    name: 'أ. عبدالله علي',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرس اللغة العربية مع خبرة 10 سنة',
                                    subjects: ['لغة عربية']
                                }
                            ]
                        },
                        {
                            name: 'لغة إنجليزية',
                            teachers: [
                                {
                                    id: 'teacher8',
                                    name: 'أ. زينب أحمد',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرس اللغة الإنجليزية مع خبرة 10 سنة',
                                    subjects: ['لغة إنجليزية']
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        grade7: {
            title: 'الفصل الدراسي الثاني',
            subjects: [
                {
                    id: 'subjects',
                    title: 'الفصل الدراسي الثاني',
                    materials: [
                        {
                            name: 'رياضيات',
                            teachers: [
                                {
                                    id: 'teacher9',
                                    name: 'أ. علي الصناعي',
                                    image: '/ppl/ppl.jpg',
                                    description: 'خبرة 15 سنة في تدريس الرياضيات',
                                    subjects: ['رياضيات']
                                }
                            ]
                        },
                        {
                            name: 'علوم',
                            teachers: [
                                {
                                    id: 'teacher10',
                                    name: 'أ. فاطمة الزراعي',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرسة العلوم مع خبرة 12 سنة',
                                    subjects: ['علوم']
                                }
                            ]
                        },
                        {
                            name: 'لغة عربية',
                            teachers: [
                                {
                                    id: 'teacher11',
                                    name: 'أ. محمد الاقتصاد',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرس اللغة العربية مع خبرة 10 سنة',
                                    subjects: ['لغة عربية']
                                }
                            ]
                        },
                        {
                            name: 'لغة إنجليزية',
                            teachers: [
                                {
                                    id: 'teacher12',
                                    name: 'أ. أحمد المكثف',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرس اللغة الإنجليزية مع خبرة 10 سنة',
                                    subjects: ['لغة إنجليزية']
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        grade8: {
            title: 'الفصل الدراسي الثاني',
            subjects: [
                {
                    id: 'subjects',
                    title: 'الفصل الدراسي الثاني',
                    materials: [
                        {
                            name: 'رياضيات',
                            teachers: [
                                {
                                    id: 'teacher13',
                                    name: 'أ. أحمد محمد',
                                    image: '/ppl/ppl.jpg',
                                    description: 'خبرة 15 سنة في تدريس الرياضيات',
                                    subjects: ['رياضيات']
                                }
                            ]
                        },
                        {
                            name: 'علوم',
                            teachers: [
                                {
                                    id: 'teacher14',
                                    name: 'أ. فاطمة علي',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرسة العلوم مع خبرة 12 سنة',
                                    subjects: ['علوم']
                                }
                            ]
                        },
                        {
                            name: 'لغة عربية',
                            teachers: [
                                {
                                    id: 'teacher15',
                                    name: 'أ. سارة أحمد',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرس اللغة العربية مع خبرة 10 سنة',
                                    subjects: ['لغة عربية']
                                }
                            ]
                        },
                        {
                            name: 'لغة إنجليزية',
                            teachers: [
                                {
                                    id: 'teacher16',
                                    name: 'أ. محمد حسن',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرس اللغة الإنجليزية مع خبرة 10 سنة',
                                    subjects: ['لغة إنجليزية']
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        grade9: {
            title: 'الفصل الدراسي الثاني',
            subjects: [
                {
                    id: 'subjects',
                    title: 'الفصل الدراسي الثاني',
                    materials: [
                        {
                            name: 'رياضيات',
                            teachers: [
                                {
                                    id: 'teacher17',
                                    name: 'أ. ليلى كريم',
                                    image: '/ppl/ppl.jpg',
                                    description: 'خبرة 15 سنة في تدريس الرياضيات',
                                    subjects: ['رياضيات']
                                }
                            ]
                        },
                        {
                            name: 'علوم',
                            teachers: [
                                {
                                    id: 'teacher18',
                                    name: 'أ. عمر سعد',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرس العلوم مع خبرة 12 سنة',
                                    subjects: ['علوم']
                                }
                            ]
                        },
                        {
                            name: 'لغة عربية',
                            teachers: [
                                {
                                    id: 'teacher19',
                                    name: 'أ. نور الدين',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرس اللغة العربية مع خبرة 10 سنة',
                                    subjects: ['لغة عربية']
                                }
                            ]
                        },
                        {
                            name: 'لغة إنجليزية',
                            teachers: [
                                {
                                    id: 'teacher20',
                                    name: 'أ. خديجة محمد',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرس اللغة الإنجليزية مع خبرة 10 سنة',
                                    subjects: ['لغة إنجليزية']
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        grade10: {
            title: 'الفصل الدراسي الثاني',
            subjects: [
                {
                    id: 'subjects',
                    title: 'الفصل الدراسي الثاني',
                    materials: [
                        {
                            name: 'رياضيات',
                            teachers: [
                                {
                                    id: 'teacher21',
                                    name: 'أ. عبدالله علي',
                                    image: '/ppl/ppl.jpg',
                                    description: 'خبرة 15 سنة في تدريس الرياضيات',
                                    subjects: ['رياضيات']
                                }
                            ]
                        },
                        {
                            name: 'علوم',
                            teachers: [
                                {
                                    id: 'teacher22',
                                    name: 'أ. زينب أحمد',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرس العلوم مع خبرة 12 سنة',
                                    subjects: ['علوم']
                                }
                            ]
                        },
                        {
                            name: 'لغة عربية',
                            teachers: [
                                {
                                    id: 'teacher23',
                                    name: 'أ. علي الصناعي',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرس اللغة العربية مع خبرة 10 سنة',
                                    subjects: ['لغة عربية']
                                }
                            ]
                        },
                        {
                            name: 'لغة إنجليزية',
                            teachers: [
                                {
                                    id: 'teacher24',
                                    name: 'أ. فاطمة الزراعي',
                                    image: '/ppl/ppl.jpg',
                                    description: 'مدرس اللغة الإنجليزية مع خبرة 10 سنة',
                                    subjects: ['لغة إنجليزية']
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    };

    const handleCategoryClick = (categoryId: string) => {
        setSelectedCategory(categoryId);
        setSelectedSubject(null);
        setSelectedMaterial(null);
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
        }
    };

    const handleBackToMaterials = () => {
        setSelectedMaterial(null);
    };

    const handleTeacherClick = (teacher: any) => {
        setSelectedTeacher(teacher);
        setShowCardPopup(true);
        setCardCode('');
    };

    const handleCardSubmit = () => {
        // محاكاة التحقق من رمز البطاقة
        if (cardCode.length >= 6) {
            setShowCardPopup(false);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        }
    };

    const handleClosePopup = () => {
        setShowCardPopup(false);
        setSelectedTeacher(null);
        setCardCode('');
    };

    // عرض صفحة الأساتذة للمادة المختارة
    if (selectedCategory && selectedMaterial) {
        const categoryData = subjectsData[selectedCategory as keyof typeof subjectsData];
        const subjectData = categoryData.subjects.find(s => 
            s.materials.some(m => m.name === selectedMaterial)
        );
        const materialData = subjectData?.materials.find(m => m.name === selectedMaterial);
        
        return (
            <Container style={{minHeight: 'calc(100vh - 200px)', padding: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
                    {/* العنوان وأزرار العودة */}
                    <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                        <Paragraph style={{fontSize: '35px', fontWeight: 'bold', color: 'white', backgroundColor: '#169FC6', padding: '10px 100px', borderRadius: '10px'}}>
                            {categoryData.title} - {subjectData?.title || ''} - {selectedMaterial}
                        </Paragraph>
                    </div>

                    {/* الأساتذة */}
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '15px',
                        padding: '30px',
                    }}>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: '25px'
                        }}>
                            {materialData?.teachers.map((teacher) => (
                                <div className="Width" key={teacher.id} style={{
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    padding: '25px',
                                    width: '50%',
                                    border: '1px solid #e5e5e5',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                                }}
                                onClick={() => handleTeacherClick(teacher)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        marginBottom: '15px'
                                    }}>
                                        <img 
                                            src={teacher.image} 
                                            alt={teacher.name}
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                                border: '3px solid #169FC6'
                                            }}
                                        />
                                        <div>
                                            <Paragraph style={{
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                color: '#169FC6',
                                                marginBottom: '5px'
                                            }}>
                                                {teacher.name}
                                            </Paragraph>
                                            <Paragraph style={{
                                        fontSize: '14px',
                                        color: '#333',
                                        lineHeight: '1.5'
                                    }}>
                                        {teacher.description}
                                    </Paragraph>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <button 
                        onClick={handleBackToMaterials}
                        style={{
                            padding: '10px 20px',
                            margin: '20px auto',
                            width: 'fit-content',
                            backgroundColor: '#169FC6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            transition: 'background-color 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#0d8bb8';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#169FC6';
                        }}
                    >
                        ← العودة للمواد
                    </button>
                </div>

                {/* Popup رمز البطاقة */}
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
                )}

                {/* Toast نجاح الاشتراك */}
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
                        <Paragraph style={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            margin: 0
                        }}>
                            ✅ تم الاشتراك في الدورة بنجاح!
                        </Paragraph>
                    </div>
                )}
            </Container>
        );
    }

    // عرض صفحة الفئة المختارة
    if (selectedCategory) {
        const categoryData = subjectsData[selectedCategory as keyof typeof subjectsData];
        
        return (
            <Container style={{minHeight: 'calc(100vh - 200px)', padding: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                        <Paragraph style={{fontSize: '32px', fontWeight: 'bold', width: "90%", textAlign: 'right', margin: '0 auto', backgroundColor: '#169FC6',color:"white", borderRadius: '5px', padding: '10px 20px'}}>
                            {categories.find(cat => cat.id === selectedCategory)?.title}
                        </Paragraph>
                    </div>

                    {/* المحتوى الكامل */}
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '15px',
                    }}>
                        {/* تفاصيل جميع الفصل الدراسي الثاني */}
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
                                            {categoryData.title}
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
                    <Paragraph style={{fontSize: '18px', width: 'fit-content', margin: '0 auto', color: 'white', backgroundColor: '#169FC6', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer'}} onClick={handleBackToCategories}>
                    ← العودة للمواد
                    </Paragraph>
                </div>
            </Container>
        );
    }

    // عرض البوكسات الرئيسية
    return (
        <Container style={{minHeight: 'calc(100vh - 200px)', padding: '20px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '100px', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                <Paragraph style={{
                    fontSize: '24px', 
                    padding: '10px 80px', 
                    fontWeight: 'bold', 
                    color: '#169FC6', 
                    width: 'fit-content', 
                    borderRadius: '5px', 
                    border: '1px solid #D9D9D9', 
                    margin: '0 auto', 
                    textAlign: 'center'
                }}>
                    يحقُّ لك أن ترتقي
                </Paragraph>

                <ContainerRow gap="10" justify="center" wrap>
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
                            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
                            }}
                            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <Paragraph style={{fontSize: '30px', fontWeight: 'bold', color: 'white'}}>
                                {category.title}
                            </Paragraph>
                        </div>
                    ))}
                </ContainerRow>
            </div>
        </Container>
    );
}






