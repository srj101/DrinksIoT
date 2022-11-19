import { Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Color";

const BottomButton = ({ name, BGcolor, TXTcolor, navigation }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        paddingVertical: 40,
        borderColor: Colors.Gray,
        borderWidth: 2,
        borderRadius: 25,
        backgroundColor: BGcolor,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      onClick={() => navigation.navigate("Settings")}
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
