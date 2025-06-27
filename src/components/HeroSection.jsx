import React from "react";
import { Heading , Button } from '../components/common/common';
import { ARROW_RIGHT_ICON } from "../svg/HomeIconsGrabbar";

const HeroSection = () => {
  return (
    <div className="sm-container bg-white overflow-hidden px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-32">
        <div className="w-full md:w-1/2">
          <Heading
            level={1}
            text={`Grow your reach and get more business with social media. Let's do this.`}
            customClass="text-[28px] sm:text-[32px] md:!text-[42px] text-start mb-6"
          />
          <p className="text-base sm:text-lg mb-6 text-[#3A3A3A]">
            Create, schedule, publish, and manage your content and ad campaigns
            across social networks from a single dashboard. We help maximize the
            impact of your social marketing by providing real-time insights.
          </p>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <Button text={"Start Today"} gradient customClass={`!text-white`} />
            <div className="border border-solid border-[#8933BA] w-10 h-10 rounded-sm flex justify-center items-center hover:bg-gradient-to-r from-[#8933BA] to-[#D82370]">
              <ARROW_RIGHT_ICON className="hover:bg-white" />
            </div>
            <span className="text-[#8933BA]">Book a Demo Today</span>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto max-w-[568px]"
            src="/images/women.jpg"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
