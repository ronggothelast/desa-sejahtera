/**
 * pages/Home.jsx – tanpa emoji, design diperbaiki.
 */
import { Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { villageProfile } from '../data/village';
import { articles } from '../data/articles';

function Eyebrow({ children, color }) {
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
        background: color ? `${color}18` : 'var(--color-desa-green-dim)',
        color: color || 'var(--color-desa-green)',
        marginBottom: '1rem',
      }}
    >
      {children}
    </span>
  );
}

function ArticleCard({ article, delay = 0 }) {
  const ref = useScrollReveal();
  const categoryColors = {
    Pertanian: '#1E5C3A',
    Infrastruktur: '#4A6FA5',
    Kesehatan: '#B5451B',
    Festival: '#D4621A',
  };
  const color = categoryColors[article.category] || 'var(--color-desa-green)';

  return (
    <article
      ref={ref}
      className={`reveal reveal-delay-${delay}`}
      style={{
        background: '#fff',
        borderRadius: '1.25rem',
        overflow: 'hidden',
        border: '1px solid var(--color-desa-border)',
        transition: 'box-shadow 0.35s cubic-bezier(0.32,0.72,0,1), transform 0.35s cubic-bezier(0.32,0.72,0,1)',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.10)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Color bar atas sebagai pengganti gambar placeholder */}
      <div style={{ height: 6, background: color }} />
      <div style={{ padding: '1.25rem' }}>
        <span
          style={{
            display: 'inline-block',
            padding: '0.2rem 0.6rem',
            borderRadius: '200px',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            background: `${color}12`,
            color,
            marginBottom: '0.75rem',
          }}
        >
          {article.category}
        </span>
        <h3
          style={{
            fontWeight: 700,
            fontSize: '0.95rem',
            lineHeight: 1.45,
            marginBottom: '0.5rem',
            color: 'var(--color-desa-text)',
          }}
        >
          {article.title}
        </h3>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--color-desa-muted)' }}>
          {article.excerpt}
        </p>
        <p style={{ fontSize: '0.75rem', marginTop: '0.75rem', color: 'var(--color-desa-muted)' }}>
          {new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>
    </article>
  );
}

// Stat tile untuk hero
function StatTile({ value, label }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.7)',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: '1rem',
        padding: '1rem 1.25rem',
        textAlign: 'center',
      }}
    >
      <p style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--color-desa-green)', letterSpacing: '-0.03em', lineHeight: 1 }}>
        {value}
      </p>
      <p style={{ fontSize: '0.72rem', color: 'var(--color-desa-muted)', marginTop: '0.25rem', letterSpacing: '0.04em' }}>
        {label}
      </p>
    </div>
  );
}

