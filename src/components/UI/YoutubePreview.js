import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const YouTubePreview = ({ youtubeUrl }) => {
  const [previewData, setPreviewData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchYouTubeData = async () => {
        try {
          const embedUrl = `https://www.youtube.com/oembed?url=${youtubeUrl}&format=json`;

          const { data } = await axios.get(embedUrl);
          setPreviewData(data);
        } catch (error) {
          setError("Failed to fetch YouTube video metadata");
          console.error("Error fetching YouTube oEmbed data", error);
        } finally {
          setLoading(false);
        }
    };
    fetchYouTubeData();
  }, [youtubeUrl]);

  if (loading) {
    return (
      <div>
        <Skeleton height={180} className="mb-4" />
        <Skeleton width={200} height={20} className="mb-2" />
        <Skeleton width={150} height={20} />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <img
        src={previewData.thumbnail_url}
        alt={previewData.title}
        className="w-full mb-3 rounded-md"
      />
      <h3 className="text-lg font-bold text-gray-700 hover:text-gray-900">
        {previewData.title}
      </h3>
      <a 
        href={previewData.author_url} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-700 transition-colors duration-300 ease-in-out">
        {previewData.author_name}
      </a>
    </div>
  );
};

export default YouTubePreview;
