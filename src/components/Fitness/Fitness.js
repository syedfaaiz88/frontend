import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaFistRaised } from "react-icons/fa";
import { GiBiceps, GiHighKick, GiWeightLiftingUp } from "react-icons/gi";

const Fitness = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="text-gray-600 border-b">
        <div className="container mx-auto flex flex-wrap justify-around items-center">
          <Link
            to="taekwondo"
            className="flex flex-col items-center text-center p-2 md:p-4 hover:text-green-500 transition duration-300"
          >
            <GiHighKick className="text-3xl md:text-4xl mb-2" />
            <h2 className="text-sm md:text-lg font-semibold">Taekwondo</h2>
          </Link>
          <Link
            to="calisthenics"
            className="flex flex-col items-center text-center p-2 md:p-4 hover:text-green-500 transition duration-300"
          >
            <FaFistRaised className="text-3xl md:text-4xl mb-2" />
            <h2 className="text-sm md:text-lg font-semibold">Calisthenics</h2>
          </Link>
          <Link
            to="bodybuilding"
            className="flex flex-col items-center text-center p-2 md:p-4 hover:text-green-500 transition duration-300"
          >
            <GiBiceps className="text-3xl md:text-4xl mb-2" />
            <h2 className="text-sm md:text-lg font-semibold">Bodybuilding</h2>
          </Link>
          <Link
            to="powerlifting"
            className="flex flex-col items-center text-center p-2 md:p-4 hover:text-green-500 transition duration-300"
          >
            <GiWeightLiftingUp className="text-3xl md:text-4xl mb-2" />
            <h2 className="text-sm md:text-lg font-semibold">Powerlifting</h2>
          </Link>
        </div>
      </header>
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Fitness;
