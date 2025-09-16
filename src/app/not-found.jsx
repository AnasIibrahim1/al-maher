'use client'
import React from 'react';
import GeneralButton from '@/components/Buttons/GeneralButtons/Buttons';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>

      {/* Content */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        width: '100%'
      }}>
        {/* Logo */}
        <div style={{
          marginBottom: '20px',
        }}>
          <img src="/Shapes/404.svg" alt="" />
        </div>

        {/* 404 Number */}
        <div style={{
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#2A254D',
        }}>
          ! الصفحة غير موجودة
        </div>
        <p style={{
          fontSize: '18px',
          marginBottom: '40px',
          opacity: 0.9,
          lineHeight: '1.6',
          animation: 'slideInUp 0.8s ease-out 0.4s both'
        }}>
          عذراً، الصفحة التي تبحث عنها غير موجودة .
        </p>

        <GeneralButton href="/" backgroundColor="#F57005" color="#fff" padding="10px 20px" border="none" fontSize="16px">
          العودة للرئيسية
        </GeneralButton>
      </div>
    </div>
  );
}
