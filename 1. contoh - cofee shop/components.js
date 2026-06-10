// ========================
// COMPONENTS.JS — Navbar & Footer
// ========================

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    <span class="nav-logo-name">Kopi Senandung</span>
    <span class="nav-logo-sub">Est. 2017 · Artisan Coffee</span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Beranda</a></li>
    <li><a href="menu.html">Menu</a></li>
    <li><a href="about.html">Tentang Kami</a></li>
    <li><a href="contact.html" class="nav-cta">Kunjungi Kami</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Buka menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" id="mobileClose" aria-label="Tutup menu">✕</button>
  <a href="index.html">Beranda</a>
  <a href="menu.html">Menu</a>
  <a href="about.html">Tentang Kami</a>
  <a href="contact.html">Kunjungi Kami</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <span class="footer-brand-name">Kopi Senandung</span>
        <p class="footer-brand-desc">
          Kami menyeduh lebih dari sekadar kopi — kami merangkai momen, kehangatan, dan rasa yang mengendap lama di ingatan.
        </p>
        <div class="footer-socials">
          <div class="social-btn" title="Instagram">IG</div>
          <div class="social-btn" title="TikTok">TT</div>
          <div class="social-btn" title="WhatsApp">WA</div>
          <div class="social-btn" title="Google Maps">📍</div>
        </div>
      </div>

      <div>
        <span class="footer-col-title">Navigasi</span>
        <ul class="footer-links">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="menu.html">Menu Kami</a></li>
          <li><a href="about.html">Tentang Kami</a></li>
          <li><a href="contact.html">Kontak & Lokasi</a></li>
        </ul>
      </div>

      <div>
        <span class="footer-col-title">Jam Buka</span>
        <ul class="footer-links" style="gap: 0.4rem;">
          <li style="color: var(--muted); font-size: 0.83rem; font-weight:300;">Senin – Jumat</li>
          <li style="color: var(--brass-light); font-size: 0.83rem; font-weight:500;">07.00 – 22.00</li>
          <li style="color: var(--muted); font-size: 0.83rem; margin-top:0.4rem; font-weight:300;">Sabtu – Minggu</li>
          <li style="color: var(--brass-light); font-size: 0.83rem; font-weight:500;">08.00 – 23.00</li>
          <li style="color: var(--muted); font-size: 0.83rem; margin-top:0.4rem; font-weight:300;">Hari Libur</li>
          <li style="color: var(--brass-light); font-size: 0.83rem; font-weight:500;">09.00 – 21.00</li>
        </ul>
      </div>

      <div>
        <span class="footer-col-title">Kontak</span>
        <div class="footer-contact-item">
          <span class="contact-icon">📍</span>
          <span class="contact-text">Jl. Senandung Kopi No. 8, Permata Balaraja, Kab. Tangerang, Banten 15660</span>
        </div>
        <div class="footer-contact-item">
          <span class="contact-icon">📞</span>
          <span class="contact-text">+62 856-9876-5432</span>
        </div>
        <div class="footer-contact-item">
          <span class="contact-icon">✉️</span>
          <span class="contact-text">halo@kopisenandung.id</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2025 Kopi Senandung. Semua hak dilindungi.</span>
      <span>Diseduh dengan ☕ & ❤️ di Balaraja</span>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl  = document.getElementById('nav-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if (navEl)  navEl.outerHTML  = NAV_HTML;
  if (footEl) footEl.outerHTML = FOOTER_HTML;
});
