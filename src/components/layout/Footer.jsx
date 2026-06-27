/**
 * components/layout/Footer.jsx – tanpa emoji.
 */
import { Link } from 'react-router-dom';
import { villageProfile } from '../../data/village';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-desa-text)', color: 'rgba(255,255,255,0.6)', padding: '4rem 1.5rem 2.5rem', marginTop: '5rem' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>

        {/* Kolom 1 */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{
              width: 28, height: 28, borderRadius: '50%',
              background: 'var(--color-desa-green-mid)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="white" strokeWidth="1.5"/>
              </svg>
            </span>
            <span style={{ fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', fontSize: '0.95rem' }}>
              Desa Sejahtera
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.75 }}>
            {villageProfile.kecamatan}, {villageProfile.kabupaten},<br />
            {villageProfile.provinsi} {villageProfile.kodePos}
          </p>
        </div>

        {/* Kolom 2 */}
        <div>
          <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Halaman
          </h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
            {[['/', 'Beranda'], ['/tentang', 'Tentang Desa'], ['/program', 'Program Desa'], ['/artikel', 'Artikel'], ['/kontak', 'Kontak'], ['/festival', 'Festival Desa']].map(([to, label]) => (
              <Link key={to} to={to} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Kolom 3 */}
        <div>
          <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Hubungi Kami
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
              style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
            >
              WhatsApp Desa
            </a>
            <span>desasejahtera@gmail.com</span>
            <span>Jl. Raya Sejahtera No. 1</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: '3rem auto 0', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.75rem', textAlign: 'center' }}>
        &copy; {new Date().getFullYear()} Desa Sejahtera. Portal Resmi Pemerintah Desa.
      </div>
    </footer>
  );
}
