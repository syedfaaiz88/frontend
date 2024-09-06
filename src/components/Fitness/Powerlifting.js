import React from "react";
import { Achievement } from "./Achievement";

const Powerlifting = () => {
  const achievements = [
    {
      name: "Lifts",
      items: [
        {
          name: "March 2023",
          completed: true,
          details: {
            benchPress: "50kg",
            deadlift: "80kg",
            squat: "50kg",
          },
        },
        {
          name: "May 2023",
          completed: true,
          details: {
            benchPress: "55kg",
            deadlift: "85kg",
            squat: "55kg",
          },
        },
        {
          name: "July 2023",
          completed: true,
          details: {
            benchPress: "60kg",
            deadlift: "90kg",
            squat: "60kg",
          },
        },
        {
          name: "October 2023",
          completed: true,
          details: {
            benchPress: "65kg",
            deadlift: "95kg",
            squat: "65kg",
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-2">
      <header className="text-center mb-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          Power Lifting
        </h1>
        <p className="text-lg text-gray-600">
          I strive to achieve new personal bests.
        </p>
      </header>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Achievement achievements={achievements} />
      </div>
    </div>
  );
};

export default Powerlifting;
