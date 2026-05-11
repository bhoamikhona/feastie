import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const { token } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (token) fetchFavorites();
    else setFavorites([]);
  }, [token]);

  const fetchFavorites = async () => {
    try {
      const response = await fetch(`${API_URL}/api/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      // Store just the restaurant IDs for quick lookup
      setFavorites(Array.isArray(data) ? data.map((r) => r.id) : []);
    } catch (error) {
      console.error("Failed to fetch favorites:", error);
    }
  };

  const toggleFavorite = async (restaurantId) => {
    try {
      const response = await fetch(`${API_URL}/api/favorites/${restaurantId}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setFavorites(data.favorites);
    } catch (error) {
      console.error("Failed to toggle favorite:", error);
    }
  };

  const isFavorite = (restaurantId) => favorites.includes(restaurantId);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite, fetchFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error("useFavorites must be used within a FavoritesProvider");
  return context;
}
