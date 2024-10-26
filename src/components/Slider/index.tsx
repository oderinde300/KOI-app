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
  const [isAnimating, setIsAnimating] = useState(false);
  const [isExiting, setIsExiting] = useState(false); // Track exit animation state

  // Function to automatically go to the next slide
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  //   }, 3000); // Change slide every 3 seconds

  //   // Cleanup the interval when the component unmounts
  //   return () => clearInterval(interval);
  // }, []);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? slides.length - 1 : prevIndex - 1
  //   );
  // };

  // Function to automatically go to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    }
  };

  // Reset animation state when transition ends
  const handleTransitionEnd = () => {
    setIsAnimating(false);
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
        className={`${imageStyle} flex w-full select-none pointer-events-none relative overflow-x-hidden`}
      >
        {/* <Image
          src={slides[currentIndex]}
          alt="Space"
          fill={true}
          className="object-cover select-none pointer-events-none"
        /> */}
        <div
          className={`flex w-full transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 ${
                index === currentIndex
                  ? "animate-slide-enter"
                  : index === (currentIndex - 1 + slides.length) % slides.length
                  ? "animate-slide-exit"
                  : ""
              }`}
            >
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                fill={true}
                className="object-contain md:object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-2 items-center absolute bottom-8 z-50 left-1/2 -translate-x-1/2">
          {slides.map((item: any, index: number) => (
            <span
              key={index}
              className={`${
                index === currentIndex ? "bg-white" : "border-2 border-white"
              } h-3 w-3 rounded-full`}
            ></span>
          ))}
        </div>
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
