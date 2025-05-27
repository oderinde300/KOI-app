import { ITeam } from "@/interfaces";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  data: ITeam;
}

const TeamCard = ({ data }: Props) => {
  return (
    <div className="flex rounded-2xl bg-[#898989]/15  flex-col p-3 backdrop-blur-3xl border border-white/10 gap-2 items-center w-full sm:min-w-[250px] max-w-[250px]">
      <div className="flex w-full h-36 md:h-48 bg-slate-400 rounded-2xl relative">
        <Image
          src={data.image_url}
          alt="Space"
          fill={true}
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-white/80 text-center text-sm md:text-base uppercase">
          {data.name}
        </p>
        <h3 className="font-bold text-center text-sm md:text-base text-white capitalize">
          {data.position}
        </h3>
      </div>
      <div className="flex items-center gap-3">
        {data.social_media.map((item: any, index: number) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            className=""
            key={index}
          >
            <div className="flex h-5 w-5 relative">
              <Image
                src={item.icon}
                alt="icon"
                fill={true}
                className="object-cover"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
