import React from "react";
import { Outlet } from "react-router";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      {/* According to my route maincontainer should be replaced by watchpage so we will use outlet here and set the settings  on App.js*/}
      <Outlet />

      {/* <MainContainer /> */}
    </div>
  );
};

export default Body;
