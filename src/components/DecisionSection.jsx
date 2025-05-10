import React from "react";

const DecisionSection = () => {
  return (
    <section className="sm-container">
      <div className="py-20 md:flex xl:gap-12 lg:relative">
        <div className="md:w-1/2 xl:flex xl:justify-end">
          <img
            src="/images/still.jpg"
            alt="still"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="pt-2 md:pt-0 text-[15px] uppercase font-bold md:text-xl md:whitespace-nowrap lg:text-2xl xl:text-3xl">
            Still Not Sure Where to Start?
          </h2>
          <div className="my-4 md:my-2 lg:my-4 mr-20 border border-solid border-[#8933BA]"></div>
          <p className="py-1 text-base font-normal text-justify lg:text-lg">
            Share real-time insights by monitoring mentions of your brand,
            company, products, and competitors. Measure the impact of your
            social marketing campaigns through comprehensive social channel
            reporting.
          </p>
          <ul className="py-2">
            <li className="flex gap-4 py-1 lg:py-2">
              <p>Choose the right plan</p>
            </li>
            <li className="flex gap-4 py-1 lg:py-2">
              <p>Choose the right plan</p>
            </li>
            <li className="flex gap-4 py-1 lg:py-2">
              <p>Start your free trial</p>
            </li>
            <li className="flex gap-4 py-1 lg:py-2">
              <p>Attend free classes for beginners</p>
            </li>
            <li className="flex gap-4 py-1 lg:py-2">
              <p>Charging less sounds good to me</p>
            </li>
          </ul>
          <button className="border border-solid rounded-md py-2 px-3 text-sm font-medium text-[#fff] bg-gradient-to-b from-[#8933BA] to-[#D82370] cursor-pointer hover:opacity-90">
            Sounds good to me
          </button>
        </div>
      </div>
    </section>
  );
};

export default DecisionSection;
