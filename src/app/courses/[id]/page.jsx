'use client'
import React from 'react'
import './style.css'
import Category from '@/components/CardSpecialists/Category/Category'
import Stars from '@/components/CardSpecialists/Stars/Stars'
import BusinessCard from '@/components/Cards/BusinessCard/BusinessCard'
import ActionButtons from '@/components/Buttons/ActionButtons/ActionButtons'
import { notFound } from 'next/navigation'
import { courses, getCourseById } from '@/data/courses'

const DEFAULT_OVERVIEW = {
  beginner: {
    title: 'المستوى المبتدئ',
    description:
      'نص تعريفي للمستوى المبتدئ يوضح الأهداف والمحتوى والمخرجات المتوقعة من الدارس.',
    items: [
      { type: 'video', title: 'مقدمة عن التحرير', meta: '12 دقيقة' },
      { type: 'folder', title: 'تقنيات التحرير الأساسية' },
      { type: 'quiz', title: 'اختبار', meta: '6 أسئلة' },
    ],
  },
  intermediate: {
    title: 'المستوى المتوسط',
    description:
      'تفاصيل المستوى المتوسط مع أمثلة عملية وتطبيقات فعلية لقياس الفهم.',
    items: [
      { type: 'video', title: 'مقدمة عن التحرير', meta: '17 دقيقة' },
      { type: 'folder', title: 'تقنيات التحرير الأساسية' },
      { type: 'quiz', title: 'اختبار', meta: '4 أسئلة' },
    ],
  },
}

export default function CourseDetailsPage({ params }) {
  const resolvedParams = React.use(params)
  const { id } = resolvedParams || {}
  const course = getCourseById(id)
  if (!course) return notFound()

  return (
    <>
<div className="course-details-container" style={{width: "90%", display: "flex", flexDirection: "row", alignItems: "start", justifyContent: "center", gap: "40px", padding: "60px 20px 20px 20px"}}>
<div className="course-details-content" style={{width: "80%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-between", gap: "40px", margin: "0 auto"}}>
        {/* Head Section */}
        <section className="course-head">
        <div className="course-media">
          <img src={course.image} alt={course.title} />
          <div className="course-like">
            <ActionButtons
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>}
              backgroundColor="#F57005"
              width="36px"
              height="36px"
              ariaLabel="Love"
              title="Love"
            />
          </div>
        </div>

        <div className="course-primary">
          <div className="course-author">
            <img src={course.instructor.avatar} alt={course.instructor.name} />
            <div>
              <h5>{course.instructor.name}</h5>
              <span>{course.instructor.role}</span>
            </div>
            <div className="course-meta-right">
              <Category category={course.category} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Stars rating={course.rating} reviews={course.reviews} size="small" />
              </div>
            </div>
            <h4 className="course-price">${course.price}</h4>
          </div>

          <h2 className="course-title">{course.title}</h2>

          <div className="course-tabs">
            <button className="tab active">نظرة عامة</button>
            <button className="tab">المنهج</button>
            <button className="tab">المراجعات</button>
            <button className="tab">المُدرّس</button>
          </div>
        </div>
      </section>
            {/* Content & Sidebar */}
            <section className="course-body">
        <div className="course-content">
          <div className="tab-panel fade-in">
            {/* Overview Content */}
            <LevelBlock data={(course.overview || DEFAULT_OVERVIEW).beginner} />
            <LevelBlock data={(course.overview || DEFAULT_OVERVIEW).intermediate} />
          </div>
        </div>


      </section>

</div>


      <aside className="course-sidebar">
          <div className="side-card">
            <h4>مميزات الدورة</h4>
            <ul className="features">
              <li><span>المدة</span><b>{course.features.duration}</b></li>
              <li><span>الدروس</span><b>{course.features.lessons}</b></li>
              <li><span>الطلاب</span><b>{course.features.students}</b></li>
              <li><span>الفيديوهات</span><b>{course.features.videos}</b></li>
              <li><span>المستوى</span><b>{course.features.level}</b></li>
              <li><span>اللغة</span><b>{course.features.language}</b></li>
            </ul>
            <a href="#" className="buy-btn">اشترِ هذه الدورة</a>
          </div>

          <div className="side-card">
            <h4>أحدث الدورات</h4>
            <div className="latest-list">
              {courses.filter(c => c.id !== course.id).slice(0,3).map((p) => (
                <a key={p.id} href={`/courses/${p.id}`} className="latest-item">
                  <img src={p.image} alt={p.title} />
                  <div>
                    <span className="latest-by">بواسطة المدرّس</span>
                    <p className="latest-title">{p.title}</p>
                    <Stars rating={p.rating} reviews={p.reviews} size="small" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </aside>
</div>
    </>
  )
}

function LevelBlock({ data }) {
  return (
    <div className="level-block">
      <h3 className="level-title">{data.title}</h3>
      <p className="level-desc">{data.description}</p>
      <div className="level-items">
        {data.items.map((it, idx) => (
          <div className="level-item" key={idx}>
            <div className={`icon ${it.type}`}>
              {it.type === 'video' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F5DE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
              )}
              {it.type === 'folder' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F57005" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h5l2 3h11v7a2 2 0 0 1-2 2H3z"/><path d="M3 7V5a2 2 0 0 1 2-2h3l2 2h9a2 2 0 0 1 2 2v3"/></svg>
              )}
              {it.type === 'quiz' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F5DE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><circle cx="12" cy="9" r="7"/></svg>
              )}
            </div>
            <span className="item-title">{it.title}</span>
            {it.meta && <span className="item-meta">{it.meta}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}


