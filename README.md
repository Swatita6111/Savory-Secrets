# Recipe Ideas (Savory Secrets)

## Project Overview
This is a web application designed to help busy professionals like Taylor discover recipes based on the ingredients they have at home. The app allows users to explore recipes quickly, get inspired to cook, and view detailed instructions for each meal.

**Key Features:**
- Search recipes by **ingredient**.
- View detailed recipe instructions and images.
- Responsive and user-friendly design.
- SweetAlert notifications for empty search results or errors.

---

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **API:** [TheMealDB](https://www.themealdb.com/api.php)
- **Routing:** React Router
- **Alerts:** SweetAlert2

---

## API Usage
- **Get meals by ingredient:**
  `GET https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}`

- **Get meal details by ID:**  
  `GET https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`


---

## Installation
- **Clone the repository:**
git clone <your-repo-url>

- **Install dependencies:**
npm install

- **Start the development server:**
npm run dev

## Folder Structure
src/
 ├─ api/           # API helper functions
 ├─ components/    # Reusable components like MealList
 ├─ pages/         # Pages like Home, MealListPage
 ├─ App.jsx        # Main app component with routing
 └─ index.css      # Tailwind & custom styles

## How to Use

Open the application and enter the ingredients you have.
Filter recipes by available cooking time.
Browse recipe suggestions and select one to view details.
Save your favorite recipes for quick access later.

## Notes

Ensure Node.js and npm are installed before running the project.
The project can be extended to include features like user authentication, meal planning, and shopping lists.
Code is modular for easier maintenance and scalability.
TheMealDB API provides meal names, images, ingredients, and cooking instructions.
If no recipes are found for a given ingredient, users are notified via SweetAlert and redirected to the home page.

## Author

Swatita Ray Nayak
GitHub: https://github.com/Swatita6111
Email: swatitaraynayak2001@gmail.com
