import React from "react";
import TippyIcon from "./TippyIcon";
import Skeleton from "react-loading-skeleton";

const InfoItem = ({ icon, tooltip, value, isLoading }) => {
  return (
    <div className="flex items-center">
      <TippyIcon icon={icon} tooltip={tooltip} />
      { isLoading ? <Skeleton width={150} height={14} className="ml-2" /> : <span className="ml-2">{value}</span>}
    </div>
  );
};

export default InfoItem;
