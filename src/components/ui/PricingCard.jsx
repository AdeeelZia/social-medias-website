import React from "react";
import { Heading, Button } from "../common/common";

const PricingPlans = ({
  tag,
  price,
  currency = "$",
  duration = "/month",
  features = [],
}) => {
  return (
    <div className="Card-4 border-2 border-[#E3E6EF] rounded-lg p-4 mb-4">
      <div className="flex justify-center pb-4">
        <div className="py-2 px-6 rounded-full bg-[#FFE4E1]">
          <Heading
            level={2}
            text={tag}
            customStyleHeading="!text-xs !font-bold"
            gradient={true}
          />
        </div>
      </div>
      <div className="px-4">
        <div className="flex justify-center items-center py-4">
          <span className="text-sm font-normal text-[#ADB4D2]">{currency}</span>
          <span className="text-4xl font-normal text-[#272B41]">{price}</span>
          <span className="text-xs font-normal text-[#9299B8]">{duration}</span>
        </div>
        <ul className="flex flex-col gap-4">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-x-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                >
                  <path
                    d="M4.33235 9C4.067 9.00022 3.81246 8.89079 3.62485 8.69585L0.293203 5.23497C-0.0975391 4.82936 -0.0977628 4.1715 0.292703 3.7656C0.683169 3.35971 1.31646 3.35947 1.70721 3.76509L4.33235 6.4931L10.2931 0.304209C10.6836 -0.101403 11.3167 -0.101403 11.7071 0.304209C12.0976 0.70982 12.0976 1.36745 11.7071 1.77306L5.03985 8.69585C4.85225 8.89079 4.59771 9.00022 4.33235 9Z"
                    fill="url(#paint0_linear_45_3492)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_45_3492"
                      x1="6"
                      y1="0"
                      x2="6"
                      y2="9"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#8933BA" />
                      <stop offset="1" stop-color="#D82370" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <div className="text-center py-4">
          <Button text="Subscribe" gradient={true} />
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
