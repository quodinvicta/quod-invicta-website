"use client";
import styles from "./about.module.css";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, useInView } from "framer-motion";

const MotionCard = motion(Card);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const TeamCard = ({ name, role, image, index }) => {
  const fallbackImage = "https://via.placeholder.com/300x180?text=No+Image";

  return (
    <MotionCard
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: "0px 12px 24px rgba(0,0,0,0.4)",
        transition: { duration: 0.3 },
      }}
      sx={{
        backgroundColor: "#1e1e1e",
        color: "#fff",
        height: "100%",
        "& .MuiCardContent-root": {
          backgroundColor: "#1e1e1e",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={image || fallbackImage}
          alt={`${name}, ${role}`}
          sx={{
            filter: "brightness(0.9)",
            transition: "filter 0.3s ease",
            "&:hover": {
              filter: "brightness(1.1)",
            },
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbb" }}>
            {role}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MotionCard>
  );
};

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const AboutPage = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <RevealOnScroll>
        <Card
          className={`${styles.imgContainer}`}
          sx={{
            maxWidth: 1080,
            margin: "0 auto",
            backgroundColor: "#121212",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
          }}
        >
          <CardActionArea>
            <motion.div whileHover={{ scale: 1.05 }}>
              <CardMedia component="img" image="/about.png" alt="Culfest 2023" />
            </motion.div>
            <CardContent sx={{ backgroundColor: "#121212", color: "#fff" }}>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                Culfest 2023
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </RevealOnScroll>

      <RevealOnScroll>
        <Box className={styles.accordion} mt={4}>
          {[{
            title: "About The Team",
            content:
              "Quod Invicta was founded in 2011 and was named as Invincibles and was rebranded in 2017 as Quod Invicta. Invicta means 'Invincibles' in Latin, preserving the team's legacy. Our mission is to make fashion a lifestyle by engineering designs and collaborating with brands to promote sustainable clothing."
          },
          {
            title: "Achievements",
            content: (
              <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                <li>Runner-Up of Spring Fest '25 - IIT Kharagpur</li>
                <li>3rd Position in Culfest '25</li>
                <li>Winner of Culfest '24</li>
                <li>Culfest '20 - Champions</li>
                <li>Ensemble Valhalla '19 - Champions</li>
                <li>Participated in shows by IITs, NITs, XLRI, Tata Steel</li>
                <li>Directed & shot Tanishq's 2020 Valentine's collection</li>
              </ul>
            )
          }].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Accordion
                defaultExpanded={idx === 0}
                sx={{
                  backgroundColor: "#1e1e1e",
                  color: "#fff",
                  marginBottom: "8px",
                  boxShadow: "0px 3px 8px rgba(0,0,0,0.3)",
                  "& .MuiAccordionSummary-root": {
                    backgroundColor: "#262626",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  aria-controls={`panel${idx}-content`}
                  id={`panel${idx}-header`}
                >
                  <Typography sx={{ fontWeight: 500 }}>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#ddd", lineHeight: 1.7 }}>{item.content}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </RevealOnScroll>

      <RevealOnScroll>
        <Box className={styles.title} mt={6} mb={2}>
          <Typography variant="h3" sx={{ color: "#fff", textAlign: "center" }}>The Team</Typography>
          <Typography variant="h5" sx={{ color: "#ccc", textAlign: "center" }}>Core Members</Typography>
        </Box>
      </RevealOnScroll>

      <Grid container spacing={3} justifyContent="center">
        {[
          { name: "Diya", role: "Captain", image: "/diya.jpg" },
          { name: "Shikha", role: "Team Manager", image: "/shikha.jpg" },
          { name: "Lavish", role: "Vice-Captain", image: "/lavish.jpg" },
          { name: "Kaushiki", role: "Vice-Captain", image: "/kaushiki.jpg" },
        ].map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={member.name}>
            <TeamCard {...member} index={index} />
          </Grid>
        ))}
      </Grid>

      <RevealOnScroll>
        <Box className={styles.title} mt={6} mb={2}>
          <Typography variant="h3" sx={{ color: "#fff", textAlign: "center" }}>
            Meet The Developers
          </Typography>
        </Box>
      </RevealOnScroll>

      <Grid container spacing={3} justifyContent="center">
        {[
          { name: "Ashish", role: "Web Developer", image: "/ashish.jpg" },
          { name: "Srijan Swapnil", role: "Web Developer", image: "/srijan.jpg" },
        ].map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={member.name}>
            <TeamCard {...member} index={index} />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default AboutPage;
