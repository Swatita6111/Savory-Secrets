import React, { useState } from "react";
import MealDetails from "./MealDetails";
import MealCard from "./MealCard";

const MealList = function ({ meals }) {
    const [selectedMeal, setSelectedMeal] = useState(null);

    if (!meals.length)
        return <p className="text-gray-500">No meals found. Try another ingredient.</p>;

    return (
        <div className="px-20 sm:px-16 md:px-12 lg:px-24 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {meals.map((meal) => (
                <div
                    key={meal.idMeal}
                    className="w-full"
                    style={{ maxWidth: "300px" }}
                >
                    <MealCard
                        meal={meal}
                        onSelect={() => setSelectedMeal(meal.idMeal)}
                    />
                </div>
            ))}

            {selectedMeal && (
                <MealDetails id={selectedMeal} onClose={() => setSelectedMeal(null)} />
            )}
        </div>

    );
};

export default MealList;
