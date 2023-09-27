import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();

  // This will return URLSearchParams which is browser's URLSearchParams
  // Use URLSearchParams.get() to extract the value
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-5">
      <iframe
        width="1000"
        height="600"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
