import express from "express";
import cors from "cors";
import { connectToDb } from "./libs/connectToDb.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import documentRoute from "./routes/document.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "./dist")));

app.use("/api/v1/document", documentRoute);
app.use("/api/v1/auth", authRoute);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
  connectToDb();
});
