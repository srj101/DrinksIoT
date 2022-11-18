import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Colors from "../Color";

const Drink = ({ item }) => {
  const { name } = item;
  return (
    <View
      style={{
        backgroundColor: Colors.Middark,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        paddingHorizontal: 30,
        borderBottomColor: Colors.Dark,
        borderBottomWidth: 2,
      }}
    >
      <View>
        <Text style={{ color: Colors.White }}>{name}</Text>
      </View>
      <View
        style={{ display: "flex", justifyContent: "center", flexBasis: "50%" }}
      >
        {/** Button */}
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View>
            <Text>Sugar Daddy</Text>
          </View>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: Colors.White,
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: Colors.White,
                }}
              >
                0
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: Colors.White,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/** Button */}
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View>
            <Text>Mild Daddy</Text>
          </View>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: Colors.White,
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: Colors.White,
                }}
              >
                0
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: Colors.White,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/** Button */}
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View>
            <Text>No Sugar Daddy</Text>
          </View>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: Colors.White,
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: Colors.White,
                }}
              >
                0
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: Colors.White,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Drink;
