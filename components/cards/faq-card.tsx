"use client;";

import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";

interface FAQCardProps {
  question: string;
  answer: string;
  last: boolean;
}

export default function FAQCard({ question, answer, last }: FAQCardProps) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-start items-center w-full px-5">
      <div className={`flex flex-col ${last ? "" : "border-b-2"} w-full py-6`}>
        <div className="flex justify-between items-center">
          <h2 className="text-t-primary text-lg">{question}</h2>
          {/* Renderizado condicional para mostrar la respuesta a la pregunta */}
          {showAnswer ? (
            <MinusCircle
              className="cursor-pointer text-[#98A2B3]"
              size={24}
              onClick={() => setShowAnswer(!showAnswer)} // Aqui se maneja el estado para ver la descripcion
            />
          ) : (
            <PlusCircle
              className="cursor-pointer text-[#98A2B3]"
              size={24}
              onClick={() => setShowAnswer(!showAnswer)} // Aqui se maneja el estado para ver la descripcion
            />
          )}
        </div>
        {showAnswer && (
          <div className="flex flex-col py-2 pr-6">
            <p className="text-btn-tertiary text-sm font-thin">{answer}</p>
            {/* Condicional para verificar si se ve la descripcion */}
          </div>
        )}
      </div>
    </div>
  );
}
