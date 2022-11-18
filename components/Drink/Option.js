import { View, Text } from "react-native";
import React from "react";
import CounterInput from "react-native-counter-input";
import Colors from "../Color";

const Option = ({ item }) => {
  const { name } = item;
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "400",
            color: Colors.text,
            paddingBottom: name === "Litre" ? 40 : 0,
          }}
        >
          {name}
        </Text>
      </View>
      <View style={{ paddingBottom: name === "Litre" ? 40 : 0 }}>
        <CounterInput
          horizontal={true}
          decreaseButtonBackgroundColor={Colors.Pink}
          increaseButtonBackgroundColor={Colors.Pink}
          onChange={(counter) => console.log(counter)}
        />
      </View>
    </View>
  );
};

export default Option;
