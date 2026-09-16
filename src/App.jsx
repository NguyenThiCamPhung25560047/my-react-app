function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8fafc',
      color: '#0f172a'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Hello World!</h1>
      <h2 style={{ color: '#2563eb', marginBottom: '20px' }}>React.js Application</h2>
      <div style={{ 
        padding: '20px 30px', 
        border: '1px solid #e2e8f0', 
        borderRadius: '12px', 
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <p style={{ margin: '8px 0', fontSize: '1.1rem' }}><strong>Student:</strong> Nguyễn Thị Cẩm Phụng</p>
        <p style={{ margin: '8px 0', fontSize: '1.1rem' }}><strong>ID:</strong> 25560047</p>
      </div>
    </div>
  );
}

export default App;