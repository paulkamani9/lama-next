"use server";

import { User } from "@/models";
import { connectToDb } from "@/utils";
import { revalidatePath } from "next/cache";

export const addUser = async (previousState,formData) => {
  const { username, email, password, image } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      image,
    });

    await newUser.save();
    console.log("new user created");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
