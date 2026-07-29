(function () {
  var picker = document.getElementById("service-picker");
  if (!picker) return;

  var trigger = document.getElementById("service-picker-trigger");
  var label = document.getElementById("service-picker-label");
  var hiddenInput = document.getElementById("service-picker-value");
  var modal = document.getElementById("service-picker-modal");
  var backdrop = document.getElementById("service-picker-backdrop");
  var closeBtn = document.getElementById("service-picker-close");
  var options = picker.querySelectorAll(".service-picker-option");
  if (!trigger || !modal || !hiddenInput) return;

  function openPicker() {
    modal.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closePicker() {
    modal.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  trigger.addEventListener("click", openPicker);
  if (closeBtn) closeBtn.addEventListener("click", closePicker);
  if (backdrop) backdrop.addEventListener("click", closePicker);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closePicker();
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
