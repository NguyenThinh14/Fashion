import React, { useEffect, useState } from "react";
import LightButton from "../../assets/light-mode-button.png";
import DarkButton from "../../assets/dark-mode-button.png";

const ThemeModeButton = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div
      className="relative"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <img
        src={LightButton}
        alt="Light mode"
        className={`absolute w-14 cursor-pointer transition-all duration-300 ease-in-out ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img src={DarkButton} alt="Light mode" className="w-14 cursor-pointer" />
    </div>
  );
};

export default ThemeModeButton;
