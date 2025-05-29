import React from "react";
import { Heading, Button } from "../common/common";
import { TRICK_ICON } from "../../svg/DashboardIconsGrabbar";

const InfoCard = ({ title, description, buttonText }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
      <div className="flex justify-between">
        <Heading level={2} text={title} />
        <div className="p-3 rounded-full bg-[#C7C7C7]">
          <TRICK_ICON />
        </div>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
      <Button customClass={`!text-white`} gradient>
        {buttonText}
      </Button>
    </div>
  );
};

export default InfoCard;
