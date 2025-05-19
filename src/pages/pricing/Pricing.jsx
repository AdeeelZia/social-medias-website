import React from "react";
import { Heading } from "../../components/common/common";
import PricingCard from "../../components/ui/PricingCard";
import NewsletterSection from "../../components/NewsletterSection";

export default function Pricing() {
  const pricingData = [
    {
      planName: "Professional",
      planPrice: "49",
      features: [
        "1 User",
        "10 Social accounts",
        "Unlimited posts",
        "Post scheduling",
        "Access to messages in one inbox",
      ],
    },
    {
      planName: "Team",
      planPrice: "249",
      features: [
        "3 Users",
        "20 Social accounts",
        "Unlimited posts",
        "Post scheduling",
        "Access to messages in one inbox",
        "Roles & permissions",
        "Assign posts to team members",
      ],
    },
    {
      planName: "Business",
      planPrice: "739",
      features: [
        "5 Users",
        "35 Social accounts",
        "Unlimited posts",
        "Post scheduling",
        "Access to messages in one inbox",
        "Roles & permissions",
        "Assign posts to team members",
        "Approval workflows",
        "Access to messages in one inbox",
        "Inbound/outbound tagging",
        "Content & asset library",
        "Hootsuite customer support",
      ],
    },
    {
      planName: "Enterprise",
      planPrice: "Custom",
      features: [
        "Starts at 5 users",
        "Starts at 50 social accounts",
        "Unlimited posts",
        "Post scheduling",
        "Access to messages in one inbox",
        "Roles & permissions",
        "Assign posts to team members",
        "Approval workflows",
        "Access to messages in one inbox",
        "Inbound/outbound tagging",
        "Content & asset library",
        "Hootsuite customer support",
        "Social ads management",
        "Social ads analytics & reporting",
        "Employee advocacy",
        "Team productivity reporting",
      ],
    },
  ];

  return (
    <>
      <div className="p-4">
        <div className="text-center">
          <Heading
            level={1}
            text="Pricing"
            customStyleHeading="text-3xl font-semibold text-[#110229] text-center pb-6"
          />
          <div className="w-[4.594rem] border mx-24"></div>
          <p className="text-base font-normal text-[#3A3A3A] text-center py-6">
            Our pricing plans are fair, upfront, and transparent.
          </p>
        </div>

        <div className="sm:flex sm:flex-wrap sm:justify-center sm:gap-4 lg:flex-nowrap">
          {pricingData.map((plan, index) => (
            <PricingCard
              key={index}
              tag={plan.planName}
              price={plan.planPrice}
              features={plan.features}
            />
          ))}
        </div>
      </div>
      <NewsletterSection />
    </>
  );
}
