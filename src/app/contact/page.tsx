"use client"
import React, { useState } from 'react';
import ContainerRow from '@/components/Container/ContainerRow';
import Paragraph from '@/components/Paragraphs/small';
import Input from '@/components/input/input';
import General_Button from '@/components/Buttons/General_Button';
import Image from 'next/image';
import Container from '@/components/Container/Conatiner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    setTimeout(() => {
      console.log('=== رسالة تواصل جديدة ===');
      console.log('الاسم:', formData.name);
      console.log('البريد الإلكتروني:', formData.email);
      console.log('الرسالة:', formData.message);
      console.log('التاريخ:', new Date().toLocaleString('ar-SA'));
      console.log('========================');
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactMethods = [
    {
      name: 'WhatsApp',
      value: '0797848483',
      icon: '/icons/social_icons/whatsapp.svg',
      link: 'https://wa.me/0797848483',
      color: '#25D366'
    },
    {
      name: 'توجيهي',
      value: 'Facebook - Guidance',
      icon: '/icons/social_icons/fc.svg',
      link: 'https://facebook.com/guidance',
      color: '#1877F2'
    },
    {
      name: 'اساسي',
      value: 'Facebook - Primary',
      icon: '/icons/social_icons/fc.svg',
      link: 'https://facebook.com/primary',
      color: '#1877F2'
    },
    {
      name: 'مجموعه',
      value: 'Facebook - Group',
      icon: '/icons/social_icons/fc.svg',
      link: 'https://facebook.com/group',
      color: '#1877F2'
    },
    {
      name: 'انستجرام',
      value: 'Instagram',
      icon: '/icons/social_icons/insta.svg',
      link: 'https://instagram.com/almaher',
      color: '#E4405F'
    },
    {
      name: 'قناه اليوتيوب',
      value: 'YouTube Channel',
      icon: '/icons/social_icons/yt.svg',
      link: 'https://youtube.com/almaher',
      color: '#FF0000'
    }
  ];

  return (
    <div className="w-full  bg-gray-100">
      <ContainerRow className='bg-gray-100' style={{padding: " 20px 100px"}}>
<ContainerRow style={{ backgroundColor: "white"}}>
<div style={{ 
          width: "70%", 
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: " 0px 20px 20px 0px ",

        }}>
          <div style={{ maxWidth: "600px", margin: "0 auto", width: "100%" }}>
            <Paragraph style={{
              fontSize: "36px",
              color: "black",
              fontWeight: "bold",
              textAlign: "right",
              marginBottom: "15px"
            }}>
              تواصل معنا
            </Paragraph>
            
            <Paragraph style={{
              fontSize: "18px",
              color: "#6D737A",
              textAlign: "right",
              marginBottom: "50px",
              lineHeight: "1.6"
            }}>
              تواصل معنا واترك لنا رسالتك وسيتم التواصل معك في اقرب وقت
            </Paragraph>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              <Input
                name="name"
                label="الاسم"
                placeholder="ادخل الاسم"
                value={formData.name}
                onChange={handleInputChange}
                width="100%"
                padding="20px"
                border="1px solid #E5E5E5"
                required
              />

              <Input
                name="email"
                type="email"
                label="البريد الالكتروني"
                placeholder="ادخل البريد الالكتروني"
                value={formData.email}
                onChange={handleInputChange}
                width="100%"
                padding="20px"
                border="1px solid #E5E5E5"
                required
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{
                  fontSize: "16px",
                  color: "black",
                  fontWeight: "600",
                  textAlign: "right"
                }}>
                  رسالتك
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="اكتب رسالتك"
                  required
                  style={{
                    width: "100%",
                    minHeight: "120px",
                    padding: "20px",
                    border: "1px solid #E5E5E5",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontFamily: "inherit",
                    resize: "vertical",
                    textAlign: "right",
                    direction: "rtl"
                  }}
                />
              </div>

              <div style={{ marginTop: "20px" }}>
                <General_Button
                  text={isSubmitting ? "جاري الإرسال..." : "ارسال"}
                  bgColor={isSubmitting ? "#9CA3AF" : "#169FC6"}
                  color="white"
                  width="100%"
                  padding="18px"
                />
              </div>

              {/* رسائل الحالة */}
              {submitStatus === 'success' && (
                <div style={{
                  padding: "15px",
                  backgroundColor: "#D4EDDA",
                  color: "#155724",
                  borderRadius: "8px",
                  textAlign: "center",
                  border: "1px solid #C3E6CB"
                }}>
                  تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{
                  padding: "15px",
                  backgroundColor: "#F8D7DA",
                  color: "#721C24",
                  borderRadius: "8px",
                  textAlign: "center",
                  border: "1px solid #F5C6CB"
                }}>
                  حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.
                </div>
              )}
            </form>
          </div>
        </div>
        <div style={{ 
          width: "30%", 
          borderRadius: "20px 20px 20px 20px",
          background: "linear-gradient(135deg, #169FC6 0%, #0D7A9A 100%)",
          position: "relative",
          margin: "20px",
          overflow: "hidden"
        }}>
          {/* خلفية دائرية */}
          <div style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            zIndex: 1
          }}></div>
          <div style={{
            position: "absolute",
            bottom: "-30px",
            left: "-30px",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            zIndex: 1
          }}></div>

          <div style={{ 
            padding: "40px 30px", 
            position: "relative", 
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column"
          }}>
            <div style={{ marginBottom: "40px" }}>
              <Paragraph style={{
                fontSize: "32px",
                color: "white",
                fontWeight: "bold",
                textAlign: "right",
                marginBottom: "15px"
              }}>
                معلومات الاتصال
              </Paragraph>
              <Paragraph style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.9)",
                textAlign: "right",
                lineHeight: "1.6"
              }}>
                في حال احتجت الى مساعدة ، يرجى التواصل معنا عبر الآتي
              </Paragraph>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "15px" }}>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "15px 20px",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderRadius: "12px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(255,255,255,0.2)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <Image 
                      src={method.icon} 
                      alt={method.name} 
                      width={30} 
                      height={30}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Paragraph style={{
                      fontSize: "20px",
                      color: "black",
                      fontWeight: "bold",
                      marginBottom: "2px"
                    }}>
                      {method.name}
                    </Paragraph>

                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
</ContainerRow>
      </ContainerRow>
    </div>
  );
}
