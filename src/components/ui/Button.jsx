import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Button = ({ children, arrow = true }) => (
  <button
    type="button"
    className="group flex h-10 items-center justify-center rounded-md px-4 py-2 text-[17px] font-medium transition-colors outline-none bg-transparent hover:bg-slate-800 hover:text-slate-50 focus:bg-slate-900 "
  >
    {children}
    {arrow && <MdOutlineArrowDropDown className=" ml-1" />}
  </button>
);

export default Button;
