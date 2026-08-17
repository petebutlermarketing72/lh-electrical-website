---
layout: base.njk
title: Electrician Lewes East Sussex | 15 Yrs Exp. | LH Electrical
description: NAPIT-certified electrician in Lewes, East Sussex with 15 years' experience. Trusted for solar, EV chargers, lighting, testing and more. Get your free no-obligation quote today.
---

<div class="hero-fold">
<section class="svc-hero has-bleed-graphic">
  <div class="wrap svc-hero-freeform">
    <div class="svc-hero-copy">
      <div class="infographic-tags">
        <span class="infographic-tag">NAPIT-Registered</span>
        <span class="infographic-tag">15+ Years' Experience</span>
        <a class="infographic-tag" href="{{ site.trustpilotLink }}" target="_blank" rel="noopener"><span class="stars">&#9733;</span>{{ site.trustpilotRating }} Trustpilot</a>
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

              <div class="service-picker-step" id="service-picker-step-category">
                <ul class="service-picker-list">
                  <li>
                    <button type="button" class="service-picker-option service-picker-category" data-category="domestic">
                      <span class="service-picker-option-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9"/></svg></span>
                      <span class="service-picker-option-label">Domestic</span>
                      <svg class="service-picker-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="service-picker-option service-picker-category" data-category="commercial">
                      <span class="service-picker-option-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/></svg></span>
                      <span class="service-picker-option-label">Commercial</span>
                      <svg class="service-picker-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                  </li>
                </ul>
              </div>

              <div class="service-picker-step is-hidden" id="service-picker-step-services">
                <button type="button" class="service-picker-back" id="service-picker-back">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><polyline points="15 18 9 12 15 6"/></svg>
                  Back
                </button>
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
        <button class="btn btn-primary" type="submit">Get in Touch</button>
      </form>
      <p class="quote-bar-note"><span id="quote-typewriter"></span><span class="typewriter-cursor">&#124;</span></p>
    </div>
    <div class="hero-bleed-graphic">
      <img src="/images/illustrations/hero-solar-icon.svg" alt="Solar panel installation icon">
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

<section class="svc-cream svc-pad-sm">
  <div class="wrap">
    <ul class="about-stats home-stats">
      <li><span class="stat-num" data-counter-target="15" data-counter-suffix="+">0</span><span class="stat-label">Years Trading</span></li>
      <li><span class="stat-num" data-counter-target="{{ site.reviewRating }}" data-counter-decimals="1" data-counter-suffix="&#9733;">0</span><span class="stat-label">Google Rating</span></li>
      <li><span class="stat-num" data-counter-target="{{ site.reviewCount }}">0</span><span class="stat-label">Google Reviews</span></li>
      <li><span class="stat-num" data-counter-target="3">0</span><span class="stat-label">Team Members</span></li>
    </ul>
  </div>
</section>

<section class="section section-alt">
  <div class="wrap">
    <span class="svc-eyebrow">What We Do</span>
    <h2 class="svc-display" style="color:var(--navy-dark); margin-top:14px;">Complete Electrical <span class="ghost">Solutions.</span></h2>
    <div class="split-section" style="margin-top:40px;">
      <div class="split-image reveal">
        <img src="/images/services/domestic/domestic-landing-lighting.jpg" alt="LH Electrical carrying out electrical work in East Sussex">
      </div>
      <div class="split-content reveal reveal-delay-2">
        <p>With over 15 years of experience, LH Electrical provides professional, fully certified electrical services to homeowners, landlords, commercial clients, and contractors across East Sussex. From lighting upgrades to full-scale installations, we deliver safe, compliant work with minimal disruption.</p>
        <p>We're a trusted electrical contractor based in Lewes, fully insured and NAPIT-registered, ensuring every job meets the latest UK wiring regulations.</p>
        <p>Whether it's a single fault or a full rewire, you deal with the people who actually do the work &ndash; no call centres, no faceless bureaucracy, just straightforward service and honest pricing.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2 style="text-align:center">Our Services</h2>
    <p style="text-align:center; max-width:560px; margin:0 auto;">Everything from a single fault to a full rewire, carried out by NAPIT-registered electricians.</p>
    <div class="trust-cards" style="margin-top:44px;">
      <div class="trust-card">
        <div class="trust-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M3 11l9-7 9 7"/><path d="M5 10v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9"/></svg></div>
        <h3>Domestic</h3>
        <p>Rewires, fault-finding and everyday electrical work for homeowners.</p>
        <a href="/electrical-services/domestic/">Learn More &rarr;</a>
      </div>
      <div class="trust-card">
        <div class="trust-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/></svg></div>
        <h3>Commercial</h3>
        <p>Installations and periodic inspections for local businesses.</p>
        <a href="/electrical-services/commercial-electrician/">Learn More &rarr;</a>
      </div>
      <div class="trust-card">
        <div class="trust-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"/><path d="M14 3v5h5"/><path d="M9.5 14.5l1.8 1.8L15 12.5"/></svg></div>
        <h3>Landlords &amp; EICR</h3>
        <p>Compliance certificates and remedial work for rental properties.</p>
        <a href="/electrical-services/landlords/">Learn More &rarr;</a>
      </div>
      <div class="trust-card">
        <div class="trust-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg></div>
        <h3>House Rewire</h3>
        <p>Full and partial rewires, planned around your home.</p>
        <a href="/electrical-services/house-rewire/">Learn More &rarr;</a>
      </div>
      <div class="trust-card">
        <div class="trust-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7v4M12 7v4M16 7v4M8 15h.01M12 15h.01M16 15h.01"/></svg></div>
        <h3>Fuse Board Upgrades</h3>
        <p>Modern consumer units fitted to current regulations.</p>
        <a href="/electrical-services/fuse-board-upgrades/">Learn More &rarr;</a>
      </div>
      <div class="trust-card">
        <div class="trust-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M7 8V4M11 8V4"/><rect x="5" y="8" width="8" height="7" rx="1"/><path d="M9 15v2a3 3 0 003 3h1a3 3 0 003-3v-1h1a1 1 0 001-1v-2h-2"/></svg></div>
        <h3>EV Chargers</h3>
        <p>MCS-certified home and commercial charger installs.</p>
        <a href="/electric-vehicle-chargers/">Learn More &rarr;</a>
      </div>
      <div class="trust-card">
        <div class="trust-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg></div>
        <h3>Solar Panels</h3>
        <p>Solar PV and battery storage, installed to MCS standards.</p>
        <a href="/solar-panels/">Learn More &rarr;</a>
      </div>
    </div>
  </div>
