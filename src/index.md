---
layout: base.njk
title: Electrician Lewes East Sussex | 15 Yrs Exp. | LH Electrical
description: NAPIT-certified electrician in Lewes, East Sussex with 15 years' experience. Trusted for solar, EV chargers, lighting, testing and more. Get your free no-obligation quote today.
schema:
  - "@context": "https://schema.org"
    "@type": "Electrician"
    "@id": "https://lhelectrical.co.uk/#business"
    name: "LH Electrical (South East) Ltd"
    url: "https://lhelectrical.co.uk/"
    telephone: "+441273443324"
    email: "info@lhelectrical.co.uk"
    image: "https://lhelectrical.co.uk/images/hero/homepage-hero-consumer-unit.jpg"
    logo: "https://lhelectrical.co.uk/images/brand/favicon.png"
    address:
      "@type": "PostalAddress"
      streetAddress: "Cowlease Farm, North End Lane"
      addressLocality: "Lewes"
      addressRegion: "East Sussex"
      postalCode: "BN8 5TE"
      addressCountry: "GB"
    openingHoursSpecification:
      - "@type": "OpeningHoursSpecification"
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        opens: "08:00"
        closes: "17:00"
    areaServed: ["Lewes", "Ringmer", "Uckfield", "Hailsham", "Peacehaven", "Seaford", "East Sussex"]
    sameAs:
      - "https://www.facebook.com/lhelectricalsussex"
      - "https://uk.trustpilot.com/review/lhelectrical.co.uk"
    aggregateRating:
      "@type": "AggregateRating"
      ratingValue: "5.0"
      reviewCount: "24"
hideCtaBand: true
---

<div class="hero-fold">
<section class="svc-hero has-bleed-graphic">
  <div class="hero-bleed-photo">
    <img src="/images/hero/homepage-hero-consumer-unit.jpg" alt="Modern FuseBox consumer unit and surge protection device installed by LH Electrical">
  </div>
  {% heroCircuit %}
  <div class="wrap svc-hero-freeform is-photo-bleed">
    <div class="svc-hero-copy">
      <div class="hero-rating-badge">
        <span class="hero-review-icon-wrap">
          <span class="hero-review-icon-slide is-active">
            <svg viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.9-2.26 5.36-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          </span>
          <span class="hero-review-icon-slide">
            <svg viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77 5.82 21 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>
          </span>
        </span>
        <span class="hero-review-text-wrap">
          <span class="hero-review-text-slide is-active">{{ site.reviewRating }} <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span></span>
          <span class="hero-review-text-slide">{{ site.trustpilotRating }} <span class="stars"><span class="star-full">&#9733;&#9733;&#9733;&#9733;</span><span class="star-half">&#9733;</span></span></span>
        </span>
      </div>
      <h1 class="svc-display">Your Trusted <span class="tint">Electrician in Lewes.</span></h1>
      <p class="svc-hero-intro">LH Electrical (South East) Ltd is a trusted electrician in Lewes with 15+ years of experience in domestic, commercial, solar, and EV installations across East Sussex.</p>
      <form class="quote-bar" action="/contact/" method="GET">
        <div class="service-picker" id="service-picker">
          <button type="button" class="service-picker-trigger" id="service-picker-trigger" aria-haspopup="dialog" aria-expanded="false">
            <span id="service-picker-label">I need help with...</span>
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <input type="hidden" name="service" id="service-picker-value" value="">
          <div class="service-picker-modal" id="service-picker-modal">
            <div class="service-picker-backdrop" id="service-picker-backdrop"></div>
            <div class="service-picker-panel" role="dialog" aria-label="Choose a service">
              <div class="service-picker-panel-header">
                <span id="service-picker-title">What do you need help with?</span>
                <button type="button" class="service-picker-close" id="service-picker-close" aria-label="Close">&times;</button>
              </div>

              <div class="service-picker-step" id="service-picker-step-services">
                <ul class="service-picker-list">
                  {%- for s in site.services -%}
                  <li>
                    <button type="button" class="service-picker-option" data-value="{{ s.label }}">
                      <span class="service-picker-option-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg></span>
                      <span class="service-picker-option-label">{{ s.label }}</span>
                      <svg class="service-picker-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polyline points="20 6 9 17 4 12"/></svg>
                    </button>
                  </li>
                  {%- endfor %}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <input type="text" name="postcode" placeholder="Enter your postcode" aria-label="Postcode">
        <button class="btn btn-quote" type="submit">Get in Touch</button>
      </form>
      <p class="quote-bar-note"><span id="quote-typewriter"></span><span class="typewriter-cursor">&#124;</span></p>
    </div>
  </div>

  <div class="svc-marquee" aria-hidden="true">
    <div class="svc-marquee-track">
      <div class="svc-marquee-group">
        <span class="svc-marquee-item">{{ site.phone }}</span>
        <span class="svc-marquee-item">NAPIT Registered</span>
        <span class="svc-marquee-item">MCS Certified</span>
        <span class="svc-marquee-item">Free Written Quotes</span>
        <span class="svc-marquee-item">15+ Years' Experience</span>
        <span class="svc-marquee-item">Family Run</span>
      </div>
      <div class="svc-marquee-group">
        <span class="svc-marquee-item">{{ site.phone }}</span>
        <span class="svc-marquee-item">NAPIT Registered</span>
        <span class="svc-marquee-item">MCS Certified</span>
        <span class="svc-marquee-item">Free Written Quotes</span>
        <span class="svc-marquee-item">15+ Years' Experience</span>
        <span class="svc-marquee-item">Family Run</span>
      </div>
    </div>
  </div>
