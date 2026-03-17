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

      <Link style={styles.link} href="/(tabs)">
        Home Page
      </Link>

      <Link style={styles.link} href="/search">
        Search Page
      </Link>

      <Link style={styles.link} href="/cart">
        Cart Page
      </Link>

      <Link style={styles.link} href="/profile">
        Profile Page
      </Link>

      <View style={{ marginTop: 50 }}>
        <Text style={styles.title}>Testing Fonts</Text>

        <Text style={styles.playfair}>Feastie</Text>

        <Text style={styles.ephesis}>Delicious moments</Text>

        <Text style={styles.montserratRegular}>Burgers • Pizza • Wraps</Text>

        <Text style={styles.montserratMedium}>Order Now</Text>
      </View>
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
    marginVertical: 5,
  },
  playfair: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: 40,
  },

  ephesis: {
    fontFamily: "EphesisRegular",
    fontSize: 32,
  },

  montserratRegular: {
    fontFamily: "MontserratRegular",
    fontSize: 18,
  },

  montserratMedium: {
    fontFamily: "MontserratMedium",
    fontSize: 18,
  },
});
