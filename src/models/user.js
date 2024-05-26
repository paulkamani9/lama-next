import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 1, // Adjust according to your minimum required length
      maxlength: 255, // Adjust according to your maximum allowed length
    },

    password: {
      type: String,
      required: false,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
    },

    image: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
