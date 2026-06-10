// ========================
// COMPONENTS.JS — Navbar & Footer
// ========================

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-icon">☪</div>
    <div class="nav-logo-text">
      <span class="nav-logo-name">Baitullah Travel</span>
      <span class="nav-logo-sub">Haji & Umroh · Terpercaya</span>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Beranda</a></li>
    <li><a href="paket.html">Paket</a></li>
    <li><a href="tentang.html">Tentang Kami</a></li>
    <li><a href="daftar.html" class="nav-daftar-btn">Daftar Sekarang</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Buka menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" id="mobileClose" aria-label="Tutup">✕</button>
  <div class="mobile-menu-bismillah">Bismillahirrahmanirrahim</div>
  <a href="index.html">Beranda</a>
  <a href="paket.html">Paket</a>
  <a href="tentang.html">Tentang Kami</a>
  <a href="daftar.html">Daftar Sekarang</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <span class="footer-brand-name">Baitullah Travel</span>
        <span class="footer-brand-sub">Penyelenggara Haji & Umroh Resmi</span>
        <p class="footer-brand-desc">
          Melayani dengan sepenuh hati sejak 2009. Terdaftar resmi di Kementerian Agama RI — karena perjalanan menuju Baitullah layak dipercayakan pada yang terbaik.
        </p>
        <div class="footer-izin">
          <span class="fizin">Izin Kemenag RI</span>
          <span class="fizin">PPIU Terdaftar</span>
          <span class="fizin">IATA Member</span>
        </div>
        <div class="footer-socials">
          <div class="social-btn" title="Instagram">IG</div>
          <div class="social-btn" title="WhatsApp">WA</div>
          <div class="social-btn" title="YouTube">YT</div>
          <div class="social-btn" title="Facebook">FB</div>
        </div>
      </div>

      <div>
        <span class="footer-col-title">Navigasi</span>
        <ul class="footer-links">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="paket.html">Paket Haji & Umroh</a></li>
          <li><a href="tentang.html">Tentang Kami</a></li>
          <li><a href="daftar.html">Daftar / Konsultasi</a></li>
        </ul>
      </div>

      <div>
        <span class="footer-col-title">Jam Layanan</span>
        <ul class="footer-links" style="gap:0.38rem;">
          <li style="color:rgba(253,250,244,0.3);font-size:0.83rem;font-weight:300;">Senin – Jumat</li>
          <li style="color:var(--gold);font-size:0.83rem;font-weight:500;">08.00 – 17.00 WIB</li>
          <li style="color:rgba(253,250,244,0.3);font-size:0.83rem;margin-top:0.4rem;font-weight:300;">Sabtu</li>
          <li style="color:var(--gold);font-size:0.83rem;font-weight:500;">08.00 – 14.00 WIB</li>
          <li style="color:rgba(253,250,244,0.3);font-size:0.83rem;margin-top:0.4rem;font-weight:300;">Minggu & Libur</li>
          <li style="color:var(--gold);font-size:0.83rem;font-weight:500;">Tutup</li>
          <li style="color:rgba(253,250,244,0.25);font-size:0.77rem;margin-top:0.7rem;font-weight:300;font-style:italic;">* WA darurat aktif 24 jam</li>
        </ul>
      </div>

      <div>
        <span class="footer-col-title">Kontak</span>
        <div class="footer-contact-item">
          <span class="fc-icon">◆</span>
          <span class="fc-text">Jl. Baitullah Raya No. 88, Permata Balaraja, Kab. Tangerang, Banten 15660</span>
        </div>
        <div class="footer-contact-item">
          <span class="fc-icon">◆</span>
          <span class="fc-text">+62 811-2244-6688</span>
        </div>
        <div class="footer-contact-item">
          <span class="fc-icon">◆</span>
          <span class="fc-text">info@baitullahtravel.id</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2025 Baitullah Travel. Hak Cipta Dilindungi. | No. Izin: PPIU-12345/KEMENAG/2009</span>
      <span style="color:var(--gold);opacity:0.4;font-family:'Cinzel',serif;letter-spacing:0.1em;">Bismillah ◆ Alhamdulillah</span>
    </div>
  </div>
</footer>

<div class="toast" id="toast"></div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl  = document.getElementById('nav-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if (navEl)  navEl.outerHTML  = NAV_HTML;
  if (footEl) footEl.outerHTML = FOOTER_HTML;
});
