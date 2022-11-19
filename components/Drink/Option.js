import { View, Text } from "react-native";
import React, { useState } from "react";
import Colors from "../Color";
import NumericInput from "react-native-numeric-input";
const Option = ({ item, drink }) => {
  const { name } = item;
  const { name: drinkName } = drink;
  const [counter, setCounter] = useState(0);

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
          onChange={setCounter}
          onLimitReached={(isMax, msg) => console.log(isMax, msg)}
          totalWidth={130}
          totalHeight={50}
          minValue={0}
          maxValue={30}
          iconSize={25}
          step={name === "Litre" ? 0.5 : 1}
          valueType="real"
          rounded
          textColor="#B0228C"
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor={Colors.Middark}
          leftButtonBackgroundColor={Colors.Middark}
        />
      </View>
    </View>
  );
};

export default Option;
