---
layout: default
title: Home
permalink: /
---

<section class="hero">
  <div class="hero-blob hero-blob--blue" aria-hidden="true">
    <span>Zoet, hartig,<br>altijd met zorg</span>
    <span class="hero-blob__heart">&hearts;</span>
  </div>
  <div class="hero-blob hero-blob--yellow" aria-hidden="true">
    <span>Kleine ditjes,<br>grote momenten</span>
    <span class="hero-blob__heart">&hearts;</span>
  </div>

  <span class="confetti-dot confetti-dot--pink confetti-dot-1" aria-hidden="true"></span>
  <span class="confetti-dot confetti-dot--green confetti-dot-2" aria-hidden="true"></span>
  <span class="confetti-dot confetti-dot--blue confetti-dot-3" aria-hidden="true"></span>
  <span class="confetti-dot confetti-dot--yellow confetti-dot-4" aria-hidden="true"></span>
  <span class="confetti-dot confetti-dot--purple confetti-dot-5" aria-hidden="true"></span>
  <span class="confetti-dot confetti-dot--sm confetti-dot--pink confetti-dot-6" aria-hidden="true"></span>
  <span class="confetti-dot confetti-dot--sm confetti-dot--green confetti-dot-7" aria-hidden="true"></span>
  <span class="confetti-dot confetti-dot--sm confetti-dot--blue confetti-dot-8" aria-hidden="true"></span>

  <svg class="confetti-heart confetti-heart-1" aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 5c-2.5 4.6-9.5 9-9.5 9Z"></path>
  </svg>
  <svg class="confetti-heart confetti-heart-2" aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 5c-2.5 4.6-9.5 9-9.5 9Z"></path>
  </svg>
  <svg class="confetti-star confetti-star-1" aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2l2.4 6.5L21 10l-5.3 4.1L17.5 21 12 17.3 6.5 21l1.8-6.9L3 10l6.6-1.5L12 2Z"></path>
  </svg>
  <svg class="confetti-star confetti-star-2" aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2l2.4 6.5L21 10l-5.3 4.1L17.5 21 12 17.3 6.5 21l1.8-6.9L3 10l6.6-1.5L12 2Z"></path>
  </svg>

  <div class="hero-grid">
    <div class="hero-side hero-side--left" aria-hidden="true">
      <p class="hero-side__text">Gebak met liefde<br>voor iedereen <span class="heart-accent">&hearts;</span></p>
      <div class="photo-blob photo-blob--cupcake">
        <svg class="decorative-doodle" viewBox="0 0 64 64" width="52" height="52" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 28c0-7 6-12 14-12s14 5 14 12"></path>
          <path d="M14 28h36l-4 8H18l-4-8Z"></path>
          <path d="M18 36l3 20a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3l3-20"></path>
          <path d="M26 44h12"></path>
          <circle cx="32" cy="14" r="2"></circle>
        </svg>
        <img src="{{ '/assets/images/cupcake.jpg' | relative_url }}" alt="" class="decorative-photo" loading="lazy">
      </div>
    </div>

    <div class="hero-content">
      <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="{{ site.title }}" class="hero-logo">

      <h1 class="hero-title">Coming Soon <span class="heart-accent" aria-hidden="true">&#9825;</span></h1>
      <p class="hero-subtitle">Gebak met liefde voor iedereen</p>

      <p class="hero-intro">
        Heerlijke taarten, koekjes, cupcakes en meer&hellip;<br>
        Met aandacht voor allergenen en verschillende diëten.
      </p>

      <p class="hero-motto">{{ site.tagline }}! <span class="heart-accent" aria-hidden="true">&#9825;</span></p>

      <ul class="allergen-badges">
        <li class="badge badge--vegan">
          <span class="badge-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">
              <path d="M4 20c7-1 12-6 13-13-7 1-12 6-13 13Z"></path>
              <path d="M4 20c2-5 5-8 9-10"></path>
            </svg>
          </span>
          <span class="badge-label">Vegan</span>
        </li>
        <li class="badge badge--melkvrij">
          <span class="badge-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">
              <path d="M9 2h6v3.5l1.5 2V21a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7.5L9 5.5V2Z"></path>
              <path d="M8 12h8"></path>
              <line x1="3" y1="3" x2="21" y2="21"></line>
            </svg>
          </span>
          <span class="badge-label">Melkvrij</span>
        </li>
        <li class="badge badge--eivrij">
          <span class="badge-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">
              <path d="M12 3c4 4 7 8.5 7 12a7 7 0 0 1-14 0c0-3.5 3-8 7-12Z"></path>
              <line x1="4" y1="4" x2="20" y2="20"></line>
            </svg>
          </span>
          <span class="badge-label">Eivrij</span>
        </li>
        <li class="badge badge--glutenvrij">
          <span class="badge-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">
              <path d="M12 21V9"></path>
              <path d="M12 9c-2-1-2-3-1-4 1 1 3 1 4-1 1 2-1 4-3 5Z"></path>
              <path d="M12 13c-2-1-2-3-1-4 1 1 3 1 4-1 1 2-1 4-3 5Z"></path>
              <path d="M12 17c-2-1-2-3-1-4 1 1 3 1 4-1 1 2-1 4-3 5Z"></path>
              <line x1="4" y1="4" x2="20" y2="20"></line>
            </svg>
          </span>
          <span class="badge-label">Glutenvrije opties</span>
        </li>
        <li class="badge badge--meer">
          <span class="badge-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">
              <path d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 5c-2.5 4.6-9.5 9-9.5 9Z"></path>
            </svg>
          </span>
          <span class="badge-label">En nog veel meer&hellip;</span>
        </li>
      </ul>

      <p class="allergen-note">
        Verschillende opties mogelijk — we denken graag mee over allergenen en diëten.
      </p>

      <div class="signup">
        <h2 class="signup-title">Wil je als eerste op de hoogte zijn?</h2>
        {% if site.formspree_id and site.formspree_id != "" %}
          <form action="https://formspree.io/f/{{ site.formspree_id }}" method="POST" class="signup-form">
            <label for="email" class="visually-hidden">E-mailadres</label>
            <input type="email" name="email" id="email" placeholder="Jouw e-mailadres" required>
            <button type="submit">Hou me op de hoogte <span aria-hidden="true">&#9825;</span></button>
          </form>
        {% elsif site.email and site.email != "" %}
          <a class="button" href="mailto:{{ site.email }}?subject=Hou%20me%20op%20de%20hoogte">
            Hou me op de hoogte <span aria-hidden="true">&#9825;</span>
          </a>
        {% else %}
          <p class="signup-placeholder">📬 Binnenkort kan je je hier inschrijven voor updates</p>
        {% endif %}
      </div>
    </div>

    <div class="hero-side hero-side--right" aria-hidden="true">
      <p class="hero-side__text">Voor iedereen<br>wat lekkers <span class="heart-accent">&hearts;</span></p>
      <div class="photo-blob photo-blob--cake">
        <svg class="decorative-doodle" viewBox="0 0 64 64" width="52" height="52" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 40h40v10a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V40Z"></path>
          <path d="M12 40c0-6 4-9 10-9h20c6 0 10 3 10 9"></path>
          <path d="M22 31v-6M32 31v-6M42 31v-6"></path>
          <path d="M32 19c-2-2-2-4 0-6 2 2 2 4 0 6Z"></path>
        </svg>
        <img src="{{ '/assets/images/cake.jpg' | relative_url }}" alt="" class="decorative-photo" loading="lazy">
      </div>
    </div>
  </div>

  <div class="photo-blob photo-blob--cookies" aria-hidden="true">
    <svg class="decorative-doodle" viewBox="0 0 64 64" width="42" height="42" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="32" cy="32" r="20"></circle>
      <circle cx="24" cy="26" r="2"></circle>
      <circle cx="36" cy="24" r="2"></circle>
      <circle cx="40" cy="34" r="2"></circle>
      <circle cx="28" cy="38" r="2"></circle>
      <circle cx="34" cy="42" r="2"></circle>
    </svg>
    <img src="{{ '/assets/images/cookies.jpg' | relative_url }}" alt="" class="decorative-photo" loading="lazy">
  </div>
</section>

