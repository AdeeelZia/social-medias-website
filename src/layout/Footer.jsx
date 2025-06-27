import React from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../svg/Logo";
import {
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  TWITTER_ICON,
} from "../svg/SocialIconsGrabbar";

export default function Footer() {
  const SocialIcons = [
    { icon: FACEBOOK_ICON, path: "/" },
    { icon: INSTAGRAM_ICON, path: "/" },
    { icon: TWITTER_ICON, path: "/" },
  ];

  const GroupLinks = [
    {
      title: "Quick Links",
      links: [
        { text: "Why Social Media", path: "/" },
        { text: "What We Do", path: "/" },
        { text: "Pricing", path: "/" },
        { text: "FAQS", path: "/" },
        { text: "Login", path: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms of Service", path: "/" },
        { text: "Privacy Policy", path: "/" },
        { text: "Contact Us", path: "/" },
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 sm-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <LOGO />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Social Medias are feeds that display the content from your
              connected social accounts and let you take part in industry
              conversations. You can use streams to monitor activity across all
              of your accounts.
            </p>
            <div className="flex space-x-4">
              {SocialIcons.map((item, index) => (
                <Link key={index} to={item.path}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links & Legal Links */}
          {GroupLinks.map((group, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-purple-600 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-purple-600 text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe Section */}
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-4">
              Subscribe
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to get latest property, blog news from us.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                required
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 7.00024H12.9999"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.00015 1L13.0001 7L7.00015 13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="text-white text-sm">
            Social Medias developed by AFS Square © 2022
          </p>
          <button className="text-white hover:text-gray-200 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
            >
              <g clipPath="url(#clip0_45_463)">
                <path
                  d="M23.2182 20.509V34.1817H19.6462V20.509H7.14407L21.4322 6.83643L35.7204 20.509H23.2182Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_45_463">
                  <rect width="42.8645" height="41.0178" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
