# Anand Panajkar — Portfolio

My personal portfolio: developer tools, ML models and data apps, in plain HTML, CSS and JavaScript (no build step).

**Live:** https://andy7204.github.io/developer-portfolio/

## Run it locally

Open `index.html` in a browser. Or, to match how GitHub Pages serves it:

```bash
python -m http.server 8000   # then open http://localhost:8000
```

## Deploy

`.github/workflows/pages.yml` publishes the site on every push to `master`.
One-time setup: **Settings → Pages → Source: GitHub Actions**.

## Edit it

| What | Where |
| --- | --- |
| Text, projects, links | `index.html` (each project is one `<article class="card">`) |
| Colours, fonts, spacing | the variables at the top of `assets/css/styles.css` |
| Menu, dark mode, project filters | `assets/js/app.js` |

Links left as `href="#"` with `data-hide-if-empty` are hidden automatically. Search for `TODO` to find the ones to fill in (your LinkedIn URL, live app URLs).

## Plan

[`docs/PLAYBOOK.md`](docs/PLAYBOOK.md) has the step-by-step plan for deploying each project, promoting them on LinkedIn, and learning to build them yourself.

## Credits

Started from Kolade Chris's [developer-portfolio](https://github.com/Ksound22/developer-portfolio) template, since rewritten.
