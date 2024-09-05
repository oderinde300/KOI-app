"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { slides } from "../../lib/mock";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex relative w-full md:w-[55%] bg-[#121515] p-4 rounded-3xl border-2 border-white/40 ">
      <div
        onClick={prevSlide}
        className="flex cursor-pointer left-4 absolute top-[50%] -translate-y-[50%] bg-black/40 shadow-lg p-2 z-20 rounded-full"
      >
        <ChevronLeft color="white" />
      </div>
      <div className="flex w-full h-[14rem] md:h-[32rem] select-none pointer-events-none relative bg-white/60 ">
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
