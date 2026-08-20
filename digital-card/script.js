/* ============================================================
   DIGITAL BUSINESS CARD — script.js
   Everything renders from CARD_DATA below. Edit this object to
   turn it into your own card — no other file needs to change
   for content updates.
   ============================================================ */

const CARD_DATA = {
  name: "Eye Q Designs",
  initials: "EQ",
  role: "Founder & Marketing Head",
  tagline: "Where Ideas Become Icons.",
  eyebrow: "Sandy Patel",
  business: "Eye Q Designs & Got2Get Designs",
  location: "227, Binoli Complex, Opp. Torrent Power, Naranpura, Ahmedabad, Gujarat 380013 · Canada",
  email: "eyeqds@gmail.com",
  // Primary number shown in info strip (India)
  phone: "IN: +91 98255 19646  |  CA: +1 647-553-3563",
  phoneRaw: "+919825519646",
  phoneCanada: "+16475533563",
  website: "https://got2get.com",
  slides: [
    { src: "images/intro.mp4", type: "video", alt: "Eye Q Designs Intro" },
    { src: "images/logo.png", type: "image", alt: "Eye Q Designs Logo" }
  ],

  about: {
    paragraphs: [
      "EYE Q DESIGNS is a design studio founded by Sandeep Patel, an Innovative Graphic Designer based in Ahmedabad, India, specialising in creating professional and stunning concept designing.",
      "We have been in love with colors, shapes and letters for more than a decade now. Our founder's journey as a graphic designer started more than 20 years ago. Having executed work in both corporate and agency environments, we have the capability to execute each and every aspect of design. We love our work and would love to work for you.",
      "\u201CFor the Past 14 Years, I have strived to turn the everyday into something new. I pride myself in providing unique solutions to complex design problems. I am a designer at EYE Q DESIGNS and founder — you can say owner — of EYE Q DESIGNS.\u201D"
    ],
    highlights: [
      "25+ years of professional graphic design experience.",
      "2,800+ projects successfully delivered across industries.",
      "Currently engaged with 10+ active projects."
    ],
    quote: "\u201CCreativity is the power to connect the seemingly unconnected.\u201D"
  },

  stats: [
    { num: "25+", label: "Years Experience" },
    { num: "2800+", label: "Projects Delivered" },
    { num: "10+", label: "Active Projects" }
  ],

  services: [
    {
      title: "Logo Design",
      desc: "Timeless, memorable logos that capture your brand essence and make a lasting first impression.",
      icon: "star"
    },
    {
      title: "Brochure Design",
      desc: "Striking print and digital brochures that tell your story and convert prospects into clients.",
      icon: "book"
    },
    {
      title: "Packaging Design",
      desc: "Creative packaging that stands out on shelves and communicates your brand values at a glance.",
      icon: "target"
    },
    {
      title: "Branding",
      desc: "End-to-end brand identity systems — from color palette to typography — built for consistency and impact.",
      icon: "compass"
    },
    {
      title: "Social Media Marketing",
      desc: "Engaging visual content strategies that grow your online presence and spark genuine audience connections.",
      icon: "megaphone"
    },
    {
      title: "Web Design",
      desc: "Clean, conversion-focused website designs that deliver an exceptional experience across all devices.",
      icon: "trend"
    },
    {
      title: "Event Management",
      desc: "Creative event branding and collateral design that makes every occasion memorable and professional.",
      icon: "rocket"
    },
    {
      title: "Exhibition Stall Design",
      desc: "Immersive, high-impact exhibition stall concepts designed to attract footfall and showcase your brand.",
      icon: "coin"
    }
  ],

  socials: [
    { label: "Instagram", href: "https://instagram.com/eyeqdesigns/", icon: "instagram" },
    { label: "Facebook", href: "https://facebook.com/eyeqdesigns/", icon: "facebook" },
    { label: "LinkedIn", href: "https://linkedin.com/in/sandypateleq/", icon: "linkedin" }
  ]
};

