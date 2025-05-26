import React, { useState } from "react";
import { LOGO } from "../svg/Logo";
import { Button } from "../components/common/common";
import {
  HOME_ICON,
  CREATE_POST_ICON,
  INSPIRATION_ICON,
  STREAMS_ICON,
  PLANNER_ICON,
  ADVERTISE_ICON,
  ANALYTICS_ICON,
  MY_PROFILE_ICON,
  UPGRADE_MY_PLAN_ICON,
  LOGOUT_ICON,
  MENU_ICON,
} from "../svg/SideBarIconsGrabbar";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const SideBarData = [
    { icon: HOME_ICON, text: "Home", path: "/" },
    { icon: CREATE_POST_ICON, text: "Create Post", path: "/" },
    { icon: INSPIRATION_ICON, text: "Inspiration", path: "/" },
    { icon: STREAMS_ICON, text: "Streams", path: "/" },
    { icon: PLANNER_ICON, text: "Planner", path: "/" },
    { icon: ADVERTISE_ICON, text: "Advertise", path: "/" },
    { icon: ANALYTICS_ICON, text: "Analytics", path: "/" },
    { icon: MY_PROFILE_ICON, text: "My Profile", path: "/" },
    { icon: UPGRADE_MY_PLAN_ICON, text: "Upgrade my plan", path: "/" },
    { icon: LOGOUT_ICON, text: "Logout", path: "/" },
  ];

  const SideBarLink = ({ icon: Icon, text, path }) => (
    <a
      href={path}
      className="flex items-center gap-4 p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
    >
      <Icon className="w-5 h-5 shrink-0" />
      <span className="text-sm font-medium">{text}</span>
    </a>
  );

  return (
    <aside className={`fixed top-0 left-0 h-full w-64 bg-[#f5f5f5] border-r border-[#0000000D] z-40 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:block`}
    >
      <div className="flex justify-between items-center p-6">
        <LOGO className="max-w-[130px]" />
      </div>

      <nav className="px-4 space-y-1">
        {SideBarData.map((item, index) => (
          <SideBarLink key={index} {...item} />
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
