"use client";

import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { addPost } from "@/lib";

const AdminPostForm =  ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="image" placeholder="img" />
      <textarea type="text" name="desc" placeholder="Description" rows={10} />
      <button>Add Post</button>
      {state && state.message}
    </form>
  );
};
export default AdminPostForm;
