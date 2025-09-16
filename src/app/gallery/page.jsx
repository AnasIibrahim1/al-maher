'use client'

import PaginationPages from '@/components/PaginationPages/PaginationPages'
import GalleryCard from '@/components/Cards/GalleryCard/GalleryCard'
import Bubbles from '@/components/Backgrounds/Bubbles/Bubbles'

export default function GalleryPage() {
  const items = [
    { src: '/Base1.jpg', href: '#' },
    { src: '/People/man.jpg', href: '#' },
    { src: '/People/man2.jpg', href: '#' },
    { src: '/People/man3.jpg', href: '#' },
    { src: '/Base.jpg', href: '#' },
    { src: '/Video.png', href: '#' },
    { src: '/Texture.png', href: '#' },
    { src: '/Frame.png', href: '#' },
    { src: '/01.png', href: '#' },
  ]

  return (
    <>
    {/* Head Section */}
    <section style={{width: "100%", height: "60vh", backgroundImage: "url('/photo.jpg')", backgroundSize: "cover", backgroundPosition: "center", position: "relative"}}>
      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1 style={{color: "#fff", fontSize: "40px", fontWeight: "bold"}}>المعرض</h1>
        <p style={{color: "#fff", fontSize: "16px"}}>الرئيسية / المعرض</p>
      </div>
    </section>

    {/* Gallery Section */}
    <div style={{position: 'relative'}}>
      <Bubbles />
      <div style={{position: 'relative', zIndex: 1, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", margin: "100px 0"}}>
        <div style={{width: "80%"}}>
          <PaginationPages>
            {items.map((it, i) => (
              <GalleryCard key={i} src={it.src} href={it.href} />
            ))}
          </PaginationPages>
        </div>
      </div>
    </div>
    </>
  )
}

