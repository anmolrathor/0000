# Guru Kirpa Hospital — Website

A self-contained website built with plain **HTML, CSS and JavaScript** — no
frameworks and no build step. Just open `index.html` in a browser.

## Folder contents

```
website/
├── index.html      # Page markup / structure
├── style.css       # All styling (external file, responsive)
├── script.js       # All behaviour: icons, data, slideshow, nav, fallbacks
├── images/         # All images used by the site (part of this folder)
│   ├── hospital-building.jpg
│   ├── hospital-building-2.jpg
│   ├── hospital-lobby.jpg
│   ├── hospital-ward.jpg
│   ├── hospital-lab.jpg
│   ├── doctor-senior.jpg
│   ├── doctor-female.jpg
│   ├── doctor-male.jpg
│   └── doctor-young.jpg
└── README.md
```

The CSS and JavaScript are kept in **separate files** (linked from the HTML)
rather than embedded inline, as requested.

## Images

All images live inside the `images/` folder, so the project is fully portable —
copy the whole `website` folder anywhere and it still works. The included images
are lightweight SVG illustrations. To use real photographs instead, drop your
`.jpg`/`.png` files into `images/` and update the file names in:

- `script.js` (the `slideshowImages` and `doctors` arrays)
- `index.html` (the hero and about `<img>` tags)
- `style.css` (the `.hero-bg` background url)

If any image fails to load, `script.js` automatically shows a branded
placeholder so the layout never breaks.

## How to run

Open `index.html` directly in any modern browser. For the embedded Google Map to
load, you may prefer a tiny local server:

```bash
cd website
python3 -m http.server 8080
# visit http://localhost:8080
```
