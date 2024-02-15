import React from "react";

interface IInput
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
  label?: string;
  className?: string;
  classNames?: {
    container?: string;
    input?: string;
  };
}

const Input = ({ className, classNames, label, ...other }: IInput) => {
  return (
    <div
      className={`flex w-full flex-col gap-2 ${className || ""} ${classNames?.container || ""}`}
    >
      {label ? (
        <label htmlFor={other.id} className="text-xs">
          {label}
        </label>
      ) : null}
      <div className="relative">
        <input
          {...other}
          className={`min-h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition hover:border-gray-400 focus:border-gray-500 ${classNames?.input || ""}`}
        />
      </div>
    </div>
  );
};

export default Input;
