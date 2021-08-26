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
  FlatList,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

export default class SpaceCraftScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      airCrafts: '',
    };
  }

  getData = () => {
    axios
      .get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
      .then((response) => {
        this.setState({ airCrafts: response.data.results });
        console(response.data.results);
      })
      .catch((error) => {
        error.message;
      });
  };

  componentDidMount(){
    this.getData()
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.renderItemContainer}>
        <Image
          source={{ uri: item.agency.image_url }}
          style={styles.ImageStyle}
        >
          </Image>
        <Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>{item.name}</Text>
        <Text style={{color:'#696969'}}>{item.agency.name}</Text>
        <Text>Description</Text>
        <Text style={{color:'#A9A9A9',marginLeft:10,marginTop:10}}>{item.agency.description}</Text>
      </View>
    );
  };
  render() {
   
      if(Object.keys(this.state.airCrafts).length === 0){
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
      }else{
       return(
      
        <View style={[styles.container,{ backgroundColor: "black" }]}>
          <View style={{flexDirection:'row'}}>
        <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("HomeScreen");
          }}
          style={{ marginRight: RFValue(-150), flexDirection: "row",marginLeft: RFValue(-240) }}
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
        </View>
        <View style={{justifyContent:'center'}}>
        <Text style={styles.routeText}>Space Crafts</Text>
        
      </View>
      </View>



        <View style={{
          flex:1,
          justifyContent:"center",
          alignItems:'center'
        }}>

          <View style={{flex:1}}>
            <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.airCrafts}
            renderItem={this.renderItem}
            />
          </View>

        </View>
      </View>
      )
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  routeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    justifyContent:'center'
  },
  ImageStyle: {
    width: "100%",
    height: 200,
    marginLeft:0.5,
    borderRadius:5,
    
    marginBottom: 15,
  
  },
  renderItemContainer: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    elevation: 10
    ,backgroundColor:'white',width:'80%',borderRadius:5,
    alignSelf:'center'

  },
});
