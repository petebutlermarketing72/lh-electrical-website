(function () {
  var slides = document.querySelectorAll(".hero-illustration-slide");
  if (slides.length < 2) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var i = 0;
  setInterval(function () {
    slides[i].classList.remove("is-active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("is-active");
  }, 4500);
})();
