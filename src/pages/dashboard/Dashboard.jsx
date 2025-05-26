import React from "react";
import SideBar from '../../layout/SideBar'
import { Heading , Input , Button } from '../../components/common/common';
import {} from '../../svg/DashboardIconsGrabbar';

export default function Dashboard() {
  return (
    <div className="w-full bg-[#f5f5f5] flex">
      <SideBar />
      <div className="p-5">
        <div className="flex">
         <div>
          <Heading level={2} text='Home' customClass='!text-[40px] !text-medium' />
        <p>Boost engagement and attract more followers by scheduling consistently.</p>
         </div>
        <div>
          <Input placeholder='Search everything' customClass='rounded-[8px]' />
        </div>
        </div>
      </div>
    </div>
  );
}
