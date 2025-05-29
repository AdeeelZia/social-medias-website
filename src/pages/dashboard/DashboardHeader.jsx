import React from "react";
import { Heading } from "../../components/common/common";
import { SEARCH_ICON, BELL_ICON } from "../../svg/DashboardIconsGrabbar";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center p-7 bg-[#f5f5f5]">
      <div>
        <Heading level={1} text={`Home`} customClass={`!text-3xl`} />
        <p className="text-sm text-gray-500">
          Boost engagement and attract more followers by scheduling
          consistently.
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-1 ">
          <SEARCH_ICON />
          <input
            type="text"
            placeholder="Search everything"
            className="text-sm"
          />
        </div>
        <BELL_ICON />
        <div className="flex items-center space-x-2">
          <img
            src="/images/user.png"
            alt="User_Image"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="font-medium text-gray-800 text-sm">John Doe</div>
            <div className="text-xs text-gray-500">User Account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
