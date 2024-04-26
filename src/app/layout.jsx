import React from "react";
import "./globals.css";

export const metadata = {
  title: "Samuel's Portofolio",
  description: "This is Samuel's Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
