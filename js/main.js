/* =====================================================
   IVALITY ESTUDIOS — main.js
   Animations, Interactions, Canvas Background
   ===================================================== */

'use strict';

// ─── Liquid Background Canvas ─────────────────────
(function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [], mouse = { x: -9999, y: -9999 };
  const COLORS = ['#00e5a0', '#00c896', '#00ffb3', '#009966'];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.r = Math.random() * 120 + 40;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = Math.random() * 0.07 + 0.02;
      this.life = 0;
      this.maxLife = Math.random() * 400 + 200;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life++;
      // Mouse repulsion
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 200) {
        this.x += dx / dist * 0.5;
        this.y += dy / dist * 0.5;
      }
      if (this.life > this.maxLife || this.x < -200 || this.x > W + 200 || this.y < -200 || this.y > H + 200) this.reset();
    }
    draw() {
      const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
      grad.addColorStop(0, this.color + Math.floor(this.alpha * 255).toString(16).padStart(2, '0'));
      grad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = Array.from({ length: 14 }, () => new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  init();
  loop();
})();

// ─── Navbar Scroll Effect ─────────────────────────
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const links = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  if (toggle) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.classList.toggle('active');
      // Animate hamburger
      const spans = toggle.querySelectorAll('span');
      if (links.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        const spans = toggle.querySelectorAll('span');
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }
})();

// ─── Scroll Reveal ────────────────────────────────
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

// ─── Hero Typewriter Effect ───────────────────────
(function initTypewriter() {
  const el = document.getElementById('hero-typewrite');
  if (!el) return;
  const texts = ['tecnología.', 'experiencias.', 'soluciones.', 'el futuro.'];
  let i = 0, j = 0, deleting = false;

  function type() {
    const current = texts[i];
    if (deleting) {
      el.textContent = current.substring(0, j--);
      if (j < 0) { deleting = false; i = (i + 1) % texts.length; j = 0; setTimeout(type, 500); return; }
    } else {
      el.textContent = current.substring(0, ++j);
      if (j === current.length) { deleting = true; setTimeout(type, 2000); return; }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  setTimeout(type, 800);
})();

// ─── Smooth Scroll for Anchors ────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ─── Counter Animation ────────────────────────────
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const duration = 1500;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + suffix;
        if (current >= target) clearInterval(timer);
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
})();

// ─── Showreel — Featured Video Switcher ──────────
(function initShowreel() {
  const featuredVideo = document.getElementById('featured-video');
  const featuredWrap  = document.getElementById('featured-video-wrap');
  const featuredTitle = document.getElementById('featured-title');
  const featuredDesc  = document.getElementById('featured-desc');
  const demoCards     = document.querySelectorAll('.demo-card');

  if (!featuredVideo) return;

  // Auto-play featured when in view
  const featObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        featuredVideo.play();
        featuredWrap.classList.add('is-playing');
      } else {
        featuredVideo.pause();
        featuredWrap.classList.remove('is-playing');
      }
    });
  }, { threshold: 0.3 });
  featObs.observe(featuredWrap);

  // Auto-play demo thumbnails when in view
  demoCards.forEach(card => {
    const vid = card.querySelector('video');
    if (!vid) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { e.isIntersecting ? vid.play() : vid.pause(); });
    }, { threshold: 0.4 });
    obs.observe(card);
  });

  // Click demo card → load into featured
  demoCards.forEach(card => {
    card.addEventListener('click', () => {
      const src   = card.dataset.src;
      const title = card.dataset.title;
      const desc  = card.dataset.desc;

      // Update active state
      demoCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      // Swap featured video with crossfade
      featuredWrap.style.opacity = '0.4';
      featuredWrap.style.transition = 'opacity 0.25s';

      setTimeout(() => {
        featuredVideo.src = src;
        featuredVideo.load();
        featuredVideo.play();
        featuredTitle.textContent = title;
        featuredDesc.textContent  = desc;
        featuredWrap.classList.add('is-playing');
        featuredWrap.style.opacity = '1';
      }, 250);
    });
  });

  // Click featured → toggle play/pause
  featuredWrap.addEventListener('click', () => {
    if (featuredVideo.paused) {
      featuredVideo.play();
      featuredWrap.classList.add('is-playing');
    } else {
      featuredVideo.pause();
      featuredWrap.classList.remove('is-playing');
    }
  });
})();

document.querySelectorAll('.btn-primary, .btn-whatsapp').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position:absolute; border-radius:50%; pointer-events:none;
      width:4px; height:4px;
      background:rgba(255,255,255,0.4);
      left:${e.clientX - rect.left - 2}px;
      top:${e.clientY - rect.top - 2}px;
      transform:scale(0); transition:transform 0.6s ease, opacity 0.6s ease;
    `;
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    requestAnimationFrame(() => {
      ripple.style.transform = `scale(${Math.max(rect.width, rect.height) * 0.6})`;
      ripple.style.opacity = '0';
    });
    setTimeout(() => ripple.remove(), 700);
  });
});

// ─── Repos Filter ─────────────────────────────────
(function initReposFilter() {
  const filters = document.querySelectorAll('.repo-filter');
  const cards   = document.querySelectorAll('.repo-card');
  if (!filters.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('hidden', !match);
        if (match) {
          // Re-trigger reveal animation
          card.classList.remove('visible');
          requestAnimationFrame(() => {
            setTimeout(() => card.classList.add('visible'), 50);
          });
        }
      });
    });
  });
})();
