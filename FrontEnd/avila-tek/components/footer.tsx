import Logo from "./svg/logo";
import FooterList from "./footer-list";
import AppStoreIcon from "./svg/app-store";
import PlayStoreIcon from "./svg/play-store";
import Badge from "./badge";

const Products = [
  {
    name: "Overview",
  },
  {
    name: "Features",
  },
  {
    name: "Solutions",
    icon: <Badge text="New" className="text-xs w-[50px]"/>, // TODO: Replace with badge new
  },
  {
    name: "Tutorials",
  },
  {
    name: "Pricing",
  },
  {
    name: "Releases",
  },
];

const Companies = [
  { name: "About us" },
  { name: "Careers" },
  { name: "Press" },
  { name: "News" },
  { name: "Media Kit" },
  { name: "Contact" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col gap-16 mt-10 mb-3 xl:px-0 lg:px-0 md:px-0 px-5">
      <div className="flex xl:justify-between lg:justify-between md:justify-between justify-start items-start flex-col-reverse md:flex-row">
        <div className="flex gap-16">
          <FooterList title="Product" items={Products} />
          <FooterList title="Company" items={Companies} />
        </div>
        <div className="flex flex-col gap-3 mb-10 md:mb-0">
          <p className="text-t-primary text-sm">Get the app</p>
          <div className="flex md:flex-col gap-3">
            <AppStoreIcon />
            <PlayStoreIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-3 md:items-center md:justify-between border-t-2 border-b-secondary pt-5 pb-5">
        <Logo />
        <p className="text-quatertiary font-normal text-[16px]">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
