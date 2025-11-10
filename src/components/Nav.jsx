import React from "react";
import Menu from "./Menu";
import Link from "next/link";
const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];
export default function Nav() {
  return (
    <nav>
      <Link
        href="/"
        className="md:text-xl font-semibold fixed  top-[28px] md:top-[32px] left-[16px] md:left-[32px] text-white mix-blend-difference z-50"
      >
        Hyperfocused
      </Link>
      <Menu
        className=""
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        colors={["#ff4500", "#1a1a1a"]}
        accentColor="#ff4500"
        // onMenuOpen={() => console.log("Menu opened")}
        // onMenuClose={() => console.log("Menu closed")}
      />
    </nav>
  );
}
