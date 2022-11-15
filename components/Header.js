import {View,Text,Image} from "react-native";
import React from "react";
import Colors from "./Color";

const Header = () => {


const categories = ["All", "Coffee", "Tea", "Pizza"];
  return (
    <View
    style={{
      backgroundColor:Colors.Gray,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      marginTop: 20,
    }}
  >
    <View
      style={{
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 10,
      }}
    >
      <View
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 100,
            marginBottom: 10,
          }}
          source={require("../assets/sakib.jpg")}
        />
      </View>

      <Text style={{ fontSize: 25, marginBottom:5,fontWeight:'300' }}>
        Good Morning, Sakib!
      </Text>
    </View>
  </View>
  )
}


export default Header