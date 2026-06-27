/**
 * pages/festival/FestivalLayout.jsx
 * Layout wrapper khusus untuk semua sub-halaman Festival.
 * Navbar-nya punya tema festival (gelap + colorful) dengan tombol "Kembali ke Web Desa" high contrast.
 * Props: children, activeTab ('tentang'|'rundown'|'rsvp')
 */
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ChatbotWidget from '../../components/common/ChatbotWidget';

const festivalLinks = [
  { to: '/festival',         label: 'Tentang Festival', end: true },
  { to: '/festival/rundown', label: 'Kegiatan & Rundown' },
  { to: '/festival/rsvp',    label: 'Daftar Hadir' },
];

export default function FestivalLayout({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--color-fest-bg)', color: 'var(--color-fest-text)' }}>
      {/* Festival Navbar */}
      <header className="fixed top-4 left-1/2 z-50 w-full max-w-4xl px-4" style={{ transform: 'translateX(-50%)' }}>
        <nav
          className="flex items-center justify-between px-5 py-3 rounded-full"
          style={{
            background: scrolled ? 'rgba(15,10,4,0.90)' : 'rgba(15,10,4,0.70)',
            backdropFilter: 'blur(24px) saturate(140%)',
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: '0 2px 24px rgba(0,0,0,0.4)',
            transition: 'all 0.5s cubic-bezier(0.32,0.72,0,1)',
          }}
        >
          {/* Logo Festival */}
          <div className="flex items-center gap-2 font-bold text-base" style={{ color: 'var(--color-fest-yellow)' }}>
            <span className="text-xl">🎊</span>
            <span style={{ letterSpacing: '-0.02em' }}>Festival Desa</span>
          </div>

          {/* Links festival (desktop) */}
          <div className="hidden md:flex items-center gap-1">
            {festivalLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-black' : 'text-white/70 hover:text-white'
                  }`
                }
                style={({ isActive }) =>
                  isActive ? { background: 'var(--color-fest-yellow)' } : {}
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Tombol kembali ke Web Desa — HIGH CONTRAST (FR-01) */}
          <Link
            to="/"
            className="px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:opacity-90 active:scale-95"
            style={{
              background: '#fff',
              color: '#0F0A04',
              boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
            }}
          >
            ← Web Desa
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ paddingTop: '5rem' }}>
        {children}
      </main>

      {/* Footer Festival */}
      <footer
        className="py-10 px-6 text-center text-sm mt-20"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(245,240,232,0.4)' }}
      >
        <p>Festival Desa Sejahtera 2026 · 15 – 17 Agustus 2026</p>
        <Link to="/" className="hover:text-white transition-colors duration-200 mt-1 inline-block">
          Kembali ke Web Desa →
        </Link>
      </footer>

      {/* Chatbot tetap ada di halaman festival */}
      <ChatbotWidget />
    </div>
  );
}
