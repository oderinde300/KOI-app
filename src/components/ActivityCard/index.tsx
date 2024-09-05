import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const ActivityCard = () => {
  return (
    <div className="border rounded-sm border-white/30 bg-white/20">
      <div className="flex relative w-full h-48">
        <Image
          src="/A2 1.png"
          alt="Space"
          layout="fill" // Make the image fill the parent container
          objectFit="cover" // Ensure the image covers the container without distortion
          className=""
        />
      </div>
      <div className="flex flex-col gap-2 text-white/80 px-3">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-white">TITLE: </span>
          <p>Penang Masverse Dev Day</p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-bold text-white">DATE: </span>
          <p>January 19, 2024</p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-bold text-white">CITY: </span>
          <p>Penang</p>
        </div>
      </div>
      <div className="flex border-b text-white/80 px-3 py-2 border-b-white/40">
        <p className="">
          KOI Mobilize Sdn Bhd is honored to be invited to participate in
          Masverse’s first grand event of the year 2024, scheduled for January
          19th at 8 p.m. at the Masverse Web 3.0 Hub in Auto-City, Penang,
          Malaysia ...
        </p>
      </div>
      <div className="flex w-full py-3">
        <Button className="w-full">View Details</Button>
      </div>
    </div>
  );
};

export default ActivityCard;
