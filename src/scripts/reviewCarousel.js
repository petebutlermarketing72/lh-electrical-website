(function () {
  const track = document.getElementById("reviewTrack");
  if (!track) return;

  const cards = track.querySelectorAll(".review-card");
  const dotsWrap = document.getElementById("revDots");
  const prevBtn = document.getElementById("revPrev");
  const nextBtn = document.getElementById("revNext");
  if (!cards.length || !dotsWrap || !prevBtn || !nextBtn) return;

  let current = 0;
  const perView = () => (window.innerWidth < 700 ? 1 : window.innerWidth < 1024 ? 2 : 3);
  const total = () => Math.ceil(cards.length / perView());

  function buildDots() {
    dotsWrap.innerHTML = "";
    for (let i = 0; i < total(); i++) {
      const dot = document.createElement("button");
      dot.className = "carousel-dot" + (i === current ? " active" : "");
      dot.setAttribute("aria-label", "Go to slide " + (i + 1));
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  }

  function goTo(n) {
    current = Math.max(0, Math.min(n, total() - 1));
    const gap = 20;
    const cardWidth = cards[0].getBoundingClientRect().width + gap;
    track.style.transform = "translateX(-" + current * perView() * cardWidth + "px)";
    buildDots();
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));
  window.addEventListener("resize", () => {
    current = 0;
    goTo(0);
  });

  let touchStartX = 0;
  track.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  });

  buildDots();
})();
