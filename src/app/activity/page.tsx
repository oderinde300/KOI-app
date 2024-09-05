import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import ActivityCard from "../../components/ActivityCard";

const ActivityBoard = () => {
  return (
    <div className="min-h-screen relative bg-black text-white">
      <div className="flex  justify-center pb-24 items-end text-white w-full h-[60vh] relative after:content-[''] after:absolute after:w-full after:h-[40rem] after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/image 83.png"
          alt="Space"
          layout="fill" // Make the image fill the parent container
          objectFit="cover" // Ensure the image covers the container without distortion
          className=""
        />

        <h2 className="font-bold text-3xl z-10">ACTIVITY BOARD</h2>
      </div>

      <div className="flex flex-col w-full z-20 justify-start gap-24 px-6 pt-24 min-h-screen items-center">
        <div className="flex ">
          <div className="flex rounded-full border border-white/30 p-1">
            <Input
              className="border-none"
              type="email"
              placeholder="Search by Keyword"
            />
            <Button className="w-48">Search</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
          <ActivityCard />
          <ActivityCard />
        </div>
      </div>
    </div>
  );
};

export default ActivityBoard;
