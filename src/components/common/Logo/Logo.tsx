import React from "react";
import type { LogoInterface } from "./Logo.Iterface";

const Logo: React.FC<LogoInterface> = ({
  text = "Letschat",
  className = "",
}) => {
  return (
    <h1
      className={`text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-violet-700 text-transparent bg-clip-text ${className}`}
    >
      {text}
    </h1>
  );
};

export default Logo;
