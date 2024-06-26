import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Button = ({ children, arrow = true, tipe = "button", className }) => (
  <button
    type={tipe === "button" ? "button" : "submit"}
    className={`flex h-10 items-center justify-center rounded-lg px-4 py-2 text-[17px] font-medium transition-colors outline-none bg-transparent hover:bg-slate-800 hover:text-slate-50 duration-200 ${className} `}
  >
    {children}
    {arrow && (
      <MdOutlineArrowDropDown className=" ml-1 group-hover:rotate-180 transition duration-200" />
    )}
  </button>
);

export default Button;
