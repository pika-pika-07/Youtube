import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppContainer from "./components/AppContainer";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Results from "./components/Results";
import WatchPage from "./components/WatchPage";
import store from "./utils/appStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    // RouterProvider will load the Body Component
    // Children will render wherever the outlet is which is in Body component below the SideBar
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <Results />,
      },
    ],
  },
]);
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

        {/* <Header /> */}
        <RouterProvider router={appRouter} />
        {/* <Body /> */}
      </div>
    </Provider>
  );
};

export default App;
