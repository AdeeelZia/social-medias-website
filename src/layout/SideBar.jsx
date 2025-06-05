import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LOGO } from "../svg/Logo";
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
} from "../svg/SideBarIconsGrabbar";

const SidebarLinkItem = ({ path, icon: Icon, label }) => {
  return (
    <Link
      to={path}
      className="flex items-center px-2 py-3 rounded-md hover:bg-gray-200"
    >
      <Icon />
      <span className="text-sm font-medium pl-4 text-[#C7C7C7]">{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();

  const sidebarLinksData = [
    { icon: HOME_ICON, label: "Home", path: "/dashboard/index" },
    {
      icon: CREATE_POST_ICON,
      label: "Create Post",
      path: "/dashboard/createpost",
    },
    { icon: INSPIRATION_ICON, label: "Inspiration", path: "/" },
    { icon: STREAMS_ICON, label: "Streams", path: "/" },
    { icon: PLANNER_ICON, label: "Planner", path: "/" },
    { icon: ADVERTISE_ICON, label: "Advertise", path: "/" },
    { icon: ANALYTICS_ICON, label: "Analytics", path: "/" },
    { icon: MY_PROFILE_ICON, label: "My Profile", path: "/" },
    { icon: UPGRADE_MY_PLAN_ICON, label: "Upgrade my plan", path: "/" },
    { icon: LOGOUT_ICON, label: "Logout", path: "/" },
  ];

  return (
    <aside className="p-7 border-r border-[#0000000D] overflow-hidden">
      <Link to="/">
        <LOGO customClass="mb-5 max-w-[11rem]" />
      </Link>
      {sidebarLinksData.map((link, index) => (
        <SidebarLinkItem key={index} {...link} activePath={location.pathname} />
      ))}
    </aside>
  );
};

export default Sidebar;
