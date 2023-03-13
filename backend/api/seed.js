import mongoose from "mongoose";
import { Todo } from "./models.js";

console.log(process.env)
const DB_URL = process.env.DB_URL;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const todos = [
  {_id: "640EB542BC1E7500008D76A1",  text: "Inventore porro quaerat laborum sit." },
  {_id: "640EB542AFB44300008B8259", text: "molestias qui." },
  {
    _id: "640EB54235CC830000B8E58B",
    text: "Quo ut ipsam sint quod autem ratione qui quia ad officiis accusamus dolore odio. Illum aliquam eum ",
  },
  { _id: "640EB542F29E240000B9E85C", text: "Tenetur fuga minima rerum ut aut ipsum aut similique omnis." },
  {
    _id: "640EB542F9A6280000597EA2",
    text: "Pariatur quas rerum similique dolor aut vel qui voluptas fugiat quibusdam aut libero. Placeat sed c",
  },
];

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: DB_USERNAME,
    pass: DB_PASSWORD,
    dbName: DB_NAME,
  })
  .then(() => {
    console.log("connected to db...");

    Todo.insertMany(todos);
  }).then(() => {
    mongoose.connection.close();
  });

export const seed = async () => {
  console.log("seeding...");
  console.log(await Todo.find())
  // await Todo.insertMany(todos);
  console.log("seeding end!");
};

