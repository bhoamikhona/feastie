import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import restaurants from "../../lib/restaurants.js";
import SearchBar from "../../components/SearchBar.jsx";
import { GridSection } from "../../components/GridSection.jsx";
import RestaurantCard from "../../components/home/RestaurantCard.jsx";

const { width, height } = Dimensions.get("window");

// ── Static image maps from assets/images/search/ ─────────────────────────────

const CATEGORY_IMAGES = {
  Pizza: require("../../assets/images/search/categories/pizza.jpg"),
  Coffee: require("../../assets/images/search/categories/coffee.jpg"),
  Doughnuts: require("../../assets/images/search/categories/doughnuts.jpeg"),
  Cake: require("../../assets/images/search/categories/cake.jpg"),
  Pasta: require("../../assets/images/search/categories/pasta.jpeg"),
  Noodles: require("../../assets/images/search/categories/noodles.jpeg"),
  Burgers: require("../../assets/images/search/categories/burger.jpg"),
};

const CUISINE_IMAGES = {
  Italian: require("../../assets/images/search/cuisine/italian.jpg"),
  American: require("../../assets/images/search/cuisine/american.jpg"),
  Chinese: require("../../assets/images/search/cuisine/chinese.jpg"),
};

const TYPE_IMAGES = {
  Breakfast: require("../../assets/images/search/type/breakfast.jpg"),
  Lunch: require("../../assets/images/search/type/lunch.jpg"),
  Dinner: require("../../assets/images/search/type/dinner.jpg"),
  Dessert: require("../../assets/images/search/type/dessert.jpg"),
};

// ── Derived from restaurants.js ───────────────────────────────────────────────

const CATEGORIES = [...new Set(restaurants.map((r) => r.category))];
const CUISINES = [...new Set(restaurants.map((r) => r.cuisine))];
const TYPES = [...new Set(restaurants.flatMap((r) => r.type))];

// ── Screen ────────────────────────────────────────────────────────────────────

export default function Search() {
  const [search, setSearch] = useState("");

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
