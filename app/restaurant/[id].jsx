import { View, Text, StyleSheet } from "react-native";

export default function RestaurantDetails() {
  return (
    <View style={styles.container}>
      <Text>Restaurant Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
