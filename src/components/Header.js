import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheSuggestions } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((state) => state.search.searchMap);
  let timerId = null;

  useEffect(() => {
    // Make an api call after every key press
    // but if the difeerence between 2 api calls is less than 200ms decline API call
    const timerId = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  /**
   * keypress - i
   * render the component
   * useEffect() is called
   * start timer => make api call after 200ms
   *
   * keypress -ip
   * destroy the component( useEffect return method is called)
   * re-render the component
   * useEffect() is called
   * start timer => make api call after 200ms
   *
   * and so on with everykeypress
   *
   * So as we are clearing the timer on every re-render
   * so if we press key before 200ms
   * first the old timer will be destroyed
   * so the api call will not be made
   *
   * This is an implementation of debouncing in Reactjs
   */

  const getSearchSuggestions = async () => {
    /**
     * SearchCache structure
     *
     * {
     *  "iphone" : [ 'iphone11', 'iphone12']
     * },
     * {
     *   'parth' ; [ 'Parth11', 'Parth12', 'Parth13']
     * }
     */

    // If search query present , dont make api call

    const url = `https://polar-falls-86526-4fb527053833.herokuapp.com/${YOUTUBE_SEARCH_API}${searchQuery}`;

    const data = await fetch(url, {
      // mode: "cors",
      // crossorigin: true,
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      // },
    });
    const json = await data.json();
    setSuggestions(json[1]);

    // Update Cache
    dispatch(
      cacheSuggestions({
        [searchQuery]: json[1],
      })
    );
  };

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
          onClick={() => navigate("/")}
        />
      </div>
      {/* // Middle section */}
      <div className="flex flex-col col-span-10 justify-center ">
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-1/2 border border-gray-400 h-11 rounded-l-full p-2"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() =>
              setTimeout(() => {
                setShowSuggestions(false);
              }, 100)
            }
          />
          <button className="border border-gray-400 h-11 rounded-r-full px-6 bg-gray-100">
            {" "}
            🔎
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white top-[80px] w-[36%] py-2 px-2 rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <Link
                  key={suggestion}
                  to={`/results?search_query=${suggestion}`}
                >
                  <li className="py-2 px-2 shadow-sm hover:bg-gray-100">
                    {" "}
                    🔎 {suggestion}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
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
