"use client"
import React from 'react';
import Container from '@/components/Container/Conatiner';
import Paragraph from '@/components/Paragraphs/small';

export default function CoursesPage() {
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
          محتوى المنصة
        </Paragraph>
        
        <Paragraph style={{
          fontSize: '18px',
          color: '#6D737A',
          textAlign: 'center',
          lineHeight: '1.6',
          marginBottom: '50px'
        }}>
          هنا ستجد جميع المحتويات والدورات المتاحة في منصة الماهر
        </Paragraph>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          padding: '20px'
        }}>
          {[
            { title: 'توجيهي', description: 'دورات التوجيهي للطلاب' },
            { title: 'بكجات التوجيهي', description: 'باقات شاملة للتوجيهي' },
            { title: 'الصفوف الأساسية', description: 'دورات الصفوف الأساسية' },
            { title: 'طلاب الـBTEC', description: 'دورات خاصة لطلاب BTEC' },
            { title: 'بطاقة الـ Event', description: 'بطاقات الأحداث والفعاليات' },
            { title: 'بكجات الصفوف الأساسية', description: 'باقات شاملة للصفوف الأساسية' }
          ].map((item, index) => (
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
                {item.title}
              </Paragraph>
              <Paragraph style={{
                fontSize: '16px',
                color: '#6D737A',
                textAlign: 'center',
                lineHeight: '1.5'
              }}>
                {item.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
} 