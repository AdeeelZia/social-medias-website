import React from "react";
import ServicesSection from "../../components/ServicesSection";
import FeaturesSection from "../../components/FeaturesSection";
import NewsletterSection from "../../components/NewsletterSection";
import { Heading, Button } from "../../components/common/common";
import SideBar from "../../layout/SideBar";

export default function Home() {
  return (
    <>
    <SideBar />
      {/* <div className="sm-container bg-white overflow-hidden">
        <div className="flex justify-between items-center gap-32">
          <div className="w-1/2">
            <Heading

              level={1}
              text={`Grow your reach and get more business with social media. Let's do this.`}
              customStyleHeading="!text-[42px] !text-start mb-[24px]"
            />
            <p className="text-lg mb-[30px] text-[#3A3A3A]">
              Create, schedule, publish, and manage your content and ad
              campaigns across social networks from a single dashboard. We help
              maximize the impact of your social marketing by providing
              real-time insights.
            </p>
            <div className="flex gap-4 items-center">
              <Button text={"Start Today"} gradient />
              <div className="border border-solid border-[#8933BA] w-10 h-10 rounded-sm flex justify-center items-center hover:bg-gradient-to-r from-[#8933BA] to-[#D82370]">
                <ARROW_RIGHT_ICON className="hover:bg-white" />
              </div>
              <span className="text-[#8933BA]">Book a Demo Today</span>
            </div>
          </div>
          <div className="w-1/2">
            <img
              width={568}
              height={460}
              src={"/images/women.jpg"}
              alt={"Image"}
            />
          </div>
        </div>
      </div>

      <FeaturesSection
        heading="Manage social media in one place"
        description="Social Medias are feeds that display the content from your connected social accounts and let you take part in industry conversations. You can use streams to monitor activity across all of your accounts."
        imageSrc="/images/social.jpg"
        features={featuresData}
      />

      <div className="md:pb-24">
        <div
          className="bg-center bg-cover h-96"
          style={{ backgroundImage: "url('/images/partner.jpg')" }}
        ></div>
        <div className="px-4 -mt-[300px] text-center text-[#fff]">
          <h3 className="text-base font-medium md:text-2xl lg:text-3xl xl:text-4xl">
            Social medias are awesome for planning out social media posts
          </h3>
          <div className="mx-10 md:mx-16 lg:mx-24 xl:mx-40 my-4 border border-solid border-[#8933BA]"></div>
          <p className="py-5 text-base font-normal md:text-lg lg:text-xl xl:text-3xl xl:font-light">
            We offer you a true concierge experience, combining the expertise if
            you run multiple social media accounts for your business.
          </p>
          <button className="font-medium text-sm rounded-md py-3 px-5 bg-gradient-to-b from-[#8933BA] to-[#D82370] cursor-pointer hover:opacity-90">
            Get Started
          </button>
        </div>
      </div>
      <div className="py-20 md:flex xl:gap-12 lg:relative">
        <div className="md:w-1/2 xl:flex xl:justify-end">
          <img src="/images/still.jpg" alt="still" />
        </div>
        <div className="md:w-1/2">
          <h2 className="pt-2 md:pt-0 text-[15px] uppercase font-bold md:text-xl md:whitespace-nowrap lg:text-2xl xl:text-3xl">
            Still Not Sure Where to Start?
          </h2>
          <div className="my-4 md:my-2 lg:my-4 mr-20 border border-solid border-[#8933BA]"></div>
          <p className="py-1 text-base font-normal text-justify lg:text-lg">
            Share real-time insights by monitoring mentions of your brand,
            company, products, and competitors. Measure the impact of your
            social marketing campaigns through comprehensive social channel
            reporting.
          </p>
          <ul className="py-2">
            <li className="flex gap-4 py-1 lg:py-2">
              <p>Choose the right plan</p>
            </li>
            <li className="flex gap-4 py-1 lg:py-2">
              <p>Choose the right plan</p>
            </li>
            <li className="flex gap-4 py-1 lg:py-2">
              <p>Start your free trial</p>
            </li>
            <li className="flex gap-4 py-1 lg:py-2">
              <p>Attend free classes for beginners</p>
            </li>
            <li className="flex gap-4 py-1 lg:py-2">
              <p>Charging less sounds good to me</p>
            </li>
          </ul>
          <button className="border border-solid rounded-md py-2 px-3 text-sm font-medium text-[#fff] bg-gradient-to-b from-[#8933BA] to-[#D82370] cursor-pointer hover:opacity-90">
            Sounds good to me
          </button>
        </div>
      </div>

      <div className="sm-container grid grid-cols-2 gap-x-14 gap-y-10">
        {Services.map((item, index) => {
          return (
            <ServicesSection
              key={index}
              Icon={item.Icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
      <NewsletterSection /> */}
    </>
  );
}
