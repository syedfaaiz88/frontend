import React from "react";

const Calisthenics = () => {
  return (
    <div className="min-h-screen mt-4 min-w-full">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Calisthenics
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src="/path-to-calisthenics-image.jpg"
          alt="Calisthenics"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            My Calisthenics Journey
          </h2>
          <p className="text-gray-600 mb-4">
            Detailed description of my calisthenics experience, achievements,
            and skills.
          </p>
          <div className="bg-gray-200 p-4 rounded-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Skills:
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Handstand Push-Ups</li>
              <li>Advanced Core Exercises</li>
              <li>Mastered Various Bodyweight Techniques</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Watch My Skills:
            </h3>
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
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

export default Calisthenics;
