/**
 * pages/festival/RSVP.jsx
 * Colourful bright mode. Tanpa emoji, modal RSVP tetap FR-04.
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FestivalLayout from './FestivalLayout';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { festivalInfo } from '../../data/festival';

function FestEyebrow({ children, color = 'var(--color-fest-orange)' }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      borderRadius: '200px',
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      background: `${color}18`,
      color,
      marginBottom: '1rem',
    }}>
      {children}
    </span>
  );
}

function RSVPModal({ onClose }) {
  const hasForm = !!festivalInfo.rsvpFormUrl;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 50,
        background: 'rgba(26,18,8,0.55)',
        backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%', maxWidth: 520,
          background: '#fff',
          borderRadius: '1.75rem',
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,0.18)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header modal */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1.25rem 1.5rem',
          background: 'linear-gradient(135deg, var(--color-fest-orange), var(--color-fest-yellow))',
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: '1rem', color: '#fff', margin: 0 }}>Daftar Hadir Festival</p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', margin: '0.15rem 0 0' }}>Festival Desa Sejahtera 2026</p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'rgba(255,255,255,0.25)',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.9rem', fontWeight: 700, color: '#fff',
            }}
            aria-label="Tutup"
          >
            ×
          </button>
        </div>

        {/* Konten */}
        <div style={{ padding: '2rem 1.75rem' }}>
          {hasForm ? (
            <iframe
              src={festivalInfo.rsvpFormUrl}
              width="100%"
              height="480"
              style={{ border: 0, borderRadius: '0.75rem' }}
              title="Formulir RSVP Festival Desa Sejahtera"
            />
          ) : (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: 'var(--color-fest-orange-lt)',
                margin: '0 auto 1.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="var(--color-fest-orange)"/>
                </svg>
              </div>
              <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-fest-text)', marginBottom: '0.5rem' }}>
                Daftar via WhatsApp Panitia
              </h4>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-fest-muted)', marginBottom: '1.75rem' }}>
                Klik tombol di bawah untuk menghubungi panitia via WhatsApp. Pesan otomatis sudah disiapkan.
              </p>
              <a
                href={festivalInfo.rsvpWhatsapp}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '200px',
                  fontWeight: 700, fontSize: '0.9rem',
                  textDecoration: 'none',
                  background: '#25D366', color: '#fff',
                  boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
                }}
              >
                Hubungi via WhatsApp
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
  const heroRef  = useScrollReveal({ threshold: 0.05 });
  const infoRef  = useScrollReveal();

  return (
    <FestivalLayout>

      {/* ── HERO ── */}
      <section style={{
        padding: '8rem 1.5rem 5rem',
        textAlign: 'center',
        background: 'var(--color-fest-bg)',
        borderBottom: '1px solid var(--color-fest-border)',
      }}>
        <div ref={heroRef} className="reveal" style={{ maxWidth: 600, margin: '0 auto' }}>
          <FestEyebrow color="var(--color-fest-teal)">Zona Pengunjung</FestEyebrow>
          <h1 style={{
            fontWeight: 900,
            fontSize: 'clamp(2.4rem, 7vw, 4.5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: 'var(--color-fest-text)',
            marginBottom: '1rem',
          }}>
            Daftar Hadir<br />
            <span style={{ color: 'var(--color-fest-orange)' }}>Festival</span>
          </h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-fest-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Beritahu kami kamu hadir. Gratis, terbuka untuk semua.
          </p>

          {/* Tombol RSVP utama – FR-04 */}
          <button
            onClick={() => setModalOpen(true)}
            style={{
              padding: '0.9rem 2.25rem',
              borderRadius: '200px',
              fontWeight: 800,
              fontSize: '0.95rem',
              border: 'none',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, var(--color-fest-orange), var(--color-fest-yellow))',
              color: '#fff',
              boxShadow: '0 6px 28px rgba(212,98,26,0.35)',
              transition: 'transform 0.2s, opacity 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Daftar Hadir / RSVP Festival
          </button>
        </div>
      </section>

      {/* ── INFO ── */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div
          ref={infoRef}
          className="reveal"
          style={{ maxWidth: 760, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}
        >
          {[
            { title: 'Gratis', desc: 'Tidak ada tiket masuk. Festival terbuka untuk seluruh masyarakat.', color: 'var(--color-fest-orange)' },
            { title: 'Lokasi', desc: 'Lapangan Utama Desa Sejahtera. Parkir tersedia di sekitar balai desa.', color: 'var(--color-fest-teal)' },
            { title: 'Tanggal', desc: '15 – 17 Agustus 2026, mulai pukul 08.00 WIB setiap harinya.', color: 'var(--color-fest-yellow)' },
          ].map(item => (
            <div key={item.title} style={{
              background: '#fff',
              border: '1px solid var(--color-fest-border)',
              borderTop: `4px solid ${item.color}`,
              borderRadius: '1.25rem',
              padding: '1.5rem',
            }}>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: item.color, marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-fest-muted)', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link
            to="/festival/rundown"
            style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-fest-orange)', textDecoration: 'none' }}
          >
            Lihat jadwal acara lengkap →
          </Link>
        </div>
      </section>

      {modalOpen && <RSVPModal onClose={() => setModalOpen(false)} />}
    </FestivalLayout>
  );
}
