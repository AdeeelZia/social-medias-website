import React from "react";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import CallToActionSection from "../../components/CallToActionSection";
import ServicesSection from "../../components/ServicesSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import NewsletterSection from "../../components/NewsletterSection";
import DecisionSection from "../../components/DecisionSection";
import {
  USER_ICON,
  ANALYTICS_ICON,
  TOP_TREND,
  TIME_ICON,
} from "../../svg/HomeIconsGrabbar";

export default function Home() {
  const Services = [
    {
      // Icon: USER_ICON,
      title: "Light up your profiles",
      description:
        "Schedule and publish content to all of your social profiles, track effectiveness in real time, and crank the volume on your top-performing content.",
    },
    {
      // Icon: ANALYTICS_ICON,
      title: "Plan your content with ease",
      description:
        "View all of your social media content in one calendar. Easily see all your scheduled and published content, create new posts, and organize existing ones.",
    },
    {
      // Icon: TIME_ICON,
      title: "Stay on top of trends",
      description:
        "Set up customizable streams that let you monitor trends and stay notified about your business, customers, competitors, or any topic that you’re curious about.",
    },
    {
      // Icon: TIME_ICON,
      title: "Post on time, every time",
      description:
        "Get actionable insights on the best times to post without the heavy data crunching. We have Professional Team to help you to grow your reach and get more business on social media.",
    },
  ];
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CallToActionSection />
      <DecisionSection />

      <div className="sm-container grid grid-cols-2 gap-x-14 gap-y-10">
        {Services.map((item, index) => {
          return (
            <ServicesSection
              key={index}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>

      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
