'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import './style.css';

export default function RegisterPage() {
  // Add critical CSS to prevent layout shift
  if (typeof window !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
      .register-header, .register-form-section, .form-container-register {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
      }
    `;
    document.head.appendChild(style);
  }
  const [formData, setFormData] = useState({
    studentName: '',
    gender: '',
    field: '',
    phone: '',
    email: '',
    governorate: '',
    schoolName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        studentName: '',
        gender: '',
        field: '',
        phone: '',
        email: '',
        governorate: '',
        schoolName: ''
      });
    }, 3000);
  };

  const governorates = [
    'القاهرة', 'الإسكندرية', 'الجيزة', 'الشرقية', 'الدقهلية',
    'البحيرة', 'كفر الشيخ', 'الغربية', 'المنوفية', 'القليوبية',
    'المنيا', 'أسيوط', 'سوهاج', 'قنا', 'الأقصر', 'أسوان',
    'البحر الأحمر', 'الوادي الجديد', 'مطروح', 'شمال سيناء',
    'جنوب سيناء', 'بورسعيد', 'الإسماعيلية', 'السويس', 'دمياط',
    'الفيوم', 'بني سويف'
  ];

  const fields = [
    'العلوم والرياضيات', 'الأدب والعلوم الإنسانية', 'التجارة والإدارة',
    'العلوم الاجتماعية', 'العلوم التطبيقية', 'العلوم الصحية',
    'الهندسة والتكنولوجيا', 'العلوم الزراعية', 'العلوم البيئية'
  ];

  return (
    <>
      {/* Critical CSS to prevent layout shift */}
      <style jsx>{`
        .register-header, .register-form-section, .form-container-register {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
        }
      `}</style>
      
      {/* Background Effects */}
      <div className="register-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      {/* Header Section */}
      <section className="register-header">
        <div className="container">
          <div className="header-content">
            <div className="header-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h1 className="register-title">انضم إلينا</h1>
            <p className="register-subtitle">ابدأ رحلتك التعليمية معنا اليوم</p>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="register-form-section">
        <div className="container">
          <div className="form-container-register">
            {showSuccess ? (
              <div className="success-message">
                <div className="success-icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22,4 12,14.01 9,11.01"></polyline>
                  </svg>
                </div>
                <h2>تم التسجيل بنجاح!</h2>
                <p>سيتم التواصل معك قريباً</p>
              </div>
            ) : (
              <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h2>معلومات الطالب</h2>
                  <p>يرجى ملء جميع البيانات المطلوبة</p>
                </div>

                <div className="form-grid">
                  {/* Student Name */}
                  <div className="form-group">
                    <label htmlFor="studentName" className="form-label">
                      <span className="label-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </span>
                      اسم الطالب
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="أدخل اسم الطالب الكامل"
                      required
                    />
                  </div>

                  {/* Gender */}
                  <div className="form-group">
                    <label className="form-label">
                      <span className="label-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="8" r="7"></circle>
                          <path d="M12 18v4"></path>
                          <path d="M8 21h8"></path>
                        </svg>
                      </span>
                      الجنس
                    </label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === 'male'}
                          onChange={handleInputChange}
                          className="radio-input"
                        />
                        <span className="radio-custom"></span>
                        ذكر
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === 'female'}
                          onChange={handleInputChange}
                          className="radio-input"
                        />
                        <span className="radio-custom"></span>
                        أنثى
                      </label>
                    </div>
                  </div>

                  {/* Field */}
                  <div className="form-group">
                    <label htmlFor="field" className="form-label">
                      <span className="label-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                      </span>
                      الحقل الدراسي
                    </label>
                    <select
                      id="field"
                      name="field"
                      value={formData.field}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">اختر الحقل الدراسي</option>
                      {fields.map((field, index) => (
                        <option key={index} value={field}>{field}</option>
                      ))}
                    </select>
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      <span className="label-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </span>
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="أدخل رقم الهاتف"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <span className="label-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </span>
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="أدخل البريد الإلكتروني"
                      required
                    />
                  </div>

                  {/* Governorate */}
                  <div className="form-group">
                    <label htmlFor="governorate" className="form-label">
                      <span className="label-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </span>
                      المحافظة
                    </label>
                    <select
                      id="governorate"
                      name="governorate"
                      value={formData.governorate}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">اختر المحافظة</option>
                      {governorates.map((gov, index) => (
                        <option key={index} value={gov}>{gov}</option>
                      ))}
                    </select>
                  </div>

                  {/* School Name */}
                  <div className="form-group full-width">
                    <label htmlFor="schoolName" className="form-label">
                      <span className="label-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 9l-10-4-10 4"></path>
                          <path d="M22 9v10l-10-4-10 4V9"></path>
                          <path d="M6 22v-4"></path>
                          <path d="M10 22v-4"></path>
                          <path d="M14 22v-4"></path>
                          <path d="M18 22v-4"></path>
                        </svg>
                      </span>
                      اسم المدرسة
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="أدخل اسم المدرسة"
                      required
                    />
                  </div>
                </div>

                <div className="form-footer">
                  <button
                    type="submit"
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        جاري التسجيل...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </span>
                        تسجيل الآن
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
