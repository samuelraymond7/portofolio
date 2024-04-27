"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
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
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList
              trigger="Home"
              className="peer-hover/Home:flex peer-focus/Home:flex"
            >
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
              className="peer-hover/Games:flex peer-focus/Games:flex"
            >
              No games available yet
            </NavigationMenuList>

            <Link
              className="flex h-10 items-center justify-center rounded-md px-4 py-2 text-[17px] font-medium transition-colors outline-none bg-transparent hover:bg-slate-800 hover:text-slate-50"
              href="https://www.linkedin.com/in/samuel-raymond-pranowo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </Link>
          </NavigationMenu>

          <div className=" flex md:hidden fixed top-0 right-0 hover:w-44 sm:hover:w-64 h-full hover:bg-black hover:bg-opacity-60 transition-all duration-200 ease-out group flex-col pointer-events-none">
            <div className="flex justify-start items-center py-4 px-2 group-hover:bg-slate-800 group-hover:bg-opacity-70 transition-all duration-200 ease-out pointer-events-auto">
              <MdKeyboardDoubleArrowLeft
                className="group-hover:rotate-180 transition-all duration-200 ease-in"
                size={40}
              />
              <p className="hidden opacity-0 group-hover:block group-hover:opacity-100 transition-all ease-in duration-200 mx-auto text-[17px] font-medium">
                MENU
              </p>
            </div>

            <ul className=" pointer-events-auto">
              <li className=" group-hover:block hidden">tes</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
