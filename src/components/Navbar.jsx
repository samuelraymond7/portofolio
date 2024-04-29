"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { navLinks } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuContent,
} from "./ui/Menubar";

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 76) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);
  const [sideBarActive, setSideBarActive] = useState(false);

  return (
    <header
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${navScroll ? "bg-black" : "bg-transparent"}`}
    >
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo dan Nama */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Image
            src="./icon.svg"
            alt="logo"
            className="w-9 h-9 object-contain"
            width={10}
            height={10}
          />
          <p className=" text-white text-[18px] font-bold flex">
            Samuel Raymond &nbsp;
            <span className=" lg:block hidden">| Web Developer</span>
          </p>
        </Link>

        {/* NavBar */}
        <nav>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList trigger="Home" className="peer-hover/Home:flex">
              {navLinks.map((nav) => (
                <NavigationMenuContent
                  key={nav.id}
                  id={nav.id}
                  title={nav.title}
                  link={nav.link}
                >
                  {nav.content}
                </NavigationMenuContent>
              ))}
            </NavigationMenuList>

            <NavigationMenuList
              trigger="Games"
              className="peer-hover/Games:flex"
            >
              No games available yet
            </NavigationMenuList>

            <Link
              className="flex h-10 items-center justify-center rounded-md px-4 py-2 text-[17px] font-medium transition-colors outline-none bg-transparent hover:bg-slate-800 hover:text-slate-50 duration-200"
              href="https://www.linkedin.com/in/samuel-raymond-pranowo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </Link>
          </NavigationMenu>

          <div
            className={`flex lg:hidden fixed top-0 right-0 ${sideBarActive && "w-44 sm:w-64 md:w-80 bg-black bg-opacity-60"} h-full transition-all duration-200 ease-out flex-col`}
          >
            <div
              className={`flex justify-start items-center py-4 px-2 ${sideBarActive && "bg-slate-800 bg-opacity-70"} transition-all duration-200 ease-out cursor-pointer`}
              onClick={() => setSideBarActive((prev) => !prev)}
            >
              <MdKeyboardDoubleArrowLeft
                className={`transition-all duration-200 ease-in ${sideBarActive && "rotate-180"}`}
                size={40}
              />

              <p
                className={` ${sideBarActive ? "mx-auto" : "mx-1"}  transition-all ease-in duration-200 text-[21px] font-medium`}
              >
                MENU
              </p>
            </div>

            <ul
              className={` ${sideBarActive ? "block opacity-100" : "hidden opacity-0"}  transition-all ease-in duration-200 font-medium p-2`}
            >
              <li className="rounded-xl w-full group hover:bg-slate-900 hover:bg-opacity-70">
                <div className="rounded-xl w-full p-3 justify-between items-center flex group-hover:bg-slate-800 group-hover:bg-opacity-70">
                  <p className=" text-[17px]">Home</p>
                  <IoIosArrowDown className=" group-hover:rotate-180 transition-all duration-200" />
                </div>

                <ul className="px-3 py-1 group-hover:block hidden scale-up-ver-top *:rounded-xl *:p-3 *:my-1">
                  <li className="hover:bg-slate-800 hover:bg-opacity-70">
                    <div className="text-[15px] font-medium leading-none">
                      Judul
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                      Anak
                    </p>
                  </li>

                  <li className="hover:bg-slate-800 hover:bg-opacity-70">
                    <div className="text-[15px] font-medium leading-none">
                      Judul
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                      Anak
                    </p>
                  </li>

                  <li className="hover:bg-slate-800 hover:bg-opacity-70">
                    <div className="text-[15px] font-medium leading-none">
                      Judul
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                      Anak
                    </p>
                  </li>
                </ul>
              </li>

              <div className="bg-white h-[1px] w-full rounded-full my-2 scale-up-ver-top" />
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
