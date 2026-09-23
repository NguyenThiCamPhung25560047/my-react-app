import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('profile');
  const [score, setScore] = useState(0);
  const [cardResult, setCardResult] = useState({ emoji: '❓', text: 'Bấm nút để lật thẻ!' });
  const [streak, setStreak] = useState(0);

  const fortunes = [
    { emoji: '🌟', text: 'Siêu May Mắn! (+10 Điểm)', points: 10 },
    { emoji: '🔥', text: 'Rực Rỡ! (+5 Điểm)', points: 5 },
    { emoji: '⚡', text: 'Tăng Tốc! (+3 Điểm)', points: 3 },
    { emoji: '🍀', text: 'Bình An! (+1 Điểm)', points: 1 },
    { emoji: '💥', text: 'Nổ Hũ Bonus! (+20 Điểm)', points: 20 },
  ];

  const handleDrawCard = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const selected = fortunes[randomIndex];
    
    setCardResult(selected);
    setScore((prev) => prev + selected.points);
    setStreak((prev) => prev + 1);
  };

  const handleResetGame = () => {
    setScore(0);
    setStreak(0);
    setCardResult({ emoji: '❓', text: 'Bấm nút để lật thẻ!' });
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
          REACT MINI GAME APP
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
            👤 Thí Sinh
          </button>
          <button 
            onClick={() => setActiveTab('game')}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '8px',
              border: 'none',
              background: activeTab === 'game' ? '#38bdf8' : 'transparent',
              color: activeTab === 'game' ? '#0f172a' : '#94a3b8',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            🎮 Mini Game
          </button>
        </div>

        {/* Tab 1: Profile */}
        {activeTab === 'profile' && (
          <div style={{
            background: 'rgba(15, 23, 42, 0.6)',
            padding: '16px 20px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            textAlign: 'left',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Sinh viên:</span>
              <span style={{ color: '#f1f5f9', fontWeight: '600', fontSize: '0.9rem' }}>Nguyen Thi Cam Phung</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>MSSV:</span>
              <span style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.9rem', fontFamily: 'monospace' }}>25560047</span>
            </div>
          </div>
        )}

        {/* Tab 2: Mini Game Section */}
        {activeTab === 'game' && (
          <div style={{
            background: 'rgba(15, 23, 42, 0.6)',
            padding: '20px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            marginBottom: '20px'
          }}>
            {/* Scoreboard */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.85rem' }}>
              <span>🏆 Điểm: <strong style={{ color: '#38bdf8', fontSize: '1.1rem' }}>{score}</strong></span>
              <span>🔥 Lượt chơi: <strong style={{ color: '#c084fc', fontSize: '1.1rem' }}>{streak}</strong></span>
            </div>

            {/* Card Result Area */}
            <div style={{
              background: '#090d16',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '6px' }}>{cardResult.emoji}</div>
              <div style={{ fontSize: '0.85rem', color: '#f1f5f9', fontWeight: '500' }}>{cardResult.text}</div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={handleDrawCard}
                style={{
                  flex: 2,
                  padding: '12px',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                  color: '#fff',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                🎴 Rút Thẻ May Mắn
              </button>
              <button 
                onClick={handleResetGame}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'transparent',
                  color: '#94a3b8',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                🔄 Chơi lại
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;