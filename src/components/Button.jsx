import React from "react";

const Button = ({ children, handleonClick }) => {
  return (
    <button
      onClick={handleonClick}
      className="bg-primary rounded-lg px-4 py-2 text-white border-2 border-primary w-fit hover:bg-transparent hover:text-primary duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
