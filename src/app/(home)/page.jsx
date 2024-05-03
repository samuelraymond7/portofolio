import React from "react";
import { About, Experience, Hero, MyProjects, Tech } from "@/components";
import { EarthCanvas } from "@/components/canvas";

const page = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Tech />
    <MyProjects />
    <EarthCanvas />
  </>
);

export default page;
