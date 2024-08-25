import React from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";

const Calisthenics = () => {
  // List of achievements with their completion status for different categories
  const achievements = {
    skills: [
      { name: "Handstand Push-Ups", completed: true },
      { name: "Muscle-Ups", completed: true },
      { name: "Front Lever", completed: false },
      { name: "Planche", completed: false },
    ],
    strengthGoals: [
      { name: "One Arm Pull-Up", completed: false },
      { name: "Freestanding Handstand", completed: true },
      { name: "Full Human Flag", completed: false },
      { name: "Weighted Dips (100kg)", completed: true },
    ],
  };

  return (
    <div className="min-h-screen mt-20 min-w-full">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Calisthenics
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src="/path-to-calisthenics-image.jpg"
          alt="Calisthenics"
        />
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            My Calisthenics Journey
          </h2>
          <p className="text-gray-700 mb-10">
            Detailed description of my calisthenics experience, achievements, and skills.
          </p>

          {/* Achievements Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(achievements).map(([category, items]) => (
              <div key={category} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <ul className="space-y-3">
                  {items.map((achievement, index) => (
                    <li key={index} className="flex items-center text-gray-800">
                      {achievement.completed ? (
                        <FaCheckCircle className="text-green-500 mr-3 text-xl" />
                      ) : (
                        <FaCircle className="text-gray-400 mr-3 text-xl" />
                      )}
                      <span>
                        {achievement.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Watch My Skills:
            </h3>
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/your-video-id" // Replace with your YouTube video link
                title="Calisthenics Skills"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calisthenics;
