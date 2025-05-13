import React from "react";
import { Heading } from "../common/common";

const Accordion = () => {
  return (
    <div className="py-[50px] px-[60px] rounded-[40px] bg-white shadow-[0px_4px_44px_-5px_#6666661A] my-[150px]">
      <Heading level={3} text="Questions" customStyleHeading="!text-start" />

      <div className="w-full">
        <div className="flex justify-between items-center w-full py-4">
          <p className="text-[#000] text-base font-medium flex-1">
            Will I be charged at the end of my free trial?
          </p>
          <div className="shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5V19"
                stroke="url(#paint0_linear_45_5074)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="url(#paint1_linear_45_5074)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_45_5074"
                  x1="12.5"
                  y1="5"
                  x2="12.5"
                  y2="19"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8933BA" />
                  <stop offset="1" stopColor="#D82370" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_45_5074"
                  x1="12"
                  y1="12"
                  x2="12"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8933BA" />
                  <stop offset="1" stopColor="#D82370" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <hr className="border-t border-[#E5E5E5]" />
      </div>
    </div>
  );
};

export default Accordion;
