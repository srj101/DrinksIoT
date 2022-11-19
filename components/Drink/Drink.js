import React from "react";
import { Text, View } from "react-native";
import Colors from "../Color";
import Option from "./Option";

const Drink = ({ item }) => {
  const { name, options } = item;

  return (
    <View
      style={{
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
        {options?.map((itm) => (
          <Option item={itm} key={itm.id} drink={item} />
        ))}
      </View>
    </View>
  );
};

export default Drink;
