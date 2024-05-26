"use server";
import { Post } from "@/models";
import { connectToDb } from "@/utils";
import { revalidatePath } from "next/cache";

export const addPost = async (previousState, Data) => {
  const { title, desc, slug, userId } = Object.fromEntries(Data);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("New post added to db");
    revalidatePath("/blog");
    revalidatePath("admin");
  } catch (error) {
    console.log(error);
    return { message: "Unable to add post" };
  }
};
