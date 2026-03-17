import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function RestaurantCard({ item, onPress }) {
  return (
    <TouchableHighlight
      underlayColor="#f1f3f5"
      style={styles.card}
      onPress={onPress}
    >
      <View>
        <Image
          source={item.image}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.cardBody}>
          <View style={styles.cardBodyRow}>
            <View>
              <Text style={styles.cardName}>{item.name}</Text>
              <Text style={styles.cardCategory}>{item.category}</Text>
            </View>
            <View style={styles.cardMetaCol}>
              <View style={styles.cardMetaRow}>
                <Ionicons name="star" size={width * 0.035} color="#ff922b" />
                <Text style={styles.cardRating}>{item.rating}</Text>
              </View>
              <View style={styles.cardMetaRow}>
                <Ionicons
                  name="time-outline"
                  size={width * 0.035}
                  color="#adb5bd"
                />
                <Text style={styles.cardTime}>{item.deliveryTime} min</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: width * 0.05,
    marginBottom: height * 0.02,
    borderRadius: width * 0.04,
    overflow: "hidden",
    elevation: 3,
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.03)",
    marginBottom: height * 0.03,
  },
  cardImage: {
    width: "100%",
    height: height * 0.2,
    backgroundColor: "#f1f3f5",
  },
  cardBody: {
    padding: width * 0.04,
  },
  cardBodyRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  cardName: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.045,
    color: "#212529",
    marginBottom: height * 0.002,
    letterSpacing: 0.5,
  },
  cardCategory: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.033,
    color: "#adb5bd",
    marginTop: height * 0.003,
    marginBottom: height * 0.008,
  },
  cardMetaCol: {
    alignItems: "flex-end",
    gap: width * 0.01,
  },
  cardMetaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardRating: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.033,
    // color: "#adb5bd",
    color: "#ff922b",
    marginLeft: width * 0.01,
  },
  cardTime: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.033,
    color: "#adb5bd",
    marginLeft: width * 0.01,
  },
});
