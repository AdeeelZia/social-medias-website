import React from "react";
import { LOGO } from "../svg/Logo";
import { Heading } from "../components/common/common";
import {
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  TWITTER_ICON,
  RIGHT_ARROW_ICON,
} from "../svg/FooterIconsGrabbar";

const FooterLinkGroup = ({ title, links }) => (
  <div className="w-full sm:w-auto">
    <Heading
      level={3}
      text={title}
      customStyleHeading="!text-start mb-4"
      gradient
    />
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li
          key={index}
          className="text-sm font-normal text-[#565656] cursor-pointer hover:text-black transition-colors"
        >
          {link}
        </li>
      ))}
    </ul>
  </div>
);

// Main Footer component
const Footer = () => {
  const socialIcons = [FACEBOOK_ICON, INSTAGRAM_ICON, TWITTER_ICON];

  const footerLinkSections = [
    {
      title: "Quick Links",
      links: ["Why Social Medias", "What We Do", "Pricing", "Faqs", "Login"],
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Contact"],
    },
  ];

  return (
    <footer className="py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:justify-between">
        {/* Left Column */}
        <div className="md:w-1/2">
          <div className="mb-4">
            <LOGO width={178} height={49} />
          </div>
          <p className="text-sm text-[#565656] leading-6 mb-4 md:w-2/3">
            Social media feeds display content from your connected social
            accounts and help you engage in industry conversations. Use streams
            to monitor activity across all accounts.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((Icon, idx) => (
              <Icon key={idx} />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Link Groups */}
          {footerLinkSections.map((section, index) => (
            <FooterLinkGroup
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}

          {/* Subscribe */}
          <div className="col-span-1 sm:col-span-2">
            <Heading level={3} text="Subscribe" />
            <p className="text-sm text-[#565656] mb-3">
              Subscribe to get the latest property and blog updates from us.
            </p>
            <div className="flex items-center border rounded overflow-hidden max-w-md">
              <input
                type="text"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button className="bg-black text-white p-2">
                <RIGHT_ARROW_ICON />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
