/* FAQ 001 — Accordion JS */

const faq001 = document.querySelector(".faq-001");

if (faq001) {
  const items = faq001.querySelectorAll(".faq-001__item");

  items.forEach((item) => {
    const button = item.querySelector(".faq-001__question");
    const answer = item.querySelector(".faq-001__answer");

    if (item.classList.contains("is-open")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      items.forEach((otherItem) => {
        const otherButton = otherItem.querySelector(".faq-001__question");
        const otherAnswer = otherItem.querySelector(".faq-001__answer");

        otherItem.classList.remove("is-open");
        otherButton.setAttribute("aria-expanded", "false");
        otherAnswer.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}