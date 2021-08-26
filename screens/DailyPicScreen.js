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
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class DailyPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: [],
    };
  }

  componentDidMount() {
    this.getAPOD();
  }

  getAPOD = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=COGdtQeIWk1mbziFVQgpfK3JfP4dBSAlQg8imDGw"
      )
      .then((response) => {
        this.setState({ apod: response.data });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    const url = this.state.apod.url;
    if (Object.keys(this.state.apod).length === 0) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:'black' }}
        >
          <Image
            source={require("../assets/loading.gif")}
            style={{ width: 70, height: 50, alignSelf: "center" }}
          />
          <Text style={{color:'white',fontSize:30}}>Loading</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require("../assets/stars.gif")}
            style={styles.backgroundImage}
          >
            <View style={styles.backButton}>
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
              <Text style={styles.routeText}>Daily Pic</Text>
            </View>
            <ScrollView style={styles.listContainer}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(this.state.apod.url).catch((err) =>
                    console.error("Couldn't load page", err)
                  )
                }
              >
                <Image
                  source={{ uri: url }}
                  style={{
                    width: "100%",
                    height: RFValue(300),
                    borderRadius: 10,
                  }}
                ></Image>
              </TouchableOpacity>
              <View style={{ padding: 20 }}>
                <Text style={styles.titleText}>{this.state.apod.title}</Text>
                <Text style={styles.explanationText}>
                  {this.state.apod.explanation}
                </Text>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  routeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ec63ff",
  },
  explanationText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  listContainer: {
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    flex: 0.8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "rgba(52, 52, 52, 0.5)",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 1,
    alignSelf: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    marginTop: 7,
    fontSize: 20,
    fontWeight: "bold",
    color: "#e00382",
  },
  backButton: {
    flexDirection: "row",
  },
});
