'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogNotFound() {
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
          top: '15%',
          left: '10%',
          width: '80px',
          height: '80px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '20%',
          width: '60px',
          height: '60px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '500px',
        width: '100%'
      }}>
        {/* Blog Icon */}
        <div style={{
          marginBottom: '30px',
          animation: 'bounceIn 1s ease-out'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            backdropFilter: 'blur(10px)'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14,2 14,8 20,8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10,9 9,9 8,9"></polyline>
            </svg>
          </div>
        </div>

        {/* 404 Number */}
        <div style={{
          fontSize: '100px',
          fontWeight: 'bold',
          marginBottom: '20px',
          background: 'linear-gradient(45deg, #F57005, #ff8c42)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          404
        </div>

        {/* Error Message */}
        <h1 style={{
          fontSize: '28px',
          fontWeight: '600',
          marginBottom: '15px',
          animation: 'slideInUp 0.8s ease-out 0.2s both'
        }}>
          المقال غير موجود
        </h1>

        <p style={{
          fontSize: '16px',
          marginBottom: '35px',
          opacity: 0.9,
          lineHeight: '1.6',
          animation: 'slideInUp 0.8s ease-out 0.4s both'
        }}>
          عذراً، المقال الذي تبحث عنه غير موجود أو تم حذفه.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'slideInUp 0.8s ease-out 0.6s both'
        }}>
          <Link 
            href="/blog" 
            style={{
              display: 'inline-block',
              padding: '12px 25px',
              background: '#F57005',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '14px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(245, 112, 5, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#e55a00';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#F57005';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            العودة للمدونة
          </Link>

          <Link 
            href="/" 
            style={{
              display: 'inline-block',
              padding: '12px 25px',
              background: 'transparent',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '14px',
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
            الرئيسية
          </Link>
        </div>

        {/* Recent Posts Suggestion */}
        <div style={{
          marginTop: '40px',
          animation: 'slideInUp 0.8s ease-out 0.8s both'
        }}>
          <p style={{
            fontSize: '14px',
            marginBottom: '15px',
            opacity: 0.8
          }}>
            أو تصفح أحدث المقالات:
          </p>
          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/blog" style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              fontSize: '12px'
            }}>
              أحدث المقالات
            </Link>
            <Link href="/blog?category=تطوير" style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              fontSize: '12px'
            }}>
              تطوير
            </Link>
            <Link href="/blog?category=تصميم" style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              fontSize: '12px'
            }}>
              تصميم
            </Link>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
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
