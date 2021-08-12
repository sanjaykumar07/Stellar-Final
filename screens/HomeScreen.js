import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  droid: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleText: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  titleBar: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "center",
  },
  routeCard: {
    flex: 0.25,
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 30,
    backgroundColor: "white",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
  },
  iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: 20,
    top: -80,
  },
  digitButton: {
    position: "absolute",
    fontSize: 120,
    color: "grey",
    right: 10,
  },
});

