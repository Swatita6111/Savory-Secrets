import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import MealList from "../components/MealList";
import { getMealsByIngredient } from "../api/meals"; // import your API function
import { useNavigate } from "react-router-dom";

const MealListPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const ingredient = query.get("ingredient");
  const navigate = useNavigate();

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!ingredient) return;

    const fetchMeals = async () => {
      setLoading(true);
      try {
        const mealsData = await getMealsByIngredient(ingredient);
        if (!mealsData || mealsData.length === 0) {
          Swal.fire({
            icon: "error",
            title: "No meals found",
            text: `No recipes found for "${ingredient}". Try another ingredient!`,
            customClass: {
              confirmButton: "bg-purple-600 hover:bg-purple-700 text-white",
            },
            confirmButtonText: "OK",
          }).then(() => {
            navigate("/");
          });

          setMeals([]);
        } else {
          setMeals(mealsData);
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message || "Something went wrong!",
        });
      }
      setLoading(false);
    };

    fetchMeals();
  }, [ingredient]);

  return (
    <div className="py-16 px-4 sm:px-8 bg-gray-50 min-h-screen relative flex flex-col items-center">
      {/* Back button top-right */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 sm:top-10 sm:right-10 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-3 sm:py-3 sm:px-4 rounded-lg text-sm sm:text-base transition"
      >
        ← Back to Home
      </button>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-12 mb-4 text-center text-gray-800 tracking-wide px-2">
        Recipes for "<span className="text-teal-600">{ingredient}</span>"
      </h2>

      {/* Subtext */}
      <p className="text-center text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto px-4 text-sm sm:text-base leading-relaxed">
        Explore a variety of delicious recipes containing "
        <span className="font-medium text-teal-600">{ingredient}</span>". Click
        on any recipe to see more details and get inspired to cook something
        amazing today!
      </p>

      {/* Loading or Meal List */}
      {loading ? (
        <p className="text-gray-500 text-center text-lg">Loading meals...</p>
      ) : (
        <div className="w-full flex justify-center">
          <MealList meals={meals} />
        </div>
      )}
    </div>
  );
};

export default MealListPage;
