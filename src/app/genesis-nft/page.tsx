import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const GenesisNFT = () => {
  return (
    <div className="min-h-screen relative bg-black text-white">
      <div className="flex  justify-center items-center text-white w-full h-full min-h-screen relative after:content-[''] after:absolute after:w-full after:h-24 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <div className="flex justify-center pt-24 md:pt-0 items-center gap-12  px-6 md:px-48 flex-col-reverse md:flex-row z-10">
          <div className="flex relative items-center md:items-start flex-col md:w-2/3 gap-6 md:gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <h2 className="font-molde-bold-italic text-center md:text-left text-2xl md:text-4xl md:w-1/2 ">
                INVEST SMART EARN BIG
              </h2>
              <p className="text-lg font-molde w-fit text-center md:text-left md:text-2xl text-gradient">
                KOI GENESIS NFT
              </p>
            </div>
            <p className="text-sm md:text-base text-center md:text-left text-white/80 md:w-2/3">
              Join the KOI community and benefit from our collaboration with
              SOLANA TAB, utilizing Phantom for seamless NFT purchases and
              receiving dividends that grow with your investment.
            </p>
            <div className="flex gap-4">
              <Button className="py-5 w-32 md:w-48">
                <Link href="#get-started">Get Started</Link>
              </Button>
              <Button variant={"outline"} className="py-5 w-32 md:w-48">
                Whitepaper
              </Button>
            </div>
          </div>
          <div className="flex relative w-[15.5rem] h-[20.15rem] md:w-64 md:h-[31.5rem]">
            <Image
              src="/KOI Genesis 2.svg"
              alt="Monokoily"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[400vh] text-white relative after:content-[''] after:absolute after:w-full after:h-72 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent before:content-[''] before:absolute before:w-full before:h-72 before:top-0 before:bg-gradient-to-b before:from-black before:to-transparent before:z-10">
        <Image
          src="/image 85.svg"
          alt="Space"
          fill={true}
          className="object-cover"
        />
        <div
          id="get-started"
          className="flex z-20 flex-col min-h-screen py-24 items-center gap-6 px-6 md:px-24"
        >
          <h2 className="font-bold text-xl md:text-3xl pt-6 text-gradient">
            What is the KOI NFT Project?
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex rounded-xl flex-col gap-4 p-4 justify-between w-full items-center ">
              <div className="md:h-[9.375rem] h-[4.375rem] md:w-[9.375rem] w-[4.375rem] relative">
                <Image
                  src="/1 201.svg"
                  alt="Space"
                  fill={true}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 h-full">
                <h2 className="text-xl font-bold">Foundation & Partnerships</h2>
                <ul className="list-disc pl-4 text-white/60 ">
                  <li>
                    Built on SOLANA Blockchain: Ensures robustness and speed.
                  </li>
                  <li>
                    Strategic Partnerships: Collaborating with SOLANA TAB and
                    Phantom for seamless NFT transactions and enhanced
                    functionality.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex rounded-xl flex-col gap-4 p-4 justify-between w-full items-center">
              <div className=" md:h-[9.375rem] h-[4.375rem] md:w-[9.375rem] w-[4.375rem] relative">
                <Image
                  src="/2 29.svg"
                  alt="Space"
                  fill={true}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col h-full">
                <h2 className="text-xl font-bold">Benefits for NFT Holders</h2>
                <ul className="list-disc pl-4 text-white/60">
                  <li>
                    Dividend Properties: Monthly dividends increase both the
                    value of NFTs and potential earnings.
                  </li>
                  <li>
                    Token Airdrops: All NFT holders receive KOI tokens issued on
                    the SOL chain.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex rounded-xl flex-col gap-4 p-4 justify-between w-full items-center">
              <div className="md:h-[9.375rem] h-[4.375rem] md:w-[9.375rem] w-[4.375rem] relative">
                <Image
                  src="/3 1.svg"
                  alt="Space"
                  fill={true}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col h-full">
                <h2 className="text-xl font-bold">Token Utility and Goals</h2>
                <ul className="list-disc pl-4 text-white/60">
                  <li>
                    Token Usage: Used for top-up fees, with more transactions
                    accelerating token burn and boosting value.
                  </li>
                  <li>
                    Future Aspirations: Aim to list KOI tokens on various CEXs
                    to drive exponential growth in value.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex z-20 flex-col min-h-screen justify-center md:py-24 items-center gap-6 px-6 md:px-24 ">
          <div className="flex flex-col gap-6 md:w-3/5 justify-center items-center">
            <h2 className="font-bold md:w-3/5 text-center md:text-3xl text-gradient">
              What Does the Genesis NFT Collection Offer?
            </h2>
            <p className="text-center">
              The Genesis NFT collection offers only 1000 exclusive pieces, each
              priced at $1000, providing holders with not just unique digital
              art but also financial perks such as KOI tokens, a Crypto Debit
              Mastercard, and a share of Web3SOC&#39;s monthly profits,
              highlighting its unique value and potential.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row z-20 md:mb-60 p-6 md:px-64">
          <div className="flex relative w-full">
            <Image
              src="/debit-06 1.svg"
              alt="Space"
              width={564}
              height={300}
              className=""
            />
          </div>
          <div className="flex flex-col gap-12 md:gap-2 w-full">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">
                Exclusive Benefits for the First 100 Genesis NFT Holders
              </h2>
              <p className="text-white/60">
                The first 100 Genesis NFT holders receive generous benefits
                including 400,000 KOI Tokens for future gains, a Crypto Debit
                Mastercard for financial flexibility, and a consistent revenue
                stream from 5% of Web3SOC&#39;s total monthly top-up amount.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">
                Standard Benefits for the Remaining 900 Genesis NFT Holders
              </h2>
              <ul className="list-disc pl-4 text-white/60 ">
                <li>
                  100,000 KOI Tokens: Enhances each holder&#39;s investment
                  portfolio.
                </li>
                <li>
                  Crypto Debit Mastercard: Facilitates seamless financial
                  transactions across platforms.
                </li>
                <li>
                  5% Monthly Profit Share: Boosts ongoing financial growth with
                  a share from Web3SOC&#39;s revenue.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full z-20 justify-center px-8 pt-24 h-screen items-center">
          <div className="flex flex-col border p-8 max-w-lg bg-[#010024] gap-6 border-white/60 rounded-tr-[5rem] rounded-bl-[5rem]">
            <h2 className="font-bold md:text-3xl text-gradient">
              Join the KOI NFT Revolution
            </h2>
            <div className="flex flex-col gap-2 h-full">
              <h2 className="text-lg font-bold">
                Step-by-Step Guide to Purchasing KOI NFTs
              </h2>
              <ul className="list-disc pl-6 text-white/60 ">
                <li>Purchase: Buy your KOI NFT on the designated platform.</li>
                <li>
                  Verification: Email us at invest@koinflation.com with a
                  screenshot of purchase confirmation (NFT ID)
                </li>
                <li>
                  <ul>
                    <li>Hash number</li>
                    <li>Name</li>
                    <li>Phone number</li>
                    <li>Email</li>
                  </ul>
                </li>
                <li>
                  KYC Verification: Once we receive your email, we&#39;ll begin
                  the KYC process to confirm your identity.
                </li>
              </ul>
            </div>
            <div className="flex w-full justify-center">
              <Button>
                <a
                  href="https://dapp.koinflation.io/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get One Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenesisNFT;
