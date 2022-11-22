import { View, Text } from "react-native";
import React, { useState } from "react";
import Colors from "../Color";
import NumericInput from "react-native-numeric-input";
import { useDispatch, useSelector } from "react-redux";
import {
  addCoffeeToOrder,
  addTeaToOrder,
  addWaterToOrder,
} from "../../src/state/Reducers/order";
const Option = ({ item, drink }) => {
  const { name, id } = item;
  const { name: drinkName, id: drinkId } = drink;
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);

  const handleChange = (value) => {
    setCounter(value);
    if (drinkId === 1) {
      dispatch(
        addCoffeeToOrder({
          option: name,
          qty: counter,
        })
      );
    } else if (drinkId === 2) {
      dispatch(
        addTeaToOrder({
          option: name,
          qty: counter,
        })
      );
    } else if (drinkId === 3) {
      dispatch(
        addWaterToOrder({
          option: name,
          qty: counter,
        })
      );
    }
  };

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
      <View style={{ paddingRight: 15 }}>
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
        <NumericInput
          value={counter}
          onChange={handleChange}
          onLimitReached={(isMax, msg) => console.log(isMax, msg)}
          totalWidth={130}
          totalHeight={50}
          minValue={0}
          maxValue={30}
          iconSize={25}
          step={name === "Litre" ? 0.5 : 1}
          valueType="real"
          rounded
          textColor="#000000"
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor={Colors.tea}
          leftButtonBackgroundColor={Colors.tea}
          borderColor={Colors.text}
        />
      </View>
    </View>
  );
};

export default Option;
