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
      <a class="btn btn-outline-dark" href="/services/solar-panels/">Learn more about MCS certification and its benefits</a>
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

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
  };
};
