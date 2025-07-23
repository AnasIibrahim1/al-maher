import dynamic from 'next/dynamic';

const MainLayout = dynamic(() => import("@/mainlayout/MainLayout"), {
  loading: () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        width: '30px',
        height: '30px',
        border: '3px solid #e3e3e3',
        borderTop: '3px solid #169FC6',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `
      }} />
    </div>
  ),
  ssr: true
});

export default MainLayout; 