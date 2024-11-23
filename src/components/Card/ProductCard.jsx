import React from "react";
import { FaStar } from "react-icons/fa6";
const ProductCard = ({ product }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={product.aosDelay}
      className="group cursor-pointer"
      key={product.id}
    >
      <img
        alt="product image"
        src={product?.image}
        className="h-[250px] w-[200px] transform rounded-md object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <p className="mt-5 text-lg font-bold">{product?.productName}</p>
      <div>
        <b className="text-red-600">{product?.newPrice}</b>
        <del className="ml-2 text-gray-500">{product?.oldPrice}</del>
      </div>
      <span className="flex items-center">
        {product?.star} <FaStar className="text-primary" />
      </span>
    </div>
  );
};

export default ProductCard;
