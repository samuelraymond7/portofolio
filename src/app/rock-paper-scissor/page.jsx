"use client";

import React from "react";
import Image from "next/image";
import { rockpaperscissor } from "@/constants";

const page = () => {
  let compMove = "";
  let result = "";
  let gameScore = {
    gameWin: 0,
    gameLose: 0,
    gameTie: 0,
  };
  const pickCompMove = () => {
    const randNum = Math.random();
    if (randNum > 2 / 3) {
      compMove = "rock";
    } else if (randNum > 1 / 3) {
      compMove = "paper";
    } else {
      compMove = "scissor";
    }
  };

  const rpsGame = (gameInput) => {
    pickCompMove();
    if (gameInput === "rock") {
      if (compMove === "rock") {
        result = "tie";
        gameScore.gameTie += 1;
      } else if (compMove === "paper") {
        result = "lose";
        gameScore.gameLose += 1;
      } else {
        result = "win";
        gameScore.gameWin += 1;
      }
    } else if (gameInput === "paper") {
      if (compMove === "rock") {
        result = "win";
        gameScore.gameWin += 1;
      } else if (compMove === "paper") {
        result = "tie";
        gameScore.gameTie += 1;
      } else {
        result = "lose";
        gameScore.gameLose += 1;
      }
    } else if (gameInput === "scissor") {
      if (compMove === "rock") {
        result = "lose";
        gameScore.gameLose += 1;
      } else if (compMove === "paper") {
        result = "win";
        gameScore.gameWin += 1;
      } else {
        result = "tie";
        gameScore.gameTie += 1;
      }
    }
    console.log(result);
  };
  return (
    <section className=" bg-hero bg-cover bg-no-repeat bg-center w-full h-screen sm:px-16 px-6 pt-[17vh]">
      <div className="green-pink-gradient p-[1px] rounded-xl mx-auto w-full xs:w-[400px] ">
        <div className=" w-full bg-[#050816] p-3 rounded-xl flex flex-col justify-center items-center gap-7">
          <h2 className="text-white font-bold sm:text-[25px] xs:text-[20px] text-[15px]">
            Rock Paper Scissor Game
          </h2>

          <div className=" w-full flex flex-row justify-evenly items-center">
            {rockpaperscissor.map((icon) => (
              <button
                className="green-pink-gradient p-[2px] rounded-full"
                key={icon.name}
                type="button"
                onClick={() => {
                  rpsGame(icon.name);
                }}
              >
                <div className="p-5 bg-[#151030] rounded-full">
                  <Image
                    src={icon.icon}
                    alt={icon.name}
                    height={40}
                    width={40}
                  />
                </div>
              </button>
            ))}
          </div>

          {result && (
            <h3>
              <p>tes</p>
            </h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
