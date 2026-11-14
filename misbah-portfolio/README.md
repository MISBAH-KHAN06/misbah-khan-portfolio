# Misbah Khan — Developer Portfolio

A responsive, single-page portfolio built with HTML, CSS and vanilla JavaScript. It uses a dark futuristic glassmorphism visual style with violet/blue accents and subtle motion.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a browser.
3. For local development, you can also run a simple server:
   - Python: `python -m http.server 8000`
   - Then visit `http://localhost:8000`

## Deploy
This is a static website and can be deployed directly to Netlify or Vercel:
- Upload the extracted folder, or
- Push it to GitHub and import the repository.
- No build command is required.
- Publish directory: `.` (the project root).

## Personalise before publishing
The résumé did not contain actual GitHub, LinkedIn or project URLs. In `index.html`, search for:
- `data-social="github"` and `data-social="linkedin"`
- `data-link="training"`, `training-github`, `crowd`, and `shop`

Replace the placeholder `href="#"` values with the correct URLs. The site currently displays a friendly reminder when these placeholders are clicked.

Update the résumé PDF at `assets/Misbah_Khan_Resume.pdf` if you replace the CV.

## Files
- `index.html` — page content and sections
- `styles.css` — responsive design, glass UI and animations
- `script.js` — mobile navigation, reveal animations, hover effects and copy-email interaction
- `assets/Misbah_Khan_Resume.pdf` — résumé download


## Mini project browser previews
Project cards now include a miniature browser-style window. Deployed websites are embedded as live previews where the host allows iframe embedding. Some websites may block embedding through their security headers; use the visible "Open full website" link in that case. Projects that currently have only GitHub repositories show a repository preview panel instead of a fake live website. Add a deployed demo URL to the relevant iframe in `index.html` when one becomes available.
