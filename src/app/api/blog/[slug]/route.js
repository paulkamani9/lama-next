import { Post } from "@/models";
import { connectToDb } from "@/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    await connectToDb(); // Ensure the database connection is awaited
    const post = await Post.findOne({ slug }); // Correctly query by slug and await the result
    

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post); // Return the found post as JSON
  } catch (error) {
    console.error("Error fetching post:", error.message);
    return NextResponse.json(
      { message: "Failed to fetch post", error: error.message },
      { status: 500 }
    );
  }
};
