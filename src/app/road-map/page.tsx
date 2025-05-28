import Image from "next/image";
import React from "react";
import { ChevronsRight, LucideChevronRight } from "lucide-react";
import Blob from "@/components/Blob";
import dynamic from "next/dynamic";

// Import the component dynamically with server-side rendering disabled
const RoadMapScroll = dynamic(() => import("@/components/RoadMapScroll"), {
  ssr: false,
});

const RoadMap = () => {
  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* <div className="flex justify-center pb-24 items-end text-white w-full h-[65vh] relative after:content-[''] after:absolute after:w-full after:h-[25rem] after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent opacity-50">
        <Image
          src="/image 83.svg"
          alt="Space"
          fill={true}
          className="object-cover"
        /> */}

      <div className="flex justify-center pb-24 items-end text-white w-full h-[60vh] relative after:content-[''] after:absolute after:w-full after:h-[40rem] after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/image 83.svg"
          alt="Space"
          fill={true}
          className="object-cover"
        />

        <h2 className="font-bold text-3xl z-10">ROAD MAP</h2>
      </div>

      <RoadMapScroll />

      <div className="flex flex-col w-full z-20 relative justify-start gap-24 px-6 md:px-48 pt-24 md:pt-0 min-h-screen items-center">
        <div className="hidden md:flex absolute z-10 top-[15%] -right-[30%]">
          <Blob className="h-[40rem] w-[40rem] " />
        </div>
        {/* <div className="hidden md:flex absolute z-10 top-[40%] -left-[30%]">
          <Blob className="h-[40rem] w-[40rem] " />
        </div> */}
        <div className="hidden md:flex absolute z-10 bottom-[20%] -right-[30%]">
          <Blob className="h-[40rem] w-[40rem] " />
        </div>

        <div
          id="2022-q4"
          className="flex w-full md:min-h-[80vh] pt-24 md:justify-start "
        >
          <div className="w-1/2">
            <div className="flex flex-col gap-6">
              <h2 className="font-bold w-fit text-3xl text-gradient">
                2022 Q4
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">Form Management Team</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">Funding</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      Co-Founder Round Funding 1.0
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-white"></span>
                    <h3 className="font-bold">Target</h3>
                  </div>

                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      KOI Platform Planning/Developing stage 1
                    </p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />
                    <p className="text-white/80">
                      VTuber 3D Model Create- Virtual IP Miss KOI
                    </p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />

                    <p className="text-white/80">Website Development</p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />
                    <p className="text-white/80">
                      Content Preparation (Blockchain Tutorial Video)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2023-q1-q4"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-end"
        >
          <div className="w-[65%]">
            <div className="flex flex-col gap-6 md:min-w-[32.125rem] items-start">
              <h2 className="font-bold w-fit text-3xl text-gradient">
                2023 Q1~Q4
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">
                    Company Registration under SDN BHD
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">Funding</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      Co-Founder Round Funding 2.0
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">Seed Round Funding 1.0</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-white"></span>
                    <h3 className="font-bold">Target</h3>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      KOI Platform Planning/Developing Stage 2
                    </p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />
                    <p className="text-white/80">
                      Website Development New Version Updates
                    </p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />
                    <p className="text-white/80">
                      Build Branding and Awareness
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      Information Security Dept Form
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">Virtual IP Miss KOI</p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />
                    <p className="text-white/80">
                      Preparing Ms KOI Live Streaming
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-white"></span>
                    <h3 className="font-bold">Plan</h3>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      KOI Web3.0 Business e-Commerce (B-Commerce)
                    </p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />
                    <p className="text-white/80">
                      Anchor Merchant connection plan
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      Partner with <span className="font-semibold">UKISS</span>{" "}
                      Cold Wallet for the 2025 co-branded KOI Cold Wallet launch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2024-q1-q4"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-start "
        >
          <div className="w-1/2">
            <div className="flex flex-col gap-6">
              <h2 className="font-bold w-fit text-3xl text-gradient">
                2024 Q1~Q4
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">Funding</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">Seed Round Funding 2.0</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">Angel Round Funding 1.0</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-white"></span>
                    <h3 className="font-bold">Target</h3>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      KOI Platform Planning/Developing Stage 3
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pl-16">
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">
                        Website Development New Version Updates
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">
                        Build Branding and Awareness
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">KOI Web3 Developing</p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />
                    <p className="text-white/80">Blockchain Department</p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />
                    <p className="text-white/80">Tokenomic</p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />
                    <p className="text-white/80">
                      dAPP Develop built on SOLANA Chain- NFT
                    </p>
                  </div>
                  <div className="flex pl-32 gap-4 items-center">
                    <p className="text-white/80">
                      Genesis NFT: 1000USD x 500pcs
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-white"></span>
                    <h3 className="font-bold">Plan</h3>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      Web 3.0 Live-To-Earn / Social-Fi Development
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      Aim to build a brand new blockchain base platform and grab
                      the market of digital advertising.
                    </p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />
                    <p className="text-white/80">
                      MONOKOILY Game (Live-To-Earn)
                    </p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />
                    <p className="text-white/80">
                      WebbinHUBS (Social-Fi / Watch-To-Earn)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2025-q1-q4"
          className="flex md:min-h-[80vh] pt-48 md:justify-end w-full"
        >
          <div className="w-[75%]">
            <div className="flex flex-col gap-6 md:min-w-[32.125rem] items-start">
              <h2 className="font-bold w-fit text-3xl text-gradient">
                2025 Q1~Q4
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">Funding</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">Angel Round Funding 2.0</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">VC Round Series A in Q3</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-white"></span>
                    <h3 className="font-bold">Target</h3>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      Web 3.0 Live-To-Earn Developing
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pl-16">
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">
                        MONOKOILY Game 2.0 Version Updates
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">
                        MONOKOILY Game Launch in Q2 2025
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pl-32">
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">
                        MONOKOILY Game Pioneer Tester Round
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">MONOKOI Token</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pl-40">
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">
                        Release on Decentralized Exchange & IEO (Hong Kong)
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">
                        Token usage scenerio: Exchange/Game
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      KOI WebbinHUBS Developing in Q4 2025
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pl-16">
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">
                        Watch-To-Earn Mechanism (Movie HUBs)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pl-32">
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">Major</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pl-40">
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">
                        Stage1- Convert from MONOKOILY, build real user database
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">
                        Stage2- Build Super IP database
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">
                        Stage3- Build variety HUBs merchant database
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pl-32">
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">BITKOI Token</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pl-40">
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">
                        Release on Decentralized Exchange & IEO (Hong Kong)
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">
                        Token usage scenerio: Exchange/ Purchase/ Rewards
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      To build a brand new blockchain base platform and grab the
                      market of digital advertising & IEO launchpad (HK
                      Exchange)
                    </p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />
                    <p className="text-white/80">
                      Bridging merchant from Web2.0 to Web3.0
                    </p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <LucideChevronRight />
                    <p className="text-white/80">
                      Connecting to the vast advertising market channels.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pl-32">
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">Digital Advertisement</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">Blockchain Rewards system</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      Partner with <span className="font-semibold">UKISS</span>{" "}
                      Cold Wallet for the co-branded KOI Cold Wallet launch
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      Establish a Legal Department.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 pl-14">
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80 font-semibold">
                        Contract Review & Compliance
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80 font-semibold">
                        Legal Disputes & Litigation
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80 font-semibold">
                        Intellectual Property Management –{" "}
                        <span className="font-normal">
                          Trademark & Copyrights Registration
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pl-32">
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80 font-semibold">
                        The trademarks in Malaysia for KOI MOBILIZE, WebbinHUBS,
                        and MONOKOILY.
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80 font-semibold">
                        The copyright for Ms KOI.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-white"></span>
                    <h3 className="font-bold">Plan</h3>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      Open an Operation Office in Kuala Lumpur
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      B-Commerce Business Platform (App built & mechanism
                      design)
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">Establish a M&A Department</p>
                  </div>
                  <div className="flex flex-col gap-2 pl-16">
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80 font-semibold">
                        KOI MOBILIZE M&A mechanism
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2026-q1-q4"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-start "
        >
          <div className="w-1/2">
            <div className="flex flex-col gap-6">
              <h2 className="font-bold w-fit text-3xl text-gradient">
                2026 Q1~Q4
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">Funding</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">VC Round Series B in Q3</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">Target</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      MONOKOILY Game 3.0 Version Updates
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pl-16">
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">
                        AR version– Phygital Marketing
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pl-32">
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">
                        Blended Online and Offline
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">KOI WebbinHUBS Launch</p>
                  </div>
                  <div className="flex flex-col gap-2 pl-16">
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">Variety HUBs expanding</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">BITKOI Token</p>
                  </div>
                  <div className="flex flex-col gap-2 pl-16">
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">
                        Release on Decentralized exchange & IEO (Hong Kong)
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">
                        Token usage scenerio: Exchange/B-Commerce
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">KOI dAPP Public Release</p>
                  </div>
                  <div className="flex flex-col gap-2 pl-16">
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">500 NFTs (Own-To-Earn)</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">Plan</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      Preparation KOI Metaverse-KOIVerse
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pl-16">
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">Creative Dept Expansion</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">
                        Form Life Simulation Game Team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2027-q1-q4"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-end"
        >
          <div className="w-[65%]">
            <div className="flex flex-col gap-6 md:min-w-[32.125rem] items-start">
              <h2 className="font-bold w-fit text-3xl text-gradient">
                2027 Q1~Q4
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">Funding</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      VC Round Series C in Q1 2025
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      VC Round Series D in Q3 2025
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">Target</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      Launch KOI Metaverse-KOIVerse in Q4
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 pl-16">
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">Life Simulation Game</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">
                        Metaverse Experiential Marketing
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">Metaverse Ad</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <ChevronsRight />
                    <p className="text-white/80">
                      Business Department–Involve in Potential Web3 company
                      investment
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 pl-16">
                    <div className="flex gap-4 items-center">
                      <LucideChevronRight />
                      <p className="text-white/80">KOI Web3.0 Strategy</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pl-32">
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">Web3 company VC Direction</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">
                        Web3 Project & Company investment
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="text-white/80">
                        Plug in the Invested company & project to KOIVerse
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-white"></span>
                    <h3 className="font-bold">Plan</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-4 items-center">
                      <ChevronsRight />
                      <p className="text-white/80">
                        Open an Operation Office in Singapore
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-white"></span>
                    <h3 className="font-bold">PE Round Q3</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2028"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-start "
        >
          <div className="w-1/2">
            <div className="flex flex-col gap-6">
              <h2 className="font-bold w-fit text-3xl text-gradient">2028</h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">IB Round</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2029"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-end"
        >
          <div className="w-[65%]">
            <div className="flex flex-col gap-6">
              <h2 className="font-bold w-fit text-3xl text-gradient">2029</h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">KOI IPO</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
