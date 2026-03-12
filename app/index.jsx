import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Feastie!</Text>

      <Link style={styles.link} href="/login">
        Login Page
      </Link>

      <Link style={styles.link} href="/register">
        Register Page
      </Link>

      <Link style={styles.link} href="/home">
        Home Page
      </Link>

      <Link style={styles.link} href="/profile">
        Profile Page
      </Link>

      <Link style={styles.link} href="/cart">
        Cart Page
      </Link>
    </View>
  );
}

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
  link: {
    fontSize: 18,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
