import { ReactNode } from "react";

export interface ITeam {
  image_url: string;
  name: string;
  position: string;
  icons: ReactNode[];
}

export interface IEvent {
  id: number;
  images: string[];
  name: string;
  date: string;
  city: string;
  description: string;
}