</section>
</div>

<section class="home-stats-band svc-pad-sm">
  <div class="wrap">
    <ul class="about-stats home-stats">
      <li><span class="stat-num" data-counter-target="15" data-counter-suffix="+">0</span><span class="stat-label">Years Trading</span></li>
      <li><span class="stat-num" data-counter-target="{{ site.reviewRating }}" data-counter-decimals="1" data-counter-suffix="&#9733;">0</span><span class="stat-label">Google Rating</span></li>
      <li><span class="stat-num" data-counter-target="{{ site.reviewCount }}">0</span><span class="stat-label">Google Reviews</span></li>
      <li><span class="stat-num" data-counter-target="3">0</span><span class="stat-label">Team Members</span></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="wrap" style="max-width:980px;">
    <div style="text-align:center;"><span class="svc-eyebrow">What We Do</span></div>
    <div class="split-section" style="margin-top:40px; gap:58px;">
      <div class="hero-visual-card is-on-light reveal">
        <span class="soft-shape hero-shape-1" aria-hidden="true"></span>
        <span class="soft-shape hero-shape-2" aria-hidden="true"></span>
        <span class="soft-shape hero-shape-3" aria-hidden="true"></span>
        <div class="hero-visual-frame">
          <div class="hero-visual-carousel">
            <img class="hero-illustration-slide is-active" src="/images/services/domestic/domestic-kitchen-pendant-lighting.jpg" alt="Recent domestic electrical work by LH Electrical in East Sussex">
            <img class="hero-illustration-slide" src="/images/services/ev-chargers/ev-chargers-driveway-installation.jpg" alt="EV charger installation by LH Electrical in East Sussex">
            <img class="hero-illustration-slide" src="/images/services/solar/solar-panel-roof-installation-east-sussex.jpg" alt="Solar panel installation by LH Electrical in East Sussex">
          </div>
        </div>
        <div class="hero-stat-float">
          <span class="stat-num">15+</span>
          <span class="stat-label">Years<br>Experience</span>
        </div>
        <div class="hero-quote-float">
          <div class="hero-quote-top">
            <svg viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.9-2.26 5.36-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
            <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
          <p>&ldquo;Efficient, friendly and businesslike.&rdquo;</p>
          <cite>Colin Wibley, Google</cite>
        </div>
      </div>
      <div class="split-content reveal reveal-delay-2">
        <h2 class="svc-display" style="margin-bottom:16px;">Complete Electrical <span class="tint">Solutions.</span></h2>
        <p>With over 15 years of experience, LH Electrical provides professional, fully certified electrical services to homeowners, landlords, commercial clients, and contractors across East Sussex. From lighting upgrades to full-scale installations, we deliver safe, compliant work with minimal disruption.</p>
        <p>We're a trusted electrical contractor based in Lewes, fully insured and NAPIT-registered, ensuring every job meets the latest UK wiring regulations.</p>
        <p>Whether it's a single fault or a full rewire, you deal with the people who actually do the work &ndash; no call centres, no faceless bureaucracy, just straightforward service and honest pricing.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2 style="text-align:center; text-transform:uppercase;">Electrical Services</h2>
    <p class="services-intro">Everything from a single fault to a full rewire, carried out by NAPIT-registered electricians.</p>
    <ul class="showcase-grid" style="margin-top:44px;">
      <li class="reveal">
        <a class="showcase-card" href="/electrical-services/domestic/">
          <div class="showcase-media-pad">
            <div class="showcase-media-frame">
              <div class="showcase-media-inner">
                <img src="/images/services/domestic/domestic-kitchen-pendant-lighting.jpg" alt="Kitchen extension pendant lighting installed by LH Electrical" loading="lazy">
              </div>
            </div>
          </div>
          <div class="showcase-text-row">
            <div class="showcase-text-inner">
              <div class="showcase-title-row">
                <span class="showcase-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9"/></svg></span>
                <h3>Domestic</h3>
              </div>
              <p>Rewires, fault-finding and everyday electrical work for homeowners.</p>
            </div>
          </div>
        </a>
      </li>
      <li class="reveal reveal-delay-1">
        <a class="showcase-card" href="/electrical-services/landlords/">
          <div class="showcase-media-pad">
            <div class="showcase-media-frame">
              <div class="showcase-media-inner">
                <img src="/images/services/landlords/landlord-eicr-testing-checklist.jpg" alt="LH Electrical carrying out an EICR test and completing a landlord compliance checklist" loading="lazy">
              </div>
            </div>
          </div>
          <div class="showcase-text-row">
            <div class="showcase-text-inner">
              <div class="showcase-title-row">
                <span class="showcase-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"/><path d="M14 3v5h5"/><path d="M9.5 14.5l1.8 1.8L15 12.5"/></svg></span>
                <h3>Landlords &amp; EICR</h3>
              </div>
              <p>Compliance certificates and remedial work for rental properties.</p>
            </div>
          </div>
        </a>
      </li>
      <li class="reveal reveal-delay-2">
        <a class="showcase-card" href="/electrical-services/commercial-electrician/">
          <div class="showcase-media-pad">
            <div class="showcase-media-frame">
              <div class="showcase-media-inner">
                <img src="/images/services/commercial-electrician/commercial-tablet-panel-inspection.jpg" alt="LH Electrical carrying out a commercial electrical inspection" loading="lazy">
              </div>
            </div>
          </div>
          <div class="showcase-text-row">
            <div class="showcase-text-inner">
              <div class="showcase-title-row">
                <span class="showcase-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/></svg></span>
                <h3>Commercial</h3>
              </div>
              <p>Installations and periodic inspections for local businesses.</p>
            </div>
          </div>
        </a>
      </li>
      <li class="reveal reveal-delay-3">
        <a class="showcase-card showcase-card-cta" href="/electrical-services/">
          <div class="showcase-cta-body">
            <h3>View All Services</h3>
            <span class="showcase-cta-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>

