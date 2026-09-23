# First Draft landing-page studies

Static HTML/CSS/JS implementations of the First Draft landing-page directions.

## Structure

```text
index.html                  # comparison gallery
site-index.css              # gallery-only styles
versions/
  design-f/
    index.html              # self-contained concept page
    styles.css
    script.js
```

Every new variant should get its own directory under `versions/` with its own `index.html`, stylesheet, and script. This keeps each direction isolated and makes it easy to open several pages side-by-side.

## Run locally

From the repository root:

```sh
python3 -m http.server 4173
```

Then open:

- Gallery: `http://localhost:4173/`
- Design F: `http://localhost:4173/versions/design-f/`

Design F uses Basecoat 1.0.2's Maia CDN bundle as its component substrate, with project-level semantic token overrides and bespoke layout/motion CSS.
