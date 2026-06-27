/**
 * pages/festival/Rundown.jsx
 * Sub-halaman: Kegiatan & Rundown — timeline vertikal per hari, mobile-friendly.
 * Data: festival.js
 */
import FestivalLayout from './FestivalLayout';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { festivalSchedule } from '../../data/festival';

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

function DayBlock({ day }) {
  const ref = useScrollReveal();

  const dayColors = {
    1: 'var(--color-fest-yellow)',
    2: 'var(--color-fest-orange)',
    3: 'var(--color-fest-red)',
  };
  const color = dayColors[day.day] || 'var(--color-fest-yellow)';

  return (
    <div ref={ref} className="reveal">
      {/* Header hari */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0"
          style={{ background: color, color: '#0F0A04' }}
        >
          {day.day}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(245,240,232,0.5)' }}>
            {day.label}
          </p>
          <h3 className="font-bold text-lg leading-tight" style={{ color }}>
            {day.date} — {day.theme}
          </h3>
        </div>
      </div>

      {/* Timeline events */}
      <div className="ml-6 border-l" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        {day.events.map((event, i) => (
          <div key={i} className="relative pl-8 pb-8 last:pb-0">
            {/* Dot */}
            <div
              className="absolute left-0 top-1 w-3 h-3 rounded-full"
              style={{
                background: color,
                transform: 'translateX(-50%)',
                boxShadow: `0 0 8px ${color}55`,
              }}
            />

            {/* Waktu */}
            <p
              className="text-xs font-bold mb-1 uppercase tracking-wider"
              style={{ color }}
            >
              {event.time}
            </p>

            {/* Nama acara */}
            <h4 className="font-bold text-base mb-1" style={{ color: 'var(--color-fest-text)' }}>
              {event.title}
            </h4>

            {/* Deskripsi */}
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Rundown() {
  const heroRef = useScrollReveal({ threshold: 0.05 });

  return (
    <FestivalLayout>
      {/* ── Hero ── */}
      <section className="py-40 px-6 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div ref={heroRef} className="reveal max-w-2xl mx-auto">
          <FestEyebrow>Jadwal Acara</FestEyebrow>
          <h1
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(2.4rem, 7vw, 4.5rem)',
              letterSpacing: '-0.04em',
              color: 'var(--color-fest-yellow)',
            }}
          >
            Kegiatan &<br />Rundown
          </h1>
          <p className="text-base" style={{ color: 'rgba(245,240,232,0.6)' }}>
            15 – 17 Agustus 2026 · Lapangan Utama Desa Sejahtera
          </p>
        </div>
      </section>

      {/* ── Timeline per hari ── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-16">
          {festivalSchedule.map((day) => (
            <DayBlock key={day.day} day={day} />
          ))}
        </div>
      </section>
    </FestivalLayout>
  );
}
