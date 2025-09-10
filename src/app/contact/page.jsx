export default function ContactPage() {
  return (
    <main style={{ padding: '40px 16px' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '12px' }}>اتصل بنا</h1>
      <p style={{ color: '#666', marginBottom: '16px' }}>
        يسعدنا تواصلكم. أرسل لنا رسالة عبر النموذج التالي.
      </p>
      <form style={{ maxWidth: 600 }}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: 6 }}>الاسم</label>
          <input id="name" type="text" style={{ width: '100%', padding: 10, border: '1px solid #ddd', borderRadius: 8 }} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: 6 }}>البريد الإلكتروني</label>
          <input id="email" type="email" style={{ width: '100%', padding: 10, border: '1px solid #ddd', borderRadius: 8 }} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: 6 }}>رسالتك</label>
          <textarea id="message" rows={5} style={{ width: '100%', padding: 10, border: '1px solid #ddd', borderRadius: 8 }} />
        </div>
        <button type="submit" style={{ padding: '10px 16px', background: '#0b5ed7', color: '#fff', borderRadius: 8 }}>إرسال</button>
      </form>
    </main>
  );
}


