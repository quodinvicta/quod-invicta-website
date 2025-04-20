"use client";
import { useEffect, useRef } from "react";
import styles from "./contact.module.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { motion } from "framer-motion";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Custom styled components
const CssTextField = styled(TextField)({
  '& label': {
    color: '#aaa',
  },
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#444',
      borderRadius: '8px',
    },
    '&:hover fieldset': {
      borderColor: '#777',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
    '& input': {
      color: '#fff',
    },
    '& textarea': {
      color: '#fff',
    }
  },
});

const AnimatedSocialIcon = ({ icon, href, delay }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.socialIcon}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ 
      scale: 1.2, 
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5 }
    }}
  >
    {icon}
  </motion.a>
);

const ContactPage = () => {
  const formRef = useRef(null);
  
  useEffect(() => {
    // Add scroll triggers for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  // Form field variants for staggered animation
  const formFieldVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  return (
    <Box className={styles.container} sx={{ backgroundColor: "#0c0c0c" }}>
      {/* Floating particles background */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>
      
      <motion.div 
        className={`${styles.imgContainer} ${styles.animateOnScroll}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div className={styles.imageWrapper}
          whileHover={{ 
            boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.5)",
            transition: { duration: 0.5 }
          }}
        >
          <motion.img 
            src="/contact.jpg" 
            alt="Contact Us" 
            className={styles.img}
            initial={{ filter: "brightness(0.7) blur(5px)" }}
            animate={{ filter: "brightness(1) blur(0px)" }}
            transition={{ duration: 1.2 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.5 }
            }}
          />
          <div className={styles.imageOverlay}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={styles.contactInfo}
            >
              <Typography variant="h3" sx={{ 
                color: "#fff", 
                fontWeight: "600",
                marginBottom: "1rem",
                textShadow: "0px 2px 4px rgba(0,0,0,0.5)"
              }}>
                Get In Touch
              </Typography>
              
              <Box sx={{ marginBottom: "1.5rem" }}>
                <motion.div 
                  className={styles.contactItem}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <EmailIcon sx={{ marginRight: "10px", color: "#fff" }} />
                  <Typography sx={{ color: "#eee" }}>invicta.nit.jsr@gmail.com</Typography>
                </motion.div>
                
                <motion.div 
                  className={styles.contactItem}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <LocationOnIcon sx={{ marginRight: "10px", color: "#fff" }} />
                  <Typography sx={{ color: "#eee" }}>NIT Jamshedpur, Jharkhand</Typography>
                </motion.div>
              </Box>
              
              <Box className={styles.socialIcons}>
                <AnimatedSocialIcon 
                  icon={<InstagramIcon sx={{ fontSize: 28, color: "#fff" }} />} 
                  href="https://instagram.com/quod_invicta" 
                  delay={1.1}
                />
                <AnimatedSocialIcon 
                  icon={<FacebookIcon sx={{ fontSize: 28, color: "#fff" }} />} 
                  href="https://facebook.com/quodinvicta" 
                  delay={1.3}
                />
                <AnimatedSocialIcon 
                  icon={<EmailIcon sx={{ fontSize: 28, color: "#fff" }} />} 
                  href="mailto:invicta.nit.jsr@gmail.com" 
                  delay={1.5}
                />
              </Box>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className={`${styles.formContainer} ${styles.animateOnScroll}`}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        ref={formRef}
      >
        <form 
          action="mailto:invicta.nit.jsr@gmail.com" 
          method="post" 
          encType="text/plain"
          className={styles.form}
        >
          <Typography variant="h4" sx={{ 
            color: "#fff", 
            marginBottom: "1.5rem",
            textAlign: "center",
            fontWeight: "500",
            background: "linear-gradient(90deg, #a8a8a8, #ffffff, #a8a8a8)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Send Us A Message
          </Typography>
          
          <motion.div
            custom={0}
            variants={formFieldVariants}
            initial="hidden"
            animate="visible"
          >
            <CssTextField
              fullWidth
              name="Name"
              label="Name and Surname"
              variant="outlined"
              margin="normal"
              required
              sx={{ marginBottom: "16px" }}
            />
          </motion.div>
          
          <motion.div
            custom={1}
            variants={formFieldVariants}
            initial="hidden"
            animate="visible"
          >
            <CssTextField
              fullWidth
              name="E-Mail"
              label="Email Address"
              variant="outlined"
              type="email"
              margin="normal"
              required
              sx={{ marginBottom: "16px" }}
            />
          </motion.div>
          
          <motion.div
            custom={2}
            variants={formFieldVariants}
            initial="hidden"
            animate="visible"
          >
            <CssTextField
              fullWidth
              name="Phone Number"
              label="Phone Number"
              variant="outlined"
              margin="normal"
              sx={{ marginBottom: "16px" }}
            />
          </motion.div>
          
          <motion.div
            custom={3}
            variants={formFieldVariants}
            initial="hidden"
            animate="visible"
          >
            <CssTextField
              fullWidth
              name="Message"
              label="Your Message"
              variant="outlined"
              multiline
              rows={5}
              margin="normal"
              required
              sx={{ marginBottom: "24px" }}
            />
          </motion.div>
          
          <motion.div
            custom={4}
            variants={formFieldVariants}
            initial="hidden"
            animate="visible"
          >
            <Button 
              type="submit" 
              variant="contained" 
              endIcon={<SendIcon />}
              fullWidth
              sx={{
                padding: "12px",
                background: "linear-gradient(45deg, #333, #555)",
                "&:hover": {
                  background: "linear-gradient(45deg, #444, #666)",
                  boxShadow: "0px 0px 15px rgba(255,255,255,0.3)",
                },
                fontSize: "16px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                "& .MuiButton-endIcon": {
                  transition: "transform 0.3s ease",
                },
                "&:hover .MuiButton-endIcon": {
                  transform: "translateX(4px)",
                }
              }}
              className={styles.submitButton}
            >
              Send Message
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </Box>
  );
};



export default ContactPage;