import React from "react";

const Input = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  customClass,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`py-2 px-4 text-sm border text-[#56565680] ${customClass}`}
    />
  );
};

export default Input;
