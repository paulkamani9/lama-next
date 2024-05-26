import { User } from "@/models";
import { connectToDb } from "@/utils";

const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw new Error("Failed to fetch users");
  }
};

export default getUsers;
