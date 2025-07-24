"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1D3557] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

        {/* Branding */}
        <div>
          <h2 className="text-xl font-semibold">Anjali Choudhary</h2>
          <p className="text-sm text-gray-300">
            Front-End Developer crafting elegant and responsive web experiences.
          </p>
        </div>

        {/* Contact + Socials */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-3 text-[#bc5003]">Connect</h3>
          <div className="flex justify-center md:justify-end gap-4 mb-2">
            <a
              href="https://github.com/AnjaliCh00/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#bc5003] transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/anjalichoudhary0013"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#bc5003] transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:anjali20041013@gmail.com"
              className="hover:text-[#bc5003] transition"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-300">anjali20041013@gmail.com</p>
        </div>
      </div>

     
    </footer>
  );
}
