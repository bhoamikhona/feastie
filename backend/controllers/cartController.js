import Cart from "../models/Cart.js";

export const getCart = async function (req, res) {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    return res.json(cart || { items: [] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addToCart = async function (req, res) {
  const { itemId, name, restaurant, restaurantId, price, image, quantity } =
    req.body;
  const qty = quantity && quantity > 0 ? quantity : 1;

  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [
          {
            itemId,
            name,
            restaurant,
            restaurantId,
            price,
            image,
            quantity: qty,
          },
        ],
      });
      return res.status(201).json(cart);
    }

    const existing = cart.items.find((i) => i.itemId === itemId);

    if (existing) {
      existing.quantity += qty;
    } else {
      cart.items.push({
        itemId,
        name,
        restaurant,
        restaurantId,
        price,
        image,
        quantity: qty,
      });
    }

    await cart.save();
    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCartItem = async function (req, res) {
  const { quantity } = req.body;

  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find((i) => i.itemId === req.params.itemId);

    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    if (quantity <= 0) {
      cart.items = cart.items.filter((i) => i.itemId !== req.params.itemId);
    } else {
      item.quantity = quantity;
    }

    await cart.save();
    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const removeCartItem = async function (req, res) {
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter((i) => i.itemId !== req.params.itemId);

    await cart.save();
    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const clearCart = async function (req, res) {
  try {
    await Cart.findOneAndDelete({ user: req.user._id });
    res.json({ message: "Cart cleared" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
