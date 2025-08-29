# Diabetes Support Website

## Overview

This repository contains a **static educational website** designed to help family
members understand diabetes and support loved ones who are using insulin.  The
site was created to educate the user's wife (and other relatives) about
diabetes, recognising blood‑sugar highs and lows, managing lifestyle, caring for
feet, and using the **Ryzodeg®** insulin pen.  All content is summarised from
trusted patient information leaflets and diabetes management booklets and is
presented in an accessible, interactive format【619902891363896†screenshot】.

The website is completely client‑side (HTML + CSS + JavaScript) and requires
no server to run.  It can be opened directly in a browser or hosted on any
static hosting provider such as GitHub Pages, Netlify or Vercel.

### Key features

The site aims to be fun, informative and easy to navigate.  Notable features
include:

* **Interactive hero section and navigation:** A welcoming header with
  descriptive imagery and a sticky navigation bar that lets users jump to any
  section of the page.
* **Concise education sections:** The **About** section explains what
  diabetes is, including differences between Type 1 and Type 2【619902891363896†screenshot】.
  Subsequent sections describe how to recognise and treat high and low blood
  sugar【619902891363896†screenshot】, offer dietary and exercise recommendations for a
  healthy lifestyle【11708411690008†screenshot】, and provide foot‑care advice【902573970314615†screenshot】.
* **Ryzodeg® basics and safety:** A dedicated area summarises the dual
  components of Ryzodeg® (insulin degludec and aspart), injection sites,
  priming and dosing instructions, handling missed doses and disposal
  guidelines【249242163383565†screenshot】.  It also lists warnings, side effects and
  when to seek medical help【633312546168312†screenshot】.
* **Support for caregivers:** Practical tips for family members on how to
  support someone using insulin are included, along with guidance on when to
  contact a doctor【272301339598524†screenshot】.
* **Interactive quiz:** At the end of the page there is a short quiz to test
  understanding of diabetes management and Ryzodeg® usage.  It provides
  immediate feedback and encourages engagement【533404105921928†screenshot】.
* **Responsive design:** The layout is mobile‑friendly and scales across
  devices thanks to modern CSS flexbox and media queries.

### Project structure

```
diabetes_website/
├── index.html      # Main HTML file defining all sections of the page
├── style.css       # Styling, colours, typography and responsive layout
├── script.js       # JavaScript for interactive elements (collapse, quiz)
├── hero.png        # Hero image displayed in the header
└── README.md       # This documentation
```

### Getting started locally

No build step is required.  To run the site locally:

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.  All assets are included in
   the repository, so no network connection is needed after the initial
   download.

### Deployment

Because this is a static site, it can be deployed easily on a variety of
services:

* **GitHub Pages:** Commit the contents of the `diabetes_website` directory to
  your repository.  In your repository settings, enable GitHub Pages to serve
  the site from the `main` branch (or a `docs` folder).  GitHub will provide
  a public URL.
* **Netlify:** Netlify can build and deploy sites from private or public
  repositories.  If your repository is private, generate a **deploy key** in
  the Netlify UI and add it as a deploy key on your repository.  Then link
  your repository in Netlify and deploy.  Netlify’s documentation explains
  this process【639957818203461†L188-L209】.
* **Vercel:** Vercel can also deploy static sites.  For private repositories
  you can either grant Vercel access via repository permissions or use the
  Vercel CLI to build locally and upload only the build artefacts.  Vercel’s
  official guide notes that you can use the CLI to deploy “restricted source
  code” without giving the platform direct access【440314966153323†L10-L38】.

### Private repositories and hosting

You can keep this repository private and still deploy it:

* For **Netlify**, create a deploy key and add it to the repository’s deploy
  keys; this allows Netlify read‑only access to fetch code during the build.
* For **Vercel**, either connect the private repository through the GitHub
  integration and grant access via the “Repository access” settings, or use
  the Vercel CLI to upload your pre‑built site.  The CLI approach works for
  any restricted source code【440314966153323†L10-L38】.

Be aware that some hosting providers may require paid plans for private
repositories owned by organisations.  Please consult the current pricing and
plan limits for the hosting platform you choose.

### Continuous integration

This repository includes a simple **GitHub Action** that runs HTML5
validation on every push.  See `.github/workflows/html5.yml` for details.
The action uses the [html5validator-action](https://github.com/marketplace/actions/html5-validator)
to ensure your HTML is well‑formed and standards‑compliant【30316971831685†L172-L214】.

### License

This project is provided for educational purposes.  The content summarises
patient information leaflets about diabetes and Ryzodeg®.  Please consult
healthcare professionals for medical advice.
