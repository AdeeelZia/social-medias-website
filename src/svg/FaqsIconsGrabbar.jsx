import React from "react";

export const PLUS_ICON = ({ customClass }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={customClass}
  >
    <path
      d="M12 5V19"
      stroke="url(#paint0_linear_45_5074)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 12H19"
      stroke="url(#paint1_linear_45_5074)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_45_5074"
        x1="12.5"
        y1="5"
        x2="12.5"
        y2="19"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8933BA" />
        <stop offset="1" stopColor="#D82370" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_45_5074"
        x1="12"
        y1="12"
        x2="12"
        y2="13"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8933BA" />
        <stop offset="1" stopColor="#D82370" />
      </linearGradient>
    </defs>
  </svg>
);

export const CLOSE_ICON = ({ customClass }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={customClass}
  >
    <path
      d="M6 6L18 18"
      stroke="url(#paint0_linear)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 18L18 6"
      stroke="url(#paint1_linear)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="6"
        y1="6"
        x2="18"
        y2="18"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8933BA" />
        <stop offset="1" stopColor="#D82370" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="6"
        y1="18"
        x2="18"
        y2="6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8933BA" />
        <stop offset="1" stopColor="#D82370" />
      </linearGradient>
    </defs>
  </svg>
);
