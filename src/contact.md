---
layout: base.njk
title: Contact LH Electrical | Free No-Obligation Quote
description: Get in touch with LH Electrical for a free, no-obligation quote. Call 01273 443324 or send us your job details online.
permalink: /contact/index.html
---

<section class="svc-hero">
  {% heroCircuit %}
  <div class="wrap" style="position:relative; z-index:2;">
    <span class="svc-eyebrow">Lewes, East Sussex</span>
    <h1 class="svc-display">Get In <span class="tint">Touch.</span></h1>
    <p class="svc-hero-intro">Call us, email us, or send your job details online. We're here Monday to Friday, 08:00 - 17:00.</p>
  </div>
</section>

<div class="svc-marquee" aria-hidden="true">
  <div class="svc-marquee-track">
    <div class="svc-marquee-group">
      <span class="svc-marquee-item">01273 443324</span>
      <span class="svc-marquee-item">Mon&ndash;Fri 08:00&ndash;17:00</span>
      <span class="svc-marquee-item">Free Written Quotes</span>
      <span class="svc-marquee-item">Fast Response Times</span>
      <span class="svc-marquee-item">Lewes, East Sussex</span>
    </div>
    <div class="svc-marquee-group">
      <span class="svc-marquee-item">01273 443324</span>
      <span class="svc-marquee-item">Mon&ndash;Fri 08:00&ndash;17:00</span>
      <span class="svc-marquee-item">Free Written Quotes</span>
      <span class="svc-marquee-item">Fast Response Times</span>
      <span class="svc-marquee-item">Lewes, East Sussex</span>
    </div>
  </div>
</div>

<section class="svc-light svc-pad">
  <div class="wrap contact-grid">
    <div class="contact-cards">
      <div class="contact-card">
        <div class="contact-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        </div>
        <div>
          <h3>Phone</h3>
          <p class="contact-card-main"><a href="{{ site.phoneHref }}">{{ site.phone }}</a></p>
          <p>Fastest way to reach us for urgent jobs.</p>
        </div>
      </div>
      <div class="contact-card">
        <div class="contact-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M3 6h18v12H3z"/><path d="M3 7l9 6 9-6"/></svg>
        </div>
        <div>
          <h3>Email</h3>
          <p class="contact-card-main"><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
          <p>We aim to reply within 2 working hours.</p>
        </div>
      </div>
      <div class="contact-card">
        <div class="contact-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>
        </div>
        <div>
          <h3>Address</h3>
          <p>{{ site.address }}.</p>
          <a class="contact-card-link" href="https://www.google.com/maps?q={{ site.address | url_encode }}" target="_blank" rel="noopener">Open in Google Maps &rarr;</a>
        </div>
      </div>
      <div class="contact-card">
        <div class="contact-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
        </div>
        <div style="flex:1;">
          <h3>Opening Hours</h3>
          <ul class="contact-hours">
            <li><span>Monday</span><span>08:00 &ndash; 17:00</span></li>
            <li><span>Tuesday</span><span>08:00 &ndash; 17:00</span></li>
            <li><span>Wednesday</span><span>08:00 &ndash; 17:00</span></li>
            <li><span>Thursday</span><span>08:00 &ndash; 17:00</span></li>
            <li><span>Friday</span><span>08:00 &ndash; 17:00</span></li>
            <li class="is-closed"><span>Sat &ndash; Sun</span><span>Closed</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contact-form-card">
      <h2>Send Us A Message</h2>
      <p>Describe the job or ask a question. We'll get back to you within 2 working hours during business hours.</p>
      <form class="contact-form-grid" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact">
        <p style="display:none"><label>Don't fill this out: <input name="bot-field"></label></p>
        <div class="contact-form-row">
          <div>
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Jane Smith" required>
          </div>
          <div>
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="07700 000000" required>
          </div>
        </div>
        <div class="contact-form-row">
          <div>
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="jane@example.com" required>
          </div>
          <div>
            <label for="postcode">Postcode</label>
            <input type="text" id="postcode" name="postcode" placeholder="BN8 5TE">
          </div>
        </div>
        <div>
          <label for="service">Type Of Enquiry</label>
          <select id="service" name="service">
            <option value="">&mdash; Select &mdash;</option>
            {% for s in site.services %}<option value="{{ s.label }}">{{ s.label }}</option>{% endfor %}
          </select>
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Describe the job or ask your question here&hellip;" required></textarea>
        </div>
        <button class="btn btn-outline-dark btn-pill-lg contact-form-submit" type="submit">Send Message &rarr;</button>
        <p class="contact-form-note">No spam, no sharing. We'll only use your details to respond to this enquiry.</p>
      </form>
    </div>
  </div>
</section>

<section class="svc-cream svc-pad-sm">
  <div class="wrap svc-center">
    <span class="svc-eyebrow">Prefer To Talk?</span>
    <h2 class="svc-display svc-h2" style="color:var(--navy-dark);">We're Always Happy To Help</h2>
    <p class="svc-lede" style="margin-left:auto; margin-right:auto;">Every call goes straight to the team &ndash; no call centres, no automated menus. If you'd rather speak to someone directly than fill out the form above, give us a call or drop us an email and we'll get right back to you.</p>
    <div class="svc-actions" style="justify-content:center;">
      <a class="btn btn-outline-dark btn-pill-lg" href="{{ site.phoneHref }}">{{ site.phone }}</a>
      <a class="btn btn-outline-dark btn-pill-lg" href="mailto:{{ site.email }}">{{ site.email }}</a>
    </div>
  </div>
</section>

<script>
(function () {
  var params = new URLSearchParams(window.location.search);
  var service = params.get("service");
  var postcode = params.get("postcode");
  if (service) {
    var serviceField = document.getElementById("service");
    if (serviceField) serviceField.value = service;
  }
  if (postcode) {
    var postcodeField = document.getElementById("postcode");
    if (postcodeField) postcodeField.value = postcode;
  }
})();
</script>
