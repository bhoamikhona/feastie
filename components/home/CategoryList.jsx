import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from "react-native";
import data from "../../lib/data.js";

const { width, height } = Dimensions.get("window");
const emojis = data.emojis;

export default function CategoryList({
  categories,
  cuisines,
  types,
  selectedFilter,
  onSelect,
}) {
  const allChips = ["All", ...categories, ...cuisines, ...types];
  const total = allChips.length;
  const rowSize = Math.ceil(total / 3);
  const row1 = allChips.slice(0, rowSize);
  const row2 = allChips.slice(rowSize, rowSize * 2);
  const row3 = allChips.slice(rowSize * 2);

  const renderChip = (item) => {
    const isActive = selectedFilter === item;
    return (
      <TouchableHighlight
        key={item}
        onPress={() => onSelect(item)}
        underlayColor="#dee2e6"
        style={[styles.chip, isActive && styles.chipActive]}
      >
        <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
          {emojis[item]} {item}
        </Text>
      </TouchableHighlight>
    );
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.rows}>
        <View style={styles.row}>{row1.map(renderChip)}</View>
        <View style={styles.row}>{row2.map(renderChip)}</View>
        <View style={styles.row}>{row3.map(renderChip)}</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.02,
  },
  rows: {
    flexDirection: "column",
    gap: height * 0.01,
  },
  row: {
    flexDirection: "row",
    gap: width * 0.025,
  },
  chip: {
    paddingHorizontal: width * 0.045,
    paddingVertical: height * 0.008,
    borderRadius: width * 0.05,
    backgroundColor: "#e9ecef",
  },
  chipActive: {
    backgroundColor: "#fd7e14",
  },
  chipText: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.035,
    color: "#495057",
  },
  chipTextActive: {
    fontFamily: "MontserratMedium",
    color: "#ffffff",
  },
});
