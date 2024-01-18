"use client";
import Badge from "@/components/badge";
import GASCard from "@/components/cards/gas-card";
import ListCard from "@/components/cards/list-card";
import Button from "@/components/inputs/button";
import giveUs from "@/assets/give-us.png";
import Share from "@/components/svg/share";
import Light from "@/components/svg/light";
import Manage from "@/components/svg/manage";

// Lista de features para ser renderizadas de manera que no se repita cada una de las tarjetas

const Features = [
  {
    title: "Share team imboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: <Share />,
  },
  {
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icon: <Light />,
  },
  {
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    icon: <Manage />,
  },
];

export default function Page() {
  {
    /* Give us a Shot Section */
  }
  return (
    <div className="flex flex-col gap-5">
      <GASCard
        src={giveUs}
        alt="Give Us a Shot"
        textSection={
          <div className="flex flex-col gap-4 p-5 md:px-20 w-full">
            <h1 className="text-white text-3xl">Give us a Shot</h1>
            <p className="text-tertiary font-[100]">
              Join over 4,000+ startups already growing with Untitled.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row md:w-11/12 lg:justify-end md:flex-row-reverse">
              <Button
                onClick={() => {}}
                secondary
                text="Get Started"
                className="w-full p-3 text-sm xl:w-1/6"
              />
              <Button
                onClick={() => {}}
                text="Learn More"
                className="w-full p-3 bg-white text-[#344054] text-sm xl:w-1/6"
              />
            </div>
          </div>
        }
      />
      {/* Features Section */}
      <section className="flex flex-col justify-center items-center gap-5 px-20">
        <Badge text="Features" />
        {/* Titlo del Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-t-primary text-3xl text-center">
            Cutting-edge features for advanced analytics
          </h1>
          <p className="text-btn-tertiary text-center">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        {/* Iteracion sobre una constante para evitar la repetición de código */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Features.map((feature, i) => (
            <ListCard
              key={i}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              buttonText="Learn more"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
