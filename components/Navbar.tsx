
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass-panel" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#"
          className="text-2xl font-semibold tracking-tight text-iceem-blue"
        >
          Iceem<span className="text-iceem-green">.tn</span>
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-iceem-light focus-visible:text-iceem-light"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="cta-button rounded-full bg-iceem-light px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-iceem-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iceem-blue"
          >
            Get a Quote
          </Link>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-slate-200 p-2 text-iceem-blue transition hover:bg-white md:hidden"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>
      <div
        className={`glass-panel mx-4 mt-2 origin-top-right overflow-hidden rounded-2xl transition-all duration-300 md:hidden ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-slate-700 transition hover:text-iceem-light focus-visible:text-iceem-light"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="cta-button mt-4 rounded-full bg-iceem-light px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-iceem-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iceem-blue"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
