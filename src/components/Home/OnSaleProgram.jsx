import React from "react";
import product from "../../assets/product/women2.jpg";
import { IoLockClosedOutline } from "react-icons/io5";
import { CiCreditCard1, CiDeliveryTruck } from "react-icons/ci";
const OnSaleProgram = () => {
  return (
    <div className="container grid grid-cols-1 gap-6 pb-14 sm:grid-cols-2">
      <div data-aos="zoom-in">
        <img
          src={product}
          alt="slae-image"
          className="mx-auto h-[350px] w-full max-w-[400px] object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
        />
      </div>

      <div className="flex flex-col gap-6 px-4">
        <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">
          Winter Sale upto 50% Off
        </h1>
        <p
          data-aos="fade-up"
          className="text-sm leading-5 tracking-wide text-gray-500"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          reiciendis inventore iste ratione ex alias quis magni at optio
        </p>

        <ul className="flex flex-col gap-3">
          <li data-aos="fade-up">
            <div className="flex items-center gap-6">
              <IoLockClosedOutline className="h-12 w-12 rounded-full bg-violet-100 p-4 text-4xl shadow-sm dark:bg-violet-400" />{" "}
              Quality Products
            </div>
          </li>
          <li data-aos="fade-up">
            <div className="flex items-center gap-6">
              <CiDeliveryTruck className="h-12 w-12 rounded-full bg-orange-100 p-4 text-4xl shadow-sm dark:bg-orange-400" />{" "}
              Fast Delivery
            </div>
          </li>
          <li data-aos="fade-up">
            <div className="flex items-center gap-6">
              <CiCreditCard1 className="h-12 w-12 rounded-full bg-green-100 p-4 text-4xl shadow-sm dark:bg-green-400" />{" "}
              Easy Payment method
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OnSaleProgram;
