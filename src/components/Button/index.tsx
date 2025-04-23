import React from "react";
import { ButtonProps } from "../../types/types";

const Button: React.FC<ButtonProps> = ({
  text,
  icon: Icon,
  className = "",
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center ${className}`}
    >
      {Icon && <Icon className="icon-social" />}
      {text}
    </button>
  );
};

export default Button;