export default function Home() {
  const heroRef         = useScrollReveal({ threshold: 0.05 });
  const greetingRef     = useScrollReveal();
  const festivalRef     = useScrollReveal();
  const articlesHeadRef = useScrollReveal();

  const latestArticles = articles.slice(0, 3);

  return (
    <PageWrapper>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '92dvh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
          background: '#F7F5F0',
        }}
      >
        {/* Garis dekoratif kiri */}
        <div style={{
          position: 'absolute', left: 0, top: '15%', bottom: '15%',
          width: 4, background: 'var(--color-desa-green)', borderRadius: '0 4px 4px 0',
        }} />

        <div ref={heroRef} className="reveal" style={{ maxWidth: 700, width: '100%', textAlign: 'center' }}>
          <Eyebrow>Portal Resmi Desa</Eyebrow>

          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(3rem, 9vw, 6rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: 'var(--color-desa-text)',
              marginBottom: '0.5rem',
            }}
          >
            Desa
          </h1>
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(3rem, 9vw, 6rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: 'var(--color-desa-green)',
              marginBottom: '1.5rem',
            }}
          >
            Sejahtera
          </h1>

          <p style={{ fontSize: '1rem', color: 'var(--color-desa-muted)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 440, margin: '0 auto 2.5rem' }}>
            {villageProfile.kecamatan}, {villageProfile.kabupaten}, {villageProfile.provinsi}.
            Portal informasi resmi warga desa.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/tentang"
              style={{
                padding: '0.75rem 1.75rem',
                borderRadius: '200px',
                fontWeight: 700,
                fontSize: '0.875rem',
                textDecoration: 'none',
                background: 'var(--color-desa-green)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(30,92,58,0.28)',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Kenali Desa
            </Link>
            <Link
              to="/festival"
              style={{
                padding: '0.75rem 1.75rem',
                borderRadius: '200px',
                fontWeight: 700,
                fontSize: '0.875rem',
                textDecoration: 'none',
                background: 'var(--color-fest-orange)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(212,98,26,0.28)',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Festival Desa
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginTop: '3.5rem', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
            <StatTile value={villageProfile.jumlahPenduduk} label="Penduduk" />
            <StatTile value={villageProfile.jumlahKK} label="Kepala Keluarga" />
            <StatTile value={villageProfile.luasWilayah} label="Luas Wilayah" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
          <div style={{ width: 1, height: 40, background: 'var(--color-desa-green)', opacity: 0.3, animation: 'none' }} />
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-desa-muted)' }}>Scroll</span>
        </div>
      </section>

      {/* ── SAMBUTAN KADES ────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          {/* Foto placeholder — geometric */}
          <div
            ref={greetingRef}
            className="reveal"
            style={{
              position: 'relative',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              aspectRatio: '3/4',
              background: 'var(--color-desa-surface)',
            }}
          >
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, var(--color-desa-green) 0%, #2D7A50 50%, var(--color-desa-warm) 100%)',
              opacity: 0.15,
            }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '1.25rem',
              background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
            }}>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.875rem' }}>{villageProfile.kepalaDesaName}</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>Kepala Desa Sejahtera</p>
            </div>
          </div>

          <div>
            <Eyebrow>Sambutan Kades</Eyebrow>
            <h2
              style={{
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: 'var(--color-desa-text)',
                marginBottom: '1.25rem',
              }}
            >
              Selamat Datang di<br />
              <span style={{ color: 'var(--color-desa-green)' }}>Desa Sejahtera</span>
            </h2>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.85, color: 'var(--color-desa-muted)' }}>
              {villageProfile.greeting}
            </p>
            <Link
              to="/tentang"
              style={{
                display: 'inline-block',
                marginTop: '1.75rem',
                padding: '0.625rem 1.5rem',
                borderRadius: '200px',
                fontWeight: 600,
                fontSize: '0.875rem',
                textDecoration: 'none',
                border: '1.5px solid var(--color-desa-green)',
                color: 'var(--color-desa-green)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-desa-green)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-desa-green)'; }}
            >
              Profil Lengkap Desa
            </Link>
          </div>
        </div>
      </section>

      {/* ── SHORTCUT FESTIVAL ─────────────────────────────────── */}
      <section style={{ padding: '4rem 1.5rem', background: 'var(--color-desa-bg)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div
            ref={festivalRef}
            className="reveal"
            style={{
              borderRadius: '2rem',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              background: '#fff',
              border: '1px solid var(--color-desa-border)',
            }}
          >
            {/* Strip warna festival */}
            <div style={{
              background: 'linear-gradient(135deg, var(--color-fest-orange) 0%, var(--color-fest-yellow) 60%, #F5D020 100%)',
              minHeight: 200,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '2rem',
            }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>
                15 – 17 Agustus 2026
              </span>
              <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.1, margin: 0 }}>
                Festival Desa<br />Sejahtera
              </h2>
            </div>

            {/* Info kanan */}
            <div style={{ padding: '2rem 2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--color-desa-muted)', marginBottom: '1.5rem' }}>
                Merayakan Bumi, Merawat Budaya. Tiga hari penuh pertunjukan seni, pameran UMKM, dan kuliner tradisional.
              </p>
              <Link
                to="/festival"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.7rem 1.5rem',
                  borderRadius: '200px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  background: 'var(--color-fest-orange)',
                  color: '#fff',
                  alignSelf: 'flex-start',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
              >
                Lihat Detail Festival
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTIKEL TERBARU ───────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div
            ref={articlesHeadRef}
            className="reveal"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}
          >
            <div>
              <Eyebrow>Berita Desa</Eyebrow>
              <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', letterSpacing: '-0.03em', color: 'var(--color-desa-text)', margin: 0 }}>
                Kabar Terbaru
              </h2>
            </div>
            <Link
              to="/artikel"
              style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-desa-green)', textDecoration: 'none' }}
            >
              Lihat semua artikel →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {latestArticles.map((article, i) => (
              <ArticleCard key={article.id} article={article} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
