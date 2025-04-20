"use client";
import React from "react";
import Typography from '@mui/material/Typography';
import WSPGallery from "@/components/WSPGallery/WSPGallery";
import { cds23 } from "./cds23";
import { cds24 } from "./cds24";
import { culfest23 } from "./culfest23";
import { culfest24 } from "./culfest24";
import { photos } from "./tanishq";
import styles from "./photogallery.module.css";
import { motion } from "framer-motion";

const PhotoGallery = () => {
  const galleryContent = [
    { title: "Culfest '24", images: culfest24 },
    { title: "CDS '24", images: cds24 },
    { title: "Culfest '23", images: culfest23 },
    { title: "CDS '23", images: cds23 },
    { title: "Tanishq's 2020 Valentine Collection", images: photos },
  ];

  // Animation variants for gallery sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className={styles.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            color: "#fff",
            textAlign: "center",
            fontWeight: 500,
            marginBottom: "2rem",
            background: "linear-gradient(90deg,rgb(79, 59, 179), #ffffff,rgb(78, 101, 204))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0px 4px 12px rgba(78, 204, 163, 0.5)",
          }}
        >
          Chic Couture Collection
        </Typography>
      </motion.div>

      <div className={styles.galleryContainer}>
        {galleryContent.map((gallery, index) => (
          <motion.section
            key={gallery.title}
            className={styles.gallerySection}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Typography
              variant="h4"
              component="h2"
              className={styles.galleryTitle}
              sx={{
                fontWeight: 500,
                marginBottom: "1.5rem",
                background: "linear-gradient(45deg, #ccc, #fff)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
              }}
            >
              {gallery.title}
            </Typography>
            <div className={styles.galleryGrid}>
              <WSPGallery galleryImages={gallery.images} />
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
};

export default PhotoGallery;