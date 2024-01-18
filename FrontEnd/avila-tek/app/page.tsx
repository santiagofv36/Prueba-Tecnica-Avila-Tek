"use client";
import Badge from "@/components/badge";
import IntegrationCard from "@/components/cards/integration-card";
import Button from "@/components/inputs/button";
import Input from "@/components/inputs/input";
import ActiveUsers from "@/components/svg/active-users";
import Chart from "@/components/svg/chart";
import Notion from "@/components/svg/notion";
import Slack from "@/components/svg/slack";
import Drive from "@/components/svg/drive";
import Intercom from "@/components/svg/intercom";
import Jira from "@/components/svg/jira";
import Dropbox from "@/components/svg/dropbox";
import QuestionMark from "@/components/svg/question-mark";
import GASCard from "@/components/cards/gas-card";

const Integrations = [
  {
    title: "Notion integration",
    description:
      "Work faster and smarter by integrating directly with Notion, right in the app.",
    icon: <Notion />,
  },
  {
    title: "Google Drive integration",
    description:
      "Work faster and smarter by integrating directly with Google Drive, right in the app.",
    icon: <Drive />,
  },
  {
    title: "Slack integration",
    description:
      "Work faster and smarter by integrating directly with Slack, right in the app.",
    icon: <Slack />,
  },
  {
    title: "Intercom integration",
    description:
      "Work faster and smarter by integrating directly with Intercom, right in the app.",
    icon: <Intercom />,
  },
  {
    title: "Jira integration",
    description:
      "Work faster and smarter by integrating directly with Jira, right in the app.",
    icon: <Jira />,
  },
  {
    title: "Dropbox integration",
    description:
      "Work faster and smarter by integrating directly with Dropbox, right in the app.",
    icon: <Dropbox />,
  },
];

export default function Home() {
  return (
    // Contenedor principal del Hero Section
    <div className=" ">
      {/* Grow your users Card */}
      <section className="bg-card-primary xl:min-h-[674px] lg:min-h-[674px] md:min-h-[674px] min-h-[590px] xl:mt-10 lg:mt-10 sm:mt-10 xl:rounded-3xl lg:rounded-3xl sm:rounded-3xl flex flex-col xl:pt-28 lg:pt-28 md:pt-28 pt-16 xl:gap-10 lg:gap-10 md:gap-10 gap-5 xl:px-0 px-7 mt-0">
        <div className=" flex flex-col items-center">
          <h1 className="text-[36px] lg:text-7xl font-bold text-white">
            Grow your users.
          </h1>
          <h1 className="text-[36px] lg:text-7xl font-bold text-[#E9D7FE]">
            Smarter.
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-tertiary text-[18px] xl:text-[18px] font-normal text-center w-[768px]">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        {/* Contenedor del Input del Email */}
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col items-start justify-center gap-5">
          <div className="flex flex-col gap-5 xl:w-[307.94px] lg:w-[307.94px] md:w-[307.94px] w-full">
            <Input
              type="text"
              placeholder="Enter your email"
              value=""
              onChange={() => {}}
              className="w-full"
              icon={<QuestionMark hint="We need your email to contact you!" />}
            />
            <p className="text-sm text-tertiary">
              We care about your data in our privacy policy.
            </p>
          </div>
          <Button
            onClick={() => {}}
            secondary
            text="Get Started"
            className="p-3 xl:w-[113.66px] lg:w-[113.66px] md:w-[113.66px] w-full"
          />
        </div>
      </section>
      {/* Grafico */}
      <div className="flex justify-center -mt-12">
        <Chart />
      </div>
      {/* Usuarios Activos */}
      <div className="relative">
        <ActiveUsers />
      </div>
      {/* Integrations Section */}
      <section className="flex flex-col justify-center items-center gap-5 px-20">
        <Badge text="Integrations" />
        {/* Titlo del Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-t-primary text-3xl text-center">
            Get more value from your tools
          </h1>
          <p className="text-btn-tertiary text-center">
            Connect your tools, connect your teams. With over 100 apps already
            available in our directory, your team’s favourite tools are just a
            click away.
          </p>
        </div>
        {/* Iteracion sobre una constante para evitar la repetición de código */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {Integrations.map((integration, i) => (
            <IntegrationCard
              key={i}
              title={integration.title}
              description={integration.description}
              icon={integration.icon}
            />
          ))}
        </div>
      </section>
      {/* Give us a Shot Section */}
      <GASCard src="" alt="" />
    </div>
  );
}
