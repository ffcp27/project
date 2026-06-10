// ========================
// COMPONENTS.JS — Navbar & Footer
// ========================

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    <span class="nav-logo-main">Dapur Rempah</span>
    <span class="nav-logo-sub">Homemade Bakery · Balaraja</span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Beranda</a></li>
    <li><a href="menu.html">Menu</a></li>
    <li><a href="custom.html">Pesan Custom</a></li>
    <li><a href="contact.html" class="nav-order-btn">Pesan Sekarang</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Buka menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" id="mobileClose" aria-label="Tutup">✕</button>
  <a href="index.html">Beranda</a>
  <a href="menu.html">Menu</a>
  <a href="custom.html">Pesan Custom</a>
  <a href="contact.html">Pesan Sekarang</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <span class="footer-brand-name">Dapur Rempah</span>
        <span class="footer-brand-tagline">Homemade Bakery · Est. 2017</span>
        <p class="footer-brand-desc">
          Dibuat dengan tangan, dipanggang dengan hati. Setiap gigitan membawa kehangatan dapur rumahan yang sesungguhnya.
        </p>
        <div class="footer-socials">
          <div class="social-btn" title="Instagram">IG</div>
          <div class="social-btn" title="TikTok">TT</div>
          <div class="social-btn" title="WhatsApp">WA</div>
          <div class="social-btn" title="Shopee">SP</div>
        </div>
      </div>

      <div>
        <span class="footer-col-title">Navigasi</span>
        <ul class="footer-links">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="menu.html">Menu Lengkap</a></li>
          <li><a href="custom.html">Pesan Custom / Hampers</a></li>
          <li><a href="contact.html">Kontak & Pemesanan</a></li>
        </ul>
      </div>

      <div>
        <span class="footer-col-title">Jam Operasional</span>
        <ul class="footer-links" style="gap:0.38rem;">
          <li style="color:rgba(253,248,242,0.35);font-size:0.83rem;font-weight:300;">Senin – Sabtu</li>
          <li style="color:var(--amber);font-size:0.83rem;font-weight:600;">07.00 – 20.00</li>
          <li style="color:rgba(253,248,242,0.35);font-size:0.83rem;margin-top:0.4rem;font-weight:300;">Minggu</li>
          <li style="color:var(--amber);font-size:0.83rem;font-weight:600;">08.00 – 17.00</li>
          <li style="color:rgba(253,248,242,0.25);font-size:0.78rem;margin-top:0.7rem;font-weight:300;font-style:italic;">* Custom order H-2 pemesanan</li>
        </ul>
      </div>

      <div>
        <span class="footer-col-title">Kontak</span>
        <div class="footer-contact-item">
          <span class="fc-icon">◆</span>
          <span class="fc-text">Jl. Rempah Manis No. 12, Permata Balaraja, Kab. Tangerang, Banten 15660</span>
        </div>
        <div class="footer-contact-item">
          <span class="fc-icon">◆</span>
          <span class="fc-text">+62 813-5678-9012</span>
        </div>
        <div class="footer-contact-item">
          <span class="fc-icon">◆</span>
          <span class="fc-text">order@dapurrempah.id</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2025 Dapur Rempah. All rights reserved.</span>
      <span>Made with 🍫 & ❤️ di Balaraja, Tangerang</span>
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
