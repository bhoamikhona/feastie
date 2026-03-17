import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function CategoryList({
  categories,
  selectedCategory,
  onSelect,
}) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesList}
      renderItem={({ item }) => {
        const isActive = selectedCategory === item;
        return (
          <TouchableHighlight
            onPress={() => onSelect(item)}
            underlayColor="#dee2e6"
            style={[styles.categoryChip, isActive && styles.categoryChipActive]}
          >
            <Text
              style={[
                styles.categoryText,
                isActive && styles.categoryTextActive,
              ]}
            >
              {item}
            </Text>
          </TouchableHighlight>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  categoriesList: {
    paddingHorizontal: width * 0.05,
    gap: width * 0.025,
    marginBottom: height * 0.02,
  },
  categoryChip: {
    paddingHorizontal: width * 0.045,
    paddingVertical: height * 0.008,
    borderRadius: width * 0.05,
    backgroundColor: "#e9ecef",
  },
  categoryChipActive: {
    backgroundColor: "#fd7e14",
  },
  categoryText: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.035,
    color: "#495057",
  },
  categoryTextActive: {
    fontFamily: "MontserratMedium",
    color: "#ffffff",
  },
});
