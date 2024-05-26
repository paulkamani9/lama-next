"use server";

import { Post } from "@/models";
import { connectToDb } from "@/utils";
import { revalidatePath } from "next/cache";

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted form db");
    revalidatePath("/blog");
    revalidatePath("/admin")
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
