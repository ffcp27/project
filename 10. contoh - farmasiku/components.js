// ========================
// COMPONENTS.JS
// ========================

const TOP_BAR_HTML = `
<div class="top-bar">
  <div class="top-bar-left">
    <div class="top-bar-item">
      <span class="top-bar-icon">📍</span>
      <span>Jl. Sehat Raya No. 45, Permata Balaraja, Tangerang</span>
    </div>
    <div class="top-bar-item">
      <span class="top-bar-icon">📞</span>
      <strong>+62 811-2345-6789</strong>
    </div>
    <div class="top-bar-item">
      <span class="top-bar-icon">⏰</span>
      <span>Buka Setiap Hari · <strong>07.00 – 22.00</strong></span>
    </div>
  </div>
  <div class="top-bar-badge">✦ 24 Jam via WhatsApp</div>
</div>
`;

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-mark">💊</div>
    <div class="nav-logo-text">
      <span class="nav-logo-name">Farmasi<span>ku</span></span>
      <span class="nav-logo-sub">Apotek Terpercaya</span>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Beranda</a></li>
    <li><a href="produk.html">Produk</a></li>
    <li><a href="layanan.html">Layanan</a></li>
    <li><a href="konsultasi.html">Konsultasi</a></li>
  </ul>
  <div class="nav-actions">
    <button class="nav-search-btn" title="Cari obat">🔍</button>
    <a href="konsultasi.html" class="nav-konsultasi-btn">💬 Konsultasi Gratis</a>
  </div>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" id="mobileClose">✕</button>
  <a href="index.html">Beranda</a>
  <a href="produk.html">Produk</a>
  <a href="layanan.html">Layanan</a>
  <a href="konsultasi.html">Konsultasi</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-logo-mark">💊</div>
        <span class="footer-brand-name">Farmasi<span>ku</span></span>
        <span class="footer-brand-sub">Apotek Terpercaya · Balaraja</span>
        <p class="footer-desc">
          Melayani kebutuhan kesehatan keluarga Anda dengan produk berkualitas, apoteker berpengalaman, dan layanan konsultasi yang terjangkau sejak 2010.
        </p>
        <div class="footer-izin">
          <span class="izin-tag">SIPA Terdaftar</span>
          <span class="izin-tag">Kemenkes RI</span>
          <span class="izin-tag">BPOM Approved</span>
        </div>
        <div class="footer-socials">
          <div class="f-soc" title="Instagram">IG</div>
          <div class="f-soc" title="WhatsApp">WA</div>
          <div class="f-soc" title="Facebook">FB</div>
          <div class="f-soc" title="TikTok">TT</div>
        </div>
      </div>

      <div>
        <span class="f-col-title">Navigasi</span>
        <ul class="f-links">
          <li><a href="index.html">🏠 Beranda</a></li>
          <li><a href="produk.html">💊 Produk & Obat</a></li>
          <li><a href="layanan.html">🏥 Layanan Kami</a></li>
          <li><a href="konsultasi.html">💬 Konsultasi Apoteker</a></li>
        </ul>
      </div>

      <div>
        <span class="f-col-title">Jam Buka</span>
        <ul class="f-links" style="gap:0.38rem;">
          <li style="color:rgba(255,255,255,0.3);font-size:0.83rem;font-weight:300;">Senin – Jumat</li>
          <li style="color:var(--teal-light);font-size:0.83rem;font-weight:600;">07.00 – 22.00 WIB</li>
          <li style="color:rgba(255,255,255,0.3);font-size:0.83rem;margin-top:0.4rem;font-weight:300;">Sabtu – Minggu</li>
          <li style="color:var(--teal-light);font-size:0.83rem;font-weight:600;">08.00 – 21.00 WIB</li>
          <li style="color:rgba(255,255,255,0.3);font-size:0.83rem;margin-top:0.4rem;font-weight:300;">WhatsApp Darurat</li>
          <li style="color:var(--green-light);font-size:0.83rem;font-weight:600;">24 Jam</li>
        </ul>
      </div>

      <div>
        <span class="f-col-title">Kontak</span>
        <div class="f-contact-item">
          <span class="f-c-icon">📍</span>
          <span class="f-c-text">Jl. Sehat Raya No. 45, Permata Balaraja, Kab. Tangerang, Banten 15660</span>
        </div>
        <div class="f-contact-item">
          <span class="f-c-icon">📞</span>
          <span class="f-c-text">+62 811-2345-6789</span>
        </div>
        <div class="f-contact-item">
          <span class="f-c-icon">✉️</span>
          <span class="f-c-text">halo@farmasiku.id</span>
        </div>
        <div class="f-contact-item">
          <span class="f-c-icon">💬</span>
          <span class="f-c-text">WA: +62 811-2345-6789 (24 jam)</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2025 Farmasiku Apotek. Hak Cipta Dilindungi. | No. SIA: SIPA-2345/KEMENKES/2010</span>
      <span>Dibuat dengan ❤️ untuk kesehatan keluarga Indonesia</span>
    </div>
  </div>
</footer>

<div class="toast" id="toast"></div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const topEl  = document.getElementById('topbar-placeholder');
  const navEl  = document.getElementById('nav-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if (topEl)  topEl.outerHTML  = TOP_BAR_HTML;
  if (navEl)  navEl.outerHTML  = NAV_HTML;
  if (footEl) footEl.outerHTML = FOOTER_HTML;
});
