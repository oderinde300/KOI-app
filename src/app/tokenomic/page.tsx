"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { chartData } from "@/lib/mock";
import { IChartData } from "@/interfaces";
// import { Pin } from "lucide-react";
import Chart from "@/components/Chart";

const Tokenomic = () => {
  const [hoveredImage, setHoveredImage] = useState("Group.svg");

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

      <div className="mx-auto w-full px-4 md:px-0 md:w-3/5">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[60%] h-[30rem] gap-4 flex justify-center items-center">
            <Chart />
          </div>
          <div className="mx-auto">
            <h2 className="font-bold md:text-3xl bg-clip-text  text-white text-center mb-4">
              TOKENOMIC
            </h2>
            <div className="flex flex-col gap-2 w-full text-white/80 h-full">
              <div className="flex flex-col w-full">
                {chartData.map((item: IChartData, index: number) => (
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
      {/* <div className="flex w-full z-20 justify-center px-6 pt-24 my-16 md:my-0 h-screen items-center">
        <div className="flex items-center flex-col border p-8 max-w-lg px-12 md:px-16 bg-white/20 gap-5 border-white/50 rounded-3xl">
          <h2 className="font-bold md:text-3xl bg-clip-text  text-white">
            TOKENOMIC ECOSYSTEM
          </h2>

          <div className="flex relative w-60 h-60">
            <Image
              src={`/${hoveredImage}`}
              alt="chart"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 w-full text-white/80 h-full">
            <div className="flex flex-col w-full">
              {chartData.map((item: IChartData, index: number) => (
                <div
                  key={index}
                  className="flex items-center w-full border-b cursor-pointer group border-b-white/40 pb-2 justify-between"
                  onMouseEnter={() => setHoveredImage(item.image)}
                  onMouseLeave={() => setHoveredImage("Group.svg")}
                >
                  <div className="flex items-center gap-1 py-2">
                    <span
                      style={{ backgroundColor: item.color }}
                      className={`rounded-full group-hover:hidden h-3 w-3`}
                    ></span>
                    <span className="group-hover:block rotate-45 hidden">
                      <Pin />
                    </span>
                    <p className="group-hover:font-bold">{item.name}</p>
                  </div>
                  <p className="group-hover:font-bold">{item.percentage}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Tokenomic;
