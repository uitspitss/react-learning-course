import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import endpoints from "./endpoints.js";
import swaggerFile from "./swagger-output.json" assert { type: "json" };

const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const ORIGIN_URL = process.env.ORIGIN_URL;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

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

app.listen(PORT, () => {
  console.log(`app is runnning on port ${PORT}`);
});

endpoints(app);
