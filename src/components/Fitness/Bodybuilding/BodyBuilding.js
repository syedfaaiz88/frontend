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
        "/images/bodybuilding/5_20231227.jpg"
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
    }
  ];

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
            Detailed description of my bodybuilding experience, achievements,
            and routines.
          </p>
          <BodyStatsTimeline stats={stats} />
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
