"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

const Carousel = ({ display }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const clickLeft = () =>
    imageIndex - 1 === -1
      ? setImageIndex(display.length - 1)
      : setImageIndex(imageIndex - 1);

  const clickRight = () =>
    imageIndex + 1 === display.length
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      clickRight();
    }, 10000);

    return () => clearInterval(interval);
  }, [imageIndex]);

  return (
    <div className="max-lg:w-full flex justify-center items-center lg:absolute lg:right-0 lg:top-[35%]">
      <div
        className="z-10 p-2 bg-slate-400 opacity-90 rounded-full mr-[-10px] md:mr-[-20px] cursor-pointer"
        onClick={() => {
          clickLeft();
        }}
      >
        <RiArrowLeftSLine className=" text-[15px] sm:text-[25px] md:text-[35px]" />
      </div>

      <Link href="#projects" rel="noopener noreferrer">
        <Image
          src={display[imageIndex].image}
          alt="Hero Logo"
          width={1920}
          height={1080}
          className=" object-contain rounded-xl z-0 max-w-[700px] border-slate-500 border-2 max-lg:w-4/5 cursor-pointer"
        />
      </Link>

      <div
        className="z-10 p-2 bg-slate-400 opacity-90 rounded-full ml-[-10px]  md:ml-[-20px] cursor-pointer"
        onClick={() => {
          clickRight();
        }}
      >
        <RiArrowRightSLine className=" text-[15px] sm:text-[25px] md:text-[35px]" />
      </div>
    </div>
  );
};

export default Carousel;
