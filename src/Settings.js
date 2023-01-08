import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Colors from "../components/Color";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./state/Reducers/user";
import uuid from "react-native-uuid";

const Settings = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setValue("image", result.uri);
    }
  };

  const handleUploadPhoto = () => {
    console.log("uploading..");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      roomNo: user.roomNo || null,
      image: user.image || null,
    },
  });

  const onSubmit = (data) => {
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.roomNo === "" ||
      watch("image") === null
    ) {
      Alert.alert("Error", "Please fill all the fields", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    dispatch(
      register({
        user: {
          firstName: data.firstName,
          lastName: data.lastName,
          roomNo: data.roomNo,
          image: watch("image"),
          department: "CSE",
          userId: 2,
        },
      })
    );
    Alert.alert("Success", "Your profile has been updated", [
      { text: "OK", onPress: () => navigation.navigate("Home") },
    ]);
  };

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.Gray,
      }}
    >
      <SafeAreaView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: Colors.Middark,
            borderRadius: 20,
            padding: 40,
            borderBottomColor: Colors.Dark,
            borderBottomWidth: 2,
          }}
        >
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={user.firstName ? user.firstName : "First Name"}
                  placeholderTextColor={Colors.text}
                />
              )}
              name="firstName"
            />
            {errors.firstName && (
              <Text style={{ color: Colors.text }}>This is required.</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={user.lastName ? user.lastName : "Last Name"}
                  placeholderTextColor={Colors.text}
                />
              )}
              name="lastName"
            />
            {errors.lastName && (
              <Text style={{ color: Colors.text }}>This is required.</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                  placeholder={user.roomNo ? user.roomNo : "Room No"}
                  placeholderTextColor={Colors.text}
                />
              )}
              name="roomNo"
            />
            {errors.roomNo && (
              <Text style={{ color: Colors.text }}>This is required.</Text>
            )}
          </View>
          <View style={{ display: "flex", justifyContent: "center" }}>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {watch("image") && (
                <Image
                  source={{ uri: watch("image") }}
                  style={{ width: 100, height: 100, borderRadius: 300 }}
                />
              )}
              <Button
                color={Colors.White}
                title="Choose Photo"
                onPress={handleChoosePhoto}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.Dark,
            borderRadius: 20,
            paddingVertical: 15,
          }}
        >
          <Button
            color={Colors.White}
            title="Save"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        <View
          style={{
            backgroundColor: Colors.Dark,
            borderRadius: 20,
            paddingVertical: 15,
          }}
        >
          <Button
            color={Colors.White}
            title="Go Back"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 20,
    minWidth: 350,
    paddingVertical: 10,
    color: Colors.text,
  },
});

export default Settings;
