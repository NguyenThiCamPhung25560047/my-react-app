import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('game');
  const [score, setScore] = useState(0);
  const [cardResult, setCardResult] = useState({ emoji: '🎰', text: 'Place your bet & test your fortune!' });
  const [streak, setStreak] = useState(0);

  // Danh sách phần thưởng phong phú chuẩn Vegas
  const fortunes = [
    { emoji: '👑', text: 'Nổ hũ (+500 PTS)', points: 500 },
    { emoji: '💎', text: 'Bá khí (+300 PTS)', points: 300 },
    { emoji: '⚡', text: 'Aura farming (+200 PTS)', points: 200 },
    { emoji: '🍷', text: 'Tuyệt vời, uống nào (+150 PTS)', points: 150 },
    { emoji: '💣', text: '1 quả bom (+100 PTS)', points: 100 },
    { emoji: '🎲', text: 'Chúc bạn may mắn lần sau (+80 PTS)', points: 80 },
    { emoji: '💥', text: 'Cú nổ lớn (+400 PTS)', points: 400 },
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
    setCardResult({ emoji: '🎰', text: 'Place your bet & test your fortune!' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at top, #7f1d1d 0%, #1e1b4b 60%, #090d16 100%)',
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
        background: 'rgba(30, 10, 15, 0.85)',
        backdropFilter: 'blur(20px)',
        borderRadius: '28px',
        border: '2px solid #f59e0b',
        padding: '32px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 35px rgba(245, 158, 11, 0.3)',
        textAlign: 'center'
      }}>
        
        {/* Top Badge - Vegas Gold Glow */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '9999px',
          background: 'rgba(245, 158, 11, 0.15)',
          border: '1px solid #fbbf24',
          color: '#fef08a',
          fontSize: '0.8rem',
          fontWeight: '800',
          letterSpacing: '1px',
          marginBottom: '20px'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b', boxShadow: '0 0 10px #f59e0b' }}></span>
          VEGAS FORTUNE LOTTERY
        </div>

        {/* Title - Fixed Overlap */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '900',
          margin: '0 0 8px 0',
          lineHeight: '1.2',
          color: '#fde047',
          background: 'linear-gradient(135deg, #fffbeb 0%, #fde047 50%, #d97706 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.5px'
        }}>
          Hello World!
        </h1>
        <p style={{ color: '#fef08a', fontSize: '0.9rem', margin: '0 0 20px 0', fontWeight: '600', opacity: 0.9 }}>
          Interactive Web Application
        </p>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          background: 'rgba(15, 23, 42, 0.8)',
          padding: '5px',
          borderRadius: '16px',
          marginBottom: '20px',
          border: '1px solid rgba(245, 158, 11, 0.2)'
        }}>
          <button 
            onClick={() => setActiveTab('profile')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '12px',
              border: 'none',
              background: activeTab === 'profile' ? 'linear-gradient(135deg, #d97706 0%, #b45309 100%)' : 'transparent',
              color: activeTab === 'profile' ? '#fff' : '#94a3b8',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '0.85rem',
              boxShadow: activeTab === 'profile' ? '0 4px 12px rgba(217, 119, 6, 0.4)' : 'none',
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
              background: activeTab === 'game' ? 'linear-gradient(135deg, #d97706 0%, #b45309 100%)' : 'transparent',
              color: activeTab === 'game' ? '#fff' : '#94a3b8',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '0.85rem',
              boxShadow: activeTab === 'game' ? '0 4px 12px rgba(217, 119, 6, 0.4)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            🎲 Fortune Game
          </button>
        </div>

        {/* Tab 1: Profile */}
        {activeTab === 'profile' && (
          <div style={{
            background: 'rgba(15, 23, 42, 0.7)',
            padding: '18px 20px',
            borderRadius: '18px',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            textAlign: 'left',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Student:</span>
              <span style={{ color: '#fffbeb', fontWeight: '600', fontSize: '0.9rem' }}>Nguyen Thi Cam Phung</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Student ID:</span>
              <span style={{ color: '#fde047', fontWeight: '700', fontSize: '0.95rem', fontFamily: 'monospace' }}>25560047</span>
            </div>
          </div>
        )}

        {/* Tab 2: Fortune Game Section */}
        {activeTab === 'game' && (
          <div style={{
            background: 'rgba(15, 23, 42, 0.7)',
            padding: '20px',
            borderRadius: '18px',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            marginBottom: '20px'
          }}>
            {/* Scoreboard */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.85rem' }}>
              <span>🏆 Balance: <strong style={{ color: '#fde047', fontSize: '1.2rem' }}>{score} PTS</strong></span>
              <span>🔥 Bets: <strong style={{ color: '#f87171', fontSize: '1.2rem' }}>{streak}</strong></span>
            </div>

            {/* Card Result Area */}
            <div style={{
              background: '#090d16',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '16px',
              border: '1px solid #f59e0b',
              boxShadow: 'inset 0 0 20px rgba(245, 158, 11, 0.15)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>{cardResult.emoji}</div>
              <div style={{ fontSize: '0.9rem', color: '#fde047', fontWeight: '700' }}>{cardResult.text}</div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={handleDrawCard}
                style={{
                  flex: 2,
                  padding: '14px',
                  borderRadius: '14px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                  color: '#fff',
                  fontWeight: '800',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 15px rgba(220, 38, 38, 0.5)'
                }}
              >
                🎰 SPIN / DRAW
              </button>
              <button 
                onClick={handleResetGame}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(30, 41, 59, 0.6)',
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