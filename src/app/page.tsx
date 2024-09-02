import Blob from "@/components/Blob";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TeamCard from "@/components/TeamCard";
import { Button } from "@/components/ui/button";
import { ITeam } from "@/interfaces";
import { teamList } from "@/lib/mock";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen relative text-white flex-col items-center justify-between md:px-24 bg-black">
      <div className="flex"></div>
      <Header />
      <div className="flex flex-col w-full items-center pt-24 md:pt-56 gap-12 pointer-events-none">
        <div className="flex relative w-[20rem] h-[12rem] md:w-[56.25rem] md:h-[16.875rem]">
          <Image
            src="/Frame 26086436.png"
            alt="Hero"
            layout="fill" // Make the image fill the parent container
            // objectFit="cover" // Ensure the image covers the container without distortion
          />
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
        <div className="hidden md:flex w-[70%] h-36 relative pointer-events-none">
          <Image
            src="/div.png"
            alt="Partners"
            layout="fill" // Make the image fill the parent container
            objectFit="cover" // Ensure the image covers the container without distortion
            className=""
          />
        </div>
        <div className="flex md:hidden w-full h-36 relative pointer-events-none">
          <Image
            src="/Frame 1000003368.png"
            alt="Partners"
            layout="fill" // Make the image fill the parent container
            objectFit="cover" // Ensure the image covers the container without distortion
            className=""
          />
        </div>
      </div>

      {/* Miss Koi */}
      <div className="flex flex-col">
        <div className="flex flex-col mt-32 md:mt-48 h-[40vh] md:h-[80vh] justify-center items-start relative  w-full after:content-[''] after:absolute after:w-full after:h-72 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
          <Image
            src="/space img 1.png"
            alt="Space"
            layout="fill" // Make the image fill the parent container
            objectFit="cover" // Ensure the image covers the container without distortion
            className=""
          />

          <div className="flex w-full items-center flex-col relative z-10 p-4">
            <h1 className="text-white  md:ml-56 text-3xl w-1/2 md:text-5xl font-bold md:w-64 text-center">
              MEET MISS KOI
            </h1>
            <div className="flex w-full md:gap-24">
              <div className="flex flex-col w-full gap-3 md:gap-8 md:-mt-12">
                <div className="flex relative w-full justify-start md:justify-center">
                  <Image
                    src="/meteorite2 1.png"
                    alt="meteor"
                    height={173}
                    width={170}
                    className="md:scale-100 scale-[0.6]"
                  />
                </div>
                <div className="flex w-full justify-start md:justify-end">
                  <h2 className="text-2xl md:text-4xl text-center w-1/2 text-white">
                    BLOCKCHAIN VIRTUAL IP
                  </h2>
                </div>
                <div className="flex w-full justify-start md:justify-end md:ml-48">
                  <div className="flex bg-black text-sm md:text-base md:font-normal font-light text-white p-4 rounded-lg border w-[70%] md:w-80 border-white ">
                    <p>
                      I am Ms. KOI your virtual mentor from the blockchain
                      world. KOI stands for KO Inflation, dedicated to actively
                      fighting the silent threat of inflation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex absolute  md:relative w-full ml-24 z-19">
                <Image
                  src="/MsKOI Space_00000 1.png"
                  alt="space"
                  height={568}
                  width={477}
                  className=" scale-75 md:scale-100 "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex z-10 flex-col px-4 md:px-48 mt-24 md:mt-0 gap-6">
          <h2 className="font-bold text-2xl md:text-4xl w-full text-left ">
            OUR GOALS
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-24">
            <div className="flex relative justify-center items-center p-3 before:content-[''] md:bg-black before:h-full before:absolute before:w-1 before:bg-custom-gradient before:left-0">
              Empower users to generate personal value and reach a wider
              audience.
            </div>
            <div className="flex relative justify-center items-center p-3 before:content-[''] md:bg-black before:h-full before:absolute before:w-1 before:bg-custom-gradient before:left-0">
              Connect users to KOI’s marketplace for income generation through
              sharing creations.
            </div>
            <div className="flex relative justify-center items-center p-3 before:content-[''] md:bg-black before:h-full before:absolute before:w-1 before:bg-custom-gradient before:left-0">
              Promote participation in projects that create blockchain assets
              and address inflation.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col my-24 min-h-[300vh] relative w-full after:content-[''] after:absolute after:w-full after:h-72 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/pawel-czerwinski-ZkzobNDayXo-unsplash (1) 1.png"
          alt="Space"
          layout="fill" // Make the image fill the parent container
          objectFit="cover" // Ensure the image covers the container without distortion
          className=""
        />

        {/* Welcome to koi mobilize */}
        <div className="flex relative md:py-48 gap-12 px-6 z-10 flex-col items-center overflow-hidden">
          <h1 className="text-white text-2xl md:text-3xl mt-20 md:mt-0 font-bold w-full text-left md:text-center">
            WELCOME TO KOI MOBILIZE
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col w-full gap-4 h-full">
                <div className="flex w-full h-full relative">
                  <Image
                    src="/product-02 1.png"
                    alt="Space"
                    layout="fill"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="flex w-full h-full relative">
                  <Image
                    src="/product-03 1.png"
                    alt="Space"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex w-full h-[17rem] relative">
                <Image
                  src="/product-04 1.png"
                  alt="Space"
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </div>
            </div>
            <div className="flex w-80 h-full py-8 md:px-8 gap-7 flex-col">
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
      <div className="flex relative mt-12 md:mt-48 flex-col w-full">
        <div className="hidden md:flex absolute top-[15%] -right-[60%]">
          <Blob />
        </div>
        <h1 className="text-white text-3xl mb-24 font-bold w-full text-center">
          KOI SOLUTIONS
        </h1>
        <div className="flex md:flex-row flex-col w-full">
          <div className="flex w-full items-center justify-center">
            <div className="flex relative h-[7.5rem] w-[7-5rem] md:w-72 md:h-72">
              <Image
                src="/logo_Web3SOC black 1.png"
                alt="Monokoily"
                layout="fill" // Make the image fill the parent container
                objectFit="cover" // Ensure the image covers the container without distortion
                className=""
              />
            </div>
          </div>
          <div className="flex bg-custom-gradient-reverse w-full h-1 md:h-screen md:w-2.5 rounded-full md:rounded-t-full"></div>
          <div className="flex w-full items-center justify-center">
            <div className="flex relative flex-col w-2/3 gap-12">
              <div className="flex flex-col">
                <h2 className="font-extrabold text-2xl md:text-4xl ">
                  LIVE TO EARN
                </h2>
                <p className="text-xl md:text-2xl bg-clip-text text-transparent bg-button-gradient">
                  MONOKOILY
                </p>
              </div>
              <ul className="list-disc pl-4">
                <li>Experience Life's Balance and Challenges</li>
                <li>
                  Your Educational Tool for Self-Management and Financial
                  Planning
                </li>
              </ul>
              <Button variant={"outline"} className="py-5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row-reverse flex-col  w-full">
          <div className="flex w-full items-center justify-center">
            <div className="flex relative h-[7.5rem] w-[7-5rem] md:w-72 md:h-72">
              <Image
                src="/logo_Web3SOC black 3.png"
                alt="Web3soc"
                layout="fill" // Make the image fill the parent container
                objectFit="cover" // Ensure the image covers the container without distortion
                className=""
              />
            </div>
          </div>
          <div className="flex bg-custom-gradient-reverse w-full h-1 md:h-screen md:w-2.5 rounded-full md:rounded-none"></div>
          <div className="flex w-full items-center justify-center">
            <div className="flex relative flex-col w-2/3 gap-12">
              <div className="flex flex-col">
                <h2 className="font-extrabold text-2xl md:text-4xl ">
                  POWERFUL WEB3 SOCIAL PLATFORM
                </h2>
                <p className="text-xl md:text-2xl bg-clip-text text-transparent bg-button-gradient">
                  WEB3SOC
                </p>
              </div>
              <p className="">
                Earn Social Income and Acquire More Blockchain Assets through
                the Solana Ecosystem.
              </p>
              <Button variant={"outline"} className="py-5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex w-full items-center justify-center">
            <div className="flex relative w-72 h-[27.1875rem]">
              <Image
                src="/KOI Genesis 1.png"
                alt="Koi Genesis"
                layout="fill" // Make the image fill the parent container
                objectFit="cover" // Ensure the image covers the container without distortion
                className=""
              />
            </div>
          </div>
          <div className="flex bg-custom-gradient-reverse w-full h-1 md:h-screen md:w-2.5"></div>
          <div className="flex w-full items-center justify-center">
            <div className="flex relative flex-col w-2/3 gap-12">
              <div className="flex flex-col gap-2">
                <h2 className="font-extrabold text-2xl md:text-4xl ">
                  INVEST SMART EARN BIG
                </h2>
                <p className="text-xl md:text-2xl bg-clip-text text-transparent bg-button-gradient">
                  KOI GENESIS NFT
                </p>
              </div>
              <Button variant={"outline"} className="py-5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse w-full">
          <div className="flex w-full items-center justify-center">
            <div className="flex relative h-[7.5rem] w-[7-5rem] md:w-72 md:h-72">
              <Image
                src="/logo_Web3SOC black 2.png"
                alt="Koi Genesis"
                layout="fill" // Make the image fill the parent container
                objectFit="cover" // Ensure the image covers the container without distortion
                className=""
              />
            </div>
          </div>
          <div className="flex bg-custom-gradient-reverse w-full h-1 md:h-screen md:w-2.5 rounded-b-full"></div>
          <div className="flex w-full items-center justify-center">
            <div className="flex relative flex-col w-2/3 gap-12">
              <div className="flex flex-col gap-2">
                <h2 className="font-extrabold text-2xl md:text-4xl ">
                  EXPERIENCE REVOLUTIONARY FINANCE
                </h2>
                <p className="text-xl md:text-2xl bg-clip-text text-transparent bg-button-gradient">
                  TOKENOMIC ECOSYSTEM
                </p>
              </div>
              <Button variant={"outline"} className="py-5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full relative">
        <div className="hidden md:flex absolute -top-[80%] -right-[60%]">
          <Blob />
        </div>
        <Footer />
      </div>
    </main>
  );
}
