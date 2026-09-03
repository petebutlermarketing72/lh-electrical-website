(function () {
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  function rotate(selector, interval) {
    var slides = document.querySelectorAll(selector);
    if (slides.length < 2) return;
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove("is-active");
      i = (i + 1) % slides.length;
      slides[i].classList.add("is-active");
    }, interval);
  }

  rotate(".hero-illustration-slide", 4500);
  rotate(".hero-review-icon-slide", 3200);
  rotate(".hero-review-text-slide", 3200);
})();
