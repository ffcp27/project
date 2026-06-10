// ========================
// COMPONENTS.JS — Navbar & Footer
// ========================

const NAV_HTML = `
<div class="cursor-dot" id="cursorDot"></div>
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    FORMA
    <span class="nav-logo-sub">Pilates Studio · Balaraja</span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="kelas.html">Kelas</a></li>
    <li><a href="tentang.html">Studio</a></li>
    <li><a href="booking.html" class="nav-book">Book a Class</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" id="mobileClose" aria-label="Tutup">✕</button>
  <a href="index.html">Home</a>
  <a href="kelas.html">Kelas</a>
  <a href="tentang.html">Studio</a>
  <a href="booking.html">Book a Class</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <span class="footer-brand">FORMA</span>
        <span class="footer-brand-sub">Pilates Studio</span>
        <p class="footer-about">
          Tempat di mana tubuh menemukan kekuatannya, pikiran menemukan ketenangannya, dan gerakan menemukan maknanya.
        </p>
        <div class="footer-socials">
          <div class="f-social" title="Instagram">IG</div>
          <div class="f-social" title="TikTok">TT</div>
          <div class="f-social" title="WhatsApp">WA</div>
        </div>
      </div>

      <div>
        <span class="f-col-title">Navigasi</span>
        <ul class="f-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="kelas.html">Kelas Pilates</a></li>
          <li><a href="tentang.html">Tentang Studio</a></li>
          <li><a href="booking.html">Booking & Kontak</a></li>
        </ul>
      </div>

      <div>
        <span class="f-col-title">Jam Buka</span>
        <ul class="f-links" style="gap:0.38rem;">
          <li style="color:rgba(250,247,242,0.25);font-size:0.83rem;font-weight:300;">Senin – Jumat</li>
          <li style="color:var(--terra);font-size:0.83rem;font-weight:500;">06.00 – 21.00</li>
          <li style="color:rgba(250,247,242,0.25);font-size:0.83rem;margin-top:0.4rem;font-weight:300;">Sabtu</li>
          <li style="color:var(--terra);font-size:0.83rem;font-weight:500;">07.00 – 19.00</li>
          <li style="color:rgba(250,247,242,0.25);font-size:0.83rem;margin-top:0.4rem;font-weight:300;">Minggu</li>
          <li style="color:var(--terra);font-size:0.83rem;font-weight:500;">08.00 – 16.00</li>
        </ul>
      </div>

      <div>
        <span class="f-col-title">Kontak</span>
        <div class="f-contact-item">
          <span class="f-c-icon">◇</span>
          <span class="f-c-text">Jl. Forma Raya No. 14, Permata Balaraja, Kab. Tangerang, Banten 15660</span>
        </div>
        <div class="f-contact-item">
          <span class="f-c-icon">◇</span>
          <span class="f-c-text">+62 812-9988-7766</span>
        </div>
        <div class="f-contact-item">
          <span class="f-c-icon">◇</span>
          <span class="f-c-text">hello@formastudio.id</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2025 Forma Pilates Studio. All rights reserved.</span>
      <span style="font-family:'Bodoni Moda',serif;font-style:italic;color:rgba(250,247,242,0.12);letter-spacing:0.05em;">Move with intention.</span>
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
