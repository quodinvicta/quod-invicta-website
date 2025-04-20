"use client";
import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { motion } from "framer-motion";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/login');
  }, [state?.success, router]);

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.form
      className={styles.form}
      action={formAction}
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.input
        type="text"
        placeholder="Username"
        name="username"
        className={styles.input}
        variants={inputVariants}
      />
      <motion.input
        type="email"
        placeholder="E-Mail"
        name="email"
        className={styles.input}
        variants={inputVariants}
      />
      <motion.input
        type="password"
        placeholder="Password"
        name="password"
        className={styles.input}
        variants={inputVariants}
      />
      <motion.input
        type="password"
        placeholder="Confirm Password"
        name="passwordRepeat"
        className={styles.input}
        variants={inputVariants}
      />
      <motion.button
        className={styles.submitButton}
        variants={inputVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Register
      </motion.button>
      {state?.error && (
        <motion.div
          variants={inputVariants}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Alert variant="filled" severity="error" className={styles.alert}>
            {state?.error}
          </Alert>
        </motion.div>
      )}
      <motion.div
        className={styles.loginPrompt}
        variants={inputVariants}
      >
        <span>Have an Account?</span>
        <Button
          href="/login"
          size="medium"
          variant="contained"
          className={styles.loginButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default RegisterForm;