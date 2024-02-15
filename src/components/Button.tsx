import React from "react";

interface IButton
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  className?: string;
}

const Button = ({ className, ...other }: IButton) => {
  return (
    <button
      className={`min-h-10 rounded-md bg-blue-600 px-2 text-sm text-white transition hover:bg-blue-700 ${className || ""}`}
      {...other}
    />
  );
};

export default Button;
