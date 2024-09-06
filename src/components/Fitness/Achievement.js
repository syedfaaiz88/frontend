// Achievement.js
import React from "react";
import { FaCheckCircle, FaTimesCircle, FaYoutube } from "react-icons/fa";
import YouTubePreview from "../UI/YoutubePreview";
import Tippy from "@tippyjs/react";

export const Achievement = ({ achievements }) => {
  return Object.entries(achievements).map(([category, skills]) => (
    <section key={category} className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-6">{category}</h2>
      <div className="grid grid-cols-1 gap-2">
        {skills.map(({ name, completed, details }) => (
          <div key={name} className="bg-white p-3 border rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-base text-gray-600 font-bold">{name}</h3>
              {completed ? (
                <FaCheckCircle size={22} className="text-green-500" />
              ) : (
                <FaTimesCircle size={22} className="text-gray-500" />
              )}
            </div>
            {details && (
              <>
                <p className="text-sm text-gray-600 mt-2">{details.reps ? `${details.reps} Reps` : ''}</p>
                <p className="text-sm text-gray-600 mt-2">{details.time ? `${details.time} sec Hold`: ''}</p>
                <p className="text-gray-500 text-sm mt-1">{details.notes}</p>

                {details.youtube_url && (
                  <a
                    href={details.youtube_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 text-sm text-red-600 mt-2"
                  >
                    <Tippy
                      content={<YouTubePreview youtubeUrl={details.youtube_url} />}
                      arrow={true}
                      interactive={true}
                      theme="light"
                    >
                      <span>
                        <FaYoutube size={20} />
                      </span>
                    </Tippy>
                  </a>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  ));
};
