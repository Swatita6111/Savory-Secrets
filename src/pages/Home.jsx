import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [ingredient, setIngredient] = useState("");
    const navigate = useNavigate();

    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1648912478909-5f6525e26cc3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1570",
        "https://images.unsplash.com/photo-1723962807917-ffab0600929c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    ]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!ingredient.trim()) return;

        // Navigate to MealList page with ingredient query
        navigate(`/meals?ingredient=${encodeURIComponent(ingredient)}`);
    };

    const swapImages = () => {
        // Swap background (0) and bottom-right (1)
        setImages([images[1], images[0]]);
    };


    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <div
                className="relative h-[90vh] w-full flex"
                style={{
                    backgroundImage: `url('${images[0]}')`, backgroundSize: "100% auto",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Left side dark overlay for content */}
                <div className="absolute top-0 left-0 h-full w-2/5 bg-black/75"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center items-center px-12 py-6 w-2/5 text-white">
                    <h1 className="text-2xl md:text-4xl font-bold mb-8 text-left text-teal-500">
                        <i>Savory Secrets</i>
                    </h1>

                    {/* Small message under heading */}
                    <p className="text-sm md:text-base mb-16 text-left max-w-xs">
                        Discover thousands of delicious recipes tailored to your taste. Explore, search by ingredients, and enjoy cooking from home!
                    </p>

                    <form
                        onSubmit={handleSearch}
                        className="flex flex-col sm:flex-row gap-3 w-full max-w-md justify-center"
                    >
                        <input
                            type="text"
                            value={ingredient}
                            onChange={(e) => setIngredient(e.target.value)}
                            placeholder="Enter an ingredient (e.g., chicken)"
                            className="px-4 py-3 w-60 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800"
                        />
                        <button
                            type="submit"
                            className="bg-teal-500 rounded-lg hover:bg-teal-600 px-6 py-3 font-semibold transition w-30"
                        >
                            Search
                        </button>
                    </form>
                </div>


                {/* Bottom-right dark opacity image */}
                <div
                    onClick={swapImages}
                    className="absolute bottom-0 right-0 w-60 h-40 bg-black/70 flex items-center justify-center shadow-lg cursor-pointer"
                >
                    <img
                        src={images[1]}
                        alt="Decorative"
                        className="w-5/6 h-auto shadow-md opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                </div>




            </div>


            {/* About Section */}
            <div className="relative py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto flex flex-col mt-16 md:flex-row items-center justify-between gap-8">

                    {/* Right - Image with accent shape */}
                    <div className="md:w-1/2 relative">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1694977744065-2ba87511e905?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871"
                            alt="Recipes"
                            className=" shadow-xl object-cover w-full h-90 md:h-[400px]"
                        />
                    </div>


                    {/* Left - Text */}
                    <div className="md:w-1/2 px-6 md:pr-12">
                        <h2 className="text-4xl mb-14 text-teal-500">
                            About Us
                        </h2>
                        <p className="text-gray-600 mb-3 text-base md:text-lg">
                            Discover thousands of delicious recipes tailored to your taste.
                            Search by ingredients, explore new dishes, and enjoy cooking from the comfort of your home.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg">
                            From quick weeknight dinners to gourmet meals, our recipes are easy to follow and perfect for every skill level.
                        </p>
                    </div>

                </div>
            </div>


            {/* Recipes Slider */}
            <div className="py-12 px-6 bg-white mt-16">
                <h2 className="text-4xl mb-4 text-teal-500 text-center tracking-wide">
                    Explore Recipes
                </h2>
                <p className="text-gray-600 text-lg text-center mb-20">
                    Discover mouthwatering dishes made from your favorite ingredients!
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
                    {[
                        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
                        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
                        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
                        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1498",
                        "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600",
                    ].map((img, index) => (
                        <div
                            key={index}
                            className="rounded-xl overflow-hidden shadow-md hover:scale-105 transform transition duration-300"
                        >
                            <img
                                src={img}
                                alt={`Featured recipe ${index + 1}`}
                                className="object-cover w-full h-40"
                            />
                        </div>
                    ))}
                </div>
            </div>


            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* --- Brand Section --- */}
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-3">🍴 Recipe Ideas</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Discover delicious recipes, explore new cuisines, and make cooking fun again!
                        </p>
                    </div>

                    {/* --- Quick Links --- */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/" className="hover:text-teal-400 transition">Home</a>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="hover:text-teal-400 transition"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        document.getElementById("recipes-section")?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="hover:text-teal-400 transition"
                                >
                                    Recipes
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* --- Social Media (Images) --- */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                                    alt="Facebook"
                                    className="w-8 h-8 hover:scale-110 transition"
                                />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                                    alt="Instagram"
                                    className="w-8 h-8 hover:scale-110 transition"
                                />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                                    alt="Twitter"
                                    className="w-8 h-8 hover:scale-110 transition"
                                />
                            </a>
                            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                                    alt="Pinterest"
                                    className="w-8 h-8 hover:scale-110 transition"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- Divider --- */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()}{" "}
                    <span className="text-teal-400 font-semibold">Recipe Ideas</span>. All rights reserved.
                </div>
            </footer>

        </div>
    );
};

export default Home;