/* ============ Icon library (inline, stroke-based, monochrome) ============ */
const ICONS = {
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6" fill="currentColor"/></svg>',
  trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 16l5-5 4 4 7-8"/><path d="M15 7h5v5"/></svg>',
  megaphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 10v4a1 1 0 0 0 1 1h2l5 4V5l-5 4H5a1 1 0 0 0-1 1Z"/><path d="M17 9a4 4 0 0 1 0 6"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="m15 9-2 6-6 2 2-6 6-2Z"/></svg>',
  coin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.3c0-1.3 1.1-2.1 2.5-2.1s2.5.9 2.5 2-1 1.7-2.5 2-2.5.8-2.5 2 1.1 2 2.5 2 2.5-.7 2.5-2"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 15c-3 0-5 2-6 6 4-1 6-3 6-6Z"/><path d="M12 15a13 13 0 0 0 7-11 13 13 0 0 0-11 7c0 1 .3 2.6 1.1 3.5.9.8 2.4 1.1 3.5 1Z"/><circle cx="14.5" cy="9.5" r="1.4"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m12 3 2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6-4.5-4.1 6-.7L12 3Z"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z"/><path d="M4 5.5v15"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" stroke="none"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="8" y1="10" x2="8" y2="17"/><circle cx="8" cy="6.6" r="1" fill="currentColor" stroke="none"/><path d="M12 17v-4.5c0-1.4 1-2.3 2.3-2.3s2.2.9 2.2 2.3V17"/></svg>'
};

/* ============ Helpers ============ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const waLink = (phoneRaw, text) => `https://wa.me/${phoneRaw.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

/* ============ Render: product slider ============ */
function renderSlider(data) {
  const track = $("#sliderTrack");
  const dotsContainer = $("#sliderDots");
  if (!track || !data.slides || data.slides.length === 0) return;

  data.slides.forEach((slide, idx) => {
    const el = document.createElement("div");
    el.className = "slide";

    if (slide.type === "video") {
      // Video slide — plays once, then auto-advances to the next slide
      const video = document.createElement("video");
      video.src = slide.src;
      video.autoplay = true;
      video.muted = true;
      video.playsInline = true;
      video.setAttribute("aria-label", slide.alt);
      video.setAttribute("preload", "auto");

      // When video ends, advance to next slide and resume autoplay
      video.addEventListener("ended", () => {
        goToSlide(idx + 1);
        startSliderAutoplay();
      });

      el.appendChild(video);

      // Small floating badge
      el.insertAdjacentHTML("beforeend",
        `<span class="slide-video-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none"/>
          </svg>
          Video
        </span>`
      );

    } else {
      // Image slide
      const img = document.createElement("img");
      img.src = slide.src;
      img.alt = slide.alt;
      img.loading = idx === 0 ? "eager" : "lazy";
      el.appendChild(img);
    }

    track.appendChild(el);

    // Render dot
    const dot = document.createElement("button");
    dot.className = `slider-dot ${idx === 0 ? 'is-active' : ''}`;
    dot.setAttribute("aria-label", `Go to slide ${idx + 1}`);
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });
}

/* ============ Slider Logic ============ */
let sliderIndex = 0;
let sliderInterval = null;

