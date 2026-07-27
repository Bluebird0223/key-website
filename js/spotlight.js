/**
 * Keyy - Cursor Spotlight Glow Follow Effect
 * Uses highly performant event delegation on the window object
 * to dynamically track cursor position on card components.
 */

(function () {
  const cardSelector =
    ".reveal-card, .tt-block, .card-keyy, .contact-card, .address-card, .team-card-h, .faq-card";

  const initSpotlight = () => {
    window.addEventListener(
      "mousemove",
      (event) => {
        const targetCard = event.target.closest(cardSelector);
        if (targetCard) {
          const rect = targetCard.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          
          targetCard.style.setProperty("--mouse-x", `${x}px`);
          targetCard.style.setProperty("--mouse-y", `${y}px`);
        }
      },
      { passive: true } // Passive listener for improved scroll/performance scaling
    );
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSpotlight);
  } else {
    initSpotlight();
  }
})();
