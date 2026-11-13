"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Story", href: "#story" },
  { label: "The Switch", href: "#switch" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "How to Buy", href: "#how-to-buy" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="BlackX home" onClick={() => setOpen(false)}>
          <Image src="/blackx-emblem.png" alt="" width={38} height={38} className="brand-mark" priority />
          <span>BLACK<span className="brand-x">X</span></span>
        </a>
        <div className={`nav-links ${open ? "nav-links--open" : ""}`} id="main-menu">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="nav-mobile-community" href="#community" onClick={() => setOpen(false)}>Community</a>
        </div>
        <a className="nav-cta" href="#community">Join the community <span aria-hidden="true">↗</span></a>
        <button
          className={`menu-toggle ${open ? "menu-toggle--open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen(!open)}
        ><span /><span /><span /></button>
      </nav>
    </header>
  );
}
