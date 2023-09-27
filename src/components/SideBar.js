import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const showMenu = useSelector((store) => store.app.isMenuOpen);
  return showMenu ? (
    <div className="w-[11%] shadow-lg px-4">
      <ul>
        <Link to="/">
          {" "}
          <li> Home </li>
        </Link>

        <li> Shorts </li>
        <li> Live </li>
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
