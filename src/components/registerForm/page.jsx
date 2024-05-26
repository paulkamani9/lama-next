"use client";
import { useFormState } from "react-dom";
import { handleRegister } from "@/lib";
import styles from "./registerForm.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(handleRegister, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input
        type="text"
        placeholder="Enter username"
        name="username"
        className={styles.input}
      />
      <input
        type="email"
        placeholder="Enter email"
        name="email"
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Enter password"
        name="password"
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Confirm password"
        name="passwordRepeat"
        className={styles.input}
      />
      {state?.error}
      <button className={styles.button}>Register</button>
      <Link href="/login">
        Have an account? <b />
        Login
      </Link>
    </form>
  );
};

export default RegisterForm;
