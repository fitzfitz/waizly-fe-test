import React from "react";

interface IIconButton
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  className?: string;
}

const IconButton = ({ className, ...other }: IIconButton) => {
  return (
    <button
      className={`grid h-7 w-7 place-items-center rounded-full transition hover:bg-gray-100 ${className || ""}`}
      {...other}
    />
  );
};

export default IconButton;
