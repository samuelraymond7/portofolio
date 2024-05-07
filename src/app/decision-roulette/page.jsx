"use client";

import React, { useState } from "react";
import "./decision.css";
import { roulette } from "@/constants";

const page = () => {
  const [choices, setchoices] = useState();
  return (
    <section className=" bg-hero bg-cover bg-no-repeat bg-center w-full h-screen sm:px-16 px-6 pt-[17vh]">
      <div className="green-pink-gradient p-[1px] rounded-xl mx-auto w-full xs:w-[400px] ">
        <div className=" w-full bg-[#050816] p-3 py-5 rounded-xl flex flex-col justify-center items-center gap-7">
          <h2 className="text-white font-bold sm:text-[25px] xs:text-[20px] text-[15px]">
            Decision Roulette
          </h2>

          <div className="green-pink-gradient p-[1px] rounded-xl w-[85%]">
            <div className="bg-[#151030] p-3 rounded-xl">
              <p>{choices ? roulette[choices].choice : "Spin to start"}</p>
            </div>
          </div>

          <button
            type="button"
            className=" w-[60%] flex items-center justify-center rounded-lg py-2 text-[17px] font-medium transition-all outline-none bg-transparent coin-button duration-200"
            onClick={() => {
              setchoices(Math.floor(Math.random() * roulette.length));
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
