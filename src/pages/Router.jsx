import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MealListPage from "./MealListPage"; // Page to display meals

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<MealListPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
