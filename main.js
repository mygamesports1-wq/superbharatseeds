/* ═══════════════════════════════════════════════════════════
   SUPER BHARAT SEEDS COMPANY — main.js
   Shared across all pages
═══════════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  // ── HAMBURGER MENU ──
  const ham = document.getElementById("ham");
  const mobNav = document.getElementById("mobNav");
  if (ham && mobNav) {
    ham.addEventListener("click", () => {
      const open = mobNav.classList.toggle("open");
      ham.classList.toggle("open", open);
      ham.setAttribute("aria-expanded", open);
    });
    mobNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobNav.classList.remove("open");
        ham.classList.remove("open");
        ham.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ── NAVBAR SCROLL SHADOW ──
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener(
      "scroll",
      () => {
        navbar.classList.toggle("scrolled", window.scrollY > 10);
      },
      { passive: true },
    );
  }

  // ── SCROLL REVEAL ──
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            ro.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" },
    );
    revealEls.forEach((el) => ro.observe(el));
  }

  // ── COUNT-UP ANIMATION ──
  const counters = document.querySelectorAll(".count-up");
  if (counters.length) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = parseFloat(el.dataset.target);
          const duration = 1600;
          const steps = 60;
          const inc = target / steps;
          let cur = 0;
          const timer = setInterval(() => {
            cur += inc;
            if (cur >= target) {
              cur = target;
              clearInterval(timer);
            }
            el.textContent = Number.isInteger(target)
              ? Math.floor(cur)
              : cur.toFixed(1);
          }, duration / steps);
          co.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((el) => co.observe(el));
  }

  // ── NEWSLETTER FORM ──
  document.querySelectorAll(".nl-form").forEach((form) => {
    const btn = form.querySelector(".nl-btn");
    const input = form.querySelector(".nl-input");
    if (btn && input) {
      btn.addEventListener("click", () => {
        const val = input.value.trim();
        const rx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!rx.test(val)) {
          input.style.borderColor = "#e53e3e";
          input.focus();
          return;
        }
        input.style.borderColor = "";
        btn.textContent = "✓";
        btn.style.background = "#25D366";
        input.value = "";
        setTimeout(() => {
          btn.textContent = "→";
          btn.style.background = "";
        }, 3000);
      });
    }
  });
});
