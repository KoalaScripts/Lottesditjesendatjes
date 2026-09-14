# Lottes ditjes en datjes — website

De website van Lottes ditjes en datjes, gebouwd met **Jekyll** en gehost
via **GitHub Pages**. Dit bestand legt uit hoe alles in elkaar zit, zodat
je de site zelf kan begrijpen en aanpassen.

## Hoe werkt dit project?

Jekyll neemt de bestanden in deze map en "bakt" ze samen tot een gewone
statische website (enkel HTML/CSS/JS). GitHub Pages doet dit automatisch
elke keer je naar de `main` branch pusht — je hoeft dus zelf niets te
builden of te uploaden.

### Mapstructuur

```
_config.yml        Instellingen van de site (titel, beschrijving, url, plugins)
Gemfile             Lijst van Ruby-gems (Jekyll + plugins) om lokaal te draaien
_layouts/            "Frames" waarin een pagina getoond wordt
  default.html        Het enige layout: header + inhoud van de pagina + footer
_includes/            Herbruikbare stukjes HTML
  header.html          Bovenbalk met logo + navigatie
  footer.html          Onderbalk met copyright + link naar contact
_data/                 Gegevens los van de opmaak (YAML-bestanden)
  navigation.yml        Lijst van menu-items (gebruikt in header.html)
  allergenen.yml         Lijst van allergieën/diëten (gebruikt op allergieen.md)
assets/
  css/main.css          Alle opmaak (kleuren, lay-out, ...)
  images/                 Hier komen logo, foto's, favicon, ...
index.md              Homepage        → wordt "/"
over-ons.md           Over-ons pagina → wordt "/over-ons/"
assortiment.md        Assortiment     → wordt "/assortiment/"
allergieen.md         Allergieën      → wordt "/allergieen/"
contact.md            Contact         → wordt "/contact/"
```

### Een pagina aanpassen

Elke `.md`-bestand in de root is een pagina. Bovenaan elk bestand staat
een blokje tussen `---` (front matter), bv.:

```yaml
---
layout: default
title: Contact
permalink: /contact/
---
```

- `layout`: welk sjabloon uit `_layouts/` gebruikt wordt (hier altijd `default`)
- `title`: titel die in het browsertabblad en de paginakop verschijnt
- `permalink`: het webadres van de pagina

Onder de `---` schrijf je de eigenlijke inhoud, in gewone **Markdown**
(zoals op GitHub: `# Titel`, `**vet**`, `- lijstje`, `[link](url)`, ...).
Je kan ook gewoon HTML tussenvoegen als je iets specifieks nodig hebt.

### Een nieuwe pagina toevoegen

1. Maak een nieuw bestand, bv. `bestellen.md`, in de root van het project.
2. Zet er front matter bovenaan, bv.:
   ```yaml
   ---
   layout: default
   title: Bestellen
   permalink: /bestellen/
   ---
   ```
3. Schrijf je inhoud eronder in Markdown.
4. Voeg de pagina toe aan het menu in `_data/navigation.yml`:
   ```yaml
   - title: Bestellen
     url: /bestellen/
   ```

### Het menu of de allergieënlijst aanpassen

Je hoeft geen HTML aan te raken:

- Menu-items → `_data/navigation.yml`
- Allergieën/diëten → `_data/allergenen.yml`

Beide worden automatisch getoond dankzij een `{% for %}`-lus in
`_includes/header.html` en `allergieen.md`.

### Afbeeldingen toevoegen

Zet je bestand in `assets/images/` en verwijs ernaar met een pad als
`/assets/images/logo.png` in je Markdown of HTML:

```markdown
![Logo](/assets/images/logo.png)
```

### Stijl (kleuren, lettertype, ...) aanpassen

Alles staat in `assets/css/main.css`. Bovenaan staat een blokje
`:root { --color-primary: ...; }` met de belangrijkste kleuren — pas die
aan om meteen de hele site van kleur te laten veranderen.

