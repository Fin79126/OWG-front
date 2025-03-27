"use client";

import React from "react";
import Sidebar from "@/components/elements/sidebar/sidebar";
import { headerStyle, titleStyle } from "./Header.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={headerStyle} style={{ position: "sticky", top: 0 }}>
      <Sidebar />
      <Link href="/">
        <h1 className={titleStyle}>OWG</h1>
      </Link>
    </header>
  );
};

export default Header;
