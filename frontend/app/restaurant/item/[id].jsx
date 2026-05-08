import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import restaurants from "../../../lib/restaurants";

const { width, height } = Dimensions.get("window");

export default function ItemDetails() {
  const { id } = useLocalSearchParams();
  const [count, setCount] = useState(1);
  const [liked, setLiked] = useState(false);

  let item = null;
  let restaurant = null;

  for (const r of restaurants) {
    const found = r.menu.find((m) => m.id === id);
    if (found) {
      item = found;
      restaurant = r;
      break;
    }
  }

  if (!item || !restaurant) return null;

  const total = (item.price * count).toFixed(2);

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={item.image}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="chevron-back-outline"
            size={width * 0.055}
            color="#212529"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.heartButton}
          onPress={() => setLiked(!liked)}
        >
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={width * 0.055}
            color={liked ? "#fd7e14" : "#212529"}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.sheet}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.sheetContent}
      >
        <View style={styles.nameRow}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        </View>

        <View style={styles.restaurantRow}>
          <Ionicons
            name="storefront-outline"
            size={width * 0.038}
            color="#868e96"
          />
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaChip}>
            <Ionicons name="star" size={width * 0.035} color="#fd7e14" />
            <Text style={styles.metaChipText}>{restaurant.rating.average}</Text>
          </View>
          <View style={styles.metaChip}>
            <Ionicons
              name="bicycle-outline"
              size={width * 0.035}
              color="#495057"
            />
            <Text style={styles.metaChipText}>
              {restaurant.delivery.fee === 0
                ? "Free"
                : `$${restaurant.delivery.fee}`}
            </Text>
          </View>
          <View style={styles.metaChip}>
            <Ionicons
              name="time-outline"
              size={width * 0.035}
              color="#495057"
            />
            <Text style={styles.metaChipText}>
              {restaurant.delivery.estimated_time_min}–
              {restaurant.delivery.estimated_time_max} min
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.description}>{item.description}</Text>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Text style={styles.totalLabel}>Total Price</Text>
          <Text style={styles.totalValue}>${total}</Text>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={() => setCount(Math.max(1, count - 1))}
          >
            <Text style={styles.counterBtnText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.counterValue}>{count}</Text>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.counterBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.addToCartContainer}>
        <TouchableOpacity style={styles.addToCartBtn}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
          <Ionicons name="arrow-forward" size={width * 0.05} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  hero: {
    height: height * 0.42,
    backgroundColor: "#fff4e6",
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: height * 0.06,
    left: width * 0.04,
    backgroundColor: "#ffffff",
    borderRadius: 999,
    padding: width * 0.025,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heartButton: {
    position: "absolute",
    top: height * 0.06,
    right: width * 0.04,
    backgroundColor: "#ffffff",
    borderRadius: 999,
    padding: width * 0.025,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sheet: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: width * 0.07,
    borderTopRightRadius: width * 0.07,
    marginTop: -(height * 0.03),
  },
  sheetContent: {
    padding: width * 0.05,
    paddingTop: height * 0.025,
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: height * 0.008,
  },
  itemName: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.058,
    color: "#212529",
    flex: 1,
    marginRight: width * 0.04,
    lineHeight: width * 0.075,
  },
  itemPrice: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.055,
    color: "#212529",
  },
  restaurantRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.015,
    marginBottom: height * 0.015,
  },
  restaurantName: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.033,
    color: "#868e96",
  },
  metaRow: {
    flexDirection: "row",
    gap: width * 0.02,
    marginBottom: height * 0.018,
    flexWrap: "wrap",
  },
  metaChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.015,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: width * 0.035,
    paddingVertical: height * 0.007,
    borderRadius: 999,
  },
  metaChipText: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.03,
    color: "#495057",
  },
  divider: {
    height: 1,
    backgroundColor: "#f1f3f5",
    marginBottom: height * 0.018,
  },
  sectionTitle: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.045,
    color: "#212529",
    marginBottom: height * 0.008,
  },
  description: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.035,
    color: "#868e96",
    lineHeight: width * 0.055,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
    borderTopWidth: 1,
    borderTopColor: "#f1f3f5",
  },
  footerLeft: {},
  totalLabel: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.03,
    color: "#868e96",
  },
  totalValue: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.05,
    color: "#212529",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f3f5",
    borderRadius: 999,
    overflow: "hidden",
  },
  counterBtn: {
    width: width * 0.1,
    height: width * 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  counterBtnActive: {
    backgroundColor: "#212529",
  },
  counterBtnText: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.055,
    color: "#212529",
  },
  counterBtnTextActive: {
    color: "#ffffff",
  },
  counterValue: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.04,
    color: "#212529",
    minWidth: width * 0.08,
    textAlign: "center",
  },
  addToCartContainer: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.03,
  },
  addToCartBtn: {
    backgroundColor: "#fd7e14",
    borderRadius: 999,
    paddingVertical: height * 0.018,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: width * 0.03,
  },
  addToCartText: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.042,
    color: "#ffffff",
  },
});