</section>

<section class="svc-dark svc-pad">
  <div class="wrap">
    <div class="svc-offer-head reveal">
      <span class="svc-eyebrow">Recent Work</span>
      <h2 class="svc-display svc-h2" style="margin-top:14px;">Every Job, <span class="tint">Done Properly.</span></h2>
      <p class="svc-offer-lede">A selection of recent work across Lewes and East Sussex &ndash; domestic, commercial, and everything in between.</p>
    </div>
  </div>

  <div class="svc-carousel svc-carousel-full reveal" data-svc-carousel role="group" aria-label="Recent work by LH Electrical">
    <div class="svc-carousel-viewport">
      <div class="svc-carousel-track">
        <figure class="svc-slide">
          <img src="/images/services/domestic/domestic-bathroom-lighting.jpg" alt="Bathroom lighting installation by LH Electrical" draggable="false">
          <figcaption>Bathroom Lighting</figcaption>
        </figure>
        <figure class="svc-slide">
          <img src="/images/services/domestic/domestic-kitchen-lighting.jpg" alt="Kitchen lighting installation by LH Electrical" draggable="false">
          <figcaption>Kitchen Lighting</figcaption>
        </figure>
        <figure class="svc-slide">
          <img src="/images/blog/house-rewiring.jpg" alt="House rewiring work by LH Electrical" draggable="false">
          <figcaption>House Rewire</figcaption>
        </figure>
        <figure class="svc-slide">
          <img src="/images/blog/consumer-unit-replacement-east-sussex.jpg" alt="Consumer unit replacement by LH Electrical" draggable="false">
          <figcaption>Consumer Unit Upgrade</figcaption>
        </figure>
        <figure class="svc-slide">
          <img src="/images/blog/installation-solar-panels-east-sussex.jpg" alt="Solar panel installation by LH Electrical" draggable="false">
          <figcaption>Solar Installation</figcaption>
        </figure>
        <figure class="svc-slide">
          <img src="/images/services/domestic/domestic-lounge-lighting.jpg" alt="Lounge lighting installation by LH Electrical" draggable="false">
          <figcaption>Lounge Lighting</figcaption>
        </figure>
      </div>
    </div>
    <div class="svc-carousel-controls">
      <button type="button" class="svc-carousel-btn is-prev" aria-label="Previous image">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="svc-carousel-dots"></div>
      <button type="button" class="svc-carousel-btn is-next" aria-label="Next image">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
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
        <div class="trust-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h3>NAPIT Registered</h3>
        <p>Every notifiable job is self-certified and registered with building control, so your paperwork is in order from day one.</p>
        <a href="https://search.napit.org.uk/member/23182/lh-electrical-south-east-limited" target="_blank" rel="noopener">View NAPIT Profile &rarr;</a>
      </div>
      <div class="trust-card">
        <div class="trust-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>
        </div>
        <h3>MCS Certified</h3>
        <p>Independently assessed for EV charger and solar PV installation, so you're eligible for schemes like the Smart Export Guarantee.</p>
        <a href="https://mcscertified.com/" target="_blank" rel="noopener">About MCS Certification &rarr;</a>
      </div>
      <div class="trust-card">
        <div class="trust-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M20.6 12l-8.6 8.6a2 2 0 01-2.8 0l-6.2-6.2a2 2 0 010-2.8L11.6 3H20a1 1 0 011 1v8z"/><circle cx="15.5" cy="8.5" r="1.5"/></svg>
        </div>
        <h3>Fully Insured &amp; REC Certified</h3>
        <p>Fully insured on every job, and REC certified for renewable energy consumer protection standards.</p>
        <a href="https://www.recc.org.uk/scheme/members/00078267-lh-electrical-south-east-limited" target="_blank" rel="noopener">View REC Profile &rarr;</a>
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

<section class="svc-cta-band">
  <div class="wrap">
    <h2 class="svc-display svc-h2">Ready When You Are</h2>
    <p>Free survey, fixed written quote, no obligation. Call us or send over the details and we&rsquo;ll come back to you.</p>
    <div class="svc-actions" style="justify-content:center;">
      <a class="btn btn-on-accent btn-pill-lg" href="{{ site.phoneHref }}">Call {{ site.phone }}</a>
      <a class="btn btn-on-accent-ghost btn-pill-lg" href="/contact/">Get a Free Quote</a>
    </div>
  </div>
</section>
