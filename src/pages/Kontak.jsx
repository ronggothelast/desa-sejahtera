/**
 * pages/Kontak.jsx
 * Halaman Kontak: Google Maps embed, media sosial, tombol WhatsApp.
 * Data: village.js
 */
import PageWrapper from '../components/layout/PageWrapper';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { villageProfile } from '../data/village';

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

export default function Kontak() {
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const contactRef = useScrollReveal();
  const mapRef = useScrollReveal();

  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <section className="py-32 px-6 text-center" style={{ background: 'linear-gradient(160deg, #e8f5ef 0%, var(--color-desa-bg) 60%)' }}>
        <div ref={heroRef} className="reveal max-w-2xl mx-auto">
          <Eyebrow>Hubungi Kami</Eyebrow>
          <h1
            className="font-black mb-4"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', letterSpacing: '-0.03em', color: 'var(--color-desa-text)' }}
          >
            Kami Siap <span style={{ color: 'var(--color-desa-green)' }}>Membantu</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--color-desa-muted)' }}>
            Ada pertanyaan atau keperluan administrasi? Hubungi kami lewat salah satu kanal di bawah.
          </p>
        </div>
      </section>

      {/* ── Info + Map ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Info Kontak */}
          <div ref={contactRef} className="reveal flex flex-col gap-6">
            {/* Jam Operasional */}
            <div
              className="rounded-2xl p-6"
              style={{ background: '#fff', border: '1px solid var(--color-desa-border)' }}
            >
              <h3 className="font-bold mb-4" style={{ color: 'var(--color-desa-text)' }}>
                🕐 Jam Operasional
              </h3>
              <p className="text-sm leading-loose" style={{ color: 'var(--color-desa-muted)' }}>
                Senin – Jumat<br />
                <strong style={{ color: 'var(--color-desa-text)' }}>08.00 – 15.00 WIB</strong>
              </p>
              <p className="text-sm mt-2" style={{ color: 'var(--color-desa-muted)' }}>
                Sabtu & Minggu: Libur
              </p>
            </div>

            {/* Alamat */}
            <div
              className="rounded-2xl p-6"
              style={{ background: '#fff', border: '1px solid var(--color-desa-border)' }}
            >
              <h3 className="font-bold mb-4" style={{ color: 'var(--color-desa-text)' }}>
                📍 Alamat
              </h3>
              <p className="text-sm leading-loose" style={{ color: 'var(--color-desa-muted)' }}>
                Jl. Raya Sejahtera No. 1<br />
                {villageProfile.kecamatan}<br />
                {villageProfile.kabupaten}, {villageProfile.provinsi} {villageProfile.kodePos}
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20Desa%20Sejahtera."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{
                background: '#25D366',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
              }}
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                Hubungi via WhatsApp
              </span>
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                →
              </span>
            </a>

            {/* Media Sosial */}
            <div
              className="rounded-2xl p-6"
              style={{ background: '#fff', border: '1px solid var(--color-desa-border)' }}
            >
              <h3 className="font-bold mb-4" style={{ color: 'var(--color-desa-text)' }}>
                📱 Media Sosial
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: '📸', platform: 'Instagram', handle: '@desasejahtera', url: '#' },
                  { icon: '▶️', platform: 'YouTube', handle: 'Desa Sejahtera Official', url: '#' },
                  { icon: '📘', platform: 'Facebook', handle: 'Desa Sejahtera', url: '#' },
                ].map(s => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-sm transition-all duration-200 hover:gap-4"
                    style={{ color: 'var(--color-desa-muted)' }}
                  >
                    <span className="text-lg">{s.icon}</span>
                    <span><strong style={{ color: 'var(--color-desa-text)' }}>{s.platform}</strong> · {s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div ref={mapRef} className="reveal">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid var(--color-desa-border)',
                aspectRatio: '4/3',
                background: 'var(--color-desa-surface)',
              }}
            >
              {/*
                Ganti src di bawah dengan embed URL Google Maps lokasi kantor desa yang sebenarnya.
                Format: https://maps.google.com/maps?q=LAT,LNG&output=embed
              */}
              <iframe
                src="https://maps.google.com/maps?q=-7.7956,110.3695&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor Desa Sejahtera"
              />
            </div>
            <p className="text-xs mt-3 text-center" style={{ color: 'var(--color-desa-muted)' }}>
              Klik peta untuk membuka di Google Maps
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
