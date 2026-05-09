import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import restaurants from "../../lib/restaurants.js";
import SearchBar from "../../components/SearchBar.jsx";
import { GridSection } from "../../components/GridSection.jsx";

const { width, height } = Dimensions.get("window");

export default function Search() {
  const [search, setSearch] = useState("");

  const categories = [...new Set(restaurants.map((r) => r.category))];
  const cuisines = [...new Set(restaurants.map((r) => r.cuisine))];
  const types = [...new Set(restaurants.flatMap((r) => r.type))];

  const usedCovers = new Set();

  const getUniqueImage = (matchFn) => {
    const match = restaurants.find(
      (r) => matchFn(r) && !usedCovers.has(r.images?.cover),
    );
    if (match) {
      usedCovers.add(match.images.cover);
      return match.images.cover;
    }
    return restaurants.find(matchFn)?.images?.cover ?? null;
  };

  const getImageForCategory = (category) =>
    getUniqueImage((r) => r.category === category);

  const getImageForCuisine = (cuisine) =>
    getUniqueImage((r) => r.cuisine === cuisine);

  const TYPE_IMAGE_OVERRIDES = {
    Pizza: require("../../assets/images/pizza.jpg"),
    Lunch: require("../../assets/images/menus/pizza-express/padana.jpg"),
    Dinner: require("../../assets/images/menus/olive-garden/lasagna-classico.jpeg"),
  };

  const getImageForType = (type) =>
    TYPE_IMAGE_OVERRIDES[type] ?? getUniqueImage((r) => r.type.includes(type));

  const handleSelect = (filter) => {
    console.log("Selected filter:", filter);
    // TODO: navigate to filtered results
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <FlatList
        data={[]}
        keyExtractor={() => ""}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
            <Text style={styles.pageTitle}>Search</Text>
            <SearchBar value={search} onChangeText={setSearch} />

            <GridSection
              title="Categories"
              items={categories}
              getImage={getImageForCategory}
              onSelect={handleSelect}
            />

            <GridSection
              title="Cuisine"
              items={cuisines}
              getImage={getImageForCuisine}
              onSelect={handleSelect}
            />

            <GridSection
              title="Type"
              items={types}
              getImage={getImageForType}
              onSelect={handleSelect}
            />
          </View>
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
});
