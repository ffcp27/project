// ========================
// MAIN.JS — Shared Utilities
// ========================

// --- Navbar scroll ---
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 70);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// --- Mobile menu ---
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

// --- Scroll reveal ---
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  els.forEach(el => observer.observe(el));
}

// --- Active nav link ---
function initActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// --- Counter animation ---
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 70));
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString('id') + suffix;
      if (current >= target) clearInterval(timer);
    }, 18);
  });
}

function initCounters() {
  const el = document.querySelector('[data-count]');
  if (!el) return;
  const wrap = el.closest('.stats-row') || el.parentElement;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { animateCounters(); observer.disconnect(); }
  }, { threshold: 0.4 });
  observer.observe(wrap);
}

// --- Toast ---
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// --- Wishlist ---
function toggleWishlist(btn, name) {
  const liked = btn.getAttribute('data-liked') === 'true';
  btn.setAttribute('data-liked', !liked);
  btn.textContent = !liked ? '♥' : '♡';
  showToast(!liked ? `${name} ditambahkan ke wishlist` : `${name} dihapus dari wishlist`);
}

// --- Add to cart ---
function addToCart(name) {
  showToast(`${name} ditambahkan ke keranjang ✦`);
}

// --- Init all ---
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initReveal();
  initActiveNav();
  initCounters();
});
