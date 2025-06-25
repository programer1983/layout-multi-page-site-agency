import "./../scss/style.scss";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: true,
  offset: 120,
});

/* ============================================================================ */

console.log("Vite работает");

/* ============================================================================ */

window.onload = function () {
  window.scrollTo(0, 0);
};

/* ============================================================================ */

window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});

document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if ((link && link.href) || link.target !== "_blank") {
    e.preventDefault();
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location = link.href;
    }, 600);
  }
});
