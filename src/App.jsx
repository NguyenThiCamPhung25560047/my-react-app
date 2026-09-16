function App() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f2fe 0%, #fef3c7 100%)',
      fontFamily: "'Segoe UI', Roboto, sans-serif"
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '24px',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '90%'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 16px',
          borderRadius: '20px',
          backgroundColor: '#dbeafe',
          color: '#1d4ed8',
          fontWeight: 'bold',
          fontSize: '0.875rem',
          marginBottom: '16px'
        }}>
          React.js Project
        </div>
        <h1 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '0 0 10px 0' }}>Hello World! 👋</h1>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '24px' }}>Web Application Development</p>
        
        <div style={{
          backgroundColor: '#f8fafc',
          padding: '16px 20px',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          textAlign: 'left'
        }}>
          <p style={{ margin: '6px 0', fontSize: '1rem', color: '#334155' }}>
            <span style={{ color: '#64748b' }}>Sinh viên:</span> <strong>Nguyễn Thị Cẩm Phụng</strong>
          </p>
          <p style={{ margin: '6px 0', fontSize: '1rem', color: '#334155' }}>
            <span style={{ color: '#64748b' }}>MSSV:</span> <strong style={{ color: '#2563eb' }}>25560047</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;