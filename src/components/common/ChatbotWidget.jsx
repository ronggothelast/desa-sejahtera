/**
 * components/common/ChatbotWidget.jsx
 * Floating chatbot button + decision tree popup.
 * Data: dari data/chatbot.js
 * Logic: rule-based, tanpa input teks bebas.
 * Props: none
 */
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { chatbotTree, chatbotActions } from '../../data/chatbot';

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [history, setHistory] = useState([]);
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  const currentNode = chatbotTree[currentNodeId];

  // Auto-scroll ke bawah saat pesan baru masuk
  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, open]);

  // Reset saat dibuka ulang
  const handleToggle = () => {
    if (!open) {
      setCurrentNodeId('start');
      setHistory([{ type: 'bot', text: chatbotTree.start.message }]);
    }
    setOpen(!open);
  };

  const handleOption = (option) => {
    // Tambah pilihan user ke history
    const newHistory = [
      ...history,
      { type: 'user', text: option.label },
    ];

    if (option.action) {
      const actionUrl = chatbotActions[option.action];
      if (option.action === 'whatsapp') {
        window.open(actionUrl, '_blank', 'noreferrer');
        setHistory([...newHistory, { type: 'bot', text: 'Mengarahkan ke WhatsApp...' }]);
      } else if (option.action.startsWith('link-')) {
        newHistory.push({ type: 'bot', text: 'Membuka halaman...' });
        setHistory(newHistory);
        setTimeout(() => {
          setOpen(false);
          navigate(actionUrl);
        }, 600);
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
      {/* Floating Button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 active:scale-95"
        style={{
          background: 'var(--color-desa-green)',
          boxShadow: '0 8px 32px rgba(45,106,79,0.35)',
          transform: open ? 'scale(0.9)' : 'scale(1)',
          transition: 'transform 0.3s cubic-bezier(0.32,0.72,0,1), box-shadow 0.3s ease',
        }}
        aria-label={open ? 'Tutup chat' : 'Buka chat'}
      >
        <span className="text-2xl">{open ? '✕' : '💬'}</span>
      </button>

      {/* Chat Popup */}
      <div
        className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl overflow-hidden"
        style={{
          background: '#fff',
          boxShadow: '0 16px 64px rgba(0,0,0,0.15)',
          border: '1px solid rgba(0,0,0,0.06)',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'all 0.35s cubic-bezier(0.32,0.72,0,1)',
          transformOrigin: 'bottom right',
        }}
        role="dialog"
        aria-label="Chat Layanan Desa"
      >
        {/* Header */}
        <div
          className="px-4 py-3 flex items-center gap-3"
          style={{ background: 'var(--color-desa-green)' }}
        >
          <span className="text-2xl">🌿</span>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">Layanan Mandiri</p>
            <p className="text-white/70 text-xs">Desa Sejahtera</p>
          </div>
        </div>

        {/* Pesan */}
        <div
          className="p-4 flex flex-col gap-3 overflow-y-auto"
          style={{ maxHeight: '260px' }}
        >
          {history.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className="max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed"
                style={
                  msg.type === 'user'
                    ? {
                        background: 'var(--color-desa-green)',
                        color: '#fff',
                        borderBottomRightRadius: '4px',
                      }
                    : {
                        background: 'var(--color-desa-surface)',
                        color: 'var(--color-desa-text)',
                        borderBottomLeftRadius: '4px',
                      }
                }
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Tombol Pilihan */}
        <div className="px-4 pb-4 flex flex-col gap-2">
          {currentNode?.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleOption(option)}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-80 active:scale-98"
              style={{
                border: '1.5px solid var(--color-desa-green)',
                color: 'var(--color-desa-green)',
                background: 'transparent',
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
