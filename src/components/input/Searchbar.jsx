import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
const Searchbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex hidden justify-end sm:block">
      <div
        className="relative h-10 w-10 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute right-0 flex items-center justify-end overflow-hidden rounded-full bg-white transition-all duration-300 dark:bg-gray-800 ${isHovered ? "w-64" : "w-10"} `}
        >
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className={`h-full w-full bg-transparent py-2 pl-4 pr-10 outline-none transition-opacity duration-300 dark:bg-gray-800 ${isHovered ? "opacity-100" : "opacity-0"} `}
          />
          <CiSearch
            className={`absolute right-2 cursor-pointer text-2xl ${
              isHovered ? "text-primary" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
