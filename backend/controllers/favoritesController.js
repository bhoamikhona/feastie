import User from "../models/User.js";
import Restaurant from "../models/Restaurant.js";

export const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const favorites = await Restaurant.find({ id: { $in: user.favorites } });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const toggleFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { restaurantId } = req.params;

    const index = user.favorites.indexOf(restaurantId);
    if (index === -1) {
      user.favorites.push(restaurantId);
    } else {
      user.favorites.splice(index, 1);
    }

    await user.save();
    res.json({ favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
