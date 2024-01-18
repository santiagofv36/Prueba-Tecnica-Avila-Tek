"use client";
import Badge from "@/components/badge";
import ListCard from "@/components/cards/list-card";
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
import giveUs from "@/assets/give-us.png";
import women from "../assets/woman.png";
import Star from "@/components/svg/star";
import Share from "@/components/svg/share";
import Light from "@/components/svg/light";
import Manage from "@/components/svg/manage";
import women1 from "../assets/women1.png";
import women2 from "../assets/women2.png";
import women3 from "../assets/women3.png";
import men from "../assets/men.png";
import Image from "next/image";
import { MinusCircle } from "lucide-react";
import FAQCard from "@/components/cards/faq-card";

// Lista de integraciones para ser renderizadas de manera que no se repita cada una de las tarjetas
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

// Lista del 0 al 4 para iterar y renderizar las estrellas
const stars = [0, 1, 2, 3, 4];

// Lista de fotos para el apartado de Pricing
const Photos = [
  {
    src: women1,
    alt: "women 1",
  },
  {
    src: women2,
    alt: "women 2",
  },
  {
    src: women3,
    alt: "women 3",
  },
  {
    src: giveUs,
    alt: "Give us",
  },
  {
    src: men,
    alt: "men",
  },
];

//Lista de preguntas para el apartado de FAQ

const Questions = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can change your plan at any time. If you change your plan in the middle of a billing cycle, we’ll prorate your next invoice.",
  },
  {
    question: "What is your cancellation policy",
    answer:
      "You can cancel your subscription at any time. Once you cancel, you’ll be billed for the current billing cycle, but you won’t be billed again.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add a logo, company address, or any other information to your invoice.",
  },
  {
    question: "How does billing work?",
    answer:
      "You can pay by credit card or bank transfer. For enterprise customers, we can also support invoicing.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change your account email by contacting us directly at untitled@company.com",
  },
];

export default function Home() {
  return (
    // Contenedor principal del Hero Section
    <div className="flex flex-col gap-5">
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
      <div className="flex justify-center -mt-24">
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
      {/* Give us a Shot Section */}
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
      {/* Pricing section */}
      <section className="flex flex-col justify-between items-center gap-5 p-20 md:flex-row bg-[#F9FAFB]">
        {/* Parte de la izquierda del contenedor (parte de arriba en mobile) */}
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-[#101828] text-3xl">
            No long-term contracts. No catches.
          </h1>
          <p className="text-btn-tertiary font-thin">
            Start your 30-day free trial today.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row md:w-11/12 lg:justify-end md:flex-row-reverse">
            <Button
              onClick={() => {}}
              secondary
              text="Get Started"
              className="w-full p-3 text-sm xl:w-1/4"
            />
            <Button
              onClick={() => {}}
              text="Learn More"
              className="w-full p-3 bg-white text-[#344054] text-sm xl:w-1/4 border-2 border-[#D0D5DD]"
            />
          </div>
        </div>
        {/* Photos of the section */}
        <div className="flex flex-col w-full">
          {/* Para dispositivos de 1024px hacia adelante esta distribución no se verá */}
          <div className="flex flex-col gap-4 relative lg:hidden">
            {Photos.map((photo, i) => (
              <div key={i} className="max-h-[200px] overflow-hidden">
                <Image src={photo.src} alt={photo.alt} className="w-full" />
              </div>
            ))}
          </div>
          {/* Aqui no se itera ya que no hay una forma generica de posicionar los elementos */}
          <div className="hidden lg:flex lg:flex-col gap-5">
            {/* Fotos de arriba */}
            <div className="flex gap-5 items-end justify-center">
              <div className="flex flex-col">
                <Image
                  src={women1}
                  alt="women 1"
                  width={women1.width / 2}
                  height={women1.height / 2}
                />
              </div>
              <div className="flex flex-col">
                <Image
                  src={women2}
                  alt="women 2"
                  width={women2.width / 2}
                  height={women2.height / 2}
                />
              </div>
            </div>
            {/* Fotos de abajo */}
            <div className="flex gap-5 items-start justify-center">
              <div className="flex flex-col">
                <Image
                  src={women3}
                  alt="women 3"
                  width={women3.width / 2}
                  height={women3.height / 2}
                />
              </div>
              <div className="flex flex-col">
                <Image
                  src={men}
                  alt="men"
                  width={men.width / 2}
                  height={men.height / 2}
                />
              </div>
              <div className="flex flex-col">
                <Image
                  src={giveUs}
                  alt="women"
                  width={giveUs.width / 4.0625}
                  height={giveUs.height / 4.0625}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="flex flex-col justify-center items-center md:px-40">
        {/* Header FAQ */}
        <div className="px-20 flex flex-col justify-center items-center gap-5">
          <h1 className="text-t-primary text-3xl text-center">
            Frequently asked questions
          </h1>
          <p className="text-btn-tertiary text-md font-thin text-center">
            Everything you need to know about the product and billing.
          </p>
        </div>
        {/* FAQ */}
        {/* Iteracion sobre una constante para evitar la repetición de código */}
        {Questions.map((question, i) => (
          <FAQCard
            question={question.question}
            answer={question.answer}
            last={i === Questions.length - 1}
          />
        ))}
      </section>
      {/* Testimonials */}
      <GASCard
        src={women}
        reverse
        alt="Give Us a Shot"
        textSection={
          <div className="flex flex-col gap-4 p-5 w-full md:px-10 lg:px-10 xl:px-40">
            {/* Estrellas */}
            <div className="flex gap-2">
              {stars.map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <h1 className="text-white text-3xl font-thin">
              Love the simplicity of the service and the prompt customer
              support. We can’t imagine working without it.
            </h1>
            <p className="text-white">----- Renee Wells</p>
            <p className="text-tertiary font-thin">
              Product Designer, Quotient
            </p>
          </div>
        }
      />
    </div>
  );
}
