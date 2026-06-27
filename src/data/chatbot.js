/**
 * data/chatbot.js
 * Decision tree untuk widget chatbot.
 * CMS-ready: bisa diganti dengan fetch ke API endpoint tanpa menyentuh ChatbotWidget.
 *
 * Struktur: setiap node punya id, pesan dari bot, dan array pilihan tombol.
 * Setiap tombol punya label dan nextId (id node berikutnya) atau action (link/whatsapp).
 */

export const chatbotTree = {
  // Node pertama yang selalu muncul saat chatbot dibuka
  start: {
    id: 'start',
    message: 'Halo! Selamat datang di Layanan Mandiri Desa Sejahtera. Ada yang bisa kami bantu?',
    options: [
      { label: 'Jam Operasional Kantor', nextId: 'jam-operasional' },
      { label: 'Jadwal Festival Desa',   nextId: 'jadwal-festival' },
      { label: 'Hubungi Admin (WhatsApp)', action: 'whatsapp' },
    ],
  },

  'jam-operasional': {
    id: 'jam-operasional',
    message: 'Kantor Desa Sejahtera buka Senin – Jumat, pukul 08.00 hingga 15.00 WIB. Sabtu dan Minggu libur.',
    options: [
      { label: 'Kembali ke Menu Utama', nextId: 'start' },
    ],
  },

  'jadwal-festival': {
    id: 'jadwal-festival',
    message: 'Festival Desa Sejahtera 2026 diadakan pada 15 – 17 Agustus 2026. Ada pertunjukan seni, pameran UMKM, dan lomba tradisional!',
    options: [
      { label: 'Lihat Rundown Lengkap', action: 'link-festival' },
      { label: 'Kembali ke Menu Utama', nextId: 'start' },
    ],
  },
};

// Konfigurasi aksi eksternal
export const chatbotActions = {
  // Ganti dengan nomor WhatsApp panitia yang sebenarnya
  whatsapp: 'https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20Desa%20Sejahtera.',
  // Path ke halaman festival (React Router)
  'link-festival': '/festival/rundown',
};
