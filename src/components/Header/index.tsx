import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex bg-black py-2 w-full px-24 z-40 fixed justify-between items-center">
      <div className="flex text-white w-2/5">
        <Image
          src="/logo_KOI color+white (H) 1.png"
          alt="Koi Logo"
          className="dark:invert"
          width={200}
          height={68}
          priority
        />
      </div>
      <div className="flex w-3/5">
        <ul className="flex w-full justify-between">
          <li className="text-white/80">
            <Link href="#">INTRO</Link>
          </li>
          <li className="text-white/80">
            <Link href="#">KOI SOLUTIONS</Link>
          </li>
          <li className="text-white/80">
            <Link href="#">ROADMAP</Link>
          </li>
          <li className="text-white/80">
            <Link href="#">ACTIVITY</Link>
          </li>
          <li className="text-white/80">
            <Link href="#">FAQs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
