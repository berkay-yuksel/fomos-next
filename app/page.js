"use client";
import { useEffect, useState, useRef } from "react";
import "../styles/globals.css";

import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Featured from "../components/Featured.js";
import About from "../components/About.js";
import Roadmap from "../components/Roadmap.js";
import Info from "../components/Info.js";
import Faq from "../components/Faq.js";
import Story from "../components/Story.js";
import Footer from "../components/Footer.js";

import { motion, useScroll } from "framer-motion";

const Home = () => {
  //big pics animation
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  //custom cursor
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      color: "transparent",
    },
    text: {
      height: 40,
      width: 120,
      x: mousePosition.x + 10,
      y: mousePosition.y + 10,
      backgroundColor: "darkgray",
      /*    backgroundImage: "url(LOCKED RESMİ)", */
      borderRadius: "0%",
    },
    locked: {
      height: 40,
      width: 120,
      x: mousePosition.x + 10,
      y: mousePosition.y + 10,
      backgroundColor: "lightgray",
      /*    backgroundImage: "url(LOCKED RESMİ)", */
      borderRadius: "0%",
    },
    clickable: {
      height: 20,
      width: 20,
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: "transparent",
      border: "2px solid darkgrey",
    },
    scroll: {
      height: 40,
      width: 120,
      x: mousePosition.x + 10,
      y: mousePosition.y + 10,
      backgroundColor: "gray",
      /*    backgroundImage: "url(LOCKED RESMİ)", */
      borderRadius: "0%",
    },
  };

  const justLeave = () => setCursorVariant("default");
  const textEnter = () => setCursorVariant("text");
  const lockedEnter = () => setCursorVariant("locked");
  const clickableEnter = () => setCursorVariant("clickable");
  const scrollEnter = () => setCursorVariant("scroll");

  return (
    <motion.div>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
      <Navbar
        clickableEnter={clickableEnter}
        justLeave={justLeave}
        lockedEnter={lockedEnter}
        onMouseEnter
        onMouseLeave
      />
      <Hero />
      <Featured
        textEnter={textEnter}
        justLeave={justLeave}
        lockedEnter={lockedEnter}
        onMouseEnter
        onMouseLeave
      />
      <About
        clickableEnter={clickableEnter}
        justLeave={justLeave}
        onMouseEnter
        onMouseLeave
      />
      <motion.div ref={ref} style={{ scale: scrollYProgress }}>
        <Roadmap />{" "}
      </motion.div>
      {/* <Info /> */}
      <Faq
        clickableEnter={clickableEnter}
        justLeave={justLeave}
        lockedEnter={lockedEnter}
        onMouseEnter
        onMouseLeave
      />
      <Story
        scrollEnter={scrollEnter}
        justLeave={justLeave}
        onMouseEnter
        onMouseLeave
      />
      <Footer
        clickableEnter={clickableEnter}
        justLeave={justLeave}
        onMouseEnter
        onMouseLeave
      />
    </motion.div>
  );
};

export default Home;
