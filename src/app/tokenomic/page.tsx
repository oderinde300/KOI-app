import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const Tokenomic = () => {
  return (
    <div className="min-h-screen relative bg-black text-white">
      <div className="flex  justify-center items-center text-white w-full h-full min-h-screen relative after:content-[''] after:absolute after:w-full after:h-[50rem] after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/image 83.svg"
          alt="Space"
          fill={true}
          className="object-cover"
        />
        <div className="flex justify-center items-center pt-12 md:pt-0  md:gap-12  px-6 md:px-48 flex-col-reverse md:flex-row z-10">
          <div className="flex relative items-center md:items-start flex-col md:w-2/3 md:gap-12 gap-6">
            <div className="flex flex-col items-center md:items-start gap-4">
              <h2 className="font-molde-bold-italic text-center md:text-start text-2xl md:text-4xl md:w-1/2 ">
                EXPERIENCE REVOLUTIONARY FINANCE
              </h2>
              <p className="text-lg font-molde text-center md:text-start md:text-2xl w-fit text-gradient">
                TOKENOMIC ECOSYSTEM
              </p>
            </div>
            <p className="text-sm md:text-base text-white/80 text-center md:text-start md:w-2/3">
              Secure Your Spot in the Future of Finance Join Our Telegram for
              the Latest Launch News
            </p>
            <Button className="py-5 w-32 md:w-48">
              <a
                href="https://t.me/+vL6fzqgtXIE2MzBl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </Button>
          </div>
          <div className="flex relative w-[12.5rem] h-[12.6rem] md:w-[500px] md:h-[31.5rem]">
            <Image
              src="/logo_KOI Token color + white 1.png"
              alt="Monokoily"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full z-20 justify-center px-6 pt-24 my-16 md:my-0 h-screen items-center">
        <div className="flex items-center flex-col border p-8 max-w-lg px-12 md:px-16 bg-white/20 gap-5 border-white/50 rounded-3xl">
          <h2 className="font-bold md:text-3xl bg-clip-text  text-white">
            TOKENOMIC ECOSYSTEM
          </h2>
          <div className="flex relative w-60 h-60">
            <Image
              src="/Group.svg"
              alt="chart"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 w-full text-white/80 h-full">
            <div className="flex flex-col w-full">
              <div className="flex items-center w-full border-b border-b-white/40 pb-2 justify-between">
                <div className="flex items-center gap-1 py-2">
                  <span className={`bg-[#FFA515] rounded-full h-3 w-3`}></span>
                  <p>Web3SOC Rewards</p>
                </div>
                <p>50%</p>
              </div>
              <div className="flex items-center w-full border-b border-b-white/40 pb-2 justify-between">
                <div className="flex items-center gap-1 py-2">
                  <span className={`bg-[#9ED441] rounded-full h-3 w-3`}></span>
                  <p>Monokoily Rewards</p>
                </div>
                <p>15%</p>
              </div>
              <div className="flex items-center w-full border-b border-b-white/40 pb-2 justify-between">
                <div className="flex items-center gap-1 py-2">
                  <span className={`bg-[#D44161] rounded-full h-3 w-3`}></span>
                  <p>Private Sales</p>
                </div>
                <p>13%</p>
              </div>
              <div className="flex items-center w-full border-b border-b-white/40 pb-2 justify-between">
                <div className="flex items-center gap-1 py-2">
                  <span className={`bg-[#D45741] rounded-full h-3 w-3`}></span>
                  <p>Future Development</p>
                </div>
                <p>10%</p>
              </div>
              <div className="flex items-center w-full border-b border-b-white/40 pb-2 justify-between">
                <div className="flex items-center gap-1 py-2">
                  <span className={`bg-[#41D499] rounded-full h-3 w-3`}></span>
                  <p>Team</p>
                </div>
                <p>5%</p>
              </div>
              <div className="flex items-center w-full border-b border-b-white/40 pb-2 justify-between">
                <div className="flex items-center gap-1 py-2">
                  <span className={`bg-[#2255D6] rounded-full h-3 w-3`}></span>
                  <p>LP</p>
                </div>
                <p>5%</p>
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center gap-1 py-2">
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
