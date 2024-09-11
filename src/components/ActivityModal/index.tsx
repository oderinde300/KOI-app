import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { formatText } from "@/lib/utils";
import { IEvent } from "@/interfaces";
import { CircleX } from "lucide-react";
import Slider from "../Slider";
import FormattedParagraph from "../FormattedParagraph";

const ActivityModal = ({
  setModal,
  event,
}: {
  setModal: Function;
  event: IEvent;
}) => {
  return (
    <div className="fixed top-0 left-0 flex z-50 h-screen w-full ">
      <div
        onClick={() => setModal()}
        className="flex absolute top-0 right-0 w-full h-full bg-black/60"
      ></div>
      <div className="flex flex-col relative h-[90vh] w-[90%] md:w-1/2 mx-auto my-auto bg-white rounded-2xl p-4">
        <button
          onClick={() => setModal()}
          className="flex absolute cursor-pointer z-40 top-2 right-2 bg-white p-2 rounded-full"
        >
          <CircleX color="black" size={30} />
        </button>
        <div className="flex flex-col overflow-y-scroll rounded-lg">
          <Slider
            className=""
            slides={event.images}
            imageStyle="flex w-full min-h-[60vh]  relative bg-white/60"
          />

          <div className="flex flex-col  gap-2 text-black/80 px-4 pt-2">
            <div className="flex gap-2 items-center">
              <span className="font-bold text-black">TITLE: </span>
              <p>{event.name}</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="font-bold text-black">DATE: </span>
              <p>{event.date}</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="font-bold text-black">CITY: </span>
              <p>{event.city}</p>
            </div>
          </div>
          <div className="flex border-b text-black/80 px-4 py-2 border-b-white/10">
            <FormattedParagraph text={event.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;
