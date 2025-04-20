'use client'
import { register } from "@/lib/action";
import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";
import { useEffect, useState } from "react";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} ${isVisible ? styles.visible : styles.hidden}`}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Create Account</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;