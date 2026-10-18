/* LH Electrical — cookie consent
 *
 * - Nothing optional (analytics/marketing) loads until the visitor clicks Accept.
 * - "Reject" is as easy as "Accept". The choice is remembered for 6 months.
 * - Footer "Cookie settings" button reopens the banner so people can change their mind.
 * - Google Analytics (GA4) loads inside loadMarketing(). To add another tool later
 *   (e.g. Meta Pixel), put its loader there too. It only runs after consent, and is
 *   not loaded on a fresh page load if consent has been withdrawn.
 */
(function () {
  var KEY = 'lh_cookie_consent';
  var MONTHS = 6;
  var banner = null;
  var tab = null;

  function read() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!v || typeof v.marketing !== 'boolean') return null;
      if (Date.now() - v.ts > MONTHS * 30 * 24 * 3600 * 1000) return null;
      return v;
    } catch (e) { return null; }
  }
  function save(marketing) {
    try { localStorage.setItem(KEY, JSON.stringify({ marketing: marketing, ts: Date.now() })); } catch (e) {}
  }

  var marketingLoaded = false;
  function loadMarketing() {
    if (marketingLoaded) return;
    marketingLoaded = true;
    // Google Analytics 4. Only runs after the visitor clicks Accept.
    var GA_ID = 'G-V3GHEQXGTZ';
    var ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(ga);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);

    // Count phone taps and email clicks as events (they appear in GA4 under Events).
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
      if (!a) return;
      var isTel = a.getAttribute('href').indexOf('tel:') === 0;
      window.gtag('event', isTel ? 'phone_click' : 'email_click', { link_url: a.getAttribute('href') });
    });
  }

  function apply(choice) {
    window.lhConsent = { marketing: !!(choice && choice.marketing) };
    if (window.lhConsent.marketing) loadMarketing();
    document.dispatchEvent(new CustomEvent('lh-consent', { detail: window.lhConsent }));
  }

  function buildTab() {
    tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'cc-tab';
    tab.setAttribute('aria-label', 'Cookie settings');
    tab.setAttribute('title', 'Cookie settings');
    tab.hidden = true;
    tab.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-4-4 4 4 0 0 1-4-4 2 2 0 0 1-2-2zM8.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7.5 14.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>';
    tab.addEventListener('click', function () { show(); });
    document.body.appendChild(tab);
  }
  function showTab(on) { if (!tab) buildTab(); tab.hidden = !on; }

  function hide() { if (banner) banner.hidden = true; showTab(true); }

  function build() {
    banner = document.createElement('div');
    banner.className = 'cc-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'cc-title');
    banner.hidden = true;
    banner.innerHTML =
      '<p class="cc-title" id="cc-title">Cookies on LH Electrical</p>' +
      '<p class="cc-text">We use essential cookies to make this site work. With your OK we would also use ' +
      'analytics and marketing cookies to understand how the site is used and to improve our adverts. ' +
      'You can change your mind at any time. <a href="/privacy-policy/#cookies">Read more</a></p>' +
      '<div class="cc-actions">' +
        '<button type="button" class="cc-btn" data-cc="reject">Reject</button>' +
        '<button type="button" class="cc-btn cc-btn-accept" data-cc="accept">Accept</button>' +
      '</div>';
    banner.addEventListener('click', function (e) {
      var t = e.target.closest('[data-cc]');
      if (!t) return;
      var marketing = t.getAttribute('data-cc') === 'accept';
      var wasLoaded = marketingLoaded;
      save(marketing);
      if (wasLoaded && !marketing) { location.reload(); return; }
      apply({ marketing: marketing });
      hide();
    });
    document.body.appendChild(banner);
  }

  function show() {
    if (!banner) build();
    banner.hidden = false;
    showTab(false);
    var b = banner.querySelector('[data-cc="reject"]');
    if (b) b.focus({ preventScroll: true });
  }

  function init() {
    var existing = read();
    apply(existing);
    if (!existing) show(); else showTab(true);
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-cookie-settings]')) { e.preventDefault(); show(); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
