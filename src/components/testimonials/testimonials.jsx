"use client";
import React from "react";
import { Card, CardActionArea, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./testimonials.module.css";
import { motion } from "framer-motion";

const testimonialData = [
  {
    name: "Syed Ateeb",
    batch: "Batch of 2024",
    img: "https://tse4.mm.bing.net/th?id=OIP.7WA6mH7oqsGTo_duc43GqwHaHa&pid=Api&P=0&h=180",
    quote:
      "Some people call it a team, and some say it's a club. For me, it's an enjoyable collective to be around with whom I've become so accustomed. All the best to Quod Invicta❤️.",
  },
  {
    name: "Ayush Jaiswal",
    batch: "Batch of 2023",
    img: "https://i.imgur.com/7FYxmNy.jpeg",
    quote:
      "The place where everyone is like family. Quod Invicta is the best club of National Institute of Technology, Jamshedpur.",
  },
  {
    name: "Rajiv Ranjan",
    batch: "Batch of 2024",
    img: "https://i.imgur.com/pGKa1AL.png",
    quote:
      "Being part of this team feels like being part of a family. We've tackled events and supported each other every step. Thank you for making it unforgettable!",
  },
  {
    name: "Nilesh Kumar",
    batch: "Batch of 2023",
    img: "https://i.imgur.com/riWKuqa.jpeg",
    quote:
      "Invicta, the fashion club at NIT Jamshedpur, is a dynamic space where style meets innovation. I’ve unlocked my creativity and embraced the potential of fashion here.",
  },
];

const TestimonialCard = ({ name, batch, img, quote }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card
      sx={{
        width: 340,
        height: 450,
        m: "auto",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: img ? "none" : "linear-gradient(135deg, #1e1e1e, #262626)",
        border: "1px solid rgba(34, 53, 142, 0.3)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0 6px 20px rgba(60, 73, 130, 0.5)",
        },
      }}
    >
      <CardActionArea sx={{ height: "100%", position: "relative" }}>
        {/* Background Image */}
        {img && (
          <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
            <Image
              src={img}
              alt={name}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(0.6)",
              }}
            />
          </Box>
        )}
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
          }}
        />
        <Box sx={{ position: "relative", height: "100%", p: 3, zIndex: 3 }}>
          {/* Batch */}
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                color: "#e0e0e0",
                background: "linear-gradient(45deg,rgb(14, 9, 17),rgb(1, 1, 2))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {batch || "Batch of 2024"}
            </Typography>
          </Box>
          {/* Quote */}
          <Box sx={{ textAlign: "center", mt: 3, px: 2 }}>
            <Typography
              variant="body1"
              sx={{
                color: "#ffffff",
                fontWeight: 400,
                lineHeight: 1.6,
                fontSize: "0.95rem",
                fontStyle: "italic",
                textShadow: "0 1px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              "{quote || "Being part of this team feels like being part of a family."}"
            </Typography>
          </Box>
          {/* Name */}
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "1px",
                background: "linear-gradient(45deg, #ccc, #fff)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 1px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {name}
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  </motion.div>
);

const Testimonials = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={styles.container}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 className={styles.heading} variants={sectionVariants}>
        Love From Our Alumni
      </motion.h2>

      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: `.${styles.swiperWrapper} .swiper-button-next`,
            prevEl: `.${styles.swiperWrapper} .swiper-button-prev`,
          }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonialData.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
          <div className={`swiper-button-prev ${styles.swiperButton}`} />
          <div className={`swiper-button-next ${styles.swiperButton}`} />
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Testimonials;