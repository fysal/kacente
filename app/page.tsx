'use client';
import Image from "next/image";
import Hero from "./components/hero/hero";
import HowItWorks from "./components/how it works/how_it_works";
import MainNavigation from "./components/nav/main_navigation";
import Footer from "./components/footer";
import WhatMakesUsDifferent from "./components/what_makes_us_different";
import FinanceHero from "./components/hero/finance_hero";
import PersonalizedExperience from "./components/personalised_experience";
import AOS from "aos";
import { useEffect } from "react";
import Contact from "./components/contact";




export default function Home() {


  useEffect(() => {
    AOS.init()
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="">
        <Hero />
        <HowItWorks />
        <WhatMakesUsDifferent />
        <div data-aos="fade">
          <FinanceHero />
        </div>
        <PersonalizedExperience />
      </div>
      <Contact />
    
      <Footer />
    </main>
  );
}