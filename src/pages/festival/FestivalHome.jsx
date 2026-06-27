/**
 * pages/festival/FestivalHome.jsx
 * Sub-halaman: Tentang Festival — narasi sejarah & filosofi budaya.
 * Data: festival.js
 */
import { Link } from 'react-router-dom';
import FestivalLayout from './FestivalLayout';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { festivalInfo } from '../../data/festival';

function FestEyebrow({ children }) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
      style={{ background: 'rgba(232,197,71,0.15)', color: 'var(--color-fest-yellow)', letterSpacing: '0.15em' }}
    >
      {children}
    </span>
  );
}

export default function FestivalHome() {
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const storyRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <FestivalLayout>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-40"
        style={{ minHeight: '90dvh' }}
      >
        {/* Dekoratif radial glow */}
        <div
          className="absolute top-0 left-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{
            transform: 'translateX(-50%)',
            background: 'radial-gradient(ellipse at center top, rgba(232,197,71,0.15) 0%, transparent 65%)',
          }}
        />

        <div ref={heroRef} className="reveal relative">
          <FestEyebrow>{festivalInfo.dates}</FestEyebrow>
          <h1
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(2.8rem, 9vw, 6rem)',
              letterSpacing: '-0.04em',
              color: 'var(--color-fest-yellow)',
              lineHeight: 1.05,
            }}
          >
            {festivalInfo.name}
          </h1>
          <p
            className="text-xl mb-10"
            style={{ color: 'rgba(245,240,232,0.65)', letterSpacing: '0.05em' }}
          >
            {festivalInfo.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/festival/rundown"
              className="px-7 py-3.5 rounded-full font-bold text-sm flex items-center gap-3 transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{
                background: 'var(--color-fest-yellow)',
                color: '#0F0A04',
                boxShadow: '0 4px 24px rgba(232,197,71,0.35)',
              }}
            >
              Lihat Rundown
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(15,10,4,0.15)' }}
              >
                →
              </span>
            </Link>
            <Link
              to="/festival/rsvp"
              className="px-7 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 active:scale-95"
              style={{
                border: '1.5px solid rgba(255,255,255,0.2)',
                color: 'var(--color-fest-text)',
              }}
            >
              Daftar Hadir →
            </Link>
          </div>

          {/* Info lokasi */}
          <p className="mt-10 text-sm" style={{ color: 'rgba(245,240,232,0.45)' }}>
            📍 {festivalInfo.location}
          </p>
        </div>
      </section>

      {/* ── Tentang Festival ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto" ref={storyRef}>
          <FestEyebrow>Sejarah & Filosofi</FestEyebrow>
          <h2
            className="font-black mb-8"
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
              letterSpacing: '-0.03em',
              color: 'var(--color-fest-text)',
            }}
          >
            Dari Kenduri<br />
            <span style={{ color: 'var(--color-fest-yellow)' }}>Jadi Perayaan</span>
          </h2>
          <p
            className="reveal text-base leading-[2] whitespace-pre-line"
            style={{ color: 'rgba(245,240,232,0.7)' }}
          >
            {festivalInfo.description}
          </p>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: '🎭', label: 'Seni Budaya', desc: 'Wayang, Reog, tari tradisional, dan musik rakyat.' },
            { icon: '🛍️', label: 'Pameran UMKM', desc: '40+ stand produk lokal: kerajinan, kuliner, batik tulis.' },
            { icon: '🎊', label: '3 Hari Penuh', desc: 'Rangkaian acara dari pagi hingga malam selama tiga hari.' },
          ].map((item, i) => {
            const ref = useScrollReveal({ threshold: 0.15 });
            return (
              <div
                key={i}
                ref={ref}
                className="reveal rounded-2xl p-6 text-center"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-fest-yellow)' }}>
                  {item.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA RSVP ── */}
      <section className="py-24 px-6" ref={ctaRef}>
        <div
          className="reveal max-w-3xl mx-auto rounded-[2rem] px-8 py-16 text-center"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(232,197,71,0.2)',
            boxShadow: '0 0 60px rgba(232,197,71,0.05)',
          }}
        >
          <h2
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
              letterSpacing: '-0.03em',
              color: 'var(--color-fest-yellow)',
            }}
          >
            Ikut Merayakan?
          </h2>
          <p className="mb-8 text-base" style={{ color: 'rgba(245,240,232,0.65)' }}>
            Daftarkan dirimu sekarang dan jadi bagian dari Festival Desa Sejahtera 2026.
          </p>
          <Link
            to="/festival/rsvp"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:opacity-90 active:scale-95"
            style={{
              background: 'var(--color-fest-yellow)',
              color: '#0F0A04',
              boxShadow: '0 4px 24px rgba(232,197,71,0.3)',
            }}
          >
            Daftar Hadir / RSVP
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(15,10,4,0.15)' }}
            >
              →
            </span>
          </Link>
        </div>
      </section>
    </FestivalLayout>
  );
}
