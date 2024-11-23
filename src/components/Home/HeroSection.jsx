import React from "react";
import SaleBanner from "../../assets/banner/sale.png";
import ShoppingBanner from "../../assets/banner/shopping.png";
import WomenBanner from "../../assets/banner/women.png";
import Slider from "react-slick";
const HeroSection = () => {
  const heroSection = [
    {
      title: "30% off on all Women's Wear",
      image: ShoppingBanner,
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "70% off on all Products Sale",
      image: SaleBanner,
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Upto 50% off on all Men's Wear",
      image: WomenBanner,
      description:
        "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative flex min-h-[650px] justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute -top-1/2 right-0 h-[700px] w-[700px] rotate-45 rounded-3xl bg-primary/40"></div>

      {/* Hero Section */}
      <div className="container">
        <Slider {...settings}>
          {heroSection.map((hero) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text content section */}
                <div className="relative z-10 order-2 flex flex-col items-center justify-center gap-4 pt-12 text-center sm:order-1 sm:items-start sm:pt-0 sm:text-left">
                  <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
                    {hero.title}
                  </h1>
                  <p className="text-sm">{hero.description}</p>
                  <button className="rounded-3xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-white">
                    Order Now
                  </button>
                </div>
                {/* Image content section */}
                <div className="order-1 sm:order-2">
                  <img
                    src={hero.image}
                    alt="Content banner"
                    className="lg:scale-120 mx-auto h-[300px] w-[300px] object-contain sm:h-[450px] sm:w-[450px] sm:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
