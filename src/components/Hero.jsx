import React from "react";

const Hero = () => (
  <section className=" bg-hero bg-cover bg-no-repeat bg-center relative w-full h-screen ">
    <div className=" 2xl:px-0 sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
      <div className=" flex flex-col justify-center items-center mt-5">
        <div className=" w-5 h-5 rounded-full bg-[#915eff]" />
        <div className=" w-1 sm:h-80 h-40 violet-gradient" />
      </div>

      <div>
        <h1>
          Hi, I&apos;m <span className=" text-[#915eff]">Samuel</span>
        </h1>
        <p>
          I develop user interfaces <br className=" sm:block hidden" />
          and web applications
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
