import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import Home from "./src/Home";
import * as Device from "expo-device";

export default function App() {
  const [orientationIsLandscape, setOrientation] = useState(false);

  async function changeScreenOrientation() {
    if (orientationIsLandscape === false) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
      setOrientation(true);
    }
  }

  useEffect(() => {
    changeScreenOrientation();
  }, []);

  console.log(Device.modelName);

  if (orientationIsLandscape === false) {
    return (
      <React.Fragment>
        <View
          style={{
            flex: 1,
            display: "flex",
            paddingTop: Device.modelName.includes("android")
              ? StatusBar.currentHeight
              : 0,
          }}
        >
          <SafeAreaView>
            <Text>Please Rotate The Screen!</Text>
          </SafeAreaView>
        </View>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <View
        style={{
          flex: 1,
          display: "flex",
          paddingTop: Device.modelName.includes("android")
            ? StatusBar.currentHeight
            : 0,
        }}
      >
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </View>
    </React.Fragment>
  );
}
