import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header/Header";

const LandingPage = () => {
  return (
    <div className="font-sans antialiased bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col items-center justify-center">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 md:mb-8">
            Syed Faaiz' here
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Discover My World
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto mb-6">
            Welcome to my corner of the internet! Dive in to explore who I am
            and what drives my passion. Let's embark on this journey together
            and make meaningful connections.
          </p>
        </section>
        <Link
          to="/personal"
          className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-semibold rounded-full shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
        >
          Get to Know Me
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;