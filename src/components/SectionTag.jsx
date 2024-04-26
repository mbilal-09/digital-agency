import React from "react";

const SectionTag = ({ children }) => {
  return (
    <p className="text-white font-semibold bg-primary w-fit px-2 rounded-full">
      {children}
    </p>
  );
};

export default SectionTag;
