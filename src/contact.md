---
layout: base.njk
title: Contact LH Electrical | Free No-Obligation Quote
description: Get in touch with LH Electrical for a free, no-obligation quote. Call 01273 443324 or send us your job details online.
permalink: /contact/index.html
---

<section class="hero">
  <div class="wrap">
    <h1>Get your free no-obligation quote</h1>
    <p>Call us directly or send us a few details and we'll get back to you.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 40px;">
      <div>
        <h2>Send us your details</h2>
        <form class="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact">
          <p style="display:none"><label>Don't fill this out: <input name="bot-field"></label></p>
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div>
            <label for="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div>
            <label for="postcode">Postcode</label>
            <input type="text" id="postcode" name="postcode">
          </div>
          <div>
            <label for="service">Service needed</label>
            <select id="service" name="service">
              <option value="">Select a service</option>
              {% for s in site.services %}<option value="{{ s.label }}">{{ s.label }}</option>{% endfor %}
            </select>
          </div>
          <div>
            <label for="message">Tell us about the job</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button class="btn btn-primary" type="submit">Send enquiry</button>
        </form>
      </div>
      <div>
        <h2>Or call / email us directly</h2>
        <p><strong>Phone:</strong> <a href="tel:01273443324">01273 443324</a></p>
        <p><strong>Email:</strong> <a href="mailto:info@lhelectrical.co.uk">info@lhelectrical.co.uk</a></p>
        <p><strong>Hours:</strong> Mon&ndash;Fri 08:00&ndash;17:00</p>
        <p><strong>Address:</strong> Cowlease Farm, North End Lane, Lewes, East Sussex, BN8 5TE</p>
        <p>Urgent jobs in Lewes and the surrounding villages usually get same-day attention. Planned work typically books in within a few working days.</p>
      </div>
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
