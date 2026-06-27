/**
 * components/common/ChatbotWidget.jsx – tanpa emoji.
 */
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { chatbotTree, chatbotActions } from '../../data/chatbot';

export default function ChatbotWidget() {
  const [open, setOpen]               = useState(false);
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [history, setHistory]         = useState([]);
  const bottomRef                     = useRef(null);
  const navigate                      = useNavigate();

  const currentNode = chatbotTree[currentNodeId];

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, open]);

  const handleToggle = () => {
    if (!open) {
      setCurrentNodeId('start');
      setHistory([{ type: 'bot', text: chatbotTree.start.message }]);
    }
    setOpen(!open);
  };

  const handleOption = (option) => {
    const newHistory = [...history, { type: 'user', text: option.label }];

    if (option.action) {
      const actionUrl = chatbotActions[option.action];
      if (option.action === 'whatsapp') {
        window.open(actionUrl, '_blank', 'noreferrer');
        setHistory([...newHistory, { type: 'bot', text: 'Mengarahkan ke WhatsApp panitia...' }]);
      } else if (option.action.startsWith('link-')) {
        setHistory([...newHistory, { type: 'bot', text: 'Membuka halaman...' }]);
        setTimeout(() => { setOpen(false); navigate(actionUrl); }, 600);
      }
      return;
    }

    if (option.nextId) {
      const nextNode = chatbotTree[option.nextId];
      setHistory([...newHistory, { type: 'bot', text: nextNode.message }]);
      setCurrentNodeId(option.nextId);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={handleToggle}
        aria-label={open ? 'Tutup chat' : 'Buka chat layanan desa'}
        style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 50,
          width: 52, height: 52,
          borderRadius: '50%',
          border: 'none', cursor: 'pointer',
          background: 'var(--color-desa-green)',
          color: '#fff',
          boxShadow: '0 6px 24px rgba(30,92,58,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: open ? 'scale(0.92)' : 'scale(1)',
          transition: 'transform 0.3s cubic-bezier(0.32,0.72,0,1)',
        }}
      >
        {open ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Popup */}
      <div
        role="dialog"
        aria-label="Chat Layanan Desa Sejahtera"
        style={{
          position: 'fixed', bottom: '5.5rem', right: '1.5rem', zIndex: 50,
          width: 320,
          background: '#fff',
          borderRadius: '1.25rem',
          border: '1px solid rgba(0,0,0,0.07)',
          boxShadow: '0 16px 56px rgba(0,0,0,0.13)',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
          transformOrigin: 'bottom right',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{ background: 'var(--color-desa-green)', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.875rem', lineHeight: 1.2, margin: 0 }}>Layanan Mandiri</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', margin: '0.1rem 0 0' }}>Desa Sejahtera</p>
          </div>
        </div>

        {/* Riwayat chat */}
        <div style={{ padding: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.625rem', maxHeight: 240, overflowY: 'auto' }}>
          {history.map((msg, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                maxWidth: '85%',
                padding: '0.5rem 0.75rem',
                borderRadius: msg.type === 'user' ? '1rem 1rem 0.25rem 1rem' : '1rem 1rem 1rem 0.25rem',
                fontSize: '0.85rem',
                lineHeight: 1.55,
                background: msg.type === 'user' ? 'var(--color-desa-green)' : 'var(--color-desa-surface)',
                color: msg.type === 'user' ? '#fff' : 'var(--color-desa-text)',
              }}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Tombol pilihan */}
        <div style={{ padding: '0 0.875rem 0.875rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {currentNode?.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleOption(option)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.625rem',
                fontSize: '0.85rem',
                fontWeight: 500,
                border: '1.5px solid var(--color-desa-green)',
                color: 'var(--color-desa-green)',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'all 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-desa-green-dim)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
