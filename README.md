# 🍽️ Feastie — Food Delivery App

A full-stack food delivery mobile application built with React Native (Expo), Node.js/Express, and MongoDB Atlas.

**CS 639 — Mobile Application Development | Pace University | Spring 2026**
**Author:** Bhoami K Khona | bhoami.k.khona@gmail.com | [github.com/bhoamikhona/feastie](https://github.com/bhoamikhona/feastie) | [Demo Video](https://drive.google.com/file/d/1uIPqr0Rape5y1PKOSRz9sIXJbAWBSEM2/view?usp=sharing)

---

## Tech Stack

| Layer    | Technology                            |
| -------- | ------------------------------------- |
| Frontend | React Native + Expo                   |
| Routing  | Expo Router (file-based)              |
| Backend  | Node.js + Express                     |
| Database | MongoDB Atlas                         |
| Auth     | JWT + expo-secure-store               |
| State    | React Context (Auth, Cart, Favorites) |

---

## Project Structure

```
feastie/
  backend/
    controllers/        ← Route handlers (auth, cart, orders, restaurants, favorites)
    data/               ← Seed data (restaurantsData.js, usersData.js, ordersData.js)
    middleware/         ← JWT protect middleware
    models/             ← Mongoose schemas (User, Cart, Order, Restaurant)
    routes/             ← API route definitions
    server.js           ← Express entry point
    seed.js             ← Database seeder
    .env                ← Environment variables (not committed)
  frontend/
    app/
      (auth)/           ← Login & Register screens
      (tabs)/           ← Home, Search, Cart, Profile tabs
      orders/           ← Order history & order detail
      restaurant/       ← Restaurant detail & item detail
      search/           ← Search results
      account.jsx       ← Account details (edit profile, address, payment)
      index.jsx         ← Landing page
      _layout.jsx       ← Root navigation layout
    assets/             ← Fonts & images
    components/         ← Reusable UI components
    context/            ← AuthContext, CartContext, FavoritesContext
    lib/                ← Static data & colors
    utils/              ← Helper functions
    .env                ← Environment variables (not committed)
```

---

## Environment Variables

### Backend — `backend/.env`

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/feastie
JWT_SECRET=your_jwt_secret_key_here
PORT=8000
```

| Variable     | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| `MONGO_URI`  | MongoDB Atlas connection string                                 |
| `JWT_SECRET` | Secret key used to sign JWT tokens — use any long random string |
| `PORT`       | Port the backend server runs on (default: 8000)                 |

### Frontend — `frontend/.env`

```env
EXPO_PUBLIC_API_URL=http://<YOUR_LOCAL_IP>:8000
```

| Variable              | Description                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------- |
| `EXPO_PUBLIC_API_URL` | Base URL for all API calls. Must be your machine's local network IP address, not localhost. |

> ⚠️ **Important:** Find your IP with `ipconfig` (Windows) or `ifconfig` (Mac). Update this every time you switch machines. The Expo Go app runs on your phone and cannot reach `localhost` on your computer.

---

## Setup & Installation

### Step 1 — Clone the repo

```bash
git clone https://github.com/bhoamikhona/feastie.git
cd feastie
```

### Step 2 — Backend setup

```bash
cd backend
npm install
```

Create `backend/.env` with your MongoDB URI, JWT secret, and port (see above).

### Step 3 — Frontend setup

```bash
cd ../frontend
npm install
```

Create `frontend/.env` with your local IP (see above).

### Step 4 — Seed the database (first time only)

```bash
cd backend
node seed.js
```

This seeds 9 restaurants, 3 users, and sample orders.

### Step 5 — Start the backend

```bash
cd backend
npm start
```

You should see:

```
Connected to MongoDB
Server running on port 8000
```

### Step 6 — Start the frontend

```bash
cd frontend
npx expo start
```

Scan the QR code with Expo Go (Android) or the Camera app (iOS).

---

## API Routes

| Method | Endpoint                     | Auth Required | Description                        |
| ------ | ---------------------------- | ------------- | ---------------------------------- |
| POST   | /api/auth/register           | No            | Register a new user                |
| POST   | /api/auth/login              | No            | Login and receive JWT              |
| GET    | /api/auth/profile            | Yes           | Get current user profile           |
| PUT    | /api/auth/profile            | Yes           | Update profile / address / payment |
| DELETE | /api/auth/profile            | Yes           | Delete account, cart, and orders   |
| GET    | /api/restaurants             | No            | Get all restaurants                |
| GET    | /api/restaurants/:id         | No            | Get restaurant by ID               |
| GET    | /api/cart                    | Yes           | Get user's cart                    |
| POST   | /api/cart                    | Yes           | Add item to cart                   |
| PUT    | /api/cart/:itemId            | Yes           | Update cart item quantity          |
| DELETE | /api/cart/:itemId            | Yes           | Remove item from cart              |
| DELETE | /api/cart                    | Yes           | Clear entire cart                  |
| POST   | /api/orders                  | Yes           | Place order from cart              |
| GET    | /api/orders                  | Yes           | Get order history                  |
| GET    | /api/orders/:id              | Yes           | Get order by ID                    |
| PUT    | /api/orders/:id/status       | Yes           | Update order status                |
| GET    | /api/favorites               | Yes           | Get favorited restaurants          |
| POST   | /api/favorites/:restaurantId | Yes           | Toggle favorite on/off             |

---

## CRUD Operations

| Operation  | Examples                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------- |
| **Create** | Register user, Place order, Add to cart, Add favorite                                        |
| **Read**   | Fetch restaurants, View cart, Order history, Order detail, Profile, Search & filter          |
| **Update** | Cart quantity, User profile, Delivery address, Payment info, Order status simulation         |
| **Delete** | Remove cart item, Clear cart, Unfavorite restaurant, Delete account (cascades cart + orders) |

---

## Features

- 🔐 JWT authentication with secure token storage
- 🏠 Home feed with category, cuisine, and meal type filters
- 🔍 Live search and filter by category/cuisine/type
- 🛒 Cart with quantity controls, trash icon, and order summary
- 📦 Order placement with real-time status simulation (pending → delivered)
- ❤️ Favorites — heart button on every restaurant card
- 👤 Profile with order count and favorites count
- 📋 Account details with inline editing for personal info, address, and payment
- 🗑️ Delete account with cascade deletion

---

## Dependencies

### Backend

```bash
npm install express mongoose bcryptjs jsonwebtoken dotenv@16.4.5 cors
npm install --save-dev nodemon
```

### Frontend

```bash
npx expo install expo-router expo-font expo-secure-store expo-status-bar expo-linear-gradient expo-constants expo-linking
```
