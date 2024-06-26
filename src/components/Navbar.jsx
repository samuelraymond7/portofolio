"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, games } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuContent,
} from "./ui/Menubar";
import { SideMenu, SideMenuContent, SideMenuList } from "./ui/Sidebar";

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
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-40 ${navScroll ? "bg-black" : "bg-transparent"}`}
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
          <p className=" text-white text-[18px] font-semibold flex">
            Samuel Raymond &nbsp;
            <span className=" lg:block hidden">| Web Developer</span>
          </p>
        </Link>

        {/* NavBar */}
        <nav>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList trigger="Home">
              {navLinks.map((nav) => (
                <NavigationMenuContent
                  key={nav.id}
                  title={nav.title}
                  link={nav.link}
                >
                  {nav.content}
                </NavigationMenuContent>
              ))}
            </NavigationMenuList>

            <NavigationMenuList trigger="Games">
              {games.map((game) => (
                <NavigationMenuContent
                  key={game.id}
                  title={game.title}
                  link={game.link}
                />
              ))}
            </NavigationMenuList>

            <Link
              className="flex h-10 items-center justify-center rounded-lg px-4 py-2 text-[17px] font-medium transition-colors outline-none bg-transparent hover:bg-slate-800 hover:text-slate-50 duration-200"
              href="https://www.linkedin.com/in/samuel-raymond-pranowo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </Link>
          </NavigationMenu>

          <SideMenu MenuTitle="Menu">
            <Link
              className="rounded-xl w-full p-3 justify-between items-center flex hover:bg-slate-800 hover:bg-opacity-70 text-[17px]"
              href="https://www.linkedin.com/in/samuel-raymond-pranowo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </Link>

            <SideMenuList trigger="Home">
              {navLinks.map((nav) => (
                <SideMenuContent key={nav.id} title={nav.title} link={nav.link}>
                  {nav.content}
                </SideMenuContent>
              ))}
            </SideMenuList>

            <SideMenuList trigger="Game">
              {games.map((game) => (
                <SideMenuContent
                  key={game.id}
                  title={game.title}
                  link={game.link}
                />
              ))}
            </SideMenuList>
          </SideMenu>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
