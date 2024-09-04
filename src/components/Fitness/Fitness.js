import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaFistRaised } from "react-icons/fa";
import { GiHighKick, GiWeightLiftingUp } from "react-icons/gi";
import { LuDumbbell } from "react-icons/lu";

const Fitness = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        My Fitness Journey
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl">
        <Link
          to="taekwondo"
          className="bg-white rounded-lg border border-b-2 overflow-hidden hover:bg-gray-50"
        >
          <div className="p-6 flex flex-col items-center">
            <GiHighKick className="text-5xl mb-4 text-gray-500" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Taekwondo</h2>
          </div>
        </Link>
        <Link
          to="calisthenics"
          className="bg-white rounded-lg border border-b-2 overflow-hidden hover:bg-gray-50"
        >
          <div className="p-6 flex flex-col items-center">
            <FaFistRaised className="text-5xl mb-4 text-gray-500" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Calisthenics
            </h2>
          </div>
        </Link>
        <Link
          to="bodybuilding"
          className="bg-white rounded-lg border border-b-2 overflow-hidden hover:bg-gray-50"
        >
          <div className="p-6 flex flex-col items-center">
            <LuDumbbell className="text-5xl mb-4 text-gray-500" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Bodybuilding
            </h2>
          </div>
        </Link>
        <Link
          to="powerlifting"
          className="bg-white rounded-lg border border-b-2 overflow-hidden hover:bg-gray-50"
        >
          <div className="p-6 flex flex-col items-center">
            <GiWeightLiftingUp className="text-5xl mb-4 text-gray-500" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Powerlifting
            </h2>
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Fitness;
