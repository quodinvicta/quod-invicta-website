"use client";
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { motion } from "framer-motion";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


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
  },
});

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  // Form field variants for staggered animation
  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };
  
  // Logo animation variants
  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 1.5
      }
    },
    hover: { 
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <motion.div
      className={styles.formContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <div className={styles.bgElements}>
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i} 
            className={styles.bgCircle}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: 1,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            transition={{ 
              duration: 8,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      <motion.div
        className={styles.formWrapper}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div 
          className={styles.logoContainer}
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className={styles.logo}>
            <LockOutlinedIcon sx={{ fontSize: 40, color: "#fff" }} />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              textAlign: "center", 
              color: "#fff", 
              marginBottom: "1.5rem",
              fontWeight: "500",
              background: "linear-gradient(90deg, #a8a8a8, #ffffff, #a8a8a8)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Sign In
          </Typography>
        </motion.div>
        
        <form className={styles.form} action={formAction}>
          <motion.div
            custom={0}
            variants={formFieldVariants}
            initial="hidden"
            animate="visible"
          >
            <CssTextField
              fullWidth
              label="Username"
              name="username"
              variant="outlined"
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon sx={{ color: "#aaa" }} />
                  </InputAdornment>
                ),
              }}
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
              label="Password"
              name="password"
              variant="outlined"
              margin="normal"
              required
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon sx={{ color: "#aaa" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ color: "#aaa" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ marginBottom: "20px" }}
            />
          </motion.div>
          
          <motion.div
            custom={2}
            variants={formFieldVariants}
            initial="hidden"
            animate="visible"
          >
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                padding: "12px",
                background: "linear-gradient(45deg, #333, #555)",
                "&:hover": {
                  background: "linear-gradient(45deg, #444, #666)",
                  boxShadow: "0px 0px 15px rgba(255,255,255,0.3)",
                },
                fontSize: "16px",
                borderRadius: "8px",
                marginBottom: "16px",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              className={styles.loginButton}
            >
              Login
              {/* Animated hover effect */}
              <span className={styles.buttonEffect}></span>
            </Button>
          </motion.div>
          
          {(state?.error) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Alert 
                variant="filled" 
                severity="error"
                sx={{ 
                  marginBottom: "16px",
                  backgroundColor: "rgba(211, 47, 47, 0.9)"
                }}
              >
                {state?.error}
              </Alert>
            </motion.div>
          )}
          
          <motion.div
            custom={3}
            variants={formFieldVariants}
            initial="hidden"
            animate="visible"
            className={styles.registerContainer}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                color: "#bbb", 
                marginBottom: "12px",
                textAlign: "center"
              }}
            >
              Don't Have an Account?
            </Typography>
            
            <Button 
              href="/register" 
              size="medium" 
              variant="contained" 
              color="success"
              fullWidth
              sx={{
                borderRadius: "8px",
                padding: "10px",
                background: "linear-gradient(45deg, #2e7d32, #4caf50)",
                "&:hover": {
                  background: "linear-gradient(45deg, #388e3c, #66bb6a)",
                  boxShadow: "0px 0px 15px rgba(76,175,80,0.4)",
                },
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              className={styles.registerButton}
            >
              Register
              {/* Animated hover effect */}
              <span className={styles.buttonEffect}></span>
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
};



export default LoginForm;