function goToSlide(idx) {
  const track = $("#sliderTrack");
  const dots = $$(".slider-dot");
  const slides = $$(".slide");
  if (!track || slides.length === 0) return;

  // Clamp index
  if (idx < 0) idx = slides.length - 1;
  if (idx >= slides.length) idx = 0;

  sliderIndex = idx;
  track.style.transform = `translateX(-${sliderIndex * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("is-active", i === sliderIndex);
  });

  // Handle video play/pause on slide change
  slides.forEach((slide, i) => {
    const video = slide.querySelector("video");
    if (!video) return;
    if (i === sliderIndex) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  });
}

function startSliderAutoplay() {
  stopSliderAutoplay();
  // If the current slide is a video, let the 'ended' event drive advancement.
  // Don't start the 4-s timer so the video isn't skipped early.
  const slides = $$(".slide");
  const currentSlide = slides[sliderIndex];
  if (currentSlide && currentSlide.querySelector("video")) return;

  sliderInterval = setInterval(() => {
    goToSlide(sliderIndex + 1);
  }, 4000);
}

function stopSliderAutoplay() {
  if (sliderInterval) {
    clearInterval(sliderInterval);
    sliderInterval = null;
  }
}

function initSlider() {
  const container = $("#productSlider");
  const prevBtn = $("#sliderPrevBtn");
  const nextBtn = $("#sliderNextBtn");
  if (!container) return;

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    goToSlide(sliderIndex - 1);
    startSliderAutoplay(); // Reset timer
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    goToSlide(sliderIndex + 1);
    startSliderAutoplay(); // Reset timer
  });

  // Autoplay controls
  container.addEventListener("mouseenter", stopSliderAutoplay);
  container.addEventListener("mouseleave", startSliderAutoplay);

  // Swipe gesture support
  let startX = 0;
  let isSwiping = false;

  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
    stopSliderAutoplay();
  }, { passive: true });

  container.addEventListener("touchmove", (e) => {
    if (!isSwiping) return;
    const diffX = startX - e.touches[0].clientX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        goToSlide(sliderIndex + 1);
      } else {
        goToSlide(sliderIndex - 1);
      }
      isSwiping = false; // Trigger once per swipe
    }
  }, { passive: true });

  container.addEventListener("touchend", () => {
    isSwiping = false;
    startSliderAutoplay();
  }, { passive: true });

  startSliderAutoplay();
}

/* ============ Render: hero + actions ============ */
function renderHero(data) {
  // Avatar is now an <img>, so skip setting textContent
  $("#eyebrow").textContent = data.eyebrow;
  $("#cardName").textContent = data.name;
  $("#cardRole").textContent = data.role;
  $("#cardTagline").textContent = `\u201C${data.tagline.replace(/[\u201C\u201D"]/g, "")}\u201D`;
  document.title = `${data.name} — Digital Business Card`;

  $("#actCall").href = `tel:${data.phoneRaw}`;
  $("#actWhatsapp").href = waLink(data.phoneRaw, `Hi ${data.name.split(" ")[0]}, I'd like to know more about your services.`);
  $("#actEmail").href = `mailto:${data.email}`;
  $("#actWeb").href = data.website;

  $("#footerWhatsapp").href = waLink(data.phoneRaw, `Hi ${data.name.split(" ")[0]}, I have a project I'd like to discuss.`);
  $("#footName").textContent = data.name;
}

/* ============ Render: info strip ============ */
function renderInfo(data) {
  $("#infoBusiness").textContent = data.business;
  $("#infoLocation").textContent = data.location;
  $("#infoEmail").textContent = data.email;
  $("#infoPhone").textContent = data.phone;
}

/* ============ Render: about ============ */
function renderAbout(data) {
  const wrap = document.createElement("div");
  wrap.className = "about-copy";

  data.about.paragraphs.forEach(p => {
    const el = document.createElement("p");
    el.textContent = p;
    wrap.appendChild(el);
  });

  const list = document.createElement("ul");
  list.className = "about-list";
  data.about.highlights.forEach(h => {
    const li = document.createElement("li");
    li.textContent = h;
    list.appendChild(li);
  });
  wrap.appendChild(list);

  const quote = document.createElement("p");
  quote.className = "about-quote";
  quote.textContent = data.about.quote;
  wrap.appendChild(quote);

  $("#aboutContent").appendChild(wrap);
}

/* ============ Render: highlights ============ */
function renderHighlights(data) {
  const el = $("#highlights");
  data.stats.forEach(s => {
    const item = document.createElement("div");
    item.className = "highlight";
    item.innerHTML = `<div class="highlight__num">${s.num}</div><div class="highlight__label">${s.label}</div>`;
    el.appendChild(item);
  });
}

/* ============ Render: services ============ */
function renderServices(data) {
  const el = $("#services");
  data.services.forEach((s, i) => {
    const card = document.createElement("a");
    card.className = "service";
    card.href = waLink(data.phoneRaw, `Hi ${data.name.split(" ")[0]}, I'd like to enquire about "${s.title}".`);
    card.target = "_blank";
    card.rel = "noopener";
    card.setAttribute("data-reveal", "");
    card.style.setProperty("--stagger", `${(i % 4) * 60}ms`);
    card.innerHTML = `
      <span class="service__icon">${ICONS[s.icon] || ICONS.star}</span>
      <span class="service__title">${s.title}</span>
      <span class="service__desc">${s.desc}</span>
      <span class="service__link">Inquire ${ICONS.arrow}</span>
    `;
    el.appendChild(card);
  });
}

/* ============ Render: socials ============ */
function renderSocials(data) {
  const el = $("#socialRow");
  data.socials.forEach(s => {
    const a = document.createElement("a");
    a.className = "social__btn";
    a.href = s.href;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", s.label);
    a.innerHTML = ICONS[s.icon] || "";
    el.appendChild(a);
  });
}

/* ============ vCard (Save Contact) ============ */
function buildVCard(data) {
  const [firstName, ...rest] = (data.eyebrow || data.name).split(" ");
  const lastName = rest.join(" ");
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${lastName};${firstName};;;`,
    `FN:${data.eyebrow || data.name}`,
    `ORG:${data.business}`,
    `TITLE:${data.role}`,
    `TEL;TYPE=CELL,PREF:${data.phoneRaw}`,
    `TEL;TYPE=CELL:${data.phoneCanada}`,
    `EMAIL:${data.email}`,
    `URL:${data.website}`,
    `ADR;TYPE=WORK:;;227 Binoli Complex Opp Torrent Power Naranpura;Ahmedabad;Gujarat;380013;India`,
    `NOTE:${data.tagline}`,
    "END:VCARD"
  ].join("\n");
}

function saveContact(data) {
  const vcard = buildVCard(data);
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${data.name.replace(/\s+/g, "-")}.vcf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast("Contact saved ✓");
}

/* ============ Toast ============ */
let toastTimer;
function showToast(msg) {
  const toast = $("#toast");
  toast.textContent = msg;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

/* ============ Copy to clipboard ============ */
async function copyText(text, label) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    showToast(`${label} copied ✓`);
  } catch (err) {
    showToast("Couldn't copy — long-press to select");
  }
}

/* ============ Accordion ============ */
function initAccordion() {
  const trigger = $("#aboutTrigger");
  const panel = $("#aboutPanel");
  trigger.addEventListener("click", () => {
    const isOpen = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("is-open", !isOpen);
  });
}

/* ============ Ripple effect on primary buttons ============ */
function initRipple() {
  $$(".save-btn, .action-btn, .footer__cta").forEach(btn => {
    btn.addEventListener("click", e => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height) * 1.4;
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${(e.clientX ?? rect.left + rect.width / 2) - rect.left - size / 2}px`;
      ripple.style.top = `${(e.clientY ?? rect.top + rect.height / 2) - rect.top - size / 2}px`;
      btn.style.position = btn.style.position || "relative";
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });
}

/* ============ Card tilt (pointer-following, desktop only) ============ */
function initTilt() {
  const card = $("#card");
  const frame = $(".card-frame");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (prefersReduced || !canHover) return;

  let raf = null;

  frame.addEventListener("mousemove", e => {
    const rect = frame.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const rotateY = x * 6;
      const rotateX = y * -6;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  });

  frame.addEventListener("mouseleave", () => {
    if (raf) cancelAnimationFrame(raf);
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}

/* ============ Scroll reveal ============ */
function initReveal() {
  const items = $$("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => io.observe(el));
}

/* ============ Wire up interactive controls ============ */
function initControls(data) {
  $("#saveBtn").addEventListener("click", () => saveContact(data));

  $$("[data-copy]").forEach(row => {
    const btn = row.querySelector(".copy-btn");
    const targetId = row.getAttribute("data-copy-target");
    if (!btn) return; // rows without a copy button (business/location) are static
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const value = $(`#${targetId}`).textContent.trim();
      const label = targetId === "infoEmail" ? "Email" : "Phone number";
      copyText(value, label);
    });
  });

  $("#shareBtn").addEventListener("click", async () => {
    const shareData = {
      title: `${data.name} — Digital Business Card`,
      text: `${data.name} · ${data.role}`,
      url: window.location.href
    };
    if (navigator.share) {
      try { await navigator.share(shareData); }
      catch (err) { /* user cancelled — no-op */ }
    } else {
      copyText(window.location.href, "Link");
    }
  });

  $("#copyLinkBtn").addEventListener("click", () => copyText(window.location.href, "Link"));

  $("#footYear").textContent = new Date().getFullYear();
}

/* ============ Init ============ */
function init() {
  renderSlider(CARD_DATA);
  renderHero(CARD_DATA);
  renderInfo(CARD_DATA);
  renderAbout(CARD_DATA);
  renderHighlights(CARD_DATA);
  renderServices(CARD_DATA);
  renderSocials(CARD_DATA);
  initSlider();
  initAccordion();
  initRipple();
  initTilt();
  initReveal();
  initControls(CARD_DATA);
}

document.addEventListener("DOMContentLoaded", init);
