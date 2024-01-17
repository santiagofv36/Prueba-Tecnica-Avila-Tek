import Logo from "./svg/logo";
import FooterList from "./footer-list";
import AppStoreIcon from "./svg/app-store";
import PlayStoreIcon from "./svg/play-store";

const Products = [
  {
    name: "Overview",
  },
  {
    name: "Features",
  },
  {
    name: "Solutions",
    icon: <div>fdgdfhfgh</div>, // TODO: Replace with badge new
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
    <footer className="flex flex-col gap-16">
      <div className="flex justify-between">
        <div className="flex gap-16">
          <FooterList title="Product" items={Products} />
          <FooterList title="Company" items={Companies} />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-t-primary text-sm">Get the app</p>
          <AppStoreIcon />
          <PlayStoreIcon />
        </div>
      </div>
      <div className="flex gap-3 items-center justify-between border-t-2 border-b-secondary pt-5">
        <Logo />
        <p className="text-quatertiary font-normal text-[16px]">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
