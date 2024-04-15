"use client";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="about"
      className="w-full flex lg:flex-row flex-col justify-between items-center"
    >
      <div
        id="content-section"
        className="lg:w-[50%] w-full flex flex-col justify-center items-center gap-10 p-20"
      >
        <h1
          data-aos="zoom-in"
          className="text-[50px] text-black text-center leading-[55px]"
        >
          Where Every treat is a Delight
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-center text-xl text-slate-600"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          explicabo libero laudantium, voluptatem molestiae recusandae
          reiciendis atque odio quam mollitia soluta voluptate consequuntur vero
          suscipit aperiam provident sunt perferendis porro!
        </p>
        <button
          data-aos="flip-up"
          data-aos-delay="400"
          className="border-2 border-black rounded-full px-14 py-4 font-bold "
        >
          Delight me
        </button>
      </div>
    </section>
  );
};

export default WhyUs;
