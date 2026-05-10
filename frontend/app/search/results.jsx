import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../lib/restaurants.js";
import RestaurantCard from "../../components/home/RestaurantCard.jsx";

const { width, height } = Dimensions.get("window");

export default function Results() {
  const { filter } = useLocalSearchParams();

  const filtered = restaurants.filter(
    (r) =>
      r.category === filter || r.cuisine === filter || r.type.includes(filter),
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backBtn}
          activeOpacity={0.7}
        >
          <Ionicons
            name="chevron-back-outline"
            size={width * 0.06}
            color="#212529"
          />
        </TouchableOpacity>
        <Text style={styles.title}>{filter}</Text>
        <Text style={styles.count}>{filtered.length} places</Text>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <RestaurantCard
            item={item}
            onPress={() => router.push(`/restaurant/${item.id}`)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No restaurants for "{filter}".</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
    paddingTop: height * 0.015,
    paddingBottom: height * 0.02,
    gap: width * 0.02,
  },
  backBtn: { padding: width * 0.01 },
  title: {
    fontFamily: "PlayfairDisplayExtraBold",
    fontSize: width * 0.065,
    color: "#212529",
    flex: 1,
  },
  count: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.033,
    color: "#868e96",
  },
  listContent: { paddingBottom: height * 0.05 },
  empty: { alignItems: "center", marginTop: height * 0.1 },
  emptyText: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.04,
    color: "#adb5bd",
  },
});
