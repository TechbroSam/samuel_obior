import React, { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<NavbarProps> = ({ open, setOpen }) => {
  return (
    <div
      className={`pb-4 pl-2 absolute top-0 left-0 h-fit w-full drop-shadow-md md:hidden transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <Link href="/"
        className="flex items-center justify-center filter
       drop-shadow-md"
       
      >
        {" "}
        {/*logo container*/}
        <img className="lg:w-14 w-10" src="/img/my_logo.svg" alt="" />
        <div className="lg:text-2xl text-2xl font-bold antialiased">
          Samuel Obior
        </div>
      </Link>
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-normal my-4 ulnav"
          href="/swap"
          target="_blank"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Work
        </Link>
        <Link
          className="text-xl font-normal my-4 ulnav"
          href="/staking"
          target="_blank"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Resume
        </Link>
        <Link
          className="text-xl font-normal my-4 ulnav"
          href="/locker"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
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
    <nav
      className="z-10 flex shadow-lg items-center py-2 sticky top-0 w-full px-60 bg-[#F0F2F5]"
    >
      <MobileNav open={open} setOpen={setOpen} />
      <Link className="flex items-center space-x-2"
      href="/">
        <img className="w-8" src="/img/my_logo.svg" alt="" />
        <div className="text-[2rem] font-extrabold antialiased flex w-full">
          Samuel Obior
        </div>
      </Link>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          {!open && (
            <span
              className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out`}
            />
          )}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="flex space-x-10 text-lg font-medium cursor-pointer">
          <Link href="/">
            <ul className="ulnav hover:opacity-40">Work</ul>
          </Link>
          <Link href="resume.pdf" target="_blank">
            <ul className="ulnav hover:opacity-40">Resume</ul>
          </Link>
          <Link href="#contact">
            <ul className="hover:opacity-40">Contact</ul>
          </Link>
        </div>
      </div>
    </nav>
  );
}
