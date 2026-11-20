# Nirjala Prajapati — Portfolio

A one-page portfolio built with React, Vite, and Tailwind CSS, styled after
an engineering drawing sheet: a title block, a sheet index for navigation,
grid-paper background, and section numbers that read like sheet numbers in a
drawing set.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy anywhere that
serves static files (Vercel, Netlify, GitHub Pages, etc.).

## Structure

```
src/
  App.jsx              assembles all sections
  index.css            Tailwind directives + a couple of base styles
  components/
    Nav.jsx             sticky sheet-index navigation
    Hero.jsx            headline, dimension-line animation, title block
    TitleBlock.jsx       the corner metadata box
    Sheet.jsx            shared wrapper for each content section
    Profile.jsx / Education.jsx / Skills.jsx / Experience.jsx /
    Achievements.jsx / Certifications.jsx
    Footer.jsx           contact panel
    RulerStrip.jsx       decorative tick-mark strip
    Icons.jsx             small local icon set (no icon package dependency)
```

## Customizing

- **Colors and fonts** live in `tailwind.config.js` under `theme.extend`
  (`blueprint.*` colors, `flag` accent, and `fontFamily`).
- **Content** for each section is a small array or block of text at the top
  of that section's component file — edit those directly, no data layer to
  wire up.
- The single accent color (`flag`, a survey-flag orange) is used sparingly
  on purpose — for buttons, the animated hero rule, and a couple of icons.
  If you add new interactive elements, keep that restraint.
- The phone number from the original resume was left off since it was
  redacted in the screenshot — add it to `TitleBlock.jsx` and `Footer.jsx`
  if you'd like it included.
