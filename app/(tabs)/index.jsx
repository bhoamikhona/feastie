import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import data from "../../lib/data.js";
import Header from "../../components/home/Header.jsx";
import SearchBar from "../../components/home/SearchBar.jsx";
import CategoryList from "../../components/home/CategoryList.jsx";
import RestaurantCard from "../../components/home/RestaurantCard.jsx";

const { width, height } = Dimensions.get("window");

const categories = ["All", ...new Set(data.restaurants.map((r) => r.category))];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRestaurants = data.restaurants.filter((r) => {
    const matchesCategory =
      selectedCategory === "All" || r.category === selectedCategory;
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SafeAreaView style={styles.container}>
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
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />

            <Text style={styles.sectionTitle}>Open Restaurants</Text>
          </View>
        }
        renderItem={({ item }) => (
          <RestaurantCard
            item={item}
            onPress={() => alert("Opening " + item.name)}
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
