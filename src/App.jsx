import { useEffect, useState } from "react";
import Navbar from "./components/Navigation/Navbar";
import HomePage from "./pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/footer/Footer";
import ProductDetail from "./pages/ProductDetail";
function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <ProductDetail />
      <Footer />
    </div>
  );
}

export default App;
