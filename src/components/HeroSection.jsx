import React from "react";
import { ARROW_RIGHT_ICON } from "../svg/HomeIconsGrabbar";

const HeroSection = () => {
  return (
    <section className="sm-container">
      <div className="md:flex md:justify-between md:items-center md:flex-row-reverse">
        <div className="md:w-1/2">
          <img src="/images/women.jpg" alt="Image" />
        </div>
        <div className="md:w-1/2">
          <div className="py-2 lg:mb-3">
            <h1 className="text-2xl font-bold lg:text-3xl lg:leading-snug xl:text-4xl xl:leading-normal">
              Grow your reach and get more business with social media. Let's do
              this.
            </h1>
          </div>
          <div className="pb-2 lg:mb-3">
            <p className="text-base font-normal leading-relaxed text-[#000] lg:leading-[1.8] xl:leading-loose">
              Create, schedule, publish, and manage your content and ad
              campaigns across social networks from a single dashboard. We help
              maximize the impact of your social marketing by providing
              real-time insights.
            </p>
          </div>
          <div className="sm:flex sm:flex-wrap gap-x-3">
            <button className="border p-3 md:px-5 rounded-md text-sm font-bold text-[#fff] bg-gradient-to-b from-[#8933BA] to-[#D82370] cursor-pointer hover:opacity-90">
              Get Started
            </button>
            <div className="py-2 sm:p-0 md:pt-2 lg:pt-0 flex items-center gap-x-3">
              <div className="border border-[#8933BA] p-2 rounded-md">
                <ARROW_RIGHT_ICON />
              </div>
              <p className="text-sm font-bold uppercase gradient-text">
                Book a Demo Today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
