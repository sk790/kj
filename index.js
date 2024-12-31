import express from "express";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});
console.log(process.env.PORT);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
