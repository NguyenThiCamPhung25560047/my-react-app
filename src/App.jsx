function App() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#090d16',
      color: '#f8fafc',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{
        padding: '36px',
        borderRadius: '20px',
        backgroundColor: '#111827',
        border: '1px solid #1f2937',
        boxShadow: '0 0 40px rgba(59, 130, 246, 0.15)',
        textAlign: 'center',
        width: '360px'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          margin: '0 0 8px 0',
          background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Hello World!
        </h1>
        <h3 style={{ color: '#9ca3af', fontWeight: '400', marginTop: 0 }}>React.js Application</h3>
        
        <div style={{
          marginTop: '24px',
          padding: '16px',
          borderRadius: '12px',
          backgroundColor: '#1f2937',
          borderLeft: '4px solid #3b82f6',
          textAlign: 'left'
        }}>
          <p style={{ margin: '4px 0', color: '#e5e7eb' }}><strong>Họ tên:</strong> Nguyễn Thị Cẩm Phụng</p>
          <p style={{ margin: '4px 0', color: '#e5e7eb' }}><strong>MSSV:</strong> 25560047</p>
        </div>
      </div>
    </div>
  );
}

export default App;