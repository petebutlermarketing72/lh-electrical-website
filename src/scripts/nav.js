(function () {
  var headerEl = document.getElementById("site-header");
  if (headerEl) {
    var setHeaderHeightVar = function () {
      document.documentElement.style.setProperty("--header-h", headerEl.offsetHeight + "px");
    };
    setHeaderHeightVar();
    window.addEventListener("resize", setHeaderHeightVar);
  }

  var backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener(
      "scroll",
      function () {
        backToTop.classList.toggle("is-visible", window.scrollY > 500);
      },
      { passive: true }
    );
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var toggle = document.getElementById("nav-toggle");
  var closeBtn = document.getElementById("mobile-nav-close");
  var mobileNav = document.getElementById("mobile-nav");
  var header = document.getElementById("site-header");
  if (!toggle || !mobileNav) return;

  function openNav() {
    mobileNav.classList.add("is-open");
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    mobileNav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", function () {
    if (mobileNav.classList.contains("is-open")) {
      closeNav();
    } else {
      openNav();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeNav);
  }

  mobileNav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") closeNav();
  });

  var mobileCtaBar = document.getElementById("mobile-cta-bar");

  if (header || mobileCtaBar) {
    window.addEventListener(
      "scroll",
      function () {
        if (header) header.classList.toggle("is-scrolled", window.scrollY > 40);
        if (mobileCtaBar) mobileCtaBar.classList.toggle("is-visible", window.scrollY > 500);
      },
      { passive: true }
    );
  }
})();
