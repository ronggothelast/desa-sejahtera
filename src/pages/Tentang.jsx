/**
 * pages/Tentang.jsx – tanpa emoji.
 */
import PageWrapper from '../components/layout/PageWrapper';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { villageProfile, villageVision, villageHistory, villageStructure } from '../data/village';

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

export default function Tentang() {
  const heroRef    = useScrollReveal({ threshold: 0.05 });
  const visiRef    = useScrollReveal();
  const historyRef = useScrollReveal();
  const strukturRef = useScrollReveal();

  return (
    <PageWrapper>

      {/* Hero */}
      <section style={{ padding: '8rem 1.5rem 5rem', textAlign: 'center', background: '#F7F5F0', borderBottom: '1px solid var(--color-desa-border)' }}>
        <div ref={heroRef} className="reveal" style={{ maxWidth: 600, margin: '0 auto' }}>
          <Eyebrow>Profil Desa</Eyebrow>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(2.4rem, 7vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: 1.0, color: 'var(--color-desa-text)', marginBottom: '1rem' }}>
            Tentang<br /><span style={{ color: 'var(--color-desa-green)' }}>Desa Sejahtera</span>
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--color-desa-muted)', marginBottom: '2.5rem' }}>
            {villageProfile.kecamatan} · {villageProfile.kabupaten} · {villageProfile.provinsi}
          </p>

          {/* Statistik */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', maxWidth: 380, margin: '0 auto' }}>
            {[
              { v: villageProfile.luasWilayah, l: 'Luas Wilayah' },
              { v: villageProfile.jumlahPenduduk, l: 'Penduduk' },
              { v: villageProfile.jumlahKK, l: 'Kepala Keluarga' },
              { v: '1921', l: 'Tahun Berdiri' },
            ].map(s => (
              <div key={s.l} style={{ background: '#fff', border: '1px solid var(--color-desa-border)', borderRadius: '1rem', padding: '1rem', textAlign: 'center' }}>
                <p style={{ fontWeight: 800, fontSize: '1.3rem', color: 'var(--color-desa-green)', letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>{s.v}</p>
                <p style={{ fontSize: '0.72rem', color: 'var(--color-desa-muted)', marginTop: '0.2rem', letterSpacing: '0.04em' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem' }}>
          <div ref={visiRef} className="reveal">
            <Eyebrow>Visi</Eyebrow>
            <p style={{ fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.65, color: 'var(--color-desa-text)', borderLeft: '3px solid var(--color-desa-green)', paddingLeft: '1.25rem' }}>
              "{villageVision.visi}"
            </p>
          </div>
          <div>
            <Eyebrow>Misi</Eyebrow>
            <ol style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', padding: 0, listStyle: 'none' }}>
              {villageVision.misi.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{
                    flexShrink: 0, width: 26, height: 26,
                    borderRadius: '50%',
                    background: 'var(--color-desa-green)',
                    color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: 700, marginTop: 2,
                  }}>
                    {i + 1}
                  </span>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-desa-muted)', margin: 0 }}>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Sejarah */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--color-desa-bg)' }}>
        <div ref={historyRef} className="reveal" style={{ maxWidth: 720, margin: '0 auto' }}>
          <Eyebrow>Sejarah</Eyebrow>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', letterSpacing: '-0.03em', color: 'var(--color-desa-text)', marginBottom: '1.5rem' }}>
            Lebih dari Satu Abad Berdiri
          </h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 2, color: 'var(--color-desa-muted)', whiteSpace: 'pre-line' }}>
            {villageHistory}
          </p>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div ref={strukturRef} className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Eyebrow>Organisasi</Eyebrow>
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', letterSpacing: '-0.03em', color: 'var(--color-desa-text)', margin: 0 }}>
              Struktur Pemerintahan Desa
            </h2>
          </div>

          {/* Kepala Desa */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{
              background: 'var(--color-desa-green)',
              color: '#fff',
              borderRadius: '1.25rem',
              padding: '1.25rem 2.5rem',
              textAlign: 'center',
              minWidth: 220,
            }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', margin: '0 auto 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.5"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <p style={{ fontWeight: 700, fontSize: '0.875rem', margin: 0 }}>{villageStructure[0].jabatan}</p>
              <p style={{ fontSize: '0.8rem', opacity: 0.8, marginTop: '0.2rem' }}>{villageStructure[0].nama}</p>
            </div>
          </div>

          {/* Staf */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.875rem' }}>
            {villageStructure.slice(1).map(staf => (
              <div key={staf.jabatan} style={{
                background: '#fff',
                border: '1px solid var(--color-desa-border)',
                borderRadius: '1rem',
                padding: '1.25rem',
                textAlign: 'center',
              }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-desa-surface)', margin: '0 auto 0.625rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="var(--color-desa-green)" strokeWidth="1.5"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="var(--color-desa-green)" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <p style={{ fontWeight: 700, fontSize: '0.825rem', color: 'var(--color-desa-text)', margin: '0 0 0.2rem' }}>{staf.jabatan}</p>
                <p style={{ fontSize: '0.775rem', color: 'var(--color-desa-muted)', margin: 0 }}>{staf.nama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
