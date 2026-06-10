// ========================
// COMPONENTS.JS
// ========================

const NAV_HTML = `
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    <span class="nav-logo-dot"></span>
    DRIFT
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="menu.html">Menu</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html" class="nav-order-btn">Order Now</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" id="mobileClose">[ close ]</button>
  <a href="index.html">Home</a>
  <a href="menu.html">Menu</a>
  <a href="about.html">About</a>
  <a href="contact.html">Order</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <span class="footer-brand">DRIFT</span>
        <span class="footer-brand-sub">Coffee & Workspace · Balaraja</span>
        <p class="footer-about">
          A different kind of coffee shop.<br>
          No pretense. Just good coffee,<br>
          real people, honest work.
        </p>
        <div class="footer-socials">
          <div class="f-soc">IG</div>
          <div class="f-soc">TT</div>
          <div class="f-soc">WA</div>
        </div>
      </div>

      <div>
        <span class="f-col-title">Navigate</span>
        <ul class="f-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="menu.html">Full Menu</a></li>
          <li><a href="about.html">About Drift</a></li>
          <li><a href="contact.html">Order & Contact</a></li>
        </ul>
      </div>

      <div>
        <span class="f-col-title">Hours</span>
        <ul class="f-links" style="gap:0.3rem;">
          <li style="color:var(--ash);font-family:'Space Mono',monospace;font-size:0.7rem;">Mon – Fri</li>
          <li style="color:var(--neon);font-family:'Space Mono',monospace;font-size:0.7rem;font-weight:700;">07:00 – 23:00</li>
          <li style="color:var(--ash);font-family:'Space Mono',monospace;font-size:0.7rem;margin-top:0.4rem;">Sat – Sun</li>
          <li style="color:var(--neon);font-family:'Space Mono',monospace;font-size:0.7rem;font-weight:700;">08:00 – 24:00</li>
        </ul>
      </div>

      <div>
        <span class="f-col-title">Find Us</span>
        <div class="f-contact-item">
          <span class="f-c-icon">◈</span>
          <span class="f-c-text">Jl. Drift No. 7, Permata Balaraja, Kab. Tangerang, Banten</span>
        </div>
        <div class="f-contact-item">
          <span class="f-c-icon">◈</span>
          <span class="f-c-text">+62 812-0000-7777</span>
        </div>
        <div class="f-contact-item">
          <span class="f-c-icon">◈</span>
          <span class="f-c-text">hi@driftcoffee.id</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span class="footer-bottom-text">© 2025 Drift Coffee. All rights reserved. — Vol. VIII</span>
      <span class="footer-bottom-tag">STAY CAFFEINATED.</span>
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
