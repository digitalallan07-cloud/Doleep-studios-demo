"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize smooth scroll effects
    const ctx = gsap.context(() => {
      gsap.from(".fade-in-section", {
        scrollTrigger: {
          trigger: ".fade-in-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="relative bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
