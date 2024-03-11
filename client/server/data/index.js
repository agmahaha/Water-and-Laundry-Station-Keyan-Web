import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    username: "dummy",
    email: "dummy@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    __v: 0,
  }
];