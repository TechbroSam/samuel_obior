import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<NavbarProps> = ({ open, setOpen }) => {
  return (
    <div
      className={`pb-4 pl-2 absolute top-0 left-0 h-fit w-full drop-shadow-md md:hidden 
      
      transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md bg-[#F0F2F5]`}
    >
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image
            className="w-10"
            src="/img/my_logo.svg"
            alt="Logo"
            width={40}
            height={40}
          />
          <div className="text-2xl font-bold antialiased ml-2">
            Samuel Obior
          </div>
        </Link>
        
      </div>
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-normal my-4 ulnav"
          href="/"
          onClick={() => setOpen(false)}
        >
          Work
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/Resume-Samuel-Obior.pdf"
          target="_blank"
          onClick={() => setOpen(false)}
        >
          Resume
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="z-10 flex shadow-lg items-center py-2 sticky top-0 w-full px-4 md:px-20 lg:px-60 bg-[#F0F2F5]">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex justify-between w-full">
        <Link className="flex items-center space-x-2" href="/">
          <Image
            className="w-8"
            src="/img/my_logo.svg"
            alt="Logo"
            width={32}
            height={32}
          />
          <div className="text-2xl font-extrabold antialiased">
            Samuel Obior
          </div>
        </Link>
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link href="/" className="hover:opacity-70">
            Work
          </Link>
          <Link
            href="/Resume-Samuel-Obior.pdf"
            target="_blank"
            className="hover:opacity-70"
          >
            Resume
          </Link>
          <Link href="#contact" className="hover:opacity-70">
            Contact
          </Link>
        </div>
        <div
          className="z-50 flex md:hidden relative w-8 h-8 flex-col justify-between items-center"
          onClick={() => setOpen(!open)}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          {!open && (
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out`}
            />
          )}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
