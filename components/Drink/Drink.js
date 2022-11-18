import React from "react";
import { Text, View } from "react-native";
import Colors from "../Color";
import Option from "./Option";

const Drink = ({ item }) => {
  const { name, options } = item;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
        paddingHorizontal: 15,
      }}
    >
      <View style={{}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "900",
            paddingVertical: 20,
            color: Colors.text,
            textAlign: "center",
          }}
        >
          {name}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "space-between",
        }}
      >
        {options?.map((item) => (
          <Option item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

export default Drink;
