import React from "react";
import { BodyStats } from "./BodyStats";

const BodyStatsTimeline = ({ stats }) => {


  return (
    <div className="min-w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 mx-auto overflow-hidden">
        <div className=""> 
          {stats.map((entry, index) => (
            <BodyStats key={index} index={index} photos={entry.photos} measurements={entry.measurements} date={entry.date}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BodyStatsTimeline;
