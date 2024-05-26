"use server";
const { User, Post } = require("@/models");
const { connectToDb } = require("@/utils");
const { revalidatePath } = require("next/cache");

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
