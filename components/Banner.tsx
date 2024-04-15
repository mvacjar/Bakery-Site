"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 py-20 lg:px-20 px-10">
      <h1 className="text-[50px] text-black text-center leading-[60px]">
        Our Frehsly Bakes Bread is the Hero of our Breakfast Menu
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-center text-xl text-slate-600"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam eum
        quasi, molestias, excepturi dicta, dolorum delectus mollitia ipsum
        doloribus consequuntur velit similique animi facilis accusamus? Ut ipsum
        quod saepe!
      </p>
      <button
        className="border-2 border-black rounded-full px-14 py-4 font-bold"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        Discover More
      </button>
      <div className="w-full bg-cover bg-center flex flex-col justify-center items-center">
        <Image
          data-aos="zoom-in"
          data-aos-delay="600"
          src="/banner3.jpg"
          alt="banner image"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
};

export default Banner;
