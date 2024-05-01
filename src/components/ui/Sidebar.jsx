import React, { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const SideMenu = ({ children, MenuTitle }) => {
  const [sideBarActive, setSideBarActive] = useState(false);

  return (
    <div
      className={`flex lg:hidden fixed top-0 right-0 z-50 ${sideBarActive && "w-44 sm:w-64 md:w-80 bg-black bg-opacity-80 h-full"}  transition-all duration-200 ease-out flex-col`}
    >
      <div
        className={`flex justify-start items-center py-6 px-2 ${sideBarActive && "bg-slate-800 bg-opacity-70"} transition-all duration-200 ease-out cursor-pointer`}
        onClick={() => setSideBarActive((prev) => !prev)}
      >
        <MdKeyboardDoubleArrowLeft
          className={`transition-all duration-200 ease-in ${sideBarActive && "rotate-180"}`}
          size={30}
        />

        <p
          className={` ${sideBarActive ? "mx-auto" : "mx-1"}  transition-all ease-in duration-200 text-[17px] font-medium`}
        >
          {MenuTitle}
        </p>
      </div>

      <ul
        className={` ${sideBarActive ? "block opacity-100" : "hidden opacity-0"}  transition-all ease-in duration-200 font-medium p-2`}
      >
        {children}
      </ul>
    </div>
  );
};

const SideMenuList = ({ children, trigger }) => (
  <li className="rounded-xl w-full group hover:bg-slate-900 hover:bg-opacity-70">
    <div className="rounded-xl w-full p-3 justify-between items-center flex group-hover:bg-slate-800 group-hover:bg-opacity-70">
      <p className=" text-[17px]">{trigger}</p>
      <IoIosArrowDown className=" group-hover:rotate-180 transition-all duration-200" />
    </div>

    <ul className="px-3 py-1 group-hover:block hidden scale-up-ver-top">
      {children}
    </ul>
  </li>
);

const SideMenuContent = ({ children, title, link }) => (
  <li>
    <Link
      href={link}
      rel="noopener noreferrer"
      className="hover:bg-slate-800 hover:bg-opacity-70 rounded-xl p-3 my-1 block"
    >
      <div className="text-[15px] font-medium leading-none">{title}</div>
      <p className=" text-sm leading-snug text-slate-300 hidden sm:line-clamp-2">
        {children}
      </p>
    </Link>
  </li>
);

export { SideMenu, SideMenuList, SideMenuContent };
