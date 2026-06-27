/**
 * pages/Tentang.jsx
 * Halaman Tentang Desa: Visi Misi, Struktur Organisasi, Sejarah.
 * Data: village.js
 */
import PageWrapper from '../components/layout/PageWrapper';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { villageProfile, villageVision, villageHistory, villageStructure } from '../data/village';

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

export default function Tentang() {
  const heroRef = useScrollReveal({ threshold: 0.05 });
  const visiRef = useScrollReveal();
  const historyRef = useScrollReveal();
  const strukturRef = useScrollReveal();

  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <section className="py-32 px-6 text-center" style={{ background: 'linear-gradient(160deg, #e8f5ef 0%, var(--color-desa-bg) 60%)' }}>
        <div ref={heroRef} className="reveal max-w-2xl mx-auto">
          <Eyebrow>Profil Desa</Eyebrow>
          <h1
            className="font-black mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', letterSpacing: '-0.03em', color: 'var(--color-desa-text)' }}
          >
            Tentang <span style={{ color: 'var(--color-desa-green)' }}>Desa Sejahtera</span>
          </h1>
          <p style={{ color: 'var(--color-desa-muted)' }} className="text-lg leading-relaxed">
            {villageProfile.kecamatan} · {villageProfile.kabupaten} · {villageProfile.provinsi}
          </p>

          {/* Statistik singkat */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: 'Luas Wilayah', value: villageProfile.luasWilayah },
              { label: 'Penduduk', value: villageProfile.jumlahPenduduk },
              { label: 'Kepala Keluarga', value: villageProfile.jumlahKK },
              { label: 'Berdiri', value: '1921' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-4 text-center"
                style={{ background: '#fff', border: '1px solid var(--color-desa-border)' }}
              >
                <p className="font-black text-2xl" style={{ color: 'var(--color-desa-green)', letterSpacing: '-0.02em' }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--color-desa-muted)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visi & Misi ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={visiRef} className="reveal">
            <Eyebrow>Visi</Eyebrow>
            <p
              className="font-bold text-xl leading-relaxed"
              style={{ color: 'var(--color-desa-text)', letterSpacing: '-0.01em' }}
            >
              "{villageVision.visi}"
            </p>
          </div>
          <div>
            <Eyebrow>Misi</Eyebrow>
            <ol className="flex flex-col gap-4">
              {villageVision.misi.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                    style={{ background: 'var(--color-desa-green)' }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-desa-muted)' }}>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Sejarah ── */}
      <section className="py-24 px-6" style={{ background: 'var(--color-desa-surface)' }}>
        <div className="max-w-3xl mx-auto" ref={historyRef}>
          <div className="reveal text-center mb-12">
            <Eyebrow>Sejarah</Eyebrow>
            <h2 className="font-bold" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'var(--color-desa-text)' }}>
              Lebih dari Satu Abad
            </h2>
          </div>
          <p className="reveal text-base leading-[2] whitespace-pre-line" style={{ color: 'var(--color-desa-muted)' }}>
            {villageHistory}
          </p>
        </div>
      </section>

      {/* ── Struktur Organisasi ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={strukturRef} className="reveal text-center mb-14">
            <Eyebrow>Organisasi</Eyebrow>
            <h2 className="font-bold" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'var(--color-desa-text)' }}>
              Struktur Pemerintahan Desa
            </h2>
          </div>

          {/* Kepala Desa di tengah */}
          <div className="flex justify-center mb-8">
            <div
              className="rounded-2xl px-8 py-5 text-center"
              style={{ background: 'var(--color-desa-green)', color: '#fff', minWidth: '200px' }}
            >
              <span className="text-3xl block mb-2">👨‍💼</span>
              <p className="font-bold text-sm">{villageStructure[0].jabatan}</p>
              <p className="text-xs mt-1 opacity-80">{villageStructure[0].nama}</p>
            </div>
          </div>

          {/* Staf */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {villageStructure.slice(1).map((staf) => (
              <div
                key={staf.jabatan}
                className="rounded-2xl p-5 text-center"
                style={{ background: '#fff', border: '1px solid var(--color-desa-border)' }}
              >
                <span className="text-2xl block mb-2">👤</span>
                <p className="font-semibold text-sm" style={{ color: 'var(--color-desa-text)' }}>{staf.jabatan}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--color-desa-muted)' }}>{staf.nama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
