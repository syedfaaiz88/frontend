import React from "react";
import { Achievement } from "./Achievement";

const Bodybuilding = () => {
  const achievements = [
    {
      name: "Progress",
      items: [
        {
          name: "2024-08-29",
          completed: true,
          details: {
            bicep: "16 inches",
            chest: "42 inches",
            waist: "34 inches",
            thigh: "24 inches",
            neck: "17 inches",
            shoulder: "48 inches",
            forearm: "13 inches",
          },
          photos: [
            "/images/bodybuilding/1_20231227.jpg",
            "/images/bodybuilding/2_20231227.jpg",
            "/images/bodybuilding/3_20231227.jpg",
            "/images/bodybuilding/4_20231227.jpg",
            "/images/bodybuilding/5_20231227.jpg",
          ],
          youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",          
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-2">
      <header className="text-center mb-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          Bodybuilding
        </h1>
        <p className="text-lg text-gray-600">
          Strength, Discipline, and Perseverance
        </p>
      </header>
      <div className=" grid grid-cols-1">
        <Achievement achievements={achievements} />
      </div>
    </div>
  );
};

export default Bodybuilding;
