import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";

const Monokoily = () => {
  return (
    <div className="min-h-screen relative  bg-black">
      <div className="flex justify-center pt-48 items-center text-white w-full h-full min-h-screen relative after:content-[''] after:absolute after:w-full after:h-72 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/AdobeStock_828629381 1.svg"
          alt="Space"
          fill={true}
          className="object-cover"
        />
        <div className="flex justify-center items-center gap-12 pt-24 px-6 flex-col-reverse md:flex-row z-10">
          <div className="flex relative flex-col md:w-1/2 gap-12">
            <div className="flex flex-col">
              <h2 className="font-molde-bold-italic text-2xl md:text-4xl ">
                LIVE TO EARN
              </h2>
              <p className="text-xl w-fit font-molde md:text-2xl text-gradient">
                MONOKOILY
              </p>
            </div>
            <ul className="list-disc pl-4 md:w-2/3">
              <li>Experience Lifes Balance and Challenges</li>
              <li>
                Your Educational Tool for Self-Management and Financial Planning
              </li>
            </ul>
            <p className="text-sm md:text-base md:w-2/3">
              MONOKOILY offers a virtual life simulation where players navigate
              daily challenges and joys, managing time and resources as a
              virtual character. The game focuses on achieving life balance and
              generating passive income. Dive into mastering lifes allocation,
              learning and exploring without the fear of failure. With
              MONOKOILY, live fully and earn as you play.
            </p>
            <Button variant={"outline"} className="py-5">
              Comming soon
            </Button>
          </div>
          <div className="flex relative w-52 h-[25rem] md:w-64 md:h-[31.5rem]">
            <Image
              src="/monokioly phone 2.svg"
              alt="Monokoily"
              fill={true}
              quality={100}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monokoily;
