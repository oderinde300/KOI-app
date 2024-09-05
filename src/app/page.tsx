"use client";
import Blob from "@/components/Blob";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TeamCard from "@/components/TeamCard";
import { Button } from "@/components/ui/button";
import { ITeam } from "@/interfaces";
import { partners, teamList } from "@/lib/mock";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref); // Detect when the element enters the viewport
  const [className, setClassName] = useState("text-black"); // Default class

  // Use the isInView hook to toggle classes
  useEffect(() => {
    if (isInView) {
      setClassName("bg-custom-gradient-reverse"); // Add this class when in view
    } else {
      setClassName("bg-custom-gradient-reverse"); // Default class
    }
  }, [isInView]);
  return (
    <main className="flex min-h-screen relative text-white flex-col items-center justify-between md:px-12 lg:px-24 bg-black overflow-x-hidden">
      {/* <div className="flex"></div> */}
      {/* <Header /> */}
      <div className="flex flex-col w-full items-center justify-center pt-48 md:pt-56 gap-12 pointer-events-none">
        <div className="flex flex-col justify-center gap-6 items-center relative md:w-2/3">
          <h2 className="font-molde-bold-italic text-center text-4xl md:text-6xl">
            BLOCKCHAIN REVOLUTION
          </h2>
          <h3 className="font-molde text-gradient text-center text-xl md:text-4xl">
            REDEFINING INFLATION
          </h3>
          <p className="text-center md:w-2/3 font-light">
            Pioneering a New Era of Profit Distribution in Social Networks for
            Greater Transparency and Fairness
          </p>
        </div>
        <Button className="text-white py-6">Explore More</Button>
      </div>
      <div className="flex py-24 gap-12 md:gap-28">
        <div className="flex flex-col gap-2 text-white items-center">
          <h2 className="text-xl md:text-2xl font-bold ">1200+</h2>
          <p className="text-xs md:text-base">Monokolly Users</p>
          <div className="flex w-28 md:w-44 h-1 mt-3 bg-button-gradient"></div>
        </div>
        <div className="flex flex-col gap-2 text-white items-center">
          <h2 className="text-xl md:text-2xl font-bold ">1000+</h2>
          <p className="text-xs md:text-base">Web3SOC Users</p>
          <div className="flex w-28 md:w-44 h-1 mt-3 bg-button-gradient"></div>
        </div>
      </div>

      {/* Our Partners */}
      <div className="flex flex-col w-full my-4 mb-24 items-center gap-6">
        <h2 className="font-bold text-xl md:text-2xl text-center text-white">
          OUR PARTNERS
        </h2>
        <div className="flex w-[95%] md:w-[90%] flex-wrap relative">
          {partners.map((url: string, index: number) => (
            <div
              key={index}
              className="flex h-10 w-24 md:h-14 md:min-w-48  relative"
            >
              <Image
                src={url}
                alt={`Partners ${index}`}
                className="object-contain w-full h-full"
                fill={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Miss Koi */}
      <div className="flex flex-col mt-32 md:mt-48 min-h-[40vh] md:min-h-[80vh] justify-center items-start relative  w-full after:content-[''] after:absolute after:w-full after:h-72 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/space img 1.png"
          alt="Space"
          fill={true}
          className="object-fit"
        />

        <div className="flex w-full items-center flex-col relative z-10 p-4">
          <h1 className="text-white font-molde-bold md:ml-56 text-3xl md:text-5xl font-bold md:w-1/3 text-center">
            MEET MISS KOI
          </h1>
          <div className="flex w-full md:gap-24">
            <div className="flex flex-col w-full gap-3">
              <div className="flex relative w-full md:-ml-8 justify-start md:justify-center">
                <Image
                  src="/meteorite2 1.png"
                  alt="meteor"
                  height={173}
                  width={170}
                  className="md:scale-100 scale-[0.6]"
                />
              </div>
              <div className="flex w-full justify-start md:-ml-48 md:justify-end">
                <h2 className="text-2xl md:text-4xl text-center w-1/3 text-white">
                  BLOCKCHAIN VIRTUAL IP
                </h2>
              </div>
              <div className="flex w-full justify-start md:justify-end">
                <div className="flex bg-black text-sm md:text-base md:font-normal font-light text-white p-4 rounded-lg border w-[70%] md:w-80 border-white ">
                  <p>
                    I am Ms. KOI your virtual mentor from the blockchain world.
                    KOI stands for KO Inflation, dedicated to actively fighting
                    the silent threat of inflation.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex absolute top-[50%] -translate-y-[30%] right-0 md:relative md:right-auto md: md:top-auto">
              <div className="flex relative min-w-[300px]">
                <Image
                  src="/MsKOI Space_00000 1.png"
                  alt="space"
                  layout="responsive"
                  height={568}
                  width={477}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex z-10 flex-col px-4 md:px-24 lg:px-48 mt-24 md:mt-0 gap-6">
        <h2 className="font-bold text-2xl md:text-4xl w-full text-left ">
          OUR GOALS
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-24">
          <div className="flex relative justify-center items-center p-3 before:content-[''] md:bg-black before:h-full before:absolute before:w-1 before:bg-custom-gradient before:left-0">
            Empower users to generate personal value and reach a wider audience.
          </div>
          <div className="flex relative justify-center items-center p-3 before:content-[''] md:bg-black before:h-full before:absolute before:w-1 before:bg-custom-gradient before:left-0">
            Connect users to KOI’s marketplace for income generation through
            sharing creations.
          </div>
          <div className="flex relative justify-center items-center p-3 before:content-[''] md:bg-black before:h-full before:absolute before:w-1 before:bg-custom-gradient before:left-0">
            Promote participation in projects that create blockchain assets and
            address inflation.
          </div>
        </div>
      </div>

      <div className="flex flex-col my-24 min-h-[300vh] relative w-full after:content-[''] after:absolute after:w-full after:h-72 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/pawel-czerwinski-ZkzobNDayXo-unsplash (1) 1.png"
          alt="Space"
          fill={true}
          className="object-fit"
        />

        {/* Welcome to koi mobilize */}
        <div className="flex relative md:py-48 gap-12 px-6 z-10 flex-col items-center overflow-hidden">
          <h1 className="text-white text-2xl md:text-3xl mt-20 md:mt-0 font-bold w-full text-left md:text-center">
            WELCOME TO KOI MOBILIZE
          </h1>
          <div className="grid md:w-[80%] grid-cols-1 md:grid-cols-3  gap-4">
            <div className="grid col-span-2 grid-cols-2 gap-2">
              <div className="flex flex-col w-full gap-4 h-full">
                <div className="flex w-full h-full relative">
                  <Image
                    src="/product-02 1.png"
                    alt="Space"
                    fill={true}
                    className="object-fit"
                  />
                </div>
                <div className="flex w-full h-full relative">
                  <Image
                    src="/product-03 1.png"
                    alt="Space"
                    fill={true}
                    className="object-fit"
                  />
                </div>
              </div>
              <div className="flex w-full h-[17rem] md:h-full relative">
                <Image
                  src="/product-04 1.png"
                  alt="Space"
                  fill={true}
                  className="object-fit"
                />
              </div>
            </div>
            <div className="flex col-span-1 w-80 md:w-full h-full py-8 md:px-8 gap-7 flex-col">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Transitioning to Web 3.0</h3>
                <p className="">
                  KOI MOBILIZE guides you from Web 2.0 to Web 3.0, making
                  blockchain accessible and integral to daily life.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">
                  Empowering Your Blockchain Future
                </h3>
                <p className="">
                  With KOI Web3SOC and MONOKOILY, we build a vibrant network
                  through social activities and the sharing economy. Shape your
                  future in the blockchain world with us.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Team */}
        <div className="flex relative px-4 md:px-0  gap-12 mt-12 z-10 flex-col items-center overflow-hidden">
          <h1 className="text-white text-3xl font-bold w-full text-center">
            CORE TEAM
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {teamList.map((team: ITeam, index: number) => (
              <TeamCard key={index} data={team} />
            ))}
          </div>
        </div>
      </div>

      {/* Koi Solutions */}
      <div className="flex relative flex-col w-full pb-6 px-6 md:px-0">
        <div className="hidden md:flex absolute top-[15%] -right-[60%]">
          <Blob />
        </div>
        <h1 className="text-white text-3xl mb-24 font-bold w-full text-center">
          KOI SOLUTIONS
        </h1>
        <div className="flex md:flex-row flex-col w-full">
          <div className="flex w-full items-center justify-start md:justify-center">
            <div className="flex relative h-[7.5rem] w-[7.5rem] md:w-72 md:h-72">
              <Image
                src="/logo_MONOKOILY color + white 1(1).png"
                alt="Monokoily"
                fill={true}
                className="object-fit"
              />
            </div>
          </div>
          <div
            className={`md:flex hidden transition-colors duration-100 ${className}  w-full h-1 md:h-screen md:w-2.5 rounded-full md:rounded-t-full`}
          ></div>
          <div className="flex w-full items-center justify-center">
            <div className="flex relative flex-col md:w-2/3 gap-12">
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-4xl font-molde-bold-italic">
                  LIVE TO EARN
                </h2>
                <p className="text-xl md:text-2xl text-gradient font-molde">
                  MONOKOILY
                </p>
              </div>
              <ul className="list-disc pl-4">
                <li>Experience Lifes Balance and Challenges</li>
                <li>
                  Your Educational Tool for Self-Management and Financial
                  Planning
                </li>
              </ul>
              <Button variant={"outline"} className="py-5">
                <Link href="/monokoily">Learn more</Link>
              </Button>
            </div>
          </div>
          <div
            className={`flex md:hidden my-6 transition-colors duration-100 ${className}  w-full h-1 md:h-screen md:w-2.5 rounded-full md:rounded-t-full`}
          ></div>
        </div>
        <div className="flex md:flex-row-reverse flex-col  w-full">
          <div className="flex w-full items-center justify-start md:justify-center">
            <div className="flex relative h-[7.5rem] w-[7.5rem] md:w-72 md:h-72">
              <Image
                src="/logo_Web3SOC color + white 1(1).png"
                alt="Web3soc"
                fill={true}
                className="object-fit"
              />
            </div>
          </div>
          <div
            className={`hidden md:flex transition-colors duration-500 ${className}  w-full h-1 md:h-screen md:w-2.5 rounded-full md:rounded-none`}
          ></div>
          <div className="flex w-full items-center justify-center">
            <div className="flex relative flex-col md:w-2/3 gap-12">
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-4xl font-molde-bold-italic ">
                  POWERFUL WEB3 SOCIAL PLATFORM
                </h2>
                <p className="text-xl md:text-2xl text-gradient font-molde">
                  WEB3SOC
                </p>
              </div>
              <p className="">
                Earn Social Income and Acquire More Blockchain Assets through
                the Solana Ecosystem.
              </p>
              <Button variant={"outline"} className="py-5">
                <Link href="/web3soc">Learn more</Link>
              </Button>
            </div>
          </div>
          <div
            className={`md:hidden my-6 flex transition-colors duration-500 ${className}  w-full h-1 md:h-screen md:w-2.5 rounded-full md:rounded-none`}
          ></div>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex w-full items-center justify-start md:justify-center">
            <div className="flex relative w-[7.5rem] h-[10rem] md:w-72 md:h-[27.1875rem]">
              <Image
                src="/KOI Genesis 1(1).png"
                alt="Koi Genesis"
                fill={true}
                className="object-fit"
              />
            </div>
          </div>
          <div
            className={`hidden md:flex transition-colors duration-500 ${className}  w-full h-1 md:h-screen md:w-2.5 `}
          ></div>
          <div className="flex w-full items-center justify-center">
            <div className="flex relative flex-col md:w-2/3 gap-12">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-4xl font-molde-bold-italic ">
                  INVEST SMART EARN BIG
                </h2>
                <p className="text-xl md:text-2xl text-gradient font-molde">
                  KOI GENESIS NFT
                </p>
              </div>
              <Button variant={"outline"} className="py-5">
                <Link href="/genesis-nft">Learn more</Link>
              </Button>
            </div>
          </div>
          <div
            className={`md:hidden my-6 flex transition-colors duration-500 ${className}  w-full h-1 md:h-screen md:w-2.5 `}
          ></div>
        </div>
        <div className="flex flex-col md:flex-row-reverse w-full">
          <div className="flex w-full items-center justify-start md:justify-center">
            <div className="flex relative h-[7.5rem] w-[7.5rem] md:w-72 md:h-72">
              <Image
                src="/logo_KOI Token color + white 1.png"
                alt="Koi Genesis"
                fill={true}
                className="object-fit"
              />
            </div>
          </div>
          <div
            className={`md:flex hidden transition-colors duration-500 ${className}  w-full h-1 md:h-screen md:w-2.5 rounded-b-full`}
          ></div>
          <div className="flex w-full items-center justify-center">
            <div className="flex relative flex-col md:w-2/3 gap-12">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-4xl font-molde-bold-italic ">
                  EXPERIENCE REVOLUTIONARY FINANCE
                </h2>
                <p className="text-xl md:text-2xl text-gradient font-molde">
                  TOKENOMIC ECOSYSTEM
                </p>
              </div>
              <Button variant={"outline"} className="py-5">
                <Link href="/tokenomic">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="hidden md:flex absolute bottom-0 -right-[60%]">
          <Blob />
        </div> */}
      </div>
    </main>
  );
}
