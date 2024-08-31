import React from "react";

const TimelineContent = ({ media }) => {
  if (!media) return null;

  switch (media.type) {
    case "image":
      return (
        <img
          src={media.src}
          alt="Event media"
          className="object-cover w-full h-full rounded-lg shadow-md"
        />
      );

    case "video":
      return (
        <video controls className="object-cover w-full h-full rounded-lg shadow-md">
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );

    // Add more media types as needed
    default:
      return null;
  }
};

export default TimelineContent;
