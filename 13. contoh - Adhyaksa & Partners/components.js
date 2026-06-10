// ========================
// COMPONENTS.JS
// ========================

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    <span class="nav-logo-name">Adhyaksa &amp; Partners</span>
    <div class="nav-logo-rule"></div>
    <span class="nav-logo-sub">Advocates &amp; Legal Consultants</span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Beranda</a></li>
    <li><a href="praktik.html">Bidang Hukum</a></li>
    <li><a href="tentang.html">Firma Kami</a></li>
    <li><a href="konsultasi.html" class="nav-konsultasi">Konsultasi Gratis</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" id="mobileClose">✕</button>
  <div class="mobile-menu-orn">Adhyaksa &amp; Partners</div>
  <a href="index.html">Beranda</a>
  <a href="praktik.html">Bidang Hukum</a>
  <a href="tentang.html">Firma Kami</a>
  <a href="konsultasi.html">Konsultasi</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top-rule">
      <span class="footer-firm-name">Adhyaksa &amp; Partners</span>
      <div class="footer-top-rule-line"></div>
      <span class="footer-tag">Est. 2008 · Jakarta</span>
    </div>
    <div class="footer-grid">
      <div>
        <p class="footer-about">
          Firma hukum terkemuka dengan spesialisasi di bidang litigasi, hukum korporat, dan hukum ketenagakerjaan. Melayani klien korporat dan individu sejak 2008.
        </p>
        <div class="footer-certs">
          <span class="footer-cert">PERADI</span>
          <span class="footer-cert">HKHPM</span>
          <span class="footer-cert">IBA Member</span>
        </div>
        <div class="footer-socials">
          <div class="f-soc">LI</div>
          <div class="f-soc">IG</div>
          <div class="f-soc">WA</div>
        </div>
      </div>
      <div>
        <span class="f-col-title">Navigasi</span>
        <ul class="f-links">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="praktik.html">Bidang Hukum</a></li>
          <li><a href="tentang.html">Firma Kami</a></li>
          <li><a href="konsultasi.html">Konsultasi Gratis</a></li>
        </ul>
      </div>
      <div>
        <span class="f-col-title">Bidang Praktik</span>
        <ul class="f-links">
          <li><a href="praktik.html">Litigasi & Arbitrase</a></li>
          <li><a href="praktik.html">Hukum Korporat</a></li>
          <li><a href="praktik.html">Ketenagakerjaan</a></li>
          <li><a href="praktik.html">Properti & Pertanahan</a></li>
          <li><a href="praktik.html">Hukum Keluarga</a></li>
          <li><a href="praktik.html">Hukum Pidana</a></li>
        </ul>
      </div>
      <div>
        <span class="f-col-title">Kontak</span>
        <div class="f-ci"><span class="f-ci-icon">◆</span><span class="f-ci-text">Menara Adhyaksa Lt. 12, Jl. Sudirman Kav. 88, Jakarta Selatan 12190</span></div>
        <div class="f-ci"><span class="f-ci-icon">◆</span><span class="f-ci-text">+62 21-555-7788</span></div>
        <div class="f-ci"><span class="f-ci-icon">◆</span><span class="f-ci-text">info@adhyaksalaw.id</span></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Adhyaksa & Partners. All Rights Reserved. | Terdaftar di PERADI No. 12345/ADV/2008</span>
      <span style="font-family:'Cormorant Garamond',serif;font-style:italic;color:rgba(197,162,78,0.2);letter-spacing:0.05em;">Audi alteram partem.</span>
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
