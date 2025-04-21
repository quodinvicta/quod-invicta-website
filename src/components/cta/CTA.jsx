"use client";

import React, { useEffect, useRef } from 'react';
import styles from './cta.module.css';
import { Button, Typography, Box } from '@mui/material';
import { motion, useInView, useAnimation } from 'framer-motion';

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionBox = motion(Box);

const CTA = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.6
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const videoVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.4
      }
    }
  };
  
  return (
    <motion.div 
      className={styles.container}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div 
        className={styles.info}
        variants={containerVariants}
      >
        <MotionTypography 
          variant="h4" 
          component="h1" 
          className={styles.title}
          variants={itemVariants}
        >
          Team Quod Invicta&apos;s Behind-The-Scenes Video: A snapshot of fashion&apos;s flair and unity at NIT Jamshedpur.
        </MotionTypography>
        
        <motion.div 
          className={styles.btnGroup}
          variants={itemVariants}
        >
          <MotionButton
            size="large"
            href="/register"
            variant="contained"
            color="success"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" 
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Register
          </MotionButton>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className={styles.videoContainer}
        variants={videoVariants}
      >
        <MotionBox 
          className={styles.iframeWrapper}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className={styles.videoOverlay}
          />
          <iframe
            src="https://www.youtube.com/embed/Wm311iK9KlE?si=uZOPAyCi1iUCbKb6"
            title="Behind-The-Scenes Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            width="100%"
            height="100%"
            style={{ border: 0 }}
          ></iframe>
        </MotionBox>
      </motion.div>
    </motion.div>
  );
};

export default CTA;