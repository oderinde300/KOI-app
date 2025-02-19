"use client";
// import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "../../components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "../../components/Slider";
import { slides } from "@/lib/mock";
import Link from "next/link";

const Web3SOC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="min-h-screen relative bg-black text-white">
      <div className="flex justify-center items-center text-white w-full h-full min-h-screen relative after:content-[''] after:absolute after:w-full after:h-72 md:after:h-24 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        {/* <Image
          src="/touch screen 1.svg"
          alt="Space"
          fill={true}
          className="object-cover"
        /> */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/touch screen.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex justify-center items-center gap-12  px-6 flex-col md:flex-row z-10">
          <div className="flex relative items-center md:items-start flex-col md:w-2/3 gap-12">
            <div className="flex items-center md:items-start flex-col gap-4">
              <h2 className="font-molde-bold-italic uppercase md:text-nowrap text-center md:text-left text-2xl md:text-4xl md:w-1/2 ">
                powerful web3 <br></br> SOCIAL PLATFORM
              </h2>
              <p className="text-lg text-center md:text-left font-molde md:text-2xl text-gradient w-fit">
                WebbinHUBS
              </p>
            </div>
            <ul className="list-disc text-sm text-center md:text-left md:text-base md:w-2/4 text-white/80">
              <li>Web3 Version of Classic Meta</li>
              <li>
                Earn Social Income and Acquire More Blockchain Assets through
                the Solana Ecosystem.
              </li>
            </ul>
            <p className="text-sm text-center md:text-left md:text-base md:w-2/4 text-white/80">
              A dynamic platform for the Web3 economy, enabling users to earn
              social income and grow their blockchain assets via the Solana
              ecosystem, while viewing problem-solving as a key driver for
              business innovation and growth.
            </p>
            <div className="">
              <Link
                href="https://monokoily-kois-organization.gitbook.io/webbinhubs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="py-5 bg-black text-white  hover:bg-white hover:text-black">
                  Whitepaper
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 px-6 md:px-36">
        <h2 className="font-bold md:text-3xl text-gradient">
          Bridging Web 3.0&#39;s Social Gap
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-none max-w-[394px] w-full">
            <div className="flex rounded-xl border flex-col gap-10 py-6 px-8 border-white/20 justify-between">
              <h2 className="text-xl font-bold">Web 3.0&#39;s Limitations</h2>
              <p className="text-white/60">
                Web 3.0 focuses on financial assets, overlooking trust-based
                relationships vital for activities like &quot;unsecured
                loans&quot; and &quot;personal branding&quot;.
              </p>
            </div>
          </div>

          <div className="flex-none max-w-[394px] w-full">
            <div className="flex rounded-xl border flex-col gap-4 py-6 px-8 border-white/20 justify-between">
              <h2 className="text-xl font-bold">
                Introduction of Soulbound Tokens (SBTs)
              </h2>
              <p className="text-white/60">
                Vitalik Buterin introduced &quot;Soulbound Tokens&quot; in his
                2022 paper, representing enduring social ties and enhancing Web
                3.0&#39;s scope to include social interactions.
              </p>
            </div>
          </div>

          <div className="flex-none max-w-[394px] w-full">
            <div className="flex rounded-xl border flex-col gap-10 py-6 px-8 border-white/20 justify-between">
              <h2 className="text-xl font-bold">Advantages of SBTs</h2>
              <p className="text-white/60">
                SBTs establish trust in economic activities and facilitate
                digital identity representation, potentially transforming
                digital engagement and personal identity in Web 3.0..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full px-6 py-12 md:px-0 justify-center pt-24 items-center">
        <Slider
          className=" md:w-[55%] bg-[#121515] p-4 rounded-3xl border-2 border-white/40`"
          slides={slides}
          imageStyle="h-[14rem] md:h-[32rem] bg-white/60"
        />
      </div>
    </div>
  );
};

export default Web3SOC;
