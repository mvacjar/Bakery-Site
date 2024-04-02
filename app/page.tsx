import OurBreads from "@/components/OurBreads";
import Hero from "../components/Hero";
import React from "react";
import WhyUs from "@/components/WhyUs";
import OurMenu from "@/components/OurMenu";
import Banner from "@/components/Banner";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

const page = () => {
  return (
    <>
      <Hero />
      <OurBreads />
      <WhyUs />
      <OurMenu />
      <Banner />
      <Clients />
      <Contact />
    </>
  );
};

export default page;
