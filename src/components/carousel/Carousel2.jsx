'use client';

import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import styles from "./carousel2.module.css";
import { motion } from "framer-motion";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slides = [
  { src: "/carousel_images/1.jpg", alt: "Slide 1" },
  { src: "/carousel_images/2.jpg", alt: "Slide 2" },
  { src: "/carousel_images/3.jpg", alt: "Slide 3" },
  { src: "/carousel_images/4.jpg", alt: "Slide 4" },
  { src: "/carousel_images/5.jpg", alt: "Slide 5" },
  { src: "/carousel_images/6.jpg", alt: "Slide 6" },
];

const Carousel2 = () => {
  return (
    <motion.div
      className={styles.carouselWrapper}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={styles.overlay}></div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={5000}
        mobileTouch={true}
        bullets={true}
        organicArrows={true}
        className={styles.slider}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            data-src={slide.src}
            aria-label={slide.alt}
            className={styles.slide}
          />
        ))}
      </AutoplaySlider>
    </motion.div>
  );
};

export default Carousel2;
