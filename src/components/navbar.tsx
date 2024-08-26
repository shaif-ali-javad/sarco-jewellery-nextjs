"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-0 inset-x-0 w-full mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
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
  );
}

export default Navbar;