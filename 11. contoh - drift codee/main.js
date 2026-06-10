// ========================
// MAIN.JS
// ========================

// Custom cursor
function initCursor() {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animCursor() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    dot.style.left  = mx + 'px'; dot.style.top  = my + 'px';
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => { ring.style.transform = 'translate(-50%,-50%) scale(1.6)'; ring.style.opacity = '0.5'; });
    el.addEventListener('mouseleave', () => { ring.style.transform = 'translate(-50%,-50%) scale(1)'; ring.style.opacity = '1'; });
  });
}

// Navbar scroll
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 60
      ? 'rgba(10,10,10,0.97)'
      : 'rgba(10,10,10,0.88)';
  }, { passive: true });
}

// Mobile menu
function initMobileMenu() {
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn   = document.querySelector('.mobile-close');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );
}

// Scroll reveal
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

// Active nav
function initActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) link.classList.add('active');
  });
}

// Counter
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 65));
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString('id') + suffix;
      if (current >= target) clearInterval(timer);
    }, 20);
  });
}

function initCounters() {
  const el = document.querySelector('[data-count]');
  if (!el) return;
  const wrap = el.closest('.hero-stats-row') || el.closest('.about-facts') || el.parentElement;
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
  }, { threshold: 0.4 });
  obs.observe(wrap);
}

// Toast
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function orderItem(name) { showToast(`+ ${name} added to order`); }

// Menu tabs
function initMenuTabs() {
  const tabs = document.querySelectorAll('.menu-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
      const target = document.getElementById('panel-' + tab.dataset.panel);
      if (target) target.classList.add('active');
    });
  });
}

// Init all
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavbar();
  initMobileMenu();
  initReveal();
  initActiveNav();
  initCounters();
  initMenuTabs();
});
