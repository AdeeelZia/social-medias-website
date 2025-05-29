import React from "react";

const Input = ({
  mainDiv,
  label,
  type = "text",
  placeholder,
  onChange,
  customClass,
}) => {
  return (
    <div className={mainDiv}>
      {label && (
        <label className="text-sm font-medium mb-3 text-[#272B41]">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`py-2 px-4 text-sm border border-[#E3E6EF] rounded-sm text-[#56565680] ${customClass}`}
      />
    </div>
  );
};

export default Input;
