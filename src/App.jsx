import { useState } from 'react';

function App() {
  const [power, setPower] = useState(1);
  const [activeTab, setActiveTab] = useState('profile');
  const [logs, setLogs] = useState(['[SYSTEM] React Creative Dashboard Active']);

  const addLog = (msg) => {
    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${time}] ${msg}`, ...prev.slice(0, 2)]);
  };

  const handleBoost = () => {
    setPower((prev) => prev + 1);
    addLog(`✨ Boosted power level to ${power + 1}!`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0b0f19',
      color: '#f8fafc',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '420px',
        width: '100%',
        background: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(16px)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '32px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.2)',
        textAlign: 'center'
      }}>
        
        {/* Top Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '9999px',
          background: 'linear-gradient(90deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2) 100%)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          color: '#c084fc',
          fontSize: '0.8rem',
          fontWeight: '600',
          marginBottom: '20px'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#c084fc', boxShadow: '0 0 10px #c084fc' }}></span>
          REACT PROJECT
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: '2.4rem',
          fontWeight: '800',
          margin: '0 0 6px 0',
          background: 'linear-gradient(to right, #818cf8, #c084fc, #f472b6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Hello World!
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0 0 20px 0' }}>
          Interactive Web Application
        </p>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          background: 'rgba(15, 23, 42, 0.6)',
          padding: '4px',
          borderRadius: '12px',
          marginBottom: '20px'
        }}>
          <button 
            onClick={() => setActiveTab('profile')}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '8px',
              border: 'none',
              background: activeTab === 'profile' ? '#38bdf8' : 'transparent',
              color: activeTab === 'profile' ? '#0f172a' : '#94a3b8',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            👤 Info
          </button>
          <button 
            onClick={() => setActiveTab('status')}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '8px',
              border: 'none',
              background: activeTab === 'status' ? '#38bdf8' : 'transparent',
              color: activeTab === 'status' ? '#0f172a' : '#94a3b8',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            ⚡ Status
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'profile' ? (
          <div style={{
            background: 'rgba(15, 23, 42, 0.6)',
            padding: '16px 20px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            textAlign: 'left',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>STUDENT</span>
              <span style={{ color: '#f1f5f9', fontWeight: '600', fontSize: '0.9rem' }}>Nguyen Thi Cam Phung</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>ID NUMBER</span>
              <span style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.9rem', fontFamily: 'monospace' }}>25560047</span>
            </div>
          </div>
        ) : (
          <div style={{
            background: 'rgba(15, 23, 42, 0.6)',
            padding: '16px 20px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            textAlign: 'left',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>SYSTEM STATE</span>
              <span style={{ color: '#4ade80', fontWeight: '600', fontSize: '0.9rem' }}>Online 🟢</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>POWER LEVEL</span>
              <span style={{ color: '#c084fc', fontWeight: '700', fontSize: '0.9rem' }}>Level {power}</span>
            </div>
          </div>
        )}

        {/* Interactive Boost Button */}
        <button 
          onClick={handleBoost}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '16px',
            border: 'none',
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
            fontSize: '0.9rem',
            marginBottom: '20px'
          }}
        >
          🚀 Power Boost ({power})
        </button>

        {/* Live Console Logs */}
        <div style={{
          background: '#090d16',
          borderRadius: '12px',
          padding: '10px 14px',
          textAlign: 'left',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#34d399' }}>
            {logs.map((log, index) => (
              <div key={index} style={{ opacity: 1 - index * 0.3, marginTop: '2px' }}>
                {log}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;