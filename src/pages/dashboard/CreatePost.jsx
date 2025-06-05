import React from "react";
import Sidebar from "../../layout/SideBar";
import DashboardHeader from "./components/DashboardHeader";
import DashboardFooter from "./components/DashboardFooter";
import { Heading, Input } from "../../components/common/common";

export default function CreatePost() {
  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader
          title={"Create Post"}
          description={"Create new posts for your social media accounts."}
        />
        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          <div>
            <div className="max-w-[40rem] p-6 rounded-[10px] bg-white">
              <Heading level={3} text={`New Post`} />
              <Input
                label={"Publish to"}
                placeholder={"Select a Social Account"}
                icon
              />
              <label className="flex flex-col">
                Content
                <textarea className="border p-8">
                  Enter your text and links
                </textarea>
              </label>
            </div>
          </div>
        </main>
        <DashboardFooter />
      </div>
    </div>
  );
}
