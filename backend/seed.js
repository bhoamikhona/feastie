import mongoose from "mongoose";
import dotenv from "dotenv";
import Restaurant from "./models/Restaurant.js";
import User from "./models/User.js";
import Order from "./models/Order.js";
import restaurantsData from "./data/restaurantsData.js";
import usersData from "./data/usersData.js";
import generateOrdersData from "./data/ordersData.js";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Restaurant.deleteMany({});
    await User.deleteMany({});
    await Order.deleteMany({});
    console.log("Cleared existing data");

    await Restaurant.insertMany(restaurantsData);
    console.log(`Seeded ${restaurantsData.length} restaurants`);

    const users = await User.create(usersData);
    console.log(`Seeded ${users.length} users`);

    const ordersData = generateOrdersData(users);
    await Order.insertMany(ordersData);
    console.log(`Seeded ${ordersData.length} orders`);

    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
};

seed();
