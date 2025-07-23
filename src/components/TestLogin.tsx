"use client"
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import General_Button from './Buttons/General_Button';

const TestLogin = () => {
  const { login, logout, isLoggedIn, user } = useAuth();

  const handleTestLogin = () => {
    login({
      id: '1',
      name: 'أحمد محمد',
      email: 'ahmed@example.com',
      avatar: '/ppl/ppl.jpg'
    });
  };

  const handleTestLogout = () => {
    logout();
  };

  if (isLoggedIn) {
    return (
      <div style={{
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: 'white',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        border: '1px solid #e5e5e5'
      }}>
        <div style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 'bold' }}>
          حالة تسجيل الدخول: مسجل
        </div>
        <div style={{ marginBottom: '10px', fontSize: '12px' }}>
          المستخدم: {user?.name}
        </div>
        <General_Button
          text="تسجيل الخروج (اختبار)"
          bgColor="#dc2626"
          color="white"
          onClick={handleTestLogout}
        />
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: '100px',
      right: '20px',
      background: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
      border: '1px solid #e5e5e5'
    }}>
      <div style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 'bold' }}>
        حالة تسجيل الدخول: غير مسجل
      </div>
      <General_Button
        text="تسجيل الدخول (اختبار)"
        bgColor="#169FC6"
        color="white"
        onClick={handleTestLogin}
      />
    </div>
  );
};

export default TestLogin; 