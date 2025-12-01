# Career Growth Platform – UX Case Study (React Single Page)

This folder contains a minimal React single-page app scaffold that visualizes the UX case study content for the Career Growth Platform project.

## What’s included
- Fully-drafted copy and structured layout in `/CASE-STUDY.md` and React components under `/src/sections`
- A simple React (Vite) app rendering the case study sections with placeholders
- CSS tokens and responsive rules in `/src/styles.css`

## Design assets & placeholders
- All images and screen mockups are placeholders (simple rectangles). Replace with your Figma exports or JPG/PNG assets.

## Run locally
Install dependencies and run the dev server:

```bash
# From inside this folder
npm install
npm run dev
```

The app uses Vite; preview builds with `npm run build` and `npm run preview`.

## Folder structure
- `/src` – code
  - `main.jsx` – entry
  - `App.jsx` – root component
  - `components/Nav.jsx` – sticky nav
  - `sections/*` – section components with text and placeholders
  - `styles.css` – color tokens and responsive styling

## How to use this content
- Copy content from `CASE-STUDY.md` into your portfolio CMS, or connect React components to Figma artifacts.
- Replace placeholders with real designs and images exported from Figma.
- For each placeholder, write alt text and descriptions for accessibility.

## Global Layout & Navigation notes
- Sticky nav with anchors for Overview, Research, Design, Testing, Solution, Impact, Takeaways, and AI Tools
- Desktop-first responsive layout: grid and two-column sections; stack on mobile
- Use the CSS tokens declared in `:root` for consistent styling

## Licensing
This example is provided as-is for portfolio demonstration purposes.

## Contact
If you want help replacing placeholders with live components or Figma exports, I can help integrate them and refine copy for visual polish.

