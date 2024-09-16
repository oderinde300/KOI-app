export interface ITeam {
  image_url: string;
  name: string;
  position: string;
  social_media: {
    icon: string;
    link: string;
  }[];
}

export interface IEvent {
  id: number;
  images: string[];
  name: string;
  date: string;
  city: string;
  description: string;
}
