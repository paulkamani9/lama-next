import RegisterForm from "@/components/registerForm/page";
import styles from "./register.module.css";
import { handleRegister } from "@/lib";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};
export default RegisterPage;
