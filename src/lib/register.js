"use server";
import bcrypt from "bcryptjs";
import { User } from "@/models";
import { connectToDb } from "@/utils";

export const handleRegister = async (previousState,formData) => {
  const { username, email, image, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords does not match" };
  }

  try {
    connectToDb();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.findOne({ email });
    if (user) {
      return { error: "User already exists" };
    }
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
    });
    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};
