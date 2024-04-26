import React from "react";
import Navbar from "@/components/Navbar";

const layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    Footer
  </>
);

export default layout;
