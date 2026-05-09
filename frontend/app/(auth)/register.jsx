import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { router } from "expo-router";
import Logo from "../../assets/images/logo.jpg";
import { useAuth } from "../../context/AuthContext";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default function Register() {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name) return Alert.alert("Error", "Please enter your name.");
    if (!email) return Alert.alert("Error", "Please enter your email.");
    if (!password) return Alert.alert("Error", "Please enter a password.");
    if (!confirmPassword)
      return Alert.alert("Error", "Please confirm your password.");
    if (password !== confirmPassword)
      return Alert.alert("Error", "Passwords do not match.");

    try {
      setLoading(true);
      await register(name, email, password, confirmPassword);
      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert("Registration Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={Logo} style={styles.img} />
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.title}>Welcome to Feastie!</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.inputBox}
          placeholder="Name"
          autoCapitalize="none"
          placeholderTextColor="#6c757d"
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.inputBox}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="#6c757d"
          keyboardType="email-address"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#6c757d"
        />
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.inputBox}
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor="#6c757d"
        />
        <TouchableHighlight
          onPress={handleSubmit}
          style={styles.btn}
          disabled={loading}
        >
          <View style={styles.btnView}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.btnText}>Register</Text>
            )}
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontFamily: "MontserratRegular" }}>
            Already have an account?{" "}
          </Text>
          <TouchableHighlight
            onPress={() => router.push("/(auth)/login")}
            style={styles.bottomButtons}
          >
            <Text style={{ fontFamily: "MontserratRegular" }}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  topContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 300,
    width: 300,
  },
  title: {
    color: "#212529",
    fontSize: deviceWidth / 12,
    fontWeight: "bold",
    marginBottom: deviceWidth / 20,
    fontFamily: "PlayfairDisplayExtraBold",
  },
  middleContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  inputBox: {
    backgroundColor: "#dee2e6",
    width: 0.8 * deviceWidth,
    height: 0.15 * deviceWidth,
    borderRadius: 15,
    padding: 20,
    fontFamily: "MontserratRegular",
  },
  btn: {
    backgroundColor: "#fd7e14",
    width: 0.8 * deviceWidth,
    height: 0.15 * deviceWidth,
    borderRadius: 15,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btnView: {
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "MontserratBold",
  },
  bottomContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  bottomButtons: {
    borderBottomWidth: 1,
  },
});
