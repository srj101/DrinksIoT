import { View, Text } from "react-native";
import React from "react";
import BottomButton from "../BottomButtons/BottomButton";
import Colors from "../Color";
import ProfileInfo from "../Profile/ProfileInfo";

const RightSideMenu = ({ navigation }) => {
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
        BGcolor={Colors.tea}
        TXTcolor={Colors.White}
        navigation={navigation}
      />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          backgroundColor: Colors.tea,
          borderColor: Colors.tea,
          borderWidth: 2,
          borderRadius: 100,
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
      <BottomButton name="Call" BGcolor={Colors.tea} TXTcolor={Colors.White} />
      <ProfileInfo navigation={navigation} />
    </View>
  );
};

export default RightSideMenu;
