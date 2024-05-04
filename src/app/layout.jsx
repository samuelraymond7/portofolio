import React from "react";
import "./globals.css";
import { Navbar } from "@/components";

export const metadata = {
  title: "Samuel's Portofolio",
  description: "This is Samuel's Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className=" bg-[#050816]">{children}</main>
      </body>
    </html>
  );
}
