"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { slides } from "../../lib/mock";

interface Props {
  slides: string[];
  className?: string;
  imageStyle?: string;
}

const Slider = ({ slides, className, imageStyle }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to automatically go to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`${className} flex relative w-full`}>
      <div
        onClick={prevSlide}
        className="flex cursor-pointer left-4 absolute top-[50%] -translate-y-[50%] bg-black/40 shadow-lg p-2 z-20 rounded-full"
      >
        <ChevronLeft color="white" />
      </div>
      <div
        className={`${imageStyle} flex w-full select-none pointer-events-none relative`}
      >
        <Image
          src={slides[currentIndex]}
          alt="Space"
          fill={true}
          className="object-cover select-none pointer-events-none"
        />
      </div>
      <div
        onClick={nextSlide}
        className="flex absolute cursor-pointer top-[50%] -translate-y-[50%] bg-black/40 shadow-lg  p-2 z-20 right-4 rounded-full"
      >
        <ChevronRight color="white" />
      </div>
    </div>
  );
};

export default Slider;
