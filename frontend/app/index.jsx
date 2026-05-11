import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>Feastie</Text>
        <Text style={styles.tagline}>Delicious moments, delivered.</Text>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => router.push("/(auth)/register")}
          activeOpacity={0.85}
        >
          <Text style={styles.registerBtnText}>Create an Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => router.push("/(auth)/login")}
          activeOpacity={0.85}
        >
          <Text style={styles.loginBtnText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  topSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.1,
  },
  logo: {
    width: 220,
    height: 220,
    //marginBottom: height * 0.02,
  },
  appName: {
    fontFamily: "EphesisRegular",
    fontSize: width * 0.18,
    color: "#212529",
    marginBottom: height * 0.005,
    width: "100%",
    textAlign: "center",
  },
  tagline: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.038,
    color: "#adb5bd",
    textAlign: "center",
  },
  bottomSection: {
    paddingHorizontal: width * 0.08,
    paddingBottom: height * 0.06,
    gap: height * 0.015,
  },
  registerBtn: {
    backgroundColor: "#fd7e14",
    borderRadius: 999,
    paddingVertical: height * 0.018,
    alignItems: "center",
  },
  registerBtnText: {
    fontFamily: "MontserratBold",
    fontSize: width * 0.042,
    color: "#fff",
  },
  loginBtn: {
    backgroundColor: "#f7f7f7",
    borderRadius: 999,
    paddingVertical: height * 0.018,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#fd7e14",
  },
  loginBtnText: {
    fontFamily: "MontserratBold",
    fontSize: width * 0.042,
    color: "#fd7e14",
  },
});
