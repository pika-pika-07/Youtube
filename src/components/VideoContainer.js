import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
