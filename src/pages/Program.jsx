/**
 * pages/Program.jsx – tanpa emoji di program card.
 */
import { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { programs, programCategories } from '../data/programs';

function Eyebrow({ children }) {
  return (
    <span style={{
      display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '200px',
      fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
      background: 'var(--color-desa-green-dim)', color: 'var(--color-desa-green)', marginBottom: '1rem',
    }}>
      {children}
    </span>
  );
}

const categoryColors = {
  Ekonomi:       { main: '#1E5C3A', bg: 'rgba(30,92,58,0.07)' },
  Infrastruktur: { main: '#4A6FA5', bg: 'rgba(74,111,165,0.07)' },
  Sosial:        { main: '#B5451B', bg: 'rgba(181,69,27,0.07)' },
};

function ProgramCard({ program }) {
  const ref = useScrollReveal();
  const c = categoryColors[program.category] || { main: 'var(--color-desa-green)', bg: 'var(--color-desa-green-dim)' };

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        background: '#fff',
        border: '1px solid var(--color-desa-border)',
        borderTop: `3px solid ${c.main}`,
        borderRadius: '1.25rem',
        padding: '1.5rem',
        transition: 'box-shadow 0.3s cubic-bezier(0.32,0.72,0,1), transform 0.3s cubic-bezier(0.32,0.72,0,1)',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem', flexWrap: 'wrap' }}>
        <span style={{ padding: '0.2rem 0.6rem', borderRadius: '200px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', background: c.bg, color: c.main }}>
          {program.category}
        </span>
        <span style={{
          padding: '0.2rem 0.6rem', borderRadius: '200px', fontSize: '0.7rem', fontWeight: 600,
          background: program.status === 'Aktif' ? '#e6f4ed' : '#fff8e6',
          color: program.status === 'Aktif' ? '#1E5C3A' : '#a06820',
        }}>
          {program.status}
        </span>
      </div>
      <h3 style={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.4, color: 'var(--color-desa-text)', marginBottom: '0.625rem' }}>
        {program.title}
      </h3>
      <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-desa-muted)', margin: '0 0 0.75rem' }}>
        {program.description}
      </p>
      <p style={{ fontSize: '0.775rem', color: 'var(--color-desa-muted)', margin: 0 }}>
        Sejak {program.year}
      </p>
    </div>
  );
}

export default function Program() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const heroRef = useScrollReveal({ threshold: 0.05 });

  const filtered = activeCategory === 'Semua'
    ? programs
    : programs.filter(p => p.category === activeCategory);

  return (
    <PageWrapper>
      {/* Hero */}
      <section style={{ padding: '8rem 1.5rem 5rem', textAlign: 'center', background: '#F7F5F0', borderBottom: '1px solid var(--color-desa-border)' }}>
        <div ref={heroRef} className="reveal" style={{ maxWidth: 560, margin: '0 auto' }}>
          <Eyebrow>Program Desa</Eyebrow>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(2.4rem, 7vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--color-desa-text)', marginBottom: '1rem' }}>
            Membangun<br /><span style={{ color: 'var(--color-desa-green)' }}>Bersama</span>
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--color-desa-muted)' }}>
            Program-program aktif untuk meningkatkan kesejahteraan warga di berbagai bidang.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          {/* Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {programCategories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.4rem 1rem', borderRadius: '200px',
                  fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
                  border: activeCategory === cat ? 'none' : '1px solid var(--color-desa-border)',
                  background: activeCategory === cat ? 'var(--color-desa-green)' : '#fff',
                  color: activeCategory === cat ? '#fff' : 'var(--color-desa-muted)',
                  transition: 'all 0.22s cubic-bezier(0.32,0.72,0,1)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {filtered.map(program => <ProgramCard key={program.id} program={program} />)}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
