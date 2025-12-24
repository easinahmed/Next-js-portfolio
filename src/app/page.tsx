"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Scroll Reveal Logic similar to legacy main.js
  useEffect(() => {
    if (loading) return;

    const revealElements = document.querySelectorAll('.home-container, .about-container, .projects-container, .services-container, .contact-content');

    // Add initial reveal class
    revealElements.forEach(el => el.classList.add('reveal'));

    const handleScroll = () => {
      revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active-reveal');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <main>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div id="main-page" className={`transition-opacity duration-1000 ${loading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
}
