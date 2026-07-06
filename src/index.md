---
layout: base.njk
title: Electrician Lewes East Sussex | 15 Yrs Exp. | LH Electrical
description: NAPIT-certified electrician in Lewes, East Sussex with 15 years' experience. Trusted for solar, EV chargers, lighting, testing and more. Get your free no-obligation quote today.
---

<section class="hero hero-home">
  <div class="hero-bg" aria-hidden="true">
    <img src="/images/hero/electrician-at-work.jpg" alt="" loading="eager">
  </div>
  <div class="wrap">
    <div class="hero-badges">
      <span class="hero-badge"><span class="hero-badge-dot"></span>NAPIT-Registered</span>
      <span class="hero-badge"><span class="hero-badge-dot"></span>15+ Years' Experience</span>
      <a class="hero-badge hero-badge-link" href="{{ site.trustpilotLink }}" target="_blank" rel="noopener">
        <span class="stars">&#9733;</span>{{ site.trustpilotRating }} Trustpilot &middot; {{ site.trustpilotCount }} reviews
      </a>
    </div>
    <h1>Your Trusted Electrician <span class="highlight">in Lewes</span></h1>
    <div class="hero-stripe"></div>
    <p>LH Electrical (South East) Ltd is a trusted electrician in Lewes with 15+ years of experience in domestic, commercial, solar, and EV installations across East Sussex.</p>
    <form class="quote-bar" action="/contact/" method="GET">
      <select name="service" aria-label="I need help with">
        <option value="">I need help with...</option>
        {% for s in site.services %}<option value="{{ s.label }}">{{ s.label }}</option>{% endfor %}
      </select>
      <input type="text" name="postcode" placeholder="Enter your postcode" aria-label="Postcode">
      <button class="btn btn-primary" type="submit">Get in Touch</button>
    </form>
    <p class="quote-bar-note"><span id="quote-typewriter"></span><span class="typewriter-cursor">&#124;</span></p>
  </div>
</section>

<section class="stats-band">
  <div class="wrap">
    <ul class="stats-strip">
      <li><span class="stat-num">15+</span><span class="stat-label">Years Trading</span></li>
      <li><span class="stat-num">{{ site.reviewRating }}&#9733;</span><span class="stat-label">Google Rating</span></li>
      <li><span class="stat-num">{{ site.reviewCount }}</span><span class="stat-label">Reviews</span></li>
      <li><span class="stat-num">NAPIT</span><span class="stat-label">Registered</span></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>Complete electrical solutions for homes, businesses and contractors</h2>
    <p>With over 15 years of experience, LH Electrical provides professional, fully certified electrical services to homeowners, landlords, commercial clients, and contractors across East Sussex. From lighting upgrades to full-scale installations, we deliver safe, compliant work with minimal disruption.</p>
    <p>We're a trusted electrical contractor based in Lewes, fully insured and NAPIT-registered, ensuring every job meets the latest UK wiring regulations.</p>
    <ul class="credentials-strip">
      <li>&#9733; 5.0 rating, 22 reviews</li>
      <li>NAPIT-registered</li>
      <li>MCS-certified</li>
      <li>15+ years' experience</li>
    </ul>
  </div>
</section>

<section class="section section-alt">
  <div class="wrap">
    <h2>Our services</h2>
    <ul class="services-grid">
      <li>
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9"/></svg></div>
        <a href="/services/domestic/">Domestic</a><p>Rewires, fault-finding and everyday electrical work for homeowners.</p>
      </li>
      <li>
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/></svg></div>
        <a href="/services/commercial-electrician/">Commercial</a><p>Installations and periodic inspections for local businesses.</p>
      </li>
      <li>
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"/><path d="M14 3v5h5"/><path d="M9.5 14.5l1.8 1.8L15 12.5"/></svg></div>
        <a href="/services/landlords/">Landlords & EICR</a><p>Compliance certificates and remedial work for rental properties.</p>
      </li>
      <li>
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg></div>
        <a href="/services/house-rewire/">House Rewire</a><p>Full and partial rewires, planned around your home.</p>
      </li>
      <li>
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7v4M12 7v4M16 7v4M8 15h.01M12 15h.01M16 15h.01"/></svg></div>
        <a href="/services/fuse-board-upgrades/">Fuse Board Upgrades</a><p>Modern consumer units fitted to current regulations.</p>
      </li>
      <li>
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8V4M11 8V4"/><rect x="5" y="8" width="8" height="7" rx="1"/><path d="M9 15v2a3 3 0 003 3h1a3 3 0 003-3v-1h1a1 1 0 001-1v-2h-2"/></svg></div>
        <a href="/services/ev-chargers/">EV Chargers</a><p>MCS-certified home and commercial charger installs.</p>
      </li>
      <li>
        <div class="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg></div>
        <a href="/services/solar-panels/">Solar Panels</a><p>Solar PV and battery storage, installed to MCS standards.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>What our customers say</h2>
    <div class="review-card">
      <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      <p>"We were very pleased with the work on our power sockets and lighting. George and Finn were pleasant, efficient and helpful."</p>
      <span class="author">Chris Cooper</span>
    </div>
    <div class="review-card">
      <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      <p>"A really competitive price but more important to me, the work was completed as agreed and to a very high standard."</p>
      <span class="author">Greg Milton</span>
    </div>
    <div class="review-card">
      <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      <p>"Excellent communication, reliable, thorough, helpful. Many thanks."</p>
      <span class="author">Julie Frances</span>
    </div>
    <p><a href="/reviews/">Read all our reviews &rarr;</a></p>
  </div>
</section>

<section class="section section-alt">
  <div class="wrap">
    <h2>Areas we cover</h2>
    <p>Based in Lewes, we work across East Sussex including Ringmer, Uckfield, Hailsham, Peacehaven and Seaford.</p>
    <ul class="services-grid">
      <li class="location-item"><div class="icon-badge icon-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.3"/></svg></div><a href="/locations/electrician-lewes/">Lewes</a></li>
      <li class="location-item"><div class="icon-badge icon-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.3"/></svg></div><a href="/locations/electrician-ringmer/">Ringmer</a></li>
      <li class="location-item"><div class="icon-badge icon-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.3"/></svg></div><a href="/locations/electrician-uckfield/">Uckfield</a></li>
      <li class="location-item"><div class="icon-badge icon-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.3"/></svg></div><a href="/locations/electrician-hailsham/">Hailsham</a></li>
      <li class="location-item"><div class="icon-badge icon-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.3"/></svg></div><a href="/locations/electrician-peacehaven/">Peacehaven</a></li>
      <li class="location-item"><div class="icon-badge icon-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.3"/></svg></div><a href="/locations/electrician-seaford/">Seaford</a></li>
    </ul>
  </div>
</section>
