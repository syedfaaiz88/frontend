import React from "react";
import { Achievement } from "./Achievement";

const achievements = [
  {
    name: "Basic Skills",
    items: [
      {
        name: "PushUp",
        completed: true,
        details: {
          reps: 20,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "PullUp",
        completed: true,
        details: {
          reps: 10,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "ChinUp",
        completed: true,
        details: {
          reps: 15,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "Dips",
        completed: true,
        details: {
          reps: 15,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "Leg Raise",
        completed: true,
        details: {
          reps: 15,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    ],
  },

  {
    name: "Intermediate Skills",
    items: [
      {
        name: "Handstand",
        completed: true,
        details: {
          time: 10,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "Pistol Squat",
        completed: true,
        details: {
          reps: 8,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "LSit",
        completed: true,
        details: {
          time: 15,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "Skin The Cat",
        completed: true,
        details: {
          reps: 5,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "Pseudo Planche PushUp",
        completed: true,
        details: {
          reps: 10,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    ],
  },

  {
    name: "Advanced Skills",
    items: [
      {
        name: "MuscleUp",
        completed: false,
        details: {
          reps: 0,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "Handstand PushUp",
        completed: true,
        details: {
          reps: 2,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "Planche",
        completed: false,
        details: {
          time: 0,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "Front Lever",
        completed: true,
        details: {
          time: 1,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "Dragon Flag",
        completed: false,
        details: {
          time: 0,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    ],
  },

  {
    name: "Static Holds",
    items: [
      {
        name: "Planche Lean",
        completed: true,
        details: {
          time: 10,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "Ring Support Hold",
        completed: true,
        details: {
          time: 20,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "Maltese",
        completed: false,
        details: {
          time: 0,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    ],
  },

  {
    name: "Dynamic Moves",
    items: [
      {
        name: "Handstand Walk",
        completed: false,
        details: {
          time: 0,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
      {
        name: "MuscleUp",
        completed: false,
        details: {
          reps: 1,
        },
        youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o",
      },
    ],
  },
];

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

      <div className=" grid grid-cols-1">
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
