(function () {
  var carousels = document.querySelectorAll("[data-svc-carousel]");
  if (!carousels.length) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  carousels.forEach(function (root) {
    var viewport = root.querySelector(".svc-carousel-viewport");
    var track = root.querySelector(".svc-carousel-track");
    var dotsWrap = root.querySelector(".svc-carousel-dots");
    var prev = root.querySelector(".svc-carousel-btn.is-prev");
    var next = root.querySelector(".svc-carousel-btn.is-next");
    if (!viewport || !track) return;

    var originals = Array.prototype.slice.call(track.children);
    var count = originals.length;
    if (count < 2) return;

    // Duplicate the set once so the scroll can loop seamlessly.
    originals.forEach(function (node) {
      var clone = node.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });

    var paused = false;
    var dragging = false;
    var startX = 0;
    var startScroll = 0;
    var SPEED = 0.45; // px per frame, right-to-left

    function loopWidth() {
      return track.scrollWidth / 2;
    }

    function step() {
      return loopWidth() / count;
    }

    function normalise() {
      var half = loopWidth();
      if (half <= 0) return;
      if (viewport.scrollLeft >= half) viewport.scrollLeft -= half;
      else if (viewport.scrollLeft < 0) viewport.scrollLeft += half;
    }

    // ---- dots ----
    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = "";
      for (var i = 0; i < count; i++) {
        (function (idx) {
          var dot = document.createElement("button");
          dot.type = "button";
          dot.className = "svc-carousel-dot";
          dot.setAttribute("aria-label", "Go to image " + (idx + 1));
          dot.addEventListener("click", function () {
            viewport.scrollTo({ left: idx * step(), behavior: "smooth" });
          });
          dotsWrap.appendChild(dot);
        })(i);
      }
    }

    function syncDots() {
      if (!dotsWrap) return;
      var s = step();
      if (!s) return;
      var idx = Math.round(viewport.scrollLeft / s) % count;
      if (idx < 0) idx += count;
      Array.prototype.forEach.call(dotsWrap.children, function (d, i) {
        d.classList.toggle("is-active", i === idx);
      });
    }

    // ---- continuous auto-scroll ----
    function frame() {
      if (!paused && !dragging) {
        viewport.scrollLeft += SPEED;
        normalise();
      }
      requestAnimationFrame(frame);
    }

    // ---- pause on hover / focus ----
    root.addEventListener("mouseenter", function () { paused = true; });
    root.addEventListener("mouseleave", function () { paused = false; });
    root.addEventListener("focusin", function () { paused = true; });
    root.addEventListener("focusout", function () { paused = false; });

    // ---- mouse drag to scrub (touch uses native scrolling) ----
    viewport.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse") return;
      dragging = true;
      startX = e.clientX;
      startScroll = viewport.scrollLeft;
      viewport.classList.add("is-dragging");
      viewport.setPointerCapture(e.pointerId);
    });
    viewport.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      e.preventDefault();
      viewport.scrollLeft = startScroll - (e.clientX - startX);
      normalise();
    });
    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      viewport.classList.remove("is-dragging");
      if (e && e.pointerId != null && viewport.hasPointerCapture(e.pointerId)) {
        viewport.releasePointerCapture(e.pointerId);
      }
    }
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
    viewport.addEventListener("dragstart", function (e) { e.preventDefault(); });

    viewport.addEventListener("scroll", function () {
      normalise();
      syncDots();
    }, { passive: true });

    if (prev) prev.addEventListener("click", function () {
      viewport.scrollBy({ left: -step(), behavior: "smooth" });
    });
    if (next) next.addEventListener("click", function () {
      viewport.scrollBy({ left: step(), behavior: "smooth" });
    });

    buildDots();
    syncDots();
    if (!reduceMotion) requestAnimationFrame(frame);
  });
})();
