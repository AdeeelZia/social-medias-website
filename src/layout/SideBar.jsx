import React from "react";
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

const SideBar = () => {
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

  return (
    <div>
      <div>
        <LOGO />
        <div>
          {SideBarData.map((item, index) => (
            <div key={index} className="flex">
              <>{item.icon}</>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