## Lokaal testen (optioneel)

Je hoeft dit niet te doen om te publiceren (GitHub Pages doet dat voor
je), maar het is handig om wijzigingen eerst lokaal te bekijken:

```powershell
gem install bundler
bundle install
bundle exec jekyll serve
```

Surf daarna naar `http://localhost:4000`.

## Branches: main (live) en dev (preview)

Dit project gebruikt twee branches:

- **`main`** → de echte site, gebouwd en gepubliceerd op
  `https://lottesditjesendatjes.be/`
- **`dev`** → een preview-omgeving om nieuwe wijzigingen eerst te
  bekijken, gepubliceerd op `https://lottesditjesendatjes.be/dev/`

Beide branches worden automatisch gebouwd door de GitHub Actions
workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
zodra je ernaar pusht. Je hoeft dus nooit zelf iets te builden of te
uploaden. De dev-versie krijgt automatisch een opvallende gele balk
bovenaan ("Ontwikkelversie (dev)") zodat je hem niet kan verwarren met
de echte site.

Typische workflow:

1. Werk op de `dev` branch en push je wijzigingen.
2. Controleer het resultaat op `https://lottesditjesendatjes.be/dev/`.
3. Tevreden? Merge `dev` in `main` en push — de live site update
   automatisch.

Beide sites draaien via één en dezelfde GitHub Pages-configuratie
(zelfde repository, zelfde domeinnaam), er is dus maar één DNS-record
nodig.

## Publiceren op GitHub Pages

1. Maak een (lege) repository aan op GitHub, bv. `Lottesditjesendatjes`.
2. Initialiseer git in deze map, maak de `main`- en `dev`-branch aan en
   push beide:
   ```powershell
   git init
   git add .
   git commit -m "Initiële site"
   git branch -M main
   git remote add origin https://github.com/<gebruikersnaam>/<repository-naam>.git
   git push -u origin main
   git checkout -b dev
   git push -u origin dev
   ```
3. Ga naar **Settings → Pages** in de repository.
4. Kies bij **Source**: `Deploy from a branch` → branch **`gh-pages`**,
   map **`/ (root)`**.
   - Deze `gh-pages`-branch bestaat nog niet — hij wordt automatisch
     aangemaakt door de GitHub Actions workflow na de eerste push naar
     `main` of `dev`. Wacht tot de workflow in het **Actions**-tabblad
     groen is en herlaad de Pages-instellingen.
5. Vul bij **Custom domain** `lottesditjesendatjes.be` in en bewaar
   (dit gebeurt normaal automatisch dankzij de workflow, maar controleer
   het hier).
6. Vul die URL ook in bij `url` in `_config.yml` (`url: "https://lottesditjesendatjes.be"`,
   `baseurl` blijft leeg `""`).

### DNS-instellingen (bij je domeinregistrar van lottesditjesendatjes.be)

Voeg deze records toe zodat het domein naar GitHub Pages wijst:

| Type  | Naam/Host | Waarde                     |
|-------|-----------|----------------------------|
| A     | @         | 185.199.108.153            |
| A     | @         | 185.199.109.153            |
| A     | @         | 185.199.110.153            |
| A     | @         | 185.199.111.153            |
| CNAME | www       | `<gebruikersnaam>.github.io.` |

(De vier A-records zijn de vaste IP-adressen van GitHub Pages. Als je
registrar ALIAS/ANAME ondersteunt voor de apex (`@`), mag dat ook i.p.v.
de A-records.) Er is **geen apart DNS-record nodig voor `dev`**, want de
preview draait onder hetzelfde domein op het pad `/dev/`.

Na het instellen van de DNS-records kan het tot enkele uren duren
voor ze overal doorgevoerd zijn. Vink in **Settings → Pages** ook
**Enforce HTTPS** aan zodra dat beschikbaar wordt.
