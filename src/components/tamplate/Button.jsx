/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ setOpen, color, text, disabled }) => {
  return (
    <button
      className={`bg-[${color}] flex justify-center items-center p-[10px] rounded-md w-fit text-sm h-[30px] font-semibold ${
        disabled && "opacity-80"
      }`}
      onClick={setOpen}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
