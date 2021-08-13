import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      screenChange: '',
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={[styles.droid]} />
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.bg}>
          <View styles={[styles.titleBar, { marginTop: 50 }]}>
            <Image
              source={require('../assets/main-icon.png')}
              style={{ width: 150, height: 150, alignSelf: 'center' }}
            />
            <Text style={styles.titleText}>Stellar App</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('SpaceCraft');
                }}
                style={[styles.button, { flex: 0.13, marginTop: 50 }]}>
                <Text
                  style={[
                    styles.text,
                    {
                      alignSelf: 'absolute',
                      marginTop: 10,
                    },
                  ]}>
                  Space Crafts
                </Text>
                <Image
                  source={require('../assets/space_Crafts_2.png')}
                  style={{
                    width: 90,
                    height: 80,
                    marginLeft: 190,
                    marginTop: -55,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { flex: 0.13, marginTop: 50 }]}
                onPress={() => {
                  this.props.navigation.navigate('StarMap');
                }}>
                <Text
                  style={[
                    styles.text,
                    {
                      alignSelf: 'center',
                      marginTop: 10,
                    },
                  ]}>
                  Star Map
                </Text>
                <Image
                  source={require('../assets/star_map.png')}
                  style={{
                    width: 70,
                    height: 60,
                    marginLeft: 190,
                    marginTop: -60,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { flex: 0.13, marginTop: 50 }]}
                onPress={() => {
                  this.props.navigation.navigate('DailyPic');
                }}>
                <Text
                  style={[
                    styles.text,
                    {
                      alignSelf: 'center',
                      marginTop: 10,
                    },
                  ]}>
                  Daily Pictures
                </Text>
                <Image
                  source={require('../assets/daily_pictures.png')}
                  style={{
                    width: 65,
                    height: 45,
                    marginLeft: 190,
                    marginTop: -60,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  droid: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: -25,
  },
  titleBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
