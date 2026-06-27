/**
 * components/layout/Footer.jsx
 * Footer 3-kolom untuk halaman Web Desa.
 * Data: dari data/village.js
 */
import { Link } from 'react-router-dom';
import { villageProfile } from '../../data/village';

export default function Footer() {
  return (
    <footer
      className="mt-24 py-16 px-6"
      style={{
        background: 'var(--color-desa-text)',
        color: 'rgba(255,255,255,0.7)',
      }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Kolom 1: Identitas Desa */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🌿</span>
            <span className="text-white font-bold text-lg" style={{ letterSpacing: '-0.02em' }}>
              Desa Sejahtera
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            {villageProfile.kecamatan}, {villageProfile.kabupaten},<br />
            {villageProfile.provinsi} {villageProfile.kodePos}
          </p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
            Halaman
          </h4>
          <nav className="flex flex-col gap-2 text-sm">
            {[
              ['/', 'Beranda'],
              ['/tentang', 'Tentang Desa'],
              ['/program', 'Program Desa'],
              ['/artikel', 'Artikel & Berita'],
              ['/kontak', 'Kontak'],
              ['/festival', 'Festival Desa'],
            ].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
            Hubungi Kami
          </h4>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              📱 WhatsApp Desa
            </a>
            <span>✉️ desasejahtera@gmail.com</span>
            <span>📍 Jl. Raya Sejahtera No. 1</span>
          </div>
        </div>
      </div>

      <div
        className="max-w-5xl mx-auto mt-12 pt-6 text-xs text-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        © {new Date().getFullYear()} Desa Sejahtera. Dibuat dengan ❤️ oleh Tim Developer Desa.
      </div>
    </footer>
  );
}
