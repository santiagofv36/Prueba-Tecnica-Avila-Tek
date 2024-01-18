"use client";
import Button from "@/components/inputs/button";
import Input from "@/components/inputs/input";
import ActiveUsers from "@/components/svg/active-users";
import Chart from "@/components/svg/chart";
import QuestionMark from "@/components/svg/question-mark";
import GASCard from "@/components/cards/gas-card";
import women from "../assets/woman.png";
import Star from "@/components/svg/star";
import FAQCard from "@/components/cards/faq-card";
import { useState } from "react";

// Lista del 0 al 4 para iterar y renderizar las estrellas
const stars: number[] = [0, 1, 2, 3, 4];

//Lista de preguntas para el apartado de FAQ

const Questions: Record<string, string>[] = [
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
  const [email, setEmail] = useState<string>("");

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            key={i}
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
