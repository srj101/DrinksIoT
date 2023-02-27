import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Color";
import { useSelector } from "react-redux";

const ProfileInfo = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <React.Fragment>
      <TouchableOpacity
        style={{
          flex: 1,
          paddingVertical: 20,
          backgroundColor: Colors.green,
          borderColor: Colors.text,
          borderWidth: 2,
          borderRadius: 100,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Settings")}
      >
        {user?.image ? (
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 300,
              borderColor: Colors.Middark,
              borderWidth: 2,
            }}
            source={{ uri: user["image"] }}
          />
        ) : (
          <Text style={{ color: Colors.text }}>No Image</Text>
        )}
        <Text
          style={{
            fontSize: 18,
            fontWeight: "900",
            color: Colors.text,
          }}
        >
          {user.firstName} {user.lastName}
        </Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default ProfileInfo;
