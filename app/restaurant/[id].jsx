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
import restaurants from "../../lib/restaurants";

const { width, height } = Dimensions.get("window");

export default function RestaurantDetails() {
  const { id } = useLocalSearchParams();
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) return null;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroContainer}>
          <Image
            source={restaurant.images.cover}
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

          <View style={styles.namePill}>
            <Text style={styles.namePillText}>{restaurant.name}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.infoCard}>
            <Text style={styles.description}>{restaurant.description}</Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {restaurant.rating.average}
                </Text>
                <Text style={styles.statLabel}>Rating</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {restaurant.delivery.fee === 0
                    ? "Free"
                    : `$${restaurant.delivery.fee}`}
                </Text>
                <Text style={styles.statLabel}>
                  {restaurant.delivery.fee === 0 ? "free delivery" : "delivery"}
                </Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {restaurant.delivery.estimated_time_min}
                </Text>
                <Text style={styles.statLabel}>minutes</Text>
              </View>
            </View>
          </View>

          {restaurant.menu.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              activeOpacity={0.8}
              onPress={() =>
                router.push({
                  pathname: "/item/[itemId]",
                  params: { itemId: item.id, restaurantId: restaurant.id },
                })
              }
            >
              <Image
                source={item.image}
                style={styles.menuItemImage}
                resizeMode="cover"
              />
              <View style={styles.menuItemInfo}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemDescription} numberOfLines={2}>
                  {item.description}
                </Text>
                <View style={styles.menuItemBottom}>
                  <Text style={styles.menuItemPrice}>
                    ${item.price.toFixed(2)}
                  </Text>
                  <TouchableOpacity
                    style={styles.addBtn}
                    onPress={() =>
                      router.push({
                        pathname: "/item/[itemId]",
                        params: {
                          itemId: item.id,
                          restaurantId: restaurant.id,
                        },
                      })
                    }
                  >
                    <Ionicons name="add" size={width * 0.05} color="#212529" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heroContainer: {
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: height * 0.32,
    backgroundColor: "#f1f3f5",
  },
  backButton: {
    position: "absolute",
    top: height * 0.06,
    left: width * 0.04,
    backgroundColor: "#ffffff",
    borderRadius: 999,
    padding: width * 0.025,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  namePill: {
    position: "absolute",
    bottom: -(height * 0.028),
    alignSelf: "center",
    backgroundColor: "#fd7e14",
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.016,
    borderRadius: width * 0.05,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  namePillText: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.06,
    color: "#ffffff",
  },
  body: {
    paddingTop: height * 0.055,
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.04,
  },
  infoCard: {
    backgroundColor: "#f1f3f5",
    borderRadius: width * 0.04,
    padding: width * 0.04,
    marginBottom: height * 0.03,
  },
  description: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.033,
    color: "#495057",
    lineHeight: width * 0.052,
    marginBottom: height * 0.018,
    textAlign: "center",
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.052,
    color: "#212529",
  },
  statLabel: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.028,
    color: "#868e96",
    marginTop: height * 0.003,
  },
  statDivider: {
    width: 1,
    height: height * 0.055,
    backgroundColor: "#dee2e6",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: height * 0.025,
    gap: width * 0.04,
  },
  menuItemImage: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: width * 0.03,
    backgroundColor: "#f1f3f5",
  },
  menuItemInfo: {
    flex: 1,
    justifyContent: "flex-start",
  },
  menuItemName: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.042,
    color: "#212529",
    marginBottom: height * 0.004,
  },
  menuItemDescription: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.031,
    color: "#868e96",
    lineHeight: width * 0.046,
    marginBottom: height * 0.01,
  },
  menuItemBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuItemPrice: {
    fontFamily: "PlayfairDisplayMedium",
    fontSize: width * 0.05,
    color: "#212529",
  },
  addBtn: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: 999,
    backgroundColor: "#f1f3f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
