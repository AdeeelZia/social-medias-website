import React from "react";
import Sidebar from "../../layout/SideBar";
import DashboardHeader from "./components/DashboardHeader";
import InfoCard from "../../components/ui/InfoCard";
import DashboardFooter from "./components/DashboardFooter";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader title={'Home'} description={'Boost engagement and attract more followers by scheduling consistently.'} />
        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          <InfoCard
            title="Manage all of your social medias in one place"
            description="Easily keep all of your social media accounts active by publishing to any profile, page or channel at once. We recommend adding 2 social accounts to start but you can add even more later."
            buttonText="Add Account"
          />
          <InfoCard
            title="Save time by scheduling one post to multiple accounts"
            description="Start off by composing your first post, then schedule it across your social accounts at a recommended time — the more you schedule, the smarter the recommendations."
            buttonText="Schedule your first post"
          />
        </main>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Dashboard;
