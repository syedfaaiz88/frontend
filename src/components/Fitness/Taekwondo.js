import React from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";

const Taekwondo = () => {
  // List of achievements with their completion status
  const achievements = {
    pumsae: [
      { name: "Taegeuk Il Jang", completed: true }, // 태극 1장
      { name: "Taegeuk Ee Jang", completed: true }, // 태극 2장
      { name: "Taegeuk Sam Jang", completed: true }, // 태극 3장
      { name: "Taegeuk Sa Jang", completed: true }, // 태극 4장
      { name: "Taegeuk Oh Jang", completed: true }, // 태극 5장
      { name: "Taegeuk Yuk Jang", completed: true }, // 태극 6장
      { name: "Taegeuk Chil Jang", completed: false }, // 태극 7장
      { name: "Taegeuk Pal Jang", completed: false }, // 태극 8장
    ],
    kicks: [
      { name: "Ap Chagi", completed: true },
      { name: "Yop Chagi", completed: true },
      { name: "Dollyo Chagi", completed: true },
      { name: "Dwi Chagi", completed: true },
      { name: "Huryeo Chagi", completed: false },
      { name: "Naeryo Chagi", completed: false },
    ],
    belts: [
      { name: "White Belt", completed: true },
      { name: "Yellow Belt", completed: true },
      { name: "Green Belt", completed: true },
      { name: "Blue Belt", completed: true },
      { name: "Red Belt", completed: true },
      { name: "Black Belt", completed: false },
    ]
  };

  return (
    <div className="min-h-screen mt-20 min-w-full">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Taekwondo</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg border border-b-2 overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src="/path-to-taekwondo-image.jpg"
          alt="Taekwondo"
        />
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">My Taekwondo Journey</h2>
          <p className="text-gray-700 mb-10">
            Detailed description of my Taekwondo experience, achievements, and techniques.
          </p>

          {/* Achievements Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(achievements).map(([category, items]) => (
              <div key={category} className="bg-gray-50 p-6 rounded-lg border border-b-2">
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
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Watch My Skills:</h3>
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/your-video-id" // Replace with your YouTube video link
                title="Taekwondo Skills"
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

export default Taekwondo;
