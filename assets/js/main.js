/*!
 * GOT2GET / EYE Q DESIGNS — Main JS
 * Powered by GSAP + Vanilla JS
 */

// ——————————————————————————————————————————————
// 1. CUSTOM CURSOR
// ——————————————————————————————————————————————
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

// Instantly snap dot to mouse
document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  gsap.set(dot, { x: mouseX, y: mouseY });
});

// Ring follows with smooth lag
function animateRing() {
  ringX += (mouseX - ringX) * 0.1;
  ringY += (mouseY - ringY) * 0.1;
  gsap.set(ring, { x: ringX, y: ringY });
  requestAnimationFrame(animateRing);
}
animateRing();

// Hover state for interactive elements
document.querySelectorAll('a, button, .panel-cta, .social-icon').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});

// ——————————————————————————————————————————————
// 2. PAGE LOADER
// ——————————————————————————————————————————————
const loader     = document.getElementById('loader');
const loaderFill = document.getElementById('loader-fill');
const loaderPct  = document.getElementById('loader-pct');

gsap.to(loaderFill, {
  width: '100%',
  duration: 1.6,
  ease: 'power2.inOut',
  onUpdate: function() {
    loaderPct.textContent = Math.round(this.progress() * 100) + '%';
  },
  onComplete: () => {
    gsap.to(loader, {
      yPercent: -100,
      duration: 0.9,
      ease: 'power4.inOut',
      onComplete: () => {
        loader.style.display = 'none';
        runEntranceAnimations();
      }
    });
  }
});

// ——————————————————————————————————————————————
// 3. HERO ENTRANCE ANIMATIONS
// ——————————————————————————————————————————————
function runEntranceAnimations() {

  // India panel — stagger in from bottom
  gsap.from('.hero-panel--india .panel-country', {
    opacity: 0, y: -16, duration: 0.7, ease: 'power3.out', delay: 0.05
  });
  gsap.from('#india-logo', {
    opacity: 0, y: 24, duration: 0.9, ease: 'power3.out', delay: 0.15
  });
  gsap.from('.hero-panel--india .panel-desc', {
    opacity: 0, y: 20, duration: 0.8, ease: 'power3.out', delay: 0.3
  });
  gsap.from('.hero-panel--india .panel-cta', {
    opacity: 0, y: 16, scale: 0.95, duration: 0.8, ease: 'back.out(1.5)', delay: 0.44
  });
  gsap.from('.hero-panel--india .panel-social', {
    opacity: 0, y: 12, duration: 0.7, ease: 'power3.out', delay: 0.56
  });

  // Canada panel — slightly later
  gsap.from('.hero-panel--canada .panel-country', {
    opacity: 0, y: -16, duration: 0.7, ease: 'power3.out', delay: 0.15
  });
  gsap.from('#canada-logo', {
    opacity: 0, y: 24, duration: 0.9, ease: 'power3.out', delay: 0.25
  });
  gsap.from('.hero-panel--canada .panel-desc', {
    opacity: 0, y: 20, duration: 0.8, ease: 'power3.out', delay: 0.4
  });
  gsap.from('.hero-panel--canada .panel-cta', {
    opacity: 0, y: 16, scale: 0.95, duration: 0.8, ease: 'back.out(1.5)', delay: 0.54
  });
  gsap.from('.hero-panel--canada .panel-social', {
    opacity: 0, y: 12, duration: 0.7, ease: 'power3.out', delay: 0.66
  });

  // Divider line
  gsap.from('.hero-divider', {
    scaleY: 0, transformOrigin: 'top', duration: 1.2, ease: 'power4.out', delay: 0.1
  });

  // Footer
  gsap.from('#footer', {
    opacity: 0, y: 10, duration: 0.6, ease: 'power2.out', delay: 0.7
  });

  // Marquee already visible via CSS animation
}
