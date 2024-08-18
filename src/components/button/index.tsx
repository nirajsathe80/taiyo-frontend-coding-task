import React from "react";

interface ButtonProps {
  buttonText: string;
  type?: "button" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({ buttonText, onClick, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
