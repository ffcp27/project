// ========================
// COMPONENTS.JS — Saung Kuring
// ========================

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    <span class="nav-logo-main">Saung Kuring</span>
    <span class="nav-logo-sub">Restoran Sunda · Balaraja</span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Beranda</a></li>
    <li><a href="menu.html">Menu</a></li>
    <li><a href="tentang.html">Tentang</a></li>
    <li><a href="reservasi.html" class="nav-reservasi">Reservasi</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" id="mobileClose">✕</button>
  <div class="mobile-menu-sunda">Saung Kuring</div>
  <a href="index.html">Beranda</a>
  <a href="menu.html">Menu</a>
  <a href="tentang.html">Tentang</a>
  <a href="reservasi.html">Reservasi</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <span class="footer-brand-name">Saung Kuring</span>
        <span class="footer-brand-sub">Restoran Masakan Sunda</span>
        <p class="footer-about">
          Rasakan keaslian cita rasa Sunda — dari tangan yang telaten, dari dapur yang penuh kenangan, untuk meja makan yang penuh kehangatan.
        </p>
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
          <li><a href="index.html">Beranda</a></li>
          <li><a href="menu.html">Menu Lengkap</a></li>
          <li><a href="tentang.html">Tentang Kami</a></li>
          <li><a href="reservasi.html">Reservasi Meja</a></li>
        </ul>
      </div>
      <div>
        <span class="f-col-title">Jam Buka</span>
        <ul class="f-links" style="gap:0.38rem;">
          <li style="color:rgba(250,246,238,0.3);font-size:0.83rem;font-weight:300;">Senin – Jumat</li>
          <li style="color:var(--bambu);font-size:0.83rem;font-weight:600;">10.00 – 22.00 WIB</li>
          <li style="color:rgba(250,246,238,0.3);font-size:0.83rem;margin-top:0.4rem;font-weight:300;">Sabtu – Minggu</li>
          <li style="color:var(--bambu);font-size:0.83rem;font-weight:600;">09.00 – 23.00 WIB</li>
          <li style="color:rgba(250,246,238,0.25);font-size:0.77rem;margin-top:0.7rem;font-weight:300;font-style:italic;">* Reservasi disarankan H-1</li>
        </ul>
      </div>
      <div>
        <span class="f-col-title">Temukan Kami</span>
        <div class="f-ci"><span class="f-ci-icon">🌿</span><span class="f-ci-text">Jl. Raya Sunda No. 12, Permata Balaraja, Kab. Tangerang, Banten 15660</span></div>
        <div class="f-ci"><span class="f-ci-icon">🌿</span><span class="f-ci-text">+62 813-7777-8888</span></div>
        <div class="f-ci"><span class="f-ci-icon">🌿</span><span class="f-ci-text">hatur@saungkuring.id</span></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Saung Kuring. Sadaya hak dipasrahkeun.</span>
      <span class="footer-sunda-phrase">Silih asih, silih asah, silih asuh.</span>
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