<section class="section" style="padding-top:0;">
  <div class="wrap">
    <div style="text-align:center;"><span class="svc-eyebrow">Renewables</span></div>
    <div class="promo-grid">
      <a class="promo-panel" href="/electric-vehicle-chargers/">
        <img src="/images/services/ev-chargers/ev-chargers-driveway-installation.jpg" alt="EV charger installation by LH Electrical">
        <div class="promo-panel-body">
          <span class="promo-panel-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8V4M11 8V4"/><rect x="5" y="8" width="8" height="7" rx="1"/><path d="M9 15v2a3 3 0 003 3h1a3 3 0 003-3v-1h1a1 1 0 001-1v-2h-2"/></svg></span>
          <h3>EV Chargers</h3>
          <p>MCS-certified home and commercial charge points.</p>
          <span class="promo-panel-cta">Explore EV Chargers <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </div>
      </a>
      <a class="promo-panel" href="/solar-panels/">
        <img src="/images/services/solar/solar-panel-roof-installation-east-sussex.jpg" alt="LH Electrical installer fitting solar panels on a pitched roof in East Sussex">
        <div class="promo-panel-body">
          <span class="promo-panel-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg></span>
          <h3>Solar Panels &amp; Storage</h3>
          <p>Solar PV and battery storage, installed to MCS standards.</p>
          <span class="promo-panel-cta">Explore Solar Panels <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="svc-light svc-pad">
  <div class="wrap svc-center">
    <span class="svc-eyebrow">Standards &amp; Certifications</span>
    <h2 class="svc-display svc-h2" style="color:var(--navy-dark);">Why You Can Trust Us</h2>
    <p class="svc-lede">Our accreditations aren't decorative &ndash; they're the standards we're held to on every job.</p>
    <div class="trust-cards">
      <div class="trust-card">
        <div class="trust-card-icon"><img src="/images/logos/napit-logo.png" alt="NAPIT"></div>
        <h3>NAPIT Registered</h3>
        <p>Every notifiable job is self-certified and registered with building control, so your paperwork is in order from day one.</p>
        <a href="https://search.napit.org.uk/member/23182/lh-electrical-south-east-limited" target="_blank" rel="noopener">View NAPIT Profile &rarr;</a>
      </div>
      <div class="trust-card">
        <div class="trust-card-icon"><img src="/images/logos/mcs-logo.png" alt="MCS"></div>
        <h3>MCS Certified</h3>
        <p>Independently assessed for EV charger and solar PV installation, so you're eligible for schemes like the Smart Export Guarantee.</p>
        <a href="https://mcscertified.com/" target="_blank" rel="noopener">About MCS Certification &rarr;</a>
      </div>
      <div class="trust-card">
        <div class="trust-card-icon"><img src="/images/logos/recc-logo.png" alt="RECC"></div>
        <h3>Fully Insured &amp; RECC Certified</h3>
        <p>Fully insured on every job, and RECC certified for renewable energy consumer protection standards.</p>
        <a href="https://www.recc.org.uk/scheme/members/00078267-lh-electrical-south-east-limited" target="_blank" rel="noopener">View RECC Profile &rarr;</a>
      </div>
    </div>
  </div>
