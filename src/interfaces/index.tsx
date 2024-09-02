import { ReactNode } from "react";

export interface ITeam {
  image_url: string;
  name: string;
  position: string;
  icons: ReactNode[];
}
