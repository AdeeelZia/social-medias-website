import React from "react";
import { LOGO } from "../svg/Logo";
import { Heading, Input, Button } from "../components/common/common";
import {
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  TWITTER_ICON,
  RIGHT_ARROW_ICON,
  TOP_ARROW_ICON,
} from "../svg/FooterIconsGrabbar";

const FooterLinkGroup = ({ title, links }) => (
  <div>
    <Heading
      level={3}
      text={title}
      customStyleHeading="!text-lg !font-semibold !text-start mb-2"
      gradient
    />
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li
          key={index}
          className="text-sm text-[#565656] cursor-pointer hover:text-black transition-colors"
        >
          {link}
        </li>
      ))}
    </ul>
  </div>
);

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
    <footer>
      <div className="sm-container">
        <LOGO className="max-w-44" />
        <p className="text-sm mb-4 text-[#565656]">
          Social media feeds display content from your connected social accounts
          and help you engage in industry conversations. Use streams to monitor
          activity across all accounts.
        </p>

        <div className="flex gap-2 mb-4">
          {socialIcons.map((Icons, index) => (
            <Icons key={index} />
          ))}
        </div>

        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {footerLinkSections.map((section, index) => (
            <FooterLinkGroup
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}

          <div className="col-span-1 sm:col-span-2">
            <Heading
              level={3}
              text="Subscribe"
              customStyleHeading="!text-lg !font-semibold !text-start mb-3.5"
              gradient
            />
            <p className="text-sm text-[#565656] mb-3.5">
              Subscribe to get the latest property and blog updates from us.
            </p>
            <div className="w-full py-1 px-3 flex items-center rounded-[0.938rem] overflow-hidden border">
              <Input
                placeholder="Email Address"
                customStyleInput="!w-full !text-sm !p-3 !border-none !rounded-none !outline-none"
              />
              <Button customStyleButton="!p-3 !rounded-full" gradient>
                <RIGHT_ARROW_ICON />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center px-4 bg-gradient-to-r from-[#8933BA] to-[#D82370]">
        <p className="text-[.65rem] text-white">
          Social Medias developed by AFS Square © 2022
        </p>
        <TOP_ARROW_ICON className="w-8" />
      </div>
    </footer>
  );
};

export default Footer;
