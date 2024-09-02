import Header from "@/components/Header";
import TeamCard from "@/components/TeamCard";
import { Button } from "@/components/ui/button";
import { ITeam } from "@/interfaces";
import { teamList } from "@/lib/mock";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen h-dvh text-white flex-col items-center justify-between pt-0 p-24 bg-black">
      <div className="flex"></div>
      <Header />
      <div className="flex flex-col items-center pt-56 gap-12">
        <Image
          src="/Frame 26086436.png"
          alt="Hero"
          width={900}
          height={270}
          priority
        />
        <Button className="text-white py-6">Explore More</Button>
      </div>
      <div className="flex py-24 gap-28">
        <div className="flex flex-col gap-2 text-white items-center">
          <h2 className="text-2xl font-bold ">1200+</h2>
          <p className="">Monokolly Users</p>
          <div className="flex w-44 h-1 mt-3 bg-button-gradient"></div>
        </div>
        <div className="flex flex-col gap-2 text-white items-center">
          <h2 className="text-2xl font-bold ">1200+</h2>
          <p className="">Monokolly Users</p>
          <div className="flex w-44 h-1 mt-3 bg-button-gradient"></div>
        </div>
      </div>

      {/* Our Partners */}
      <div className="flex flex-col w-full my-4 mb-24 items-center gap-6">
        <h2 className="font-bold text-2xl text-center text-white">
          OUR PARTNERS
        </h2>
        <div className="flex w-[70%] h-36 bg-slate-400"></div>
      </div>

      {/* Miss Koi */}
      <div className="flex flex-col my-48 h-screen justify-center items-start relative  w-full after:content-[''] after:absolute after:w-full after:h-72 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/space img 1.png"
          alt="Space"
          layout="fill" // Make the image fill the parent container
          objectFit="cover" // Ensure the image covers the container without distortion
          className=""
        />

        <div className="flex w-full items-center flex-col relative z-10 p-4 pt-96">
          <h1 className="text-white  ml-56 text-5xl font-bold w-64 text-center">
            MEET MISS KOI
          </h1>
          <div className="flex w-full gap-24">
            <div className="flex flex-col w-full gap-8 -mt-12">
              <div className="flex relative w-full justify-center">
                <Image
                  src="/meteorite2 1.png"
                  alt="meteor"
                  height={173}
                  width={170}
                  className=""
                />
              </div>
              <div className="flex w-full justify-end">
                <h2 className=" text-4xl text-center w-1/2 text-white">
                  BLOCKCHAIN VIRTUAL IP
                </h2>
              </div>
              <div className="flex w-full justify-end ml-48">
                <div className="flex bg-black text-white p-4 rounded-lg border w-80 border-white ">
                  <p>
                    I am Ms. KOI your virtual mentor from the blockchain world.
                    KOI stands for KO Inflation, dedicated to actively fighting
                    the silent threat of inflation.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  relative w-full ml-24 z-19">
              <Image
                src="/MsKOI Space_00000 1.png"
                alt="space"
                height={568}
                width={477}
                className=""
              />
            </div>
          </div>
        </div>
        <div className="flex z-10 mt-12 mb-24 flex-col px-48 gap-6">
          <h2 className="font-bold text-4xl w-full text-left ">OUR GOALS</h2>
          <div className="flex gap-24">
            <div className="flex bg-custom-gradient pl-1">
              <div className="flex bg-black p-3">
                Empower users to generate personal value and reach a wider
                audience.
              </div>
            </div>
            <div className="flex bg-custom-gradient pl-1">
              <div className="flex bg-black p-3">
                Connect users to KOI’s marketplace for income generation through
                sharing creations.
              </div>
            </div>
            <div className="flex bg-custom-gradient pl-1">
              <div className="flex bg-black p-3">
                Promote participation in projects that create blockchain assets
                and address inflation.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col my-24 h-[300vh]  relative  w-full after:content-[''] after:absolute after:w-full after:h-72 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/pawel-czerwinski-ZkzobNDayXo-unsplash (1) 1.png"
          alt="Space"
          layout="fill" // Make the image fill the parent container
          objectFit="cover" // Ensure the image covers the container without distortion
          className=""
        />

        {/* Welcome to koi mobilize */}
        <div className="flex relative py-48 gap-12 z-10 flex-col items-center">
          <h1 className="text-white text-3xl font-bold w-full text-center">
            WELCOME TO KOI MOBILIZE
          </h1>
          <div className="grid grid-cols-3 gap-4">
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
            <div className="flex w-full h-[27.625rem] relative">
              <Image
                src="/product-04 1.png"
                alt="Space"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="flex w-80 h-full py-8 px-8 gap-7 flex-col">
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
        <div className="flex relative  gap-12 mt-12 z-10 flex-col items-center ">
          <h1 className="text-white text-3xl font-bold w-full text-center">
            CORE TEAM
          </h1>
          <div className="grid grid-cols-3 gap-3">
            {teamList.map((team: ITeam, index: number) => (
              <TeamCard key={index} data={team} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col h-[300vh] w-full">
        <h1 className="text-white text-3xl mb-24 font-bold w-full text-center">
          KOI SOLUTIONS
        </h1>
        <div className="flex w-full">
          <div className="flex w-full items-center justify-center">
            <div className="flex relative w-72 h-72">
              <Image
                src="/logo_Web3SOC black 1.png"
                alt="Monokoily"
                layout="fill" // Make the image fill the parent container
                objectFit="cover" // Ensure the image covers the container without distortion
                className=""
              />
            </div>
          </div>
          <div className="flex bg-custom-gradient-reverse h-screen w-2.5 rounded-t-full"></div>
          <div className="flex w-full items-center justify-center">
            <div className="flex relative flex-col w-2/3 gap-12">
              <div className="flex flex-col">
                <h2 className="font-extrabold text-4xl ">LIVE TO EARN</h2>
                <p className="text-2xl bg-clip-text text-transparent bg-button-gradient">
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
        <div className="flex flex-row-reverse w-full">
          <div className="flex w-full items-center justify-center">
            <div className="flex relative w-72 h-72">
              <Image
                src="/logo_Web3SOC black 3.png"
                alt="Web3soc"
                layout="fill" // Make the image fill the parent container
                objectFit="cover" // Ensure the image covers the container without distortion
                className=""
              />
            </div>
          </div>
          <div className="flex bg-custom-gradient-reverse h-screen w-2.5"></div>
          <div className="flex w-full items-center justify-center">
            <div className="flex relative flex-col w-2/3 gap-12">
              <div className="flex flex-col">
                <h2 className="font-extrabold text-4xl ">
                  POWERFUL WEB3 SOCIAL PLATFORM
                </h2>
                <p className="text-2xl bg-clip-text text-transparent bg-button-gradient">
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
        <div className="flex w-full">
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
          <div className="flex bg-custom-gradient-reverse h-screen w-2.5 rounded-b-full"></div>
          <div className="flex w-full items-center justify-center">
            <div className="flex relative flex-col w-2/3 gap-12">
              <div className="flex flex-col gap-2">
                <h2 className="font-extrabold text-4xl ">
                  INVEST SMART EARN BIG
                </h2>
                <p className="text-2xl bg-clip-text text-transparent bg-button-gradient">
                  KOI GENESIS NFT
                </p>
              </div>
              <Button variant={"outline"} className="py-5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full">
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
          <div className="flex bg-custom-gradient-reverse h-screen w-2.5 rounded-b-full"></div>
          <div className="flex w-full items-center justify-center">
            <div className="flex relative flex-col w-2/3 gap-12">
              <div className="flex flex-col gap-2">
                <h2 className="font-extrabold text-4xl ">
                  INVEST SMART EARN BIG
                </h2>
                <p className="text-2xl bg-clip-text text-transparent bg-button-gradient">
                  KOI GENESIS NFT
                </p>
              </div>
              <Button variant={"outline"} className="py-5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
