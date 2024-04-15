"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="contact"
      className="w-full flex flex-col justify-start items-end gap-20 bg-cover h-fit lg:py-20 py-10 lg:px-20 px-10 bg center"
      style={{ backgroundImage: `url("banner.jpg")` }}
    >
      <div className="lg:w-[40%] w-full"></div>

      <div className="lg:w-[60%] w-full flex flex-col justify-start items-center gap-10">
        <h1
          data-aos="fade-down"
          className="text-[45px] text-black font-semibold text-center"
        >
          Contact Us
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center text-xl text-black"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint tempore
          incidunt exercitationem accusamus obcaecati repellendus esse quasi,
          cumque ipsa mollitia magni beatae hic voluptatem nam asperiores dolor,
          dolorem doloribus laborum!
        </p>
        <div className="flex flex-col justify-center items-center gap-6 lg:w-[80%] w-full">
          <div
            id="form-box"
            className="grid lg:grid-cols-2 grid-cols-1 justify-center items-centergap-4 w-full"
          >
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <h1 className="text-lg font-semibold text-black">Full Name</h1>
              <input
                type="text"
                placeholder="Enter your full name"
                className="bg-white text-black px-6 py-3 w-full rounded-full border-slate-400"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <h1 className="text-lg font-semibold text-black">Email</h1>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white text-black px-6 py-3 w-full rounded-full border-slate-400"
              />
            </div>
          </div>
          <button className="w-full bg-black px-6 py-3 rounded-full text-white font-semibold">
            SUBMIT
          </button>
        </div>
        <div
          id="adress-box"
          className="w-full grid grid-cols-3 justify-end items-start gap-6 mt-10"
        >
          <div className="flex flex-col justify-center items-start gap-3">
            <h1 className="text-black font-bold text-2xl">FIND US</h1>{" "}
            <p>
              Lollipoop Street, 123 <br /> Sweet York, SY 32456-101023
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <h1 className="text-black font-bold text-2xl">CALL US</h1>{" "}
            <p>
              555-5555-555 <br /> 555-5555-555
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <h1 className="text-black font-bold text-2xl">FIND US</h1>{" "}
            <p>
              Lollipoop Street, 123 <br /> Sweet York, SY 32456-101023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
