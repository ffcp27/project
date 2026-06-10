// ========================
// COMPONENTS.JS — Navbar & Footer
// ========================

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    <span class="nav-logo-name">Lumière</span>
    <span class="nav-logo-tagline">Beauty Clinic · Est. 2016</span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Beranda</a></li>
    <li><a href="treatments.html">Perawatan</a></li>
    <li><a href="products.html">Produk</a></li>
    <li><a href="contact.html" class="nav-book-btn">Booking</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Buka menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" id="mobileClose" aria-label="Tutup">✕</button>
  <a href="index.html">Beranda</a>
  <a href="treatments.html">Perawatan</a>
  <a href="products.html">Produk</a>
  <a href="contact.html">Booking</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <span class="footer-brand-name">Lumière</span>
        <span class="footer-brand-tagline">Beauty Clinic</span>
        <p class="footer-brand-desc">
          Kecantikan sejati lahir dari perawatan yang tepat, oleh tangan yang terlatih, dengan produk yang terpercaya.
        </p>
        <div class="footer-socials">
          <div class="social-btn" title="Instagram">IG</div>
          <div class="social-btn" title="TikTok">TT</div>
          <div class="social-btn" title="WhatsApp">WA</div>
          <div class="social-btn" title="YouTube">YT</div>
        </div>
      </div>

      <div>
        <span class="footer-col-title">Navigasi</span>
        <ul class="footer-links">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="treatments.html">Perawatan</a></li>
          <li><a href="products.html">Produk</a></li>
          <li><a href="contact.html">Kontak & Booking</a></li>
        </ul>
      </div>

      <div>
        <span class="footer-col-title">Jam Buka</span>
        <ul class="footer-links" style="gap:0.4rem;">
          <li style="color:rgba(250,247,242,0.3);font-size:0.82rem;font-weight:300;">Senin – Jumat</li>
          <li style="color:var(--gold);font-size:0.82rem;font-weight:500;">09.00 – 20.00</li>
          <li style="color:rgba(250,247,242,0.3);font-size:0.82rem;margin-top:0.4rem;font-weight:300;">Sabtu</li>
          <li style="color:var(--gold);font-size:0.82rem;font-weight:500;">09.00 – 21.00</li>
          <li style="color:rgba(250,247,242,0.3);font-size:0.82rem;margin-top:0.4rem;font-weight:300;">Minggu</li>
          <li style="color:var(--gold);font-size:0.82rem;font-weight:500;">10.00 – 18.00</li>
        </ul>
      </div>

      <div>
        <span class="footer-col-title">Kontak</span>
        <div class="footer-contact-item">
          <span class="f-icon">◈</span>
          <span class="f-text">Jl. Kecantikan Balaraja No. 27, Permata Balaraja, Kab. Tangerang, Banten 15660</span>
        </div>
        <div class="footer-contact-item">
          <span class="f-icon">◈</span>
          <span class="f-text">+62 811-2233-4455</span>
        </div>
        <div class="footer-contact-item">
          <span class="f-icon">◈</span>
          <span class="f-text">halo@lumiereclinic.id</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2025 Lumière Beauty Clinic. All rights reserved.</span>
      <span>Crafted with elegance in Balaraja ✦</span>
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
