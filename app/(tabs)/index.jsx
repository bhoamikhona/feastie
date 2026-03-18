import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import restaurants from "../../lib/restaurants.js";
import Header from "../../components/home/Header.jsx";
import SearchBar from "../../components/home/SearchBar.jsx";
import CategoryList from "../../components/home/CategoryList.jsx";
import RestaurantCard from "../../components/home/RestaurantCard.jsx";

const { width, height } = Dimensions.get("window");

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredRestaurants = restaurants.filter((r) => {
    const matchesFilter =
      selectedFilter === "All" ||
      r.category === selectedFilter ||
      r.cuisine === selectedFilter ||
      r.type.includes(selectedFilter);

    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <FlatList
        data={filteredRestaurants}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
            <Header />
            <SearchBar value={search} onChangeText={setSearch} />
            <Text style={styles.sectionTitle}>Categories</Text>
            <CategoryList
              categories={[...new Set(restaurants.map((r) => r.category))]}
              cuisines={[...new Set(restaurants.map((r) => r.cuisine))]}
              types={[...new Set(restaurants.flatMap((r) => r.type))]}
              selectedFilter={selectedFilter}
              onSelect={setSelectedFilter}
            />
            <Text style={styles.sectionTitle}>Open Restaurants</Text>
          </View>
        }
        renderItem={({ item }) => (
          <RestaurantCard
            item={item}
            onPress={() => router.push(`/restaurant/${item.id}`)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No restaurants found.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  sectionTitle: {
    fontFamily: "PlayfairDisplayExtraBold",
    fontSize: width / 15,
    color: "#212529",
    paddingHorizontal: width * 0.05,
    marginBottom: height / 60,
    marginTop: height * 0.005,
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
