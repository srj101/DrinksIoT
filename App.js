import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { LogBox, SafeAreaView, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { store, persistor } from "./src/state/main";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as Device from "expo-device";
import Root from "./src/Navigation/Root";
import { NavigationContainer } from "@react-navigation/native";

// Just for now
LogBox.ignoreAllLogs();

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

  if (orientationIsLandscape === false) {
    return (
      <React.Fragment>
        <View
          style={{
            flex: 1,
            display: "flex",
            paddingTop:
              Device.osName == "Android" ? StatusBar.currentHeight : 0,
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
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <Root />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
