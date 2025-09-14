'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #2A254D 0%, #4F5DE4 100%)',
      color: '#fff',
      textAlign: 'center',
      padding: '20px'
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 1
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '80px',
          height: '80px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '120px',
          height: '120px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '600px',
        width: '100%'
      }}>
        {/* Logo */}
        <div style={{
          marginBottom: '40px',
          animation: 'bounceIn 1s ease-out'
        }}>
          <Image 
            src="/Logo/white_one.png" 
            alt="الماهر" 
            width={150} 
            height={50}
            priority
          />
        </div>

        {/* 404 Number */}
        <div style={{
          fontSize: '120px',
          fontWeight: 'bold',
          marginBottom: '20px',
          background: 'linear-gradient(45deg, #F57005, #ff8c42)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'pulse 2s ease-in-out infinite',
          textShadow: '0 0 30px rgba(245, 112, 5, 0.5)'
        }}>
          404
        </div>

        {/* Error Message */}
        <h1 style={{
          fontSize: '32px',
          fontWeight: '600',
          marginBottom: '20px',
          animation: 'slideInUp 0.8s ease-out 0.2s both'
        }}>
          الصفحة غير موجودة
        </h1>

        <p style={{
          fontSize: '18px',
          marginBottom: '40px',
          opacity: 0.9,
          lineHeight: '1.6',
          animation: 'slideInUp 0.8s ease-out 0.4s both'
        }}>
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'slideInUp 0.8s ease-out 0.6s both'
        }}>
          <Link 
            href="/" 
            style={{
              display: 'inline-block',
              padding: '15px 30px',
              background: '#F57005',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(245, 112, 5, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#e55a00';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(245, 112, 5, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#F57005';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(245, 112, 5, 0.3)';
            }}
          >
            العودة للرئيسية
          </Link>

          <Link 
            href="/contact" 
            style={{
              display: 'inline-block',
              padding: '15px 30px',
              background: 'transparent',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '16px',
              border: '2px solid #fff',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#fff';
              e.target.style.color = '#2A254D';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            اتصل بنا
          </Link>
        </div>

        {/* Helpful Links */}
        <div style={{
          marginTop: '50px',
          animation: 'slideInUp 0.8s ease-out 0.8s both'
        }}>
          <p style={{
            fontSize: '16px',
            marginBottom: '20px',
            opacity: 0.8
          }}>
            أو جرب هذه الصفحات:
          </p>
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/about" style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '15px',
              background: 'rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              fontSize: '14px'
            }}>
              من نحن
            </Link>
            <Link href="/blog" style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '15px',
              background: 'rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              fontSize: '14px'
            }}>
              المدونة
            </Link>
            <Link href="/register" style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '15px',
              background: 'rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              fontSize: '14px'
            }}>
              التسجيل
            </Link>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes slideInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
