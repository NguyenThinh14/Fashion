import React from "react";
import Logo from "../../assets/logo.png";
import Searchbar from "../input/Searchbar";
import { CiShoppingBasket } from "react-icons/ci";
import ThemeModeButton from "./ThemeModeButon";
import { FaCaretDown } from "react-icons/fa";
const Navbar = () => {
  const menuList = [
    {
      id: "1",
      data: "Home",
    },
    {
      id: "2",
      data: "Top Rated",
    },
    {
      id: "3",
      data: "Kid Wear",
    },
    {
      id: "4",
      data: "Men Wear",
    },
    {
      id: "5",
      data: "Electronics",
    },
  ];

  const dropList = [
    {
      id: "1",
      data: "Electronics",
      link: "#",
    },
    {
      id: "2",
      data: "Men Wear",
      link: "#",
    },
    {
      id: "3",
      data: "Kid Wear",
      link: "#",
    },
  ];

  return (
    <div className="shadow-md dark:bg-gray-900 dark:text-white">
      {/* Upper navigation */}
      <div className="bg-primary/40 py-2">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div>
            <a href="#" className="flex gap-2 text-2xl font-bold sm:text-3xl">
              <img src={Logo} alt="Logo" className="w-10" />
              Fashion
            </a>
          </div>

          {/* Action button */}
          <div className="flex items-center gap-3">
            {/* Search bar */}
            <Searchbar />
            {/* Shopping cart */}

            <div className="flex h-[2.4rem] w-[2.4rem] cursor-pointer items-center justify-center rounded-full bg-primary text-2xl text-white">
              <CiShoppingBasket />
            </div>
            {/* Them mode button */}
            <ThemeModeButton />
          </div>
        </div>
      </div>

      {/* Lower navigation */}
      <div>
        <ul className="hidden items-center justify-center gap-4 md:flex">
          {menuList.map((menu) => (
            <li key={menu.id}>
              <a href="#" className="px-4 duration-200 hover:text-primary">
                {menu.data}
              </a>
            </li>
          ))}

          {/* Drop menu */}
          <li className="group relative">
            <a
              href="#"
              className="flex items-center justify-center gap-2 py-2 hover:text-primary"
            >
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-300 group-hover:-rotate-180" />
              </span>
            </a>
            <ul className="invisible absolute left-0 z-10 mt-0 w-48 rounded-md border border-gray-200 bg-white opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
              {dropList.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/20"
                  >
                    {menu.data}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
