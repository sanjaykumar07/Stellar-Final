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
  TextInput
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
  constructor() {
    super()
    this.state = {
      longitude: '',
      latitude: ''
    }
  }
  render() {
    const { longitude, latitude } = this.state;
    const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
    return (
      <View style={{ flex: 1, backgroundColor: "#1a0023" }}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={{flexDirection:'row'}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("HomeScreen");
                }}
                style={{ marginRight: RFValue(125), flexDirection: "row" }}
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
              <Text style={styles.routeText}>Star Map</Text>
            </View>
            <View style={{ flex: 0.3, marginTop: 50, alignItems: 'center' }}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your longitude"
            placeholderTextColor="white"
            onChangeText={(text) => {
              this.setState({
                longitude: text
              })
            }}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your latitude"
            placeholderTextColor="white"
            onChangeText={(text) => {
              this.setState({
                latitude: text
              })
            }}
          />
        </View>
        <WebView
          scalesPageToFit={true}
          source={{ uri: path }}
          style={{ marginTop: 20, marginBottom: 20, }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    alignContent: "center",
  },
  inputStyle: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    textAlign: 'center',
    color: 'white',
    width: 200
  },
  routeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
})