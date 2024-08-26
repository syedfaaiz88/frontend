// src/components/TooltipIcon.js
import React from "react";
import Tippy from "@tippyjs/react";

const TippyIcon = React.forwardRef(({ id, icon: Icon, tooltip }, ref) => {
    return (
      <Tippy content={tooltip} placement="left" arrow key={id}>
        <div><Icon className="text-2xl text-gray-500 mr-2 cursor-pointer" ref={ref} /></div>
      </Tippy>
    );
  });

export default TippyIcon;
