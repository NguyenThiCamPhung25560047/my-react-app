import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('game');
  const [score, setScore] = useState(0);
  const [cardResult, setCardResult] = useState({ emoji: '🃏', text: 'Draw a card to unleash your fortune!' });
  const [streak, setStreak] = useState(0);

  // Mức điểm thưởng cao bùng nổ
  const fortunes = [
    { emoji: '👑', text: 'NỔ HỦ (+500 PTS)', points: 500 },
    { emoji: '🔥', text: 'BÁ KHÍ (+250 PTS)', points: 250 },
    { emoji: '🥂', text: 'TUYỆT VỜI, UỐNG NÀO (+100 PTS)', points: 100 },
    { emoji: '⚡', text: 'CHÚC BẠN MAY MẮN LẦN SAU (+50 PTS)', points: 50 },
    { emoji: '🌟', text: 'AURA FARMING (+150 PTS)', points: 150 },
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
    setCardResult({ emoji: '🃏', text: 'Draw a card to unleash your fortune!' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at top, #2e1065 0%, #0f172a 100%)',
      color: '#f8fafc',
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '420px',
        width: '100%',
        background: 'rgba(30, 27, 75, 0.65)',
        backdropFilter: 'blur(20px)',
        borderRadius: '28px',
        border: '1px solid rgba(251, 191, 36, 0.25)',
        padding: '32px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(245, 158, 11, 0.15)',
        textAlign: 'center'
      }}>
        
        {/* Top Badge - Warm Gold & Purple Accent */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '9999px',
          background: 'linear-gradient(90deg, rgba(245,158,11,0.15) 0%, rgba(168,85,247,0.2) 100%)',
          border: '1px solid rgba(251, 191, 36, 0.4)',
          color: '#fde047',
          fontSize: '0.8rem',
          fontWeight: '700',
          letterSpacing: '0.5px',
          marginBottom: '20px'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#fde047', boxShadow: '0 0 10px #fde047' }}></span>
          REACT MINI GAME APP
        </div>

        {/* Title - Sunset Gold Gradient */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          margin: '0 0 6px 0',
          background: 'linear-gradient(to right, #fef08a, #f59e0b, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Hello World!
        </h1>
        <p style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: '0 0 20px 0', fontWeight: '500' }}>
          Interactive Web Application
        </p>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          background: 'rgba(15, 23, 42, 0.6)',
          padding: '5px',
          borderRadius: '16px',
          marginBottom: '20px',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <button 
            onClick={() => setActiveTab('profile')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '12px',
              border: 'none',
              background: activeTab === 'profile' ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'transparent',
              color: activeTab === 'profile' ? '#fff' : '#94a3b8',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '0.85rem',
              boxShadow: activeTab === 'profile' ? '0 4px 12px rgba(245, 158, 11, 0.3)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            👤 Profile
          </button>
          <button 
            onClick={() => setActiveTab('game')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '12px',
              border: 'none',
              background: activeTab === 'game' ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'transparent',
              color: activeTab === 'game' ? '#fff' : '#94a3b8',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '0.85rem',
              boxShadow: activeTab === 'game' ? '0 4px 12px rgba(245, 158, 11, 0.3)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            🎮 Mini Game
          </button>
        </div>

        {/* Tab 1: Profile */}
        {activeTab === 'profile' && (
          <div style={{
            background: 'rgba(15, 23, 42, 0.5)',
            padding: '18px 20px',
            borderRadius: '18px',
            border: '1px solid rgba(251, 191, 36, 0.15)',
            textAlign: 'left',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Student:</span>
              <span style={{ color: '#fef08a', fontWeight: '600', fontSize: '0.9rem' }}>Nguyen Thi Cam Phung</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Student ID:</span>
              <span style={{ color: '#f59e0b', fontWeight: '700', fontSize: '0.95rem', fontFamily: 'monospace' }}>25560047</span>
            </div>
          </div>
        )}

        {/* Tab 2: Mini Game Section */}
        {activeTab === 'game' && (
          <div style={{
            background: 'rgba(15, 23, 42, 0.5)',
            padding: '20px',
            borderRadius: '18px',
            border: '1px solid rgba(251, 191, 36, 0.15)',
            marginBottom: '20px'
          }}>
            {/* Scoreboard */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.85rem' }}>
              <span>🏆 Score: <strong style={{ color: '#fde047', fontSize: '1.2rem' }}>{score}</strong></span>
              <span>🔥 Draws: <strong style={{ color: '#f472b6', fontSize: '1.2rem' }}>{streak}</strong></span>
            </div>

            {/* Card Result Area */}
            <div style={{
              background: 'rgba(10, 15, 30, 0.8)',
              borderRadius: '14px',
              padding: '18px',
              marginBottom: '16px',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              boxShadow: 'inset 0 0 15px rgba(245, 158, 11, 0.05)'
            }}>
              <div style={{ fontSize: '2.8rem', marginBottom: '6px' }}>{cardResult.emoji}</div>
              <div style={{ fontSize: '0.9rem', color: '#fef08a', fontWeight: '700' }}>{cardResult.text}</div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={handleDrawCard}
                style={{
                  flex: 2,
                  padding: '12px',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                  color: '#fff',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  boxShadow: '0 4px 15px rgba(217, 119, 6, 0.4)'
                }}
              >
                🎴 Draw Luck Card
              </button>
              <button 
                onClick={handleResetGame}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(30, 41, 59, 0.5)',
                  color: '#cbd5e1',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                🔄 Reset
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;