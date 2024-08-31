import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Powerlifting = () => {
  // List of achievements with their dates
  const achievements = [
    {
      date: "March 2023",
      lifts: {
        benchPress: "50kg",
        deadlift: "80kg",
        squat: "50kg",
      },
    },
    {
      date: "May 2023",
      lifts: {
        benchPress: "55kg",
        deadlift: "85kg",
        squat: "55kg",
      },
    },
    {
      date: "July 2023",
      lifts: {
        benchPress: "60kg",
        deadlift: "90kg",
        squat: "60kg",
      },
    },
    {
      date: "October 2023",
      lifts: {
        benchPress: "65kg",
        deadlift: "95kg",
        squat: "65kg",
      },
    },
  ];

  return (
    <div className="min-h-screen mt-20 min-w-full">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Power Lifting
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg border border-b-2 overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src="/path-to-weightlifting-image.jpg"
          alt="Weight Lifting"
        />
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            My Power Lifting Journey
          </h2>
          <p className="text-gray-700 mb-10">
            Follow my progress in powerlifting as I strive to achieve new
            personal bests.
          </p>

          {/* Achievements Section with Responsive Grid */}
          <div className="relative py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg border border-b-2 flex flex-col items-center"
                >
                  <FaCheckCircle className="text-green-500 text-2xl mb-2" />
                  <p className="text-xl font-semibold text-gray-700 mb-2">
                    {achievement.date}
                  </p>
                  <div className="text-center text-gray-600">
                    <p>
                      Bench Press:{" "}
                      <span className="font-bold">
                        {achievement.lifts.benchPress}
                      </span>
                    </p>
                    <p>
                      Deadlift:{" "}
                      <span className="font-bold">
                        {achievement.lifts.deadlift}
                      </span>
                    </p>
                    <p>
                      Squat:{" "}
                      <span className="font-bold">
                        {achievement.lifts.squat}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
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

export default Powerlifting;
