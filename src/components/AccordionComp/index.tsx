"use client";
import { Minus, Plus } from "lucide-react";
import React, { ReactNode, useState } from "react";
import FormattedParagraph from "../FormattedParagraph";

export interface FAQ {
  number: number;
  question: string;
  answer: ReactNode;
}
const AccordionComp = ({ number, question, answer }: FAQ) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex flex-col rounded-md border max-w-[40rem]">
      <div
        className={`flex justify-center items-start md:items-center md:min-w-[40rem] ${
          isOpen ? "" : "max-h-[3.5rem] overflow-hidden"
        }`}
      >
        <div className="flex px-4 py-3">0{number}</div>
        <div className="flex w-full">
          <p>{question}</p>
        </div>
        {isOpen ? (
          <div
            onClick={() => setOpen(!isOpen)}
            className="flex cursor-pointer bg-button-gradient rounded-r-md px-4 py-4"
          >
            <Minus color="black" />
          </div>
        ) : (
          <div
            onClick={() => setOpen(!isOpen)}
            className="flex cursor-pointer bg-[#C5C5E8] hover:bg-button-gradient rounded-r-md px-4 py-4"
          >
            <Plus color="black" />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="flex p-6 text-base">
          {/* <FormattedParagraph text={answer} /> */}
          {answer}
        </div>
      )}
    </div>
  );
};

export default AccordionComp;
