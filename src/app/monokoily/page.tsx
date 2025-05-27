"use client";
import MonoKoiChart from "@/components/Chart/MonokoiChart";
import { Button } from "@/components/ui/button";
import { IChartData } from "@/interfaces";
import { MonokoiChartData } from "@/lib/mock";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Monokoily = () => {
  return (
    <div className="relative bg-black">
      <div className="flex justify-center md:pt-12 items-center text-white w-full h-full relative after:content-[''] after:absolute after:w-full after:h-72 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/AdobeStock_828629381 1.svg"
          alt="Space"
          fill={true}
          className="object-cover"
        />
        <div className="flex justify-center items-center gap-12 pt-24 px-6 flex-col-reverse md:flex-row z-10">
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

            <div className="flex gap-4">
              <button className="border border-input bg-transparent shadow-sm h-9 w-48 px-4 py-5 text-sm rounded-full flex items-center justify-center cursor-auto">
                <span>Coming Soon</span>
              </button>
              <Link
                href="https://monokoily-kois-organization.gitbook.io/monokoily"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <WhitePaperButton /> */}
                <Button className="py-5 bg-black text-white border-white hover:bg-white hover:text-black border">
                  Whitepaper
                </Button>
              </Link>
            </div>
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

      <div className="mx-auto w-full px-4 md:px-0 xl:w-3/5 md:pt-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[60%] h-[30rem] gap-4 flex justify-center items-center">
            <MonoKoiChart />
          </div>
          <div className="mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/MonoKoi_token_logo.png"
                alt="logo"
                width={60}
                height={60}
              />
              <div className="flex flex-col justify-start items-start">
                <h2 className="font-extrabold md:text-2xl bg-clip-text  text-white text-center">
                  TOKENOMIC
                </h2>
                <h2 className="md:text-2xl bg-clip-text  text-white text-center text-gradient">
                  MONOKOI TOKEN
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full text-white/80 h-full">
              <div className="flex flex-col w-full">
                {MonokoiChartData.map((item: IChartData, index: number) => (
                  <div
                    key={index}
                    className="flex items-center w-full border-b group border-b-white/40 pb-2 justify-between gap-x-8"
                  >
                    <div className="flex items-center gap-1 py-2">
                      <span
                        style={{ backgroundColor: item.color }}
                        className={`rounded-full h-3 w-3`}
                      ></span>
                      <p className="">{item.name}</p>
                    </div>
                    <p className="">{item.percentage}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monokoily;
