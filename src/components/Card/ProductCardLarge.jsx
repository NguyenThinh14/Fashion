import React from "react";
import { FaStar } from "react-icons/fa6";

const ProductCardLarge = ({ product }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={product.aosDelay}
      class="group relative mt-24 max-w-[300px] cursor-pointer rounded-2xl bg-white shadow-xl duration-300 hover:bg-black/80 hover:text-white dark:bg-gray-800 dark:hover:bg-primary"
    >
      <div class="h-[100px]">
        <img
          src={product.image}
          alt="product image"
          class="mx-auto block max-w-[140px] -translate-y-20 transform drop-shadow-md duration-300 group-hover:scale-105"
        />
      </div>
      <div class="p-4 text-center">
        <div class="flex w-full items-center justify-center gap-1 text-primary">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h1 class="text-xl font-bold">{product.name}</h1>
        <p class="line-clamp-2 text-sm text-gray-500 duration-300 group-hover:text-white">
          {product.description}
        </p>
        <button class="mt-4 rounded-full bg-primary px-4 py-1 text-white duration-300 hover:scale-105 group-hover:bg-white group-hover:text-primary">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCardLarge;
