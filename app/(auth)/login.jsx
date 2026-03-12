import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ImageBackground,
  Alert,
  Dimensions,
  TextInput,
} from "react-native";
import Logo from "../../assets/images/logo.png";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export default class App extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmail = (text) => {
    this.setState({ email: text });
  };

  handlePassword = (text) => {
    this.setState({ password: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image source={Logo} style={styles.img} />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.title}>Welcome to Feastie!</Text>
          <TextInput
            value={this.state.email}
            onChangeText={this.handleEmail}
            style={styles.inputBox}
            placeholder={"Email"}
            autoCapitalize="none"
            placeholderTextColor="#6c757d"
            keyboardType="email-address"
          />

          <TextInput
            value={this.state.password}
            onChangeText={this.handlePassword}
            style={styles.inputBox}
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor="#6c757d"
          />

          <TouchableHighlight style={styles.btn}>
            <View style={styles.btnView}>
              <Text style={styles.btnText}>Login</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableHighlight style={styles.bottomButtons}>
            <Text>Forgot Password?</Text>
          </TouchableHighlight>

          <View style={{ flexDirection: "row" }}>
            <Text>Don't have an account? </Text>
            <TouchableHighlight style={styles.bottomButtons}>
              <Text>Register</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
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
