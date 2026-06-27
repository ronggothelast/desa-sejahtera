/**
 * components/layout/Navbar.jsx
 * Navbar floating glass pill untuk halaman Web Desa.
 * Props: none
 * Data: static (menu hardcoded di sini karena tidak ada kebutuhan CMS untuk navigasi)
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Tutup menu saat navigasi
  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Floating Pill Navbar */}
      <header
        className="fixed top-4 left-1/2 z-50 w-full max-w-4xl px-4"
        style={{ transform: 'translateX(-50%)' }}
      >
        <nav
          className="flex items-center justify-between px-5 py-3 rounded-full transition-all"
          style={{
            background: scrolled
              ? 'rgba(250, 250, 248, 0.85)'
              : 'rgba(250, 250, 248, 0.65)',
            backdropFilter: 'blur(24px) saturate(160%)',
            border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: scrolled
              ? '0 4px 32px rgba(0,0,0,0.10)'
              : '0 2px 16px rgba(0,0,0,0.06)',
            transition: 'all 0.5s cubic-bezier(0.32,0.72,0,1)',
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-base" style={{ color: 'var(--color-desa-green)' }}>
            <span className="text-xl">🌿</span>
            <span style={{ fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Desa Sejahtera
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'hover:bg-black/5'
                  }`
                }
                style={({ isActive }) =>
                  isActive
                    ? { background: 'var(--color-desa-green)', color: '#fff' }
                    : { color: 'var(--color-desa-text)' }
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Tombol Festival */}
            <Link
              to="/festival"
              className="ml-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{ background: 'var(--color-fest-orange)' }}
            >
              🎉 Festival
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full"
            style={{ background: 'var(--color-desa-green-dim)' }}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
          >
            <span
              className="block h-0.5 w-5 rounded-full transition-all duration-300"
              style={{
                background: 'var(--color-desa-green)',
                transform: open ? 'translateY(4px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block h-0.5 w-5 rounded-full transition-all duration-300"
              style={{
                background: 'var(--color-desa-green)',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 w-5 rounded-full transition-all duration-300"
              style={{
                background: 'var(--color-desa-green)',
                transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-500"
        style={{
          background: 'rgba(250,250,248,0.95)',
          backdropFilter: 'blur(32px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.4s cubic-bezier(0.32,0.72,0,1)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-3 px-8">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className="text-2xl font-semibold py-2 transition-all duration-300"
              style={{
                color: 'var(--color-desa-text)',
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 60}ms`,
                transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 60}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 60}ms`,
              }}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/festival"
            className="mt-4 px-8 py-3 rounded-full text-lg font-bold text-white"
            style={{
              background: 'var(--color-fest-orange)',
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${navLinks.length * 60}ms`,
              transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${navLinks.length * 60}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${navLinks.length * 60}ms`,
            }}
          >
            🎉 Festival Desa
          </Link>
        </div>
      </div>
    </>
  );
}
