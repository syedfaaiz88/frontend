import React from "react";
import { BodyStats } from "./BodyStats";

const BodyStatsTimeline = ({ stats }) => {


  return (
    <div className="mt-20 min-w-full">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Body Stats Timeline
      </h1>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8"> 
          {stats.map((entry, index) => (
            <BodyStats key={index} index={index} photos={entry.photos} measurements={entry.measurements} date={entry.date}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BodyStatsTimeline;
