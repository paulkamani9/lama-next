import { Post } from "@/models";
const { connectToDb } = require("@/utils");

const getPost = async (slug) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    throw new Error({ message: error.message });
  }
};

export default getPost;
