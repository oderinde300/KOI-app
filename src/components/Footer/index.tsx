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
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex absolute bottom-0 z-10 flex-col w-full pt-36 text-white bg-black/5 px-4 md:px-56 pb-6 over">
      {/* <div className="hidden md:flex absolute -top-[30%] -right-[40%]">
        <Blob />
      </div> */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between w-full border-b pb-20 px-8 border-b-white/10">
        <div className="flex w-full flex-col gap-6">
          <Link href="/">
            <Image
              src="/logo_KOI color+white (H) 1.png"
              alt="Koi Logo"
              className="dark:invert"
              width={200}
              height={68}
              priority
            />
          </Link>

          <div className="flex gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ko-inflation-8563b1268/"
              className=""
            >
              <div className="flex h-8 w-8 relative">
                <Image
                  src="/linkedin.svg"
                  alt="linkedin"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@MissKOI-VirtualIP"
              className=""
            >
              <div className="flex h-8 w-8 relative">
                <Image
                  src="/youtube.svg"
                  alt="youtube"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/nft_mskoi/"
              className=""
            >
              <div className="flex h-8 w-8 relative">
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/people/KOI-Mobilize/100090738491053/"
              className=""
            >
              <div className="flex h-8 w-8 relative">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/+vL6fzqgtXIE2MzBl"
              className=""
            >
              <div className="flex h-8 w-8 relative">
                <Image
                  src="/telegram.svg"
                  alt="telegram"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/koi_inflation"
              className=""
            >
              <div className="flex h-8 w-8 relative">
                <Image
                  src="/x.svg"
                  alt="x"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-lg">QUICK LINKS</h2>
            <ul className="flex flex-col gap-1 font-light">
              <li>
                <Link href="/">Intro</Link>
              </li>
              <li>
                <Link href="/road-map">Road Map</Link>
              </li>
              <li>
                <Link href="/activity">Activity</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-lg">KOI SOLUTIONS</h2>
            <ul className="flex flex-col gap-1 font-light">
              <li>
                <Link href="/monokoily">Monokoily</Link>
              </li>
              <li>
                <Link href="/webbinHUBS">WebbinHUBS</Link>
              </li>
              <li>
                <Link href="/genesis-nft">Genesis NFT</Link>
              </li>
              <li>
                <Link href="/tokenomic">Tokenomic</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between font-light px-8 py-2">
        <p>
          Copyright by <span className="font-semibold">KOI MOBILIZE</span>
        </p>
        <p>
          <Link href="/disclaimer">Disclaimer</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
