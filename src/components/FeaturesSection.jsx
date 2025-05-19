import React from "react";
import { Heading } from "../components/common/common";
const FeatureCard = ({ icon: Icon, heading, description }) => {
  return (
    <div className="flex gap-6 items-start">
      <div
        className={`p-3 rounded-md bg-gradient-to-r from-[#8933BA] to-[#D82370]`}
      >
        {Icon && <Icon />}
      </div>
      <div>
        <Heading
          level={4}
          text={heading}
          customStyleHeading="!text-start !text-lg"
        />
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection = ({ heading, description, imageSrc, features = [] }) => {
  return (
    <div className="relative sm-container py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-[60px]">
        <div className="relative">
          <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#8933BA] to-[#D82370] -z-10 rounded-md" />
          <img
            src={imageSrc}
            alt="social_image"
            className="h-[35.5rem] object-cover rounded-md relative z-10"
          />
        </div>
        <div className="w-1/2">
          <Heading
            level={2}
            text={heading}
            customStyleHeading="!text-[36px] !text-start mb-[30px]"
          />
          <hr className="mb-[30px]" />
          <p className="text-lg mb-[30px] text-gray-700">{description}</p>

          {features.map((feature, index) => (
            <div key={index} className="mb-6">
              <FeatureCard
                icon={feature.icon}
                heading={feature.heading}
                description={feature.description}
                iconBg={feature.iconBg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
