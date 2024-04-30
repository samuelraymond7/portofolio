import React from "react";
import Link from "next/link";
import Button from "./Button";

const NavigationMenu = ({ children, className }) => (
  <div
    className={`flex-row justify-center items-center gap-2 relative ${className}`}
  >
    {children}
  </div>
);

const NavigationMenuList = ({ children, trigger, className }) => (
  <div className="group">
    <Button className="group-hover:bg-slate-800 group-hover:text-slate-50">
      {trigger}
    </Button>
    <ul
      className={`hidden hover:flex group-hover:flex flex-col absolute top-10 left-0 
      bg-slate-950 text-slate-50 rounded-xl p-4 gap-3 w-[334px] ${className}`}
    >
      {children}
    </ul>
  </div>
);

const NavigationMenuContent = ({ children, title, link }) => (
  <li>
    <Link
      href={link}
      rel="noopener noreferrer"
      className="block space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800"
    >
      <div className="text-[15px] font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-slate-300">
        {children}
      </p>
    </Link>
  </li>
);

export { NavigationMenu, NavigationMenuList, NavigationMenuContent };
