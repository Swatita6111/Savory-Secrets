import React from "react";

const MealCard = function ({ meal, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className="cursor-pointer bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg text-gray-800">{meal.strMeal}</h2>
      </div>
    </div>
  );
};


export default MealCard;
