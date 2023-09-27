import React from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
const App = () => {
  return (
    <div className="bg-red font-bold text-3xl">
      {/*
      Header
      Body
        SideBar
          MenuItems
        MainContainer
          ButtonsList
          VideoContainer
            VideoCard  
      */}

      <Header />
      <Body />
    </div>
  );
};

export default App;
