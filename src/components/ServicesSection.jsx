import React from "react";
import { Heading, Button } from "../components/common/common";
import { USER_ICON } from "../svg/HomeIconsGrabbar";

const ServicesSection = ({ icon, title, description }) => {
  return (
    <section>
      <div className="p-8 border border-[#C4C4C480] bg-white rounded-md">
        <div className="w-fit p-3 rounded-[16px] bg-gradient-to-b from-purple-700 to-pink-600">
          <USER_ICON width={24} height={24} />
        </div>
        <div className="py-3">
          <Heading
            text={title}
            level={3}
            customStyleHeading="py-2 text-lg !text-start font-medium"
          />
          <p className="py-2 text-sm font-normal text-gray-600">
            {description}
          </p>
        </div>
        <Button
          text="Hire us"
          customStyleButton="border p-2 text-[#fff] text-xs rounded-md bg-gradient-to-b from-purple-700 to-pink-600 cursor-pointer hover:opacity-90"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
