/**
 * App.jsx
 * Root routing untuk seluruh aplikasi menggunakan React Router v7.
 * Struktur: Web Desa (Navbar+Footer) vs Festival (layout sendiri).
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home      from './pages/Home';
import Tentang   from './pages/Tentang';
import Program   from './pages/Program';
import Artikel   from './pages/Artikel';
import Kontak    from './pages/Kontak';
import FestivalHome from './pages/festival/FestivalHome';
import Rundown   from './pages/festival/Rundown';
import RSVP      from './pages/festival/RSVP';
import ChatbotWidget from './components/common/ChatbotWidget';

export default function App() {
  return (
    <BrowserRouter basename="/desa-sejahtera">
      <Routes>
        {/* ── Web Desa ─────────────────────────────────────────── */}
        <Route path="/"        element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/program" element={<Program />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/kontak"  element={<Kontak />} />

        {/* ── Festival (layout sendiri) ─────────────────────────── */}
        <Route path="/festival"         element={<FestivalHome />} />
        <Route path="/festival/rundown" element={<Rundown />} />
        <Route path="/festival/rsvp"    element={<RSVP />} />
      </Routes>

      {/* Chatbot ada di semua halaman Web Desa (festival punya sendiri di FestivalLayout) */}
      <Routes>
        <Route path="/"        element={<ChatbotWidget />} />
        <Route path="/tentang" element={<ChatbotWidget />} />
        <Route path="/program" element={<ChatbotWidget />} />
        <Route path="/artikel" element={<ChatbotWidget />} />
        <Route path="/kontak"  element={<ChatbotWidget />} />
      </Routes>
    </BrowserRouter>
  );
}
