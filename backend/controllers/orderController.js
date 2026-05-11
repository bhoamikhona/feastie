import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

const DELIVERY_FEE = 3.99;
const TAX_RATE = 0.08875;

export const createOrder = async function (req, res) {
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const subtotal = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    const tax = parseFloat((subtotal * TAX_RATE).toFixed(2));
    const total = parseFloat((subtotal + DELIVERY_FEE + tax).toFixed(2));

    const items = cart.items.map((item) => ({
      itemId: item.itemId,
      name: item.name,
      restaurant: item.restaurant,
      restaurantId: item.restaurantId,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
    }));

    const order = await Order.create({
      user: req.user._id,
      items,
      subtotal: parseFloat(subtotal.toFixed(2)),
      deliveryFee: DELIVERY_FEE,
      tax,
      total,
      deliveryAddress: req.user.address,
    });

    await Cart.findOneAndDelete({ user: req.user._id });
    return res.status(201).json(order);
  } catch (error) {
    console.error("Order error:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const getOrders = async function (req, res) {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    return res.json(orders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async function (req, res) {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    return res.json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateOrderStatus = async function (req, res) {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    if (order.user.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    order.status = req.body.status;
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
