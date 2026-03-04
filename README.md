# lien_migrations

Shared slideshow app files are kept at repository root:
- `index.html`
- `viewer.js`
- `styles.css`
- `README.md`

Deck-specific files stay in deck folders (for example `presences-capverdiennes/`).

## URL format

Use query param `deck` plus hash route `#<lang>/<slide-id>`.

Local:
- `http://localhost:8000/?deck=presences-capverdiennes#en/01-page`
- `http://localhost:8000/?deck=presences-capverdiennes#fr/01-page`

GitHub Pages:
- `https://c2dh.github.io/lien_migrations/?deck=presences-capverdiennes#en/01-page`
- `https://c2dh.github.io/lien_migrations/?deck=presences-capverdiennes#fr/01-page`