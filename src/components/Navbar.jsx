"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";

const Navbar = () => (
  <header className=" sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-transparent">
    <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
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

      <Button>Button</Button>
    </div>
  </header>
);

export default Navbar;
