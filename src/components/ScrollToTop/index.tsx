import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
<<<<<<< HEAD
    <div className="fixed z-50 bottom-5 right-5">
=======
    <div className="z-50 fixed bottom-5 right-5">
>>>>>>> 8ef37cc35ea70266e3bd37342338e1ad160c6870
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-custom-gradient text-white p-3 rounded-full shadow-md hover:bg-blue-800 transition duration-300 flex items-center gap-2"
        >
          Top
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
