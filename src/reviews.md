---
layout: base.njk
title: Reviews | LH Electrical
description: Read what customers across Lewes and East Sussex say about LH Electrical — verified Google reviews from real jobs.
permalink: /reviews/index.html
---

<section class="svc-hero">
  {% heroCircuit %}
  <div class="wrap" style="position:relative; z-index:2;">
    <span class="svc-eyebrow">{{ site.reviewRating }}&#9733; Rated &middot; {{ site.reviewCount }} Reviews &middot; Google</span>
    <h1 class="svc-display">What Customers <span class="tint">Say About Us.</span></h1>
    <p class="svc-hero-intro">15+ years of electrical work, and the reviews speak for themselves. Real customers, real results.</p>
  </div>
</section>

<div class="svc-marquee" aria-hidden="true">
  <div class="svc-marquee-track">
    <div class="svc-marquee-group">
      <span class="svc-marquee-item">{{ site.reviewRating }}&#9733; on Google</span>
      <span class="svc-marquee-item">{{ site.reviewCount }} Reviews</span>
      <span class="svc-marquee-item">NAPIT Registered</span>
      <span class="svc-marquee-item">MCS Certified</span>
      <span class="svc-marquee-item">15+ Years' Experience</span>
      <span class="svc-marquee-item">Family Run</span>
    </div>
    <div class="svc-marquee-group">
      <span class="svc-marquee-item">{{ site.reviewRating }}&#9733; on Google</span>
      <span class="svc-marquee-item">{{ site.reviewCount }} Reviews</span>
      <span class="svc-marquee-item">NAPIT Registered</span>
      <span class="svc-marquee-item">MCS Certified</span>
      <span class="svc-marquee-item">15+ Years' Experience</span>
      <span class="svc-marquee-item">Family Run</span>
    </div>
  </div>
</div>

<section class="svc-light svc-pad">
  <div class="wrap">
    <div class="rv-summary-grid">
      <div class="rv-summary">
        <div class="rv-summary-top">
          <div class="rv-summary-logo-col"><img class="rv-summary-logo" src="/images/logos/google-wordmark.svg" alt="Google"></div>
          <div class="rv-summary-divider"></div>
          <div class="rv-summary-score">
            <div class="rv-summary-score-num">{% if googleReviews.fetched %}{{ googleReviews.rating }}{% else %}{{ site.reviewRating }}{% endif %}</div>
            <div class="rv-summary-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <div class="rv-summary-count">{% if googleReviews.fetched %}{{ googleReviews.total }}{% else %}{{ site.reviewCount }}{% endif %} Reviews</div>
          </div>
        </div>
        <div class="rv-summary-body">
          <p>Verified via Google Business Profile. We don't curate these &mdash; they're all there to read in full on Google.</p>
          <a class="reviews-link" href="{{ site.reviewLink }}" target="_blank" rel="noopener">Read All Reviews on Google &rarr;</a>
        </div>
      </div>
      <div class="rv-summary">
        <div class="rv-summary-top">
          <div class="rv-summary-logo-col"><img class="rv-summary-logo" src="/images/logos/trustpilot-logo.svg" alt="Trustpilot"></div>
          <div class="rv-summary-divider"></div>
          <div class="rv-summary-score">
            <div class="rv-summary-score-num">{{ site.trustpilotRating }}</div>
            <div class="rv-summary-stars" style="color:#00b67a;">&#9733;&#9733;&#9733;&#9733;<span class="half-star">&#9733;</span></div>
            <div class="rv-summary-count">{{ site.trustpilotCount }} Reviews</div>
          </div>
        </div>
        <div class="rv-summary-body">
          <p>Verified via Trustpilot. Independent reviews from real customers, published in full.</p>
          <a class="reviews-link" href="{{ site.trustpilotLink }}" target="_blank" rel="noopener">Read All Reviews on Trustpilot &rarr;</a>
        </div>
      </div>
    </div>
    {% include "reviews-grid.liquid" %}
  </div>
</section>

<section class="svc-cta-band">
  <div class="wrap">
    <h2 class="svc-display svc-h2">Ready For The Same Service?</h2>
    <p>Free survey, fixed written quote, no obligation. Call us or send over the details and we&rsquo;ll come back to you.</p>
    <div class="svc-actions" style="justify-content:center;">
      <a class="btn btn-on-accent btn-pill-lg" href="{{ site.phoneHref }}">Call {{ site.phone }}</a>
      <a class="btn btn-on-accent-ghost btn-pill-lg" href="/contact/">Get a Free Quote</a>
    </div>
  </div>
</section>
