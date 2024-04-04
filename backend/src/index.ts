import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"))
  .catch(error => console.error("Database connection failed:", error));

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});


app.listen(7000, () => {
  console.log("server started on localhost:7000");
});