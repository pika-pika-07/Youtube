import React from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
