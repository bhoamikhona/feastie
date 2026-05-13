import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import SearchBar from "../../components/SearchBar.jsx";
import { GridSection } from "../../components/GridSection.jsx";
import RestaurantCard from "../../components/home/RestaurantCard.jsx";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const { width, height } = Dimensions.get("window");

const CATEGORY_IMAGES = {
  Pizza: require("../../assets/images/search/categories/pizza.png"),
  Coffee: require("../../assets/images/search/categories/coffee.png"),
  Doughnuts: require("../../assets/images/search/categories/doughnuts.png"),
  Cake: require("../../assets/images/search/categories/cake.png"),
  Pasta: require("../../assets/images/search/categories/pasta.png"),
  Noodles: require("../../assets/images/search/categories/noodles.png"),
  Burgers: require("../../assets/images/search/categories/burger.png"),
};

const CUISINE_IMAGES = {
  Italian: require("../../assets/images/search/cuisine/italian.png"),
  American: require("../../assets/images/search/cuisine/american.png"),
  Chinese: require("../../assets/images/search/cuisine/chinese.png"),
};

const TYPE_IMAGES = {
  Breakfast: require("../../assets/images/search/type/breakfast.png"),
  Lunch: require("../../assets/images/search/type/lunch.png"),
  Dinner: require("../../assets/images/search/type/dinner.png"),
  Dessert: require("../../assets/images/search/type/dessert.png"),
};

export default function Search() {
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loadingRestaurants, setLoadingRestaurants] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(`${API_URL}/api/restaurants`);
        const data = await response.json();
        setRestaurants(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      } finally {
        setLoadingRestaurants(false);
      }
    };
    fetchRestaurants();
  }, []);

  const CATEGORIES = [...new Set(restaurants.map((r) => r.category))];
  const CUISINES = [...new Set(restaurants.map((r) => r.cuisine))];
  const TYPES = [...new Set(restaurants.flatMap((r) => r.type))];

  const isSearching = search.trim().length > 0;

  const searchResults = isSearching
    ? restaurants.filter((r) => {
        const q = search.toLowerCase();
        return (
          r.name.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q) ||
          r.cuisine.toLowerCase().includes(q) ||
          r.type.some((t) => t.toLowerCase().includes(q))
        );
      })
    : [];

  const handleFilterSelect = (filter) => {
    router.push(`/search/results?filter=${encodeURIComponent(filter)}`);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <FlatList
        data={isSearching ? searchResults : []}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View>
            <Text style={styles.pageTitle}>Search</Text>
            <SearchBar value={search} onChangeText={setSearch} />

            {isSearching ? (
              <Text style={styles.resultsCount}>
                {searchResults.length} result
                {searchResults.length !== 1 ? "s" : ""} for "{search}"
              </Text>
            ) : (
              <>
                <GridSection
                  title="Categories"
                  items={CATEGORIES}
                  getImage={(item) => CATEGORY_IMAGES[item] ?? null}
                  onSelect={handleFilterSelect}
                />
                <GridSection
                  title="Cuisine"
                  items={CUISINES}
                  getImage={(item) => CUISINE_IMAGES[item] ?? null}
                  onSelect={handleFilterSelect}
                />
                <GridSection
                  title="Type"
                  items={TYPES}
                  getImage={(item) => TYPE_IMAGES[item] ?? null}
                  onSelect={handleFilterSelect}
                />
              </>
            )}
          </View>
        }
        renderItem={({ item }) => (
          <RestaurantCard
            item={item}
            onPress={() => router.push(`/restaurant/${item.id}`)}
          />
        )}
        ListEmptyComponent={
          isSearching ? (
            <View style={styles.empty}>
              <Text style={styles.emptyText}>No restaurants found.</Text>
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContent: {
    paddingBottom: height * 0.05,
  },
  pageTitle: {
    fontFamily: "PlayfairDisplayExtraBold",
    fontSize: width * 0.07,
    color: "#212529",
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.015,
    marginBottom: height * 0.005,
  },
  resultsCount: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.035,
    color: "#868e96",
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.01,
    paddingBottom: height * 0.005,
  },
  empty: {
    alignItems: "center",
    marginTop: height * 0.05,
  },
  emptyText: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.04,
    color: "#adb5bd",
  },
});
