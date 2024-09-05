import Image from "next/image";
import React from "react";
import Accordion, { FAQ } from "../../components/Accordion";
import { faq } from "../../lib/mock/index";

import { Plus } from "lucide-react";

const FAQ = () => {
  return (
    <div className="min-h-[150vh] relative justify-center items-center px-10 bg-black text-white">
      <div className="flex pt-24 justify-center items-center gap-6 flex-col w-full ">
        <h2 className="font-bold text-2xl">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="flex flex-col gap-3">
          {faq.map((data: FAQ, index: number) => (
            <Accordion {...data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
