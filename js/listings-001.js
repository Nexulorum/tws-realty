const listingSections = document.querySelectorAll("[data-listings]");

listingSections.forEach((section) => {
  const buttons = section.querySelectorAll("[data-filter]");
  const cards = section.querySelectorAll("[data-category]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");

      cards.forEach((card) => {
        const categories = card.dataset.category.split(" ");
        const shouldShow = filter === "all" || categories.includes(filter);

        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });
});