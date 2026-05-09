import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, default: "" },
  price: { type: Number, required: true },
  image: { type: String, default: "" },
});

const restaurantSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, default: "" },
    category: { type: String, required: true },
    cuisine: { type: String, required: true },
    type: [{ type: String }],
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
      coordinates: { lat: Number, lng: Number },
    },
    rating: {
      average: Number,
      count: Number,
    },
    delivery: {
      is_available: Boolean,
      fee: Number,
      free_above: Number,
      estimated_time_min: Number,
      estimated_time_max: Number,
      radius_miles: Number,
    },
    hours: { type: mongoose.Schema.Types.Mixed },
    tags: [String],
    images: {
      cover: { type: String, default: "" },
      thumbnail: { type: String, default: "" },
    },
    badges: [String],
    menu: [menuItemSchema],
    contact: {
      phone: String,
      email: String,
      website: String,
    },
    is_open_now: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default mongoose.model("Restaurant", restaurantSchema);
