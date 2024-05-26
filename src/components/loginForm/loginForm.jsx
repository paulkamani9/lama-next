"use client";
import { useFormState } from "react-dom";
import { login } from "@/lib";
import styles from "./loginForm.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input
        type="text"
        placeholder="Enter username"
        name="username"
        className={styles.input}
      />

      <input
        type="password"
        placeholder="Enter password"
        name="password"
        className={styles.input}
      />
      {state?.error}
      <button className={styles.button}>Login</button>
      <Link href="/register">
        Do not have an account? <b />
        Register
      </Link>
    </form>
  );
};

export default LoginForm;
