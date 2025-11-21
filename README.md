# Recipe Manager

Small single-page recipe manager that uses localStorage to persist recipes and vanilla JS for UI.

## Quick start

- Open [index.html](index.html) in a browser to view the recipe list.
- Use "Add Recipe" to create recipes via [add-edit.html](add-edit.html).
- Click "View" to open recipe details in [receipe.html](receipe.html).

## Folder structure

- [add-edit.html](add-edit.html)
- [index.html](index.html)
- [receipe.html](receipe.html)
- [README.md](README.md)
- css/
  - [style.css](css/style.css)
- images/ (assets)
- js/
  - [add-edit.js](js/add-edit.js)
  - [app.js](js/app.js)
  - [home.js](js/home.js)
  - [receipe.js](js/receipe.js)
  - [storage.js](js/storage.js)
- receipe-manager/ (extra folder)

## Files I worked on (high level)

- Page logic and forms
  - Form initialization & submit handling: [`initForm`](js/add-edit.js) — [js/add-edit.js](js/add-edit.js)
  - Home list, filters and UI rendering: [`displayRecipes`](js/home.js), [`applyFilters`](js/home.js), [`initHome`](js/home.js) — [js/home.js](js/home.js)
  - Recipe detail and delete handler: DOM load + [`deleteRecipe`](js/receipe.js) — [js/receipe.js](js/receipe.js)
- Storage & core helpers
  - Core storage helpers and seed data: [`getRecipes`](js/app.js), [`saveRecipes`](js/app.js), [`preloadInitialRecipes`](js/app.js), [`getRecipeById`](js/app.js), [`addRecipe`](js/app.js), [`updateRecipe`](js/app.js), [`deleteRecipe`](js/app.js) — [js/app.js](js/app.js)
  - There is an alternate/duplicate implementation in [js/storage.js](js/storage.js) providing [`getRecipes`](js/storage.js), [`saveRecipes`](js/storage.js), [`preloadInitialRecipes`](js/storage.js)

## CSS — small details I implemented / are using

See [css/style.css](css/style.css) for full rules. Notable points:

- Gradient animated background: `background: linear-gradient(...)` + `@keyframes gradientBG`.
- Header & footer use matching linear-gradient backgrounds for consistent brand color.
- Responsive grid: `.grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }`.
- Card styling: `.card` with shadow, hover lift (`transform: translateY(-5px)`).
- Form styling: centered max-width form with focus outlines and subtle box-shadow.
- Filters area: responsive layout with inputs and select styled for focus/hover.
- Mobile tweaks via media queries for filters and footer readability.

## LocalStorage — what I used & learned

- All recipes are stored under the key `"recipes"` as a JSON string.
  - Primary helpers: [`getRecipes`](js/app.js) / [`getRecipes`](js/storage.js) and [`saveRecipes`](js/app.js) / [`saveRecipes`](js/storage.js).
- `getRecipes` should parse JSON safely (you used try/catch in [js/app.js](js/app.js) to recover from corrupted data).
- `preloadInitialRecipes` seeds sample data only when storage is empty — implemented in both [js/app.js](js/app.js) and [js/storage.js](js/storage.js).
- CRUD operations:
  - Create: [`addRecipe`](js/app.js)
  - Read: [`getRecipeById`](js/app.js)
  - Update: [`updateRecipe`](js/app.js)
  - Delete: [`deleteRecipe`](js/app.js) and a separate delete in [js/receipe.js](js/receipe.js) (UI delete + redirect)
- Practical notes / lessons learned:
  - Id typing matters: IDs are generated with `Date.now()` (number). When reading URL params you must convert to Number before strict comparison. You used `Number(id)` in [js/add-edit.js](js/add-edit.js) but in [js/receipe.js](js/receipe.js) you compare with `==` — standardize to `===` with matching types to avoid subtle bugs.
  - Always stringify before saving and parse when reading. Keep a try/catch to handle broken data.
  - Avoid duplicate implementations: you have storage helpers duplicated in [js/app.js](js/app.js) and [js/storage.js](js/storage.js). Prefer a single source to avoid divergence.
  - UI code fetches fresh data from storage for filters and list rendering (`applyFilters` in [js/home.js](js/home.js) calls [`getRecipes`](js/app.js)`) so storage updates reflect immediately after save.

## Quick tips & TODOs

- Consolidate storage helpers into one file (keep [js/storage.js](js/storage.js) or [js/app.js](js/app.js) and remove duplicates).
- Normalize ID type usage throughout code (always Number or always string).
- Add form validation for arrays (ingredients/steps) to filter out empty entries.
- Consider small UX additions: confirm modal before delete, image placeholders for missing images.

---

## Known Issues

Error Handling: While the app gracefully handles corrupted localStorage, it might not recover from significant issues in the storage data. Always ensure the data structure remains consistent.

UI Layout: The layout might not look great on very small screen sizes, especially when many recipes are listed.

UI Layout for second card: The second card has issue, It automatically shows the card 1 details even It is removed from local storage as well as the data storage file. While handling try to hard refresh the site using Ctrl+ shift + R. By using this the issue will be resolved.

Image URLs: If an invalid or broken image URL is provided, the recipe card may not display the image.
