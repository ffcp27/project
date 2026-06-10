// ========================
// COMPONENTS.JS
// ========================

const TOP_BAR_HTML = `
<div class="top-bar">
  <div class="top-bar-items">
    <div class="top-bar-item">
      <span>📍</span>
      <span>Jl. Bersih Raya No. 12, Permata Balaraja, Tangerang</span>
    </div>
    <div class="top-bar-item">
      <span>📞</span>
      <strong>+62 812-3456-7890</strong>
    </div>
    <div class="top-bar-item">
      <span>⏰</span>
      <span>Buka setiap hari · <strong>07.00 – 21.00</strong></span>
    </div>
  </div>
  <div class="top-bar-badge">
    <span class="tb-dot"></span>
    Antar-Jemput Aktif
  </div>
</div>
`;

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-mark">🫧</div>
    <div>
      <span class="nav-logo-name">Bersih<span>Studio</span></span>
      <span class="nav-logo-sub">Premium Laundry</span>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Beranda</a></li>
    <li><a href="layanan.html">Layanan</a></li>
    <li><a href="harga.html">Harga</a></li>
    <li><a href="kontak.html">Kontak & Order</a></li>
  </ul>
  <div class="nav-actions">
    <a href="https://wa.me/6281234567890" target="_blank" class="nav-whatsapp">💬 WhatsApp</a>
    <a href="kontak.html" class="nav-order-btn">🧺 Order Sekarang</a>
  </div>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" id="mobileClose">✕</button>
  <a href="index.html">Beranda</a>
  <a href="layanan.html">Layanan</a>
  <a href="harga.html">Harga</a>
  <a href="kontak.html">Order</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-logo-wrap">
          <div class="footer-logo-mark">🫧</div>
          <div>
            <span class="footer-brand-name">Bersih<span>Studio</span></span>
          </div>
        </div>
        <span class="footer-brand-sub">Premium Laundry · Balaraja</span>
        <p class="footer-about">
          Laundry modern dengan teknologi terbaik, bahan ramah lingkungan, dan layanan antar-jemput untuk kenyamananmu.
        </p>
        <div class="footer-izin">
          <span class="f-izin">SIUP Terdaftar</span>
          <span class="f-izin">Eco-Friendly</span>
          <span class="f-izin">Asuransi Pakaian</span>
        </div>
        <div class="footer-socials">
          <div class="f-soc">IG</div>
          <div class="f-soc">TT</div>
          <div class="f-soc">WA</div>
          <div class="f-soc">FB</div>
        </div>
      </div>
      <div>
        <span class="f-col-title">Navigasi</span>
        <ul class="f-links">
          <li><a href="index.html">🏠 Beranda</a></li>
          <li><a href="layanan.html">🧺 Layanan</a></li>
          <li><a href="harga.html">💰 Daftar Harga</a></li>
          <li><a href="kontak.html">📞 Kontak & Order</a></li>
        </ul>
      </div>
      <div>
        <span class="f-col-title">Jam Operasional</span>
        <ul class="f-links" style="gap:0.38rem;">
          <li style="color:rgba(255,255,255,0.3);font-size:0.83rem;font-weight:300;">Senin – Sabtu</li>
          <li style="color:var(--blue-light);font-size:0.83rem;font-weight:600;">07.00 – 21.00 WIB</li>
          <li style="color:rgba(255,255,255,0.3);font-size:0.83rem;margin-top:0.4rem;font-weight:300;">Minggu</li>
          <li style="color:var(--blue-light);font-size:0.83rem;font-weight:600;">08.00 – 18.00 WIB</li>
          <li style="color:rgba(255,255,255,0.25);font-size:0.77rem;margin-top:0.7rem;font-weight:300;font-style:italic;">* Antar-jemput sesuai area</li>
        </ul>
      </div>
      <div>
        <span class="f-col-title">Kontak</span>
        <div class="f-ci"><span class="f-ci-icon">📍</span><span class="f-ci-text">Jl. Bersih Raya No. 12, Permata Balaraja, Kab. Tangerang, Banten 15660</span></div>
        <div class="f-ci"><span class="f-ci-icon">📞</span><span class="f-ci-text">+62 812-3456-7890</span></div>
        <div class="f-ci"><span class="f-ci-icon">✉️</span><span class="f-ci-text">halo@bersihstudio.id</span></div>
        <div class="f-ci"><span class="f-ci-icon">💬</span><span class="f-ci-text">WA: +62 812-3456-7890 (aktif 07–21)</span></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Bersih Studio Laundry. Hak Cipta Dilindungi.</span>
      <span>Dibuat dengan 🫧 untuk pakaian yang bersih sempurna</span>
    </div>
  </div>
</footer>
<div class="toast" id="toast"></div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const tbEl   = document.getElementById('topbar-placeholder');
  const navEl  = document.getElementById('nav-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if (tbEl)   tbEl.outerHTML   = TOP_BAR_HTML;
  if (navEl)  navEl.outerHTML  = NAV_HTML;
  if (footEl) footEl.outerHTML = FOOTER_HTML;
});
