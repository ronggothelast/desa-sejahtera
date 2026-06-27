/**
 * pages/Home.jsx
 * Halaman Beranda Desa Sejahtera.
 * Sections: Hero, Sambutan Kades, Shortcut Festival, 3 Artikel Terbaru.
 * Data: village.js, articles.js
 */
import { Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { villageProfile } from '../data/village';
import { articles } from '../data/articles';

// Eyebrow pill badge
function Eyebrow({ children }) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
      style={{
        background: 'var(--color-desa-green-dim)',
        color: 'var(--color-desa-green)',
        letterSpacing: '0.15em',
      }}
    >
      {children}
    </span>
  );
}

function ArticleCard({ article }) {
  const ref = useScrollReveal();
  return (
    <article
      ref={ref}
      className="reveal group rounded-[1.25rem] overflow-hidden cursor-pointer"
      style={{
        background: '#fff',
        border: '1px solid var(--color-desa-border)',
        boxShadow: '0 2px 24px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.4s cubic-bezier(0.32,0.72,0,1), transform 0.4s cubic-bezier(0.32,0.72,0,1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.10)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 24px rgba(0,0,0,0.05)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Placeholder image area */}
      <div
        className="h-44 w-full flex items-center justify-center text-4xl"
        style={{ background: 'var(--color-desa-surface)' }}
      >
        🌾
      </div>
      <div className="p-5">
        <span
          className="inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-3"
          style={{
            background: 'var(--color-desa-green-dim)',
            color: 'var(--color-desa-green)',
          }}
        >
          {article.category}
        </span>
        <h3
          className="font-bold text-base leading-snug mb-2"
          style={{ color: 'var(--color-desa-text)' }}
        >
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-desa-muted)' }}>
          {article.excerpt}
        </p>
        <p className="text-xs mt-3" style={{ color: 'var(--color-desa-muted)' }}>
          {new Date(article.date).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'long', year: 'numeric',
          })}
        </p>
      </div>
    </article>
  );
}

export default function Home() {
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const greetingRef = useScrollReveal();
  const festivalRef = useScrollReveal();
  const articlesHeadRef = useScrollReveal();

  const latestArticles = articles.slice(0, 3);

  return (
    <PageWrapper>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center text-center px-6"
        style={{
          minHeight: '90dvh',
          background: 'linear-gradient(160deg, #e8f5ef 0%, var(--color-desa-bg) 60%)',
        }}
      >
        {/* Dekoratif lingkaran blur */}
        <div
          className="absolute top-20 left-1/4 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(45,106,79,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div ref={heroRef} className="reveal relative max-w-3xl mx-auto">
          <Eyebrow>Portal Resmi</Eyebrow>
          <h1
            className="font-black leading-[1.1] mb-6"
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              color: 'var(--color-desa-text)',
              letterSpacing: '-0.03em',
            }}
          >
            Desa{' '}
            <span style={{ color: 'var(--color-desa-green)' }}>Sejahtera</span>
          </h1>
          <p
            className="text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: 'var(--color-desa-muted)' }}
          >
            {villageProfile.kecamatan} · {villageProfile.kabupaten} · {villageProfile.provinsi}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/tentang"
              className="px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{
                background: 'var(--color-desa-green)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(45,106,79,0.3)',
              }}
            >
              Kenali Desa
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                →
              </span>
            </Link>
            <Link
              to="/festival"
              className="px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{
                background: 'var(--color-fest-orange)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(224,123,57,0.3)',
              }}
            >
              🎉 Festival Desa
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 flex flex-col items-center gap-1"
          style={{ transform: 'translateX(-50%)', color: 'var(--color-desa-muted)' }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="animate-bounce text-lg">↓</span>
        </div>
      </section>

      {/* ── Sambutan Kades ─────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <div
            ref={greetingRef}
            className="reveal rounded-[1.5rem] overflow-hidden flex items-center justify-center"
            style={{
              background: 'var(--color-desa-surface)',
              aspectRatio: '4/3',
              border: '1px solid var(--color-desa-border)',
            }}
          >
            <span className="text-7xl">👨‍💼</span>
          </div>

          <div>
            <Eyebrow>Sambutan Kepala Desa</Eyebrow>
            <h2
              className="font-bold mb-4 leading-tight"
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                letterSpacing: '-0.02em',
                color: 'var(--color-desa-text)',
              }}
            >
              {villageProfile.kepalaDesaName}
            </h2>
            <p
              className="text-base leading-loose"
              style={{ color: 'var(--color-desa-muted)' }}
            >
              {villageProfile.greeting}
            </p>
          </div>
        </div>
      </section>

      {/* ── Shortcut Festival ──────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            ref={festivalRef}
            className="reveal relative overflow-hidden rounded-[2rem] px-8 py-14 text-center"
            style={{
              background: 'var(--color-fest-bg)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Dekoratif */}
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 0%, rgba(232,197,71,0.15) 0%, transparent 60%)',
              }}
            />

            <span className="text-5xl mb-4 block">🎊</span>
            <Eyebrow>15 – 17 Agustus 2026</Eyebrow>
            <h2
              className="font-black mb-4"
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                letterSpacing: '-0.03em',
                color: 'var(--color-fest-yellow)',
              }}
            >
              Festival Desa Sejahtera
            </h2>
            <p className="mb-8 text-base" style={{ color: 'rgba(245,240,232,0.7)' }}>
              Merayakan Bumi, Merawat Budaya. Tiga hari penuh seni, kuliner, dan kebersamaan.
            </p>
            <Link
              to="/festival"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{
                background: 'var(--color-fest-yellow)',
                color: '#0F0A04',
                boxShadow: '0 4px 24px rgba(232,197,71,0.35)',
              }}
            >
              Lihat Detail Festival
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(15,10,4,0.15)' }}
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3 Artikel Terbaru ──────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            ref={articlesHeadRef}
            className="reveal flex items-end justify-between mb-12 gap-4 flex-wrap"
          >
            <div>
              <Eyebrow>Berita Desa</Eyebrow>
              <h2
                className="font-bold"
                style={{
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                  letterSpacing: '-0.02em',
                  color: 'var(--color-desa-text)',
                }}
              >
                Kabar Terbaru
              </h2>
            </div>
            <Link
              to="/artikel"
              className="text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200"
              style={{ color: 'var(--color-desa-green)' }}
            >
              Lihat semua →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
