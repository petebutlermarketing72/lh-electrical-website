(function () {
  var counters = document.querySelectorAll("[data-counter-target]");
  if (!counters.length) return;

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-counter-target"));
    var suffix = el.getAttribute("data-counter-suffix") || "";
    var decimals = el.getAttribute("data-counter-decimals") ? parseInt(el.getAttribute("data-counter-decimals"), 10) : 0;
    var duration = 1200;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var value = target * progress;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toFixed(decimals) + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCounter);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(function (el) { observer.observe(el); });
})();
