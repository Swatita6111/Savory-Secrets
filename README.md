# Recipe Ideas — TheMealDB Example

This is a small React (Vite) project demonstrating how to search recipes by ingredient using TheMealDB API.

## Features
- Search recipes by ingredient (e.g., `chicken`, `tomato`, `rice`)
- View results with thumbnail and title
- Click a meal to view details (ingredients, instructions, category, region, links)
- Basic error handling and loading states

## How to run locally
1. Install dependencies:
```bash
npm install
```
2. Run the dev server:
```bash
npm run dev
```
3. Open the URL shown by Vite (usually http://localhost:5173)

## API used
- TheMealDB: https://www.themealdb.com/api.php
- Example endpoints used:
  - `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}`
  - `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`

## Notes
- This project is intentionally minimal and focuses on clarity and ease of use.
- To build for production: `npm run build`

## ChatGPT / Work notes
Use this project as the basis for your take-home submission. If you need a deployable link, open this project in CodeSandbox or StackBlitz and run the dev server there.

