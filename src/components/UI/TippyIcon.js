// src/components/TooltipIcon.js
import React from "react";
import Tippy from "@tippyjs/react";

const TippyIcon = ({ placement, icon: Icon, tooltip, color }) => {
    return (
      <Tippy content={tooltip} placement={placement ? placement : 'left'} arrow>
        <div>
          <Icon className={`text-lg md:text-2xl  mr-2 cursor-pointer ${color ? color : 'text-gray-500'} `} />
        </div>
      </Tippy>
    );
  };

export default TippyIcon;
