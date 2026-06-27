/**
 * components/layout/Navbar.jsx
 * Floating glass pill navbar – Web Desa. Tanpa emoji.
 */
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/',        label: 'Beranda' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/program', label: 'Program' },
  { to: '/artikel', label: 'Artikel' },
  { to: '/kontak',  label: 'Kontak' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location              = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
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
            background: scrolled ? 'rgba(247,245,240,0.92)' : 'rgba(247,245,240,0.75)',
            backdropFilter: 'blur(20px) saturate(160%)',
            border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: scrolled
              ? '0 4px 28px rgba(0,0,0,0.09)'
              : '0 2px 12px rgba(0,0,0,0.05)',
            transition: 'all 0.45s cubic-bezier(0.32,0.72,0,1)',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontWeight: 800,
              fontSize: '0.95rem',
              letterSpacing: '-0.025em',
              color: 'var(--color-desa-green)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: 'var(--color-desa-green)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 12H8v-1c0-2.7 5.3-4 8-4s8 1.3 8 4v1H8z" fill="white"/>
                <path d="M12 3C8 3 5 7 5 12c0 1.5.4 3 1 4.2C7.5 14.5 9.6 13 12 13s4.5 1.5 6 3.2c.6-1.2 1-2.7 1-4.2 0-5-3-9-7-9z" fill="white" opacity="0.6"/>
              </svg>
            </span>
            Desa Sejahtera
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }} className="hidden md:flex">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                style={({ isActive }) => ({
                  padding: '0.375rem 0.875rem',
                  borderRadius: '200px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.25s cubic-bezier(0.32,0.72,0,1)',
                  background: isActive ? 'var(--color-desa-green)' : 'transparent',
                  color: isActive ? '#fff' : 'var(--color-desa-muted)',
                })}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/festival"
              style={{
                marginLeft: '0.5rem',
                padding: '0.375rem 1rem',
                borderRadius: '200px',
                fontSize: '0.875rem',
                fontWeight: 700,
                textDecoration: 'none',
                background: 'var(--color-fest-orange)',
                color: '#fff',
                transition: 'opacity 0.2s',
              }}
            >
              Festival
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            style={{
              width: 36, height: 36,
              borderRadius: '50%',
              background: 'var(--color-desa-green-dim)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
            }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: 18,
                  height: 1.5,
                  borderRadius: 4,
                  background: 'var(--color-desa-green)',
                  transformOrigin: 'center',
                  transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                  transform: open
                    ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                    : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                    : 'scaleX(0)'
                    : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: 'rgba(247,245,240,0.97)',
          backdropFilter: 'blur(24px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.35s cubic-bezier(0.32,0.72,0,1)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 8,
        }}
        className="md:hidden"
      >
        {navLinks.map((link, i) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              textDecoration: 'none',
              color: 'var(--color-desa-text)',
              padding: '0.5rem 1.5rem',
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 55}ms, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 55}ms`,
            }}
          >
            {link.label}
          </NavLink>
        ))}
        <Link
          to="/festival"
          style={{
            marginTop: 12,
            padding: '0.75rem 2rem',
            borderRadius: '200px',
            fontSize: '1.1rem',
            fontWeight: 800,
            textDecoration: 'none',
            background: 'var(--color-fest-orange)',
            color: '#fff',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(16px)',
            transition: `opacity 0.4s cubic-bezier(0.22,1,0.36,1) ${navLinks.length * 55}ms, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${navLinks.length * 55}ms`,
          }}
        >
          Festival Desa
        </Link>
      </div>
    </>
  );
}
