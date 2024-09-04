import { InstagramLogoIcon } from "@radix-ui/react-icons";
import {
  FacebookIcon,
  Instagram,
  InstagramIcon,
  Linkedin,
  Twitch,
  Twitter,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Blob from "../Blob";

const Footer = () => {
  return (
    <div className="flex flex-col w-full relative pt-36 text-white bg-black px-4 md:px-36 pb-6 over">
      {/* <div className="hidden md:flex absolute -top-[30%] -right-[40%]">
        <Blob />
      </div> */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between w-full border-b pb-20 px-8 border-b-white/10">
        <div className="flex w-full flex-col gap-6">
          <Image
            src="/logo_KOI color+white (H) 1.png"
            alt="Koi Logo"
            className="dark:invert"
            width={200}
            height={68}
            priority
          />
          <div className="flex gap-2">
            <span className="bg-white/20 rounded-md p-2">
              <Instagram fontSize={"1rem"} />
            </span>
            <span className="bg-white/20 rounded-md p-2">
              <YoutubeIcon fontSize={"1rem"} />
            </span>
            <span className="bg-white/20 rounded-md p-2">
              <Linkedin fontSize={"1rem"} />
            </span>
            <span className="bg-white/20 rounded-md p-2">
              <FacebookIcon fontSize={"1rem"} />
            </span>
            <span className="bg-white/20 rounded-md p-2">
              <Twitter fontSize={"1rem"} />
            </span>
            <span className="bg-white/20 rounded-md p-2">
              <Twitch fontSize={"1rem"} />
            </span>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-lg">QUICK LINKS</h2>
            <ul className="flex flex-col gap-1 font-light">
              <li>Link</li>
              <li>Road Map</li>
              <li>Activity</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-lg">KOI SOLUTIONS</h2>
            <ul className="flex flex-col gap-1 font-light">
              <li>Monokoily</li>
              <li>Web3SOC</li>
              <li>Genesis NFT</li>
              <li>Tokenomic</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between font-light px-8 py-2">
        <p>
          Copyright by <span className="font-semibold">KOI MOBILIZE</span>
        </p>
        <p>Disclaimer</p>
      </div>
    </div>
  );
};

export default Footer;
