import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { Todo } from "./models.js";

const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(
    swaggerJSDoc({
      swaggerDefinition: { info: { title: "todo api", version: "1.0.0" } },
      apis: ["./index.js"],
    })
  )
);

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
  })
  .catch((error) => {
    console.error("failed to connect to db");
  });

app.get("/", (req, res) => res.json({ status: "up" }));

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.get("/todos/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
});

app.post("/todos", async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json(todo);
});

app.patch("/todos", async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findById(id);
  const updatedTodo = await todo.updateOne({ _id: id });
  res.status(204);
});

app.delete("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findById(id);
  res.status(204);
});

app.listen(PORT, () => {
  console.log(`app is runnning on port ${PORT}`);
});
