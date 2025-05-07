import React from "react";

const Heading = ({ text, level = 2, customStyleHeading = "" }) => {
  const Tag = `h${level}`;

  return (
    <Tag
      className={`text-base font-bold text-center text-[#110229] ${customStyleHeading}`}
    >
      {text}
    </Tag>
  );
};

export default Heading;
