/**
 * data/programs.js
 * Konten program desa.
 * CMS-ready: ganti dengan API call ke CMS tanpa menyentuh komponen ProgramGrid.
 */

export const programs = [
  {
    id: 1,
    category: 'Ekonomi',
    icon: null,
    title: 'BUMDes Sejahtera Mandiri',
    description: 'Unit usaha desa yang mengelola simpan pinjam, kios pertanian, dan wisata edukasi sawah. Omzet 2025 mencapai Rp 340 juta.',
    status: 'Aktif',
    year: 2023,
  },
  {
    id: 2,
    category: 'Ekonomi',
    icon: null,
    title: 'Pelatihan UMKM & Digitalisasi',
    description: 'Program pelatihan bagi 60 pelaku UMKM desa mencakup pembukuan digital, pemasaran online, dan akses permodalan KUR.',
    status: 'Aktif',
    year: 2025,
  },
  {
    id: 3,
    category: 'Infrastruktur',
    icon: null,
    title: 'Pavingisasi Gang & Jalan Dusun',
    description: 'Paving block 12 gang dan 3 ruas jalan dusun sepanjang total 4,2 km. Target selesai akhir 2026.',
    status: 'Berjalan',
    year: 2026,
  },
  {
    id: 4,
    category: 'Infrastruktur',
    icon: null,
    title: 'PAMSIMAS Air Bersih',
    description: 'Jaringan air minum berbasis masyarakat yang kini melayani 380 KK dari sumber mata air Gunung Kidul.',
    status: 'Aktif',
    year: 2022,
  },
  {
    id: 5,
    category: 'Sosial',
    icon: null,
    title: 'Rumah Baca Desa',
    description: 'Perpustakaan komunitas dengan koleksi 1.200 buku, akses internet gratis, dan kelas belajar sore untuk anak SD.',
    status: 'Aktif',
    year: 2024,
  },
  {
    id: 6,
    category: 'Sosial',
    icon: null,
    title: 'Lansia Sejahtera',
    description: 'Program jaminan sosial lansia: bantuan sembako bulanan, pemeriksaan kesehatan gratis, dan pendampingan psikososial.',
    status: 'Aktif',
    year: 2024,
  },
];

export const programCategories = ['Semua', 'Ekonomi', 'Infrastruktur', 'Sosial'];
