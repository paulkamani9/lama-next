"use client";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { addUser } from "@/lib";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Enter Password" />
      <input type="text" name="image" placeholder="Image source" />
      <select name="isAdmin">
        <option value="false">User</option>
        <option value="true">Admin</option>
      </select>
      <button>Add User</button>
      {state && state.message}
    </form>
  );
};

export default AdminUserForm;
