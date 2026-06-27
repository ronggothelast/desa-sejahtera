/**
 * pages/festival/FestivalLayout.jsx
 * Layout festival – colourful & bright. Tanpa dark mode, tanpa emoji.
 * FR-01: tombol "Kembali ke Web Desa" high contrast.
 */
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ChatbotWidget from '../../components/common/ChatbotWidget';

const festLinks = [
  { to: '/festival',         label: 'Tentang Festival', end: true },
  { to: '/festival/rundown', label: 'Rundown' },
  { to: '/festival/rsvp',    label: 'Daftar Hadir' },
];

export default function FestivalLayout({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--color-fest-bg)', color: 'var(--color-fest-text)' }}>

      {/* Festival Navbar */}
      <header
        className="fixed top-5 left-1/2 z-50 w-full max-w-4xl px-4"
        style={{ transform: 'translateX(-50%)' }}
      >
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.625rem 1.25rem',
            borderRadius: '200px',
            background: scrolled ? 'rgba(255,251,242,0.96)' : 'rgba(255,251,242,0.82)',
            backdropFilter: 'blur(20px) saturate(160%)',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: scrolled ? '0 4px 28px rgba(0,0,0,0.10)' : '0 2px 12px rgba(0,0,0,0.06)',
            transition: 'all 0.45s cubic-bezier(0.32,0.72,0,1)',
          }}
        >
          {/* Logo Festival */}
          <div style={{ fontWeight: 800, fontSize: '0.95rem', letterSpacing: '-0.025em', color: 'var(--color-fest-orange)' }}>
            Festival Desa Sejahtera
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '0.15rem', alignItems: 'center' }} className="hidden md:flex">
            {festLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                style={({ isActive }) => ({
                  padding: '0.375rem 0.875rem',
                  borderRadius: '200px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  background: isActive ? 'var(--color-fest-orange)' : 'transparent',
                  color: isActive ? '#fff' : 'var(--color-fest-muted)',
                  transition: 'all 0.25s',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* FR-01: Tombol kembali – high contrast */}
          <Link
            to="/"
            style={{
              padding: '0.375rem 1rem',
              borderRadius: '200px',
              fontSize: '0.8rem',
              fontWeight: 700,
              textDecoration: 'none',
              background: 'var(--color-desa-green)',
              color: '#fff',
              boxShadow: '0 2px 10px rgba(30,92,58,0.25)',
              transition: 'opacity 0.2s',
            }}
          >
            Kembali ke Web Desa
          </Link>
        </nav>
      </header>

      <main style={{ paddingTop: '5rem' }}>
        {children}
      </main>

      {/* Footer Festival */}
      <footer
        style={{
          marginTop: '5rem',
          padding: '3rem 1.5rem',
          textAlign: 'center',
          borderTop: '1px solid var(--color-fest-border)',
          background: '#FFF8E7',
        }}
      >
        <p style={{ fontSize: '0.875rem', color: 'var(--color-fest-muted)', marginBottom: '0.5rem' }}>
          Festival Desa Sejahtera 2026 · 15 – 17 Agustus 2026
        </p>
        <Link
          to="/"
          style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-desa-green)', textDecoration: 'none' }}
        >
          Kembali ke Web Desa →
        </Link>
      </footer>

      <ChatbotWidget />
    </div>
  );
}
