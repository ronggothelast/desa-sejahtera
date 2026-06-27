/**
 * pages/festival/Rundown.jsx
 * Timeline colourful – bright mode. Tanpa emoji.
 */
import FestivalLayout from './FestivalLayout';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { festivalSchedule } from '../../data/festival';

function FestEyebrow({ children, color = 'var(--color-fest-orange)' }) {
  return (
    <span style={{
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
    }}>
      {children}
    </span>
  );
}

const DAY_COLORS = {
  1: { main: '#D4621A', light: '#FDEEE3' },
  2: { main: '#E8A800', light: '#FFF3D6' },
  3: { main: '#0B7A6E', light: '#E0F4F2' },
};

function DayBlock({ day }) {
  const ref = useScrollReveal();
  const { main, light } = DAY_COLORS[day.day] || DAY_COLORS[1];

  return (
    <div ref={ref} className="reveal">
      {/* Header hari */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{
          width: 48, height: 48,
          borderRadius: '50%',
          background: main,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          fontSize: '1.2rem',
          flexShrink: 0,
        }}>
          {day.day}
        </div>
        <div>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: main, marginBottom: '0.15rem' }}>
            {day.label}
          </p>
          <h3 style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em', color: 'var(--color-fest-text)', lineHeight: 1.2, margin: 0 }}>
            {day.date} — {day.theme}
          </h3>
        </div>
      </div>

      {/* Timeline events */}
      <div style={{ marginLeft: '1.5rem', borderLeft: `2px solid ${main}30` }}>
        {day.events.map((event, i) => (
          <div key={i} style={{ position: 'relative', paddingLeft: '1.75rem', paddingBottom: i < day.events.length - 1 ? '1.75rem' : 0 }}>
            {/* Dot */}
            <div style={{
              position: 'absolute', left: 0, top: '0.3rem',
              width: 10, height: 10,
              borderRadius: '50%',
              background: main,
              transform: 'translateX(-50%)',
              boxShadow: `0 0 0 3px ${light}`,
            }} />

            {/* Card event */}
            <div style={{
              background: '#fff',
              border: '1px solid var(--color-fest-border)',
              borderRadius: '1rem',
              padding: '1rem 1.25rem',
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: main, letterSpacing: '0.06em', display: 'block', marginBottom: '0.25rem' }}>
                {event.time} WIB
              </span>
              <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-fest-text)', marginBottom: '0.35rem', lineHeight: 1.35 }}>
                {event.title}
              </h4>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--color-fest-muted)', margin: 0 }}>
                {event.description}
              </p>
            </div>
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

      {/* ── HERO ── */}
      <section style={{
        padding: '8rem 1.5rem 5rem',
        textAlign: 'center',
        background: 'var(--color-fest-bg)',
        borderBottom: '1px solid var(--color-fest-border)',
      }}>
        <div ref={heroRef} className="reveal" style={{ maxWidth: 600, margin: '0 auto' }}>
          <FestEyebrow color="var(--color-fest-red)">Jadwal Acara</FestEyebrow>
          <h1 style={{
            fontWeight: 900,
            fontSize: 'clamp(2.4rem, 7vw, 4.5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: 'var(--color-fest-text)',
            marginBottom: '1rem',
          }}>
            Kegiatan &<br />
            <span style={{ color: 'var(--color-fest-orange)' }}>Rundown</span>
          </h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-fest-muted)', lineHeight: 1.7 }}>
            15 – 17 Agustus 2026 · Lapangan Utama Desa Sejahtera
          </p>

          {/* Badge 3 hari */}
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {Object.entries(DAY_COLORS).map(([day, { main, light }]) => (
              <span key={day} style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '200px',
                fontSize: '0.75rem',
                fontWeight: 700,
                background: light,
                color: main,
              }}>
                Hari {day}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {festivalSchedule.map(day => (
            <DayBlock key={day.day} day={day} />
          ))}
        </div>
      </section>

    </FestivalLayout>
  );
}
