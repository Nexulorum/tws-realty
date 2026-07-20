/* SOCIAL PROOF 004 — Founder Signature Enhancements */

const founderSection = document.querySelector("[data-founder-proof]");

if (founderSection) {
  const revealItems = founderSection.querySelectorAll("[data-founder-reveal]");
  const parallaxItem = founderSection.querySelector("[data-founder-parallax]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = Array.from(revealItems).indexOf(entry.target);

        entry.target.style.transitionDelay = `${index * 120}ms`;
        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.25
    }
  );

  revealItems.forEach((item) => {
    observer.observe(item);
  });

  function updateFounderParallax() {
    if (!parallaxItem) return;

    const rect = founderSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.bottom < 0 || rect.top > windowHeight) return;

    const progress = rect.top / windowHeight;
    const movement = progress * -18;

    parallaxItem.style.transform =
      `translateY(${movement}px) scale(1)`;
  }

  window.addEventListener("scroll", updateFounderParallax);
  window.addEventListener("resize", updateFounderParallax);

  updateFounderParallax();
}