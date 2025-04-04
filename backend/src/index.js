import express from "express";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import getMessage from "./routes/message.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

app.use("/api/message", getMessage);

app.listen(5001, () => {
  console.log(`server is running on port ${PORT}`);
  connectDB();
});
