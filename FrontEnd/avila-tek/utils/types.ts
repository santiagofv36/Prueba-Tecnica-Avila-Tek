import { StaticImageData } from "next/image";

export type Photo = { src: StaticImageData; alt: string };
export type Integration = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
export type FooterLink = { name: string; icon?: React.ReactNode };

export type CompanyInfo = {
    name: string;
}
