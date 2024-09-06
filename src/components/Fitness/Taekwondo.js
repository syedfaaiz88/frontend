import React from "react";
import { Achievement } from "./Achievement";

const Taekwondo = () => {
  // List of achievements with their completion status
  const achievements = [
    {
      name: "Poomsae",
      items : [
      { name: "Taegeuk Il Jang", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o"}, // 태극 1장
      { name: "Taegeuk Ee Jang", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" }, // 태극 2장
      { name: "Taegeuk Sam Jang", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" }, // 태극 3장
      { name: "Taegeuk Sa Jang", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" }, // 태극 4장
      { name: "Taegeuk Oh Jang", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" }, // 태극 5장
      { name: "Taegeuk Yuk Jang", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" }, // 태극 6장
      { name: "Taegeuk Chil Jang", completed: false, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" }, // 태극 7장
      { name: "Taegeuk Pal Jang", completed: false, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" }, // 태극 8장
    ]
  },
    {
      name: "Kicks",
      items: [
      { name: "Ap Chagi", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" },
      { name: "Yop Chagi", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" },
      { name: "Dollyo Chagi", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" },
      { name: "Dwi Chagi", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" },
      { name: "Huryeo Chagi", completed: false, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" },
      { name: "Naeryo Chagi", completed: false, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" },
    ]
  },
   {
    name: "Belts",
    items: [
      { name: "White Belt", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" },
      { name: "Yellow Belt", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" },
      { name: "Green Belt", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" },
      { name: "Blue Belt", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" },
      { name: "Red Belt", completed: true, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" },
      { name: "Black Belt", completed: false, youtube_url: "https://www.youtube.com/watch?v=iHL7DhFu2-o" },
    ]},
  ];

  return (
    <div className="min-h-screen p-2 bg-white">
      <header className="text-center mb-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
          Taekwondo
        </h1>
        <p className="text-lg text-gray-600">
          A reflection of discipline, perseverance, and achievement.
        </p>
      </header>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Achievement achievements={achievements} />
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800">
          My Taekwondo Philosophy
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mt-2">
          Taekwondo is not just about mastering techniques; it's a way of life.
          Through discipline, respect, and perseverance, I've learned to push
          my limits, embrace challenges, and grow both physically and mentally.
          Every belt I earn is a step forward on this endless journey of
          self-improvement.
        </p>
      </section>
    </div>
  );
};

export default Taekwondo;
