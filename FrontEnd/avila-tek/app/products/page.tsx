"use client";

import Notion from "@/components/svg/notion";
import Slack from "@/components/svg/slack";
import Drive from "@/components/svg/drive";
import Intercom from "@/components/svg/intercom";
import Jira from "@/components/svg/jira";
import Dropbox from "@/components/svg/dropbox";
import ListCard from "@/components/cards/list-card";
import Badge from "@/components/badge";
import { Integration } from "@/utils/types";

// Lista de integraciones para ser renderizadas de manera que no se repita cada una de las tarjetas
const Integrations: Integration[] = [
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

export default function Page() {
  // Integrations Section
  return (
    <section className="flex flex-col justify-center items-center gap-5 px-20 my-16">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
        {Integrations.map((integration, i) => (
          <ListCard
            key={i}
            title={integration.title}
            description={integration.description}
            icon={integration.icon}
            buttonText="View integration"
          />
        ))}
      </div>
    </section>
  );
}
