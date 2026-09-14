---
layout: default
title: Allergieën & diëten
permalink: /allergieen/
---

# Allergieën & diëten

Bij **{{ site.title }}** draait alles om één ding: {{ site.tagline | downcase }}.
Om dat waar te maken, houden we bij elke bestelling rekening met allergieën
en dieetwensen. Hieronder vind je een overzicht van wat er straks mogelijk
is.

<div class="allergen-grid">
  {% for allergeen in site.data.allergenen %}
    <div class="allergen-card">
      <span class="allergen-icon">{{ allergeen.icoon }}</span>
      <h2>{{ allergeen.naam }}</h2>
      <p>{{ allergeen.beschrijving }}</p>
    </div>
  {% endfor %}
</div>

## Belangrijk om te weten

We werken in een keuken waar met verschillende ingrediënten gewerkt
wordt. Voor de meeste allergieën en gevoeligheden nemen we uitgebreide
voorzorgsmaatregelen om kruisbesmetting te vermijden, maar we kunnen
geen 100% allergeenvrije omgeving garanderen. Heb je een ernstige
allergie (bv. anafylaxie)? Meld dit dan zeker bij je bestelling, dan
bespreken we samen wat mogelijk is.

<section class="cta">
  <h2>Twijfel je of iets mogelijk is?</h2>
  <p>
    {% if site.email and site.email != "" %}
      Mail ons op <a href="mailto:{{ site.email }}">{{ site.email }}</a> — we
      denken graag mee over de beste oplossing voor jouw feest.
    {% else %}
      Binnenkort kan je ons hier rechtstreeks bereiken — hou deze pagina in
      de gaten.
    {% endif %}
  </p>
</section>
