import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import authRoutes from "./routes/AuthRoutes";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth",authRoutes);

app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: " GET, POST, PUT, PATCH, DELETE ",
    credentials: true,
  })
);

const dbUrl = process.env.db_URL;

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`Server is lostening at port ${port}`);
});

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log(`DB connection successful!`);
  })
  .catch((err) => console.log(err.message));
