import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StatusBar,
  Platform,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import Drink from "../components/Drink/Drink";
import { FlashList } from "@shopify/flash-list";
import Colors from "../components/Color";

const Home = () => {
  const drinks = [
    {
      id: 1,
      name: "Coffee",
    },
    {
      id: 2,
      name: "Tea",
    },
    {
      id: 3,
      name: "Water",
    },
    {
      id: 4,
      name: "Ring",
    },
  ];

  const renderItem = ({ item }) => {
    return <Drink item={item}></Drink>;
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <FlashList
          data={drinks}
          numColumns={1}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={true}
          estimatedItemSize={5}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: Colors.staff,
          }}
        >
          <Text style={{ paddingVertical: 40 }}>Processing</Text>
          <TouchableOpacity style={{ paddingVertical: 40 }}>
            <Text style={{ color: Colors.text }}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
