import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export const register = async function (req, res) {
  // console.log("register hit", req.body);
  const { name, email, password, confirmPassword } = req.body;

  try {
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // console.log("checking if user exists");

    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // console.log("creating user");

    const user = await User.create({ name, email, password });

    // console.log("user created", user);

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    // console.log("error:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const login = async function (req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Inavlid email or password" });
    }

    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserProfile = async function (req, res) {
  const user = await (await import("../models/User.js")).default
    .findById(req.user._id)
    .select("-password");
  return res.json(user);
};

export const updateUserProfile = async function (req, res) {
  try {
    const user = await User.findById(req.user._id);
    const { name, phone, address } = req.body;

    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (req.body.payment) {
      const p = req.body.payment;
      user.payment = {
        cardHolder: p.cardHolder ?? user.payment?.cardHolder,
        cardNumber: p.cardNumber ?? user.payment?.cardNumber,
        expiry: p.expiry ?? user.payment?.expiry,
        last4: p.last4 ?? user.payment?.last4,
        brand: p.brand ?? user.payment?.brand,
      };
    }
    if (address) {
      user.address = {
        street: address.street ?? user.address.street,
        apt: address.apt ?? user.address.apt,
        city: address.city ?? user.address.city,
        state: address.state ?? user.address.state,
        zip: address.zip ?? user.address.zip,
      };
    }

    const updated = await user.save();

    return res.json({
      _id: updated._id,
      name: updated.name,
      email: updated.email,
      phone: updated.phone,
      address: updated.address,
      payment: updated.payment,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteAccount = async function (req, res) {
  try {
    const userId = req.user._id;

    const Cart = (await import("../models/Cart.js")).default;
    const Order = (await import("../models/Order.js")).default;
    const User = (await import("../models/User.js")).default;

    await Cart.findOneAndDelete({ user: userId });
    await Order.deleteMany({ user: userId });
    await User.findByIdAndDelete(userId);

    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
