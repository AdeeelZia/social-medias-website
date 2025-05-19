import React, { useState } from "react";
import { Heading, Button } from "../common/common";
import { CLOSE_ICON, PLUS_ICON } from "../../svg/FaqsIconsGrabbar";

const Accordion = ({ questions, answers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className="flex justify-between items-center w-full py-4">
        <p className="text-[#000] text-base font-medium flex-1" onClick={toggleAccordion}>{questions}</p>
        <Button>
          {isOpen ? <CLOSE_ICON /> : <PLUS_ICON />}
        </Button>
      </div>
      <div
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mt-2 sm:mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm sm:text-[12.66px] leading-relaxed text-black mb-4 sm:mb-[18.99px]">
          {answers}
        </p>
      </div>
      <hr className="border-t border-[#E5E5E5]" />
    </>
  );
};

export default Accordion;
