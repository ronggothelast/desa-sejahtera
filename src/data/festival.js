/**
 * data/festival.js
 * Konten sub-halaman Festival Desa.
 * CMS-ready: ganti dengan API call ke CMS tanpa menyentuh komponen festival.
 */

export const festivalInfo = {
  name: 'Festival Desa Sejahtera 2026',
  tagline: 'Merayakan Bumi, Merawat Budaya',
  dates: '15 – 17 Agustus 2026',
  location: 'Lapangan Utama Desa Sejahtera',
  description: `Festival Desa Sejahtera lahir dari tradisi syukuran panen yang sudah berlangsung lebih dari 60 tahun. 
Yang dulu berupa kenduri sederhana di halaman balai desa, kini berkembang jadi perayaan tiga hari yang mempertemukan 
warga, seniman lokal, dan pengunjung dari berbagai kota. Filosofinya tetap sama: tanah yang dirawat dengan baik akan 
memberi kehidupan yang baik.`,
  rsvpWhatsapp: 'https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20RSVP%20Festival%20Desa%20Sejahtera%202026.',
  // Ganti dengan embed URL Google Forms jika tersedia
  rsvpFormUrl: null,
};

export const festivalSchedule = [
  {
    day: 1,
    date: '15 Agustus 2026',
    label: 'Hari Pertama',
    theme: 'Bumi & Panen',
    events: [
      { time: '08.00', title: 'Pembukaan & Kirab Budaya', description: 'Arak-arakan hasil bumi keliling desa sepanjang 2 km.' },
      { time: '10.00', title: 'Pameran UMKM Desa', description: '40+ stand produk lokal: kerajinan bambu, batik tulis, kuliner tradisional.' },
      { time: '14.00', title: 'Lomba Tradisional', description: 'Tarik tambang, balap karung, dan gobak sodor untuk semua umur.' },
      { time: '19.00', title: 'Pentas Wayang Kulit', description: 'Dalang Ki Slamet Raharjo membawakan lakon Bima Suci.' },
    ],
  },
  {
    day: 2,
    date: '16 Agustus 2026',
    label: 'Hari Kedua',
    theme: 'Seni & Kreasi',
    events: [
      { time: '09.00', title: 'Workshop Batik Tulis', description: 'Belajar membatik langsung bersama pengrajin desa. Terbatas 30 peserta.' },
      { time: '13.00', title: 'Pertunjukan Reog', description: 'Penampilan Grup Reog Ponorogo Tunas Muda dari Desa Sejahtera.' },
      { time: '16.00', title: 'Pentas Anak & Remaja', description: 'Tari tradisional dan paduan suara dari pelajar SD dan SMP desa.' },
      { time: '20.00', title: 'Konser Musik Rakyat', description: 'Campursari dan dangdut koplo bersama grup musik lokal.' },
    ],
  },
  {
    day: 3,
    date: '17 Agustus 2026',
    label: 'Hari Ketiga',
    theme: 'Kemerdekaan & Doa',
    events: [
      { time: '07.00', title: 'Upacara Kemerdekaan', description: 'Upacara bendera resmi di lapangan desa bersama seluruh warga.' },
      { time: '10.00', title: 'Lomba HUT RI', description: 'Perlombaan kemerdekaan: makan kerupuk, panjat pinang, kelereng.' },
      { time: '15.00', title: 'Bazar Kuliner Penutup', description: 'Pesta kuliner khas desa: soto, pecel, jajanan pasar, es dawet.' },
      { time: '19.30', title: 'Doa Bersama & Penutupan', description: 'Syukuran dan doa bersama seluruh warga, diakhiri kembang api.' },
    ],
  },
];
