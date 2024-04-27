import React from "react";
import Button from "./Button";

const NavigationMenu = ({ children, className }) => (
  <div
    className={`flex-row justify-center items-center gap-2 relative ${className}`}
  >
    {children}
  </div>
);

const NavigationMenuList = ({ children, trigger, className }) => (
  <>
    <Button className={`group peer/${trigger}`}>{trigger}</Button>
    <ul
      className={`hidden hover:flex flex-col absolute top-10 left-0 
      bg-slate-950 text-slate-50 rounded-md p-4 gap-3 w-[334px] ${className}`}
    >
      {children}
    </ul>
  </>
);

const NavigationMenuContent = ({ id, children, title, link }) => (
  <li key={id}>
    <a
      href={link}
      rel="noopener noreferrer"
      className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800"
    >
      <div className="text-[15px] font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-slate-300">
        {children}
      </p>
    </a>
  </li>
);

export { NavigationMenu, NavigationMenuList, NavigationMenuContent };