</section>

<section class="section section-alt reviews-band">
  <div class="wrap">
    {% include "reviews-carousel.liquid" %}
  </div>
</section>

<section class="feature-band svc-dark">
  <div class="wrap svc-center">
    <span class="svc-eyebrow">How We Work</span>
    <h2 class="svc-display" style="margin-top:14px;">What We <span class="tint">Stand For</span></h2>
    <ul class="feature-grid feature-grid-4" style="margin-top:44px;">
      <li class="feature-item reveal reveal-delay-1">
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 12l-8.6 8.6a2 2 0 01-2.8 0l-6.2-6.2a2 2 0 010-2.8L11.6 3H20a1 1 0 011 1v8z"/><circle cx="15.5" cy="8.5" r="1.5"/></svg></div>
        <h3>Honesty First</h3>
        <p>We'll tell you straight if a job isn't worth doing, rather than talking you into work you don't need.</p>
      </li>
      <li class="feature-item reveal reveal-delay-2">
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 20l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg></div>
        <h3>No Jargon</h3>
        <p>Clear, honest advice you can actually understand &ndash; no technical jargon, no sales pressure.</p>
      </li>
      <li class="feature-item reveal reveal-delay-3">
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
        <h3>You Deal With Real People</h3>
        <p>No call centres, no being passed around. You speak to the electrician doing your job.</p>
      </li>
      <li class="feature-item reveal reveal-delay-4">
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div>
        <h3>Respect For Your Time</h3>
        <p>Fixed written quotes and realistic timelines &ndash; and we stick to them.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2 style="text-align:center">Areas We Cover</h2>
    <p style="text-align:center; max-width:560px; margin:0 auto;">Based in Lewes, we work across East Sussex including Ringmer, Uckfield, Hailsham, Peacehaven and Seaford.</p>
    <ul class="services-grid" style="margin-top:32px;">
      <li class="location-item"><div class="icon-badge icon-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.3"/></svg></div><a href="/electrician-lewes/">Lewes</a></li>
      <li class="location-item"><div class="icon-badge icon-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.3"/></svg></div><a href="/electrician-in-ringmer/">Ringmer</a></li>
      <li class="location-item"><div class="icon-badge icon-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.3"/></svg></div><a href="/electrician-in-uckfield/">Uckfield</a></li>
      <li class="location-item"><div class="icon-badge icon-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.3"/></svg></div><a href="/electrician-hailsham/">Hailsham</a></li>
      <li class="location-item"><div class="icon-badge icon-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.3"/></svg></div><a href="/electrician-peacehaven/">Peacehaven</a></li>
      <li class="location-item"><div class="icon-badge icon-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.3"/></svg></div><a href="/electrician-seaford/">Seaford</a></li>
    </ul>
  </div>
</section>

<section class="section home-blog-band">
  <div class="wrap">
    <div class="home-blog-head">
      <span class="svc-eyebrow">From The Blog</span>
      <h2 style="text-align:center; margin-top:14px;">Guides &amp; Advice</h2>
    </div>
    <div class="blog-grid">{%- for post in collections.post reversed limit:3 -%}
      <a class="blog-card" href="{{ post.url }}">
        <div class="blog-card-img"><img src="{{ post.data.image }}" alt="{{ post.data.imageAlt }}" loading="lazy"></div>
        <div class="blog-card-body">
          <span class="blog-card-cat">{{ post.data.category }}</span>
          <h3>{{ post.data.heading }}</h3>
        </div>
      </a>
    {%- endfor %}</div>
    <div class="home-blog-cta">
      <a class="btn btn-outline-dark btn-pill" href="/blog/">View All Posts</a>
    </div>
  </div>
</section>

<section class="svc-cta-band is-dark">
  <div class="wrap">
    <h2 class="svc-display svc-h2">Ready When You Are</h2>
    <p>Free survey, fixed written quote, no obligation. Call us or send over the details and we&rsquo;ll come back to you.</p>
    <div class="svc-actions" style="justify-content:center;">
      <a class="btn btn-primary btn-pill-lg" href="{{ site.phoneHref }}">Call {{ site.phone }}</a>
      <a class="btn btn-outline btn-pill-lg" href="/contact/">Get a Free Quote</a>
    </div>
  </div>
</section>
