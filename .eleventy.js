require("dotenv").config();
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary("md", markdownIt({ html: true, breaks: false, linkify: true }));

  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });

  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("dateISO", (d) => new Date(d).toISOString().slice(0, 10));

  // Reusable content blocks shared across service pages (and available to any
  // page/layout in either Liquid or Nunjucks) — trust badges, "why choose us",
  // customer reviews and the Lewes area map. Keeping these as shortcodes means
  // the same markup/copy lives in one place instead of being duplicated in
  // every service page.

  // Decorative animated circuit-trace layer for the top of service pages.
  // Pure inline SVG + CSS animation — no images, no JS, no network request.
  // Roughly 1.5KB, animates on the compositor, and is disabled entirely for
  // anyone who has "reduce motion" switched on.
  eleventyConfig.addShortcode("heroCircuit", function () {
    return `<svg class="svc-circuit" viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <g class="svc-circuit-traces">
    <path d="M-20 90 H190 L250 150 H430 L490 90 H760 L820 150 H1220"/>
    <path d="M-20 250 H120 L180 190 H540 L600 250 H900 L960 190 H1220"/>
    <path d="M-20 400 H300 L360 460 H620 L680 400 H1010 L1070 460 H1220"/>
    <path d="M-20 540 H240 L300 480 H560 L620 540 H880 L940 480 H1220"/>
    <path d="M150 -20 V90 M430 150 V300 M760 90 V-20 M600 250 V400 M960 190 V60 M300 460 V620 M1070 460 V560"/>
  </g>
  <g class="svc-circuit-nodes">
    <circle cx="190" cy="90" r="5"/><circle cx="490" cy="90" r="5"/><circle cx="820" cy="150" r="5"/>
    <circle cx="180" cy="190" r="5"/><circle cx="600" cy="250" r="5"/><circle cx="960" cy="190" r="5"/>
    <circle cx="360" cy="460" r="5"/><circle cx="680" cy="400" r="5"/><circle cx="1070" cy="460" r="5"/>
    <circle cx="300" cy="480" r="5"/><circle cx="620" cy="540" r="5"/><circle cx="940" cy="480" r="5"/>
  </g>
</svg>`;
  });

  eleventyConfig.addShortcode("whyChooseLH", function () {
    return `<section class="feature-band">
  <div class="wrap">
    <h2>Why Choose LH Electrical</h2>
    <ul class="feature-grid">
      <li class="feature-item reveal reveal-delay-1">
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h3>Fully Qualified &amp; NAPIT-Registered</h3>
        <p>Every electrician on the team is fully qualified and registered, so your work is compliant from day one.</p>
      </li>
      <li class="feature-item reveal reveal-delay-2">
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h6M9 12h6M9 16h3"/></svg></div>
        <h3>Part P Compliant</h3>
        <p>All notifiable work is certified and registered with building control on your behalf.</p>
      </li>
      <li class="feature-item reveal reveal-delay-3">
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.3"/></svg></div>
        <h3>Local East Sussex Experts</h3>
        <p>Based in Lewes and working across East Sussex &ndash; we know the area and its properties well.</p>
      </li>
      <li class="feature-item reveal reveal-delay-4">
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 12l-8.6 8.6a2 2 0 01-2.8 0l-6.2-6.2a2 2 0 010-2.8L11.6 3H20a1 1 0 011 1v8z"/><circle cx="15.5" cy="8.5" r="1.5"/></svg></div>
        <h3>Transparent Pricing</h3>
        <p>Fixed written quotes agreed before we start &ndash; no hidden costs or surprises on the invoice.</p>
      </li>
      <li class="feature-item reveal reveal-delay-5">
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 .9-5.2 4.9 1.4 6.9L12 17.8 5.8 21.2l1.4-6.9L2 9.4l7-.9L12 2z"/></svg></div>
        <h3>Trusted Reviews</h3>
        <p>Rated Excellent on Trustpilot and highly reviewed on Google by customers across the area.</p>
      </li>
      <li class="feature-item reveal reveal-delay-6">
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l4-8 10-10 4 4-10 10-8 4z"/><path d="M14 6l4 4"/></svg></div>
        <h3>Clean, Tidy Workmanship</h3>
        <p>We treat every property with care and always leave the work area as tidy as we found it.</p>
      </li>
    </ul>
  </div>
</section>`;
  });

  eleventyConfig.addShortcode("trustBadges", function () {
    return `<section class="section">
  <div class="wrap">
    <h2 style="text-align:center">Trusted Electrician In East Sussex</h2>
    <p style="text-align:center; max-width:640px; margin:0 auto;">LH Electrical is a fully insured and reputable company with fully qualified electricians. We are also part of a government recognised scheme for compliance of our work and business practices.</p>
    <div class="cert-logos-row reveal">
      <img src="/images/logos/napit-logo.png" alt="NAPIT registered">
      <img src="/images/logos/mcs-logo.png" alt="MCS certified">
      <img src="/images/logos/recc-logo.png" alt="Renewable Energy Consumer Code member">
    </div>
    <div class="cert-callout reveal">
      <p class="lead-in">Ensure your solar PV installation meets the highest industry standards with MCS certification.</p>
      <p>As an MCS-certified installer, we guarantee quality, compliance, and eligibility for government incentives like the Feed-in Tariff (FiT) and Smart Export Guarantee (SEG).</p>
      <a class="btn btn-outline-dark" href="/solar-panels/">Learn more about MCS certification and its benefits</a>
    </div>
  </div>
</section>`;
  });

  eleventyConfig.addShortcode("customerReviews", function () {
    return `<section class="section section-alt">
  <div class="wrap">
    <h2 style="text-align:center">Customer Reviews</h2>
    <div class="reviews-quote-grid">
      <blockquote class="review-quote reveal reveal-delay-1">
        <p>&ldquo;Luke and his team are efficient, friendly and businesslike.&rdquo;</p>
        <cite>Colin Wibley</cite>
      </blockquote>
      <blockquote class="review-quote reveal reveal-delay-2">
        <p><strong>All round excellence</strong> &ndash; Great service, Luke Hartery is prompt, keeps to his timetable, his work is excellent and he left my house clean and tidy. All for a very reasonable fee. I would always go to LH Electrics first and wholeheartedly recommend him.</p>
        <cite>Jean Gould</cite>
      </blockquote>
      <blockquote class="review-quote reveal reveal-delay-3">
        <p><strong>Brilliant firm to deal with</strong> &ndash; Always answer your emails promptly. Come when they say. Always polite and friendly. I could recommend them to anybody.</p>
        <cite>Miss E Tattam</cite>
      </blockquote>
    </div>
    <p style="text-align:center;"><a class="btn btn-outline" href="/reviews/">Read more reviews</a></p>
  </div>
</section>`;
  });

  eleventyConfig.addShortcode("areaMap", function (heading, intro) {
    const h = heading || "Based in Lewes &ndash; Serving East Sussex";
    const p = intro || "We regularly work with homeowners, landlords and businesses in Lewes, Brighton, Uckfield, Ringmer, Seaford, Eastbourne, and across East Sussex.";
    return `<section class="section section-alt">
  <div class="wrap">
    <div class="split-section split-reverse">
      <div class="split-content reveal">
        <h2>${h}</h2>
        <p>${p}</p>
        <p>Planning a job or need urgent support? <a href="/contact/">Contact us</a> to speak with a qualified electrician.</p>
        <a class="btn btn-primary" href="tel:01273443324">01273 443324</a>
      </div>
      <iframe class="map-embed reveal reveal-delay-2" loading="lazy" src="https://www.google.com/maps?q=Lewes,+East+Sussex&output=embed" title="Map of Lewes, East Sussex"></iframe>
    </div>
  </div>
</section>`;
  });

  // ---------------------------------------------------------------------
  // Lean service-page template pieces. These four are designed to be
  // dropped, unmodified, onto the bottom of any /electrical-services/*.md
  // page so new service pages can be built at speed: hero + "what's
  // included" + FAQ stay bespoke per page, everything below is shared.
  // ---------------------------------------------------------------------

  // Sidebar cards for the "What's Included" section — white/gradient cards
  // on a pale background, paired together wherever that section appears.
  eleventyConfig.addShortcode("svcWhyChooseCard", function () {
    return `<div class="svc-info-card">
  <span class="svc-info-card-eyebrow">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77 5.82 21 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>
    Why Choose LH Electrical
  </span>
  <ul class="svc-info-card-list">
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5L9.5 18L20 6"/></svg> Free written, no-obligation quotes</li>
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5L9.5 18L20 6"/></svg> Direct contact with your electrician</li>
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5L9.5 18L20 6"/></svg> Tidy, punctual, professional service</li>
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5L9.5 18L20 6"/></svg> Fully insured &amp; certified work</li>
  </ul>
</div>`;
  });

  eleventyConfig.addShortcode("svcQualificationsCard", function () {
    return `<div class="svc-info-card svc-qual-card">
  <p class="svc-qual-text">Fully insured, fully qualified, and part of government-recognised schemes for compliance of our work and business practices.</p>
  <div class="svc-qual-logos">
    <span class="svc-qual-logo-tile"><img src="/images/logos/napit-logo.png" alt="NAPIT registered electrical contractor" loading="lazy"></span>
    <span class="svc-qual-logo-tile"><img src="/images/logos/mcs-logo.png" alt="MCS certified installer" loading="lazy"></span>
    <span class="svc-qual-logo-tile"><img src="/images/logos/recc-logo.png" alt="Renewable Energy Consumer Code member" loading="lazy"></span>
  </div>
</div>`;
  });

  eleventyConfig.addShortcode("svcQuoteCard", function (serviceLabel) {
    const label = serviceLabel || "project";
    return `<div class="svc-quote-card">
  <h3>Get Your Free Quote</h3>
  <p>Speak directly with Luke and the team about your ${label} needs.</p>
  <a class="btn btn-on-accent btn-pill-lg" href="/contact/">Request Quote &rarr;</a>
</div>`;
  });

  eleventyConfig.addShortcode("svcHowItWorks", function (step3Title, step3Desc) {
    const t3 = step3Title || "Installation &amp; Certification";
    const d3 = step3Desc || "Full BS 7671 compliant work, tested, certified and notified to Building Control where needed.";
    return `<section class="svc-cream svc-pad">
  <div class="wrap">
    <h2 class="svc-display svc-h2" style="text-align:center; margin-bottom:48px;">How It Works</h2>
    <ul class="svc-steps">
      <li class="svc-step reveal reveal-delay-1">
        <div class="svc-step-num">1</div>
        <h3>Free Survey</h3>
        <p>We look at the job in person, or work from your drawings if the site isn't ready yet.</p>
      </li>
      <li class="svc-step reveal reveal-delay-2">
        <div class="svc-step-num">2</div>
        <h3>Fixed Written Quote</h3>
        <p>One clear price agreed before any work starts &ndash; no hidden extras.</p>
      </li>
      <li class="svc-step reveal reveal-delay-3">
        <div class="svc-step-num">3</div>
        <h3>${t3}</h3>
        <p>${d3}</p>
      </li>
    </ul>
  </div>
</section>`;
  });

  eleventyConfig.addShortcode("svcReviews", function () {
    return `<section class="svc-light svc-pad">
  <div class="wrap">
    <div class="svc-center">
      <p class="svc-rating-line is-light">
        <span class="svc-rating-google-icon"><svg viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.9-2.26 5.36-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg></span>
        <strong>Excellent</strong> <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span> Based on 24 Google reviews
      </p>
    </div>
    <div class="svc-review-grid is-light">
      <blockquote class="svc-review reveal reveal-delay-1">
        <div class="svc-review-top"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
        <p>Luke and his team are efficient, friendly and businesslike.</p>
        <div class="svc-review-by"><span class="svc-avatar">C</span><cite>Colin Wibley</cite></div>
      </blockquote>
      <blockquote class="svc-review reveal reveal-delay-2">
        <div class="svc-review-top"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
        <p>Great service, prompt, keeps to his timetable, the work is excellent and he left my house clean and tidy. All for a very reasonable fee. I would always go to LH Electrical first and wholeheartedly recommend them.</p>
        <div class="svc-review-by"><span class="svc-avatar">J</span><cite>Jean Gould</cite></div>
      </blockquote>
      <blockquote class="svc-review reveal reveal-delay-3">
        <div class="svc-review-top"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
        <p>Brilliant firm to deal with. Always answer your emails promptly. Come when they say. Always polite and friendly. I could recommend them to anybody.</p>
        <div class="svc-review-by"><span class="svc-avatar">E</span><cite>Miss E Tattam</cite></div>
      </blockquote>
    </div>
  </div>
</section>`;
  });

  eleventyConfig.addShortcode("svcTrustLogos", function () {
    return `<section class="svc-cream svc-pad-sm">
  <div class="wrap svc-center">
    <p class="svc-trust-intro">Fully insured, fully qualified, and part of government-recognised schemes for compliance of our work and business practices.</p>
    <div class="svc-logos">
      <span class="svc-logo-tile"><img src="/images/logos/napit-logo.png" alt="NAPIT registered electrical contractor"></span>
      <span class="svc-logo-tile"><img src="/images/logos/mcs-logo.png" alt="MCS certified installer"></span>
      <span class="svc-logo-tile"><img src="/images/logos/recc-logo.png" alt="Renewable Energy Consumer Code member"></span>
    </div>
  </div>
</section>`;
  });

  eleventyConfig.addShortcode("svcLocation", function (heading, intro) {
    const h = heading || "Based in Lewes &ndash; Serving East Sussex";
    const p = intro || "We regularly work with homeowners, landlords and businesses in Lewes, Brighton, Uckfield, Ringmer, Seaford, Eastbourne, and across East Sussex.";
    return `<section class="svc-light svc-pad">
  <div class="wrap">
    <div class="split-section split-reverse">
      <div class="split-content reveal">
        <h2 class="svc-display svc-h2">${h}</h2>
        <p class="svc-lede" style="margin-left:0;">${p}</p>
        <p>Planning a job or need urgent support? <a href="/contact/">Contact us</a> to speak with a qualified electrician.</p>
        <a class="btn btn-primary btn-pill-lg" href="tel:01273443324">Call 01273 443324</a>
      </div>
      <iframe class="map-embed reveal reveal-delay-2" loading="lazy" src="https://www.google.com/maps?q=Lewes,+East+Sussex&output=embed" title="Map of Lewes, East Sussex"></iframe>
    </div>
  </div>
</section>`;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
  };
};
