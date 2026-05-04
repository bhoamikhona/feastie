import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Hey there!</Text>
        <Text style={styles.subGreeting}>What are you craving?</Text>
      </View>
      <TouchableHighlight
        underlayColor="#fff4e6"
        style={styles.avatarBtn}
        onPress={() => alert("Go to profile")}
      >
        <Ionicons
          name="person-circle-outline"
          size={width * 0.1}
          color="#fd7e14"
        />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
    paddingBottom: height * 0.01,
  },
  greeting: {
    fontFamily: "PlayfairDisplayExtraBold",
    fontSize: width / 15,
    marginBottom: height * 0.002,
    color: "#212529",
  },
  subGreeting: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.035,
    color: "#adb5bd",
    marginTop: height * 0.004,
  },
  avatarBtn: {
    borderRadius: width * 0.05,
    padding: width * 0.01,
  },
});
