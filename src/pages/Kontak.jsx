/**
 * pages/Kontak.jsx – tanpa emoji.
 */
import PageWrapper from '../components/layout/PageWrapper';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { villageProfile } from '../data/village';

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

function InfoCard({ title, children }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--color-desa-border)', borderRadius: '1.25rem', padding: '1.5rem' }}>
      <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-desa-text)', marginBottom: '0.75rem' }}>{title}</h3>
      {children}
    </div>
  );
}

export default function Kontak() {
  const heroRef    = useScrollReveal({ threshold: 0.05 });
  const contactRef = useScrollReveal();
  const mapRef     = useScrollReveal();

  return (
    <PageWrapper>
      {/* Hero */}
      <section style={{ padding: '8rem 1.5rem 5rem', textAlign: 'center', background: '#F7F5F0', borderBottom: '1px solid var(--color-desa-border)' }}>
        <div ref={heroRef} className="reveal" style={{ maxWidth: 560, margin: '0 auto' }}>
          <Eyebrow>Hubungi Kami</Eyebrow>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(2.4rem, 6vw, 4rem)', letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--color-desa-text)', marginBottom: '1rem' }}>
            Ada yang bisa<br /><span style={{ color: 'var(--color-desa-green)' }}>kami bantu?</span>
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--color-desa-muted)' }}>
            Hubungi kami lewat salah satu kanal di bawah untuk pertanyaan atau keperluan administrasi desa.
          </p>
        </div>
      </section>

      {/* Info + Map */}
      <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

          {/* Kiri: Info kontak */}
          <div ref={contactRef} className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <InfoCard title="Jam Operasional">
              <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--color-desa-muted)', margin: 0 }}>
                Senin – Jumat<br />
                <strong style={{ color: 'var(--color-desa-text)' }}>08.00 – 15.00 WIB</strong><br />
                Sabtu & Minggu tutup
              </p>
            </InfoCard>

            <InfoCard title="Alamat Kantor">
              <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--color-desa-muted)', margin: 0 }}>
                Jl. Raya Sejahtera No. 1<br />
                {villageProfile.kecamatan}<br />
                {villageProfile.kabupaten}, {villageProfile.provinsi} {villageProfile.kodePos}
              </p>
            </InfoCard>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20Desa%20Sejahtera."
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                borderRadius: '1.25rem',
                background: '#25D366', color: '#fff',
                textDecoration: 'none',
                fontWeight: 700, fontSize: '0.9rem',
                boxShadow: '0 4px 16px rgba(37,211,102,0.28)',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
            >
              Hubungi via WhatsApp
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>

            <InfoCard title="Media Sosial">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  { platform: 'Instagram', handle: '@desasejahtera', url: '#' },
                  { platform: 'YouTube', handle: 'Desa Sejahtera Official', url: '#' },
                  { platform: 'Facebook', handle: 'Desa Sejahtera', url: '#' },
                ].map(s => (
                  <a key={s.platform} href={s.url} target="_blank" rel="noreferrer"
                    style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'var(--color-desa-muted)', transition: 'color 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-desa-green)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-desa-muted)'; }}
                  >
                    <strong style={{ color: 'var(--color-desa-text)' }}>{s.platform}</strong> · {s.handle}
                  </a>
                ))}
              </div>
            </InfoCard>
          </div>

          {/* Kanan: Map */}
          <div ref={mapRef} className="reveal">
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--color-desa-border)', aspectRatio: '4/3' }}>
              <iframe
                src="https://maps.google.com/maps?q=-7.7956,110.3695&z=15&output=embed"
                width="100%" height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor Desa Sejahtera"
              />
            </div>
            <p style={{ fontSize: '0.75rem', textAlign: 'center', marginTop: '0.75rem', color: 'var(--color-desa-muted)' }}>
              Klik peta untuk membuka di Google Maps
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
