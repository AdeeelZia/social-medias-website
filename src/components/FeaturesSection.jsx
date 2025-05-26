import React from "react";
import { Heading } from "../components/common/common";

const FeatureCard = ({ icon: Icon, heading, description }) => {
  return (
    <div className="flex gap-4 sm:gap-6 items-start">
      <div className="p-3 rounded-md bg-gradient-to-r from-[#8933BA] to-[#D82370]">
        {Icon && <Icon />}
      </div>
      <div>
        <Heading
          level={4}
          text={heading}
          customStyleHeading="!text-start text-base sm:!text-lg"
        />
        <p className="text-sm sm:text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection = ({ heading, description, imageSrc, features = [] }) => {
  return (
    <div className="relative sm-container py-10 px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-[60px]">
        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#8933BA] to-[#D82370] rounded-md -z-10" />
          <img
            src={imageSrc}
            alt="social_image"
            className="w-full h-auto max-h-[35.5rem] object-cover rounded-md relative z-10"
          />
        </div>

        {/* Right: Content Section */}
        <div className="w-full md:w-1/2">
          <Heading
            level={2}
            text={heading}
            customStyleHeading="text-2xl sm:text-3xl md:!text-[36px] text-start mb-6"
          />
          <hr className="mb-6" />
          <p className="text-base sm:text-lg mb-6 text-gray-700">
            {description}
          </p>

          {features.map((feature, index) => (
            <div key={index} className="mb-6">
              <FeatureCard
                icon={feature.icon}
                heading={feature.heading}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
