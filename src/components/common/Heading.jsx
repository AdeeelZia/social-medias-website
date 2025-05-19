import React from "react";

const Heading = ({
  text,
  level = 2,
  alignment = "center",
  customClass,
  gradient = false,
}) => {
  const Tag = `h${level}`;

  return (
    <Tag
      className={`text-base font-bold ${alignment} ${customClass} ${
        gradient
          ? "bg-gradient-to-r from-[#8933BA] to-[#D82370] text-transparent bg-clip-text"
          : "text-[#110229]"
      }`}
    >
      {text}
    </Tag>
  );
};

export default Heading;
