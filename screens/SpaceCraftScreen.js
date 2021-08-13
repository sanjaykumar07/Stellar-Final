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

export default class SpaceCraftScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>SpaceCraft Screen</Text>
<TouchableOpacity
          style={[styles.button, { flex: 0.13, marginTop: 50 }]}
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Text
            style={[
              styles.text,
              {
                alignSelf: 'center',
                marginTop: 10,
              },
            ]}>
            Back
          </Text>
        </TouchableOpacity>
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
});

