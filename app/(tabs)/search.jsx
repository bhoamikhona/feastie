import { StyleSheet, Text, View, Image } from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <Text>Searchbar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
