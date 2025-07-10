/** @format */
"use client";
import React from "react";


import { useState } from "react";


import { useAutoAnimate } from "@formkit/auto-animate/react";
type Props = {
  isAccordionOpen?: boolean;
  question: string;
  answer: string;
};

export default function Accordion(props: Props) {
  const [animationParent] = useAutoAnimate();
  const [isAccordionOpen, setAccordion] = useState(
    props.isAccordionOpen || false
  );
  function toggleAccordion() {
    setAccordion(!isAccordionOpen);
  }
  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      {/* q */}
      <p
        onClick={toggleAccordion}
        className=" flex justify-between gap-[5px] bg-white p-[10px]  sm:text-lg font-semibold cursor-pointer "
      >
        <span>{props.question}</span>
       
      </p>
      {/* ans */}
      {isAccordionOpen && (
        <p className="text-sm sm:text-base bg-white p-[10px]">{props.answer}</p>
      )}
    </div>
  );
}
