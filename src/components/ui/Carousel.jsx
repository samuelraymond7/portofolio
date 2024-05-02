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
    <div className="max-sm:w-full sm:max-h-[50%] flex justify-center items-center lg:ml-auto lg:mt-[-150px] xl:max-h-[60%] xl:mt-[-200px]">
      <div
        className="z-10 p-2 bg-slate-400 opacity-90 rounded-full mr-[-10px] md:mr-[-20px] cursor-pointer"
        onClick={() => {
          clickLeft();
        }}
      >
        <RiArrowLeftSLine className=" text-[15px] sm:text-[25px] md:text-[35px]" />
      </div>

      <Link href="#projects" rel="noopener noreferrer" className=" h-full">
        <Image
          src={display[imageIndex].image}
          alt="Hero Logo"
          width={1920}
          height={1080}
          className=" object-contain rounded-xl h-full w-auto border-slate-500 border-2 z-0 max-sm:max-h-[250px] xl:max-h-[400px]"
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
