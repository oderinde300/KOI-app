"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RoadMapScroll = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 410]); // Adjust the [0, 300] range as needed
  const [activeId, setActiveId] = useState<string | null>(null);
  const [click, setClick] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    console.log("hello");
    console.log(pathname);
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      setActiveId(hash);
    };

    handleHashChange();

    window.addEventListener("hashchange", () => {
      console.log("entered");
      handleHashChange();
    });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="hidden md:flex gap-4 min-h-[50vh] rounded-xl p-4 fixed right-24 top-[50%] -translate-y-[40%] z-50 bg-white/20 backdrop-blur-sm w-[8rem]">
      <div className="flex min-h-[50vh] w-0.5 bg-white/40">
        <div className="flex w-full h-full relative">
          <motion.div
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            className="relative bg-custom-gradient-reverse w-full h-full top-0 right-0"
          ></motion.div>
          <motion.div
            style={{
              translateY, // Translate on the Y-axis based on scroll progress
              translateX: "-50%",
            }}
            className="absolute w-2.5 h-2.5 bg-custom-gradient-reverse left-[50%] -translate-x-[50%] top-0 rounded-full blur-[1px]"
          />
        </div>
      </div>
      <div className="flex text-white/70 flex-col gap-5">
        {/* <Link href="#2020-oct">
          <p
            onClick={() => setClick(!click)}
            className={`text-sm cursor-pointer 
            ${
              activeId === "2020-oct"
                ? "text-[#A759FF] font-bold"
                : "text-white/70"
            }`}
          >
            2020 Oct
          </p>
        </Link> */}
        <Link href="#2022-q4">
          <p
            onClick={() => setClick(!click)}
            className={`text-sm cursor-pointer 
            ${
              activeId === "2022-q4"
                ? "text-[#A759FF] font-bold"
                : "text-white/70"
            }`}
          >
            2022 Q4
          </p>
        </Link>
        <Link href="#2023-q1-q4">
          <p
            onClick={() => setClick(!click)}
            className={`text-sm cursor-pointer 
            ${
              activeId === "2023-q1-q4"
                ? "text-[#A759FF] font-bold"
                : "text-white/70"
            }`}
          >
            2023 Q1~Q4
          </p>
        </Link>
        <Link href="#2024-q1-q4">
          <p
            onClick={() => setClick(!click)}
            className={`text-sm cursor-pointer 
            ${
              activeId === "2024-q1-q4"
                ? "text-[#A759FF] font-bold"
                : "text-white/70"
            }`}
          >
            2024 Q1~Q4
          </p>
        </Link>
        <Link href="#2025-q1-q4">
          <p
            onClick={() => setClick(!click)}
            className={`text-sm cursor-pointer 
            ${
              activeId === "2025-q1-q4"
                ? "text-[#A759FF] font-bold"
                : "text-white/70"
            }`}
          >
            2025 Q1~Q4
          </p>
        </Link>
        <Link href="#2026-q1-q4">
          <p
            onClick={() => setClick(!click)}
            className={`text-sm cursor-pointer 
            ${
              activeId === "2026-q1-q4"
                ? "text-[#A759FF] font-bold"
                : "text-white/70"
            }`}
          >
            2026 Q1~Q4
          </p>
        </Link>
        <Link href="#2027-q1-q4">
          <p
            onClick={() => setClick(!click)}
            className={`text-sm cursor-pointer 
            ${
              activeId === "2027-q1-q4"
                ? "text-[#A759FF] font-bold"
                : "text-white/70"
            }`}
          >
            2027 Q1~Q4
          </p>
        </Link>
        <Link href="#2028">
          <p
            onClick={() => setClick(!click)}
            className={`text-sm cursor-pointer 
            ${
              activeId === "2028" ? "text-[#A759FF] font-bold" : "text-white/70"
            }`}
          >
            2028
          </p>
        </Link>
        <Link href="#2029">
          <p
            onClick={() => setClick(!click)}
            className={`text-sm cursor-pointer 
            ${
              activeId === "2029" ? "text-[#A759FF] font-bold" : "text-white/70"
            }`}
          >
            2029
          </p>
        </Link>
      </div>
    </div>
  );
};

export default RoadMapScroll;
