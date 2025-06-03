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
    <footer className="bg-white border-t border-[#C4C4C480] mt-10">
      <div className="sm-container py-10 px-4 space-y-8 flex gap-32">
        <div className="">
          <LOGO className="max-w-44 mb-4" />
          <p className="text-sm text-[#565656] max-w-xl">
            Social media feeds display content from your connected social
            accounts and help you engage in industry conversations. Use streams
            to monitor activity across all accounts.
          </p>
          <div className="flex gap-3">
            {socialIcons.map((Icon, index) => (
              <Icon
                key={index}
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            ))}
          </div>
        </div>

        {/* Grid Layout for Links and Subscription */}
        <div className="grid grid-cols-3 gap-24">
          {/* Footer Links */}
          {footerLinkSections.map((section, index) => (
            <FooterLinkGroup
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}

          {/* Subscription Form */}
          <div className="md:col-span-1">
            <Heading
              level={3}
              text="Subscribe"
              customStyleHeading="!text-lg !font-semibold !text-start mb-3.5"
              gradient
            />
            <p className="text-sm text-[#565656] mb-3.5">
              Subscribe to get the latest property and blog updates from us.
            </p>
            <form className="w-full flex items-center border rounded-[0.938rem] overflow-hidden">
              <Input
                placeholder="Email Address"
                type="email"
                customStyleInput="!w-full !text-sm !p-3 !border-none !rounded-none !outline-none"
                aria-label="Email Address"
              />
              <Button
                type="submit"
                customStyleButton="!p-3 !rounded-full"
                gradient
              >
                <RIGHT_ARROW_ICON />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center px-4 py-3 bg-gradient-to-r from-[#8933BA] to-[#D82370]">
        <p className="text-[.65rem] text-white mb-2 sm:mb-0 text-center">
          Social Medias developed by AFS Square © {new Date().getFullYear()}
        </p>
        <a href="#top" aria-label="Back to top">
          <TOP_ARROW_ICON className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
