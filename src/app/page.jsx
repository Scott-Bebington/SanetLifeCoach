"use client";
import { useEffect, useRef, useState } from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./Navbar";
import MyStyle from "./pages/mystyle";
import LifeCoaching from "./pages/lifecoaching";
import CBT from "./pages/cbt";
import WhoAmI from "./pages/whoami";
import Contact from "./pages/contact";
import Head from "next/head";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Dancing_Script, Caveat, M_PLUS_Rounded_1c, Pacifico } from "next/font/google";

// Initialize the Dancing Script font
const dancingScript = Dancing_Script({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const caveat = Caveat({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const mPlusRounded1c = M_PLUS_Rounded_1c({
  weight: ['400', '700'],
  subsets: ['latin'],
});

// Create a custom MUI theme
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#75064a',
          '&:hover': {
            backgroundColor: '#086878',
          },
          color: 'white',
        },
      },
    },
  },
  li: {
    fontFamily: mPlusRounded1c.style.fontFamily,
  },
  typography: {
    h3: {
      fontSize: '56px',
      fontFamily: caveat.style.fontFamily,
    },
    h4: {
      fontSize: '40px',
      fontFamily: caveat.style.fontFamily,
    },
    h5: {
      fontSize: '20px',
      fontFamily: mPlusRounded1c.style.fontFamily,
    },
    h6: {
      fontSize: '18px',
      fontFamily: mPlusRounded1c.style.fontFamily,
    },
    body1: {
      fontSize: '16px',
      fontFamily: mPlusRounded1c.style.fontFamily,
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <main className="flex flex-col bg-[#ece8e8]">
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
    </ThemeProvider>

  );
}
