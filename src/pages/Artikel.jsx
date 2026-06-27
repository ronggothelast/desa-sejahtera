/**
 * pages/Artikel.jsx
 * Halaman Artikel & Berita: list artikel dengan filter kategori teks.
 * Data: articles.js
 */
import { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { articles, categories } from '../data/articles';

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

function ArticleRow({ article }) {
  const ref = useScrollReveal();
  return (
    <article
      ref={ref}
      className="reveal flex gap-5 items-start py-7 transition-all duration-300 cursor-pointer group"
      style={{ borderBottom: '1px solid var(--color-desa-border)' }}
    >
      {/* Thumbnail placeholder */}
      <div
        className="w-24 h-20 rounded-xl flex-shrink-0 flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-105"
        style={{ background: 'var(--color-desa-surface)' }}
      >
        🌾
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{ background: 'var(--color-desa-green-dim)', color: 'var(--color-desa-green)' }}
          >
            {article.category}
          </span>
          <span className="text-xs" style={{ color: 'var(--color-desa-muted)' }}>
            {new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
        </div>
        <h3
          className="font-bold text-base leading-snug mb-1.5 transition-colors duration-200"
          style={{ color: 'var(--color-desa-text)' }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-desa-green)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-desa-text)'; }}
        >
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-desa-muted)' }}>
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
      {/* ── Hero ── */}
      <section className="py-32 px-6 text-center" style={{ background: 'linear-gradient(160deg, #e8f5ef 0%, var(--color-desa-bg) 60%)' }}>
        <div ref={heroRef} className="reveal max-w-2xl mx-auto">
          <Eyebrow>Berita & Informasi</Eyebrow>
          <h1
            className="font-black mb-4"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', letterSpacing: '-0.03em', color: 'var(--color-desa-text)' }}
          >
            Kabar <span style={{ color: 'var(--color-desa-green)' }}>Desa</span>
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-desa-muted)' }}>
            Informasi terkini seputar kegiatan, pembangunan, dan kehidupan Desa Sejahtera.
          </p>
        </div>
      </section>

      {/* ── Filter + List ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
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

          {/* List */}
          <div>
            {filtered.length === 0 ? (
              <p className="text-center py-16" style={{ color: 'var(--color-desa-muted)' }}>
                Tidak ada artikel di kategori ini.
              </p>
            ) : (
              filtered.map(article => (
                <ArticleRow key={article.id} article={article} />
              ))
            )}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
