/**
 * data/articles.js
 * Konten artikel/berita desa.
 * CMS-ready: ganti export ini dengan API call ke endpoint CMS (WordPress REST API,
 * Sanity, dll.) dan komponen ArticleList tidak perlu diubah.
 */

export const articles = [
  {
    id: 1,
    slug: 'program-ketahanan-pangan-2026',
    title: 'Program Ketahanan Pangan Desa Sejahtera Mulai Berjalan',
    excerpt: 'Kelompok tani Desa Sejahtera resmi memulai program penanaman padi organik seluas 12 hektare di lahan kas desa.',
    category: 'Pertanian',
    date: '2026-06-20',
    image: '/desa-sejahtera/images/artikel-pangan.webp',
    author: 'Admin Desa',
  },
  {
    id: 2,
    slug: 'jalan-dusun-timur-selesai-diperbaiki',
    title: 'Jalan Dusun Timur Selesai Diperbaiki, Warga Ucapkan Terima Kasih',
    excerpt: 'Proyek perbaikan jalan sepanjang 800 meter di Dusun Timur rampung lebih cepat dari jadwal berkat gotong royong warga.',
    category: 'Infrastruktur',
    date: '2026-06-15',
    image: '/desa-sejahtera/images/artikel-jalan.webp',
    author: 'Admin Desa',
  },
  {
    id: 3,
    slug: 'posyandu-aktif-kembali',
    title: 'Posyandu Mawar Kembali Aktif, Layani 120 Balita per Bulan',
    excerpt: 'Setelah renovasi gedung Posyandu Mawar, layanan kesehatan ibu dan anak kembali berjalan dengan tenaga kesehatan tambahan.',
    category: 'Kesehatan',
    date: '2026-06-08',
    image: '/desa-sejahtera/images/artikel-posyandu.webp',
    author: 'Admin Desa',
  },
  {
    id: 4,
    slug: 'festival-desa-2026-persiapan',
    title: 'Persiapan Festival Desa 2026 Memasuki Tahap Akhir',
    excerpt: 'Panitia Festival Desa Sejahtera 2026 mengumumkan rangkaian acara lengkap yang akan digelar 15–17 Agustus mendatang.',
    category: 'Festival',
    date: '2026-06-01',
    image: '/desa-sejahtera/images/artikel-festival.webp',
    author: 'Panitia Festival',
  },
];

export const categories = ['Semua', 'Pertanian', 'Infrastruktur', 'Kesehatan', 'Festival'];
