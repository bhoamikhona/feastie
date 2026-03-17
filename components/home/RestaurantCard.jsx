import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const BADGE_COLORS = {
  "Top Rated": { bg: "#fff4e6", text: "#fd7e14" },
  "Fan Favorite": { bg: "#fff0f6", text: "#e64980" },
  "Most Ordered": { bg: "#f3f0ff", text: "#7950f2" },
  "Free Delivery": { bg: "#ebfbee", text: "#2f9e44" },
  "Editor's Pick": { bg: "#e7f5ff", text: "#1971c2" },
  "Local Favorite": { bg: "#fff9db", text: "#e67700" },
};

export default function RestaurantCard({ item, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.92}
    >
      <View style={styles.imageContainer}>
        <Image
          source={item.images.cover}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.timePill}>
          <Ionicons name="time-outline" size={width * 0.035} color="#000" />
          <Text style={styles.timeText}>
            {item.delivery.estimated_time_min}–
            {item.delivery.estimated_time_max} min
          </Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.cardName}>{item.name}</Text>
        <View style={styles.metaRow}>
          <Ionicons name="star" size={width * 0.035} color="#ff922b" />
          <Text style={styles.metaText}>{item.rating.average}</Text>
          <Text style={styles.dot}>·</Text>
          <Text style={styles.metaText}>{item.category}</Text>
          <Text style={styles.dot}>·</Text>
          <View
            style={[
              styles.badge,
              {
                backgroundColor: BADGE_COLORS[item.badges[0]]?.bg ?? "#f1f3f5",
              },
            ]}
          >
            <Text
              style={[
                styles.badgeText,
                { color: BADGE_COLORS[item.badges[0]]?.text ?? "#495057" },
              ]}
            >
              {item.badges[0]}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: width * 0.05,
    marginBottom: height * 0.025,
    backgroundColor: "#fff",
    borderRadius: width * 0.04,
    overflow: "hidden",
    elevation: 2,
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: height * 0.22,
    backgroundColor: "#f1f3f5",
  },
  timePill: {
    position: "absolute",
    bottom: height * 0.015,
    left: width * 0.04,
    backgroundColor: "#ffffff",
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.006,
    borderRadius: 999,
    flexDirection: "row",
    gap: width * 0.01,
  },
  timeText: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.03,
    color: "#212529",
  },
  cardBody: {
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    paddingBottom: height * 0.025,
  },
  cardName: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.05,
    color: "#212529",
    marginBottom: height * 0.007,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.015,
  },
  metaText: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.033,
    color: "#868e96",
  },
  dot: {
    color: "#868e96",
    fontSize: width * 0.033,
  },
  badge: {
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.004,
    borderRadius: 999,
    alignSelf: "flex-end",
  },
  badgeText: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.028,
  },
});
