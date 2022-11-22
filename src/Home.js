import { SafeAreaView, StatusBar, View } from "react-native";
import React from "react";
import Drink from "../components/Drink/Drink";
import BottomMenu from "../components/Drink/BottomMenu";
import Colors from "../components/Color";
import * as Device from "expo-device";

const Home = ({ navigation }) => {
  const drinks = [
    {
      id: 1,
      name: "Coffee",
      options: [
        {
          id: 1,
          name: "With Sugar",
        },
        {
          id: 2,
          name: "No Sugar",
        },
      ],
    },
    {
      id: 2,
      name: "Tea",
      options: [
        {
          id: 1,
          name: "With Sugar",
        },
        {
          id: 2,
          name: "No Sugar",
        },
      ],
    },
    {
      id: 3,
      name: "Water",
      options: [
        {
          id: 1,
          name: "Litre",
        },
      ],
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        paddingTop: Device.osName == "Android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          display: "flex",
          marginHorizontal: 25,
          flex: 1,
        }}
      >
        <SafeAreaView>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",

              backgroundColor: Colors.tea,
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            {drinks.map((item) => (
              <Drink item={item} key={item.id} />
            ))}
          </View>

          <View>
            <View style={{}}>
              <BottomMenu navigation={navigation} />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Home;
