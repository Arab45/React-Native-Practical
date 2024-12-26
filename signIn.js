import React, { useState } from "react";
import { Text, View, Image, StyleSheet, Pressable, TextInput, StatusBar } from "react-native";

const arrow = require("./assets/icon.png");



export default function Login() {
  let { email, setEmail } = useState("");
  let { password, setPassword } = useState("");

  const cb = () => {
    console.log("sign up!");
  };


  return (
    <View style={style.header}>
      <View style={style.headerCont}>
        <Image source={arrow} style={{ height: 20, width: 20 }} />
        <Text style={style.parentText}>Sign In</Text>
        <Text></Text>
      </View>
      <View style={style.centercontainer}>
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
    paddingVertical: StatusBar.currentHeight,
    paddingHorizontal: 20,
    gap: 50,
  },
  headerCont: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20
  },
  centercontainer: {
    gap: 24,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  parentText: {
    fontSize: 26,
    fontWeight: "500",
    color: "#4F63AC",
  },
  emailInput: {
    height: 64,
    paddingVertical: 20,
    paddingHorizontal: 20,
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