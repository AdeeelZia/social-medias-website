import React from "react";
import { LOGO } from "../svg/Logo";
import { Heading } from "../components/common/common";
import Input from "../components/common/Input";
import {
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  TWITTER_ICON,
  RIGHT_ARROW_ICON,
  TOP_ARROW_ICON,
} from "../svg/FooterIconsGrabbar";

const FooterLinks = ({ title, links }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
      <Heading text={title} gradient customStyleHeading="!text-start" />
      <ul className="flex flex-col gap-y-5 text-[#565656]">
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const socialIcons = [FACEBOOK_ICON, INSTAGRAM_ICON, TWITTER_ICON];

  const footerLinksData = [
    {
      title: "Quick Links",
      links: ["Why Social Medias", "What We Do", "Pricing", "FAQS", "Login"],
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Contact Us"],
    },
  ];

  return (
    <footer>
      <div className="SMC px-4 py-6 md:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center sm:text-left">
          <LOGO />
          <p className="text-justify text-base font-normal text-[#565656] py-1 lg:w-[75%] mx-auto">
            Social Medias are feeds that display the content from your connected
            social accounts and let you take part in industry conversations. You
            can use streams to monitor activity across all of your accounts.
          </p>
          <div className="flex justify-center items-center gap-x-4 py-3 lg:justify-start">
            {socialIcons.map((IconComponent, index) => (
              <IconComponent key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {footerLinksData.map((item, index) => (
            <FooterLinks key={index} title={item.title} links={item.links} />
          ))}
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="text-lg font-bold gradient-text py-2">Subscribe</div>
          <p className="text-[#565656] pb-2">
            Subscribe to get the latest property, blog news from us.
          </p>
          <div className="flex items-center border rounded-2xl px-2 py-[5px] gap-2">
            <Input
              placeholder="Enter your email"
              customStyleInput="!border-none"
            />
            <button className="p-2 rounded-full bg-gradient-to-b from-[#8933BA] to-[#D82370] hover:opacity-90">
              <RIGHT_ARROW_ICON />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 px-4 sm:px-8 lg:px-16 h-12 flex justify-between items-center bg-gradient-to-b from-[#8933BA] to-[#D82370]">
        <p className="text-xs sm:text-base text-white">
          Social Medias developed by AFS Square © 2022
        </p>
        <TOP_ARROW_ICON />
      </div>
    </footer>
  );
};

export default Footer;
