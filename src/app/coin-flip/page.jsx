"use client";

import React from "react";
import Image from "next/image";
import { head } from "../../../public";

const page = () => (
  <section className=" bg-hero bg-cover bg-no-repeat bg-center w-full h-screen sm:px-16 px-6 pt-[17vh]">
    <div className="green-pink-gradient p-[1px] rounded-xl mx-auto w-full xs:w-[400px] ">
      <div className=" w-full bg-[#050816] p-3 py-5 rounded-xl flex flex-col justify-center items-center gap-7">
        <h2 className="text-white font-bold sm:text-[25px] xs:text-[20px] text-[15px]">
          Coin Flip
        </h2>

        <Image src={head} alt="coin" width={100} height={100} />
        <div className=" w-[60%] bg-blue-200">button</div>
      </div>
    </div>
  </section>
);

export default page;
