import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/appStore";
const App = () => {
  return (
    <Provider store={store}>
      <div className="">
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
    </Provider>
  );
};

export default App;
