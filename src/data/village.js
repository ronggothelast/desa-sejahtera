/**
 * data/village.js
 * Konten informasi umum desa: profil, visi misi, struktur organisasi, sejarah.
 * CMS-ready: ganti dengan API call ke CMS tanpa menyentuh komponen halaman Tentang.
 */

export const villageProfile = {
  name: 'Desa Sejahtera',
  kecamatan: 'Kecamatan Makmur',
  kabupaten: 'Kabupaten Harapan',
  provinsi: 'Jawa Tengah',
  kodePos: '12345',
  luasWilayah: '8,4 km²',
  jumlahPenduduk: '4.280 jiwa',
  jumlahKK: '1.124 KK',
  kepalaDesaName: 'Bapak Sutrisno Wibowo, S.E.',
  greeting: `Assalamu'alaikum Wr. Wb. Salam sejahtera bagi kita semua.

Dengan penuh rasa syukur, kami menghadirkan portal resmi Desa Sejahtera sebagai ruang informasi 
dan komunikasi antara pemerintah desa dan seluruh warga. Semoga portal ini menjadi jembatan 
yang mempererat tali silaturahmi dan mempercepat pembangunan desa kita bersama.`,
};

export const villageVision = {
  visi: 'Terwujudnya Desa Sejahtera yang mandiri, berbudaya, dan berdaya saing menuju masyarakat yang makmur dan berkeadilan.',
  misi: [
    'Meningkatkan kualitas pelayanan publik yang transparan dan akuntabel.',
    'Mengembangkan potensi ekonomi lokal berbasis pertanian dan UMKM.',
    'Membangun infrastruktur desa yang merata dan berkelanjutan.',
    'Melestarikan nilai budaya dan kearifan lokal Desa Sejahtera.',
    'Meningkatkan kualitas SDM melalui pendidikan dan pelatihan.',
  ],
};

export const villageHistory = `Desa Sejahtera berdiri secara resmi pada tahun 1921, meskipun pemukiman di wilayah ini 
sudah ada sejak awal abad ke-19. Nama "Sejahtera" diberikan oleh pendiri desa, Mbah Karto Sentono, 
sebagai doa dan harapan agar seluruh warga hidup dalam kesejahteraan lahir dan batin.

Selama lebih dari satu abad, desa ini melewati berbagai era: masa penjajahan, kemerdekaan, 
hingga era reformasi. Tiap masa meninggalkan jejaknya. Balai desa yang berdiri sejak 1953 
masih kokoh hingga hari ini, menjadi saksi bisu rapat-rapat warga dan keputusan-keputusan 
penting yang membentuk wajah desa seperti sekarang.`;

export const villageStructure = [
  { jabatan: 'Kepala Desa', nama: 'Sutrisno Wibowo, S.E.', foto: null },
  { jabatan: 'Sekretaris Desa', nama: 'Dewi Rahayu, A.Md.', foto: null },
  { jabatan: 'Kaur Keuangan', nama: 'Bambang Susilo', foto: null },
  { jabatan: 'Kaur Perencanaan', nama: 'Siti Aminah, S.T.', foto: null },
  { jabatan: 'Kasi Pemerintahan', nama: 'Agus Prasetyo', foto: null },
  { jabatan: 'Kasi Pelayanan', nama: 'Rina Kusumawati', foto: null },
  { jabatan: 'Kasi Kesejahteraan', nama: 'Hendra Gunawan', foto: null },
];
