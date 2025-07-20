"use client"
import React from 'react';
import Container from '@/components/Container/Conatiner';
import Paragraph from '@/components/Paragraphs/small';

export default function MyCoursesPage() {
  return (
    <Container style={{ minHeight: '80vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Paragraph style={{
          fontSize: '36px',
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          دوراتي
        </Paragraph>
        
        <Paragraph style={{
          fontSize: '18px',
          color: '#6D737A',
          textAlign: 'center',
          lineHeight: '1.6',
          marginBottom: '50px'
        }}>
          هنا ستجد جميع الدورات التي قمت بالتسجيل فيها
        </Paragraph>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          padding: '20px'
        }}>
          {[
            { 
              title: 'دورة التوجيهي المتقدمة', 
              description: 'دورة شاملة لطلاب التوجيهي',
              progress: 75,
              status: 'جاري التعلم'
            },
            { 
              title: 'بكج الصفوف الأساسية', 
              description: 'باقة شاملة للصفوف الأساسية',
              progress: 100,
              status: 'مكتمل'
            },
            { 
              title: 'دورة BTEC المتخصصة', 
              description: 'دورة خاصة لطلاب BTEC',
              progress: 30,
              status: 'جاري التعلم'
            }
          ].map((course, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e5e5',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}>
              <Paragraph style={{
                fontSize: '24px',
                color: '#169FC6',
                fontWeight: 'bold',
                marginBottom: '15px',
                textAlign: 'center'
              }}>
                {course.title}
              </Paragraph>
              <Paragraph style={{
                fontSize: '16px',
                color: '#6D737A',
                textAlign: 'center',
                lineHeight: '1.5',
                marginBottom: '20px'
              }}>
                {course.description}
              </Paragraph>
              
              {/* شريط التقدم */}
              <div style={{ marginBottom: '15px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <span style={{ fontSize: '14px', color: '#6D737A' }}>التقدم</span>
                  <span style={{ fontSize: '14px', color: '#169FC6', fontWeight: 'bold' }}>
                    {course.progress}%
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: '#e5e5e5',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${course.progress}%`,
                    height: '100%',
                    backgroundColor: course.progress === 100 ? '#10B981' : '#169FC6',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>
              
              {/* الحالة */}
              <div style={{
                textAlign: 'center',
                padding: '8px 16px',
                backgroundColor: course.status === 'مكتمل' ? '#D1FAE5' : '#DBEAFE',
                color: course.status === 'مكتمل' ? '#065F46' : '#1E40AF',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 'bold',
                display: 'inline-block',
                width: '100%'
              }}>
                {course.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
} 