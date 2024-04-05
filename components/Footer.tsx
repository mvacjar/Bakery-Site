"use client";

import { useEffect } from "react";
import { Link } from "react-scroll";
import { FaCopyright } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <>
      <section className="bg-black  text-white flex justify-center items-center gap-1">
        <FaCopyright className="size-4 text-white" />
        <h1 className="text-white text-center font-semibold">
          Bakery Delight, All Rights Reserve
        </h1>
      </section>
      <div
        className="bg-orange-400 text-black p-3 rounded-full hover:bg-white cursor-pointer fixed bottom-5 right-2 "
        id="icon-box"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaAngleUp className="w-[20px] h-[20px]" />{" "}
        </Link>
      </div>
    </>
  );
};

export default Footer;
