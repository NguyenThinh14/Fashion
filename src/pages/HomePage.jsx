import React from "react";
import HeroSection from "../components/Home/HeroSection";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "../components/Card/ProductCard";
import product1 from "../assets/product/women1.png";
import product2 from "../assets/product/women2.jpg";
import product3 from "../assets/product/women3.jpg";
import product4 from "../assets/product/women4.jpg";
import shirt1 from "../assets/product/shirt.png";
import shirt2 from "../assets/product/shirt2.png";
import shirt3 from "../assets/product/shirt3.png";
import Slider from "react-slick";
import ProductCardLarge from "../components/Card/ProductCardLarge";
import OnSaleProgram from "../components/Home/OnSaleProgram";

const HomePage = () => {
  const productContent = [
    {
      id: 1,
      productName: "Women Ethnic",
      image: product1,
      newPrice: "250,000",
      oldPrice: "300,000",
      star: "4.5",
    },
    {
      id: 2,
      productName: "Women western",
      image: product2,
      newPrice: "250,000",
      oldPrice: "300,000",
      star: "4.5",
    },
    {
      id: 3,

      productName: "Goggles",
      image: product3,
      newPrice: "250,000",
      oldPrice: "300,000",
      star: "4.5",
    },
    {
      id: 4,
      productName: "Printed T-Shirt",
      image: product4,
      newPrice: "250,000",
      oldPrice: "300,000",
      star: "4.5",
    },
    {
      id: 5,
      productName: "Fashin T-Shirt",
      image: product2,
      newPrice: "250,000",
      oldPrice: "300,000",
      star: "4.5",
    },
    {
      id: 7,
      productName: "Fashin T-Shirt",
      image: product2,
      newPrice: "250,000",
      oldPrice: "300,000",
      star: "4.5",
    },
    {
      id: 6,
      productName: "Fashin T-Shirt",
      image: product2,
      newPrice: "250,000",
      oldPrice: "300,000",
      star: "4.5",
    },
  ];

  const bestProduct = [
    {
      name: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      image: shirt1,
    },
    {
      name: "Printed shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      image: shirt2,
    },
    {
      name: "Women shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      image: shirt3,
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <HeroSection />

      {/*  Product content */}
      <div className="container mb-16 mt-14">
        {/* Header contntet*/}
        <div className="flex justify-between">
          <h1 data-aos="zoom-out-right" className="text-3xl font-bold">
            Top Selling Products
          </h1>
          <button
            data-aos="zoom-out-left"
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white"
          >
            View all <FaArrowRightLong />
          </button>
        </div>

        {/* Body content */}
        <div className="mt-10">
          <Slider {...settings}>
            {productContent.map((product) => (
              <ProductCard product={product} />
            ))}
          </Slider>
        </div>
      </div>

      {/* Best product content */}
      <div className="container mb-16 mt-14">
        {/* Header contntet*/}
        <div className="flex justify-between">
          <h1 data-aos="zoom-out-right" className="text-3xl font-bold">
            Top Selling Products
          </h1>
          <button
            data-aos="zoom-out-left"
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white"
          >
            View all <FaArrowRightLong />
          </button>
        </div>

        {/* Body content */}
        <div className="mt-10 grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3">
          {bestProduct.map((product) => (
            <ProductCardLarge product={product} />
          ))}
        </div>
      </div>

      {/* OnSale Program */}
      <OnSaleProgram />
    </div>
  );
};

export default HomePage;
