---
layout: base.njk
title: Reviews | LH Electrical
description: Read what customers across Lewes and East Sussex say about LH Electrical — 5.0 rating from 22 Google reviews.
permalink: /reviews/index.html
---

<section class="hero">
  <div class="wrap">
    <h1>Customer reviews</h1>
    <p>5.0 rating from 22 Google reviews.</p>
  </div>
</section>

<section class="section-alt">
  <div class="wrap">
    <div class="reviews-head">
      <div>
        <span class="eyebrow">Customer Reviews</span>
        <h2>What Our Customers Say</h2>
      </div>
      <div class="reviews-score">
        <div class="reviews-score-big">{% if googleReviews.fetched %}{{ googleReviews.rating }}{% else %}{{ site.reviewRating }}{% endif %}</div>
        <div class="reviews-score-detail">
          <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div class="reviews-count">{% if googleReviews.fetched %}{{ googleReviews.total }}{% else %}{{ site.reviewCount }}{% endif %} Google Reviews</div>
        </div>
      </div>
    </div>
    <div class="carousel-wrap">
      <div class="carousel-track" id="reviewTrack">
        {%- if googleReviews.fetched -%}
        {%- for r in googleReviews.reviews -%}
        {%- assign nameParts = r.author | split: ' ' -%}
        <div class="review-card">
          <div class="review-card-stars">{% for i in (1..5) %}{% if i <= r.rating %}&#9733;{% else %}&#9734;{% endif %}{% endfor %}</div>
          <p>"{{ r.text }}"</p>
          <div class="review-meta">
            <div class="review-avatar">{{ nameParts[0] | slice: 0, 1 }}{{ nameParts[1] | default: '' | slice: 0, 1 }}</div>
            <div>
              <div class="review-name">{{ r.author }}</div>
              <div class="review-source"><span class="g-dot"></span>Google Review &middot; {{ r.relativeTime }}</div>
            </div>
          </div>
        </div>
        {%- endfor -%}
        {%- else -%}
        <div class="review-card">
          <div class="review-card-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p>"We were very pleased with the work on our power sockets and lighting done by Luke Hartery and his team (George and Finn) — pleasant, efficient and helpful."</p>
          <div class="review-meta">
            <div class="review-avatar">CC</div>
            <div>
              <div class="review-name">Chris Cooper</div>
              <div class="review-source"><span class="g-dot"></span>Google Review</div>
            </div>
          </div>
        </div>
        <div class="review-card">
          <div class="review-card-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p>"We contacted LH Electrical to complete the EICR test on our retail premises, this was completed quickly by Luke & George, clearly setting out the work required. A really competitive price but more important to me, the work has completed as agreed and to a very high standard."</p>
          <div class="review-meta">
            <div class="review-avatar">GM</div>
            <div>
              <div class="review-name">Greg Milton</div>
              <div class="review-source"><span class="g-dot"></span>Google Review</div>
            </div>
          </div>
        </div>
        <div class="review-card">
          <div class="review-card-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p>"Luke did all the electrical works on the renovation of the old farmhouse and various outbuildings, including lighting and sound in an old Sussex barn. Luke and George make a great team; calmly getting on with the job with efficiency and skill."</p>
          <div class="review-meta">
            <div class="review-avatar">RK</div>
            <div>
              <div class="review-name">Rebecca K</div>
              <div class="review-source"><span class="g-dot"></span>Google Review</div>
            </div>
          </div>
        </div>
        <div class="review-card">
          <div class="review-card-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p>"The initial assessment was carried out in a friendly and efficient way by Luke. A few days later, the job was completed by George who worked quickly, efficiently and tidily."</p>
          <div class="review-meta">
            <div class="review-avatar">TS</div>
            <div>
              <div class="review-name">Tony Sims</div>
              <div class="review-source"><span class="g-dot"></span>Google Review</div>
            </div>
          </div>
        </div>
        <div class="review-card">
          <div class="review-card-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p>"Great outfit. The lads did a very good job neatly and efficiently, and were careful and pleasant as they went about their work."</p>
          <div class="review-meta">
            <div class="review-avatar">AM</div>
            <div>
              <div class="review-name">Andrew Morgan</div>
              <div class="review-source"><span class="g-dot"></span>Google Review</div>
            </div>
          </div>
        </div>
        <div class="review-card">
          <div class="review-card-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p>"Excellent communication, reliable, thorough, helpful. Many thanks."</p>
          <div class="review-meta">
            <div class="review-avatar">JF</div>
            <div>
              <div class="review-name">Julie Frances</div>
              <div class="review-source"><span class="g-dot"></span>Google Review</div>
            </div>
          </div>
        </div>
        <div class="review-card">
          <div class="review-card-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p>"Luke provided a clear quote for our ground floor refurb on our large 1930s house. Easy to deal with, honest, thoughtful consultancy and transparent pricing."</p>
          <div class="review-meta">
            <div class="review-avatar">ST</div>
            <div>
              <div class="review-name">Stu T</div>
              <div class="review-source"><span class="g-dot"></span>Google Review</div>
            </div>
          </div>
        </div>
        <div class="review-card">
          <div class="review-card-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p>"We've been working with LH Electrical since 2017. They handled all the electrical wiring for my coffee house from the ground up, done professionally, on time and to a very high standard."</p>
          <div class="review-meta">
            <div class="review-avatar">UP</div>
            <div>
              <div class="review-name">U&#287;ur Pekyildiz</div>
              <div class="review-source"><span class="g-dot"></span>Google Review</div>
            </div>
          </div>
        </div>
        {%- endif %}
      </div>
    </div>
    <div class="carousel-controls">
      <button class="carousel-btn" id="revPrev" aria-label="Previous">&#8592;</button>
      <div class="carousel-dots" id="revDots"></div>
      <button class="carousel-btn" id="revNext" aria-label="Next">&#8594;</button>
    </div>
    <p style="text-align:center; margin-top:28px;"><a class="btn btn-outline-navy" href="{{ site.reviewLink }}" target="_blank" rel="noopener">Read All Reviews on Google &rarr;</a></p>
  </div>
</section>
