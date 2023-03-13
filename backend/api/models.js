import { model, Schema } from "mongoose";

const todoSchema = new Schema(
  {
    text: String,
  },
  { timestamps: true }
);

export const Todo = model("todo", todoSchema);
