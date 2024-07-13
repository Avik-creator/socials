import mongoose, { Schema } from "mongoose";

interface User {
  name: string;
  image: string;
  email: string;
  username: string;
  bio: string;

  instagram: string;
  facebook: string;
  github: string;
}

export const userSchema: Schema<User> = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
    max: 4000,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },

  instagram: {
    type: String,
  },
  facebook: {
    type: String,
  },
  github: {
    type: String,
  },
});
