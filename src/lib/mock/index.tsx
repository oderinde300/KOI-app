import { ITeam } from "@/interfaces";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const teamList: ITeam[] = [
  {
    name: "Co Siau",
    image_url: "/team_co siau 1.png",
    position: "FOUNDER/DIRECTOR",
    icons: [
      <Linkedin key={1} size={"1.5rem"} />,
      <Twitter key={1} size={"1.5rem"} />,
    ],
  },
  {
    name: "Bryan Lim",
    image_url: "/team_bryan 1.png",
    position: "CREATIVE DIRECTOR",
    icons: [<Facebook key={1} size={"1.5rem"} />],
  },
  {
    name: "Chin Jia Huei",
    image_url: "/team_jia huei 1.png",
    position: "ADMIN DIRECTOR",
    icons: [<Linkedin key={1} size={"1.5rem"} />],
  },
  {
    name: "Jay Coh",
    image_url: "/team_jay 1.png",
    position: "WEB3 ADVISOR",
    icons: [
      <Linkedin key={1} size={"1.5rem"} />,
      <Twitter key={1} size={"1.5rem"} />,
    ],
  },
  {
    name: "Gary Wong",
    image_url: "/team_gary 1.png",
    position: "BLOCKCHAIN ADVISOR",
    icons: [<Twitter key={1} size={"1.5rem"} />],
  },
  {
    name: "Ben Kok",
    image_url: "/team_ben kok 1.png",
    position: "TECH ADVISOR",
    icons: [<Linkedin key={1} size={"1.5rem"} />],
  },
  {
    name: "Sharon Yong",
    image_url: "/team_sharon 1.png",
    position: "CISO",
    icons: [<Linkedin key={1} size={"1.5rem"} />],
  },
  {
    name: "Wilson Wong",
    image_url: "/team_wilson 1.png",
    position: "CTO",
    icons: [<Linkedin key={1} size={"1.5rem"} />],
  },
  {
    name: "Tan Yu Ning",
    image_url: "/team_yuning 1.png",
    position: "Design Manager",
    icons: [
      <Linkedin key={1} size={"1.5rem"} />,
      <Twitter key={1} size={"1.5rem"} />,
    ],
  },
];
