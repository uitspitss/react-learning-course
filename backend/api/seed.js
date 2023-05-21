import mongoose from "mongoose";
import { Todo } from "./src/models.js";

console.log(process.env);
const DB_URL = process.env.DB_URL;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const todos = [
  {
    text: "Inventore porro quaerat laborum sit.",
  },
  { text: "molestias qui." },
  {
    text: "Quo ut ipsam sint quod autem ratione qui quia ad officiis accusamus dolore odio. Illum aliquam eum ",
  },
  {
    text: "Tenetur fuga minima rerum ut aut ipsum aut similique omnis.",
  },
  {
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
  .then(async () => {
    console.log("connected to db...");

    await Todo.insertMany(todos);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    mongoose.connection.close();

    console.log("connection is closed");
  });
