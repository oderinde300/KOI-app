import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";

const Tokenomic = () => {
  return (
    <div className="min-h-screen relative bg-black text-white">
      <div className="flex  justify-center items-center text-white w-full h-full min-h-screen relative after:content-[''] after:absolute after:w-full after:h-[50rem] after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/image 83.png"
          alt="Space"
          layout="fill" // Make the image fill the parent container
          objectFit="cover" // Ensure the image covers the container without distortion
          className=""
        />
        <div className="flex justify-center items-center gap-12  px-6 md:px-48 flex-col-reverse md:flex-row z-10">
          <div className="flex relative flex-col md:w-2/3 gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="font-extrabold text-2xl md:text-4xl md:w-1/2 ">
                EXPERIENCE REVOLUTIONARY FINANCE
              </h2>
              <p className="text-xl md:text-2xl bg-clip-text text-transparent bg-button-gradient">
                TOKENOMIC ECOSYSTEM
              </p>
            </div>
            <p className="text-sm md:text-base md:w-2/3">
              Secure Your Spot in the Future of Finance Join Our Telegram for
              the Latest Launch News
            </p>
            <Button className="py-5 w-32 md:w-48">Telegram</Button>
          </div>
          <div className="flex relative w-52 h-[25rem] md:w-[500px] md:h-[31.5rem]">
            <Image
              src="/logo_KOI Token color + white 1.png"
              alt="Monokoily"
              layout="fill" // Make the image fill the parent container
              objectFit="cover" // Ensure the image covers the container without distortion
              className=""
            />
          </div>
        </div>
      </div>

      <div className="flex w-full z-20 justify-center px-6 pt-24 h-screen items-center">
        <div className="flex items-center flex-col border p-8 max-w-lg px-16 bg-white/20 gap-5 border-white/50 rounded-3xl">
          <h2 className="font-bold md:text-3xl bg-clip-text text-white">
            TOKENOMIC ECOSYSTEM
          </h2>
          <div className="flex relative w-60 h-60">
            <Image
              src="/Group.png"
              alt="chart"
              layout="fill" // Make the image fill the parent container
              objectFit="cover" // Ensure the image covers the container without distortion
              className=""
            />
          </div>
          <div className="flex flex-col gap-2 w-full h-full">
            <div className="flex flex-col w-full">
              <div className="flex items-center w-full border-b border-b-white/40 pb-2 justify-between">
                <div className="flex items-center gap-1">
                  <span className={`bg-[#FFA515] rounded-full h-3 w-3`}></span>
                  <p>Web3SOC Rewards</p>
                </div>
                <p>50%</p>
              </div>
              <div className="flex items-center w-full border-b border-b-white/40 pb-2 justify-between">
                <div className="flex items-center gap-1">
                  <span className={`bg-[#9ED441] rounded-full h-3 w-3`}></span>
                  <p>Monokoily Rewards</p>
                </div>
                <p>15%</p>
              </div>
              <div className="flex items-center w-full border-b border-b-white/40 pb-2 justify-between">
                <div className="flex items-center gap-1">
                  <span className={`bg-[#D44161] rounded-full h-3 w-3`}></span>
                  <p>Private Sales</p>
                </div>
                <p>13%</p>
              </div>
              <div className="flex items-center w-full border-b border-b-white/40 pb-2 justify-between">
                <div className="flex items-center gap-1">
                  <span className={`bg-[#D45741] rounded-full h-3 w-3`}></span>
                  <p>Future Development</p>
                </div>
                <p>10%</p>
              </div>
              <div className="flex items-center w-full border-b border-b-white/40 pb-2 justify-between">
                <div className="flex items-center gap-1">
                  <span className={`bg-[#41D499] rounded-full h-3 w-3`}></span>
                  <p>Team</p>
                </div>
                <p>5%</p>
              </div>
              <div className="flex items-center w-full border-b border-b-white/40 pb-2 justify-between">
                <div className="flex items-center gap-1">
                  <span className={`bg-[#2255D6] rounded-full h-3 w-3`}></span>
                  <p>LP</p>
                </div>
                <p>5%</p>
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center gap-1">
                  <span className={`bg-[#6D41D4] rounded-full h-3 w-3`}></span>
                  <p>Advisor</p>
                </div>
                <p>2%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomic;
