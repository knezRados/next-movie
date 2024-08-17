import React from "react";

const Header = () => {
  return (
    <div className="home-header">
      <div className="w-full h-full screen-blur pt-32 ps-24">
        <div className="z-10">
          <h1 className="text-8xl font-bold text-white ">TP Movies</h1>
          <h2 className="text-xl text-white pt-10 w-1/2 leading-9">
            Where you can see every popular movie now in theathers! Every most
            liked and many more, this is the place if you want to see wath to
            watch if you are bored.
          </h2>
          <button className="bg-blue-600 py-2 px-5 rounded-full text-white font-bold mt-10 text-lg">
            See the Most Popular Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
