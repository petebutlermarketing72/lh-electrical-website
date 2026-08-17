(function () {
  var picker = document.getElementById("service-picker");
  if (!picker) return;

  var trigger = document.getElementById("service-picker-trigger");
  var label = document.getElementById("service-picker-label");
  var hiddenInput = document.getElementById("service-picker-value");
  var modal = document.getElementById("service-picker-modal");
  var backdrop = document.getElementById("service-picker-backdrop");
  var closeBtn = document.getElementById("service-picker-close");
  var title = document.getElementById("service-picker-title");
  var stepCategory = document.getElementById("service-picker-step-category");
  var stepServices = document.getElementById("service-picker-step-services");
  var backBtn = document.getElementById("service-picker-back");
  var categoryButtons = picker.querySelectorAll(".service-picker-category");
  var options = picker.querySelectorAll(".service-picker-list .service-picker-option:not(.service-picker-category)");
  if (!trigger || !modal || !hiddenInput) return;

  // Move the modal to the end of <body> so it can never get trapped behind a
  // stacking-context-creating ancestor (transforms, filters, etc.) and always
  // overlays every other component on the page.
  if (modal.parentNode !== document.body) {
    document.body.appendChild(modal);
  }

  function showCategoryStep() {
    if (!stepCategory || !stepServices) return;
    stepCategory.classList.remove("is-hidden");
    stepServices.classList.add("is-hidden");
    if (title) title.textContent = "What do you need help with?";
    if (backBtn) backBtn.blur();
  }

  function showServicesStep() {
    if (!stepCategory || !stepServices) return;
    stepCategory.classList.add("is-hidden");
    stepServices.classList.remove("is-hidden");
    if (title) title.textContent = "Choose a service";
  }

  function openPicker() {
    modal.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    showCategoryStep();
  }

  function closePicker() {
    modal.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  trigger.addEventListener("click", openPicker);
  if (closeBtn) closeBtn.addEventListener("click", closePicker);
  if (backdrop) backdrop.addEventListener("click", closePicker);
  if (backBtn) backBtn.addEventListener("click", showCategoryStep);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closePicker();
  });

  categoryButtons.forEach(function (btn) {
    btn.addEventListener("click", showServicesStep);
  });

  options.forEach(function (option) {
    option.addEventListener("click", function () {
      var value = option.getAttribute("data-value");
      hiddenInput.value = value;
      label.textContent = value;
      trigger.classList.add("has-value");
      options.forEach(function (o) { o.classList.remove("is-selected"); });
      option.classList.add("is-selected");
      closePicker();
    });
  });
})();
