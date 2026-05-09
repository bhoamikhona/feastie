import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const { token } = useAuth();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) fetchCart();
    else setCart([]);
  }, [token]);

  const fetchCart = async function () {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setCart(data.items || []);
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async function (item) {
    try {
      const response = await fetch(`${API_URL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      });
      const data = await response.json();
      setCart(data.items || []);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  const updateQuantity = async function (itemId, quantity) {
    try {
      const response = await fetch(`${API_URL}/api/cart/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity }),
      });
      const data = await response.json();
      setCart(data.items || []);
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  const removeFromCart = async function (itemId) {
    try {
      const response = await fetch(`${API_URL}/api/cart/${itemId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setCart(data.items || []);
    } catch (error) {
      console.error("Failed to remove from cart:", error);
    }
  };

  const clearCart = async function () {
    try {
      await fetch(`${API_URL}/api/cart`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart([]);
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        cartCount,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
