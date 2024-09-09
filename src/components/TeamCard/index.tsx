import { ITeam } from "@/interfaces";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  data: ITeam;
}

const TeamCard = ({ data }: Props) => {
  return (
    <div className="flex rounded-2xl bg-[#898989]/15  flex-col p-3 backdrop-blur-3xl border border-white/10 gap-2 items-center">
      <div className="flex w-full h-36 md:h-48 bg-slate-400 rounded-2xl relative">
        <Image
          src={data.image_url}
          alt="Space"
          fill={true}
          className="object-fit"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-white/80">{data.name}</p>
        <h3 className="font-bold text-white">{data.position}</h3>
      </div>
      <div className="flex gap-3">
        {data.icons.map((icon: ReactNode, index: number) => (
          <div key={index} className="">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
