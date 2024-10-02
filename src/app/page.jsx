"use client";
import { useEffect, useRef, useState } from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./Navbar";
import MyStyle from "./pages/mystyle";
import LifeCoaching from "./pages/lifecoaching";
import CBT from "./pages/cbt";
import WhoAmI from "./pages/whoami";
import Contact from "./pages/contact";

export default function Home() {
  const sectionRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState("Homepage"); // State to track the current section in view

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.5) {
            const sectionName = entry.target.getAttribute("data-name");
            setCurrentSection(sectionName); // Update the current section in view
          }
        });
      },
      { threshold: [0.5] } // Track when more than 50% of the section is in view
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <main className="flex flex-col">
      {/* Pass the current section to the Navbar */}
      <Navbar currentSection={currentSection} />
      <div ref={(el) => (sectionRefs.current[0] = el)} data-name="Home">
        <Homepage />
      </div>
      <div ref={(el) => (sectionRefs.current[1] = el)} data-name="My Style">
        <MyStyle />
      </div>
      <div ref={(el) => (sectionRefs.current[2] = el)} data-name="Life Coaching">
        <LifeCoaching />
      </div>
      <div ref={(el) => (sectionRefs.current[3] = el)} data-name="CBT">
        <CBT />
      </div>
      <div ref={(el) => (sectionRefs.current[4] = el)} data-name="Background">
        <WhoAmI />
      </div>
      <div ref={(el) => (sectionRefs.current[5] = el)} data-name="Contact">
        <Contact />
      </div>
    </main>
  );
}
