import Image from "next/image";
import React from "react";

const Monokoily = () => {
  return (
    <div className="min-h-screen relative  bg-black">
      <div className="flex justify-center md:pt-12 items-center text-white w-full h-full min-h-screen relative after:content-[''] after:absolute after:w-full after:h-72 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/AdobeStock_828629381 1.svg"
          alt="Space"
          fill={true}
          className="object-cover"
        />
        <div className="flex justify-center items-start gap-12 pt-24 px-6 flex-col-reverse md:flex-row z-10">
          <div className="flex relative flex-col md:w-1/2 gap-6 md:gap-12">
            <div className="flex flex-col">
              <h2 className="text-2xl flex items-center gap-1  md:text-4xl font-molde-bold-italic">
                <span>LIVE</span>
                <span className="min-h-1 min-w-3 md:min-h-2 md:min-w-4 -skew-x-[9deg] bg-white"></span>
                <span>TO</span>
                <span className="min-h-1 min-w-3 md:min-h-2 md:min-w-4 -skew-x-[9deg] bg-white"></span>
                <span>EARN</span>
              </h2>
              <p className="text-xl w-fit font-molde md:text-2xl text-gradient">
                MONOKOILY
              </p>
            </div>
            <ul className="list-disc pl-4 md:w-2/3">
              <li>Blockchain Version of Classic Monopoly Game</li>
              <li>Experience Lifes Balance and Challenges</li>
              <li>
                Your Educational Tool for Self-Management and Financial Planning
              </li>
            </ul>
            <p className="text-sm md:text-base md:w-2/3 text-white/80">
              MONOKOILY offers a virtual life simulation where players navigate
              daily challenges and joys, managing time and resources as a
              virtual character. The game focuses on achieving life balance and
              generating passive income. Dive into mastering lifes allocation,
              learning and exploring without the fear of failure. With
              MONOKOILY, live fully and earn as you play.
            </p>
            {/* <Button variant={"outline"} className="py-5">
              Coming Soon
            </Button> */}
            <button className="border border-input bg-transparent shadow-sm h-9 w-48 px-4 py-5 text-sm rounded-full flex items-center justify-center cursor-auto">
              <span>Coming Soon</span>
            </button>
          </div>
          {/* <Image
              src="/monokioly phone 2.svg"
              alt="Monokoily"
              fill={true}
              quality={100}
              className="object-cover"
            /> */}
          <div className="w-full max-w-[400px] md:pb-12 flex justify-center items-center md:justify-start md:items-start relative">
            {/* Video Container with Clipping */}
            <div className="relative w-full h-[475px] sm:h-[740px] sm:max-w-[350px] overflow-hidden">
              {/* Phone Frame */}
              <img
                src="/phone-frame-2.png"
                alt="Phone Frame"
                className="absolute w-[220px] sm:w-full h-[472px] sm:h-[739px] z-20"
              />

              {/* Video inside the frame */}
              <video
                src="videos/Monokoily.webm"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-[0.8rem] sm:top-[1.3rem] left-[0.8rem] sm:left-[1rem] w-[195px] sm:w-[320px] h-[450px] sm:h-[700px] object-cover pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monokoily;
