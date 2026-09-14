---
layout: default
title: Home
permalink: /
---

<section class="coming-soon">
  <span class="blob blob-pink" aria-hidden="true"></span>
  <span class="blob blob-blue" aria-hidden="true"></span>
  <span class="blob blob-yellow" aria-hidden="true"></span>
  <span class="blob blob-green" aria-hidden="true"></span>
  <span class="blob blob-purple" aria-hidden="true"></span>

  <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="{{ site.title }}" class="coming-soon-logo">

  <p class="motto">{{ site.tagline }}</p>
  <p class="eyebrow">Binnenkort</p>
  <h1>Er wordt iets lekkers gebakken.</h1>
  <p class="lead">
    {{ site.title }} is in de maak: ambachtelijke taarten en gebak, volledig
    op maat van allergieën en dieetwensen. Zodat iedereen aan tafel kan
    meegenieten van een lekker stuk taart, zonder zorgen.
  </p>

  <div class="signup">
    {% if site.formspree_id and site.formspree_id != "" %}
      <form action="https://formspree.io/f/{{ site.formspree_id }}" method="POST" class="signup-form">
        <label for="email" class="visually-hidden">E-mailadres</label>
        <input type="email" name="email" id="email" placeholder="jouw@email.be" required>
        <button type="submit">Hou me op de hoogte</button>
      </form>
    {% elsif site.email and site.email != "" %}
      <a class="button" href="mailto:{{ site.email }}?subject=Hou%20me%20op%20de%20hoogte">
        Hou me op de hoogte
      </a>
    {% else %}
      <p class="signup-placeholder">📬 Binnenkort kan je je hier inschrijven voor updates</p>
    {% endif %}
  </div>

  <div class="quick-links">
    <a href="{{ '/over-ons/' | relative_url }}">Over ons</a>
    <span aria-hidden="true">·</span>
    <a href="{{ '/allergieen/' | relative_url }}">Allergieën &amp; diëten</a>
  </div>
</section>
