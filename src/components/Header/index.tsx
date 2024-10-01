"use client";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenSM, setOpenSM] = useState(false);
  const [isMenu, setMenu] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const subNavIsActive = () => {
    let active = false;
    if (pathname === "/monokoily") active = true;
    if (pathname === "/web3soc") active = true;
    if (pathname === "/genesis-nft") active = true;
    if (pathname === "/tokenomic") active = true;
    return active;
  };

  console.log(pathname, isActive("/"));

  return (
    <div className="flex  bg-black py-2 w-full px-4 md:px-40 z-40 fixed justify-between border-b border-b-white/30 md:border-none items-center">
      <div className="flex text-white w-1/2">
        <Link href="/">
          <div className="flex w-32 h-12 md:w-56 md:h-20 relative">
            <Image
              src="/logo_KOI color+white (H) 1.png"
              alt="Koi Logo"
              fill={true}
              className="object-cover"
            />
          </div>
        </Link>
      </div>
      <div className="flex md:hidden text-white">
        <div onClick={() => setMenu(true)} className="flex">
          <Menu />
        </div>
        {isMenu && (
          <div className="flex absolute bg-black right-0 z-50 flex-col h-screen w-[80%] pl-6">
            <div className="flex justify-between text-white w-full">
              <Link href="/">
                <div className="flex w-32 h-12 md:w-48 md:h-16 relative">
                  <Image
                    src="/logo_KOI color+white (H) 1.png"
                    alt="Koi Logo"
                    fill={true}
                    className="object-cover"
                  />
                </div>
              </Link>
              <div
                onClick={() => setMenu(false)}
                className="flex item-center pr-4"
              >
                <X />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <ul className="flex  flex-col w-full justify-between">
                <li
                  className={`${
                    isActive("/") ? "text-white font-bold" : "text-white/80"
                  } py-3`}
                >
                  <Link onClick={() => setMenu(false)} href="/">
                    INTRO
                  </Link>
                </li>
                <li
                  className={`
                  ${
                    subNavIsActive() ? "text-white font-bold" : "text-white/80"
                  } py-3 relative"`}
                >
                  <Link
                    onClick={() => setOpenSM(!isOpenSM)}
                    className="flex gap-2"
                    href="#"
                  >
                    <span>KOI SOLUTIONS</span>
                    {isOpenSM ? <ChevronDown /> : <ChevronRight />}
                  </Link>
                  {isOpenSM && (
                    <div className="flex flex-col w-full bg-black">
                      <Link
                        onClick={() => setMenu(false)}
                        href="/monokoily"
                        className={`${
                          isActive("/monokoily")
                            ? "text-white font-bold"
                            : "text-white/80"
                        } py-2 w-full px-2`}
                      >
                        Monokoily
                      </Link>
                      <Link
                        onClick={() => setMenu(false)}
                        href="/web3soc"
                        className={`${
                          isActive("/web3soc")
                            ? "text-white font-bold"
                            : "text-white/80"
                        } py-2 w-full px-2`}
                      >
                        Web3SOC
                      </Link>
                      <Link
                        onClick={() => setMenu(false)}
                        href="/genesis-nft"
                        className={`${
                          isActive("/genesis-nft")
                            ? "text-white font-bold"
                            : "text-white/80"
                        } py-2 w-full px-2`}
                      >
                        Genesis NFT
                      </Link>
                      <Link
                        onClick={() => setMenu(false)}
                        href="/tokenomic"
                        className={`${
                          isActive("/tokenomic")
                            ? "text-white font-bold"
                            : "text-white/80"
                        } py-2 w-full px-2`}
                      >
                        Tokenomic
                      </Link>
                    </div>
                  )}
                </li>
                <li
                  className={`${
                    isActive("/road-map")
                      ? "text-white font-bold"
                      : "text-white/80"
                  } py-3`}
                >
                  <Link onClick={() => setMenu(false)} href="/road-map">
                    ROADMAP
                  </Link>
                </li>
                <li
                  className={`${
                    isActive("/activity")
                      ? "text-white font-bold"
                      : "text-white/80"
                  } py-3`}
                >
                  <Link onClick={() => setMenu(false)} href="/activity">
                    ACTIVITY
                  </Link>
                </li>
                <li
                  className={`${
                    isActive("/faq") ? "text-white font-bold" : "text-white/80"
                  } py-3`}
                >
                  <Link onClick={() => setMenu(false)} href="/faq">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex w-3/5">
        <ul className="flex w-full justify-between">
          <li
            className={`${
              isActive("/") ? "text-white font-bold underline" : "text-white/80"
            }`}
          >
            <Link onClick={() => setMenu(false)} href="/">
              INTRO
            </Link>
          </li>

          <li className="text-white/80 relative group">
            <Link
              // onClick={() => setOpen(!isOpen)}

              className={`
            ${
              subNavIsActive()
                ? "text-white font-bold underline"
                : "text-white/80"
            } flex gap-2"`}
              href="#"
            >
              <span>KOI SOLUTIONS</span>
              {isOpen ? <ChevronDown /> : <ChevronRight />}
            </Link>

            <div className="absolute top-[1rem] bg-transparent">
              <div className="flex-col w-full bg-black hidden group-hover:flex mt-[1rem]">
                <Link
                  // onClick={() => setOpen(false)}
                  href="/monokoily"
                  className={`${
                    isActive("/monokoily")
                      ? "text-white font-bold"
                      : "text-white/80"
                  } py-2 w-full px-2`}
                >
                  Monokoily
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  href="/web3soc"
                  className={`${
                    isActive("/web3soc")
                      ? "text-white font-bold"
                      : "text-white/80"
                  } py-2 w-full px-2`}
                >
                  Web3SOC
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  href="/genesis-nft"
                  className={`${
                    isActive("/genesis-nft")
                      ? "text-white font-bold"
                      : "text-white/80"
                  } py-2 w-full px-2`}
                >
                  Genesis NFT
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  href="/tokenomic"
                  className={`${
                    isActive("/tokenomic")
                      ? "text-white font-bold"
                      : "text-white/80"
                  } py-2 w-full px-2`}
                >
                  Tokenomic
                </Link>
              </div>
            </div>
          </li>
          <li
            className={`${
              isActive("/road-map")
                ? "text-white font-bold underline"
                : "text-white/80"
            }`}
          >
            <Link href="/road-map">ROADMAP</Link>
          </li>
          <li
            className={`${
              isActive("/activity")
                ? "text-white font-bold underline"
                : "text-white/80"
            }`}
          >
            <Link href="/activity">ACTIVITY</Link>
          </li>
          <li
            className={`${
              isActive("/faq")
                ? "text-white font-bold underline"
                : "text-white/80"
            }`}
          >
            <Link href="/faq">FAQs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
