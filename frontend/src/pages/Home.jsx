import React from "react";
import {
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaCode,
  FaSignInAlt,
} from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useAppContext();
  const { user, isAuthenticated } = useAuth();

  const features = [
    {
      icon: FaRocket,
      title: "Fast & Modern",
      description:
        "Built with the latest technologies for optimal performance.",
    },
    {
      icon: FaLightbulb,
      title: "Innovative Design",
      description: "Beautiful, responsive design that adapts to any device.",
    },
    {
      icon: FaUsers,
      title: "User Friendly",
      description: "Intuitive interface designed with the user in mind.",
    },
    {
      icon: FaCode,
      title: "Clean Code",
      description:
        "Well-structured, maintainable codebase following best practices.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          {isAuthenticated
            ? `Welcome back, ${user.name}!`
            : "Welcome to Hackathon"}
        </h1>
        <p
          className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {isAuthenticated
            ? "You're successfully logged in. Explore our features and enjoy your experience!"
            : "A modern, professional React application built with cutting-edge technologies."}
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-teal-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className={`${
                theme === "dark"
                  ? "bg-gray-800/60 backdrop-blur-sm border-gray-700"
                  : "bg-white/60 backdrop-blur-sm border-gray-200"
              } rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          {isAuthenticated ? "Ready to Explore?" : "Ready to Get Started?"}
        </h2>
        <p className="text-xl mb-6 opacity-90">
          {isAuthenticated
            ? "You're all set! Explore our features and discover what makes this application special."
            : "Sign in to your account and explore our features and discover what makes this application special."}
        </p>
        {!isAuthenticated && (
          <Link
            to="/login"
            className="inline-flex items-center space-x-2 bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <FaSignInAlt className="w-5 h-5" />
            <span>Sign In</span>
          </Link>
        )}
        {isAuthenticated && (
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Explore Features
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
