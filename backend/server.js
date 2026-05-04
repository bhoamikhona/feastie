import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/order.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) =>
  res.json({ message: "server started successfully" }),
);

mongoose
  .connect("process.env.MONGO_URI")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () =>
      console.log(`Server started running on port ${process.env.PORT || 8000}`),
    );
  })
  .catch((err) => console.error("Failed to connect to MongoDB", err));
