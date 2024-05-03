import React from "react";
import { About, Experience, Hero, MyProjects, Tech } from "@/components";
import { EarthCanvas, StarsCanvas } from "@/components/canvas";

const page = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Tech />
    <MyProjects />
    <div className="relative z-0">
      <EarthCanvas />
      <StarsCanvas />
    </div>
  </>
);

export default page;
