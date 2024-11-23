import React from "react";
import footer from "../../assets/footer.jpg";
import logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";

const Footer = () => {
  return (
    <div class="bg-[url('https://shopsy-tcj.netlify.app/assets/footer-pattern-mGVwO-y6.jpg')] bg-cover bg-bottom text-white">
      <div className="container">
        <div className="grid pb-44 pt-5 md:grid-cols-3">
          <div className="px-4 py-8">
            <h1 className="mb-3 flex items-center gap-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <img src={logo} alt="logo" className="max-w-[50px]" />
              Fashion
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer text-gray-200 duration-300 hover:translate-x-1 hover:text-primary">
                    Home
                  </li>
                  <li className="cursor-pointer text-gray-200 duration-300 hover:translate-x-1 hover:text-primary">
                    About
                  </li>
                  <li className="cursor-pointer text-gray-200 duration-300 hover:translate-x-1 hover:text-primary">
                    Contact
                  </li>
                  <li className="cursor-pointer text-gray-200 duration-300 hover:translate-x-1 hover:text-primary">
                    Blog
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer text-gray-200 duration-300 hover:translate-x-1 hover:text-primary">
                    Home
                  </li>
                  <li className="cursor-pointer text-gray-200 duration-300 hover:translate-x-1 hover:text-primary">
                    About
                  </li>
                  <li className="cursor-pointer text-gray-200 duration-300 hover:translate-x-1 hover:text-primary">
                    Contact
                  </li>
                  <li className="cursor-pointer text-gray-200 duration-300 hover:translate-x-1 hover:text-primary">
                    Blog
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="mt-6 flex items-center gap-3">
                <a href="#" className="text-3xl">
                  {" "}
                  <FaInstagram />{" "}
                </a>
                <a href="#" className="text-3xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-3xl">
                  <FaLinkedin />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow /> Noida, Uttar Pradesh
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <MdPhoneIphone /> +91 123456789
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
