"use client";

import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState, useEffect } from "react";
import { handleLogout } from "@/lib/action";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { title: "HomePage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Gallery", path: "/gallery" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && !e.target.closest(`.${styles.container}`) && !e.target.closest(`.${styles.mobileLinks}`)) {
        setOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const renderAuthLinks = () => {
    return session?.user ? (
      <div className={styles.authLinks}>
        {session.user?.isAdmin && (
          <NavLink
            item={{ title: "Admin", path: "/admin" }}
            onClick={handleCloseMenu}
          />
        )}
        <form action={handleLogout}>
          <button
            type="submit"
            className={styles.logout}
            onClick={handleCloseMenu}
          >
            Logout
          </button>
        </form>
      </div>
    ) : (
      <NavLink
        item={{ title: "Login", path: "/login" }}
        onClick={handleCloseMenu}
        className={styles.loginLink}
      />
    );
  };

  // Menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} onClick={handleCloseMenu} />
        ))}
        {renderAuthLinks()}
      </div>

      <motion.button
        className={styles.hamburger}
        onClick={() => setOpen((prev) => !prev)}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        <span className={`${styles.hamburgerLine} ${open ? styles.line1Open : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${open ? styles.line2Open : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${open ? styles.line3Open : ''}`}></span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <button className={styles.closeButton} onClick={handleCloseMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={styles.mobileLinks}>
              {links.map((link) => (
                <div key={link.title} className={styles.mobileLinkItem}>
                  <NavLink
                    item={link}
                    onClick={handleCloseMenu}
                  />
                </div>
              ))}
              <div className={styles.mobileLinkItem}>
                {renderAuthLinks()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Links;