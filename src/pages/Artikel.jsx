/**
 * pages/Artikel.jsx – tanpa emoji.
 */
import { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { articles, categories } from '../data/articles';

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
  Pertanian:    '#1E5C3A',
  Infrastruktur:'#4A6FA5',
  Kesehatan:    '#B5451B',
  Festival:     '#D4621A',
};

function ArticleRow({ article }) {
  const ref = useScrollReveal();
  const color = categoryColors[article.category] || 'var(--color-desa-green)';

  return (
    <article
      ref={ref}
      className="reveal"
      style={{
        display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
        padding: '1.5rem 0',
        borderBottom: '1px solid var(--color-desa-border)',
        cursor: 'pointer',
      }}
    >
      {/* Color strip sebagai thumbnail */}
      <div style={{
        width: 80, height: 72,
        borderRadius: '0.75rem',
        flexShrink: 0,
        background: `${color}12`,
        borderLeft: `4px solid ${color}`,
      }} />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ padding: '0.15rem 0.6rem', borderRadius: '200px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', background: `${color}12`, color }}>
            {article.category}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-desa-muted)' }}>
            {new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
        </div>
        <h3 style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.45, marginBottom: '0.35rem', color: 'var(--color-desa-text)' }}>
          {article.title}
        </h3>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--color-desa-muted)', margin: 0 }}>
          {article.excerpt}
        </p>
      </div>
    </article>
  );
}

export default function Artikel() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const heroRef = useScrollReveal({ threshold: 0.05 });

  const filtered = activeCategory === 'Semua'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <PageWrapper>
      {/* Hero */}
      <section style={{ padding: '8rem 1.5rem 5rem', textAlign: 'center', background: '#F7F5F0', borderBottom: '1px solid var(--color-desa-border)' }}>
        <div ref={heroRef} className="reveal" style={{ maxWidth: 560, margin: '0 auto' }}>
          <Eyebrow>Berita & Informasi</Eyebrow>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(2.4rem, 7vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--color-desa-text)', marginBottom: '1rem' }}>
            Kabar <span style={{ color: 'var(--color-desa-green)' }}>Desa</span>
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--color-desa-muted)' }}>
            Informasi terkini seputar kegiatan, pembangunan, dan kehidupan warga Desa Sejahtera.
          </p>
        </div>
      </section>

      {/* Filter + List */}
      <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {/* Filter pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '200px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
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

          {/* List artikel */}
          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-desa-muted)' }}>
              Tidak ada artikel di kategori ini.
            </p>
          ) : (
            filtered.map(article => <ArticleRow key={article.id} article={article} />)
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
