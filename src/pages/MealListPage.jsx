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
        <div className="py-12 px-6 bg-gray-50 min-h-screen relative">
            {/* Back button top-right */}
            <button
                onClick={() => navigate("/")}
                className="absolute top-10 right-10 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-4 rounded-lg transition"
            >
                ← Back to Home
            </button>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-gray-800 tracking-wide">
                Recipes for "{ingredient}"
            </h2>

            {/* Subtext */}
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Explore a variety of delicious recipes containing "{ingredient}". Click on any recipe to see more details and get inspired to cook something amazing today!
            </p>

            {loading ? (
                <p className="text-gray-500 text-center text-lg">Loading meals...</p>
            ) : (
                <MealList meals={meals} />
            )}

        </div>

    );
};

export default MealListPage;
