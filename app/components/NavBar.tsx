"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className="padding-container relative z-30 rounded-lg
     bg-white shadow-xl ring-1 ring-slate-100 py-5"
    >
      <div className="flexBetween max-container">
        <Link href="/" className="bold-28 capitalize  relative">
          {" "}
          TG <span className="text-blue-500">Hodgepodge</span>
        </Link>

        <ul
          className={`h-full gap-6 lg:flex px-6 py-3 ${
            isNavOpen ? "" : "hidden"
          }`}
        >
          {" "}
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="flexCenter text-[15px] font-[500] text-black
              hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full
              cursor-pointer transition-all duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Image
          src="menu.svg"
          alt="menu"
          width={28}
          height={28}
          className="inline-block cursor-pointer lg:hidden"
          onClick={toggleNav}
        />
      </div>
    </nav>
  );
};

export default NavBar;
