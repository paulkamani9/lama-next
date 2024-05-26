const { User } = require("@/models");
const { connectToDb } = require("@/utils");

const getUser = async (userId) => {
  try {
    await connectToDb();
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    throw new Error("Failed to fetch user");
  }
};

export default getUser;
