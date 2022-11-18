import { Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Color";

const BottomButton = ({ name, BGcolor, TXTcolor }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        paddingVertical: 40,
        borderColor: Colors.Gray,
        borderWidth: 2,
        borderRadius: 25,
        backgroundColor: BGcolor,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          textTransform: "uppercase",
          fontWeight: "700",
          color: TXTcolor,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default BottomButton;
