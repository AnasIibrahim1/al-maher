'use client'
import React, { useState, useRef, useEffect } from 'react'

function useIsNarrow(maxWidth = 550) {
  const [isNarrow, setIsNarrow] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${maxWidth}px)`)
    const onChange = (e) => setIsNarrow(e.matches)
    setIsNarrow(mql.matches)
    mql.addEventListener ? mql.addEventListener('change', onChange) : mql.addListener(onChange)
    return () => {
      mql.removeEventListener ? mql.removeEventListener('change', onChange) : mql.removeListener(onChange)
    }
  }, [maxWidth])
  return isNarrow
}

export default function FAQCards({ items }) {
  const faqItems = items && items.length ? items : [
    { q: 'ما هي مميزات المنصة؟', a: 'نوفر دورات تفاعلية، أساتذة متميزين، وجدول مرن يناسب الجميع.' },
    { q: 'كيف يمكنني الاشتراك؟', a: 'اضغط على زر "اشترك الأن" واتبع خطوات التسجيل البسيطة.' },
    { q: 'كيف يمكنني الاشتراك؟', a: 'اضغط على زر "اشترك الأن" واتبع خطوات التسجيل البسيطة.' },
    { q: 'كيف يمكنني الاشتراك؟', a: 'اضغط على زر "اشترك الأن" واتبع خطوات التسجيل البسيطة.' },
    { q: 'كيف يمكنني الاشتراك؟', a: 'اضغط على زر "اشترك الأن" واتبع خطوات التسجيل البسيطة.' },
  ]

  const [openIndex, setOpenIndex] = useState(null)
  const isNarrow = useIsNarrow(550)

  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: isNarrow ? '8px' : '12px'}}>
      {faqItems.map((item, index) => (
        <FAQItem
          key={index}
          question={item.q}
          answer={item.a}
          open={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          isNarrow={isNarrow}
        />
      ))}
    </div>
  )
}

function FAQItem({ question, answer, open, onToggle, isNarrow }) {
  const contentRef = useRef(null)
  const measuredHeight = contentRef.current ? contentRef.current.scrollHeight : 0

  return (
    <div style={{
      border: '1px solid #E2E8F0',
      borderRadius: '8px',
      padding: isNarrow ? '0 12px' : '0 16px',
      backgroundColor: '#fff',
      transition: 'box-shadow 0.2s ease',
      fontFamily: 'cairo',
      
    }}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: open ? 'flex-start' : 'center',
          background: 'transparent',
          border: 'none',
          padding: isNarrow ? '12px 40px 12px 0' : '14px 50px 14px 0',
          cursor: 'pointer',
          textAlign: 'right',
          minHeight: isNarrow ? 56 : 64,
          transition: 'justify-content 0.25s ease',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}>
          <span style={{
      fontFamily: 'cairo',
            color: open ? 'rgba(245, 112, 5, 1)' : '#2A254D',
            fontWeight: 600,
            transition: 'color 0.25s ease, transform 0.25s ease',
            fontSize: isNarrow ? '16px' : '22px',
            transform: open ? 'translateY(-4px)' : 'translateY(0)'
          }}>{question}</span>
          <span aria-hidden="true" style={{
            width: isNarrow ? 28 : 35,
            height: isNarrow ? 28 : 35,
            borderRadius: '50%',
            color: open ? 'rgba(245, 112, 5, 1)' : '#2A254D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.25s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
          }}>
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width={isNarrow ? 20 : 24} height={isNarrow ? 20 : 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width={isNarrow ? 20 : 24} height={isNarrow ? 20 : 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
            )}
          </span>
        </div>

        <div style={{
          maxHeight: open ? measuredHeight : 0,
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(-6px)',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease, opacity 0.3s ease, transform 0.3s ease, margin-top 0.3s ease',
          marginTop: open ? (isNarrow ? 4 : 6) : 0,
        }}>
          <div ref={contentRef}>

            <p style={{
              fontFamily: 'cairo',
              margin: 0,
              color: '#475569',
              lineHeight: 1.8,
              fontSize: isNarrow ? '14px' : '18px',
            }}>{answer}</p>
          </div>
        </div>
      </button>
    </div>
  )
}
