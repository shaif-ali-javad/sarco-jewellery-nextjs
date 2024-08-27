"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
  <div>

    <div
      className={cn("fixed top-0 inset-x-0 w-full mx-auto hided", className)}
    >
      <Menu setActive={setActive}>
      <p className="text-neutral-400 logo">NOHA GOLD</p>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home"/>
        </Link>
        <Link href={"/about"}>
        <MenuItem setActive={setActive} active={active} item="About"/>
        </Link>
        <Link href={"/product"}>
        <MenuItem setActive={setActive} active={active} item="Product">
        </MenuItem>
        </Link>
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact"/>
        </Link>
        </Menu>
    </div>

    <div
      className={cn("fixed top-0 inset-x-0 w-full mx-auto z-[500] mobile", className)}
    >
      <div className="bg-black p-6">
      <p className="text-neutral-400 mobile-logo">NOHA GOLD</p>
      


      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content draw">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn-primary drawer-butto"><svg
            className="swap-off fill-current open"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-black text-base-content min-h-full w-56 p-4">
      {/* Sidebar content here */}
      <li className="hover rounded-xl"><Link className="text-white font-medium" href={"/"}>Home</Link></li>
      <li className="hover rounded-xl"><Link className="text-white font-medium" href={"/about"}>About</Link></li>
      <li className="hover rounded-xl"><Link className="text-white font-medium" href={"/product"}>Product</Link></li>
      <li className="hover rounded-xl"><Link className="text-white font-medium" href={"/contact"}>Contact</Link></li>
    </ul>
  </div>
</div>
        {/* <label className="btn btn-circle swap swap-rotate exit"> */}
          {/* this hidden checkbox controls the state */}
          {/* <input type="checkbox" className="open"/> */}

          {/* hamburger icon */}
          {/* <svg
            className="swap-off fill-current open"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg> */}

          {/* close icon */}
          {/* <svg
            className="swap-on fill-current open"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label> */}

        </div>
    </div>
  </div>
  );
}

export default Navbar;