import { View, Text } from "react-native";
import React from "react";
import BottomButton from "../BottomButtons/BottomButton";
import Colors from "../Color";

const RightSideMenu = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
      }}
    >
      <BottomButton
        name="Confirm"
        BGcolor={Colors.Pink}
        TXTcolor={Colors.White}
      />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          backgroundColor: Colors.Pink,
          borderColor: Colors.Gray,
          borderWidth: 2,
          borderRadius: 25,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: Colors.text,
          }}
        >
          Status
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            color: Colors.text,
          }}
        >
          Processing
        </Text>
      </View>
      <BottomButton name="Call" BGcolor={Colors.Pink} TXTcolor={Colors.White} />
      <BottomButton
        name="Settings"
        BGcolor={Colors.Pink}
        TXTcolor={Colors.White}
      />
    </View>
  );
};

export default RightSideMenu;
