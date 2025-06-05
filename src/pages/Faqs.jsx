import React from "react";
import { Button, Heading } from "../components/common/common";
import Accordion from "../components/ui/Accordion";
import { FaqsItems } from "../utils/FaqsData";

export default function Faqs() {
  return (
    <div>
      <Heading
        level={1}
        text="Frequently Asked Questions"
        customStyleHeading="!text-[36px] mb-[30px]"
      />
      <p className="text-lg text-center mb-[30px] text-[#3A3A3A]">
        We provide best Marketing services.
      </p>
      <img src="/images/faq.png" alt="faq_image" className="mx-auto" />
      <div className="px-[70px] py-[50px] rounded-[40px] bg-white shadow-[0px_4px_44px_-5px_#6666661A] my-6">
        <Heading
          level={2}
          text="Questions"
          customStyleHeading="mb-8 !text-start"
        />
        {FaqsItems.map((item, index) => (
          <Accordion
            key={index}
            questions={item.text}
            answers={item.description}
          />
        ))}
        <div className="flex justify-center mt-[40px]">
          <Button
        text='ASK A QUESTION'
        gradient />
        </div>
      </div>
    </div>
  );
}
