import { Alert, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Color";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder } from "../../src/state/Reducers/order";

const BottomButton = ({ name, BGcolor, TXTcolor, navigation }) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const handlePress = (name) => {
    if (name === "Confirm") {
      dispatch(confirmOrder());
    }
    if (order.error !== null) {
      Alert.alert(order.error);
    } else {
      console.log(order.orders);
      Alert.alert("Success");
    }
  };
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        paddingVertical: 40,
        borderColor: Colors.Gray,
        borderWidth: 2,
        borderRadius: 100,
        backgroundColor: BGcolor,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      onPress={
        name === "Settings"
          ? () => navigation.navigate("Settings")
          : () => handlePress(name)
      }
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
