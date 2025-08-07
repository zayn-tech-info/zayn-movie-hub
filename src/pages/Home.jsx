import React from "react";
import profilePicture from "../assets/images/pfp.png";
import Search from "../components/Search";
const Home = () => {
  return (
    <div className="max-w-7xl mx-20 pt-10">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-2">
            <div>
              <p className="font-bold text-2xl">
                Hello{" "}
                <span className="font-extralight text-gray-300">Zayn!</span>
              </p>
            </div>
            <div>
              <p className="text-gray-300 font-medium">
                Check for latest addition.
              </p>
            </div>
          </div>
          <Search />
          <img src={profilePicture} alt="Profile Picture" />
        </div>
      </div>
    </div>
  );
};

export default Home;
