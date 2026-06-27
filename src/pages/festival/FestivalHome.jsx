/**
 * pages/festival/FestivalHome.jsx
 * Colourful & bright. Tanpa emoji, tanpa dark mode.
 */
import { Link } from 'react-router-dom';
import FestivalLayout from './FestivalLayout';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { festivalInfo } from '../../data/festival';

function FestEyebrow({ children, color = 'var(--color-fest-orange)' }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        borderRadius: '200px',
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        background: `${color}18`,
        color,
        marginBottom: '1rem',
      }}
    >
      {children}
    </span>
  );
}

// Card highlight tanpa emoji
function HighlightCard({ title, desc, accentColor, delay }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay}`}
      style={{
        background: '#fff',
        border: `1px solid ${accentColor}25`,
        borderTop: `4px solid ${accentColor}`,
        borderRadius: '1.25rem',
        padding: '1.5rem',
      }}
    >
      <h3 style={{ fontWeight: 700, fontSize: '1rem', color: accentColor, marginBottom: '0.5rem' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-fest-muted)' }}>
        {desc}
      </p>
    </div>
  );
}

export default function FestivalHome() {
  const heroRef  = useScrollReveal({ threshold: 0.05 });
  const storyRef = useScrollReveal();
  const ctaRef   = useScrollReveal();

  return (
    <FestivalLayout>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '88dvh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '6rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--color-fest-bg)',
        }}
      >
        {/* Dekoratif: blok warna kiri atas */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '30%', height: 6,
          background: 'linear-gradient(to right, var(--color-fest-red), var(--color-fest-orange), var(--color-fest-yellow))',
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '30%', height: 6,
          background: 'linear-gradient(to left, var(--color-fest-teal), var(--color-fest-yellow))',
        }} />

        <div ref={heroRef} className="reveal" style={{ maxWidth: 680, width: '100%' }}>
          <FestEyebrow color="var(--color-fest-red)">{festivalInfo.dates}</FestEyebrow>

          <h1 style={{
            fontWeight: 900,
            fontSize: 'clamp(2.8rem, 9vw, 5.5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: 'var(--color-fest-text)',
            marginBottom: '0.25rem',
          }}>
            {festivalInfo.name.split(' ').slice(0, 2).join(' ')}
          </h1>
          <h1 style={{
            fontWeight: 900,
            fontSize: 'clamp(2.8rem, 9vw, 5.5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: 'var(--color-fest-orange)',
            marginBottom: '1.5rem',
          }}>
            {festivalInfo.name.split(' ').slice(2).join(' ')}
          </h1>

          {/* Tagline dengan warna */}
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--color-fest-muted)',
            letterSpacing: '0.04em',
            marginBottom: '2.5rem',
          }}>
            {festivalInfo.tagline}
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/festival/rundown"
              style={{
                padding: '0.75rem 1.75rem',
                borderRadius: '200px',
                fontWeight: 700,
                fontSize: '0.875rem',
                textDecoration: 'none',
                background: 'var(--color-fest-orange)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(212,98,26,0.3)',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Lihat Rundown
            </Link>
            <Link
              to="/festival/rsvp"
              style={{
                padding: '0.75rem 1.75rem',
                borderRadius: '200px',
                fontWeight: 700,
                fontSize: '0.875rem',
                textDecoration: 'none',
                background: 'transparent',
                color: 'var(--color-fest-orange)',
                border: '1.5px solid var(--color-fest-orange)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-fest-orange)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-fest-orange)'; }}
            >
              Daftar Hadir
            </Link>
          </div>

          <p style={{ marginTop: '2.5rem', fontSize: '0.8rem', color: 'var(--color-fest-muted)', letterSpacing: '0.04em' }}>
            {festivalInfo.location}
          </p>
        </div>
      </section>

      {/* ── HIGHLIGHT ─────────────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <FestEyebrow color="var(--color-fest-teal)">Yang Ada di Festival</FestEyebrow>
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', letterSpacing: '-0.03em', color: 'var(--color-fest-text)', margin: 0 }}>
              Tiga Hari Penuh Kegiatan
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            <HighlightCard delay={1} accentColor="var(--color-fest-orange)" title="Seni Budaya" desc="Pertunjukan wayang, reog, tari tradisional, dan musik rakyat dari seniman lokal." />
            <HighlightCard delay={2} accentColor="var(--color-fest-yellow)" title="Pameran UMKM" desc="40+ stand produk lokal: kerajinan bambu, batik tulis, kuliner tradisional desa." />
            <HighlightCard delay={3} accentColor="var(--color-fest-teal)" title="Lomba Tradisional" desc="Berbagai perlombaan khas hari kemerdekaan dan permainan rakyat untuk semua umur." />
          </div>
        </div>
      </section>

      {/* ── SEJARAH & FILOSOFI ────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--color-fest-bg)' }}>
        <div
          ref={storyRef}
          className="reveal"
          style={{
            maxWidth: 720,
            margin: '0 auto',
            background: '#fff',
            borderRadius: '2rem',
            padding: '3rem',
            border: '1px solid var(--color-fest-border)',
          }}
        >
          <FestEyebrow color="var(--color-fest-red)">Sejarah & Filosofi</FestEyebrow>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '-0.03em', color: 'var(--color-fest-text)', marginBottom: '1.25rem' }}>
            Dari Kenduri Jadi Perayaan
          </h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.9, color: 'var(--color-fest-muted)', whiteSpace: 'pre-line' }}>
            {festivalInfo.description}
          </p>
        </div>
      </section>

      {/* ── CTA RSVP ──────────────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div
          ref={ctaRef}
          className="reveal"
          style={{
            maxWidth: 700,
            margin: '0 auto',
            borderRadius: '2rem',
            padding: '3.5rem 2.5rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--color-fest-orange) 0%, var(--color-fest-yellow) 100%)',
          }}
        >
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', letterSpacing: '-0.03em', color: '#fff', marginBottom: '0.75rem' }}>
            Ikut Merayakan?
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Daftarkan dirimu sekarang. Gratis, terbuka untuk semua warga.
          </p>
          <Link
            to="/festival/rsvp"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 2rem',
              borderRadius: '200px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              background: '#fff',
              color: 'var(--color-fest-orange)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
          >
            Daftar Hadir / RSVP
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

    </FestivalLayout>
  );
}
