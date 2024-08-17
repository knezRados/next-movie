import React from "react";
import home from "../../public/images/home.png";
import luck from "../../public/images/luck.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex bg-gray-300 px-10 py-2 justify-between items-center fixed w-full navbar-height top-0">
      <Image
        alt="home"
        src={home}
        width={0}
        height={0}
        className="h-10 w-10 cursor-pointer"
      />
      <input
        className="p-3 w-1/2 rounded bg-transparent border border-slate-400"
        placeholder="Search a film"
      />
      <Image
        alt="luck"
        src={luck}
        width={0}
        height={0}
        className="h-10 w-10 cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
