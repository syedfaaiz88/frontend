import React, { useEffect, useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { FaEye, FaUserFriends, FaVideo } from "react-icons/fa";
import Skeleton from "react-loading-skeleton"; // Import Skeleton

const YouTubeChannelInfo = ({ username }) => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const API_KEY = "AIzaSyDwYs-jYhlSZ4WYjqG7MRD9VMzz-blafDY"; // Replace this with your actual API key

  useEffect(() => {
    const fetchChannelInfo = async () => {
      setError("");
      setChannelInfo(null);
      setLoading(true); // Set loading to true before fetching

      try {
        // Step 1: Search for the channel by username to get channelId
        const searchResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${username}&key=${API_KEY}`
        );
        const searchData = await searchResponse.json();

        if (searchData.items && searchData.items.length > 0) {
          const channelId = searchData.items[0].snippet.channelId;

          // Step 2: Use channelId to fetch channel details
          const channelResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
          );
          const channelData = await channelResponse.json();

          if (channelData.items && channelData.items.length > 0) {
            setChannelInfo(channelData.items[0]);
          } else {
            setError("Channel not found.");
          }
        } else {
          setError("No channel found with the provided username.");
        }
      } catch (err) {
        setError("An error occurred while fetching channel data.");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (username) {
      fetchChannelInfo();
    }
  }, [username]);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {loading ? ( // Show skeleton loader while loading
        <div className="container mx-auto p-4">
          <div className="mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <Skeleton height={50} />
            <div className="p-6 flex flex-col items-center">
              <Skeleton className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-lg" />
              <div className="grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-3 w-full mt-6 gap-3">
                <Skeleton height={40}/>
                <Skeleton height={40}/>
                <Skeleton height={40}/>
              </div>
            </div>
          </div>
        </div>
      ) : (
        channelInfo && (
          <div className="container mx-auto p-4">
            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="mx-auto bg-white shadow-md rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gray-900 text-white text-center py-4">
                <h2 className="text-2xl font-bold">
                  {channelInfo.snippet.title}
                </h2>
              </div>
              {/* Channel Details */}
              <div className="p-6 flex flex-col items-center">
                <img
                  className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-lg"
                  src={channelInfo.snippet.thumbnails.high.url}
                  alt={channelInfo.snippet.title}
                />
                <div className="grid grid-cols-1 md:space-y-0 md:grid-cols-3 w-full mt-6">
                  {/* Subscribers */}
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-800">
                      <FaUserFriends className="inline mr-2" />
                      {new Intl.NumberFormat().format(
                        channelInfo.statistics.subscriberCount
                      )}
                    </p>
                    <p className="text-gray-600">Subscribers</p>
                  </div>
                  {/* Views */}
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-800">
                      <FaEye className="inline mr-2" />
                      {new Intl.NumberFormat().format(
                        channelInfo.statistics.viewCount
                      )}
                    </p>
                    <p className="text-gray-600">Views</p>
                  </div>
                  {/* Video Count */}
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-800">
                      <FaVideo className="inline mr-2" />
                      {channelInfo.statistics.videoCount}
                    </p>
                    <p className="text-gray-600">Videos</p>
                  </div>
                </div>

                {/* Custom URL */}
                <div className="mt-2">
                  <a
                    href={`https://youtube.com/${channelInfo.snippet.customUrl}`}
                    className="flex flex-row items-center gap-2 text-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Channel{" "}
                    <BsYoutube size={25} className="text-red-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default YouTubeChannelInfo;
