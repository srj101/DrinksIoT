import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../components/Color";
import * as Device from "expo-device";
import NumericInput from "react-native-numeric-input";
import { useEffect } from "react";
import ProfileInfo from "../components/Profile/ProfileInfo";
import { API_URL } from "./state/API/Config";
import { useSelector } from "react-redux";
import useSWR from "swr";
import io from "socket.io-client";

let socket;

const listOrderss = (userId) => {
  return fetch(`${API_URL}/api/order/listOrders?userId=${userId}`).then((res) =>
    res.json()
  );
};
const Home = ({ navigation }) => {
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    // We just call it because we don't need anything else out of it
    await fetch(`${API_URL}/api/socket`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    socket = io();
  };

  const handleCall = async () => {
    setLoading(true);
    console.log("call", userId);

    await fetch(`${API_URL}/api/user/makeCall`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        Alert.alert("Call", "Call has been made");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Something went wrong");
        setLoading(false);
      });
  };

  const { user } = useSelector((state) => state.user);
  const { userId } = user;
  const { data } = useSWR(userId, (userId) => listOrderss(userId), {
    refreshInterval: 200,
  });
  const [teaSugar, setTeaSugar] = React.useState(0);
  const [teaNoSugar, setTeaNoSugar] = React.useState(0);

  const [coffeeSugar, setCoffeeSugar] = React.useState(0);
  const [coffeeNoSugar, setCoffeeNoSugar] = React.useState(0);

  const [water, setWater] = React.useState(0);

  const [total, setTotal] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    console.log({ teaSugar, teaNoSugar, coffeeSugar, coffeeNoSugar, water });
  }, [teaSugar, teaNoSugar, coffeeSugar, coffeeNoSugar, water]);

  const confirmPressed = async () => {
    Alert.alert("Are you sure?", "You can't undo this action", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Confirm",
        onPress: async () => {
          setLoading(true);
          [teaSugar, teaNoSugar, coffeeSugar, coffeeNoSugar, water].forEach(
            (item) => {
              if (item > 0) {
                setTotal((prev) => prev + item);
              }
            }
          );
          const o = await fetch(`${API_URL}/api/order/createOrder`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              total: total,
              userId: user.userId,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("order--->", data);
              return data;
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
            });

          console.log("order--->", o);

          const order = o;

          if (teaNoSugar > 0 && teaNoSugar !== 0) {
            await fetch(`${API_URL}/api/order/createOrderItems`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: "Tea With No Sugar",
                qty: teaNoSugar,
                orderId: order.id,
              }),
            }).catch((err) => {
              console.log(err);
              setLoading(false);
            });
          }

          if (teaSugar > 0 && teaSugar !== 0) {
            await fetch(`${API_URL}/api/order/createOrderItems`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: "Tea With Sugar",
                qty: teaSugar,
                orderId: order.id,
              }),
            }).catch((err) => {
              console.log(err);
              setLoading(false);
            });
          }

          if (coffeeSugar > 0 && coffeeSugar !== 0) {
            await fetch(`${API_URL}/api/order/createOrderItems`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: "Coffee With Sugar",
                qty: coffeeSugar,
                orderId: order.id,
              }),
            }).catch((err) => {
              console.log(err);
              setLoading(false);
            });
          }

          if (coffeeNoSugar > 0 && coffeeNoSugar !== 0) {
            await fetch(`${API_URL}/api/order/createOrderItems`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: "Coffee With No Sugar",
                qty: coffeeNoSugar,
                orderId: order.id,
              }),
            }).catch((err) => {
              console.log(err);
              setLoading(false);
            });
          }

          if (water > 0 && water !== 0) {
            await fetch(`${API_URL}/api/order/createOrderItems`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: "Water",
                qty: water,
                orderId: order.id,
              }),
            }).catch((err) => {
              console.log(err);
              setLoading(false);
            });
          }
          setLoading(false);
          Alert.alert(
            "Order Placed",
            "Your order has been placed successfully",
            [
              {
                text: "OK",
                onPress: () => {
                  setLoading(true);
                  resetState();
                  setLoading(false);
                },
              },
            ]
          );
        },
      },
    ]);
  };

  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      console.log("Home Screen");
    });
    return focusHandler;
  }, [navigation]);

  const resetState = () => {
    setTeaSugar(0);
    setTeaNoSugar(0);
    setCoffeeSugar(0);
    setCoffeeNoSugar(0);
    setWater(0);
    setTotal(0);
    navigation.replace("Home");
  };

  const resetPressed = () => {
    return resetState();
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={Colors.tea} />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        paddingTop: Device.osName == "Android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          display: "flex",
          marginHorizontal: 25,
          flex: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: Colors.tea,
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            {/** Single Drink Item */}
            <View
              style={{
                paddingHorizontal: 15,
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "900",
                    paddingVertical: 20,
                    color: Colors.text,
                  }}
                >
                  Tea
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "space-between",
                }}
              >
                {/** Single Drink Option */}
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
                        paddingBottom: 0,
                      }}
                    >
                      With Sugar
                    </Text>
                  </View>
                  <View style={{ paddingBottom: 0 }}>
                    <NumericInput
                      onChange={setTeaSugar}
                      totalWidth={130}
                      totalHeight={50}
                      minValue={0}
                      maxValue={30}
                      iconSize={25}
                      step={1}
                      valueType="integer"
                      rounded
                      textColor="#000000"
                      iconStyle={{ color: "white" }}
                      rightButtonBackgroundColor={Colors.tea}
                      leftButtonBackgroundColor={Colors.tea}
                      borderColor={Colors.text}
                      value={teaSugar}
                    />
                  </View>
                </View>
                {/** End Single Drink Option */}
                {/** Single Drink Option */}
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
                        paddingBottom: 0,
                      }}
                    >
                      No Sugar
                    </Text>
                  </View>
                  <View style={{ paddingBottom: 0 }}>
                    <NumericInput
                      totalWidth={130}
                      totalHeight={50}
                      minValue={0}
                      maxValue={30}
                      iconSize={25}
                      step={1}
                      valueType="integer"
                      rounded
                      textColor="#000000"
                      iconStyle={{ color: "white" }}
                      rightButtonBackgroundColor={Colors.tea}
                      leftButtonBackgroundColor={Colors.tea}
                      borderColor={Colors.text}
                      onChange={(value) => setTeaNoSugar(value)}
                      value={teaNoSugar}
                    />
                  </View>
                </View>
                {/** End Single Drink Option */}
              </View>
            </View>
            {/** End Single Drink Item */}

            {/** Single Drink Item */}
            <View
              style={{
                paddingHorizontal: 15,
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "900",
                    paddingVertical: 20,
                    color: Colors.text,
                  }}
                >
                  Coffee
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "space-between",
                }}
              >
                {/** Single Drink Option */}
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
                        paddingBottom: 0,
                      }}
                    >
                      With Sugar
                    </Text>
                  </View>
                  <View style={{ paddingBottom: 0 }}>
                    <NumericInput
                      onChange={setCoffeeSugar}
                      totalWidth={130}
                      totalHeight={50}
                      minValue={0}
                      maxValue={30}
                      iconSize={25}
                      step={1}
                      valueType="integer"
                      rounded
                      textColor="#000000"
                      iconStyle={{ color: "white" }}
                      rightButtonBackgroundColor={Colors.tea}
                      leftButtonBackgroundColor={Colors.tea}
                      borderColor={Colors.text}
                      value={coffeeSugar}
                    />
                  </View>
                </View>
                {/** End Single Drink Option */}
                {/** Single Drink Option */}
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
                        paddingBottom: 0,
                      }}
                    >
                      No Sugar
                    </Text>
                  </View>
                  <View style={{ paddingBottom: 0 }}>
                    <NumericInput
                      totalWidth={130}
                      totalHeight={50}
                      minValue={0}
                      maxValue={30}
                      iconSize={25}
                      step={1}
                      valueType="integer"
                      rounded
                      textColor="#000000"
                      iconStyle={{ color: "white" }}
                      rightButtonBackgroundColor={Colors.tea}
                      leftButtonBackgroundColor={Colors.tea}
                      borderColor={Colors.text}
                      onChange={(value) => setCoffeeNoSugar(value)}
                      value={coffeeNoSugar}
                    />
                  </View>
                </View>
                {/** End Single Drink Option */}
              </View>
            </View>
            {/** End Single Drink Item */}

            {/** Single Drink Item */}
            <View
              style={{
                paddingHorizontal: 15,
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "900",
                    paddingVertical: 20,
                    color: Colors.text,
                  }}
                >
                  Water
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "space-between",
                }}
              >
                {/** Single Drink Option */}
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
                        paddingBottom: 0,
                      }}
                    >
                      Litre
                    </Text>
                  </View>
                  <View style={{ paddingBottom: 0 }}>
                    <NumericInput
                      value={water}
                      onChange={setWater}
                      totalWidth={130}
                      totalHeight={50}
                      minValue={0}
                      maxValue={30}
                      iconSize={25}
                      step={0.5}
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
                {/** End Single Drink Option */}
              </View>
            </View>
            {/** End Single Drink Item */}
          </View>

          <View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              {/** Bottom menu start */}
              {/** Confirm Button */}
              <View
                style={{
                  flex: 1,
                  paddingVertical: 40,
                  borderColor: Colors.Gray,
                  borderWidth: 2,
                  borderRadius: 100,
                  backgroundColor: Colors.green,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={confirmPressed}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      textTransform: "uppercase",
                      fontWeight: "700",
                      color: Colors.White,
                    }}
                  >
                    Confirm
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={resetPressed}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      textTransform: "uppercase",
                      fontWeight: "700",
                      color: Colors.White,
                    }}
                  >
                    Reset
                  </Text>
                </TouchableOpacity>
              </View>
              {/** End Confirm Button */}

              {/** Status Button */}
              <TouchableOpacity
                style={{
                  flex: 1,
                  paddingVertical: 40,
                  borderColor: Colors.Gray,
                  borderWidth: 2,
                  borderRadius: 100,
                  backgroundColor: Colors.green,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: Colors.White,
                  }}
                >
                  Status
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: Colors.White,
                  }}
                >
                  {(data && data.status) || "No Orders"}
                </Text>
              </TouchableOpacity>

              {/** End Status Button */}

              {/** Call Button */}

              {/** Confirm Button */}
              <TouchableOpacity
                style={{
                  flex: 1,
                  paddingVertical: 40,
                  borderColor: Colors.Gray,
                  borderWidth: 2,
                  borderRadius: 100,
                  backgroundColor: Colors.green,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
                onPress={handleCall}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: Colors.White,
                  }}
                >
                  Call Button
                </Text>
              </TouchableOpacity>
              {/** End Confirm Button */}

              {/** End Call Button */}

              <ProfileInfo navigation={navigation} />
              {/** Bottom menu end */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
