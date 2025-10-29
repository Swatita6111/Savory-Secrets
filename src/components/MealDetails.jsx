import React, { useEffect, useState } from "react";
import { getMealDetailsById } from "../api/meals";
import { FaYoutube } from "react-icons/fa";

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
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl p-4 sm:p-6 flex flex-col md:flex-row gap-6">
        {/* Left Side: Image + Category + Area */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-4 flex-shrink-0">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-lg w-full max-h-80 object-cover shadow-lg"
          />
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 mt-2 w-full justify-center md:justify-start">
            <span className="bg-teal-100 text-teal-800 font-semibold px-3 py-1 rounded-full text-center text-sm sm:text-base">
              Category: {meal.strCategory}
            </span>
            <span className="bg-orange-100 text-orange-800 font-semibold px-3 py-1 rounded-full text-center text-sm sm:text-base">
              Area: {meal.strArea}
            </span>
          </div>
        </div>

        {/* Right Side: Recipe */}
        <div className="w-full md:w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
              {meal.strMeal}
            </h2>

            <ul className="list-disc list-inside text-gray-700 max-h-[45vh] overflow-y-auto mb-6 space-y-2 text-sm sm:text-base leading-relaxed">
              {meal.strInstructions
                ?.split(". ")
                .map((step, idx) =>
                  step.trim() ? <li key={idx}>{step.trim()}.</li> : null
                )}
            </ul>
          </div>

          {/* Bottom-right YouTube Button */}
          {meal.strYoutube && (
            <div className="flex justify-center md:justify-end mt-4">
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 sm:py-3 px-5 sm:px-6 rounded-lg transition duration-300 text-sm sm:text-base"
              >
                <FaYoutube className="text-xl" />
                Watch on YouTube
              </a>
            </div>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl sm:text-3xl font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default MealDetails;
