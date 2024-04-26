import mongoose, { Schema } from "mongoose";

const admin = {
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
};

const user = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  questions: {
    type: [Number],
    required: true,
    default: [],
  },
  started: {
    type: Boolean,
    default: false,
  },
  blocked: {
    type: Number,
    default: 0,
  },

  start_time: {
    type: Date,
    default: new Date(),
  },
  end_time: {
    type: Date,
    default: new Date(),
  },

  submitted_time: {
    type: Date,
  },

  submitted: {
    type: Boolean,
    default: false,
  },
  reloaded: {
    type: Number,
    default: 0,
  },
  score: {
    type: Number,
    default: 0,
  },

  answers: {
    type: [String],
    default: Array(30).fill("e"),
  },
};

const userSchema = new mongoose.Schema(user);
const adminSchema = new mongoose.Schema(admin);

export const User = mongoose.model("User", userSchema);
export const Admin = mongoose.model("Admin", adminSchema);
