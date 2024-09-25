import Image from "next/image";
import React from "react";
import { ChevronsRight } from "lucide-react";
import Blob from "@/components/Blob";
import Link from "next/link";
import dynamic from "next/dynamic";

// Import the component dynamically with server-side rendering disabled
const RoadMapScroll = dynamic(() => import("@/components/RoadMapScroll"), {
  ssr: false,
});

const RoadMap = () => {
  return (
    <div className="min-h-screen relative bg-black text-white">
      <div className="flex justify-center pb-24 items-end text-white w-full h-[65vh] relative after:content-[''] after:absolute after:w-full after:h-[25rem] after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
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
          id="2020-oct"
          className="flex w-full md:min-h-[80vh] pt-24 md:justify-start "
        >
          <div className="flex flex-col gap-6">
            <h2 className="font-bold w-fit text-3xl text-gradient">2022 OCT</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">Form Management Team</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Financial Department</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Marketing Department</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Creative Department</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Admin Department</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Education Department</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Blockchain Department</p>
                </div>
                <div className="flex pl-16 gap-4 items-center">
                  <p className="text-white/80">Content Department</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Tech Department</p>
                </div>
                <div className="flex pl-16 gap-4 items-center">
                  <p className="text-white/80">VTuber Department</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2022-dec"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-end"
        >
          <div className="flex flex-col gap-6 md:min-w-[32.125rem] items-start">
            <h2 className="font-bold w-fit text-3xl text-gradient">2022 DEC</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">
                  KOI Platform Planning/Developing stage 1
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">
                    VTuber 3D Model Create- Virtual IP Miss KOI
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Project Trailer</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Website discussion</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Blockchain Department</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80"> Education Department</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Blockchain Department</p>
                </div>
                <div className="flex pl-16 gap-4 items-center">
                  <p className="text-white/80">
                    Content Preparation (Blockchain Tutorial Video)
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Tech Department</p>
                </div>
                <div className="flex pl-16 gap-4 items-center">
                  <p className="text-white/80">VTuber Department</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-4 w-4 rounded-full bg-white"></span>
                  <h3 className="font-bold">Co-Founder Round Funding 1.0</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2023-q1"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-start "
        >
          <div className="flex flex-col gap-6">
            <h2 className="font-bold w-fit text-3xl text-gradient">2023 Q1</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">
                  KOI Platform Planning/Developing Stage 2
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Creative Department</p>
                </div>
                <div className="flex flex-col gap-2 pl-16">
                  <div className="flex pl-16 gap-4 items-center">
                    <p className="text-white/80">Content Video making</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">Website Design</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">PPT Design</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Administration</p>
                </div>
                <div className="flex pl-16 gap-4 items-center">
                  <p className="text-white/80">SOP Setting</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Tech Department</p>
                </div>
                <div className="flex flex-col gap-2 pl-16">
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">Payment Gateway Setting</p>
                  </div>
                  <div className="flex pl-16 gap-4 items-center">
                    <p className="text-white/80">Website / Landing Planning</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Marketing Plan Setting</p>
                </div>
                <div className="flex pl-16 gap-4 items-center">
                  <p className="text-white/80">
                    FB / Discord / TikTok / YTube / 小红书 / Insta acc setting
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Content / Shorts Department</p>
                </div>
                <div className="flex flex-col gap-2 pl-16">
                  <div className="flex pl-16 gap-4 items-center">
                    <p className="text-white/80">
                      Blockchain Courses preparation
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">1000 Shorts Making plan</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">Company Registration</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Bank Acc</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Formal Document</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Employee benefit</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2023-q2"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-end"
        >
          <div className="flex flex-col gap-6 md:min-w-[32.125rem] items-start">
            <h2 className="font-bold w-fit text-3xl text-gradient">2023 Q2</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">Business Launch</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">
                    Web2 Blockchain Tutorial Video
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">
                    Blockchain (Foundational) courses start making
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
                  <p className="text-white/80">Marketing Target Check</p>
                </div>
                <div className="flex flex-col gap-2 pl-16">
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">
                      FB / Discord / TikTok / 小红书 /Insta
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">
                      1000 Shorts Preparation Start
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">
                    Creative / Content / Tech Department
                  </p>
                </div>
                <div className="flex pl-16 gap-4 items-center">
                  <p className="text-white/80">Website</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">Content Video</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">
                    Web2 Blockchain Tutorial Video
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">
                    Blockchain (Foundational) courses start making
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
                  <p className="text-white/80">
                    Preparing Ms KOI Live Streaming
                  </p>
                </div>
                <div className="flex flex-col gap-2 pl-16">
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">
                      Establish VTuber Department (ChatGPT + Microsoft{" "}
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">
                      edge voice reader+3D model+Al filmmaker)
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">Co-Founder Round Funding 2.0</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2023-q3"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-start "
        >
          <div className="flex flex-col gap-6">
            <h2 className="font-bold w-fit text-3xl text-gradient">2023 Q3</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">KOI Mission check</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">
                    Blockchain(Protectional) courses start making
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Content - Website final check</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Social Media daily</p>
                </div>
                <div className="flex flex-col gap-2 pl-16">
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">
                      FB / Discord / TikTok / 小红书 /Insta
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">Seed Round Funding</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2023-q4"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-end"
        >
          <div className="flex flex-col gap-6 md:min-w-[32.125rem] items-start">
            <h2 className="font-bold w-fit text-3xl text-gradient">2023 Q4</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">KOI Mission Check</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Content - Website page</p>
                </div>
                <div className="flex flex-col gap-2 pl-16">
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">Launch</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 md:w-[28rem]">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold break-words">
                  KOI Web3.0 Business Club e-Commerce anchor Merchant connection
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">KOI Red/White Wine (OEM)</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">UKISS hardware wallet</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2024-q1-q4"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-start "
        >
          <div className="flex flex-col gap-6">
            <h2 className="font-bold w-fit text-3xl text-gradient">
              2024 Q1~Q4
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">KOI Web3 Developing</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Blockchain Department</p>
                </div>
                <div className="flex flex-col gap-2 pl-16">
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">Tokenomic</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">
                    dAPP Develop built on SOLANA Chain- NFT
                  </p>
                </div>
                <div className="flex flex-col gap-2 pl-16">
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">
                      Genesis NFT: 1000USD x 1000pcs
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Angel Round Funding</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">
                    KOI Token Private Sales ~ List
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">
                  KOI Mini Game Developing(Aim global market)
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">
                    MONOKOILY game built on TON Chain
                  </p>
                </div>
                <div className="flex flex-col gap-2 pl-16">
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">
                      Live-To-Earn game– built DAU
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">Game boost: 1USD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2025-q1-q4"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-end"
        >
          <div className="flex flex-col gap-6 md:min-w-[32.125rem] items-start">
            <h2 className="font-bold w-fit text-3xl text-gradient">
              2025 Q1~Q4
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">
                  KOI Web3SOC Developing (Monokoily user conversion)
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">
                    Watch-To-Earn Mechanism (Movie Trailer)
                  </p>
                </div>
                <div className="flex flex-col gap-2 pl-16">
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">
                      Stage1- Connect and built more user
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">
                      Stage2- Create more Super IP
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">
                      Stage3- Connect Merchant with Super IP
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">KOI Web3SOC M&A mechanism</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Agency profit management</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">Preparation KOI Metaverse</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Creative Team</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">
                    Form Life Simulation Game Team
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">VC Round Q3</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2026-q1-q4"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-start "
        >
          <div className="flex flex-col gap-6">
            <h2 className="font-bold w-fit text-3xl text-gradient">
              2026 Q1~Q4
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">KOI Metaverse-KOIVerse</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Launch Life Simulation Game</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">Business Develop Dept form</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">Aim Global</p>
                </div>
                <div className="flex flex-col gap-2 pl-16">
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">Licensing for Countries</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <p className="text-white/80">KOI Crypto Cafe Developing</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">
                  Business Department–Involve in Potential Web3 company
                  investment
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">VC Administration SOP</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">
                    Plug Invested company & project to KOIVerse Life Simulation
                    Game
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

        <div
          id="2027-q1-q4"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-end"
        >
          <div className="flex flex-col gap-6 md:min-w-[32.125rem] items-start">
            <h2 className="font-bold w-fit text-3xl text-gradient">
              2027 Q1~Q4
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">KOI Web3.0 Strategy</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <ChevronsRight />
                  <p className="text-white/80">VC Direction</p>
                </div>
                <div className="flex gap-4 items-center pl-16">
                  <p className="text-white/80">Web 3 Project investment</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-white"></span>
                <h3 className="font-bold">IB Round</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2028"
          className="flex w-full md:min-h-[80vh] pt-48 md:justify-start "
        >
          <div className="flex flex-col gap-6">
            <h2 className="font-bold w-fit text-3xl text-gradient">2028</h2>
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
  );
};

export default RoadMap;
