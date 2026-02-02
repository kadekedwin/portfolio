"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center pointer-events-none">
      <div className="bg-white/80 backdrop-blur-md border-3 border-black shadow-neo rounded-3xl px-8 py-4 flex flex-col pointer-events-auto max-w-4xl w-full transition-all duration-300">

        <div className="flex items-center justify-between w-full">
          <Link href="/" className="text-2xl font-black tracking-tight hover:text-neo-primary transition-colors">
            Edwin
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-bold">
            <Link href="#projects" className="hover:text-neo-primary transition-colors">Projects</Link>
            <Link href="#about" className="hover:text-neo-secondary transition-colors">About</Link>
            <Link href="#contact" className="hover:text-neo-accent transition-colors">Contact</Link>
            {/* <button className="neo-button bg-neo-yellow text-black hover:bg-neo-accent border-2">
              Hire Me
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden pt-6 pb-2 flex flex-col space-y-4 font-bold border-t-2 border-gray-100 mt-4 animate-in slide-in-from-top-2 fade-in duration-200">
            <Link
              href="#projects"
              className="hover:text-neo-primary transition-colors p-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="hover:text-neo-secondary transition-colors p-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hover:text-neo-accent transition-colors p-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            {/* <button className="neo-button bg-neo-yellow text-black hover:bg-neo-accent border-2 w-full mt-2">
              Hire Me
            </button> */}
          </div>
        )}
      </div>
    </nav>
  );
}
