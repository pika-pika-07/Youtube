import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_SEARCH_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const Results = () => {
  const [searchVideos, setSearchVideos] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("search_query");

  const handleSuggestionClick = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_SEARCH_API + "&q=" + query);
    const json = await data.json();
    setSearchVideos(json.items);
  };

  useEffect(() => {
    handleSuggestionClick();
  }, []);

  return (
    <div className="flex flex-wrap">
      {searchVideos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Results;
