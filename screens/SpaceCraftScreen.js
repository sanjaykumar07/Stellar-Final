import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
  SafeAreaView,
  Linking,
  ScrollView,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class SpaceCraftScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1,backgroundColor:'black' }}>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("HomeScreen");
                }}
                style={{ marginRight: RFValue(95), flexDirection: "row" }}
              >
                <Ionicons
                  name="chevron-back-outline"
                  color={"white"}
                  size={RFValue(40)}
                />
                <Text
                  style={{
                    marginTop: RFValue(7),
                    color: "white",
                    fontSize: RFValue(20),
                  }}
                >
                  Back
                </Text>
              </TouchableOpacity>
              <Text style={styles.routeText}>Space Crafts</Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    button: {
    width: 200,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 7,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e00382',
  },
  routeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

