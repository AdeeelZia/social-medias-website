import React from "react";

const Button = ({ text, children, onClick, customClass, gradient = false }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 text-sm font-semibold rounded-md ${customClass}`}
      style={{ background: gradient ? "linear-gradient(to bottom, #8933BA, #D82370)" : undefined, }}
    >
      {text || children}
    </button>
  );
};

export default Button;
