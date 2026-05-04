import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ACCENT = "#fd7e14";
const CARD_GAP = width * 0.035;
const CARD_WIDTH = (width - width * 0.1 - CARD_GAP) / 2;

export function GridSection({ title, items, getImage, onSelect }) {
  const pairs = [];
  for (let i = 0; i < items.length; i += 2) {
    pairs.push(items.slice(i, i + 2));
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {pairs.map((pair, i) => (
        <View key={i} style={styles.row}>
          {pair.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.card}
              onPress={() => onSelect(item)}
              activeOpacity={0.82}
            >
              <View style={styles.imageWrapper}>
                {getImage(item) ? (
                  <Image
                    source={getImage(item)}
                    style={styles.cardImage}
                    resizeMode="cover"
                  />
                ) : (
                  <View style={styles.cardImageFallback} />
                )}
              </View>
              <View style={styles.labelRow}>
                <View style={styles.labelAccent} />
                <Text style={styles.cardLabel}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
          {pair.length === 1 && <View style={styles.card} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: height * 0.025,
    paddingHorizontal: width * 0.05,
  },
  sectionTitle: {
    fontFamily: "PlayfairDisplayExtraBold",
    fontSize: width * 0.055,
    color: "#212529",
    marginBottom: height * 0.015,
  },
  row: {
    flexDirection: "row",
    gap: CARD_GAP,
    marginBottom: height * 0.025,
  },
  card: {
    width: CARD_WIDTH,
  },
  imageWrapper: {
    width: "100%",
    height: CARD_WIDTH * 0.85,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#e9ecef",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardImageFallback: {
    flex: 1,
    backgroundColor: "#dee2e6",
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: height * 0.008,
    paddingLeft: 2,
    gap: width * 0.02,
  },
  labelAccent: {
    width: 3,
    height: width * 0.04,
    borderRadius: 2,
    backgroundColor: ACCENT,
  },
  cardLabel: {
    fontFamily: "MontserratSemiBold",
    fontSize: width * 0.036,
    color: "#212529",
  },
});
