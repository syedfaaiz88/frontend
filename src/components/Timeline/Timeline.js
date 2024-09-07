import React from "react";
import { FaGraduationCap, FaBriefcase, FaGlassCheers } from "react-icons/fa"; // Example icons
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    date: "August 2024",
    title: "Attended Annual Dinner at Bigentities",
    description:
      "Attend Big Entities' annual dinner—an evening filled with connection, reflection, and inspiration.",
    icon: <FaGlassCheers />,
    photos: [
      "/images/annualdinner/016A1964.JPG",
      "/images/annualdinner/016A2148.JPG",
      "/images/annualdinner/016A2540.JPG",
      "/images/annualdinner/BV7V0911.JPG",
      "/images/annualdinner/BV7V0926.JPG",
    ],
  },
  {    
    date: "July 2024",
    title: "Started First Job at Bigentities",
    description:
      "Joined as a Junior React Developer and quickly advanced to leading a small team.",
    icon: <FaBriefcase />,
    photos: [
      "/images/bigentities/Welcome.jpg" ,
      "/images/bigentities/MangoParty.JPG" ,
    ],
  },
  {
    date: "March 2024",
    title: "Graduated from PUCIT",
    description:
      "Completed my BS in Computer Science from PUCIT with a focus on software development.",
    icon: <FaGraduationCap />,
    photos: [
      "/images/pucit/graduation.jpg",
    ],
  }
];

const Timeline = () => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Personal Timeline
      </h2>
      <div className="relative p-4">
        {timelineData.map((event, index) => (
          <TimelineItem
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
            icon={event.icon}
            photos={event.photos}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
