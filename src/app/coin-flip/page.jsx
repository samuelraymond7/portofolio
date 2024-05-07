"use client";

import React, { useState } from "react";
import Image from "next/image";
import { head, tail } from "../../../public";
import "./coin.css";

let coinFace = "";
const page = () => {
  const [randNum, setrandNum] = useState();
  const coinFlip = () => {
    setrandNum(Math.random());
    if (randNum > 1 / 2) {
      coinFace = "heads";
    } else {
      coinFace = "tails";
    }
    console.log(randNum);
  };

  return (
    <section className=" bg-hero bg-cover bg-no-repeat bg-center w-full h-screen sm:px-16 px-6 pt-[17vh]">
      <div className="green-pink-gradient p-[1px] rounded-xl mx-auto w-full xs:w-[400px] ">
        <div className=" w-full bg-[#050816] p-3 py-5 rounded-xl flex flex-col justify-center items-center gap-7">
          <h2 className="text-white font-bold sm:text-[25px] xs:text-[20px] text-[15px]">
            Coin Flip
          </h2>

          <div id="coin" className={coinFace}>
            <Image
              src={head}
              alt="head"
              width={100}
              height={100}
              className="side-a object-contain w-[100px] h-[100px]"
            />

            <Image
              src={tail}
              alt="tail"
              width={100}
              height={100}
              className="side-b object-contain w-[100px] h-[100px]"
            />
          </div>

          <button
            type="button"
            className=" w-[60%] flex items-center justify-center rounded-lg py-2 text-[17px] font-medium transition-all outline-none bg-transparent coin-button duration-200"
            onClick={() => {
              coinFlip();
            }}
          >
            SPIN
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
