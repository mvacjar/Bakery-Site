"use client";

import { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { link: "About", path: "about" },
    { link: "Breads", path: "breads" },
    { link: "Menu", path: "menu" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className="w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-3 sticky top-0 z-50">
      <Image
        src="/logo.png"
        alt="logo"
        width={90}
        height={90}
        className="invert"
      />
      <ul className="lg:flex justify-center items-center gap-10 hidden">
        {navItems.map(({ link, path }) => {
          return (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-600 hover:text-white"
            >
              {link}
            </Link>
          );
        })}
      </ul>
      <button className="bg-orange-400 text-white px-10 py-3 rounded-full font-bold transform hover:scale-105 transition-transform duration-300">
        Order Now
      </button>

      <div
        className="flex justify-center items-center lg:hidden mt-3"
        onClick={toggleMenu}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-white text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-white text-3xl cursor-pointer" />
          )}
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-fit h-fit bg-black p-4 absolute top-[95px] right-0`}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full ">
          {navItems.map(({ link, path }) => {
            return (
              <Link
                key={path}
                className="text-white uppercase font-semibold cursor-pointer p-3 mx-12 my-2 rounded-lg hover:bg-orange-400 hover:text-white w-full text-center"
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
              >
                {link}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
