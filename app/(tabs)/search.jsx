import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Search() {
  const categories = [
    {
      id: 1,
      name: "Pizza",
      image: require("../../assets/images/search/pizza.jpg"),
    },
    {
      id: 2,
      name: "Burger",
      image: require("../../assets/images/search/burger.jpg"),
    },
    {
      id: 3,
      name: "Drinks",
      image: require("../../assets/images/search/drinks.jpg"),
    },
    {
      id: 4,
      name: "Dessert",
      image: require("../../assets/images/search/dessert.jpg"),
    },
  ];

  const cuisines = [
    {
      id: 1,
      name: "Italian",
      image: require("../../assets/images/search/italian.jpg"),
    },
    {
      id: 2,
      name: "Indian",
      image: require("../../assets/images/search/indian.jpg"),
    },
    {
      id: 3,
      name: "Chinese",
      image: require("../../assets/images/search/chinese.jpg"),
    },
    {
      id: 4,
      name: "Mexican",
      image: require("../../assets/images/search/mexican.jpg"),
    },
    {
      id: 5,
      name: "American",
      image: require("../../assets/images/search/american.jpg"),
    },
    {
      id: 6,
      name: "Thai",
      image: require("../../assets/images/search/thai.jpg"),
    },
    {
      id: 7,
      name: "Japanese",
      image: require("../../assets/images/search/japanese.jpg"),
    },
    {
      id: 8,
      name: "Mediterranean",
      image: require("../../assets/images/search/mediterranean.jpg"),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#666"
          style={styles.searchInput}
        />

        <Text style={styles.sectionTitle}>Categories</Text>

        <View style={styles.grid}>
          {categories.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <View style={styles.imageWrapper}>
                <Image source={item.image} style={styles.cardImage} />
              </View>
              <Text style={styles.cardText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Cuisine</Text>

        <View style={styles.grid}>
          {cuisines.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <View style={styles.imageWrapper}>
                <Image source={item.image} style={styles.cardImage} />
              </View>
              <Text style={styles.cardText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 25,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 28,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    color: "#111",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  card: {
    width: "47%",
    marginBottom: 18,
    alignItems: "center",
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#f2f2f2",
    marginBottom: 10,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
});