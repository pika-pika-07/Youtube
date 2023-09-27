import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const showMenu = useSelector((store) => store.app.isMenuOpen);
  return showMenu ? (
    <div className="col-span-1 shadow-lg">
      <h1 className="font-bold pt-5">Likes</h1>
      <ul>
        <li> Music </li>
        <li> Sports </li>
        <li> Gaming </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music </li>
        <li> Sports </li>
        <li> Gaming </li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li> Music </li>
        <li> Sports </li>
        <li> Gaming </li>
      </ul>
    </div>
  ) : null;
};

export default SideBar;
