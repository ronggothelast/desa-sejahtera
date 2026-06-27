/**
 * pages/Program.jsx
 * Halaman Program Desa: grid program dengan filter kategori.
 * Data: programs.js
 */
import { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { programs, programCategories } from '../data/programs';

function Eyebrow({ children }) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
      style={{ background: 'var(--color-desa-green-dim)', color: 'var(--color-desa-green)', letterSpacing: '0.15em' }}
    >
      {children}
    </span>
  );
}

function ProgramCard({ program }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="reveal rounded-[1.25rem] p-6 transition-all duration-400"
      style={{
        background: '#fff',
        border: '1px solid var(--color-desa-border)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.09)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 20px rgba(0,0,0,0.04)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: 'var(--color-desa-surface)' }}
        >
          {program.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: 'var(--color-desa-green-dim)', color: 'var(--color-desa-green)' }}
            >
              {program.category}
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{
                background: program.status === 'Aktif' ? '#e8f5ef' : '#fff8e6',
                color: program.status === 'Aktif' ? '#2D6A4F' : '#b07d20',
              }}
            >
              {program.status}
            </span>
          </div>
          <h3 className="font-bold text-base leading-snug" style={{ color: 'var(--color-desa-text)' }}>
            {program.title}
          </h3>
          <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--color-desa-muted)' }}>
            {program.description}
          </p>
          <p className="text-xs mt-3" style={{ color: 'var(--color-desa-muted)' }}>
            Sejak {program.year}
          </p>
        </div>
      </div>
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
      {/* ── Hero ── */}
      <section className="py-32 px-6 text-center" style={{ background: 'linear-gradient(160deg, #e8f5ef 0%, var(--color-desa-bg) 60%)' }}>
        <div ref={heroRef} className="reveal max-w-2xl mx-auto">
          <Eyebrow>Program Desa</Eyebrow>
          <h1
            className="font-black mb-4"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', letterSpacing: '-0.03em', color: 'var(--color-desa-text)' }}
          >
            Membangun Desa <span style={{ color: 'var(--color-desa-green)' }}>Bersama</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--color-desa-muted)' }}>
            Program-program yang sedang berjalan untuk meningkatkan kesejahteraan warga di berbagai bidang.
          </p>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Filter Kategori */}
          <div className="flex flex-wrap gap-2 mb-12">
            {programCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-250 active:scale-95"
                style={{
                  background: activeCategory === cat ? 'var(--color-desa-green)' : '#fff',
                  color: activeCategory === cat ? '#fff' : 'var(--color-desa-muted)',
                  border: activeCategory === cat ? 'none' : '1px solid var(--color-desa-border)',
                  transition: 'all 0.25s cubic-bezier(0.32,0.72,0,1)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
