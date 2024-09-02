import React from "react";
import { CalisthenicsAchievementCard } from "./CalisthenicsAchievementCard";

const achievements = {
  "Basic Skills": [
    {
      skill: "PushUp",
      completed: true,
      details: {
        time: 0,
        reps: 20,
        notes: "Full-range push-ups, good form.",
      },
    },
    {
      skill: "PullUp",
      completed: true,
      details: {
        time: 0,
        reps: 10,
        notes: "Full-body pull-ups, complete range of motion.",
      },
    },
    {
      skill: "ChinUp",
      completed: true,
      details: {
        time: 0,
        reps: 15,
        notes: "Chin-ups with good form.",
      },
    },
    {
      skill: "Dips",
      completed: true,
      details: {
        time: 0,
        reps: 15,
        notes: "Can perform standard dips with good depth.",
      },
    },
    {
      skill: "Leg Raise",
      completed: true,
      details: {
        time: 0,
        reps: 15,
        notes: "Hanging leg raises with proper form.",
      },
    },
  ],

  "Intermediate Skills": [
    {
      skill: "Handstand",
      completed: true,
      details: {
        time: 10,
        reps: 0,
        notes: "Stable handstand.",
      },
    },
    {
      skill: "Pistol Squat",
      completed: true,
      details: {
        time: 0,
        reps: 8,
        notes: "Full pistol squat with control.",
      },
    },
    {
      skill: "LSit",
      completed: true,
      details: {
        time: 15,
        reps: 0,
        notes: "Solid L-sit hold.",
      },
    },
    {
      skill: "Skin The Cat",
      completed: true,
      details: {
        time: 0,
        reps: 5,
        notes: "Executed with good technique.",
      },
    },
    {
      skill: "Pseudo Planche PushUp",
      completed: true,
      details: {
        time: 0,
        reps: 10,
        notes: "Good form with body leaning forward.",
      },
    },
  ],

  "Advanced Skills": [
    {
      skill: "MuscleUp",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Working on strength and technique.",
      },
    },
    {
      skill: "Handstand PushUp",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Requires advanced shoulder strength.",
      },
    },
    {
      skill: "Planche",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Long-term goal, focusing on strength and technique.",
      },
    },
    {
      skill: "Front Lever",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Requires advanced core and back strength.",
      },
    },
    {
      skill: "Dragon Flag",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Ultimate core strength exercise.",
      },
    },
  ],

  "Static Holds": [
    {
      skill: "Planche Lean",
      completed: false,
      details: {
        time: 10,
        reps: 0,
        notes: "Progression towards full planche.",
      },
    },
    {
      skill: "Ring Support Hold",
      completed: true,
      details: {
        time: 20,
        reps: 0,
        notes: "Stable ring support hold.",
      },
    },
    {
      skill: "Maltese",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Advanced skill, working on wrist flexibility.",
      },
    },
  ],

  "Dynamic Moves": [
    {
      skill: "Handstand Walk",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Practicing balance and coordination.",
      },
    },
    {
      skill: "MuscleUp",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Dynamic movement, working on technique.",
      },
    },
  ],
};

const Calisthenics = () => {
  return (
    <div className="min-h-screen mt-20 min-w-full">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Calisthenics
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg border border-b-2 overflow-hidden">
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
            Detailed description of my calisthenics experience, achievements,
            and skills.
          </p>

          {Object.keys(achievements).map((category) => (
            <CalisthenicsAchievementCard 
              key={category}
              category={category}
              achievements={achievements}
            />
          ))}

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
