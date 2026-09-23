import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('game');
  const [score, setScore] = useState(0);
  const [cardResult, setCardResult] = useState({ emoji: '🎪', text: 'Spin the wheel & test your luck!' });
  const [streak, setStreak] = useState(0);

  const fortunes = [
    { emoji: '👑', text: 'Nổ hũ (+500 PTS)', points: 500 },
    { emoji: '🐴', text: 'Bá khí (+300 PTS)', points: 300 },
    { emoji: '⚡', text: 'Aura farming (+200 PTS)', points: 200 },
    { emoji: '🍷', text: 'Tuyệt vời, uống nào (+150 PTS)', points: 150 },
    { emoji: '💣', text: '1 quả bom (+100 PTS)', points: 100 },
    { emoji: '🃏', text: 'Chúc bạn may mắn lần sau (+80 PTS)', points: 80 },
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
    setCardResult({ emoji: '🎪', text: 'Spin the wheel & test your luck!' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fef08a',
      backgroundImage: `
        radial-gradient(circle at 20% 20%, rgba(244, 63, 94, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 40%),
        url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' font-size='22' opacity='0.18'%3E🎰%3C/text%3E%3Ctext x='70' y='35' font-size='22' opacity='0.18'%3E🎲%3C/text%3E%3Ctext x='40' y='75' font-size='22' opacity='0.18'%3E🪙%3C/text%3E%3Ctext x='90' y='80' font-size='22' opacity='0.18'%3E💎%3C/text%3E%3Ctext x='15' y='110' font-size='22' opacity='0.18'%3E🃏%3C/text%3E%3Ctext x='75' y='115' font-size='22' opacity='0.18'%3E🎟️%3C/text%3E%3C/svg%3E")
      `,
      color: '#0f172a',
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
        background: '#ffffff',
        borderRadius: '28px',
        border: '4px solid #f59e0b',
        padding: '32px',
        boxShadow: '0 25px 50px -12px rgba(244, 63, 94, 0.35), 0 0 35px rgba(245, 158, 11, 0.4)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '9999px',
          background: '#fef3c7',
          border: '2px solid #f59e0b',
          color: '#b45309',
          fontSize: '0.85rem',
          fontWeight: '800',
          letterSpacing: '1px',
          marginBottom: '20px'
        }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444', boxShadow: '0 0 8px #ef4444' }}></span>
          CIRCUS FORTUNE LOTTERY 🎪
        </div>

        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '900',
          margin: '0 0 6px 0',
          lineHeight: '1.2',
          background: 'linear-gradient(135deg, #ef4444 0%, #d97706 50%, #7c3aed 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.5px'
        }}>
          Hello World!
        </h1>
        <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0 0 20px 0', fontWeight: '700' }}>
          Interactive Web Application
        </p>

        <div style={{
          display: 'flex',
          gap: '8px',
          background: '#f1f5f9',
          padding: '6px',
          borderRadius: '18px',
          marginBottom: '20px',
          border: '2px solid #e2e8f0'
        }}>
          <button 
            onClick={() => setActiveTab('profile')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '14px',
              border: 'none',
              background: activeTab === 'profile' ? 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' : 'transparent',
              color: activeTab === 'profile' ? '#ffffff' : '#64748b',
              fontWeight: '800',
              cursor: 'pointer',
              fontSize: '0.85rem',
              boxShadow: activeTab === 'profile' ? '0 4px 12px rgba(239, 68, 68, 0.3)' : 'none',
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
              borderRadius: '14px',
              border: 'none',
              background: activeTab === 'game' ? 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' : 'transparent',
              color: activeTab === 'game' ? '#ffffff' : '#64748b',
              fontWeight: '800',
              cursor: 'pointer',
              fontSize: '0.85rem',
              boxShadow: activeTab === 'game' ? '0 4px 12px rgba(239, 68, 68, 0.3)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            🎲 Fortune Game
          </button>
        </div>

        {activeTab === 'profile' && (
          <div style={{
            background: '#fffbeb',
            padding: '18px 20px',
            borderRadius: '20px',
            border: '2px dashed #f59e0b',
            textAlign: 'left',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#78350f', fontSize: '0.85rem', fontWeight: '600' }}>Student:</span>
              <span style={{ color: '#b45309', fontWeight: '800', fontSize: '0.9rem' }}>Nguyen Thi Cam Phung</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#78350f', fontSize: '0.85rem', fontWeight: '600' }}>Student ID:</span>
              <span style={{ color: '#dc2626', fontWeight: '800', fontSize: '0.95rem', fontFamily: 'monospace' }}>25560047</span>
            </div>
          </div>
        )}

        {activeTab === 'game' && (
          <div style={{
            background: '#fffbeb',
            padding: '20px',
            borderRadius: '20px',
            border: '2px solid #fde047',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.9rem', fontWeight: '800' }}>
              <span style={{ color: '#b45309' }}>🏆 Balance: <strong style={{ color: '#dc2626', fontSize: '1.2rem' }}>{score} PTS</strong></span>
              <span style={{ color: '#b45309' }}>🔥 Bets: <strong style={{ color: '#7c3aed', fontSize: '1.2rem' }}>{streak}</strong></span>
            </div>

            <div style={{
              background: '#ffffff',
              borderRadius: '18px',
              padding: '16px 12px',
              marginBottom: '16px',
              border: '3px solid #f59e0b',
              boxShadow: '0 8px 16px rgba(245, 158, 11, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}>
              <div style={{ fontSize: '2.2rem', lineHeight: '1' }}>{cardResult.emoji}</div>
              <div style={{ fontSize: '0.95rem', color: '#b45309', fontWeight: '800', wordBreak: 'break-word' }}>{cardResult.text}</div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={handleDrawCard}
                style={{
                  flex: 2,
                  padding: '14px',
                  borderRadius: '16px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  color: '#ffffff',
                  fontWeight: '900',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                  boxShadow: '0 6px 16px rgba(239, 68, 68, 0.4)'
                }}
              >
                🎰 SPIN / DRAW
              </button>
              <button 
                onClick={handleResetGame}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '16px',
                  border: '2px solid #cbd5e1',
                  background: '#ffffff',
                  color: '#64748b',
                  fontWeight: '800',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
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