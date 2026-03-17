import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search-outline" size={width * 0.05} color="#adb5bd" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search restaurants..."
        placeholderTextColor="#adb5bd"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9ecef",
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.015,
    borderRadius: width * 0.035,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.012,
    gap: width * 0.02,
  },
  searchInput: {
    flex: 1,
    fontFamily: "MontserratRegular",
    fontSize: width * 0.038,
    color: "#212529",
  },
});
