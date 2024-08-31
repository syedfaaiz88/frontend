import React from "react";
import { FaGraduationCap, FaBriefcase, FaTrophy } from "react-icons/fa"; // Example icons
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    date: "March 2024",
    title: "Graduated from PUCIT",
    description:
      "Completed my BS in Computer Science from PUCIT with a focus on software development.",
    icon: <FaGraduationCap />,
    media: [
      { type: "image", src: "/images/pucit/graduation.jpg" },
    ],
  },
  {
    date: "July 2024",
    title: "Started First Job at Bigentities",
    description:
      "Joined as a Junior React Developer and quickly advanced to leading a small team.",
    icon: <FaBriefcase />,
    media: [
      { type: "image", src: "/images/bigentities/Welcome.jpg" },
      { type: "image", src: "/images/bigentities/MangoParty.JPG" },
    ],
  },
  {
    date: "August 2025",
    title: "Won Coding Competition",
    description: "Secured 1st place in the national coding competition.",
    icon: <FaTrophy />,
    media: [
      { type: "video", src: "/videos/coding-competition.mp4" }
    ],
  }
];

const Timeline = () => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Personal Timeline
      </h2>
      <div className="relative border border-b-2 p-4 rounded-2xl">
        {timelineData.map((event, index) => (
          <TimelineItem
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
            icon={event.icon}
            media={event.media}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
