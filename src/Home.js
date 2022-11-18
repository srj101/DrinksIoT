import { View } from "react-native";
import React from "react";
import Drink from "../components/Drink/Drink";
import RightSideMenu from "../components/Drink/RightSideMenu";
import Colors from "../components/Color";

const Home = () => {
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
        display: "flex",
        marginVertical: 25,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",

          backgroundColor: Colors.Pink,
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
          <RightSideMenu />
        </View>
      </View>
    </View>
  );
};

export default Home;
