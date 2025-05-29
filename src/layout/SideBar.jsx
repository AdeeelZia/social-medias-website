import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  CLOSE_ICON,
} from "../svg/SideBarIconsGrabbar";

const SideBarLinks = ({ path, icon: Icon, text, currentPath }) => {
  const isActive = currentPath === path;

  return (
    <Link
      to={path}
      className={`flex items-center px-2 py-3 rounded-md hover:bg-gray-200`}
    >
      <Icon />
      <span
        className={`text-sm font-medium pl-4 ${
          isActive
            ? "bg-gradient-to-r from-[#8933BA] to-[#D82370] text-transparent bg-clip-text"
            : "text-[#C4C4C4] hover:bg-gradient-to-r hover:from-[#8933BA] hover:to-[#D82370] hover:text-transparent hover:bg-clip-text"
        }`}
      >
        {text}
      </span>
    </Link>
  );
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button
        customClass="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <CLOSE_ICON customClass="w-6 h-6" />
        ) : (
          <MENU_ICON customClass="w-6 h-6" />
        )}
      </Button>

      <aside
        className={`p-7 border-r border-[#0000000D] overflow-hidden ${
          isOpen ? "w-0" : ""
        }`}
      >
        <Link to={"/"}>
          <LOGO customClass={`mb-5 max-w-[11rem]`} />
        </Link>
        {SideBarData.map((item, index) => {
          return (
            <SideBarLinks
              key={index}
              {...item}
              currentPath={location.pathname}
            />
          );
        })}
      </aside>
    </>
  );
};

export default SideBar;
