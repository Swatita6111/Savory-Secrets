import React, { useEffect, useState } from "react";
import { getMealDetailsById } from "../api/meals";

const MealDetails = ({ id, onClose }) => {
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        getMealDetailsById(id).then(setMeal);
    }, [id]);

    if (!meal)
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white z-50">
                Loading...
            </div>
        );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-auto">
            <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl p-6 flex flex-col md:flex-row gap-6">

                {/* Left Side: Image + Category + Area */}
                <div className="md:w-1/3 flex flex-col gap-4 flex-shrink-0">
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="rounded-lg w-full h-auto object-cover shadow-lg"
                    />
                    <div className="flex flex-col gap-2 mt-4">
                        <span className="bg-teal-100 text-teal-800 font-semibold px-3 py-1 rounded-full text-center">
                            Category: {meal.strCategory}
                        </span>
                        <span className="bg-orange-100 text-orange-800 font-semibold px-3 py-1 rounded-full text-center">
                            Area: {meal.strArea}
                        </span>
                    </div>
                </div>

                {/* Right Side: Recipe */}
                <div className="md:w-2/3 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{meal.strMeal}</h2>

                        <ul className="list-disc list-inside text-gray-700 max-h-[50vh] overflow-y-auto mb-6">
                            {meal.strInstructions
                                ?.split('. ') // split by sentences
                                .map((step, idx) =>
                                    step.trim() ? <li key={idx}>{step.trim()}.</li> : null
                                )}
                        </ul>
                    </div>


                    {/* Bottom-right YouTube Button */}
                    {meal.strYoutube && (
                        <div className="flex justify-end">
                            <a
                                href={meal.strYoutube}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                            >
                                Watch on YouTube
                            </a>
                        </div>
                    )}
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-3xl font-bold"
                >
                    ✕
                </button>
            </div>
        </div>

    );
};

export default MealDetails;
