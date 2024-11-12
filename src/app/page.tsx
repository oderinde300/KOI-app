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
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import ScrollToTopButton from "@/components/ScrollToTop";
import Meteorite from "@/assets/images/meteorite.svg";
import Space from "@/assets/images/space-img.svg";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref); // Detect when the element enters the viewport
  const [className, setClassName] = useState("text-black"); // Default class

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current?.readyState === 4) {
        videoRef.current.play();
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Use the isInView hook to toggle classes
  useEffect(() => {
    if (isInView) {
      setClassName("bg-custom-gradient-reverse"); // Add this class when in view
    } else {
      setClassName("bg-custom-gradient-reverse"); // Default class
    }
  }, [isInView]);
  return (
    <main className="flex min-h-screen relative text-white flex-col items-center justify-between  bg-black overflow-x-hidden">
      <div className="flex min-h-[120vh] flex-col relative w-full sca">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="hidden md:flex md:absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/01_hero banner video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col z-10 w-full items-center justify-center pt-48 md:pt-72 gap-12">
          <div className="flex flex-col justify-center gap-6 items-center relative md:w-2/3">
            <h2 className="font-molde-bold-italic tracking-widest text-center text-4xl md:text-6xl">
              BLOCKCHAIN REVOLUTION
            </h2>
            <h3 className="font-molde text-gradient text-center text-xl md:text-4xl">
              REDEFINING INFLATION
            </h3>
            <p className="text-center text-white/80 font-light md:w-2/3">
              Pioneering a New Era of Profit Distribution in Social Networks for
              Greater Transparency and Fairness
            </p>
          </div>
          <Button className="text-white w-56 py-6">
            <Link href={"#welcome"}>Explore More</Link>
          </Button>
        </div>
        <div className="flex mx-auto py-24 z-10 gap-12 md:gap-28">
          <div className="flex flex-col gap-2 text-white items-center">
            <h2 className="text-xl md:text-2xl font-bold ">1200+</h2>
            <p className="text-xs md:text-base">Monokoily Users</p>
            <div className="flex w-28 md:w-44 h-1 mt-3 bg-button-gradient"></div>
          </div>
          <div className="flex flex-col gap-2 text-white items-center">
            <h2 className="text-xl md:text-2xl font-bold ">1000+</h2>
            <p className="text-xs md:text-base">Web3SOC Users</p>
            <div className="flex w-28 md:w-44 h-1 mt-3 bg-button-gradient"></div>
          </div>
        </div>
      </div>

      {/* Our Partners */}
      <div className="flex flex-col w-full my-4 mb-24 items-center gap-6 md:gap-16">
        <h2 className="font-bold text-xl md:text-3xl text-center text-white">
          OUR PARTNERS
        </h2>
        {/* <div className="flex w-[95%] md:w-[90%] flex-wrap relative">
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
        </div> */}
        {/* <div className="overflow-hidden w-full">
          <div className="animate-scroll flex w-max">
            {partners.map((url: string, index: number) => (
              <div
                key={index}
                className="flex h-10 w-24 md:h-14 md:min-w-48 relative"
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
        </div> */}
        <div className="overflow-hidden w-full">
          <div className="animate-scroll flex w-max">
            {[...partners, ...partners].map((url: string, index: number) => (
              <div key={index} className="flex h-14 min-w-48 relative">
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

        {/* <div className="hidden md:flex relative min-w-[71.25rem]  min-h-36">
          <Image
            src="/partners/partner.svg"
            alt={`Partners`}
            className="object-contain w-full h-full"
            fill={true}
          />
        </div>
        <div className="flex md:hidden relative w-[95%]  min-h-[8.6875rem]">
          <Image
            src="/partners/partner_mobile.svg"
            alt={`Partners`}
            className="object-contain w-full h-full"
            fill={true}
          />
        </div> */}
      </div>

      {/* Miss Koi */}
      <div className="flex flex-col mt-32 md:mt-48  min-h-[40vh] md:min-h-[100vh] justify-center items-start relative  w-full after:content-[''] after:absolute after:w-full after:h-6 md:after:h-72 after:bottom-0 after:bg-gradient-to-t after:z-20 after:from-black after:to-transparent">
        <Image
          src={Space}
          alt="Space"
          fill={true}
          className="object-cover"
          priority
        />

        <div className="flex w-full items-center flex-col relative z-10">
          <h1 className="text-white lg:-mt-16 font-molde-bold lg:ml-56 text-3xl lg:text-5xl font-bold w-1/2 lg:w-1/4 text-center">
            MEET MISS KOI
          </h1>
          <div className="flex w-full md:items-center lg:px-48">
            <div className="flex px-4 lg:-mt-16 lg:pl-32  flex-col w-full gap-3 md:gap-5 lg:gap-12">
              <div className="lg:absolute top-[1%] left-[18%] flex ml-4 h-[4.5rem] w-[4.375rem] lg:h-40 lg:w-36 relative">
                <Image
                  src={Meteorite}
                  alt="meteor"
                  fill={true}
                  className="object-cover"
                />
              </div>
              <div className="flex w-full justify-start md:justify-center md:w-2/3 lg:justify-start lg:w-2/3">
                <h2 className="text-2xl lg:text-4xl font-light text-center md:w-1/2 lg:w-full text-white">
                  BLOCKCHAIN VIRTUAL IP
                </h2>
              </div>
              <div className="flex w-full lg:pl-24 justify-start md:justify-end md:w-2/3 lg:w-full">
                <div className="flex  bg-black text-sm lg:text-base lg:font-normal font-light text-white/80 p-4 py-6 rounded-2xl border max-w-80 lg:min-w-96 border-white/60 ">
                  <p>
                    I am Ms. KOI your virtual mentor from the blockchain world.
                    KOI stands for KO Inflation, dedicated to actively fighting
                    the silent threat of inflation.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex absolute right-0 lg:right-[3rem] xl:right-[-4rem] lg:mt-16 top-[20%] lg:relative h-56 min-w-48 md:h-[25rem] md:min-w-[1x9.8125rem] lg:h-[35rem] lg:min-w-[29.8125rem]">
              {/* <video
                ref={videoRef}
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="/videos/MsKOI Space.gif" type="video/gif" />
                Your browser does not support the video tag.
              </video> */}
              {/* <Image
                src="/MsKOI Space_00000 1.png"
                alt="space"
                fill={true}
                className="object-cover"
              /> */}

              <div className="video-container">
                <video loop muted autoPlay>
                  <source src="/videos/MsKOI Space.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex z-10 flex-col px-4 md:px-24 lg:px-48 pb-8 mt-24 md:mt-0 gap-6 md:gap-12">
        <h2 className="font-bold text-2xl md:text-3xl w-full text-left ">
          OUR GOALS
        </h2>
        <div className="flex flex-col md:flex-row text-white/80 gap-6 md:gap-24">
          <div className="flex relative justify-center items-center p-3 md:pl-6 before:content-[''] md:bg-black before:h-full before:absolute before:w-1 before:bg-custom-gradient before:left-0">
            Empower users to generate personal value and reach a wider audience.
          </div>
          <div className="flex relative justify-center items-center p-3 md:pl-6 before:content-[''] md:bg-black before:h-full before:absolute before:w-1 before:bg-custom-gradient before:left-0">
            Connect users to KOI’s marketplace for income generation through
            sharing creations.
          </div>
          <div className="flex relative justify-center items-center p-3 md:pl-6 before:content-[''] md:bg-black before:h-full before:absolute before:w-1 before:bg-custom-gradient before:left-0">
            Promote participation in projects that create blockchain assets and
            address inflation.
          </div>
        </div>
      </div>

      <div className="flex flex-col my-24 min-h-[300vh] relative w-full after:content-[''] after:absolute after:w-full after:h-72 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        {/* <Image
          src="/pawel-czerwinski-ZkzobNDayXo-unsplash (1) 1.svg"
          alt="Space"
          fill={true}
          className="object-cover"
        /> */}

        {/* Welcome to koi mobilize */}
        <div
          id="welcome"
          className="flex relative md:py-48 gap-12 px-6 z-10 flex-col items-center overflow-hidden h-full"
        >
          <h1 className="text-white text-2xl md:text-3xl mt-20 md:mt-0 font-bold w-full text-left md:text-center">
            WELCOME TO KOI MOBILIZE
          </h1>
          <div className="grid md:w-[80%] grid-cols-1 md:grid-cols-2  gap-4">
            <div className="flex w-full h-[18rem] md:h-full relative">
              <Image
                src="/welcome-to-mobilize-2.png"
                alt="Space"
                // fill={true}
                className="object-cover w-full h-full"
                width={1500}
                height={1500}
              />
            </div>

            <div className="flex col-span-1 w-80 md:w-full h-full py-8 md:px-8 gap-7 flex-col">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Transitioning to Web 3.0</h3>
                <p className=" text-white/60">
                  KOI MOBILIZE guides you from Web 2.0 to Web 3.0, making
                  blockchain accessible and integral to daily life.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">
                  Empowering Your Blockchain Future
                </h3>
                <p className="text-white/60">
                  With KOI Web3SOC and MONOKOILY, we build a vibrant network
                  through social activities and the sharing economy. Shape your
                  future in the blockchain world with us.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Team */}
        <div className="relative">
          <div className="flex  px-4 md:px-0  gap-12 mt-12 z-20 flex-col items-center overflow-hidden">
            <h1 className="text-white text-3xl font-bold w-full text-center">
              CORE TEAM
            </h1>
            <div className="hidden md:flex absolute top-[20%] -right-[30%]">
              <Blob className="h-[40rem] w-[40rem] " />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 relative z-30">
              {teamList.map((team: ITeam, index: number) => (
                <TeamCard key={index} data={team} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Koi Solutions */}
      <div className="flex relative flex-col w-full pb-6 px-6 md:px-0">
        <div className="hidden md:flex absolute top-[20%] -right-[30%]">
          <Blob className="h-[40rem] w-[40rem] " />
        </div>
        <h1 className="text-white text-3xl mb-24 font-bold w-full text-center">
          KOI SOLUTIONS
        </h1>
        <ScrollAnimationWrapper>
          <div className="flex md:flex-row flex-col w-full">
            <div className="flex w-full items-center justify-start md:justify-center">
              <div className="flex relative h-[7.5rem] w-[7.5rem] md:w-72 md:h-72">
                <Image
                  src="/logo_MONOKOILY color + white 1.png"
                  alt="Monokoily"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className={`md:flex hidden transition-colors duration-100 ${className}  w-full h-1 md:h-screen md:w-2.5 rounded-full md:rounded-t-full`}
            ></div>
            <div className="flex w-full items-center justify-center">
              <div className="flex relative flex-col md:w-2/3 gap-12">
                <div className="flex flex-col">
                  <h2 className="text-2xl flex items-center gap-1  md:text-4xl font-molde-bold-italic">
                    <span>LIVE</span>
                    <span className="min-h-1 min-w-3 md:min-h-2 md:min-w-4 -skew-x-[9deg] bg-white"></span>
                    <span>TO</span>
                    <span className="min-h-1 min-w-3 md:min-h-2 md:min-w-4 -skew-x-[9deg] bg-white"></span>
                    <span>EARN</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-gradient font-molde">
                    MONOKOILY
                  </p>
                </div>
                <ul className="list-disc pl-4">
                  <li>Blockchain Version of Classic Monopoly Game</li>
                  <li>Experience Lifes Balance and Challenges</li>
                  <li>
                    Your Educational Tool for Self-Management and Financial
                    Planning
                  </li>
                </ul>
                <Button variant={"outline"} className="py-5">
                  <Link href="/monokoily">Read More</Link>
                </Button>
              </div>
            </div>
            <div
              className={`flex md:hidden my-6 transition-colors duration-100 ${className}  w-full h-1 md:h-screen md:w-2.5 rounded-full md:rounded-t-full`}
            ></div>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <div className="flex md:flex-row-reverse flex-col  w-full">
            <div className="flex w-full items-center justify-start md:justify-center">
              <div className="flex relative h-[7.5rem] w-[7.5rem] md:w-72 md:h-72">
                <Image
                  src="/logo_Web3SOC color + white 1.png"
                  alt="Web3soc"
                  fill={true}
                  className="object-cover"
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
                <ul className="list-disc">
                  <li>Web3 Version of Classic Meta</li>
                  <li className="">
                    Earn Social Income and Acquire More Blockchain Assets
                    through the Solana Ecosystem.
                  </li>
                </ul>
                <Button variant={"outline"} className="py-5">
                  <Link href="/web3soc">Read More</Link>
                </Button>
              </div>
            </div>
            <div
              className={`md:hidden my-6 flex transition-colors duration-500 ${className}  w-full h-1 md:h-screen md:w-2.5 rounded-full md:rounded-none`}
            ></div>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex w-full items-center justify-start md:justify-center">
              <div className="flex relative w-[7.5rem] h-[10rem] md:w-72 md:h-[27.1875rem]">
                {/* <Image
                  src="/videos/KOI Genesis.gif"
                  alt="Koi Genesis"
                  fill={true}
                  className="object-cover"
                /> */}
                <img
                  src="/videos/KOI Genesis.gif"
                  alt="Koi Genesis"
                  className="object-cover"
                  style={{ width: "100%", height: "100%" }} // Adjust size as needed
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
                  <Link href="/genesis-nft">Read More</Link>
                </Button>
              </div>
            </div>
            <div
              className={`md:hidden my-6 flex transition-colors duration-500 ${className} w-full h-1 md:h-screen md:w-2.5 `}
            ></div>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <div className="flex flex-col md:flex-row-reverse w-full">
            <div className="flex w-full items-center justify-start md:justify-center">
              <div className="flex relative h-[7.5rem] w-[7.5rem] md:w-72 md:h-72">
                <Image
                  src="/logo_KOI Token color + white 1.png"
                  alt="Koi Genesis"
                  fill={true}
                  className="object-cover"
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
                  <Link href="/tokenomic">Read More</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
        {/* <div className="hidden md:flex absolute bottom-0 -right-[60%]">
          <Blob />
        </div> */}
      </div>
      <ScrollToTopButton />
    </main>
  );
}
