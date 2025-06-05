import React from "react";
import NewsletterSection from "../components/NewsletterSection";
import { Heading, Button } from "../components/common/common";
import { ARROW_RIGHT_ICON } from "../svg/HomeIconsGrabbar";
import FeaturesSection from "../components/FeaturesSection";

export default function Home() {
  const features = [
    {
      icon: ARROW_RIGHT_ICON,
      heading: "Secure Integration",
      description:
        "Easily connect your social platforms with full data security.",
    },
    {
      icon: ARROW_RIGHT_ICON,
      heading: "Analytics & Insights",
      description:
        "Get real-time data to understand what works and optimize performance.",
    },
    {
      icon: ARROW_RIGHT_ICON,
      heading: "Content Scheduling",
      description: "Plan and automate your posts across all channels.",
    },
  ];
  return (
    <>
      <div className="sm-container bg-white overflow-hidden px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-32">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <Heading
              level={1}
              text={`Grow your reach and get more business with social media. Let's do this.`}
              customClass="text-[28px] sm:text-[32px] md:!text-[42px] text-start mb-6"
            />
            <p className="text-base sm:text-lg mb-6 text-[#3A3A3A]">
              Create, schedule, publish, and manage your content and ad
              campaigns across social networks from a single dashboard. We help
              maximize the impact of your social marketing by providing
              real-time insights.
            </p>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <Button
                text={"Start Today"}
                gradient
                customClass={`!text-white`}
              />
              <div className="border border-solid border-[#8933BA] w-10 h-10 rounded-sm flex justify-center items-center hover:bg-gradient-to-r from-[#8933BA] to-[#D82370]">
                <ARROW_RIGHT_ICON className="hover:bg-white" />
              </div>
              <span className="text-[#8933BA]">Book a Demo Today</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-auto max-w-[568px]"
              src="/images/women.jpg"
              alt="Image"
            />
          </div>
        </div>
      </div>

      <FeaturesSection
        heading="All-in-One Social Marketing Platform"
        description="Manage content, run ads, and analyze performance all from a single dashboard designed to save time and grow your brand."
        imageSrc="/images/social-dashboard.jpg"
        features={features}
      />

      <div className="md:pb-24 relative">
        {/* Background Image Section */}
        <div
          className="bg-center bg-cover h-64 sm:h-80 md:h-96"
          style={{ backgroundImage: "url('/images/partner.jpg')" }}
        ></div>

        {/* Content Section */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 -mt-40 sm:-mt-52 md:-mt-72 text-center text-white relative z-10">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
            Social medias are awesome for planning out social media posts
          </h3>

          <div className="mx-auto w-2/3 sm:w-3/4 md:w-2/3 my-4 border border-solid border-[#8933BA]"></div>

          <p className="py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal xl:font-light">
            We offer you a true concierge experience, combining the expertise if
            you run multiple social media accounts for your business.
          </p>

          <button className="mt-2 text-sm sm:text-base font-medium rounded-md py-3 px-6 bg-gradient-to-b from-[#8933BA] to-[#D82370] cursor-pointer hover:opacity-90">
            Get Started
          </button>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-10 md:flex flex-col md:flex-row xl:gap-12 lg:relative">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 xl:flex xl:justify-end">
          <img
            src="/images/still.jpg"
            alt="still"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase font-bold mb-4">
            Still Not Sure Where to Start?
          </h2>

          <div className="w-1/2 sm:w-2/3 lg:w-1/2 my-4 border border-solid border-[#8933BA]"></div>

          <p className="text-sm sm:text-base lg:text-lg text-justify mb-4">
            Share real-time insights by monitoring mentions of your brand,
            company, products, and competitors. Measure the impact of your
            social marketing campaigns through comprehensive social channel
            reporting.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "Choose the right plan",
              "Choose the right plan",
              "Start your free trial",
              "Attend free classes for beginners",
              "Charging less sounds good to me",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span>•</span>
                <p className="text-sm sm:text-base lg:text-lg">{item}</p>
              </li>
            ))}
          </ul>

          <button className="text-sm sm:text-base font-medium rounded-md py-2 px-4 text-white bg-gradient-to-b from-[#8933BA] to-[#D82370] hover:opacity-90 transition">
            Sounds good to me
          </button>
        </div>
      </div>

      <NewsletterSection />
    </>
  );
}
