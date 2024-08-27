// src/components/TooltipIcon.js
import React from "react";
import Tippy from "@tippyjs/react";

const TippyIcon = ({ placement, icon: Icon, tooltip, color }) => {
    return (
      <Tippy content={tooltip} placement={placement ? placement : 'left'} arrow>
        <div>
          <Icon className={`text-2xl text-gray-500 mr-2 cursor-pointer ${color ? color : ''} `} />
        </div>
      </Tippy>
    );
  };

export default TippyIcon;
