import React from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";

const Bodybuilding = () => {
  // List of achievements with their completion status for different categories
  const achievements = {
    muscleGroups: [
      { name: "Developed Six-Pack Abs", completed: true },
      { name: "Built Strong Biceps", completed: true },
      { name: "Achieved Well-Defined Chest", completed: true },
      { name: "Gained Impressive Leg Mass", completed: true },
    ],
    liftingTechniques: [
      { name: "Deadlifts with Proper Form", completed: true },
      { name: "Squats with Heavy Weights", completed: true },
      { name: "Bench Press to Max Capacity", completed: false },
      { name: "Advanced Olympic Lifts", completed: false },
    ],
    competitionLevels: [
      { name: "Participated in Local Competitions", completed: true },
      { name: "Achieved Top 3 in a Regional Event", completed: false },
      { name: "Qualified for National Level", completed: false },
      { name: "Won a Bodybuilding Championship", completed: false },
    ],
  };

  return (
    <div className="min-h-screen mt-20 min-w-full">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Bodybuilding
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src="/path-to-bodybuilding-image.jpg"
          alt="Bodybuilding"
        />
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            My Bodybuilding Journey
          </h2>
          <p className="text-gray-700 mb-10">
            Detailed description of my bodybuilding experience, achievements, and routines.
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
              Watch My Routine:
            </h3>
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/your-video-id" // Replace with your YouTube video link
                title="Bodybuilding Routine"
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

export default Bodybuilding;
