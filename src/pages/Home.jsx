import React from "react";
import NewsletterSection from "../components/NewsletterSection";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import Banner from "../components/Banner";
import StartSection from "../components/StartSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <Banner />
      <StartSection />
      <NewsletterSection />
    </>
  );
}
