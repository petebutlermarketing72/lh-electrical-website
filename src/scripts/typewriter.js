(function () {
  var el = document.getElementById("quote-typewriter");
  if (!el) return;

  var phrases = ["Takes 30 seconds", "No obligation", "We'll call you back same day"];
  var phraseIndex = 0;
  var charIndex = 0;
  var typingSpeed = 45;
  var holdTime = 1400;
  var fadeTime = 200;

  function type() {
    var phrase = phrases[phraseIndex];
    if (charIndex <= phrase.length) {
      el.textContent = phrase.slice(0, charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, holdTime);
    }
  }

  function erase() {
    el.style.transition = "opacity " + fadeTime + "ms ease";
    el.style.opacity = "0";
    setTimeout(function () {
      el.textContent = "";
      charIndex = 0;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      el.style.opacity = "1";
      type();
    }, fadeTime);
  }

  type();
})();
