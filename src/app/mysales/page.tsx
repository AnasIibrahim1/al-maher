"use client"
import React from 'react';
import Container from '@/components/Container/Conatiner';
import Paragraph from '@/components/Paragraphs/small';

export default function MySalesPage() {
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
          مبيعاتي
        </Paragraph>
        
        <Paragraph style={{
          fontSize: '18px',
          color: '#6D737A',
          textAlign: 'center',
          lineHeight: '1.6',
          marginBottom: '50px'
        }}>
          هنا ستجد جميع المبيعات والإحصائيات الخاصة بك
        </Paragraph>

        {/* إحصائيات سريعة */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {[
            { title: 'إجمالي المبيعات', value: '15,750 د.ك', color: '#10B981' },
            { title: 'عدد الطلبات', value: '127', color: '#169FC6' },
            { title: 'العملاء الجدد', value: '89', color: '#F59E0B' },
            { title: 'معدل النمو', value: '+23%', color: '#EF4444' }
          ].map((stat, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e5e5',
              textAlign: 'center'
            }}>
              <Paragraph style={{
                fontSize: '14px',
                color: '#6D737A',
                marginBottom: '10px'
              }}>
                {stat.title}
              </Paragraph>
              <Paragraph style={{
                fontSize: '28px',
                color: stat.color,
                fontWeight: 'bold'
              }}>
                {stat.value}
              </Paragraph>
            </div>
          ))}
        </div>

        {/* قائمة المبيعات */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e5e5',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '20px',
            borderBottom: '1px solid #e5e5e5',
            backgroundColor: '#f9fafb'
          }}>
            <Paragraph style={{
              fontSize: '20px',
              color: 'black',
              fontWeight: 'bold'
            }}>
              آخر المبيعات
            </Paragraph>
          </div>
          
          <div style={{ padding: '0' }}>
            {[
              { 
                customer: 'أحمد محمد', 
                product: 'بكج التوجيهي المتقدم',
                amount: '250 د.ك',
                date: '2024/12/19',
                status: 'مكتمل'
              },
              { 
                customer: 'فاطمة علي', 
                product: 'دورة الصفوف الأساسية',
                amount: '180 د.ك',
                date: '2024/12/18',
                status: 'مكتمل'
              },
              { 
                customer: 'محمد حسن', 
                product: 'بطاقة Event',
                amount: '75 د.ك',
                date: '2024/12/17',
                status: 'قيد المعالجة'
              },
              { 
                customer: 'سارة أحمد', 
                product: 'دورة BTEC',
                amount: '320 د.ك',
                date: '2024/12/16',
                status: 'مكتمل'
              }
            ].map((sale, index) => (
              <div key={index} style={{
                padding: '20px',
                borderBottom: index < 3 ? '1px solid #e5e5e5' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}>
                <div style={{ flex: 1 }}>
                  <Paragraph style={{
                    fontSize: '16px',
                    color: 'black',
                    fontWeight: '600',
                    marginBottom: '5px'
                  }}>
                    {sale.customer}
                  </Paragraph>
                  <Paragraph style={{
                    fontSize: '14px',
                    color: '#6D737A'
                  }}>
                    {sale.product}
                  </Paragraph>
                </div>
                
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <Paragraph style={{
                    fontSize: '16px',
                    color: '#169FC6',
                    fontWeight: 'bold'
                  }}>
                    {sale.amount}
                  </Paragraph>
                  <Paragraph style={{
                    fontSize: '12px',
                    color: '#6D737A'
                  }}>
                    {sale.date}
                  </Paragraph>
                </div>
                
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{
                    padding: '6px 12px',
                    backgroundColor: sale.status === 'مكتمل' ? '#D1FAE5' : '#FEF3C7',
                    color: sale.status === 'مكتمل' ? '#065F46' : '#92400E',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}>
                    {sale.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}