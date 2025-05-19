import React from "react";

const Button = ({
  text,
  children,
  onClick,
  customClass,
  gradient = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold rounded-md transition-transform transform focus:outline-none ${customClass}`}
      style={{
        background: gradient
          ? "linear-gradient(to bottom, #8933BA, #D82370)"
          : "",
      }}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
