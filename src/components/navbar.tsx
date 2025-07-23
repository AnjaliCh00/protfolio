"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="bg-[#fffaf4] fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-3xl font-bold text-[#0e1825] tracking-wide">
            My Portfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[#1a1a1a] font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-[#0e1825] transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden text-[#1a1a1a]">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-[#fffaf4] px-6 py-4 space-y-4 shadow-md text-[#1a1a1a] font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block hover:text-[#0e1825] transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
