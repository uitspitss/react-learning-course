import { model, Schema } from "mongoose";

const todoSchema = new Schema(
  {
    id: String,
    text: String,
    checked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Todo = model("todo", todoSchema);
