import { Post } from "@/models";
import { connectToDb } from "@/utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  noStore( );
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw new Error("Failed to fetch posts");
  }
};


