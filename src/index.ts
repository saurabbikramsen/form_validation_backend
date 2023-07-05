import express from "express";
import cors from "cors";
import { signupRouter } from "../router/router";
import mongoose, { Mongoose } from "mongoose";
import bodyParser from "body-parser";
const app = express();
const PORT = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(signupRouter);

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/signup", () => {
  console.log("connected to database");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
