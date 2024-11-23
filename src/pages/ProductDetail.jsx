import React, { useEffect, useState } from "react";
import product1 from "../assets/product/women1.png";
import product2 from "../assets/product/women2.jpg";
import product3 from "../assets/product/women3.jpg";
import product4 from "../assets/product/women4.jpg";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { FaRegHeart, FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const listImage = [product1, product2, product3, product4];

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % listImage.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + listImage.length) % listImage.length);
  };
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <div className="relative flex justify-center">
              <img
                src={listImage[currentIndex]}
                alt=""
                className="h-[450px] rounded-lg object-cover transition-all duration-300"
              />

              <div className="absolute left-0 right-0 top-1/2 flex justify-between px-2 text-3xl text-secondary/50">
                <MdArrowBackIos
                  className="cursor-pointer"
                  onClick={prevSlide}
                />
                <MdArrowForwardIos
                  className="cursor-pointer"
                  onClick={nextSlide}
                />
              </div>
            </div>
            <div className="mt-2 flex justify-around">
              {listImage.map((image, index) => (
                <div
                  onClick={() => selectSlide(index)}
                  className={`${currentIndex === index ? "border-2 border-primary" : ""} cursor-pointer rounded-lg p-1`}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-[100px] w-[100px] rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Premium Cotton T-Shirt</h1>
            <span className="flex items-center gap-1">
              4.5
              <FaStar className="text-primary" />
            </span>

            <div className="mt-4">
              <b className="text-2xl text-red-600">$29.99</b>
              <del className="ml-2 text-gray-400">$29.99</del>
            </div>

            <div className="my-10 border"></div>

            <p className="mb-1 text-xl font-medium">Size</p>
            <div className="flex gap-2">
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-200">
                XS
              </div>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-200">
                XS
              </div>
            </div>
            <p className="mb-1 mt-4 text-xl font-medium">Color</p>
            <div className="flex gap-2">
              <div className="flex cursor-pointer items-center justify-center rounded-md border border-gray-200 px-4 py-2">
                Red
              </div>
              <div className="flex cursor-pointer items-center justify-center rounded-md border border-gray-200 px-4 py-2">
                Blue
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-2">
              <button className="col-span-2 flex items-center justify-center gap-3 rounded-md bg-primary py-2 text-white hover:bg-[#FF8C00]">
                <MdOutlineShoppingCart className="text-xl" /> ADD TO CART
              </button>
              <button className="col-span-1 flex items-center justify-center gap-3 rounded-md border border-primary text-primary hover:bg-gray-50 hover:text-black">
                <FaRegHeart className="text-xl" /> MY WISHLIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
