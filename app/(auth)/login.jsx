import React, { useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
  TextInput,
} from "react-native";
import Logo from "../../assets/images/logo.png";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    if (!email) return alert("Need an email address!");
    if (!password) return alert("Need a password!");

    alert("Hey! Thank you for logging in, your email is: " + email);
  };

  const handleForgotPassword = () => {
    alert("Oh no! You forgot your password! Let's reset it.");
  };

  const handleRegister = () => {
    alert("Let's get you registered, moving to another page...");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={Logo} style={styles.img} />
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.title}>Welcome to Feastie!</Text>
        <TextInput
          value={email}
          onChangeText={handleEmail}
          style={styles.inputBox}
          placeholder={"Email"}
          autoCapitalize="none"
          placeholderTextColor="#6c757d"
          keyboardType="email-address"
        />

        <TextInput
          value={password}
          onChangeText={handlePassword}
          style={styles.inputBox}
          placeholder={"Password"}
          secureTextEntry={true}
          placeholderTextColor="#6c757d"
        />

        <TouchableHighlight onPress={handleSubmit} style={styles.btn}>
          <View style={styles.btnView}>
            <Text style={styles.btnText}>Login</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableHighlight
          onPress={handleForgotPassword}
          style={styles.bottomButtons}
        >
          <Text>Forgot Password?</Text>
        </TouchableHighlight>

        <View style={{ flexDirection: "row" }}>
          <Text>Don't have an account? </Text>
          <TouchableHighlight
            onPress={handleRegister}
            style={styles.bottomButtons}
          >
            <Text>Register</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
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
