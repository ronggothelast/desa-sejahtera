/**
 * components/layout/PageWrapper.jsx
 * Wrapper untuk halaman Web Desa: Navbar + konten + Footer.
 * Props:
 *   children: React.ReactNode
 */
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageWrapper({ children }) {
  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '5rem' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
