"use client";

import React, { useState } from "react";
import Image from "next/image";
import { rockpaperscissor } from "@/constants";
import { paper, rock, scissor } from "../../../public";

let compMove = "";
let pMove = "";
let result = "";

const page = () => {
  const [gameScore, setgameScore] = useState({
    gameWin: 0,
    gameLose: 0,
    gameTie: 0,
  });

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
    pMove = gameInput;
    if (gameInput === "rock") {
      if (compMove === "rock") {
        result = "tie";
        setgameScore({ ...gameScore, gameTie: gameScore.gameTie + 1 });
      } else if (compMove === "paper") {
        result = "lose";
        setgameScore({ ...gameScore, gameLose: gameScore.gameLose + 1 });
      } else {
        result = "win";
        setgameScore({ ...gameScore, gameWin: gameScore.gameWin + 1 });
      }
    } else if (gameInput === "paper") {
      if (compMove === "rock") {
        result = "win";
        setgameScore({ ...gameScore, gameWin: gameScore.gameWin + 1 });
      } else if (compMove === "paper") {
        result = "tie";
        setgameScore({ ...gameScore, gameTie: gameScore.gameTie + 1 });
      } else {
        result = "lose";
        setgameScore({ ...gameScore, gameLose: gameScore.gameLose + 1 });
      }
    } else if (gameInput === "scissor") {
      if (compMove === "rock") {
        result = "lose";
        setgameScore({ ...gameScore, gameLose: gameScore.gameLose + 1 });
      } else if (compMove === "paper") {
        result = "win";
        setgameScore({ ...gameScore, gameWin: gameScore.gameWin + 1 });
      } else {
        result = "tie";
        setgameScore({ ...gameScore, gameTie: gameScore.gameTie + 1 });
      }
    }
  };
  return (
    <section className=" bg-hero bg-cover bg-no-repeat bg-center w-full h-screen sm:px-16 px-6 pt-[17vh]">
      <div className="green-pink-gradient p-[1px] rounded-xl mx-auto w-full xs:w-[400px] ">
        <div className=" w-full bg-[#050816] p-3 py-5 rounded-xl flex flex-col justify-center items-center gap-7">
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
            <>
              <h3 className=" text-white font-semibold sm:text-[20px] text-[15px]">
                You {result.toUpperCase()}
              </h3>
              <div className="flex justify-center items-center sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider">
                <span>You&#8192;</span>
                <Image
                  src={
                    pMove === "rock"
                      ? rock
                      : pMove === "paper"
                        ? paper
                        : scissor
                  }
                  alt={pMove}
                  width={20}
                  height={20}
                />
                <span>&#8192;-&#8192;</span>
                <Image
                  src={
                    compMove === "rock"
                      ? rock
                      : compMove === "paper"
                        ? paper
                        : scissor
                  }
                  alt={compMove}
                  width={20}
                  height={20}
                />
                <span>&#8192;Com</span>
              </div>
              <p className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider">
                Win:&#32;{gameScore.gameWin} Tie:&#32;{gameScore.gameTie}{" "}
                Lose:&#32;{gameScore.gameLose}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
