"use client";
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const LoginForm = () => {

    const [state, formAction] = useFormState(login, undefined);

    const router = useRouter()

    // useEffect(()=>{
    //     state?.success && router.push('/login')
    // },[state?.success,router]);
    
    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="Username" name="username"></input>
           
            <input type="password" placeholder="Password" name="password"></input>
           
            <button>Login</button>
            {state?.error}
            <Link href="/register">
                {"Don't have an account?"} <b>Register</b>
            </Link>
        </form>
    )
}

export default LoginForm