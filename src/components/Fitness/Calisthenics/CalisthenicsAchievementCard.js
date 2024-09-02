import React from "react";
import { CalisthenicsAchievment } from "./CalisthenicsAchievment";
import Accordion from "../../UI/Accordion";

export const CalisthenicsAchievementCard = ({ category, achievements }) => {
  return (
    <Accordion
      key={category}
      header={
        <h3 className="text-xl font-medium text-gray-700 mb-5 cursor-pointer flex items-center">
          {category}:
        </h3>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements[category].map((achievement) => (
          <CalisthenicsAchievment
            key={achievement.skill}
            skill={achievement.skill}
            completed={achievement.completed}
            details={achievement.details}
          />
        ))}
      </div>
    </Accordion>
  );
};
