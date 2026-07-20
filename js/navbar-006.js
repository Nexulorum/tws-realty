/* =========================================================
   NAVBAR 006 — Transparent Scroll Navbar JS
========================================================= */

const navbar006 = document.querySelector(".navbar-006");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    navbar006.classList.add("is-scrolled");
  } else {
    navbar006.classList.remove("is-scrolled");
  }

});

/* =====================
   MOBILE MENU
===================== */

const toggle006 =
  document.querySelector(".navbar-006 [data-nav-toggle]");

if (toggle006 && navbar006) {

  toggle006.addEventListener("click", () => {

    const isOpen =
      navbar006.classList.toggle("is-open");

    toggle006.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });

}