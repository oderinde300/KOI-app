"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Blob from "../Blob";
import { IEvent } from "@/interfaces";
import { formatText } from "@/lib/utils";

const ActivityCard = ({
  showModal,
  event,
}: {
  showModal: (event: IEvent) => void;
  event: IEvent;
}) => {
  return (
    <div className="border relative rounded-sm border-white/10 bg-white/30">
      <div className="flex relative w-full h-48">
        <Image
          src={event.images[0]}
          alt="Space"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex absolute bottom-16 left-[50%] -translate-x-[50%]">
        <Blob className="w-[5rem] bg-[#FFA515]/40 blur-[3rem]   h-[5rem]" />
      </div>
      <div className="flex flex-col z-20">
        <div className="flex flex-col  gap-2 text-white/80 px-4 pt-2">
          <div className="flex gap-2 items-center">
            <span className="font-bold text-white">TITLE: </span>
            <p>{event.name}</p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-bold text-white">DATE: </span>
            <p>{event.date}</p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-bold text-white">CITY: </span>
            <p>{event.city}</p>
          </div>
        </div>
        <div className="flex border-b text-white/80 px-4 py-2 border-b-white/10">
          <p className="">{formatText(event.description)}</p>
        </div>
        <div className="flex w-full px-4 py-3">
          <Button onClick={() => showModal(event)} className="w-full">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
