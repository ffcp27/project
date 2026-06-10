// ========================
// COMPONENTS.JS — Navbar & Footer
// ========================

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-icon">🐾</div>
    <div class="nav-logo-text">
      <span class="nav-logo-name">Paw Haven</span>
      <span class="nav-logo-sub">Pet Care & Shop</span>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Beranda</a></li>
    <li><a href="shop.html">Produk</a></li>
    <li><a href="layanan.html">Layanan</a></li>
    <li><a href="contact.html" class="nav-cta-btn">Hubungi Kami</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Buka menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" id="mobileClose" aria-label="Tutup">✕</button>
  <a href="index.html">Beranda</a>
  <a href="shop.html">Produk</a>
  <a href="layanan.html">Layanan</a>
  <a href="contact.html">Hubungi Kami</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-brand-logo">
          <div class="footer-brand-icon">🐾</div>
          <span class="footer-brand-name-text">Paw Haven</span>
        </div>
        <p class="footer-brand-desc">
          Teman terpercaya untuk hewan peliharaanmu — dari produk terbaik hingga layanan perawatan penuh kasih sejak 2016.
        </p>
        <div class="footer-socials">
          <div class="social-btn" title="Instagram">IG</div>
          <div class="social-btn" title="TikTok">TT</div>
          <div class="social-btn" title="WhatsApp">WA</div>
          <div class="social-btn" title="Facebook">FB</div>
        </div>
      </div>

      <div>
        <span class="footer-col-title">Navigasi</span>
        <ul class="footer-links">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="shop.html">Produk</a></li>
          <li><a href="layanan.html">Layanan</a></li>
          <li><a href="contact.html">Kontak & Lokasi</a></li>
        </ul>
      </div>

      <div>
        <span class="footer-col-title">Jam Buka</span>
        <ul class="footer-links" style="gap: 0.35rem;">
          <li style="color:rgba(255,255,255,0.4); font-size:0.83rem;">Senin – Jumat</li>
          <li style="color:var(--sage-light); font-size:0.83rem; font-weight:700;">08.00 – 20.00</li>
          <li style="color:rgba(255,255,255,0.4); font-size:0.83rem; margin-top:0.4rem;">Sabtu – Minggu</li>
          <li style="color:var(--sage-light); font-size:0.83rem; font-weight:700;">08.00 – 22.00</li>
          <li style="color:rgba(255,255,255,0.4); font-size:0.83rem; margin-top:0.4rem;">Hari Libur</li>
          <li style="color:var(--sage-light); font-size:0.83rem; font-weight:700;">09.00 – 18.00</li>
        </ul>
      </div>

      <div>
        <span class="footer-col-title">Kontak</span>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📍</span>
          <span class="footer-contact-text">Jl. Pet Lovers No. 15, Permata Balaraja, Kab. Tangerang, Banten 15660</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📞</span>
          <span class="footer-contact-text">+62 812-3456-7890</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">✉️</span>
          <span class="footer-contact-text">halo@pawhaven.id</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2025 Paw Haven. All rights reserved.</span>
      <span>Made with 🐾 & ❤️ for pets everywhere</span>
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
