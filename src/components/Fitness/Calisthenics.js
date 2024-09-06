import React from "react";
import { Achievement } from "./Achievement";

const achievements = {
  "Basic Skills": [
    {
      name: "PushUp",
      completed: true,
      details: {
        time: 0,
        reps: 20,
        notes: "Full-range push-ups, good form.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "PullUp",
      completed: true,
      details: {
        time: 0,
        reps: 10,
        notes: "Full-body pull-ups, complete range of motion.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "ChinUp",
      completed: true,
      details: {
        time: 0,
        reps: 15,
        notes: "Chin-ups with good form.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "Dips",
      completed: true,
      details: {
        time: 0,
        reps: 15,
        notes: "Can perform standard dips with good depth.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "Leg Raise",
      completed: true,
      details: {
        time: 0,
        reps: 15,
        notes: "Hanging leg raises with proper form.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
  ],

  "Intermediate Skills": [
    {
      name: "Handstand",
      completed: true,
      details: {
        time: 10,
        reps: 0,
        notes: "Stable handstand.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "Pistol Squat",
      completed: true,
      details: {
        time: 0,
        reps: 8,
        notes: "Full pistol squat with control.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "LSit",
      completed: true,
      details: {
        time: 15,
        reps: 0,
        notes: "Solid L-sit hold.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "Skin The Cat",
      completed: true,
      details: {
        time: 0,
        reps: 5,
        notes: "Executed with good technique.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "Pseudo Planche PushUp",
      completed: true,
      details: {
        time: 0,
        reps: 10,
        notes: "Good form with body leaning forward.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
  ],

  "Advanced Skills": [
    {
      name: "MuscleUp",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Working on strength and technique.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "Handstand PushUp",
      completed: true,
      details: {
        time: 5,
        reps: 1,
        notes: "Requires advanced shoulder strength.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "Planche",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Long-term goal, focusing on strength and technique.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "Front Lever",
      completed: true,
      details: {
        time: 1,
        reps: 0,
        notes: "Requires advanced core and back strength.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "Dragon Flag",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Ultimate core strength exercise.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
  ],

  "Static Holds": [
    {
      name: "Planche Lean",
      completed: true,
      details: {
        time: 10,
        reps: 0,
        notes: "Progression towards full planche.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "Ring Support Hold",
      completed: true,
      details: {
        time: 20,
        reps: 0,
        notes: "Stable ring support hold.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "Maltese",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Advanced name, working on wrist flexibility.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
  ],

  "Dynamic Moves": [
    {
      name: "Handstand Walk",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Practicing balance and coordination.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
    {
      name: "MuscleUp",
      completed: false,
      details: {
        time: 0,
        reps: 0,
        notes: "Dynamic movement, working on technique.",
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    },
  ],
};

const Calisthenics = () => {
  return (
    <div className="min-h-screen p-2">
      <header className="text-center mb-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          Calisthenics
        </h1>
        <p className="text-lg text-gray-600">
          Strength, Discipline, and Perseverance
        </p>
      </header>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Achievement achievements={achievements} />
      </div>
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800">
          My Calisthenics Journey
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mt-2">
          Calisthenics is more than just bodyweight exercises; it’s a testament
          to mastering control, strength, and balance. With every pull-up,
          push-up, and handstand, I push the boundaries of what my body is
          capable of. It's not just about physical gains, but about developing
          mental toughness and resilience. The journey of calisthenics has
          taught me that true strength comes from consistency, patience, and the
          willingness to challenge myself daily.
        </p>
      </section>
    </div>
  );
};
export default Calisthenics;
