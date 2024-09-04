import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";

const Web3SOC = () => {
  return (
    <div className="min-h-screen relative bg-black text-white">
      <div className="flex justify-center items-center text-white w-full h-full min-h-screen relative after:content-[''] after:absolute after:w-full after:h-24 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/touch screen 1.png"
          alt="Space"
          layout="fill" // Make the image fill the parent container
          objectFit="cover" // Ensure the image covers the container without distortion
          className=""
        />
        <div className="flex justify-center items-center gap-12  px-6 flex-col md:flex-row z-10">
          <div className="flex relative flex-col md:w-2/3 gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="font-extrabold text-2xl md:text-4xl md:w-1/2 ">
                POWERFUL WEB3M SOCIAL PLATFORM
              </h2>
              <p className="text-xl md:text-2xl bg-clip-text text-transparent bg-button-gradient">
                WEB3SOC
              </p>
            </div>
            <p className="text-sm md:text-base md:w-2/3">
              A dynamic platform for the Web3 economy, enabling users to earn
              social income and grow their blockchain assets via the Solana
              ecosystem, while viewing problem-solving as a key driver for
              business innovation and growth.
            </p>
            <Button variant={"outline"} className="py-5">
              Comming soon
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 px-6 md:px-24">
        <h2 className="font-bold md:text-3xl bg-clip-text text-transparent bg-button-gradient">
          Bridging Web 3.0 Social Gap
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex rounded-xl border flex-col gap-4 p-4 border-white/20 justify-between">
            <h2 className="text-xl font-bold">Web 3.0 Limitations</h2>
            <p className="text-white/60">
              Web 3.0 focuses on financial assets, overlooking trust-based
              relationships vital for activities like &quot;unsecured
              loans&quot; and &quot;personal branding&quot;.
            </p>
          </div>
          <div className="flex rounded-xl border flex-col gap-4 p-4 border-white/20 justify-between">
            <h2 className="text-xl font-bold">
              Introduction of Soulbound Tokens (SBTs)
            </h2>
            <p className="text-white/60">
              Vitalik Buterin introduced &quot;Soulbound Tokens&quot; in his
              2022 paper, representing enduring social ties and enhancing Web
              3.0&#39;s scope to include social interactions.
            </p>
          </div>
          <div className="flex rounded-xl border flex-col gap-4 p-4 border-white/20 justify-between">
            <h2 className="text-xl font-bold">Advantages of SBTs</h2>
            <p className="text-white/60">
              SBTs establish trust in economic activities and facilitate digital
              identity representation, potentially transforming digital
              engagement and personal identity in Web 3.0..
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center pt-24 items-center">
        <div className="flex\ relative">
          <Image
            src="/MacBook Pro.png"
            alt="Space"
            layout="responsive" // Make the image fill the parent container
            width={900}
            height={516}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Web3SOC;
