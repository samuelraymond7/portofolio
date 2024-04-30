import React from "react";
import { Navbar } from "@/components";

const layout = ({ children }) => (
  <>
    <Navbar />
    <main className=" bg-[#050816]">{children}</main>
  </>
);

export default layout;
