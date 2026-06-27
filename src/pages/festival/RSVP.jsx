/**
 * pages/festival/RSVP.jsx
 * Sub-halaman: Zona Pengunjung — RSVP/Daftar Hadir.
 * FR-04: Modal pop-up dengan Google Forms embed ATAU redirect ke WhatsApp.
 * Data: festival.js (festivalInfo.rsvpWhatsapp, festivalInfo.rsvpFormUrl)
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FestivalLayout from './FestivalLayout';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { festivalInfo } from '../../data/festival';

function FestEyebrow({ children }) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
      style={{ background: 'rgba(232,197,71,0.15)', color: 'var(--color-fest-yellow)', letterSpacing: '0.15em' }}
    >
      {children}
    </span>
  );
}

// Modal RSVP — embed Google Forms atau fallback WhatsApp
function RSVPModal({ onClose }) {
  const hasForm = !!festivalInfo.rsvpFormUrl;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-[1.5rem] overflow-hidden"
        style={{ background: '#1A1208', border: '1px solid rgba(232,197,71,0.2)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header modal */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
        >
          <h3 className="font-bold text-lg" style={{ color: 'var(--color-fest-yellow)' }}>
            Daftar Hadir Festival
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-200 hover:bg-white/10"
            style={{ color: 'rgba(245,240,232,0.6)' }}
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>

        {/* Konten modal */}
        <div className="p-6">
          {hasForm ? (
            // Embed Google Forms
            <iframe
              src={festivalInfo.rsvpFormUrl}
              width="100%"
              height="480"
              style={{ border: 0, borderRadius: '0.75rem' }}
              title="Formulir RSVP Festival Desa Sejahtera"
            />
          ) : (
            // Fallback: WhatsApp
            <div className="text-center py-8">
              <span className="text-5xl block mb-6">💬</span>
              <h4 className="font-bold text-lg mb-3" style={{ color: 'var(--color-fest-text)' }}>
                Daftar via WhatsApp Panitia
              </h4>
              <p className="text-sm mb-8 leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
                Klik tombol di bawah untuk langsung menghubungi panitia via WhatsApp.
                Pesan otomatis sudah disiapkan untukmu.
              </p>
              <a
                href={festivalInfo.rsvpWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:opacity-90 active:scale-95"
                style={{
                  background: '#25D366',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
                }}
              >
                <span>💬</span>
                Buka WhatsApp Panitia
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RSVP() {
  const [modalOpen, setModalOpen] = useState(false);
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const infoRef = useScrollReveal();

  return (
    <FestivalLayout>
      {/* ── Hero ── */}
      <section className="py-40 px-6 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div ref={heroRef} className="reveal max-w-2xl mx-auto">
          <FestEyebrow>Zona Pengunjung</FestEyebrow>
          <h1
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(2.4rem, 7vw, 4.5rem)',
              letterSpacing: '-0.04em',
              color: 'var(--color-fest-yellow)',
            }}
          >
            Daftar Hadir<br />Festival
          </h1>
          <p className="text-base mb-10" style={{ color: 'rgba(245,240,232,0.6)' }}>
            Beritahu kami kamu akan datang. Gratis, terbuka untuk semua.
          </p>

          {/* Tombol RSVP utama — FR-04 */}
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:opacity-90 active:scale-95"
            style={{
              background: 'var(--color-fest-yellow)',
              color: '#0F0A04',
              boxShadow: '0 4px 32px rgba(232,197,71,0.4)',
            }}
          >
            🎟️ Daftar Hadir / RSVP Festival
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(15,10,4,0.15)' }}
            >
              →
            </span>
          </button>
        </div>
      </section>

      {/* ── Info pendaftaran ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5" ref={infoRef}>
          {[
            { icon: '✅', title: 'Gratis', desc: 'Tidak ada tiket masuk. Festival ini terbuka untuk seluruh masyarakat.' },
            { icon: '📍', title: 'Lokasi', desc: 'Lapangan Utama Desa Sejahtera. Parkir tersedia di area sekitar balai desa.' },
            { icon: '📅', title: 'Tanggal', desc: '15 – 17 Agustus 2026. Mulai pukul 08.00 WIB setiap harinya.' },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal rounded-2xl p-6 text-center"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <span className="text-3xl block mb-3">{item.icon}</span>
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-fest-yellow)' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA ke rundown */}
        <div className="text-center mt-12">
          <Link
            to="/festival/rundown"
            className="text-sm font-semibold flex items-center gap-1 justify-center hover:gap-2 transition-all duration-200"
            style={{ color: 'var(--color-fest-yellow)' }}
          >
            Lihat jadwal acara lengkap →
          </Link>
        </div>
      </section>

      {/* Modal RSVP */}
      {modalOpen && <RSVPModal onClose={() => setModalOpen(false)} />}
    </FestivalLayout>
  );
}
