import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Feastie!</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
