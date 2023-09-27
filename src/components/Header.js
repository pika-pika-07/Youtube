import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      {/* Left section */}
      <div className="flex col-span-1">
        <img
          className="h-12"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
          onClick={toggleMenuHandler}
        />
        <img
          className="h-14"
          alt="youtube logo"
          src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2021/08/Youtube-Logo-Font.jpg?resize=849%2C395&ssl=1"
        />
      </div>
      {/* // Middle section */}
      <div className="flex col-span-10 justify-center">
        <input
          type="text"
          className="w-1/2 border border-gray-400 h-11 rounded-l-full p-2"
        />
        <button className="border border-gray-400 h-11 rounded-r-full px-6 bg-gray-100">
          {" "}
          🔎
        </button>
      </div>

      {/* Right section */}
      <div className="flex col-span-1">
        <img
          className="h-12"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
    </div>
  );
};

export default Header;
