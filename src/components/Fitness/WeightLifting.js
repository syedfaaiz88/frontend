import React from "react";

const WeightLifting = () => {
  return (
    <div className="min-h-screen mt-4 min-w-full">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Weight Lifting
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src="/path-to-taekwondo-image.jpg"
          alt="Taekwondo"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            My Weight Lifting Journey
          </h2>
          <p className="text-gray-600 mb-4">
            Detailed description of my Weight Lifting experience, achievements,
            and techniques.
          </p>
          <div className="bg-gray-200 p-4 rounded-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Highlights:
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Developed Six-Pack Abs</li>
              <li>Performed Advanced Lifting Techniques</li>
              <li>Participated in Local Bodybuilding Events</li>
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

export default WeightLifting;
