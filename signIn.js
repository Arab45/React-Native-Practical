import React, { useState } from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-web";

const arrow = require("./assets/icon.png");

const cb = () => {
  console.log("sign up!");
};

export default function App() {
  let { email, setEmail } = useState("");
  let { password, setPassword } = useState("");
  return (
    <View style={style.header}>
      <View style={style.headerCont}>
        <Image source={arrow} style={{ height: 20, width: 20 }} />
        <Text style={style.parentText}>Sign In</Text>
      </View>
      <View>
        <Text style={style.label}>E-mail</Text>
        <TextInput
          placeholder="Example@gmail.com"
          value={email}
          onChange={setEmail}
          style={style.emailInput}
        />
      </View>
      <View>
        <Text style={style.label}>Password</Text>
        <TextInput
          placeholder="Password"
          value={password}
          onChange={setPassword}
          style={style.emailInput}
        />
      </View>
      <Pressable onPress={cb} style={style.button}>
        <Text style={style.buttonText}>Sign In</Text>
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <View style={{ height: 2, width: 90, backgroundColor: "#ddd" }}></View>
        <View>
          <Text style={{ color: "#273991", fontWeight: "400" }}>
            Or sign in with
          </Text>
        </View>
        <View
          style={{ height: 2, width: 90, backgroundColor: "#ddd", gap: 8 }}
        ></View>
      </View>
      <View style={style.google}>
        <Image
          source={{
            uri: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-white-icon.png",
          }}
          style={style.imageStyle}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#273991" }}>Don't have an account?</Text>
        <Text style={{ fontSize: 17, fontWeight: "400", color: "#273991" }}>
          Sign Up
        </Text>
      </View>
    </View>
  );
}

//space-between

const style = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    // alignItems: "center",
    maxWidth: 310,
    margin: "auto",
    // justifyContent: 'center',
    marginTop: 64,
    gap: 24,
  },
  headerCont: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    width: "100%",
    // paddingLeft: 20,
  },
  parentText: {
    fontSize: 26,
    fontWeight: "500",
    color: "#4F63AC",
  },
  emailInput: {
    // backgroundColor: '#fff',
    // width: 303,
    // height: 86,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#8D9BB5",
  },
  label: {
    color: "#4F63AC",
    fontSize: 18,
    marginBottom: 8
  },
  button: {
    backgroundColor: "#4F63AC",
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  google: {
    backgroundColor: "#404040",
    paddingVertical: 15,
    width: 142,
    alignItems: "center",
    borderRadius: 15,
    margin: 'auto'
  },
  imageStyle: {
    height: 20,
    width: 20,
  },
});