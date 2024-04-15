"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="hero"
      className="w-full flex lg:flex-row flex-col justify-between items-start"
    >
      <div id="image-section" className="lg:w-[50%] w-full">
        <Image
          data-aos="zoom-in"
          src="/hero.jpg"
          alt="hero-banner"
          width={800}
          height={500}
          className="w-full bg-cover bg-center"
        />
      </div>
      <div
        id="content-section"
        className="lg:w-[50%] w-full flex flex-col justify-center items-center gap-10 p-20"
      >
        <Image
          data-aos="zoom-in"
          data-aos-delay="200"
          src="/logo.png"
          alt="logo"
          width={120}
          height={100}
        />
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-[50px] text-black text-center leading-[55px]"
        >
          Fresh Breads
        </h1>
        <h2
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-[20px] text-black text-center leading-[10px]"
        >
          Handcrafted Daily
        </h2>
        <p
          data-aos="zoom-in"
          data-aos-dealy="600"
          className="text-center text-xl text-slate-600"
        >
          Welcome to our aromatic haven of freshly baked breads, where every
          loaf tells a story of craftsmanship and dedication. From crusty
          baguettes to pillowy brioche, each creation is lovingly crafted using
          time-honored techniques and premium ingredients. We invite you to
          experience the magic of our bakery and savor the simple pleasure.
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay="800"
          className="border-2 border-black rounded-full px-14 py-4 font-bold"
        >
          Bread me!{" "}
        </button>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="600"
        id="image-section"
        className="lg:w-[50%] w-full"
      >
        <Image
          src="/banner6.jpg"
          alt="hero-banner"
          width={800}
          height={500}
          className="w-full bg-cover bd-center"
        />
      </div>
    </section>
  );
};

export default Hero;
