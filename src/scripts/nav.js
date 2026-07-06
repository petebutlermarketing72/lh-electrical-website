(function () {
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

  if (header) {
    window.addEventListener(
      "scroll",
      function () {
        header.classList.toggle("is-scrolled", window.scrollY > 40);
      },
      { passive: true }
    );
  }
})();
