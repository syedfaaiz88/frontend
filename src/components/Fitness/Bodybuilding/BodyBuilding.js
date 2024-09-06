import React from "react";
import BodyStatsTimeline from "./BodyStatsTimeline";

const Bodybuilding = () => {
  const stats = [
    {
      date: "2024-08-29",
      photos: [
        "/images/bodybuilding/1_20231227.jpg",
        "/images/bodybuilding/2_20231227.jpg",
        "/images/bodybuilding/3_20231227.jpg",
        "/images/bodybuilding/4_20231227.jpg",
        "/images/bodybuilding/5_20231227.jpg",
      ],
      measurements: {
        bicep: "16 inches",
        chest: "42 inches",
        waist: "34 inches",
        thigh: "24 inches",
        calf: "15 inches",
        neck: "17 inches",
        shoulder: "48 inches",
        forearm: "13 inches",
        hip: "40 inches",
      },
    },
  ];

  return (
    <div className="min-h-screen p-2">
      <header className="text-center mb-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Bodybuilding</h1>
        <p className="text-lg text-gray-600">
          Strength, Discipline, and Perseverance
        </p>
      </header>
      <BodyStatsTimeline stats={stats} />
    </div>
  );
};

export default Bodybuilding;
